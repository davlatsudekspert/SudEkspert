import { useState } from "react";
import { Link } from "react-router-dom";

const XIZMATLAR = [
  { name: "Laboratoriya tekshiruvi (qon, sperma, biologik suyuqliklar)", price: 150000 },
  { name: "Ekspress test yordamida tekshiruv", price: 100000 },
  { name: "Gistologik tekshiruv (biopsiya/autopsiya materiali)", price: 200000 },
  { name: "Rentgenografiya (1 ko'rinish)", price: 100000 },
  { name: "Ultratovush tekshiruvi (UTT)", price: 120000 },
  { name: "Murdani ekspertiza qilish (seksiya)", price: 800000 },
  { name: "Murdani saqlash (1 soat)", price: 25000 },
  { name: "Arxivdan hujjatni aniqlash (1 yillik)", price: 50000 },
  { name: "Murdani manziliga eltib berish (1 km)", price: 20000 },
];

const fmt = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

export default function XizmatNarxi() {
  const [selected, setSelected] = useState(XIZMATLAR[0].name);
  const [qty, setQty] = useState(1);

  const service = XIZMATLAR.find((s) => s.name === selected) || XIZMATLAR[0];
  const total = service.price * Math.max(1, Number(qty) || 1);

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-10 py-16">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline mb-8"
      >
        <i className="fa-solid fa-arrow-left"></i>
        Menyuga qaytish
      </Link>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl flex-shrink-0">
          <i className="fa-solid fa-calculator"></i>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900">Xizmat narxini hisoblash</h1>
      </div>

      <p className="text-gray-500 mb-8">
        Pullik ekspertiza xizmatlarining taxminiy narxini onlayn hisoblang.
      </p>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8 flex items-start gap-4">
        <i className="fa-solid fa-circle-info text-blue-700 mt-0.5"></i>
        <p className="text-sm text-gray-600">
          Hisob-kitob taxminiy bo'lib, yakuniy narx filial tomonidan tasdiqlanadi. Aniq narxlar uchun
          filialga murojaat qiling: +998 74 227-44-12.
        </p>
      </div>

      <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 md:p-8 flex flex-col gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Xizmat turi</label>
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#13285A]"
          >
            {XIZMATLAR.map((s) => (
              <option key={s.name} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Miqdor</label>
            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#13285A]"
            />
          </div>
          <div className="sm:text-right">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Birlik narxi</label>
            <p className="w-full border border-gray-100 bg-gray-50 rounded-lg px-4 py-3 text-sm text-gray-600">
              {fmt(service.price)} so'm
            </p>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6">
          <div className="bg-[#13285A] text-white rounded-xl px-6 py-5 flex items-center justify-between">
            <p className="font-semibold">Jami (taxminiy):</p>
            <p className="text-xl font-extrabold">{fmt(total)} so'm</p>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Hisoblangan narx faqat ma'lumot uchun. Yakuniy narx ekspertiza tayinlanganda belgilanadi.
          </p>
        </div>
      </div>
    </div>
  );
}
