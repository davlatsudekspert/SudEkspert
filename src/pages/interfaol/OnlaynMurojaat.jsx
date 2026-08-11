import { useState } from "react";
import { Link } from "react-router-dom";
import { sendTelegramMessage } from "../../lib/telegram";
import { sendAppealEmail } from "../../lib/email";
import { submitAppeal } from "../../lib/appeals";
import { downloadAppealReceipt } from "../../lib/receipt";

const MURQ_TURLARI = [
  "Savol",
  "Taklif",
  "Shikoyat",
  "Ekspertiza tayinlash",
  "Pullik xizmat",
  "Boshqa",
];

export default function OnlaynMurojaat() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    type: MURQ_TURLARI[0],
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((err) => ({ ...err, [e.target.name]: null }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Ism kiritilishi shart";
    if (!form.phone.trim()) next.phone = "Telefon raqami kiritilishi shart";
    if (!form.message.trim()) next.message = "Murojaat matni kiritilishi shart";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(null);
    if (!validate()) return;

    setSending(true);
    try {
      const id = await submitAppeal({
        name: form.name.trim(),
        phone: form.phone.trim(),
        type: form.type,
        message: form.message.trim(),
      });
      sendTelegramMessage(
        `<b>Onlayn murojaat</b>\n──────────────\nMurojaat raqami: <b>${id}</b>\nIsm: <b>${form.name}</b>\nTelefon: <b>${form.phone}</b>\nMurojaat turi: ${form.type}\n──────────────\nMatn: ${form.message}\n──────────────\nVaqt: ${new Date().toLocaleString("uz-UZ")}`
      ).catch(() => {});
      sendAppealEmail({
        name: form.name.trim(),
        phone: form.phone.trim(),
        type: form.type,
        message: form.message.trim(),
      }).catch(() => {});
      downloadAppealReceipt({ id, ...form });
      setForm({ name: "", phone: "", type: MURQ_TURLARI[0], message: "" });
      setResult({ ok: true, id });
    } catch {
      setResult({ ok: false, id: null });
    } finally {
      setSending(false);
    }
  };

  const inputClass = (name) =>
    `border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#13285A] ${
      errors[name] ? "border-red-400" : ""
    }`;

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
          <i className="fa-solid fa-paper-plane"></i>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900">Onlayn murojaat yuborish</h1>
      </div>

      <p className="text-gray-500 mb-8">
        Virtual qabulxona — murojaatingizni elektron tarzda yuboring. Murojaatga avtomatik raqam beriladi va
        uning holatini "Murojaat holatini tekshirish" bo'limi orqali kuzatishingiz mumkin.
      </p>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8 flex items-start gap-4">
        <i className="fa-solid fa-circle-info text-blue-700 mt-0.5"></i>
        <p className="text-sm text-gray-600">
          Murojaatlar O'zbekiston Respublikasi "Jismoniy va yuridik shaxslarning murojaatlari to'g'risida"gi
          Qonuniga muvofiq ko'rib chiqiladi.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 bg-white border border-gray-100 rounded-xl shadow-sm p-6 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Ism va familiya"
              value={form.name}
              onChange={handleChange}
              className={`${inputClass("name")} w-full`}
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Telefon raqamingiz"
              value={form.phone}
              onChange={handleChange}
              className={`${inputClass("phone")} w-full`}
            />
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
          </div>
        </div>
        <div>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#13285A] w-full"
          >
            {MURQ_TURLARI.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Murojaat matni"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className={`${inputClass("message")} w-full resize-none`}
          ></textarea>
          {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
        </div>

        {result && (
          <div
            className={`text-sm rounded-lg px-4 py-3 ${
              result.ok
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-600 border border-red-200"
            }`}
          >
            {result.ok ? (
              <>
                Murojaatingiz muvaffaqiyatli qabul qilindi. Murojaat raqamingiz:{" "}
                <span className="font-bold">{result.id}</span>. Holatini shu raqam orqali kuzatishingiz mumkin.
              </>
            ) : (
              "Xatolik yuz berdi. Iltimos qayta urining yoki telefon orqali bog'laning."
            )}
          </div>
        )}

        <button
          type="submit"
          disabled={sending}
          className="self-start bg-[#13285A] text-white rounded-full px-8 py-3 text-sm font-semibold hover:opacity-90 active:scale-95 transition disabled:opacity-50"
        >
          {sending ? (
            <>
              <i className="fa-solid fa-spinner fa-spin mr-2"></i>Yuborilmoqda...
            </>
          ) : (
            "Yuborish"
          )}
        </button>
      </form>
    </div>
  );
}
