import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const menus = {
  asosiy: {
    label: "ASOSIY",
    to: "/",
    items: [
      { title: "Bosh sahifa", desc: "Markaz haqida umumiy ma'lumot" },
      { title: "E'lonlar", desc: "So'nggi e'lonlar va bildirishnomalar" },
    ],
  },
  tarixi: {
    label: "FILIAL TARIXI",
    to: "/filial-tarixi",
    items: [
      { title: "Tashkil topish tarixi", desc: "Filialning tashkil etilishi va rivojlanishi" },
      { title: "Rahbariyat", desc: "Filial rahbariyati haqida ma'lumot" },
    ],
  },
  tuzilma: {
    label: "TUZILMA",
    to: "/tuzilma",
    items: [
      { title: "Bo'limlar", desc: "Filial tarkibidagi bo'limlar" },
      { title: "Xodimlar", desc: "Mutaxassislar tarkibi" },
    ],
  },
  yangiliklar: {
    label: "YANGILIKLAR",
    to: "/yangiliklar",
    items: [
      { title: "So'nggi yangiliklar", desc: "Filial faoliyatidagi yangiliklar" },
      { title: "Press-relizlar", desc: "Ommaviy axborot vositalari uchun materiallar" },
    ],
  },
  boglanish: {
    label: "BOG'LANISH",
    to: "/boglanish",
    items: [
      { title: "Manzil va aloqa", desc: "Telefon, manzil va ish vaqti" },
      { title: "Murojaat qoldirish", desc: "Onlayn murojaat shakli" },
    ],
  },
  pullik: {
    label: "PULLIK XIZMATLAR",
    to: "/pullik-xizmatlar",
    items: [
      { title: "Narxlar jadvali", desc: "Ekspertiza turlari va belgilangan narxlar" },
      { title: "To'lov tartibi", desc: "Bank rekvizitlari va elektron to'lov tizimlari" },
      { title: "Murojaat qadamlari", desc: "Kerakli hujjatlar va qayerga murojaat qilish" },
    ],
  },
  huquqiy: {
    label: "HUQUQIY ASOS",
    to: "/huquqiy-asos",
    items: [
      { title: "Qonunlar", desc: "Sud ekspertizasi va sog'liqni saqlash to'g'risidagi qonunlar" },
      { title: "Vazirlar Mahkamasi qarorlari", desc: "460-sonli qaror va boshqa maxsus qarorlar" },
      { title: "Ichki hujjatlar", desc: "Markaz nizomi va ekspertiza tayinlash tartibi" },
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

  const active = activeMenu ? menus[activeMenu] : null;

  return (
    <div
      className="relative"
      onMouseLeave={scheduleClose}
    >
      <nav className="bg-[#13285A]">
        <div className="max-w-7xl mx-auto flex items-center">
          <Link
            to="/"
            className="px-6 py-4 text-white border-r border-white/10 hover:bg-white/10 transition"
          >
            <i className="fa-solid fa-house"></i>
          </Link>
          <div className="flex flex-wrap">
            {Object.entries(menus).map(([key, menu]) => (
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {active.items.map((item) => (
                <Link
                  key={item.title}
                  to={active.to}
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
