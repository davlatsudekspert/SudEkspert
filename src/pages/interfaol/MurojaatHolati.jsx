import { useState } from "react";
import { Link } from "react-router-dom";
import { checkAppealStatus } from "../../lib/appeals";

export default function MurojaatHolati() {
  const [value, setValue] = useState("");
  const [found, setFound] = useState(null);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = value.trim().toUpperCase();
    if (!id) {
      setError("Murojaat raqamini kiriting");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const item = await checkAppealStatus(id);
      setFound(item || null);
      setSearched(true);
    } catch {
      setError("Tekshirishda xatolik yuz berdi, qayta urining");
    } finally {
      setLoading(false);
    }
  };

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
          <i className="fa-solid fa-magnifying-glass-chart"></i>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900">Murojaat holatini tekshirish</h1>
      </div>

      <p className="text-gray-500 mb-8">
        "Onlayn murojaat yuborish" bo'limi orqali berilgan murojaat raqamini (ID) kiriting va holatini bilib oling.
      </p>

      <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 md:p-8 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError("");
          }}
          placeholder="Masalan: MU-123456"
          className={`flex-1 border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#13285A] ${
            error ? "border-red-400" : ""
          }`}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-[#13285A] text-white rounded-lg px-8 py-3 text-sm font-semibold hover:opacity-90 active:scale-95 transition flex-shrink-0 disabled:opacity-50"
        >
          <i className={`fa-solid ${loading ? "fa-spinner fa-spin" : "fa-magnifying-glass"} mr-2`}></i>
          {loading ? "Tekshirilmoqda..." : "Tekshirish"}
        </button>
      </form>
      {error && <p className="text-xs text-red-500 mt-2">{error}</p>}

      {searched && (
        <div className="mt-8">
          {found ? (
            <div className="border border-green-200 bg-green-50 rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-green-600 text-white flex items-center justify-center">
                  <i className="fa-solid fa-circle-check"></i>
                </div>
                <div>
                  <p className="font-bold text-gray-900">{found.id}</p>
                  <p className="text-sm text-green-700">Murojaat topildi</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="border border-green-100 bg-white rounded-lg p-4">
                  <p className="text-xs text-gray-400 mb-1">Murojaat turi</p>
                  <p className="font-semibold text-gray-800">{found.type}</p>
                </div>
                <div className="border border-green-100 bg-white rounded-lg p-4">
                  <p className="text-xs text-gray-400 mb-1">Yuborilgan sana</p>
                  <p className="font-semibold text-gray-800">{new Date(found.created_at).toLocaleDateString("uz-UZ")}</p>
                </div>
                <div className="border border-green-100 bg-white rounded-lg p-4">
                  <p className="text-xs text-gray-400 mb-1">Holat</p>
                  <p className="font-semibold text-blue-800">{found.status}</p>
                </div>
                <div className="border border-green-100 bg-white rounded-lg p-4">
                  <p className="text-xs text-gray-400 mb-1">Murojaatchi</p>
                  <p className="font-semibold text-gray-800">{found.name}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Murojaat matni: "{found.message}"
              </p>
            </div>
          ) : (
            <div className="border border-amber-200 bg-amber-50 rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-amber-500 text-white flex items-center justify-center">
                  <i className="fa-solid fa-circle-exclamation"></i>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Murojaat topilmadi</p>
                  <p className="text-sm text-gray-500">
                    Kiritilgan raqam bo'yicha onlayn murojaat aniqlanmadi.
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Agar murojaatni telefon, shaxsan yoki boshqa yo'l bilan yuborgan bo'lsangiz, holatini bilish
                uchun filialning qabul bo'limiga murojaat qiling. Manzil: Andijon shahri, Maybog'cha ko'chasi,
                63-uy. Telefon: +998 74 227-44-12.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
