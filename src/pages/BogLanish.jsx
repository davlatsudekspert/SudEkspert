import { useState } from "react";
import { sendTelegramMessage } from "../lib/telegram";

export default function BogLanish() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
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
    if (!form.message.trim()) next.message = "Xabar kiritilishi shart";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Email manzili noto'g'ri";
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
        `Bog'lanish\nIsm: ${form.name}\nTelefon: ${form.phone}\n${form.email ? `Email: ${form.email}\n` : ""}Xabar: ${form.message}`
      );
      setStatus({ type: "success", text: "Xabaringiz muvaffaqiyatli yuborildi. Tez orada bog'lanamiz!" });
      setForm({ name: "", phone: "", email: "", message: "" });
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
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#13285A] mb-10">Bog'lanish</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4 border border-gray-100 rounded-xl p-5 shadow-sm">
            <div className="w-11 h-11 rounded-full bg-[#13285A] text-white flex items-center justify-center">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Manzil</p>
              <p className="text-sm text-gray-500">Andijon shahri, Maybog'cha ko'chasi, 63-uy</p>
            </div>
          </div>
          <div className="flex items-center gap-4 border border-gray-100 rounded-xl p-5 shadow-sm">
            <div className="w-11 h-11 rounded-full bg-[#13285A] text-white flex items-center justify-center">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Telefon</p>
              <p className="text-sm text-gray-500">+998 74 227-44-12</p>
            </div>
          </div>
          <div className="flex items-center gap-4 border border-gray-100 rounded-xl p-5 shadow-sm">
            <div className="w-11 h-11 rounded-full bg-[#13285A] text-white flex items-center justify-center">
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Xabarlar</p>
              <p className="text-sm text-gray-500">Yuborilgan xabarlar email orqali kelib tushadi</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Ismingiz"
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
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email (ixtiyoriy)"
              value={form.email}
              onChange={handleChange}
              className={`${inputClass("email")} w-full`}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Xabar"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className={`${inputClass("message")} w-full resize-none`}
            ></textarea>
            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
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
              "Yuborish"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
