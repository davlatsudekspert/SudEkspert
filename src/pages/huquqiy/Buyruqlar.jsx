import { useState } from "react";
import { Link } from "react-router-dom";

const hujjatlar = [
  { nomi: "Sud-tibbiy tekshiruv dalolatnomasi", fayl: "229-Sud-tibbiy tekshiruv dalolatnomasi.doc" },
  { nomi: "Ekspert xulosasi", fayl: "230-Ekspert xulosasi  №.doc" },
  { nomi: "Sud-tibbiy laboratoriya va mutaxassis maslahatiga yo'llanma", fayl: "231_Sud-tibbiy laboratoriya va mutaxassis maslahatiga yoʻllanma .doc" },
  { nomi: "Sud-gistologik tekshiruvga yo'llanma", fayl: "232_Sud-gistologik tekshiruvga yoʻllanma.doc" },
  { nomi: "Tanatologiya bo'limida murnalarni ro'yxatga olish", fayl: "233_Tanatologiya boʻlimida murdalarni roʻyxatga olish.doc" },
  { nomi: "Sud-tibbiy ambulatoriyada shaxslarni ro'yxatga olish", fayl: "234_Sud-tibbiy ambulatoriyada shaxslarni roʻyxatga olish.doc" },
  { nomi: "Qayta, komission, kompleks va murakkab", fayl: "235_Qayta, komission, kompleks va murakkab .doc" },
  { nomi: "Sud biologik bo'limda ashyoviy dalillar", fayl: "236_Sud biologik boʻlimda ashyoviy dalillarni va ularga tegishli xujjatlar.doc" },
  { nomi: "Sud biologik bo'limda murda koni", fayl: "237_Sud biologik boʻlimda murda koni.doc" },
  { nomi: "Sud gistologik bo'linmada material va xujjatlarni", fayl: "238_Sud gistologik boʻlinmada material va xujjatlarni roʻyxatga olish .doc" },
  { nomi: "Mikrodonorlardan olingan konni qayd etish", fayl: "239-Mikrodonorlardan olingan qonni qayd etish .doc" },
  { nomi: "Kiyim, ashyoviy dalillar", fayl: "240_Kiyim, ashyoviy dalillar.doc" },
  { nomi: "Sud-kimyo bo'limida ashyoviy dalillar", fayl: "241_Sud-kimyo boʻlimida ashyoviy dalillar _ВА.doc" },
  { nomi: "Sud-kimyo bo'limida tirik shaxslardan narkologik", fayl: "242_Sud-kimyo boʻlimida tirik shaxslardan narkologik .doc" },
  { nomi: "Fuqarolar murojaatlarini qayd etish", fayl: "243_Fuqarolar murojaatlarini qayd etish .docx" },
  { nomi: "Ma'lumotlarni yig'ish", fayl: "244-Maʼlumotlarni yigʻish.docx" },
  { nomi: "Tibbiy kriminalistika bo'limida ashyoviy dalillar", fayl: "245_Tibbiy kriminalistika boʻlimida ashyoviy dalillar .doc" },
];

export default function Buyruqlar() {
  const [search, setSearch] = useState("");

  const trimmed = search.trim().toLowerCase();
  const filtered = trimmed
    ? hujjatlar.filter((h) => h.nomi.toLowerCase().includes(trimmed))
    : hujjatlar;

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-10 py-16">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline mb-8">
        <i className="fa-solid fa-arrow-left"></i>
        Menyuga qaytish
      </Link>

      <div className="flex items-center gap-4 mb-3">
        <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl flex-shrink-0">
          <i className="fa-solid fa-gavel"></i>
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900">Sud-tibbiy ekspertiza hujjatlari</h1>
          <p className="text-gray-500 text-sm">Buyruqlar va birlamchi shakllar to'plami</p>
        </div>
      </div>

      <p className="text-sm text-gray-400 mb-6 ml-[4.5rem]">
        {trimmed ? `Topiladi: ${filtered.length} ta` : `Jami: ${hujjatlar.length} ta hujjat`}
      </p>

      <div className="relative mb-8">
        <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Hujjat nomi bo'yicha qidirish..."
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
          >
            <i className="fa-solid fa-xmark text-gray-500 text-xs"></i>
          </button>
        )}
      </div>

      {trimmed && filtered.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <i className="fa-solid fa-folder-open text-3xl mb-3 block"></i>
          <p className="font-semibold">Hech narsa topilmadi</p>
          <p className="text-sm mt-1">Boshqa kalit so'z bilan qidirib ko'ring</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {filtered.map((h, i) => {
          const ext = h.fayl.split(".").pop().toLowerCase();
          const isXlsx = ext === "xlsx";
          const iconClass = isXlsx ? "fa-solid fa-file-excel text-green-500" : "fa-solid fa-file-word text-blue-500";
          return (
            <a
              key={i}
              href={`/docs/buyruqlar/+10.0/${encodeURIComponent(h.fayl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-3 rounded-lg border border-blue-100 bg-white shadow-sm hover:border-blue-400 hover:bg-blue-50 transition text-sm text-gray-700 group"
            >
              <i className={`${iconClass} text-base flex-shrink-0`}></i>
              <span className="truncate group-hover:text-blue-700 transition">{h.nomi}</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-gray-300 group-hover:text-blue-500 ml-auto flex-shrink-0"></i>
            </a>
          );
        })}
      </div>
    </div>
  );
}
