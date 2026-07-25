export const NEWS_STORAGE_KEY = "andijon-sud-ekspertiza-news";

export const initialNews = [
  {
    id: 1,
    title: "Filialda o'quv-seminar bo'lib o'tdi",
    desc: "Sud-tibbiy ekspertiza sohasidagi yangi yondashuv va usullar muhokama qilindi.",
    full: "Filial xodimlari uchun tashkil etilgan o'quv-seminarda sud-tibbiy ekspertiza sohasidagi zamonaviy yondashuvlar, xalqaro tajriba va yangi tadqiqot usullari muhokama qilindi. Tadbirda yetakchi mutaxassislar ma'ruza qilib, amaliy mashg'ulotlar o'tkazdi.",
    date: "2024-yil 24-may",
    image: "https://picsum.photos/seed/seminar24/700/450",
  },
  {
    id: 2,
    title: "Yangi laborator uskunalar foydalanishga topshirildi",
    desc: "Zamonaviy uskunalar yordamida ekspertiza sifatini yanada oshirish maqsad qilingan.",
    full: "Filial laboratoriyasiga zamonaviy tadqiqot uskunalari o'rnatildi. Yangi uskunalar molekulyar-genetik va biokimyoviy tekshiruvlar sifatini oshirish, natijalarni tezroq va aniqroq olish imkonini beradi.",
    date: "2024-yil 20-may",
    image: "https://picsum.photos/seed/lab20/700/450",
  },
  {
    id: 3,
    title: "Aholi uchun ochiq eshiklar kuni",
    desc: "Fuqarolar bilan ochiq muloqot va tushuntirish ishlari o'tkazildi.",
    full: "Filialda aholi uchun ochiq eshiklar kuni tashkil etildi. Fuqarolar sud-tibbiy ekspertiza xizmatlari, ekspertiza tayinlash tartibi va zarur hujjatlar bo'yicha savollariga javob oldilar.",
    date: "2024-yil 15-may",
    image: "https://picsum.photos/seed/openday15/700/450",
  },
];

export function loadNews() {
  try {
    const saved = localStorage.getItem(NEWS_STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialNews;
  } catch {
    return initialNews;
  }
}

export function saveNews(news) {
  try {
    localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(news));
  } catch {
    // localStorage to'la yoki mavjud bo'lmasligi mumkin, e'tiborsiz qoldiramiz
  }
}
