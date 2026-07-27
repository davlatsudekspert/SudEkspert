import dmed from "../assets/dmed.webp"
import mygov from "../assets/mygov.webp"
import gov from "../assets/gov.webp"
export default function Footer() {
  return (
    <footer className="bg-[#13285A] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-10 py-10">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center flex-shrink-0">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div>
            <p className="font-bold text-sm tracking-wide mb-1">MANZIL</p>
            <p className="text-sm text-white/70">Andijon shahri,<br />Maybog'cha ko'chasi, 63-uy</p>
            <a href="#" className="text-sm text-sky-300 hover:underline">Xaritada ko'rish</a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center flex-shrink-0">
            <i className="fa-solid fa-phone"></i>
          </div>
          <div>
            <p className="font-bold text-sm tracking-wide mb-1">TELEFON</p>
            <p className="text-sm text-white/70">+998 74 227-44-12</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center flex-shrink-0">
            <i className="fa-regular fa-clock"></i>
          </div>
          <div>
            <p className="font-bold text-sm tracking-wide mb-1">ISH VAQTI</p>
            <p className="text-sm text-white/70">Dushanba – Juma,<br />09:00 - 18:00</p>
          </div>
        </div>
      </div>

      <div className=" border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
          <p className="flex font-bold text-sm tracking-wide mb-4">FOYDALI HAVOLALAR</p>
          <div className="flex gap-3 max-w-md">
            <a
              href="https://dmed.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-3 transition"
            >
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
              <img src={dmed} alt="" />
              </div>
              <div>
                <p className="font-semibold text-sm">DMED</p>
                <p className="text-xs text-white/60">Tibbiy axborot tizimi</p>
              </div>
            </a>

            <a
              href="https://my.gov.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-3 transition"
            >
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
              <img src={mygov} alt="" />
              
              </div>
              <div>
                <p className="font-semibold text-sm">Yagona interaktiv davlat xizmatlari portali</p>
                <p className="text-xs text-white/60">my.gov.uz</p>
              </div>
            </a>

            <a
              href="https://gov.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-3 transition"
            >
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
              <img src={gov} alt="" />
              </div>
              <div>
                <p className="font-semibold text-sm">O'zbekiston Respublikasi Hukumat portali</p>
                <p className="text-xs text-white/60">gov.uz</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 px-6 md:px-10 py-4 text-xs text-white/60">
          <p>© 2026 Respublika Sud Tibbiy Ekspertiza Ilmiy-Amaliy Markazi Andijon filiali. Barcha huquqlar himoyalangan.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Sayt xaritasi</a>
            <a href="#" className="hover:text-white">Maxfiylik siyosati</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
