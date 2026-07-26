import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const simpleLinks = [
  { label: "ASOSIY", to: "/" },
  { label: "FILIAL TARIXI", to: "/filial-tarixi" },
  { label: "TUZILMA", to: "/tuzilma" },
  { label: "YANGILIKLAR", to: "/yangiliklar" },
  { label: "BOG'LANISH", to: "/boglanish" },
];

const hoverMenus = {
  pullik: {
    label: "PULLIK XIZMATLAR",
    to: "/pullik-xizmatlar",
    items: [
      { title: "Narxlar jadvali", desc: "Ekspertiza turlari va belgilangan narxlar", to: "/pullik-xizmatlar/narxlar-jadvali" },
      { title: "To'lov tartibi", desc: "Bank rekvizitlari va elektron to'lov tizimlari", to: "/pullik-xizmatlar/tolov-tartibi" },
      { title: "Murojaat qadamlari", desc: "Kerakli hujjatlar va qayerga murojaat qilish", to: "/pullik-xizmatlar/murojaat-qadamlari" },
    ],
  },
  huquqiy: {
    label: "HUQUQIY ASOS",
    to: "/huquqiy-asos",
    items: [
      { title: "Qonunlar", desc: "Sud ekspertizasi va sog'liqni saqlash to'g'risidagi qonunlar", to: "/huquqiy-asos/qonunlar" },
      { title: "Vazirlar Mahkamasi qarorlari", desc: "460-sonli qaror va boshqa maxsus qarorlar", to: "/huquqiy-asos/vazirlar-mahkamasi-qarorlari" },
      { title: "Ichki hujjatlar", desc: "Markaz nizomi va ekspertiza tayinlash tartibi", to: "/huquqiy-asos/ichki-hujjatlar" },
    ],
  },
};

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const closeTimer = useRef(null);

  const openMenu = (key) => {
    clearTimeout(closeTimer.current);
    setActiveMenu(key);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const active = activeMenu ? hoverMenus[activeMenu] : null;

  return (
    <div className="relative" onMouseLeave={scheduleClose}>
      <nav className="bg-[#13285A]">
        <div className="max-w-7xl mx-auto flex items-center">
          <Link
            to="/"
            className="px-6 py-4 text-white border-r border-white/10 hover:bg-white/10 transition"
          >
            <i className="fa-solid fa-house"></i>
          </Link>
          <div className="flex flex-wrap">
            {simpleLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onMouseEnter={() => setActiveMenu(null)}
                className="px-5 py-4 text-sm font-semibold tracking-wide text-white/80 hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}
            {Object.entries(hoverMenus).map(([key, menu]) => (
              <Link
                key={key}
                to={menu.to}
                onMouseEnter={() => openMenu(key)}
                className={`px-5 py-4 text-sm font-semibold tracking-wide transition ${
                  activeMenu === key ? "text-white" : "text-white/80 hover:text-white"
                }`}
              >
                {menu.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {active && (
        <div
          onMouseEnter={() => openMenu(activeMenu)}
          className="absolute top-full left-0 w-full bg-white shadow-2xl z-50 border-t-4 border-[#13285A]"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-[#13285A]">{active.label}</h3>
              <button
                onClick={() => setActiveMenu(null)}
                className="flex items-center gap-2 text-sm font-semibold text-[#13285A] hover:opacity-70 transition"
              >
                <i className="fa-solid fa-arrow-left"></i>
                Orqaga
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {active.items.map((item) => (
                <Link
                  key={item.title}
                  to={item.to}
                  onClick={() => setActiveMenu(null)}
                  className="block p-4 rounded-lg border border-gray-100 hover:border-[#13285A] hover:bg-gray-50 transition"
                >
                  <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
