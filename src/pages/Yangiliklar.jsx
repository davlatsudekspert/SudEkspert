import { useState, useRef, useEffect } from "react";

const initialNews = [
  {
    id: 1,
    title: "Filialda o'quv-seminar bo'lib o'tdi",
    desc: "Sud-tibbiy ekspertiza sohasidagi yangi yondashuv va usullar muhokama qilindi.",
    full: "Filial xodimlari uchun tashkil etilgan o'quv-seminarda sud-tibbiy ekspertiza sohasidagi zamonaviy yondashuvlar, xalqaro tajriba va yangi tadqiqot usullari muhokama qilindi. Tadbirda yetakchi mutaxassislar ma'ruza qilib, amaliy mashg'ulotlar o'tkazdi.",
    date: "2024-yil 24-may",
    image: "https://picsum.photos/seed/seminar24/700/450",
  },
  {
    id: 2,
    title: "Yangi laborator uskunalar foydalanishga topshirildi",
    desc: "Zamonaviy uskunalar yordamida ekspertiza sifatini yanada oshirish maqsad qilingan.",
    full: "Filial laboratoriyasiga zamonaviy tadqiqot uskunalari o'rnatildi. Yangi uskunalar molekulyar-genetik va biokimyoviy tekshiruvlar sifatini oshirish, natijalarni tezroq va aniqroq olish imkonini beradi.",
    date: "2024-yil 20-may",
    image: "https://picsum.photos/seed/lab20/700/450",
  },
  {
    id: 3,
    title: "Aholi uchun ochiq eshiklar kuni",
    desc: "Fuqarolar bilan ochiq muloqot va tushuntirish ishlari o'tkazildi.",
    full: "Filialda aholi uchun ochiq eshiklar kuni tashkil etildi. Fuqarolar sud-tibbiy ekspertiza xizmatlari, ekspertiza tayinlash tartibi va zarur hujjatlar bo'yicha savollariga javob oldilar.",
    date: "2024-yil 15-may",
    image: "https://picsum.photos/seed/openday15/700/450",
  },
];

const STORAGE_KEY = "andijon-sud-ekspertiza-news";
const MAX_IMAGE_MB = 5;

export default function Yangiliklar() {
  const [news, setNews] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : initialNews;
    } catch {
      return initialNews;
    }
  });
  const [selected, setSelected] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [toast, setToast] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const dialogRef = useRef(null);
  const addDialogRef = useRef(null);
  const deleteDialogRef = useRef(null);
  const fileInputRef = useRef(null);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(news));
    } catch {
      // localStorage to'la bo'lishi mumkin, e'tiborsiz qoldiramiz
    }
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

  const openAddModal = () => {
    resetForm();
    addDialogRef.current?.showModal();
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
    deleteDialogRef.current?.showModal();
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
          onClick={openAddModal}
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
            onClick={openAddModal}
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
                maxLength={100}
                className={`input input-bordered w-full ${errors.title ? "input-error" : ""}`}
              />
              <div className="flex items-center justify-between mt-1">
                {errors.title ? <p className="text-xs text-red-500">{errors.title}</p> : <span></span>}
                <p className="text-xs text-gray-300">{title.length}/100</p>
              </div>
            </div>

            <div>
              <textarea
                placeholder="Tavsif"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                rows="4"
                maxLength={400}
                className={`textarea textarea-bordered w-full ${errors.desc ? "textarea-error" : ""}`}
              ></textarea>
              <div className="flex items-center justify-between mt-1">
                {errors.desc ? <p className="text-xs text-red-500">{errors.desc}</p> : <span></span>}
                <p className="text-xs text-gray-300">{desc.length}/400</p>
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
