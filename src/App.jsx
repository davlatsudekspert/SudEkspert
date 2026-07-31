import { Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FilialTarixi from "./pages/FilialTarixi";
import Tuzilma from "./pages/Tuzilma";
import Yangiliklar from "./pages/Yangiliklar";
import YangilikTafsilotlari from "./pages/YangilikTafsilotlari";
import PullikXizmatlar from "./pages/PullikXizmatlar";
import HuquqiyAsos from "./pages/HuquqiyAsos";
import BogLanish from "./pages/BogLanish";

import EkspertizaTurlari from "./pages/pullik/EkspertizaTurlari";
import TolovTartibi from "./pages/pullik/TolovTartibi";
import MurojaatQadamlari from "./pages/pullik/MurojaatQadamlari";
import Qonunlar from "./pages/huquqiy/Qonunlar";
import IchkiHujjatlar from "./pages/huquqiy/IchkiHujjatlar";
import SavolJavoblar from "./pages/interfaol/SavolJavoblar";
import DavlatRamzlari from "./pages/interfaol/DavlatRamzlari";
import Akkreditatsiya from "./pages/interfaol/Akkreditatsiya";

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

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-50">
        <TopBar />
        <Navbar />
      </div>
      <main className="flex-1">
        <Routes>
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
          <Route path="/interfaol-xizmatlar/savol-javoblar" element={<SavolJavoblar />} />
          <Route path="/interfaol-xizmatlar/davlat-ramzlari" element={<DavlatRamzlari />} />
          <Route path="/interfaol-xizmatlar/akkreditatsiya" element={<Akkreditatsiya />} />
          <Route path="/boglanish" element={<BogLanish />} />

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
      </main>
      <Footer />
    </div>
  );
}
