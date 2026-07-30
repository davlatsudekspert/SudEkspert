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
];

export default function SavolJavoblar() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-10 py-16">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline mb-8">
        <i className="fa-solid fa-arrow-left"></i>
        Bosh sahifaga qaytish
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
            <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">{item.a}</div>
          </details>
        ))}
      </div>
    </div>
  );
}
