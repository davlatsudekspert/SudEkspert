import { Link } from "react-router-dom";

export default function NarxlarJadvali() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-10 py-16">
      <Link to="/pullik-xizmatlar" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline mb-8">
        <i className="fa-solid fa-arrow-left"></i>
        Pullik xizmatlarga qaytish
      </Link>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl flex-shrink-0">
          <i className="fa-solid fa-list-ul"></i>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900">Narxlar jadvali</h1>
      </div>

      <p className="text-gray-500 mb-6">
        Fuqarolar uchun ekspertiza turlari va ularning belgilangan narxlari (tashkilotning tasdiqlangan tariflari bo'yicha).
      </p>

      <div className="overflow-x-auto border border-blue-100 rounded-xl shadow-sm bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-800 text-white text-left">
              <th className="px-5 py-3 font-semibold">№</th>
              <th className="px-5 py-3 font-semibold">Ekspertiza turi</th>
              <th className="px-5 py-3 font-semibold">Narxi (so'm)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 hover:bg-blue-50">
              <td className="px-5 py-3 text-gray-500">1</td>
              <td className="px-5 py-3 text-gray-800">Sud-tibbiy ekspertiza (tan jarohatlari darajasini aniqlash)</td>
              <td className="px-5 py-3 text-gray-800 font-semibold">300 000</td>
            </tr>
            <tr className="border-b border-gray-100 hover:bg-blue-50">
              <td className="px-5 py-3 text-gray-500">2</td>
              <td className="px-5 py-3 text-gray-800">Sud-biologik (DNK) ekspertizasi</td>
              <td className="px-5 py-3 text-gray-800 font-semibold">850 000</td>
            </tr>
            <tr className="border-b border-gray-100 hover:bg-blue-50">
              <td className="px-5 py-3 text-gray-500">3</td>
              <td className="px-5 py-3 text-gray-800">Sud-kimyoviy ekspertiza</td>
              <td className="px-5 py-3 text-gray-800 font-semibold">450 000</td>
            </tr>
            <tr className="border-b border-gray-100 hover:bg-blue-50">
              <td className="px-5 py-3 text-gray-500">4</td>
              <td className="px-5 py-3 text-gray-800">Sud-gistologik ekspertiza</td>
              <td className="px-5 py-3 text-gray-800 font-semibold">400 000</td>
            </tr>
            <tr className="hover:bg-blue-50">
              <td className="px-5 py-3 text-gray-500">5</td>
              <td className="px-5 py-3 text-gray-800">Tibbiy kriminalistika ekspertizasi (rentgen, MSKT)</td>
              <td className="px-5 py-3 text-gray-800 font-semibold">550 000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400 mt-3">Narxlar tashkilotning tasdiqlangan tariflari asosida belgilanadi va o'zgarishi mumkin.</p>
    </div>
  );
}
