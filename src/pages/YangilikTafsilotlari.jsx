import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { loadNews } from "../data/newsStore";
import VideoPlayer from "../components/VideoPlayer";

export default function YangilikTafsilotlari() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    loadNews().then((data) => {
      const found = data.find((n) => String(n.id) === String(id));
      setItem(found || null);
      setLoading(false);
    });
  }, [id]);

  useEffect(() => {
    setCurrent(0);
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 flex items-center justify-center min-h-[50vh]">
        <span className="loading loading-spinner loading-lg text-[#13285A]"></span>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto px-4 md:px-10 py-16">
        <Link
          to="/yangiliklar"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline mb-8"
        >
          <i className="fa-solid fa-arrow-left"></i>
          Orqaga qaytish
        </Link>
        <div className="flex flex-col items-center justify-center text-center py-24 border-2 border-dashed border-gray-200 rounded-xl">
          <i className="fa-regular fa-newspaper text-4xl text-gray-300 mb-4"></i>
          <p className="text-gray-500">Yangilik topilmadi</p>
        </div>
      </div>
    );
  }

  const images = [item.image, item.image2, item.image3].filter(Boolean);
  const isCarousel = images.length > 1;
  const goPrev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const goNext = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-10 py-16">
      <Link
        to="/yangiliklar"
        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline mb-8"
      >
        <i className="fa-solid fa-arrow-left"></i>
        Orqaga qaytish
      </Link>

      <p className="text-xs text-gray-400 mb-3">
        <i className="fa-regular fa-calendar mr-1"></i>
        {item.date}
      </p>
      <h1 className="text-2xl md:text-4xl font-extrabold text-[#13285A] mb-6">{item.title}</h1>

      {isCarousel ? (
        <div className="relative rounded-xl overflow-hidden mb-6 group">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${item.title} ${i + 1}`}
                  className="w-full flex-shrink-0 aspect-video object-cover"
                />
              ))}
            </div>
          </div>
          <button
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md text-[#13285A] flex items-center justify-center hover:bg-white transition z-10"
            title="Oldingi"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md text-[#13285A] flex items-center justify-center hover:bg-white transition z-10"
            title="Keyingi"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Rasm ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
      ) : (
        <img
          src={images[0]}
          alt={item.title}
          className="w-full aspect-video object-cover rounded-xl mb-6"
        />
      )}

      {item.video && <VideoPlayer src={item.video} />}

      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{item.body || item.description}</p>
    </div>
  );
}
