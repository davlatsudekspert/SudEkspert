import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import buildingImg from "../assets/building.jpg";
import { loadNews } from "../data/newsStore";

export default function Home() {
  const [news] = useState(() => loadNews().slice(0, 3));
  const [selected, setSelected] = useState(null);
  const dialogRef = useRef(null);

  const openModal = (item) => {
    setSelected(item);
    dialogRef.current?.showModal();
  };

  return (
    <div>
      <div
        className="relative h-[380px] md:h-[440px] flex items-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${buildingImg})` }}
      >
        <div className="absolute inset-0 bg-[#0b1c3f]/70"></div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white max-w-2xl leading-tight uppercase">
            Sud-tibbiy ekspertiza – qonun ustuvorligi va xolislik xizmatida
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 -mt-10 md:-mt-16 relative z-10 grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 pb-16">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden h-fit">
          <div className="bg-[#13285A] px-6 py-4">
            <h2 className="text-white font-bold tracking-wide">TEZKOR TUGMALAR</h2>
          </div>
          <div className="p-5 flex flex-col gap-4">
            <Link to="/boglanish" className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-4 hover:border-[#13285A] transition">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-[#13285A] text-white flex items-center justify-center">
                  <i className="fa-solid fa-file-lines"></i>
                </div>
                <span className="font-semibold text-gray-800">Ekspertiza tayinlash</span>
              </div>
              <i className="fa-solid fa-chevron-right text-gray-400"></i>
            </Link>
            <Link to="/pullik-xizmatlar/murojaat-qadamlari" className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-4 hover:border-[#13285A] transition">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-[#13285A] text-white flex items-center justify-center">
                  <i className="fa-solid fa-folder-open"></i>
                </div>
                <span className="font-semibold text-gray-800">Kerakli hujjatlar</span>
              </div>
              <i className="fa-solid fa-chevron-right text-gray-400"></i>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden h-fit">
          <div className="bg-[#13285A] px-6 py-4 flex items-center justify-between">
            <h2 className="text-white font-bold tracking-wide">YANGILIKLAR</h2>
            <Link to="/yangiliklar" className="text-sky-300 text-sm font-semibold flex items-center gap-1 hover:underline">
              Barchasini ko'rish <i className="fa-solid fa-chevron-right text-xs"></i>
            </Link>
          </div>
          <div className="p-5 flex flex-col gap-5">
            {news.map((item, i) => (
              <div key={i} className={`flex gap-4 ${i !== news.length - 1 ? "pb-5 border-b border-gray-100" : ""}`}>
                <img src={item.image} alt={item.title} className="w-24 h-20 rounded-lg object-cover flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-500 mb-2">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-400"><i className="fa-regular fa-calendar mr-1"></i>{item.date}</p>
                    <button
                      onClick={() => openModal(item)}
                      className="text-xs font-semibold text-[#13285A] hover:underline"
                    >
                      Batafsil
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <dialog ref={dialogRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box p-0 overflow-hidden">
          {selected && (
            <>
              <img src={selected.image} alt={selected.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <p className="text-xs text-gray-400 mb-2"><i className="fa-regular fa-calendar mr-1"></i>{selected.date}</p>
                <h3 className="text-xl font-bold text-[#13285A] mb-3">{selected.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{selected.full}</p>
              </div>
            </>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
