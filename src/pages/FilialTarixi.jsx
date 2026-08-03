const boLimlar = [
  {
    icon: "fa-solid fa-landmark",
    title: "Tarixiy ildizlar",
    text: "O'zbekistonda sud tibbiyoti xizmatining shakllanishi XIX asrning ikkinchi yarmidan boshlanib, 1950-yilda Respublika sud tibbiy ekspertiza byurosi tashkil etilishi bilan yangi bosqichga ko'tarildi.",
  },
  {
    icon: "fa-solid fa-building-columns",
    title: "Andijonda xizmatning tashkil topishi",
    text: "Viloyatimizda mazkur soha 1928-yildan dastlabki mutaxassislar tayyorlanishi bilan rivojlana boshlagan. Rasman esa 1952-yil 3-iyul sanasida Andijon viloyat sud tibbiy ekspertiza byurosi bor-yo'g'i 4 ta shtat birligi bilan o'z faoliyatini boshlagan.",
  },
  {
    icon: "fa-solid fa-flask-vial",
    title: "Tarkibiy kengayish va sinovli yillar",
    text: "Yillar o'tishi bilan xizmat ko'lami kengayib, maxsus laboratoriyalar tarmog'i yo'lga qo'yildi: 1961-yilda sud-kimyo, 1967-yilda sud-biologiya va 1971-yilda sud-tibbiy kriminalistika bo'limlari tashkil topdi. Filial ekspertlari turli yillarda (jumladan 2000, 2005 va 2010-yillardagi favqulodda holatlarda) yuzaga kelgan o'ta murakkab vaziyatlarda tunu kun xizmat qilib, yuqori professionallik namunasini ko'rsatganlar.",
  },
  {
    icon: "fa-solid fa-users",
    title: "Bugungi kun salohiyati",
    text: "Hozirgi kunda RSTEIAM Andijon filiali viloyatning 3,2 milliondan ortiq aholisiga xizmat ko'rsatadi. Filial tarkibida morfologiya, sud-tibbiy ambulatoriya, sud-biologiya, sud-kimyo, tibbiy kriminalistika kabi qator bo'limlar hamda Asaka, Shahrixon, Qo'rg'ontepa va Izboskan tumanlararo bo'linmalari muvaffaqiyatli faoliyat yuritmoqda. Muassasada 140 dan ortiq shtat birligi mavjud bo'lib, o'z kasbining yetuk mutaxassislari, oliy va birinchi toifali ekspert-shifokorlar mehnat qilmoqda.",
  },
  {
    icon: "fa-solid fa-rocket",
    title: "Istiqboldagi rejalar",
    text: "O'zbekiston Respublikasi Prezidentining 2018-yil 4-dekabrdagi (PQ-4049) qarori asosida tizimga \"Ilmiy-amaliy markaz\" maqomi berildi. Ushbu qaror ijrosi doirasida Andijon shahrida filial uchun barcha zamonaviy talablarga javob beruvchi, DNK tadqiqotlari va boshqa ilg'or tekshiruvlarni o'tkazish imkonini beruvchi, 5 ta seksion zal va maxsus laboratoriyalar bilan jihozlangan 4000 kv.m hajmga ega yangi, innovatsion bino majmuasi barpo etilmoqda.",
  },
];

export default function FilialTarixi() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-16">
      <div className="max-w-3xl mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#13285A] mb-6">Filial tarixi</h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          Respublika Sud Tibbiy Ekspertiza Ilmiy-Amaliy Markazi Andijon filiali ko'p yillik faoliyati davomida
          sud-tibbiy ekspertiza sohasida qonun ustuvorligi va xolislikni ta'minlashga xizmat qilib kelmoqda.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-6 md:left-7 top-0 bottom-0 w-0.5 bg-[#13285A]/20"></div>
        <div className="flex flex-col gap-8">
          {boLimlar.map((b, i) => (
            <div key={b.title} className="relative flex gap-6">
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#13285A] text-white flex items-center justify-center text-lg md:text-xl shadow-lg">
                  <i className={b.icon}></i>
                </div>
              </div>
              <div className="flex-1 bg-white border border-gray-100 rounded-xl shadow-sm p-6 md:p-8 hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-bold text-[#13285A]/50">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="text-lg md:text-xl font-bold text-[#13285A]">{b.title}</h2>
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
