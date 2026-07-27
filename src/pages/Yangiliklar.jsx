import { useState, useRef, useEffect } from "react";
import { loadNews, saveNews } from "../data/newsStore";

const MAX_IMAGE_MB = 5;

// ESLATMA: bu tekshiruv faqat oddiy foydalanuvchini to'xtatish uchun —
// HAQIQIY xavfsizlik emas. Qiymat hash qilingan (ochiq matnda emas) va
// urinishlar cheklangan, lekin baribir bu client-side (brauzer) tekshiruvi —
// u faqat shu UI tugmasini qulflaydi, ma'lumotlarni emas. Chinakam himoya
// uchun serverli (backend) autentifikatsiya kerak.
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
  const [news, setNews] = useState(() => loadNews());
  const [selected, setSelected] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [toast, setToast] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const dialogRef = useRef(null);
  const addDialogRef = useRef(null);
  const deleteDialogRef = useRef(null);
  const aliDialogRef = useRef(null);
  const fileInputRef = useRef(null);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});

  const [aliValue, setAliValue] = useState("");
  const [aliError, setAliError] = useState("");
  const [aliAction, setAliAction] = useState(null); // "add" | "delete"
  const [aliAttempts, setAliAttempts] = useState(0);
  const [aliLockedUntil, setAliLockedUntil] = useState(null);
  const [aliChecking, setAliChecking] = useState(false);

  useEffect(() => {
    saveNews(news);
  }, [news]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2800);
    return () => clearTimeout(t);
  }, [toast]);

  const openModal = (item) => {
    setSelected(item);
    dialogRef.current?.showModal();
  };

  const resetForm = () => {
    setTitle("");
    setDesc("");
    setDate("");
    setImagePreview(null);
    setErrors({});
  };

  const openAliGate = (action) => {
    setAliAction(action);
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
      if (aliAction === "add") {
        resetForm();
        addDialogRef.current?.showModal();
      } else if (aliAction === "delete") {
        deleteDialogRef.current?.showModal();
      }
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

  const processFile = (file) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setErrors((e) => ({ ...e, image: "Faqat rasm fayllarini yuklash mumkin" }));
      return;
    }
    if (file.size > MAX_IMAGE_MB * 1024 * 1024) {
      setErrors((e) => ({ ...e, image: `Rasm hajmi ${MAX_IMAGE_MB}MB dan oshmasligi kerak` }));
      return;
    }
    setErrors((e) => ({ ...e, image: null }));
    setImagePreview(URL.createObjectURL(file));
  };

  const handleImageChange = (e) => processFile(e.target.files?.[0]);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    processFile(e.dataTransfer.files?.[0]);
  };

  const validate = () => {
    const next = {};
    if (!title.trim()) next.title = "Sarlavha kiritilishi shart";
    else if (title.trim().length < 5) next.title = "Sarlavha kamida 5 ta belgidan iborat bo'lsin";
    if (!desc.trim()) next.desc = "Tavsif kiritilishi shart";
    if (!imagePreview) next.image = "Rasm tanlanishi shart";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleAddNews = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const today = new Date().toLocaleDateString("uz-UZ", { year: "numeric", month: "long", day: "numeric" });
    setNews((prev) => [
      {
        id: Date.now(),
        title: title.trim(),
        desc: desc.trim(),
        full: desc.trim(),
        date: date.trim() || today,
        image: imagePreview,
      },
      ...prev,
    ]);
    addDialogRef.current?.close();
    setToast({ type: "success", text: "Yangilik muvaffaqiyatli qo'shildi" });
  };

  const askDelete = (item) => {
    setDeleteTarget(item);
    openAliGate("delete");
  };

  const confirmDelete = () => {
    setNews((prev) => prev.filter((n) => n.id !== deleteTarget.id));
    deleteDialogRef.current?.close();
    setToast({ type: "info", text: "Yangilik o'chirildi" });
    setDeleteTarget(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-16">
      <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#13285A]">Yangiliklar</h1>
          <p className="text-sm text-gray-400 mt-1">{news.length} ta yangilik</p>
        </div>
        <button
          onClick={() => openAliGate("add")}
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
            onClick={() => openAliGate("add")}
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
              <button
                onClick={() => askDelete(item)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition flex items-center justify-center hover:bg-red-600"
                title="O'chirish"
              >
                <i className="fa-solid fa-trash text-xs"></i>
              </button>
              <img src={item.image} alt={item.title} className="w-full h-44 object-cover" />
              <div className="p-5">
                <p className="font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</p>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-400"><i className="fa-regular fa-calendar mr-1"></i>{item.date}</p>
                  <button
                    onClick={() => openModal(item)}
                    className="text-xs font-semibold text-white bg-[#13285A] rounded-full px-4 py-1.5 hover:opacity-90 transition"
                  >
                    Batafsil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <dialog ref={dialogRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box p-0 overflow-hidden">
          {selected && (
            <>
              <img src={selected.image} alt={selected.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <p className="text-xs text-gray-400 mb-2"><i className="fa-regular fa-calendar mr-1"></i>{selected.date}</p>
                <h3 className="text-xl font-bold text-[#13285A] mb-3">{selected.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{selected.full}</p>
              </div>
            </>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <dialog ref={aliDialogRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box max-w-sm">
          <h3 className="text-lg font-bold text-[#13285A] mb-1">
            <i className="fa-solid fa-lock mr-2"></i>PIN kod
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            {aliAction === "delete" ? "Yangilikni o'chirish uchun" : "Yangilik qo'shish uchun"} PIN kod kiriting.
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

      <dialog ref={addDialogRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-lg font-bold text-[#13285A] mb-4">Yangi yangilik qo'shish</h3>
          <form onSubmit={handleAddNews} noValidate className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Rasm</label>
              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                onDragLeave={() => setDragActive(false)}
                onDrop={handleDrop}
                className={`cursor-pointer rounded-lg border-2 border-dashed p-4 text-center transition ${
                  dragActive ? "border-[#13285A] bg-blue-50" : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="w-full h-40 object-cover rounded-lg" />
                ) : (
                  <div className="py-6 text-gray-400">
                    <i className="fa-solid fa-cloud-arrow-up text-2xl mb-2"></i>
                    <p className="text-sm">Rasmni shu yerga tashlang yoki bosing</p>
                    <p className="text-xs mt-1">JPG, PNG — maksimal {MAX_IMAGE_MB}MB</p>
                  </div>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              {errors.image && <p className="text-xs text-red-500 mt-1">{errors.image}</p>}
            </div>

            <div>
              <input
                type="text"
                placeholder="Sarlavha"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={400}
                className={`input input-bordered w-full ${errors.title ? "input-error" : ""}`}
              />
              <div className="flex items-center justify-between mt-1">
                {errors.title ? <p className="text-xs text-red-500">{errors.title}</p> : <span></span>}
                <p className="text-xs text-gray-300">{title.length}/400</p>
              </div>
            </div>

            <div>
              <textarea
                placeholder="Tavsif"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                rows="4"
                maxLength={1000}
                className={`textarea textarea-bordered w-full ${errors.desc ? "textarea-error" : ""}`}
              ></textarea>
              <div className="flex items-center justify-between mt-1">
                {errors.desc ? <p className="text-xs text-red-500">{errors.desc}</p> : <span></span>}
                <p className="text-xs text-gray-300">{desc.length}/1000</p>
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

      <dialog ref={deleteDialogRef} className="modal">
        <div className="modal-box max-w-sm text-center">
          <i className="fa-solid fa-triangle-exclamation text-3xl text-red-500 mb-3"></i>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Yangilikni o'chirasizmi?</h3>
          <p className="text-sm text-gray-500 mb-6">"{deleteTarget?.title}" butunlay o'chiriladi. Bu amalni bekor qilib bo'lmaydi.</p>
          <div className="flex gap-3 justify-center">
            <button onClick={() => deleteDialogRef.current?.close()} className="btn btn-ghost">Bekor qilish</button>
            <button onClick={confirmDelete} className="bg-red-600 text-white rounded-lg px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition">O'chirish</button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {toast && (
        <div className="toast toast-end z-50">
          <div className={`alert ${toast.type === "success" ? "alert-success" : "alert-info"} text-white text-sm`}>
            <span>{toast.text}</span>
          </div>
        </div>
      )}
    </div>
  );
}
