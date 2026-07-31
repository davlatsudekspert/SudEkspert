import dmed from "../assets/dmed.webp"
import mygov from "../assets/mygov.webp"
import gov from "../assets/gov.webp"

const havolalar = [
  {
    href: "https://dmed.uz",
    img: dmed,
    title: "DMED",
    desc: "Tibbiy axborot tizimi",
  },
  {
    href: "https://my.gov.uz",
    img: mygov,
    title: "Yagona interaktiv davlat xizmatlari portali",
    desc: "my.gov.uz",
  },
  {
    href: "https://gov.uz",
    img: gov,
    title: "O'zbekiston Respublikasi Hukumat portali",
    desc: "gov.uz",
  },
];

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
            <a target="blank" href="https://maps.app.goo.gl/c9m8V7zQaLmHcKai8" className="text-sm text-sky-300 hover:underline">Xaritada ko'rish</a>
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
            <p className="text-sm text-white/70">Dushanba – Juma,<br />08:00 - 18:00</p>
          </div>
        </div>
      </div>

      <div className=" border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
          <p className="flex font-bold text-sm tracking-wide mb-6">FOYDALI HAVOLALAR</p>
          <div className="overflow-hidden rounded-xl [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="flex w-max gap-4 [animation:marquee_18s_linear_infinite] hover:[animation-play-state:paused]">
              {[...havolalar, ...havolalar].map((h, i) => (
                <a
                  key={i}
                  href={h.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[360px] flex-shrink-0"
                >
                  <div className="flex items-center gap-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-6 py-5 transition h-full">
                    <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center flex-shrink-0 overflow-hidden p-1.5">
                      <img src={h.img} alt="" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{h.title}</p>
                      <p className="text-sm text-white/60">{h.desc}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
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
