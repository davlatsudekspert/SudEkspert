import { Link } from "react-router-dom";

export default function MurojaatQadamlari() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-10 py-16">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline mb-8">
        <i className="fa-solid fa-arrow-left"></i>
        Menyuga qaytish
      </Link>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl flex-shrink-0">
          <i className="fa-solid fa-shoe-prints"></i>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900">Murojaat qilish uchun qadamlar</h1>
      </div>

      <p className="text-gray-500 mb-6">
        Pullik xizmatdan foydalanish uchun qanday hujjatlar kerakligi va qayerga murojaat qilish zarurligi.
      </p>

      <div className="flex flex-col gap-4">
        <div className="flex gap-4 border border-blue-100 rounded-xl p-5 shadow-sm bg-white">
          <div className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Ariza va shaxsni tasdiqlovchi hujjat</p>
            <p className="text-sm text-gray-500">Pullik xizmatdan foydalanish uchun ariza va pasport (yoki shaxsni tasdiqlovchi boshqa hujjat) nusxasi kerak bo'ladi.</p>
          </div>
        </div>
        <div className="flex gap-4 border border-blue-100 rounded-xl p-5 shadow-sm bg-white">
          <div className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">To'lovni amalga oshirish</p>
            <p className="text-sm text-gray-500">Tanlangan xizmat narxi bo'yicha to'lovni bank rekvizitlari yoki elektron to'lov tizimi orqali amalga oshiring va to'lov chekini saqlab qoling.</p>
          </div>
        </div>
        
        <div className="flex gap-4 border border-blue-100 rounded-xl p-5 shadow-sm bg-white">
          <div className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Ekspertiza tayinlanadi</p>
            <p className="text-sm text-gray-500">Hujjatlar ko'rib chiqilgach, ekspertiza tayinlanadi va natijalar qonunchilikda belgilangan muddatlarda beriladi.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
