import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import buildingImg from "../assets/building.jpg";
import { loadNews } from "../data/newsStore";

const PER_VIEW = 3;

export default function Home() {
  const [news, setNews] = useState([]);
  const [selected, setSelected] = useState(null);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    loadNews().then((data) => setNews(data.slice(0, 9)));
  }, []);

  const n = news.length;
  const carouselItems =
    n > PER_VIEW && n % PER_VIEW !== 0
      ? [...news, ...news.slice(0, PER_VIEW - (n % PER_VIEW))]
      : news;
  const pages = Math.max(1, Math.ceil(carouselItems.length / PER_VIEW));

  useEffect(() => {
    if (pages < 2 || paused) return;
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % pages);
    }, 5000);
    return () => clearInterval(t);
  }, [pages, paused]);

  const openModal = (item) => {
    setSelected(item);
    dialogRef.current?.showModal();
  };

  const goPrev = () => setCurrent((c) => (c - 1 + pages) % pages);
  const goNext = () => setCurrent((c) => (c + 1) % pages);

  return (
    <div>
      <div
        className="relative h-[380px] md:h-[440px] flex items-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${buildingImg})` }}
      >
        <div className="absolute inset-0 bg-[#0b1c3f]/70"></div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full">
          <h1 className="ml-[160px] items-center flex justify-center text-center text-3xl md:text-5xl font-extrabold text-white max-w-2xl leading-tight uppercase">
            Sud-tibbiy ekspertiza  qonun ustuvorligi va xolislik xizmatida
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 pt-12 pb-16">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="bg-[#13285A] px-6 py-4 flex items-center justify-between">
            <h2 className="text-white font-bold tracking-wide">YANGILIKLAR</h2>
            <Link to="/yangiliklar" className="text-sky-300 text-sm font-semibold flex items-center gap-1 hover:underline">
              Barchasini ko'rish <i className="fa-solid fa-chevron-right text-xs"></i>
            </Link>
          </div>
          <div className="p-5 md:p-6">
            {news.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center py-16 border-2 border-dashed border-gray-200 rounded-xl">
                <i className="fa-regular fa-newspaper text-4xl text-gray-300 mb-4"></i>
                <p className="text-gray-500">Hozircha yangiliklar mavjud emas</p>
              </div>
            ) : (
              <div
                className="relative overflow-hidden rounded-xl"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${current * (100 / PER_VIEW)}%)` }}
                >
                  {carouselItems.map((item, i) => (
                    <div key={`${item.id}-${i}`} className="px-1.5 flex-shrink-0" style={{ width: `${100 / PER_VIEW}%` }}>
                      <div className="group h-full border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <p className="text-xs text-gray-400 mb-2"><i className="fa-regular fa-calendar mr-1"></i>{item.date}</p>
                          <p className="font-semibold text-gray-900 mb-3 line-clamp-2">{item.title}</p>
                          <button
                            onClick={() => openModal(item)}
                            className="text-xs font-semibold text-white bg-[#13285A] rounded-full px-4 py-1.5 hover:opacity-90 transition"
                          >
                            Batafsil
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {pages > 1 && (
                  <>
                    <button
                      onClick={goPrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow-md text-[#13285A] flex items-center justify-center hover:bg-white transition z-10"
                      title="Oldingi"
                    >
                      <i className="fa-solid fa-chevron-left text-sm"></i>
                    </button>
                    <button
                      onClick={goNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow-md text-[#13285A] flex items-center justify-center hover:bg-white transition z-10"
                      title="Keyingi"
                    >
                      <i className="fa-solid fa-chevron-right text-sm"></i>
                    </button>
                    <div className="flex items-center justify-center gap-2 mt-4">
                      {Array.from({ length: pages }).map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrent(i)}
                          className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-[#13285A]" : "w-2 bg-gray-300 hover:bg-gray-400"}`}
                          aria-label={`Sahifa ${i + 1}`}
                        ></button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
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
                <p className="text-sm text-gray-600 leading-relaxed">{selected.body}</p>
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
