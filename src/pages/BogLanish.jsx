export default function BogLanish() {
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
        </div>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Ismingiz" className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#13285A]" />
          <input type="text" placeholder="Telefon raqamingiz" className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#13285A]" />
          <textarea placeholder="Xabar" rows="5" className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#13285A] resize-none"></textarea>
          <button type="submit" className="self-start bg-[#13285A] text-white rounded-full px-8 py-3 text-sm font-semibold hover:opacity-90 transition">
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
}
