import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import buildingImg from "../assets/building.jpg";
import { loadNews } from "../data/newsStore";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    loadNews().then((data) => setNews(data.slice(0, 9)));
  }, []);

  const items = news.length ? [...news, ...news] : [];
  const duration = Math.max(30, news.length * 6);

  return (
    <div>
      <div
        className="relative min-h-[340px] md:h-[440px] flex items-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${buildingImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1c3f]/75 via-[#0b1c3f]/55 to-[#0b1c3f]/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-10 w-full">
          <h1 className="ml-[60px] lg:ml-[270px] text-center text-2xl sm:text-2xl md:text-[43px] font-extrabold text-blue-200 max-w-2xl leading-tight uppercase">
            Adolat, xolislik va ilmiylik — faoliyatimiz mezonidir
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
              <div className="overflow-hidden rounded-xl [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
                <div
                  className="flex w-max gap-4 hover:[animation-play-state:paused]"
                  style={{ animation: `marquee ${duration}s linear infinite` }}
                >
                  {items.map((item, i) => (
                    <div key={`${item.id}-${i}`} className="w-[300px] md:w-[340px] flex-shrink-0">
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
                          <Link
                            to={`/yangiliklar/${item.id}`}
                            className="text-xs font-semibold text-white bg-[#13285A] rounded-full px-4 py-1.5 hover:opacity-90 transition"
                          >
                            Batafsil
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
