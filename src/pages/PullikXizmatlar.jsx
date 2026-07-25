export default function PullikXizmatlar() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-10 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#13285A] mb-2 text-center">Pullik xizmatlar</h1>
      <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
        Fuqarolar va tashkilotlar uchun pullik asosda ko'rsatiladigan sud-tibbiy ekspertiza xizmatlari haqida ma'lumot
      </p>

      <div className="mb-14">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-[#13285A] text-white flex items-center justify-center">
            <i className="fa-solid fa-list-ul"></i>
          </div>
          <h2 className="text-xl font-bold text-[#13285A]">Xizmatlar ro'yxati (Narxlar jadvali)</h2>
        </div>
        <div className="overflow-x-auto border border-gray-100 rounded-xl shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#13285A] text-white text-left">
                <th className="px-5 py-3 font-semibold">№</th>
                <th className="px-5 py-3 font-semibold">Ekspertiza turi</th>
                <th className="px-5 py-3 font-semibold">Narxi (so'm)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-5 py-3 text-gray-500">1</td>
                <td className="px-5 py-3 text-gray-800">Sud-tibbiy ekspertiza (tan jarohatlari darajasini aniqlash)</td>
                <td className="px-5 py-3 text-gray-800 font-semibold">300 000</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-5 py-3 text-gray-500">2</td>
                <td className="px-5 py-3 text-gray-800">Sud-biologik (DNK) ekspertizasi</td>
                <td className="px-5 py-3 text-gray-800 font-semibold">850 000</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-5 py-3 text-gray-500">3</td>
                <td className="px-5 py-3 text-gray-800">Sud-kimyoviy ekspertiza</td>
                <td className="px-5 py-3 text-gray-800 font-semibold">450 000</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-5 py-3 text-gray-500">4</td>
                <td className="px-5 py-3 text-gray-800">Sud-gistologik ekspertiza</td>
                <td className="px-5 py-3 text-gray-800 font-semibold">400 000</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-5 py-3 text-gray-500">5</td>
                <td className="px-5 py-3 text-gray-800">Tibbiy kriminalistika ekspertizasi (rentgen, MSKT)</td>
                <td className="px-5 py-3 text-gray-800 font-semibold">550 000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-3">Narxlar tashkilotning tasdiqlangan tariflari asosida belgilanadi va o'zgarishi mumkin.</p>
      </div>

      <div className="mb-14">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-[#13285A] text-white flex items-center justify-center">
            <i className="fa-solid fa-money-check-dollar"></i>
          </div>
          <h2 className="text-xl font-bold text-[#13285A]">To'lov tartibi</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="border border-gray-100 rounded-xl p-5 shadow-sm">
            <p className="font-semibold text-gray-900 mb-2"><i className="fa-solid fa-building-columns mr-2 text-[#13285A]"></i>Bank rekvizitlari orqali</p>
            <p className="text-sm text-gray-500">To'lov filialning bank hisob raqamiga naqd pulsiz o'tkazma orqali amalga oshiriladi. Rekvizitlar kassada yoki filial buxgalteriyasida beriladi.</p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5 shadow-sm">
            <p className="font-semibold text-gray-900 mb-2"><i className="fa-solid fa-mobile-screen-button mr-2 text-[#13285A]"></i>Elektron to'lov tizimlari orqali</p>
            <p className="text-sm text-gray-500">To'lovni Payme, Click yoki boshqa elektron to'lov tizimlari orqali amalga oshirish mumkin. To'lov cheki murojaat hujjatlariga ilova qilinadi.</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-[#13285A] text-white flex items-center justify-center">
            <i className="fa-solid fa-shoe-prints"></i>
          </div>
          <h2 className="text-xl font-bold text-[#13285A]">Murojaat qilish uchun qadamlar</h2>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 border border-gray-100 rounded-xl p-5 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-[#13285A] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Ariza va shaxsni tasdiqlovchi hujjat</p>
              <p className="text-sm text-gray-500">Pullik xizmatdan foydalanish uchun ariza va pasport (yoki shaxsni tasdiqlovchi boshqa hujjat) nusxasi kerak bo'ladi.</p>
            </div>
          </div>
          <div className="flex gap-4 border border-gray-100 rounded-xl p-5 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-[#13285A] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">To'lovni amalga oshirish</p>
              <p className="text-sm text-gray-500">Tanlangan xizmat narxi bo'yicha to'lovni bank rekvizitlari yoki elektron to'lov tizimi orqali amalga oshiring va to'lov chekini saqlab qoling.</p>
            </div>
          </div>
          <div className="flex gap-4 border border-gray-100 rounded-xl p-5 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-[#13285A] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Filialga murojaat qiling</p>
              <p className="text-sm text-gray-500">Ariza, hujjat nusxasi va to'lov cheki bilan filialning qabul bo'limiga yoki kansaleriyasiga murojaat qiling. Manzil: Andijon shahri, Maybog'cha ko'chasi, 63-uy.</p>
            </div>
          </div>
          <div className="flex gap-4 border border-gray-100 rounded-xl p-5 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-[#13285A] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Ekspertiza tayinlanadi</p>
              <p className="text-sm text-gray-500">Hujjatlar ko'rib chiqilgach, ekspertiza tayinlanadi va natijalar qonunchilikda belgilangan muddatlarda beriladi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
