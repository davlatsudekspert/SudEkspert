import { Link } from "react-router-dom";

export default function Tuzilma() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-10 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2 text-center">Tuzilma</h1>
      <p className="text-gray-500 text-center mb-12">
        Respublika Sud Tibbiy Ekspertiza Ilmiy-Amaliy Markazi Andijon filialining tashkiliy tuzilmasi
      </p>

      <div className="flex flex-col items-center">
        <Link
          to="/tuzilma/boshliq"
          className="bg-blue-800 hover:bg-blue-900 text-white font-bold rounded-lg px-10 py-4 text-center shadow-md transition cursor-pointer"
        >
          BOSHLIQ
        </Link>

        <div className="w-px h-8 bg-blue-200"></div>
        <div className="hidden md:block w-[70%] h-px bg-blue-200"></div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-px h-8 bg-blue-200 hidden md:block"></div>
            <div className="bg-blue-700 text-white font-semibold rounded-lg px-5 py-4 text-center text-sm shadow-md w-full">
              Boshliq o'rinbosari – tashkiliy uslubiy bo'limi mudiri
            </div>

            <div className="w-px h-8 bg-blue-200"></div>

            <div className="border border-blue-100 rounded-lg p-5 w-full bg-white shadow-sm">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/tuzilma/tashkiliy-uslubiy-bolim" className="flex items-center justify-between text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md px-2 py-1.5 -mx-2 transition">
                    <span>1. Tashkiliy-uslubiy bo'lim</span>
                    <i className="fa-solid fa-chevron-right text-xs text-blue-300"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/tuzilma/sud-ambulatoriya-bolimi" className="flex items-center justify-between text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md px-2 py-1.5 -mx-2 transition">
                    <span>2. Sud-ambulatoriya bo'limi</span>
                    <i className="fa-solid fa-chevron-right text-xs text-blue-300"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/tuzilma/morfologiya-bolimi" className="flex items-center justify-between text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md px-2 py-1.5 -mx-2 transition">
                    <span>3. Morfologiya bo'limi</span>
                    <i className="fa-solid fa-chevron-right text-xs text-blue-300"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/tuzilma/qayta-komission-kompleks-ekspertiza-bolimi" className="flex items-center justify-between text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md px-2 py-1.5 -mx-2 transition">
                    <span>4. Qayta, komission va kompleks ekspertizalar bo'limi</span>
                    <i className="fa-solid fa-chevron-right text-xs text-blue-300 flex-shrink-0 ml-2"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/tuzilma/tibbiy-kriminalistika-bolimi" className="flex items-center justify-between text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md px-2 py-1.5 -mx-2 transition">
                    <span>5. Tibbiy kriminalistika bo'limi</span>
                    <i className="fa-solid fa-chevron-right text-xs text-blue-300"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/tuzilma/sud-biologik-bolim" className="flex items-center justify-between text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md px-2 py-1.5 -mx-2 transition">
                    <span>6. Sud-biologik bo'lim</span>
                    <i className="fa-solid fa-chevron-right text-xs text-blue-300"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/tuzilma/sud-kimyo-bolimi" className="flex items-center justify-between text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md px-2 py-1.5 -mx-2 transition">
                    <span>7. Sud-kimyo bo'limi</span>
                    <i className="fa-solid fa-chevron-right text-xs text-blue-300"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/tuzilma/sud-gistologiya-bolimi" className="flex items-center justify-between text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md px-2 py-1.5 -mx-2 transition">
                    <span>8. Sud gistologiya bo'limi</span>
                    <i className="fa-solid fa-chevron-right text-xs text-blue-300"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/tuzilma/tezkor-ekspert-xizmat-bolimi" className="flex items-center justify-between text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md px-2 py-1.5 -mx-2 transition">
                    <span>9. Tezkor ekspert xizmat bo'limi</span>
                    <i className="fa-solid fa-chevron-right text-xs text-blue-300"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/tuzilma/laborantlar" className="flex items-center justify-between text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md px-2 py-1.5 -mx-2 transition">
                    <span>10. Laborantlar</span>
                    <i className="fa-solid fa-chevron-right text-xs text-blue-300"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="w-px h-8 bg-blue-200 hidden md:block"></div>
            <div className="border border-blue-100 rounded-lg p-5 w-full bg-white shadow-sm">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/tuzilma/moliya-buxgalteriya-xizmati" className="flex items-center justify-between text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md px-2 py-1.5 -mx-2 transition">
                    <span>1. Moliya-buxgalteriya xizmati</span>
                    <i className="fa-solid fa-chevron-right text-xs text-blue-300"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/tuzilma/kadrlar-bolimi" className="flex items-center justify-between text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md px-2 py-1.5 -mx-2 transition">
                    <span>2. Kadrlar bo'limi</span>
                    <i className="fa-solid fa-chevron-right text-xs text-blue-300"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/tuzilma/yuridik-xizmat" className="flex items-center justify-between text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md px-2 py-1.5 -mx-2 transition">
                    <span>3. Yuridik xizmat</span>
                    <i className="fa-solid fa-chevron-right text-xs text-blue-300"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/tuzilma/kansaleriya-arxiv" className="flex items-center justify-between text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md px-2 py-1.5 -mx-2 transition">
                    <span>4. Kansaleriya, Arxiv</span>
                    <i className="fa-solid fa-chevron-right text-xs text-blue-300"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/tuzilma/akt" className="flex items-center justify-between text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md px-2 py-1.5 -mx-2 transition">
                    <span>5. AKT</span>
                    <i className="fa-solid fa-chevron-right text-xs text-blue-300"></i>
                  </Link>
                </li>
                <li className="flex items-center justify-between text-gray-400 px-2 py-1.5 -mx-2">
                  <span>6. Boshqalar</span>
                </li>
              </ul>
            </div>

            <div className="border border-blue-100 rounded-lg p-5 w-full bg-white shadow-sm">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/tuzilma/xojalik-bolimi" className="flex items-center justify-between text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md px-2 py-1.5 -mx-2 transition">
                    <span>1. Xo'jalik bo'limi</span>
                    <i className="fa-solid fa-chevron-right text-xs text-blue-300"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/tuzilma/provizor" className="flex items-center justify-between text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md px-2 py-1.5 -mx-2 transition">
                    <span>2. Provizor</span>
                    <i className="fa-solid fa-chevron-right text-xs text-blue-300"></i>
                  </Link>
                </li>
                <li className="flex items-center justify-between text-gray-400 px-2 py-1.5 -mx-2">
                  <span>3. Boshqalar</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
