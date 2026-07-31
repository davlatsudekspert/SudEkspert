import { Link } from "react-router-dom";

const turlar = [
  "Qizlik iffatini tekshirish",
  "Qon mavjudligini qog'ozda xromatografiya usuli bilan aniqlash",
  "Qon mavjudligini silufol plastinkasida mikroxromatografiya usuli bilan aniqlash",
  "Qonning tur mansubligini Chistovich–Ulengut pretsipitatsiya reaksiyasi bilan aniqlash",
  "Oqsillarning tur mansubligini agar usulida aniqlash",
  "Shiff usulida, ABO sistemasi bo'yicha guruh mansubligini aniqlash va rezus omilini aniqlash",
  "Qon dog'larining guruh mansubligini absorbsiya–elyutsiya reaksiyasi bilan aniqlash",
  "Agglyutininlarni Lyatessu usuli bo'yicha qoplovchi oynachalar usulida aniqlash",
  "Seropyan usulida spermatozoidlarning mavjudligini aniqlash",
  "Sperma dog'larida guruh mansubligini miqdoriy absorbsiya reaksiyasi bilan aniqlash",
  "Sperma dog'larida antigenlarni absorbsiya–elyutsiya reaksiyasi bilan aniqlash",
  "Jismoniy va yuridik shaxslardan keltirilgan qon tarkibida etil spirtini aniqlash",
  "Kislotali xususiyatli psixoaktiv moddalarni biologik suyuqlikda yupqa qatlamli xromatografiya usulida aniqlash",
  "Biologik suyuqlikdarda 1,4-benzodiazepin hosilalarini yupqa qatlamli xromatografiya usulida aniqlash",
  "Fenotiazin hosilalarini aniqlash",
  "Siydikda nashani yupqa qatlamli xromatografiya usulida aniqlash",
  "Simobni aniqlash",
  "Biologik suyuqlikdarda opiatlarni yupqa qatlamli xromatografiya usulida aniqlash",
  "Biologik suyuqlikdarda asos xususiyatli moddalarni yupqa qatlamli xromatografiya usulida aniqlash",
  "Ekspress test yordamida siydikda psixoaktiv moddalarni aniqlash",
  "Qonda is gazini (karboksigemoglobin) aniqlash",
  "Biopsiya va autopsiya materiallarini gistologik tekshirish",
  "Ko'krak qafasi va boshqa suyaklarning rentgenografiyasi (1 ko'rinishda)",
  "Ichki a'zolarni alohida tekshirish",
  "Ichki a'zolar va skelet suyaklarini alohida tekshirish",
  "Murdalarni sun'iy saqlash (balzamatatsiya) va kosmetik xizmatlar (kafanlash)",
  "Qarindoshlar iltimosiga ko'ra murdalarni saqlash narx bir soat uchun amal qiladi",
  "Bir yillik hujjatlarni arxivdan aniqlash",
  "Murdani manziliga eltib berish (Damas) narx bir kilometr uchun amal qiladi",
  "Yoshni aniqlash",
  "Bachadon va bachadon qo'shimchalari ultratovush tekshiruvi transabdominal",
  "Bachadon va bachadon qo'shimchalari ultratovush tekshiruvi transabdominal qon oqimini miqdoriy baholash bilan",
  "Bachadon va bachadon qo'shimchalari ultratovush tekshiruvi transvaginal",
  "Bachadon va bachadon qo'shimchalari ultratovush tekshiruvi transvaginal qon oqimini miqdoriy baholash bilan",
  "Tuxumdonlar ultratovush tekshiruvi transvaginal 3D (4D) rejimida",
  "Bachadon ultratovush tekshiruvi transvaginal 3D (4D) rejimida",
  "Bachadon va tuxumdonlar tomirlari ultratovush tekshiruvi transvaginal",
  "Bachadon, bachadon qo'shimchalari va homila (embrion)/homilalar (embrionlar) homiladorlikning birinchi trimestrida skrening muddatlaridan tashqarida transabdominal ultratovush tekshiruvi",
  "Homiladorlikning uchinchi trimestrida ultratovush tekshiruvi transabdominal",
  "Homiladorlikning ikkinchi trimestrida skrening muddatlaridan tashqarida ultratovush tekshiruvi transabdominal",
  "Bachadon bo'yni uzunligi ultratovush aniqlash transvaginal",
  "Tuxumdonlar ultratovush tekshiruvi transvaginal follikulometriya maqsadida",
];

export default function EkspertizaTurlari() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-10 py-16">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline mb-8">
        <i className="fa-solid fa-arrow-left"></i>
        Menyuga qaytish
      </Link>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl flex-shrink-0">
          <i className="fa-solid fa-list-ul"></i>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900">Ekspertiza turlari</h1>
      </div>

      <p className="text-gray-500 mb-6">
        Respublika sud-tibbiy ekspertiza markazining Andijon filiali tomonidan amalga oshiriladigan ekspertiza turlari.
      </p>

      <div className="overflow-x-auto border border-blue-100 rounded-xl shadow-sm bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-800 text-white text-left">
              <th className="px-5 py-3 font-semibold">№</th>
              <th className="px-5 py-3 font-semibold">Ekspertiza turi</th>
            </tr>
          </thead>
          <tbody>
            {turlar.map((tur, i) => (
              <tr key={i} className="border-b border-gray-100 hover:bg-blue-50">
                <td className="px-5 py-3 text-gray-500">{i + 1}</td>
                <td className="px-5 py-3 text-gray-800">{tur}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400 mt-3">Batafsil ma'lumot uchun filial bilan bog'laning.</p>
    </div>
  );
}
