import { Link } from "react-router-dom";

const laborantlar = [
  { name: "Uraimova Sadoqatxon Marufjonovna", role: "Filialning bosh hamshira-laboranti" },
  { name: "Baubayeva Odinaxon Numanovna", role: "Sud-ambulatoriya bo'limi laboranti" },
  { name: "Teshaboyeva Shoxista Djamaldinovna", role: "Sud-biologiya bo'limi laboranti" },
  { name: "Teshaboyeva Dildora Turg'unovna", role: "Sud-biologiya bo'limi laboranti" },
  { name: "Hasanov Qutbidin Ahmadaliyevich", role: "Sud-biologiya bo'limi laboranti" },
  { name: "Yusupova Nargizaxon Rahmatullayevna", role: "Sud-biologiya bo'limi laboranti" },
  { name: "Usmonov Azizbek Anvarjon o'g'li", role: "Sud-biologiya bo'limi laboranti" },
  { name: "Pulatova Alyona Anatolyevna", role: "Sud-kimyo bo'limi laboranti" },
  { name: "Ergasheva Muyassar Abdullayevna", role: "Sud-kimyo bo'limi laboranti" },
  { name: "Isakova Minojat Norpulatovna", role: "Sud-kimyo bo'limi laboranti" },
  { name: "Umarova Yulduzoy Bohodir qizi", role: "Sud-kimyo bo'limi laboranti" },
  { name: "Jarqinboyeva Gulmira Bostonboy qizi", role: "Sud-kimyo bo'limi laboranti" },
  { name: "Muydinova Saida Togonbayevna", role: "Sud-gistologiya bo'limi laboranti" },
  { name: "Hamraqulova Madina Qudratillo qizi", role: "Sud-gistologiya bo'limi laboranti" },
  { name: "Ahmadjonova Madina Valijon qizi", role: "Sud-gistologiya bo'limi laboranti" },
  { name: "Voxidova (Qahhorova) Nodira Bahtiyorjon qizi", role: "Sud-gistologiya bo'limi laboranti" },
  { name: "Mamajonova Shahrizoda Anvarjonovna", role: "Sud-gistologiya bo'limi laboranti" },
  { name: "Arziboyev Doniyorbek Djohongirovich", role: "Tibbiy kriminalistika bo'limi laboranti" },
  { name: "Xusanov Nurillo Qobiljon o'g'li", role: "Tibbiy kriminalistika bo'limi laboranti" },
  { name: "Sobirova Nozima Abdusattarovna", role: "Tibbiy kriminalistika bo'limi laboranti" },
  { name: "Abdumalikov Valijon Alijon o'g'li", role: "Qayta, komissiyon va kompleks ekspertizalar bo'limi laboranti" },
  { name: "Alibekova Dilnoza Hasanovna", role: "Qayta, komissiyon va kompleks ekspertizalar bo'limi laboranti" },
];

export default function Laborantlar() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-10 py-16">
      <Link to="/tuzilma" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline mb-8">
        <i className="fa-solid fa-arrow-left"></i>
        Tuzilmaga qaytish
      </Link>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl flex-shrink-0">
          <i className="fa-solid fa-flask-vial"></i>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900">Laborantlar</h1>
      </div>

      <div className="bg-white border border-blue-100 rounded-xl shadow-sm p-6 md:p-8">
        <p className="text-gray-600 leading-relaxed">
          Laborantlar bo'limi ekspertiza bo'limlari uchun laborator tekshiruvlarni texnik jihatdan ta'minlaydi, namunalarni tayyorlash, asbob-uskunalarni ishga tayyorlash va tadqiqot natijalarini qayd etish ishlarini olib boradi.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-bold text-blue-900 mb-4">Xodimlar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {laborantlar.map((item, i) => (
            <div key={i} className="border border-blue-100 rounded-xl p-4 bg-white shadow-sm flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-300 text-xl flex-shrink-0">
                <i className="fa-solid fa-user"></i>
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                <p className="text-xs text-gray-500 mb-1">{item.role}</p>
                <span className="text-[11px] font-medium bg-gray-50 text-gray-500 rounded-full px-2 py-0.5">Laborant</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
