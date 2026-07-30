import { Link } from "react-router-dom";
import gerbImg from "../../assets/gov.webp";
import bayroqImg from "../../assets/bayroq.png";

export default function DavlatRamzlari() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-10 py-16">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline mb-8">
        <i className="fa-solid fa-arrow-left"></i>
        Bosh sahifaga qaytish
      </Link>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl flex-shrink-0">
          <i className="fa-solid fa-flag"></i>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900">Davlat ramzlari</h1>
      </div>

      <p className="text-gray-500 mb-10">O'zbekiston Respublikasining davlat ramzlari haqida ma'lumot</p>

      <div className="flex flex-col gap-10">
        <div className="border border-blue-100 rounded-xl bg-white shadow-sm p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <i className="fa-solid fa-music text-blue-700"></i>
            <h2 className="text-lg font-bold text-blue-900">Davlat madhiyasi</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-5">
            O'zbekiston Respublikasining Davlat madhiyasi so'zlari shoir Abdulla Oripovga, musiqasi esa
            bastakor Mutal Burhonovga tegishli. Madhiya 1992-yil 10-dekabrda O'zbekiston Respublikasi
            Oliy Kengashi tomonidan tasdiqlangan va davlat mustaqilligi, birligi hamda kelajagiga
            bag'ishlangan.
          </p>
          <audio controls className="w-full">
            <source src="/audio/davlat-madhiyasi.mp3" type="audio/mpeg" />
            Brauzeringiz audio pleerni qo'llab-quvvatlamaydi.
          </audio>
        </div>

        <div className="border border-blue-100 rounded-xl bg-white shadow-sm p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <i className="fa-solid fa-shield-halved text-blue-700"></i>
            <h2 className="text-lg font-bold text-blue-900">Davlat gerbi</h2>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <img src={gerbImg} alt="O'zbekiston Respublikasi Davlat gerbi" className="w-32 h-32 object-contain flex-shrink-0" />
            <p className="text-sm text-gray-600 leading-relaxed">
              O'zbekiston Respublikasining Davlat gerbi 1992-yil 2-iyulda tasdiqlangan. Gerb markazida
              tarovat vodiysi va quyosh tasvirlangan bo'lib, ustida Humo qushi qanot yozgan holda
              tasvirlangan. Gerbning ikki tomonida bug'doy boshoqlari va paxta ochilgan chanoqlari
              o'ralgan, tepasida sakkiz qirrali yulduz ichida yarim oy va yulduz tasvirlangan.
            </p>
          </div>
        </div>

        <div className="border border-blue-100 rounded-xl bg-white shadow-sm p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <i className="fa-solid fa-flag text-blue-700"></i>
            <h2 className="text-lg font-bold text-blue-900">Davlat bayrog'i</h2>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <img
              src={bayroqImg}
              alt="O'zbekiston Respublikasi Davlat bayrog'i"
              className="w-48 h-auto rounded shadow-sm flex-shrink-0 border border-gray-100"
            />
            <p className="text-sm text-gray-600 leading-relaxed">
              O'zbekiston Respublikasi Davlat bayrog'i 1991-yil 18-noyabrda tasdiqlangan. Bayroqda
              ko'k, oq va yashil ranglar qizil ingichka chiziqlar bilan ajratilgan bo'lib, ko'k rang
              osmon va suv, oq rang tinchlik va poklik, yashil rang esa tabiat va unumdorlik ramzidir.
              Yarim oy va o'n ikkita yulduz mustaqillik va milliy qadriyatlarni ifodalaydi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
