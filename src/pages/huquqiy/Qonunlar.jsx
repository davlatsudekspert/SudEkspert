import { Link } from "react-router-dom";

export default function Qonunlar() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-10 py-16">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline mb-8">
        <i className="fa-solid fa-arrow-left"></i>
        Menyuga qaytish
      </Link>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl flex-shrink-0">
          <i className="fa-solid fa-landmark"></i>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900">O'zbekiston Respublikasi Qonunlari</h1>
      </div>

      <div className="flex flex-col gap-3">
        <a
          href="/docs/sud-ekspertlik-qonuni.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-blue-100 rounded-lg p-5 bg-white shadow-sm hover:border-blue-400 hover:bg-blue-50 transition flex items-center justify-between gap-4"
        >
          <div>
            <p className="font-semibold text-gray-900 mb-1">"Sud ekspertizasi to'g'risida"gi O'zbekiston Respublikasi Qonuni</p>
            <p className="text-sm text-gray-500">Sud-ekspertlik faoliyatini tartibga soluvchi asosiy qonun hujjati.</p>
          </div>
          <i className="fa-solid fa-file-pdf text-red-500 text-xl flex-shrink-0"></i>
        </a>
      </div>
    </div>
  );
}
