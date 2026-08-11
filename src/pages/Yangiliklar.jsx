import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loadNews } from "../data/newsStore";

export default function Yangiliklar() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNews().then((data) => {
      setNews(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 flex items-center justify-center min-h-[50vh]">
        <span className="loading loading-spinner loading-lg text-[#13285A]"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-16">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#13285A]">Yangiliklar</h1>
        <p className="text-sm text-gray-400 mt-1">{news.length} ta yangilik</p>
      </div>

      {news.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-24 border-2 border-dashed border-gray-200 rounded-xl">
          <i className="fa-regular fa-newspaper text-4xl text-gray-300 mb-4"></i>
          <p className="text-gray-500">Hozircha yangiliklar mavjud emas</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              className="group relative border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-[fadein_0.4s_ease]"
            >
              <img src={item.image} alt={item.title} className="w-full h-44 object-cover" />
              {item.video && (
                <span className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-black/50 text-white text-xs font-semibold rounded-full px-3 py-1">
                  <i className="fa-solid fa-video"></i> Video
                </span>
              )}
              <div className="p-5">
                <p className="font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</p>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-400"><i className="fa-regular fa-calendar mr-1"></i>{item.date}</p>
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
      )}
    </div>
  );
}
