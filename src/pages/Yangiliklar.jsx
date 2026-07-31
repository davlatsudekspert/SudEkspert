import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { loadNews, addNews, deleteNews } from "../data/newsStore";

const MAX_IMAGE_MB = 5;
const MAX_IMAGES = 3;
const MAX_VIDEO_MB = 50;

const ALI_HASH = "7d2cd1ce8ba19614bdd30e5f09c9277e6b01e1e4fd4a715367e4e65955623248";
const MAX_ATTEMPTS = 3;
const LOCKOUT_MS = 30000;

async function digest(text) {
  const data = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export default function Yangiliklar() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const addDialogRef = useRef(null);
  const manageDialogRef = useRef(null);
  const aliDialogRef = useRef(null);
  const fileInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [errors, setErrors] = useState({});

  const [aliValue, setAliValue] = useState("");
  const [aliError, setAliError] = useState("");
  const [aliAttempts, setAliAttempts] = useState(0);
  const [aliLockedUntil, setAliLockedUntil] = useState(null);
  const [aliChecking, setAliChecking] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    loadNews().then((data) => {
      setNews(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2800);
    return () => clearTimeout(t);
  }, [toast]);

  const resetForm = () => {
    setTitle("");
    setDesc("");
    setDate("");
    setImageFiles([]);
    setImagePreviews([]);
    setVideoFile(null);
    setVideoPreview(null);
    setErrors({});
  };

  const openAliGate = () => {
    setAliValue("");
    setAliError("");
    aliDialogRef.current?.showModal();
  };

  const handleAliSubmit = async (e) => {
    e.preventDefault();

    if (aliLockedUntil && Date.now() < aliLockedUntil) {
      const secondsLeft = Math.ceil((aliLockedUntil - Date.now()) / 1000);
      setAliError(`Juda ko'p urinish. ${secondsLeft} soniyadan so'ng qayta urining`);
      return;
    }

    setAliChecking(true);
    const enteredHash = await digest(aliValue);
    setAliChecking(false);

    if (enteredHash === ALI_HASH) {
      setAliAttempts(0);
      setAliLockedUntil(null);
      aliDialogRef.current?.close();
      manageDialogRef.current?.showModal();
      setAliValue("");
      setAliError("");
    } else {
      const nextAttempts = aliAttempts + 1;
      setAliAttempts(nextAttempts);
      setAliValue("");
      if (nextAttempts >= MAX_ATTEMPTS) {
        setAliLockedUntil(Date.now() + LOCKOUT_MS);
        setAliAttempts(0);
        setAliError(`Noto'g'ri PIN kod. ${LOCKOUT_MS / 1000} soniyaga bloklandi`);
      } else {
        setAliError(`Noto'g'ri PIN kod (${nextAttempts}/${MAX_ATTEMPTS})`);
      }
    }
  };

  const processImages = (files) => {
    const next = [];
    for (const file of files) {
      if (!file.type.startsWith("image/")) continue;
      if (file.size > MAX_IMAGE_MB * 1024 * 1024) {
        setErrors((e) => ({ ...e, image: `Rasm hajmi ${MAX_IMAGE_MB}MB dan oshmasligi kerak` }));
        return;
      }
      if (next.length + imageFiles.length >= MAX_IMAGES) {
        setErrors((e) => ({ ...e, image: `Ko'pi bilan ${MAX_IMAGES} ta rasm qo'shish mumkin` }));
        return;
      }
      next.push(file);
    }
    if (next.length === 0) return;
    setErrors((e) => ({ ...e, image: null }));
    setImageFiles((prev) => [...prev, ...next].slice(0, MAX_IMAGES));
    setImagePreviews((prev) => [...prev, ...next.map((f) => URL.createObjectURL(f))].slice(0, MAX_IMAGES));
  };

  const removeImage = (idx) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== idx));
    setImagePreviews((prev) => prev.filter((_, i) => i !== idx));
  };

  const processVideo = (file) => {
    if (!file) return;
    if (!file.type.startsWith("video/")) {
      setErrors((e) => ({ ...e, video: "Faqat video fayllarini yuklash mumkin" }));
      return;
    }
    if (file.size > MAX_VIDEO_MB * 1024 * 1024) {
      setErrors((e) => ({ ...e, video: `Video hajmi ${MAX_VIDEO_MB}MB dan oshmasligi kerak` }));
      return;
    }
    setErrors((e) => ({ ...e, video: null }));
    setVideoFile(file);
    setVideoPreview(URL.createObjectURL(file));
  };

  const removeVideo = () => {
    setVideoFile(null);
    setVideoPreview(null);
  };

  const handleImageChange = (e) => {
    processImages(Array.from(e.target.files || []));
    e.target.value = "";
  };

  const handleVideoChange = (e) => {
    processVideo(e.target.files?.[0]);
    e.target.value = "";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    processImages(Array.from(e.dataTransfer.files || []));
  };

  const validate = () => {
    const next = {};
    if (!title.trim()) next.title = "Sarlavha kiritilishi shart";
    else if (title.trim().length < 5) next.title = "Sarlavha kamida 5 ta belgidan iborat bo'lsin";
    if (!desc.trim()) next.desc = "Tavsif kiritilishi shart";
    if (imagePreviews.length === 0) next.image = "Kamida 1 ta rasm tanlanishi shart";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleAddNews = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    const today = new Date().toLocaleDateString("uz-UZ", { year: "numeric", month: "long", day: "numeric" });
    const item = {
      title: title.trim(),
      desc: desc.trim(),
      full: desc.trim(),
      date: date.trim() || today,
      image: imageFiles[0] || null,
      image2: imageFiles[1] || null,
      image3: imageFiles[2] || null,
      video: videoFile || null,
    };
    try {
      await addNews(item);
      const data = await loadNews();
      setNews(data);
      addDialogRef.current?.close();
      setToast({ type: "success", text: "Yangilik muvaffaqiyatli qo'shildi" });
    } catch {
      setToast({ type: "error", text: "Yangilik qo'shishda xatolik yuz berdi" });
    }
  };

  const handleDelete = async (item) => {
    if (!window.confirm(`"${item.title}" yangiligini o'chirishni tasdiqlaysizmi?`)) return;
    setDeletingId(item.id);
    try {
      await deleteNews(item);
      const data = await loadNews();
      setNews(data);
      setToast({ type: "success", text: "Yangilik o'chirildi" });
    } catch {
      setToast({ type: "error", text: "Yangilik o'chirishda xatolik yuz berdi" });
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 flex items-center justify-center min-h-[50vh]">
        <span className="loading loading-spinner loading-lg text-[#13285A]"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-16">
      <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#13285A]">Yangiliklar</h1>
          <p className="text-sm text-gray-400 mt-1">{news.length} ta yangilik</p>
        </div>
        <button
          onClick={openAliGate}
          className="flex items-center gap-2 bg-[#13285A] text-white rounded-full px-5 py-2.5 text-sm font-semibold hover:opacity-90 active:scale-95 transition"
        >
          <i className="fa-solid fa-plus"></i>
          Yangilik qo'shish
        </button>
      </div>

      {news.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-24 border-2 border-dashed border-gray-200 rounded-xl">
          <i className="fa-regular fa-newspaper text-4xl text-gray-300 mb-4"></i>
          <p className="text-gray-500 mb-4">Hozircha yangiliklar mavjud emas</p>
          <button
            onClick={openAliGate}
            className="text-sm font-semibold text-[#13285A] hover:underline"
          >
            Birinchi yangilikni qo'shing
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              className="group relative border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-[fadein_0.4s_ease]"
            >
              <img src={item.image} alt={item.title} className="w-full h-44 object-cover" />
              {item.video && (
                <span className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-black/50 text-white text-xs font-semibold rounded-full px-3 py-1">
                  <i className="fa-solid fa-video"></i> Video
                </span>
              )}
              <div className="p-5">
                <p className="font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</p>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-400"><i className="fa-regular fa-calendar mr-1"></i>{item.date}</p>
                  <Link
                    to={`/yangiliklar/${item.id}`}
                    className="text-xs font-semibold text-white bg-[#13285A] rounded-full px-4 py-1.5 hover:opacity-90 transition"
                  >
                    Batafsil
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <dialog ref={aliDialogRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box max-w-sm">
          <h3 className="text-lg font-bold text-[#13285A] mb-1">
            <i className="fa-solid fa-lock mr-2"></i>PIN kod
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Yangilik qo'shish uchun PIN kod kiriting.
          </p>
          <form onSubmit={handleAliSubmit} className="flex flex-col gap-3">
            <input
              type="password"
              inputMode="numeric"
              placeholder="PIN kod"
              value={aliValue}
              onChange={(e) => setAliValue(e.target.value)}
              autoFocus
              className={`input input-bordered w-full tracking-widest text-center ${aliError ? "input-error" : ""}`}
            />
            {aliError && <p className="text-xs text-red-500 text-center">{aliError}</p>}
            <div className="modal-action mt-0">
              <button
                type="button"
                onClick={() => aliDialogRef.current?.close()}
                className="btn btn-ghost"
              >
                Bekor qilish
              </button>
              <button
                type="submit"
                disabled={aliChecking}
                className="bg-[#13285A] text-white rounded-lg px-5 py-2.5 text-sm font-semibold hover:opacity-90 active:scale-95 transition disabled:opacity-50"
              >
                {aliChecking ? "Tekshirilmoqda..." : "Tasdiqlash"}
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <dialog ref={manageDialogRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#13285A]">
              <i className="fa-solid fa-gear mr-2"></i>Yangiliklarni boshqarish
            </h3>
            <button
              onClick={() => manageDialogRef.current?.close()}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition"
              title="Yopish"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <button
            onClick={() => { manageDialogRef.current?.close(); resetForm(); addDialogRef.current?.showModal(); }}
            className="w-full flex items-center justify-center gap-2 bg-[#13285A] text-white rounded-lg px-4 py-2.5 text-sm font-semibold hover:opacity-90 active:scale-95 transition mb-4"
          >
            <i className="fa-solid fa-plus"></i>
            Yangi yangilik qo'shish
          </button>

          <div className="flex flex-col gap-2 max-h-80 overflow-y-auto pr-1">
            {news.length === 0 ? (
              <p className="text-center text-sm text-gray-400 py-8">Hozircha yangiliklar mavjud emas</p>
            ) : (
              news.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 border border-gray-100 rounded-lg p-2"
                >
                  <img src={item.image} alt="" className="w-14 h-12 object-cover rounded-md flex-shrink-0" />
                  <p className="text-sm font-medium text-gray-800 flex-1 line-clamp-2">{item.title}</p>
                  <button
                    onClick={() => handleDelete(item)}
                    disabled={deletingId === item.id}
                    className="w-9 h-9 rounded-lg bg-red-50 hover:bg-red-600 text-red-500 hover:text-white flex items-center justify-center transition disabled:opacity-50 flex-shrink-0"
                    title="O'chirish"
                  >
                    <i className={`fa-solid ${deletingId === item.id ? "fa-spinner fa-spin" : "fa-trash-can"}`}></i>
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <dialog ref={addDialogRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-lg font-bold text-[#13285A] mb-4">Yangi yangilik qo'shish</h3>
          <form onSubmit={handleAddNews} noValidate className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Rasmlar (ko'pi bilan {MAX_IMAGES} ta)</label>
              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                onDragLeave={() => setDragActive(false)}
                onDrop={handleDrop}
                className={`cursor-pointer rounded-lg border-2 border-dashed p-4 text-center transition ${
                  dragActive ? "border-[#13285A] bg-blue-50" : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {imagePreviews.length > 0 ? (
                  <div className="grid grid-cols-3 gap-2">
                    {Array.from({ length: MAX_IMAGES }).map((_, i) =>
                      imagePreviews[i] ? (
                        <div key={i} className="relative group/preview">
                          <img src={imagePreviews[i]} alt={`Preview ${i + 1}`} className="w-full h-24 object-cover rounded-lg" />
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); removeImage(i); }}
                            className="absolute top-1 right-1 w-6 h-6 rounded-full bg-black/60 text-white text-xs flex items-center justify-center hover:bg-red-600 transition"
                            title="O'chirish"
                          >
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                        </div>
                      ) : (
                        <div key={i} className="h-24 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-300">
                          <i className="fa-solid fa-plus text-xl"></i>
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <div className="py-6 text-gray-400">
                    <i className="fa-solid fa-cloud-arrow-up text-2xl mb-2"></i>
                    <p className="text-sm">Rasmlarni shu yerga tashlang yoki bosing</p>
                    <p className="text-xs mt-1">JPG, PNG — maksimal {MAX_IMAGE_MB}MB, {MAX_IMAGES} tagacha</p>
                  </div>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="hidden"
              />
              {errors.image && <p className="text-xs text-red-500 mt-1">{errors.image}</p>}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Video (ixtiyoriy)</label>
              <div
                onClick={() => videoInputRef.current?.click()}
                className={`cursor-pointer rounded-lg border-2 border-dashed p-4 text-center transition ${
                  videoFile ? "border-green-300 bg-green-50" : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {videoFile ? (
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <i className="fa-solid fa-video text-2xl text-green-600"></i>
                      <div className="text-left min-w-0">
                        <p className="text-sm font-semibold text-gray-800 truncate">{videoFile.name}</p>
                        <p className="text-xs text-gray-400">{(videoFile.size / (1024 * 1024)).toFixed(1)}MB</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); removeVideo(); }}
                      className="w-7 h-7 rounded-full bg-black/60 text-white text-xs flex items-center justify-center hover:bg-red-600 transition flex-shrink-0"
                      title="O'chirish"
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                ) : (
                  <div className="py-4 text-gray-400">
                    <i className="fa-solid fa-cloud-arrow-up text-2xl mb-2"></i>
                    <p className="text-sm">Videoni tanlash uchun bosing</p>
                    <p className="text-xs mt-1">MP4, WebM — maksimal {MAX_VIDEO_MB}MB</p>
                  </div>
                )}
              </div>
              <input
                ref={videoInputRef}
                type="file"
                accept="video/*"
                onChange={handleVideoChange}
                className="hidden"
              />
              {errors.video && <p className="text-xs text-red-500 mt-1">{errors.video}</p>}
            </div>

            <div>
              <input
                type="text"
                placeholder="Sarlavha"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={500}
                className={`input input-bordered w-full ${errors.title ? "input-error" : ""}`}
              />
              <div className="flex items-center justify-between mt-1">
                {errors.title ? <p className="text-xs text-red-500">{errors.title}</p> : <span></span>}
                <p className="text-xs text-gray-300">{title.length}/500</p>
              </div>
            </div>

            <div>
              <textarea
                placeholder="Tavsif"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                rows="4"
                className={`textarea textarea-bordered w-full ${errors.desc ? "textarea-error" : ""}`}
              ></textarea>
              <div className="flex items-center justify-between mt-1">
                {errors.desc ? <p className="text-xs text-red-500">{errors.desc}</p> : <span></span>}
              </div>
            </div>

            <input
              type="text"
              placeholder="Sana (bo'sh qoldirilsa bugungi sana qo'yiladi)"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input input-bordered w-full"
            />

            <div className="modal-action">
              <button
                type="button"
                onClick={() => addDialogRef.current?.close()}
                className="btn btn-ghost"
              >
                Bekor qilish
              </button>
              <button type="submit" className="bg-[#13285A] text-white rounded-lg px-5 py-2.5 text-sm font-semibold hover:opacity-90 active:scale-95 transition">
                Qo'shish
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {toast && (
        <div className="toast toast-end z-50">
          <div className={`alert ${toast.type === "success" ? "alert-success" : toast.type === "error" ? "alert-error" : "alert-info"} text-white text-sm`}>
            <span>{toast.text}</span>
          </div>
        </div>
      )}
    </div>
  );
}
