import { Link } from "react-router-dom";

export default function SudKimyoBolimi() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-10 py-16">
      <Link to="/tuzilma" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline mb-8">
        <i className="fa-solid fa-arrow-left"></i>
        Tuzilmaga qaytish
      </Link>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl flex-shrink-0">
          <i className="fa-solid fa-flask"></i>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900">Sud-kimyo bo'limi</h1>
      </div>

      <div className="bg-white border border-blue-100 rounded-xl shadow-sm p-6 md:p-8">
        <p className="text-gray-600 leading-relaxed">Biologik ob'ektlarda alkogol, giyohvand moddalar, psixotrop vositalar, kuchli ta'sir qiluvchi va zaharli moddalarni zamonaviy laboratoriya usullari orqali aniqlaydi.</p>
      </div>
    </div>
  );
}
