import { Link } from "react-router-dom";

export default function TolovTartibi() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-10 py-16">
      <Link to="/pullik-xizmatlar" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline mb-8">
        <i className="fa-solid fa-arrow-left"></i>
        Pullik xizmatlarga qaytish
      </Link>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl flex-shrink-0">
          <i className="fa-solid fa-money-check-dollar"></i>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900">To'lov tartibi</h1>
      </div>

      <p className="text-gray-500 mb-6">
        To'lovlarni qanday amalga oshirish kerakligi — bank rekvizitlari yoki elektron to'lov tizimlari orqali.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="border border-blue-100 rounded-xl p-5 shadow-sm bg-white">
          <p className="font-semibold text-gray-900 mb-2"><i className="fa-solid fa-building-columns mr-2 text-blue-700"></i>Bank rekvizitlari orqali</p>
          <p className="text-sm text-gray-500">To'lov filialning bank hisob raqamiga naqd pulsiz o'tkazma orqali amalga oshiriladi. Rekvizitlar kassada yoki filial buxgalteriyasida beriladi.</p>
        </div>
        <div className="border border-blue-100 rounded-xl p-5 shadow-sm bg-white">
          <p className="font-semibold text-gray-900 mb-2"><i className="fa-solid fa-mobile-screen-button mr-2 text-blue-700"></i>Elektron to'lov tizimlari orqali</p>
          <p className="text-sm text-gray-500">To'lovni Payme, Click yoki boshqa elektron to'lov tizimlari orqali amalga oshirish mumkin. To'lov cheki murojaat hujjatlariga ilova qilinadi.</p>
        </div>
      </div>
    </div>
  );
}
