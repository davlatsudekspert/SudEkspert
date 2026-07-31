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
      { title: "Ekspertiza turlari", desc: "Filial tomonidan ko'rsatiladigan ekspertiza turlari", to: "/pullik-xizmatlar/ekspertiza-turlari" },
      { title: "To'lov tartibi", desc: "Bank rekvizitlari va elektron to'lov tizimlari", to: "/pullik-xizmatlar/tolov-tartibi" },
      { title: "Murojaat qadamlari", desc: "Kerakli hujjatlar va qayerga murojaat qilish", to: "/pullik-xizmatlar/murojaat-qadamlari" },
    ],
  },
  huquqiy: {
    label: "HUQUQIY ASOS",
    to: "/huquqiy-asos",
    items: [
      { title: "Qonunlar", desc: "Sud ekspertizasi va sog'liqni saqlash to'g'risidagi qonunlar", to: "/huquqiy-asos/qonunlar" },
      { title: "Ichki hujjatlar", desc: "Markaz nizomi va ekspertiza tayinlash tartibi", to: "/huquqiy-asos/ichki-hujjatlar" },
    ],
  },
  interfaol: {
    label: "INTERFAOL XIZMATLAR",
    to: "/interfaol-xizmatlar/savol-javoblar",
    items: [
      { title: "Savol-javoblar", desc: "Ko'p beriladigan savollarga javoblar", to: "/interfaol-xizmatlar/savol-javoblar" },
      { title: "Davlat ramzlari", desc: "Madhiya, Gerb, Bayroq", to: "/interfaol-xizmatlar/davlat-ramzlari" },
      { title: "Akkreditatsiya", desc: "Akkreditatsiya bo'yicha ma'lumot", to: "/interfaol-xizmatlar/akkreditatsiya" },
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

  const toggleMenu = (key, e) => {
    e.preventDefault();
    clearTimeout(closeTimer.current);
    setActiveMenu((m) => (m === key ? null : key));
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
                onClick={(e) => toggleMenu(key, e)}
                className={`px-5 py-4 text-sm font-semibold tracking-wide transition cursor-pointer ${
                  activeMenu === key ? "text-white" : "text-white/80 hover:text-white"
                }`}
              >
                {menu.label}
                <i className={`fa-solid fa-chevron-down ml-2 text-[10px] transition-transform duration-1000 ${activeMenu === key ? "rotate-180" : ""}`}></i>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <div
        onMouseEnter={() => openMenu(activeMenu)}
        className={`absolute top-full left-0 w-full bg-white shadow-2xl z-50 border-t-4 border-[#13285A] transition-all duration-500 ease-out ${
          active
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-6 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-[#13285A]">{active?.label}</h3>
            <button
              onClick={() => setActiveMenu(null)}
              className="flex items-center gap-2 text-sm font-semibold text-[#13285A] hover:opacity-70 transition"
            >
              <i className="fa-solid fa-arrow-left"></i>
              Orqaga
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {active?.items.map((item) => (
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
    </div>
  );
}
