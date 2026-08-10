import { Link, useLocation } from "react-router-dom";

const tabs = [
  { label: "Asosiy", to: "/", icon: "fa-house" },
  { label: "Yangiliklar", to: "/yangiliklar", icon: "fa-newspaper" },
  { label: "Murojaat", to: "/interfaol-xizmatlar/onlayn-murojaat", icon: "fa-paper-plane" },
  { label: "Bog'lanish", to: "/boglanish", icon: "fa-phone" },
];

export default function MobileBottomNav() {
  const { pathname } = useLocation();

  const isActive = (to) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  const openDrawer = () => window.dispatchEvent(new CustomEvent("open-menu"));

  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-[90] pb-safe bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_24px_rgba(11,28,63,0.10)]">
      <div className="grid grid-cols-5">
        {tabs.map((tab) => (
          <Link
            key={tab.to}
            to={tab.to}
            className="flex flex-col items-center justify-center gap-0.5 py-2 active:scale-95 transition"
          >
            <span
              className={`w-11 h-7 rounded-full flex items-center justify-center transition-colors ${
                isActive(tab.to)
                  ? "bg-[#13285A]/10 text-[#13285A]"
                  : "text-gray-400"
              }`}
            >
              <i className={`fa-solid ${tab.icon} text-base`}></i>
            </span>
            <span
              className={`text-[10px] font-semibold ${
                isActive(tab.to) ? "text-[#13285A]" : "text-gray-400"
              }`}
            >
              {tab.label}
            </span>
          </Link>
        ))}

        <button
          onClick={openDrawer}
          className="flex flex-col items-center justify-center gap-0.5 py-2 active:scale-95 transition text-gray-400"
        >
          <span className="w-11 h-7 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-bars-staggered text-base"></i>
          </span>
          <span className="text-[10px] font-semibold">Menyu</span>
        </button>
      </div>
    </nav>
  );
}
