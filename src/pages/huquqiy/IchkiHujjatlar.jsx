import { Link } from "react-router-dom";

export default function IchkiHujjatlar() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-10 py-16">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline mb-8">
        <i className="fa-solid fa-arrow-left"></i>
        Menyuga qaytish
      </Link>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl flex-shrink-0">
          <i className="fa-solid fa-file-shield"></i>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900">Ichki buyruqlar va nizomlar</h1>
      </div>

      <div className="flex flex-col gap-3">
        <div className="border border-blue-100 rounded-lg p-5 bg-white shadow-sm">
          <p className="font-semibold text-gray-900 mb-1">Markazning nizomi</p>
          <p className="text-sm text-gray-500">Markaz o'z faoliyatini qanday yuritishini belgilovchi hujjat.</p>
        </div>
        <div className="border border-blue-100 rounded-lg p-5 bg-white shadow-sm">
          <p className="font-semibold text-gray-900 mb-1">Ekspertiza tayinlash tartibi</p>
          <p className="text-sm text-gray-500">Kimlar, qanday tartibda va qancha muddatda ekspertiza tayinlashi mumkinligi haqida ma'lumot.</p>
        </div>
      </div>
    </div>
  );
}
