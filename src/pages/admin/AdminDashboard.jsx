import { useState, useEffect, useRef } from "react";
import { supabase } from "../../lib/supabase";
import { listAppeals, updateAppealStatus } from "../../lib/appeals";
import { loadNews, addNews, deleteNews } from "../../data/newsStore";
import AdminLogin from "./AdminLogin";

const MAX_IMAGE_MB = 5;
const MAX_IMAGES = 3;
const MAX_VIDEO_MB = 50;

function AppealsTab() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

  useEffect(() => {
    listAppeals().then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  async function changeStatus(id, status) {
    if (updatingId) return;
    setUpdatingId(id);
    try {
      await updateAppealStatus(id, status);
      setItems((list) => list.map((i) => (i.id === id ? { ...i, status } : i)));
    } finally {
      setUpdatingId(null);
    }
  }

  if (loading) return <p className="text-sm text-gray-400">Yuklanmoqda...</p>;
  if (!items.length) return <p className="text-sm text-gray-400">Murojaatlar yo'q</p>;

  const isUpdating = (id) => updatingId === id;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border border-gray-100 rounded-xl overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Ism</th>
            <th className="p-3 text-left">Telefon</th>
            <th className="p-3 text-left">Turi</th>
            <th className="p-3 text-left">Matn</th>
            <th className="p-3 text-left">Holat</th>
            <th className="p-3 text-left">Amal</th>
          </tr>
        </thead>
        <tbody>
          {items.map((it) => (
            <tr key={it.id} className="border-t border-gray-100">
              <td className="p-3 font-semibold">{it.id}</td>
              <td className="p-3">{it.name}</td>
              <td className="p-3">{it.phone}</td>
              <td className="p-3">{it.type}</td>
              <td className="p-3 max-w-xs truncate">{it.message}</td>
              <td className="p-3">
                <span
                  className={`inline-block text-xs font-semibold px-2 py-1 rounded-full ${
                    it.status === "Qabul qilindi"
                      ? "bg-green-100 text-green-700"
                      : it.status === "Rad etildi"
                        ? "bg-red-100 text-red-700"
                        : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {it.status}
                </span>
              </td>
              <td className="p-3">
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <button
                    onClick={() => changeStatus(it.id, "Qabul qilindi")}
                    disabled={isUpdating(it.id)}
                    className={`flex items-center gap-1 text-xs font-semibold rounded-full px-3 py-1.5 transition disabled:opacity-50 ${
                      it.status === "Qabul qilindi"
                        ? "bg-green-600 text-white"
                        : "bg-green-50 text-green-700 hover:bg-green-600 hover:text-white"
                    }`}
                    title="Qabul qilingan deb tasdiqlash"
                  >
                    <i className={`fa-solid ${isUpdating(it.id) ? "fa-spinner fa-spin" : "fa-check"}`}></i>
                    Qabul
                  </button>
                  <button
                    onClick={() => changeStatus(it.id, "Ko'rib chiqilmoqda")}
                    disabled={isUpdating(it.id)}
                    className={`flex items-center gap-1 text-xs font-semibold rounded-full px-3 py-1.5 transition disabled:opacity-50 ${
                      it.status === "Ko'rib chiqilmoqda"
                        ? "bg-amber-500 text-white"
                        : "bg-amber-50 text-amber-700 hover:bg-amber-500 hover:text-white"
                    }`}
                    title="Ko'rib chiqilmoqda deb belgilash"
                  >
                    <i className={`fa-solid ${isUpdating(it.id) ? "fa-spinner fa-spin" : "fa-eye"}`}></i>
                    Ko'rib chiqilmoqda
                  </button>
                  <button
                    onClick={() => changeStatus(it.id, "Bajarildi")}
                    disabled={isUpdating(it.id)}
                    className={`flex items-center gap-1 text-xs font-semibold rounded-full px-3 py-1.5 transition disabled:opacity-50 ${
                      it.status === "Bajarildi"
                        ? "bg-blue-600 text-white"
                        : "bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white"
                    }`}
                    title="Bajarilgan deb belgilash"
                  >
                    <i className={`fa-solid ${isUpdating(it.id) ? "fa-spinner fa-spin" : "fa-circle-check"}`}></i>
                    Bajarildi
                  </button>
                  <button
                    onClick={() => changeStatus(it.id, "Rad etildi")}
                    disabled={isUpdating(it.id)}
                    className={`flex items-center gap-1 text-xs font-semibold rounded-full px-3 py-1.5 transition disabled:opacity-50 ${
                      it.status === "Rad etildi"
                        ? "bg-red-600 text-white"
                        : "bg-red-50 text-red-700 hover:bg-red-600 hover:text-white"
                    }`}
                    title="Rad etilgan deb tasdiqlash"
                  >
                    <i className={`fa-solid ${isUpdating(it.id) ? "fa-spinner fa-spin" : "fa-xmark"}`}></i>
                    Rad
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function NewsTab() {
  const [items, setItems] = useState([]);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [toast, setToast] = useState(null);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [full, setFull] = useState("");
  const [date, setDate] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [videoFile, setVideoFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [dragActive, setDragActive] = useState(false);

  const fileInputRef = useRef(null);
  const videoInputRef = useRef(null);

  function refresh() {
    loadNews().then(setItems);
  }

  useEffect(refresh, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2800);
    return () => clearTimeout(t);
  }, [toast]);

  const resetForm = () => {
    setTitle("");
    setDesc("");
    setFull("");
    setDate("");
    setImageFiles([]);
    setImagePreviews([]);
    setVideoFile(null);
    setErrors({});
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
  };

  const removeVideo = () => {
    setVideoFile(null);
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

  async function handleAdd(e) {
    e.preventDefault();
    if (!validate()) return;
    setSaving(true);
    try {
      const now = new Date();
      const today = `${String(now.getDate()).padStart(2, "0")}.${String(now.getMonth() + 1).padStart(2, "0")}.${now.getFullYear()}`;
      await addNews({
        title: title.trim(),
        desc: desc.trim(),
        full: full.trim() || desc.trim(),
        date: date.trim() || today,
        image: imageFiles[0] || null,
        image2: imageFiles[1] || null,
        image3: imageFiles[2] || null,
        video: videoFile || null,
      });
      resetForm();
      refresh();
      setToast({ type: "success", text: "Yangilik muvaffaqiyatli qo'shildi" });
    } catch {
      setToast({ type: "error", text: "Yangilik qo'shishda xatolik yuz berdi" });
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(item) {
    if (!window.confirm(`"${item.title}" yangiligini o'chirishni tasdiqlaysizmi?`)) return;
    setDeletingId(item.id);
    try {
      await deleteNews(item);
      refresh();
      setToast({ type: "success", text: "Yangilik o'chirildi" });
    } catch {
      setToast({ type: "error", text: "Yangilik o'chirishda xatolik yuz berdi" });
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <form onSubmit={handleAdd} noValidate className="flex flex-col gap-4 bg-gray-50 rounded-xl p-5">
        <h3 className="text-lg font-bold text-[#13285A]">
          <i className="fa-solid fa-plus mr-2"></i>Yangi yangilik qo'shish
        </h3>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Rasmlar (ko'pi bilan {MAX_IMAGES} ta)</label>
          <div
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
            onDragLeave={() => setDragActive(false)}
            onDrop={handleDrop}
            className={`cursor-pointer rounded-lg border-2 border-dashed p-4 text-center transition bg-white ${
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
            className={`cursor-pointer rounded-lg border-2 border-dashed p-4 text-center transition bg-white ${
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
            placeholder="Qisqa tavsif"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            rows="2"
            className={`textarea textarea-bordered w-full ${errors.desc ? "textarea-error" : ""}`}
          ></textarea>
          {errors.desc && <p className="text-xs text-red-500 mt-1">{errors.desc}</p>}
        </div>

        <div>
          <textarea
            placeholder="To'liq matn"
            value={full}
            onChange={(e) => setFull(e.target.value)}
            rows="6"
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>

        <input
          type="text"
          placeholder="Sana (bo'sh qoldirilsa bugungi sana qo'yiladi)"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="input input-bordered w-full"
        />

        <button
          type="submit"
          disabled={saving}
          className="bg-[#13285A] text-white rounded-full px-5 py-2.5 text-sm font-semibold hover:opacity-90 active:scale-95 transition disabled:opacity-50"
        >
          {saving ? "Saqlanmoqda..." : "Yangilik qo'shish"}
        </button>
      </form>

      <div className="bg-gray-50 rounded-xl p-5">
        <h3 className="text-lg font-bold text-[#13285A] mb-4">
          <i className="fa-solid fa-list mr-2"></i>Mavjud yangiliklar ({items.length})
        </h3>
        <div className="flex flex-col gap-2 max-h-[420px] overflow-auto pr-1">
          {items.length === 0 ? (
            <p className="text-center text-sm text-gray-400 py-8">Hozircha yangiliklar mavjud emas</p>
          ) : (
            items.map((it) => (
              <div key={it.id} className="flex items-center gap-3 border border-gray-100 rounded-lg p-2 bg-white">
                <img src={it.image} alt="" className="w-14 h-12 object-cover rounded-md flex-shrink-0" />
                <p className="text-sm font-medium text-gray-800 flex-1 line-clamp-2">{it.title}</p>
                <button
                  onClick={() => handleDelete(it)}
                  disabled={deletingId === it.id}
                  className="w-9 h-9 rounded-lg bg-red-50 hover:bg-red-600 text-red-500 hover:text-white flex items-center justify-center transition disabled:opacity-50 flex-shrink-0"
                  title="O'chirish"
                >
                  <i className={`fa-solid ${deletingId === it.id ? "fa-spinner fa-spin" : "fa-trash-can"}`}></i>
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {toast && (
        <div className="toast toast-end z-50">
          <div className={`alert ${toast.type === "success" ? "alert-success" : "alert-error"} text-white text-sm`}>
            <span>{toast.text}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminDashboard() {
  const [authed, setAuthed] = useState(false);
  const [checked, setChecked] = useState(false);
  const [tab, setTab] = useState("appeals");

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setAuthed(!!data.session);
      setChecked(true);
    });
  }, []);

  if (!checked) return null;
  if (!authed) return <AdminLogin onSuccess={() => setAuthed(true)} />;

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-10 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-extrabold text-[#13285A]">Admin panel</h1>
        <button
          onClick={async () => {
            await supabase.auth.signOut();
            setAuthed(false);
          }}
          className="text-sm text-red-500 font-semibold"
        >
          Chiqish
        </button>
      </div>
      <div className="flex gap-4 mb-8 border-b border-gray-100">
        {[
          ["appeals", "Murojaatlar"],
          ["news", "Yangiliklar"],
        ].map(([key, label]) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`pb-3 text-sm font-semibold border-b-2 ${
              tab === key ? "border-[#13285A] text-[#13285A]" : "border-transparent text-gray-400"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      {tab === "appeals" ? <AppealsTab /> : <NewsTab />}
    </div>
  );
}
