const stats = [
  { n: "65+", l: "yillik tajriba" },
  { n: "1200+", l: "yillik ekspertizalar soni" },
  { n: "18", l: "ixtisoslashtirilgan bo'lim" },
  { n: "24/7", l: "tezkor ekspert xizmati" },
];

export default function Stats() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 -mt-10 md:-mt-14 relative z-10">
      <div className="bg-white rounded-xl shadow-xl grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
        {stats.map((s) => (
          <div key={s.l} className="text-center py-6 px-3">
            <p className="text-2xl md:text-3xl font-extrabold text-[#13285A]">{s.n}</p>
            <p className="text-xs md:text-sm text-gray-500 mt-1">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
