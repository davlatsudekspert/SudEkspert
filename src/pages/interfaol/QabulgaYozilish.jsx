import { useState } from "react";
import { Link } from "react-router-dom";
import { sendTelegramMessage } from "../../lib/telegram";

const QABUL_VAQTLARI = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

export default function QabulgaYozilish() {
  const today = new Date().toISOString().split("T")[0];
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: today,
    time: QABUL_VAQTLARI[0],
    purpose: "",
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((err) => ({ ...err, [e.target.name]: null }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Ism kiritilishi shart";
    if (!form.phone.trim()) next.phone = "Telefon raqami kiritilishi shart";
    if (!form.date) next.date = "Sana tanlanishi shart";
    if (!form.purpose.trim()) next.purpose = "Qabul maqsadi kiritilishi shart";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    if (!validate()) return;
    setSending(true);
    try {
      await sendTelegramMessage(
        `<b>Qabulga yozilish</b>\n──────────────\nIsm: <b>${form.name}</b>\nTelefon: <b>${form.phone}</b>\nSana: <b>${form.date}</b>\nVaqt: <b>${form.time}</b>\n──────────────\nMaqsad: ${form.purpose}\n──────────────\nVaqt: ${new Date().toLocaleString("uz-UZ")}`
      );
      setStatus({
        type: "success",
        text: `Yozilish qabul qilindi: ${form.date}, soat ${form.time}. Qabul kuni filial xodimlari siz bilan bog'lanadi.`,
      });
      setForm({ name: "", phone: "", date: today, time: QABUL_VAQTLARI[0], purpose: "" });
    } catch {
      setStatus({ type: "error", text: "Xatolik yuz berdi. Iltimos qayta urining yoki telefon orqali bog'laning." });
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
          <i className="fa-solid fa-calendar-check"></i>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900">Qabulga onlayn yozilish</h1>
      </div>

      <p className="text-gray-500 mb-8">
        Fuqarolarni qabul qilishga onlayn yoziling. Qulay kun va vaqtni tanlang — filial xodimlari tasdiqlash
        uchun siz bilan bog'lanadi.
      </p>

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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="date"
              name="date"
              min={today}
              value={form.date}
              onChange={handleChange}
              className={`${inputClass("date")} w-full`}
            />
            {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date}</p>}
          </div>
          <div>
            <select
              name="time"
              value={form.time}
              onChange={handleChange}
              className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#13285A] w-full"
            >
              {QABUL_VAQTLARI.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <textarea
            name="purpose"
            placeholder="Qabul maqsadi (murojaatingiz haqida qisqacha)"
            rows="4"
            value={form.purpose}
            onChange={handleChange}
            className={`${inputClass("purpose")} w-full resize-none`}
          ></textarea>
          {errors.purpose && <p className="text-xs text-red-500 mt-1">{errors.purpose}</p>}
        </div>

        {status && (
          <div
            className={`text-sm rounded-lg px-4 py-3 ${
              status.type === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-600 border border-red-200"
            }`}
          >
            {status.text}
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
            "Yozilish"
          )}
        </button>
      </form>
    </div>
  );
}
