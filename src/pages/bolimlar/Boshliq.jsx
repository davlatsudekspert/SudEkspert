import { Link } from "react-router-dom";
import boshliqPhoto from "../../assets/boshliq.jpg";

export default function Boshliq() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-10 py-16">
      <Link to="/tuzilma" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline mb-8">
        <i className="fa-solid fa-arrow-left"></i>
        Tuzilmaga qaytish
      </Link>

      <div className="bg-white border border-blue-100 rounded-xl shadow-sm overflow-hidden">
        <div className="bg-[#13285A] px-6 md:px-10 py-6">
          <p className="text-white/70 text-sm font-semibold tracking-wide">FILIAL RAHBARIYATI</p>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white mt-1">Filial boshlig'i</h1>
        </div>

        <div className="p-6 md:p-10 flex flex-col md:flex-row gap-8">
          <img
            src={boshliqPhoto}
            alt="Yuldashev Ahmadillo Abdug'aniyevich"
            className="w-40 h-52 md:w-48 md:h-60 object-cover rounded-lg border border-blue-100 shadow-sm flex-shrink-0 mx-auto md:mx-0"
          />

          <div className="flex-1">
            <h2 className="text-xl font-bold text-blue-900 mb-1">Yuldashev Ahmadillo Abdug'aniyevich</h2>
            <p className="text-sm text-gray-500 mb-6">
              Respublika Sud Tibbiy Ekspertiza Ilmiy-Amaliy Markazi Andijon filiali boshlig'i
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-0.5">Tug'ilgan yili</p>
                <p className="text-sm text-gray-800">1958-yil</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-0.5">Millati</p>
                <p className="text-sm text-gray-800">O'zbek</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-0.5">Tug'ilgan joyi</p>
                <p className="text-sm text-gray-800">Andijon viloyati, Xo'jaobod tumani</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-0.5">Ma'lumoti</p>
                <p className="text-sm text-gray-800">
                  Oliy — 1981-yil Andijon davlat tibbiyot instituti, "Davolash ishi" yo'nalishi.
                  Tibbiyot fanlari nomzodi (t.f.n.)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
