import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";
import SiteSearch from "./SiteSearch";

const simpleLinks = [
  { label: "ASOSIY", to: "/" },
  { label: "FILIAL TARIXI", to: "/filial-tarixi" },
  { label: "TUZILMA", to: "/tuzilma" },
  { label: "YANGILIKLAR", to: "/yangiliklar" },
  { label: "SAVOL-JAVOBLAR", to: "/savol-javoblar" },
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
      { title: "Davlat ramzlari", desc: "Madhiya, Gerb, Bayroq", to: "/huquqiy-asos/davlat-ramzlari" },
      { title: "Akkreditatsiya", desc: "Akkreditatsiya bo'yicha ma'lumot", to: "/huquqiy-asos/akkreditatsiya" },
      { title: "Buyruqlar", desc: "Tibbiy hujjatlar va birlamchi shakllar to'plami", to: "/huquqiy-asos/buyruqlar" },
    ],
  },
  interfaol: {
    label: "INTERFAOL XIZMATLAR",
    to: "/interfaol-xizmatlar/onlayn-murojaat",
    items: [
      { title: "Onlayn murojaat yuborish", desc: "Virtual qabulxona — elektron murojaat", to: "/interfaol-xizmatlar/onlayn-murojaat" },
      { title: "Murojaat holatini tekshirish", desc: "Murojaat raqami (ID) orqali", to: "/interfaol-xizmatlar/murojaat-holati" },
      { title: "Qabulga onlayn yozilish", desc: "Fuqarolarni qabul qilishga yozilish", to: "/interfaol-xizmatlar/qabulga-yozilish" },
    ],
  },
};

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [progress, setProgress] = useState(0);
  const closeTimer = useRef(null);
  const { pathname } = useLocation();

  const isActive = (to) =>
    to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(to);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
    setOpenAccordion(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const open = () => setMobileOpen(true);
    window.addEventListener("open-menu", open);
    return () => window.removeEventListener("open-menu", open);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const toggleAccordion = (key) =>
    setOpenAccordion((k) => (k === key ? null : key));

  const active = activeMenu ? hoverMenus[activeMenu] : null;

  return (
    <div className="relative" onMouseLeave={scheduleClose}>
      <nav className="bg-[#13285A]">
        <div className="h-[3px] bg-[#0b1c3f]">
          <div
            className="h-full bg-gradient-to-r from-sky-400 to-emerald-400 transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto">
          {/* Desktop navbar */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/"
              aria-label="Bosh sahifa"
              className="px-3 py-4 text-white border-r border-white/10 hover:bg-white/10 transition flex-shrink-0"
            >
              <i className="fa-solid fa-house"></i>
            </Link>
            <div className="flex flex-nowrap items-stretch">
              {simpleLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onMouseEnter={() => setActiveMenu(null)}
                  className={`px-2 py-4 text-xs font-semibold tracking-wide whitespace-nowrap transition ${
                    isActive(link.to)
                      ? "text-white bg-white/10"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
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
                  className={`px-2 py-4 text-xs font-semibold tracking-wide whitespace-nowrap transition cursor-pointer ${
                    activeMenu === key || isActive(menu.to)
                      ? "text-white bg-white/10"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {menu.label}
                  <i
                    className={`fa-solid fa-chevron-down ml-1 text-[10px] transition-transform duration-300 ${
                      activeMenu === key ? "rotate-180" : ""
                    }`}
                  ></i>
                </Link>
              ))}
            </div>
            <div className="ml-auto pr-3">
              <SiteSearch />
            </div>
          </div>

          {/* Mobile navbar */}
          <div className="lg:hidden flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center gap-2.5 min-w-0 flex-1">
              <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
                <img src={logo} alt="" className="w-full h-full object-cover" />
              </span>
              <span className="text-white font-bold text-[12px] leading-tight">
                RESPUBLIKA SUD TIBBIY EKSPERTIZA ILMIY-AMALIY MARKAZI
                <span className="block text-white/70 font-semibold text-[11px]">
                  ANDIJON FILIALI
                </span>
              </span>
            </Link>

            <div className="flex items-center gap-2">
              <a
                href="tel:+998742274412"
                aria-label="Telefon qilish"
                className="w-11 h-11 flex items-center justify-center text-white bg-white/10 rounded-xl hover:bg-white/20 active:scale-95 transition"
              >
                <i className="fa-solid fa-phone text-base"></i>
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Menyuni ochish"
                className="w-11 h-11 flex items-center justify-center text-white bg-white/10 rounded-xl hover:bg-white/20 active:scale-95 transition"
              >
                <i className="fa-solid fa-bars-staggered text-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop dropdown panel */}
      <div
        onMouseEnter={() => openMenu(activeMenu)}
        className={`absolute top-full left-0 w-full bg-white shadow-2xl z-50 border-t-4 border-[#13285A] transition-all duration-300 ease-out ${
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

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Asosiy menyu"
        >
          <div className="bg-[#13285A] px-4 pt-safe pb-4 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-full bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img src={logo} alt="" className="w-full h-full object-cover" />
                </span>
                <div>
                  <p className="text-white font-bold text-xs leading-tight">
                    RESPUBLIKA SUD TIBBIY EKSPERTIZA ILMIY-AMALIY MARKAZI
                  </p>
                  <p className="text-white/60 text-[11px] font-semibold">ANDIJON FILIALI</p>
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Menyuni yopish"
                className="w-11 h-11 flex items-center justify-center text-white bg-white/10 rounded-xl hover:bg-white/20 active:scale-95 transition"
              >
                <i className="fa-solid fa-xmark text-xl"></i>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4">
            {simpleLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-3 rounded-xl px-4 py-3.5 mb-1.5 text-sm font-semibold tracking-wide transition ${
                  isActive(link.to)
                    ? "text-[#13285A] bg-[#13285A]/10"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="w-8 h-8 rounded-lg bg-[#13285A]/5 flex items-center justify-center flex-shrink-0">
                  <i
                    className={`fa-solid ${
                      {
                        "/": "fa-house",
                        "/filial-tarixi": "fa-landmark",
                        "/tuzilma": "fa-sitemap",
                        "/yangiliklar": "fa-newspaper",
                        "/savol-javoblar": "fa-circle-question",
                      }[link.to] || "fa-link"
                    } text-xs text-[#13285A]`}
                  ></i>
                </span>
                {link.label}
                <i className="fa-solid fa-chevron-right ml-auto text-xs text-gray-400"></i>
              </Link>
            ))}

            <div className="h-px bg-gray-100 my-3"></div>
            <p className="px-4 pb-2 text-[11px] font-bold text-gray-400 tracking-widest">
              XIZMATLAR
            </p>

            {Object.entries(hoverMenus).map(([key, menu]) => (
              <div key={key} className="mb-1.5">
                <button
                  onClick={() => toggleAccordion(key)}
                  className={`w-full flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold tracking-wide transition ${
                    openAccordion === key || isActive(menu.to)
                      ? "text-[#13285A] bg-[#13285A]/10"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="w-8 h-8 rounded-lg bg-[#13285A]/5 flex items-center justify-center flex-shrink-0">
                    <i
                      className={`fa-solid ${
                        {
                          pullik: "fa-money-bill-wave",
                          huquqiy: "fa-scale-balanced",
                          interfaol: "fa-comments",
                        }[key] || "fa-link"
                      } text-xs text-[#13285A]`}
                    ></i>
                  </span>
                  {menu.label}
                  <i
                    className={`fa-solid fa-chevron-down ml-auto text-xs text-gray-400 transition-transform duration-300 ${
                      openAccordion === key ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    openAccordion === key
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="ml-4 pl-4 border-l-2 border-[#13285A]/15 mt-1 mb-2 space-y-1">
                      {menu.items.map((item) => (
                        <Link
                          key={item.title}
                          to={item.to}
                          className={`block rounded-lg px-3 py-2.5 transition ${
                            isActive(item.to)
                              ? "bg-[#13285A]/10"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          <p
                            className={`text-sm font-semibold ${
                              isActive(item.to)
                                ? "text-[#13285A]"
                                : "text-gray-800"
                            }`}
                          >
                            {item.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 px-4 py-4 pb-safe bg-gray-50 flex-shrink-0 space-y-2">
            <Link
              to="/boglanish"
              className="w-full flex items-center justify-center gap-2.5 bg-[#13285A] text-white rounded-full px-6 py-3.5 text-sm font-bold tracking-wide hover:opacity-90 active:scale-95 transition"
            >
              <i className="fa-solid fa-phone"></i>
              Bog'lanish
            </Link>
            <a
              href="tel:+998742274412"
              className="w-full flex items-center justify-center gap-2 text-[#13285A] font-bold text-sm py-2"
            >
              <i className="fa-solid fa-phone-volume"></i>
              +998 74 227-44-12
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
