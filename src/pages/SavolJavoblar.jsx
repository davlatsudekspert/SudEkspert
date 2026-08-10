import { Link } from "react-router-dom";

const faqs = [
{
    q: "Sud-tibbiy ekspertiza qanday tayinlanadi?",
    a: "Sud-tibbiy ekspertiza tergov organi, prokuror, sud yoki qonunda belgilangan boshqa vakolatli shaxsning qarori asosida tayinlanadi. Fuqarolik ishlari bo'yicha esa adliya bilan bog'liq idoralar yoki advokat so'rovi orqali ham tashkil etilishi mumkin.",
  },
  {
    q: "Ekspertiza natijasi qancha muddatda tayyor bo'ladi?",
    a: "Odatiy holatlarda ekspertiza xulosasi 30 kalendar kun ichida beriladi. Murakkab yoki qo'shimcha tadqiqot talab qiladigan holatlarda bu muddat qonunchilikda belgilangan tartibda uzaytirilishi mumkin.",
  },
  {
    q: "Pullik xizmatdan foydalanish uchun qanday hujjatlar kerak?",
    a: "Ariza, shaxsni tasdiqlovchi hujjat nusxasi va to'lov cheki talab qilinadi. Batafsil ma'lumot \"Pullik xizmatlar\" bo'limida keltirilgan.",
  },
  {
    q: "Ekspertiza xulosasiga qanday murojaat qilish mumkin?",
    a: "Agar xulosa asoslantirilmagan yoki uning to'g'riligiga shubha tug'ilsa, qonunchilikda belgilangan tartibda qo'shimcha yoki qayta ekspertiza tayinlanishini so'rab murojaat qilish mumkin.",
  },
  {
    q: "Filialga qanday murojaat qoldirish mumkin?",
    a: "Murojaatni filialning qabul bo'limiga bevosita tashrif buyurib yoki \"Bog'lanish\" bo'limidagi telefon va manzil orqali amalga oshirish mumkin.",
  },
  {
    q: "Fuqarolarning xususiy murojaatlari bo'yicha sud ekspertiza o'tkazish mumkinmi?",
    a: "Protsessual qonunchilikka muvofiq (O'zR JPKning 180-m.) sud ekspertiza o'tkazish uchun tergovchining qarori yoki sudning ajrimi asos bo'la oladi. Shuning uchun fuqarolarning xususiy murojaatlari bo'yicha sud ekspertiza o'tkazilmaydi.",
  },
  {
    q: "Sud ekspertizasi deganda nima tushuniladi?",
    a: "Sud ekspertizasi bu fuqarolik, iqtisodiy, jinoyat va ma'muriy sud ishlarini yuritishda ish holatlarini aniqlashga qaratilgan hamda sud eksperti tomonidan fan, texnika, san'at yoki hunar sohasidagi maxsus bilimlar asosida sud-ekspert tekshirishlarini o'tkazish va xulosa berishdan iborat bo'lgan protsessual harakat.\n\n(O'zbekiston Respublikasi \"SUD EKSPERTIZASI TO'G'RISIDA\"gi Qonuni 3-moddasi)",
  },
  {
    q: "Sud eksperti kim?",
    a: "Sud eksperti bu xulosa berish uchun fan, texnika, san'at yoki hunar sohasida maxsus bilimlarga ega bo'lgan, belgilangan tartibda sud eksperti sifatida tayinlangan jismoniy shaxs.\n\n(O'zbekiston Respublikasi \"SUD EKSPERTIZASI TO'G'RISIDA\"gi Qonuni 3-moddasi)",
  },
  {
    q: "Davlat sud eksperti kim?",
    a: "Davlat sud eksperti bu davlat sud-ekspertiza muassasasining o'z xizmat vazifalarini bajarish tartibida sud ekspertizasini o'tkazuvchi sud eksperti.",
  },
  {
    q: "Sud ekspertining xulosasi qanday hujjat?",
    a: "Sud ekspertining xulosasi (xulosa) — sud eksperti yoki sud ekspertlari komissiyasi tomonidan tuziladigan va sud-ekspert tekshirishlarining olib borilishini va natijalarini aks ettiradigan yozma hujjat.\n\n(O'zbekiston Respublikasi \"SUD EKSPERTIZASI TO'G'RISIDA\"gi Qonuni 3-moddasi)",
  },
  {
    q: "Sud-ekspertlik faoliyatining asosiy prinsiplari nimadan iborat?",
    a: "Qonuniylik, inson huquq va erkinliklariga rioya etilishi, sud ekspertining mustaqilligi, sud-ekspert tekshirishlarining xolisligi, har tomonlamaligi va to'liqligi hamda kasbiy sirni saqlash sud-ekspertlik faoliyatining asosiy prinsiplaridir.\n\n(O'zbekiston Respublikasi \"SUD EKSPERTIZASI TO'G'RISIDA\"gi Qonuni 5-moddasi)",
  },
  {
    q: "Sud ekspertizasini o'tkazishga nimalar asos hisoblanadi?",
    a: "O'zbekiston Respublikasi \"SUD EKSPERTIZASI TO'G'RISIDA\"gi Qonunining 32-moddasiga ko'ra, tergovga qadar tekshiruvni amalga oshiruvchi organ mansabdor shaxsining, surishtiruvchining, tergovchining, prokurorning yoki sudyaning qarori, sudning ajrimi sud ekspertizasini o'tkazish asoslaridir.",
  },
  {
    q: "Sud ekspertizasi qachondan boshlab tayinlangan deb hisoblanadi?",
    a: "Sud ekspertizasi tegishli qaror yoki ajrim chiqarilgan kundan e'tiboran tayinlangan hisoblanadi.\n\n(O'zbekiston Respublikasi \"SUD EKSPERTIZASI TO'G'RISIDA\"gi Qonunining 32-moddasi)",
  },
  {
    q: "Sud ekspertizasi to'g'risidagi qonun hujjatlarini buzganlik uchun javobgarlik bormi?",
    a: "Sud ekspertizasi to'g'risidagi qonun hujjatlarini buzganlikda aybdor shaxslar belgilangan tartibda javobgar bo'ladi.\n\n(O'zbekiston Respublikasi \"SUD EKSPERTIZASI TO'G'RISIDA\"gi Qonunining 54-moddasi)",
  },
];

export default function SavolJavoblar() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-10 py-16">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline mb-8">
        <i className="fa-solid fa-arrow-left"></i>
        Menyuga qaytish
      </Link>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl flex-shrink-0">
          <i className="fa-solid fa-circle-question"></i>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900">Savol-javoblar</h1>
      </div>

      <p className="text-gray-500 mb-8">Ko'p beriladigan savollarga javoblar</p>

      <div className="flex flex-col gap-3">
        {faqs.map((item, i) => (
          <details
            key={i}
            className="group border border-blue-100 rounded-lg bg-white shadow-sm open:shadow-md transition"
          >
            <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none font-semibold text-gray-900">
              <span>{item.q}</span>
              <i className="fa-solid fa-chevron-down text-blue-400 text-sm transition-transform group-open:rotate-180"></i>
            </summary>
            <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed whitespace-pre-line">{item.a}</div>
          </details>
        ))}
      </div>

      <div className="mt-10 border border-blue-100 bg-blue-50 rounded-xl p-6 md:p-8 text-center">
        <p className="font-bold text-blue-900 mb-2">Savolingizga javob topolmadingizmi?</p>
        <p className="text-sm text-gray-600 mb-5">
          "Onlayn murojaat yuborish" bo'limi orqali savolingizni yo'llang yoki "Bog'lanish" sahifasidagi
          telefon va manzil orqali murojaat qiling.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/interfaol-xizmatlar/onlayn-murojaat"
            className="bg-[#13285A] text-white rounded-full px-6 py-2.5 text-sm font-semibold hover:opacity-90 transition"
          >
            <i className="fa-solid fa-paper-plane mr-2"></i>Savol yo'llash
          </Link>
          <Link
            to="/boglanish"
            className="border border-[#13285A] text-[#13285A] rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-white transition"
          >
            Bog'lanish
          </Link>
        </div>
      </div>
    </div>
  );
}
