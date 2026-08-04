import { Link } from "react-router-dom";

const xizmatlar = [
  "Sud-ekspertiza laboratoriyalari faoliyatining ilmiy-texnik darajasi va sud ekspert xulosalarining ishonchliligini oshirishga;",
  "Laboratoriyalar faoliyatini baholashni ob'ektivlashtirishga va sud ekspert xulosalarini sud jarayonida shubhasiz tan olinishiga;",
  "Ashyoviy dalillarni tekshirishni va tashkilotning sud-ekspertlik texnologiyalarini muqobillashtirishga, xususan ekspertiza ijro muddatlarini qisqartirilishiga;",
  "Sud ekspert xulosalarining nafaqat mahalliy sud va tergov jarayonlarida, balki xorijiy va xalqaro sud jarayonlarida ham qo'llanilishiga keng imkoniyat yaratadi.",
];

export default function Akkreditatsiya() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-10 py-16">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline mb-8">
        <i className="fa-solid fa-arrow-left"></i>
        Menyuga qaytish
      </Link>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl flex-shrink-0">
          <i className="fa-solid fa-certificate"></i>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900">Akkreditatsiya va faoliyat sifati</h1>
      </div>

      <p className="text-gray-500 mb-8">Akkreditatsiya bo'yicha ma'lumot</p>

      <div className="flex flex-col gap-8">
        <div className="border border-blue-100 rounded-xl bg-white shadow-sm p-6 md:p-8">
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Sud ekspertlik faoliyati, xususan o'tkazilayotgan tadqiqotlarning davlat va xalqaro standart
            talablariga muvofiqligini aniqlash hamda akkreditatsiyadan o'tkazish muassasa faoliyati sifatini
            oshirishda muhim o'rin tutadi. Akkreditatsiya jarayonlari laboratoriya tomonidan ko'rsatiladigan
            xizmatlar va tadqiqotlarning sifati, vakolati, xolisligi hamda ishonchliligini kafolatlaydi.
          </p>
        </div>

        <div className="border border-blue-100 rounded-xl bg-white shadow-sm p-6 md:p-8">
          <div className="flex items-center gap-3 mb-5">
            <i className="fa-solid fa-list-check text-blue-700"></i>
            <h2 className="text-lg font-bold text-blue-900">Akkreditatsiya jarayonlari quyidagilarga xizmat qiladi</h2>
          </div>
          <ul className="flex flex-col gap-4">
            {xizmatlar.map((x, i) => (
              <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-600 leading-relaxed">
                <span className="w-6 h-6 rounded-full bg-blue-700 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-blue-100 rounded-xl bg-white shadow-sm p-6 md:p-8">
          <div className="flex items-center gap-3 mb-5">
            <i className="fa-solid fa-shield-heart text-blue-700"></i>
            <h2 className="text-lg font-bold text-blue-900">Filialimiz amaliyotida</h2>
          </div>
          <div className="flex flex-col gap-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              Respublika Sud-Tibbiy Ekspertiza Ilmiy-Amaliy Markazi Andijon filialida xodimlar uchun xavfsiz
              mehnat sharoitlarini yaratish, ish o'rinlarini amaldagi qonunchilik talablariga moslashtirish va
              o'tkazilayotgan ekspertizalar sifatini yuqori darajada ta'minlash maqsadida davlat standartlariga
              qat'iy rioya etiladi.
            </p>
            <p>
              Barcha ish o'rinlari mehnat sharoitlari, asbob-uskunalarning xavfsizligi va mehnat muhofazasi
              normalari yuzasidan belgilangan tartibda maxsus attestatsiyadan o'tkazilgan. Ushbu chora-tadbirlar
              filialimizda o'tkaziladigan har bir ekspertiza xulosasining aniqligi va yuqori sifatini
              ta'minlashga xizmat qiladi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
