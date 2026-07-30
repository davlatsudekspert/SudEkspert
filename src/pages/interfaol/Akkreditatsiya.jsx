import { Link } from "react-router-dom";

export default function Akkreditatsiya() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-10 py-16">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline mb-8">
        <i className="fa-solid fa-arrow-left"></i>
        Bosh sahifaga qaytish
      </Link>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl flex-shrink-0">
          <i className="fa-solid fa-certificate"></i>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900">Akkreditatsiya</h1>
      </div>

      <div className="border border-dashed border-gray-200 rounded-xl p-10 text-center text-sm text-gray-400">
        Tez orada to'ldiriladi
      </div>
    </div>
  );
}
