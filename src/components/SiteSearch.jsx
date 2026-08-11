import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SEARCH_INDEX } from "../data/searchIndex";

export default function SiteSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const normalize = (s) => s.toLowerCase().replace(/[‘’`'"]/g, "").trim();
  const results = query.trim()
    ? SEARCH_INDEX.filter((r) => normalize(r.title).includes(normalize(query))).slice(0, 10)
    : [];

  function go(path) {
    navigate(path);
    setQuery("");
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative w-40 xl:w-52 max-w-full min-w-0">
      <div className="relative">
        <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Qidirish"
          className="w-full pl-9 pr-3 py-2 rounded-full text-sm bg-white/10 text-white placeholder-white/60 border border-white/20 outline-none focus:border-white/50"
        />
      </div>
      {open && results.length > 0 && (
        <div className="absolute mt-2 right-0 w-72 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50">
          {results.map((r) => (
            <button
              key={r.path}
              onClick={() => go(r.path)}
              className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#13285A]"
            >
              {r.title}
            </button>
          ))}
        </div>
      )}
      {open && query.trim() && results.length === 0 && (
        <div className="absolute mt-2 right-0 w-72 bg-white rounded-lg shadow-xl border border-gray-100 px-4 py-3 text-sm text-gray-400 z-50">
          Hech narsa topilmadi
        </div>
      )}
    </div>
  );
}
