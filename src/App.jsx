import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileBottomNav from "./components/MobileBottomNav";
import Home from "./pages/Home";
import FilialTarixi from "./pages/FilialTarixi";
import Tuzilma from "./pages/Tuzilma";
import Yangiliklar from "./pages/Yangiliklar";
import YangilikTafsilotlari from "./pages/YangilikTafsilotlari";
import PullikXizmatlar from "./pages/PullikXizmatlar";
import HuquqiyAsos from "./pages/HuquqiyAsos";
import BogLanish from "./pages/BogLanish";
import AdminDashboard from "./pages/admin/AdminDashboard";

import EkspertizaTurlari from "./pages/pullik/EkspertizaTurlari";
import TolovTartibi from "./pages/pullik/TolovTartibi";
import MurojaatQadamlari from "./pages/pullik/MurojaatQadamlari";
import Qonunlar from "./pages/huquqiy/Qonunlar";
import IchkiHujjatlar from "./pages/huquqiy/IchkiHujjatlar";
import DavlatRamzlari from "./pages/huquqiy/DavlatRamzlari";
import Akkreditatsiya from "./pages/huquqiy/Akkreditatsiya";
import SavolJavoblar from "./pages/SavolJavoblar";
import OnlaynMurojaat from "./pages/interfaol/OnlaynMurojaat";
import MurojaatHolati from "./pages/interfaol/MurojaatHolati";
import QabulgaYozilish from "./pages/interfaol/QabulgaYozilish";

import TashkiliyUslubiyBolim from "./pages/bolimlar/TashkiliyUslubiyBolim";
import SudAmbulatoriyaBolimi from "./pages/bolimlar/SudAmbulatoriyaBolimi";
import MorfologiyaBolimi from "./pages/bolimlar/MorfologiyaBolimi";
import QaytaKomissionBolimi from "./pages/bolimlar/QaytaKomissionBolimi";
import TibbiyKriminalistikaBolimi from "./pages/bolimlar/TibbiyKriminalistikaBolimi";
import SudBiologikBolim from "./pages/bolimlar/SudBiologikBolim";
import SudKimyoBolimi from "./pages/bolimlar/SudKimyoBolimi";
import SudGistologiyaBolimi from "./pages/bolimlar/SudGistologiyaBolimi";
import TezkorEkspertBolimi from "./pages/bolimlar/TezkorEkspertBolimi";
import MoliyaBuxgalteriyaXizmati from "./pages/bolimlar/MoliyaBuxgalteriyaXizmati";
import KadrlarBolimi from "./pages/bolimlar/KadrlarBolimi";
import YuridikXizmat from "./pages/bolimlar/YuridikXizmat";
import KanselariyaArxiv from "./pages/bolimlar/KanselariyaArxiv";
import AktBolimi from "./pages/bolimlar/AktBolimi";
import XojalikBolimi from "./pages/bolimlar/XojalikBolimi";
import Provizor from "./pages/bolimlar/Provizor";
import Laborantlar from "./pages/bolimlar/Laborantlar";
import Boshliq from "./pages/bolimlar/Boshliq";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const pageTitles = {
  "/": "Bosh sahifa",
  "/filial-tarixi": "Filial tarixi",
  "/tuzilma": "Tuzilma",
  "/yangiliklar": "Yangiliklar",
  "/pullik-xizmatlar": "Pullik xizmatlar",
  "/pullik-xizmatlar/ekspertiza-turlari": "Ekspertiza turlari",
  "/pullik-xizmatlar/tolov-tartibi": "To'lov tartibi",
  "/pullik-xizmatlar/murojaat-qadamlari": "Murojaat qadamlari",
  "/huquqiy-asos": "Huquqiy asos",
  "/huquqiy-asos/qonunlar": "Qonunlar",
  "/huquqiy-asos/ichki-hujjatlar": "Ichki hujjatlar",
  "/huquqiy-asos/davlat-ramzlari": "Davlat ramzlari",
  "/huquqiy-asos/akkreditatsiya": "Akkreditatsiya",
  "/savol-javoblar": "Savol-javoblar",
  "/interfaol-xizmatlar/onlayn-murojaat": "Onlayn murojaat yuborish",
  "/interfaol-xizmatlar/murojaat-holati": "Murojaat holatini tekshirish",
  "/interfaol-xizmatlar/qabulga-yozilish": "Qabulga yozilish",
  "/boglanish": "Bog'lanish",
};

function PageTitle() {
  const { pathname } = useLocation();
  const base =
    "Andijon Forensic — Respublika Sud Tibbiy Ekspertiza Ilmiy-Amaliy Markazi Andijon Filiali";

  useEffect(() => {
    const match = pageTitles[pathname] || (pathname.startsWith("/yangiliklar/") ? "Yangilik" : "");
    document.title = match ? `${match} | ${base}` : base;
  }, [pathname]);

  return null;
}

function AppRoutes() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="animate-fadein">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/filial-tarixi" element={<FilialTarixi />} />
        <Route path="/tuzilma" element={<Tuzilma />} />
        <Route path="/yangiliklar" element={<Yangiliklar />} />
        <Route path="/yangiliklar/:id" element={<YangilikTafsilotlari />} />
        <Route path="/pullik-xizmatlar" element={<PullikXizmatlar />} />
        <Route path="/pullik-xizmatlar/ekspertiza-turlari" element={<EkspertizaTurlari />} />
        <Route path="/pullik-xizmatlar/tolov-tartibi" element={<TolovTartibi />} />
        <Route path="/pullik-xizmatlar/murojaat-qadamlari" element={<MurojaatQadamlari />} />
        <Route path="/huquqiy-asos" element={<HuquqiyAsos />} />
        <Route path="/huquqiy-asos/qonunlar" element={<Qonunlar />} />
        <Route path="/huquqiy-asos/ichki-hujjatlar" element={<IchkiHujjatlar />} />
        <Route path="/huquqiy-asos/davlat-ramzlari" element={<DavlatRamzlari />} />
        <Route path="/huquqiy-asos/akkreditatsiya" element={<Akkreditatsiya />} />
        <Route path="/savol-javoblar" element={<SavolJavoblar />} />
        <Route path="/interfaol-xizmatlar/onlayn-murojaat" element={<OnlaynMurojaat />} />
        <Route path="/interfaol-xizmatlar/murojaat-holati" element={<MurojaatHolati />} />
        <Route path="/interfaol-xizmatlar/qabulga-yozilish" element={<QabulgaYozilish />} />
        <Route path="/boglanish" element={<BogLanish />} />
        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/tuzilma/tashkiliy-uslubiy-bolim" element={<TashkiliyUslubiyBolim />} />
        <Route path="/tuzilma/sud-ambulatoriya-bolimi" element={<SudAmbulatoriyaBolimi />} />
        <Route path="/tuzilma/morfologiya-bolimi" element={<MorfologiyaBolimi />} />
        <Route path="/tuzilma/qayta-komission-kompleks-ekspertiza-bolimi" element={<QaytaKomissionBolimi />} />
        <Route path="/tuzilma/tibbiy-kriminalistika-bolimi" element={<TibbiyKriminalistikaBolimi />} />
        <Route path="/tuzilma/sud-biologik-bolim" element={<SudBiologikBolim />} />
        <Route path="/tuzilma/sud-kimyo-bolimi" element={<SudKimyoBolimi />} />
        <Route path="/tuzilma/sud-gistologiya-bolimi" element={<SudGistologiyaBolimi />} />
        <Route path="/tuzilma/tezkor-ekspert-xizmat-bolimi" element={<TezkorEkspertBolimi />} />
        <Route path="/tuzilma/moliya-buxgalteriya-xizmati" element={<MoliyaBuxgalteriyaXizmati />} />
        <Route path="/tuzilma/kadrlar-bolimi" element={<KadrlarBolimi />} />
        <Route path="/tuzilma/yuridik-xizmat" element={<YuridikXizmat />} />
        <Route path="/tuzilma/kansaleriya-arxiv" element={<KanselariyaArxiv />} />
        <Route path="/tuzilma/akt" element={<AktBolimi />} />
        <Route path="/tuzilma/xojalik-bolimi" element={<XojalikBolimi />} />
        <Route path="/tuzilma/provizor" element={<Provizor />} />
        <Route path="/tuzilma/laborantlar" element={<Laborantlar />} />
        <Route path="/tuzilma/boshliq" element={<Boshliq />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-50 bg-[#13285A] pt-safe">
        <TopBar />
        <Navbar />
        <div className="bg-gradient-to-r from-[#0b1c3f] via-[#13285A] to-[#0b1c3f] border-t border-white/10 overflow-hidden">
          <div className="py-2 relative w-full">
            <span
              className="inline-flex whitespace-nowrap text-base sm:text-xl font-bold text-sky-200 items-center gap-2"
              style={{ animation: "marquee-once 20s linear infinite" }}
            >
              O‘ZBEKISTON RESPUBLIKASI MUSTAQILLIGINING 35 YILLIGI MUBORAK BO‘LSIN! YAGONA VATAN, YAGONA XALQ BO‘LIB, YANGI HAYOT VA KELAJAK YARATAMIZ!
            </span>
          </div>
        </div>
      </div>
      <ScrollToTop />
      <PageTitle />
      <main className="flex-1 pb-20 lg:pb-0">
        <AppRoutes />
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
