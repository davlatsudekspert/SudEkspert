import { useState } from "react";
import { Link } from "react-router-dom";

const kategoriyalar = [
  {
    id: "boshqaruv",
    nomi: "Boshqaruv hujjatlari",
    icon: "fa-solid fa-building-columns",
    ratio: "+1.0",
    hujjatlar: [
      { nomi: "Tibbiy muassasaga kelganlarni qayd jurnali", fayl: "001_Тиббий_муассасага_келганларни_кайд_журнали.doc" },
      { nomi: "Chaqaloqlar bo'limi xona jurnali", fayl: "002_чақалоқлар_бўлими_хона_журнали (2).doc" },
      { nomi: "Bemorning tibbiy kartasi", fayl: "003- БЕМОРНИНГ ТИББИЙ КАРТАСИ №.doc" },
      { nomi: "Homiladorlikni vaqtidan oldin tugatish", fayl: "003-1 -ҲОМИЛАДОРЛИКНИ ВАҚТИДАН ОЛДИН ТУГАТИШ.doc" },
      { nomi: "O'tkazilgan narkozlarni qayd etish", fayl: "004_ўтказилган_наркозларни_қайд_этиш.doc" },
      { nomi: "Narkoz varaqasi", fayl: "005-наркоз варақаси-.xls" },
      { nomi: "Reanimatsiya va intensiv terapiya", fayl: "006 - Reanimatsiya (xona) va intensiv terapiya .docx" },
      { nomi: "Bemorning kelib ketishi va shifoxonaning o'rin fondi", fayl: "007_БЕМОРНИНГ_КЕЛИБ_КЕТИШИ_ВА_ШИФОХОНАНИНГ_ЎРИН_ФОНДИНИу.doc" },
      { nomi: "Shifoxonadagi jarrohlik amaliyotini qayd etish", fayl: "008_ШИФОХОНАДАГИ_ЖАРРОҲЛИК_АМАЛИЁТИНИ_ҚАЙД_ЭТИШ.doc" },
      { nomi: "Kon tarkibiy qismlari va preparatlari hisobga olish", fayl: "009_Қон_таркибий_қисмлари_ва_препаратлари_қуйишни_ҳисобга_олиш_журнали (2).docx" },
      { nomi: "Kon qo'yish komissiyasi xulosasi", fayl: "009-1 Қон қйиш комиссиясининг хулосаси.docx" },
      { nomi: "Gemo (Plazma) transfuziya bayoni", fayl: "009-2 Гемо (Плазма) трансфузия баёни.docx" },
      { nomi: "Ortiq kolgan kon", fayl: "009-3- ортиб колган кон.doc" },
      { nomi: "Yaroqsiz kon komponentlarini yo'q qilishni qayd etish", fayl: "009-4-_Яроқсиз_қон_компоненларини_йўқ_қилишни_қайд_этиш_журнали.docx" },
      { nomi: "Tug'ruq bo'limida tug'ruqlarni qayd etish", fayl: "010_ТУҒРУҚ_БЎЛИМИДА_ТУҒРУҚЛАРНИ_ҚАЙД_ЭТИШ.doc" },
      { nomi: "Tug'ruq tibbiy kartasi", fayl: "096-ТУҒРУҚ ТИББИЙ КАРТАСИ.doc" },
      { nomi: "Chaqaloqning rivojlanish tibbiy kartasi", fayl: "097-чақалоқнинг  ривожланиш тиббий картаси.doc" },
      { nomi: "Tug'ilganlik guvohnomasini qayd etish jurnali", fayl: "103_туғилганлик _гувохномасини_кайд_этиш_журнали_.doc" },
      { nomi: "O'lim ma'lumotlarini qayd etish", fayl: "106 ўлим маълумотларини қайд этиш.doc" },
      { nomi: "Perinatal o'lim guvohnomasini qayd etish", fayl: "106_2_Перинатал_улим_гувохномасини_кайд_этиш_журнали.doc" },
    ],
  },
  {
    id: "ambulatoriya",
    nomi: "Ambulatoriya hujjatlari",
    icon: "fa-solid fa-stethoscope",
    ratio: "+2.0",
    hujjatlar: [
      { nomi: "Chaqiruvlarni qayd etish", fayl: "023-Chaqiruvlarni qayd etish.doc" },
      { nomi: "Ambulatoriya-poliklinika muassasasiga kelganlarni qayd etish", fayl: "024 Ambulatoriya-poliklinika muassasasiga kelganlarni qayd etish.doc" },
      { nomi: "Shifokorning kundalik qabuli", fayl: "024-1-Shifokorning kundalik qabul .doc" },
      { nomi: "Akusher-ginekologning (doya) kundalik qabuli", fayl: "024-2-Akusher-ginekologning (doya) kundalik qabuli.doc" },
      { nomi: "Stomatolog kundalik qabuli", fayl: "024-3-Stomatolog kundalik qabuli .doc" },
      { nomi: "Stomatolog ortoped va ortodont kundalik qabul", fayl: "024-4 Stomatolog ortoped va ortodont  kundalik qabul .doc" },
      { nomi: "Patsiyentning ambulator tibbiy kartasi", fayl: "025 Patsiyentning ambulator tibbiy karta.doc" },
      { nomi: "Stomatolog ortoped va ortodont kartasi", fayl: "025-1-Stomatolog ortoped va ortodont  kartasi .docx" },
      { nomi: "Dispanser kuzatuv nazorat kartasi", fayl: "030 Dispanser kuzatuv nazorat kartasi.doc" },
      { nomi: "Ruhiy kasalligi bor bemorning dispanser kartasi", fayl: "030-1 Ruhiy kasalligi bor bemorning dispanser.doc" },
      { nomi: "Dispanser kuzatuv (onko)", fayl: "030-2 Dispanser   kuzatuv  (onko) №.doc" },
      { nomi: "Psixonevrologik muassasa dispanser ro'yxatidan", fayl: "030-3 Psihonevrologik   muassasa   dispanser roʻyxatidan   oʻchirilgan   bemor   uchun.doc" },
      { nomi: "Sil kasaliga qarshi kurashish muassasa kontingenti", fayl: "030-4 Sil kasaliga  qarshi  kurashish muassasa  kontingentini  .doc" },
      { nomi: "Shifokor maslahat komissiyasi xulosalarini qayd etish", fayl: "035 - Shifokor maslahat komissiyasi xulosalarini qayd etish .doc" },
      { nomi: "Mehnatga layoqatsizlik varog'ini uzaytirishni qayd etish", fayl: "035 -1 Mehnatga layoqatsizlik varogʻini uzaytirishni qayd etish.doc" },
      { nomi: "Yo'llanma almashish varaqasi", fayl: "037  Yoʻllanma Almashish varaqasi.doc" },
      { nomi: "Ona va bola skrining markazida perenatal", fayl: "037_1_Ona va bola skrining” markazida perenatal .DOC" },
      { nomi: "Tibbiy ma'lumotnoma (chet el fuqarolari uchun)", fayl: "043-Tibbiy maʻlumotnoma (chet el fuqarolari uchun).doc" },
      { nomi: "Xorijga ketayotganlar uchun tibbiy ma'lumotnoma", fayl: "044-Xorijga ketayotganlar uchun tibbiy maʻlumotnoma.doc" },
      { nomi: "Oila hamshirasining kundalik faoliyati", fayl: "051 Oila hamshirasining kundalik faoliyati .doc" },
      { nomi: "Harbiy xizmatga chaqiriluvchining davolanish kartasi", fayl: "053-Harbiy xizmatga chaqiriluvchining davolanish kartasi.doc" },
      { nomi: "Shaxsning aqldan ozganligi to'g'risidagi", fayl: "056- Shaxsning aqldan ozganligi toʻgʻrisidagi .doc" },
      { nomi: "Jismoniy tarbiya va sportchining nazorat kartasi", fayl: "061 Jismoniy tarbiya va sportchining shifokorlik nazorat kartasi.doc" },
      { nomi: "Profilaktik emlash kartasi", fayl: "063 Profilaktik emlash kartasi.doc" },
      { nomi: "Emlashni qayd etish", fayl: "064 Emlashni qayd etish.doc" },
      { nomi: "Ambulator operatsiyalarni qayd etish", fayl: "069 Ambulator operatsiyalarni qayd etish.docx" },
      { nomi: "Sanator-kurort karta", fayl: "072 Sanator-kurort karta.doc" },
      { nomi: "Sanator-kurort davolanish uchun ma'lumotnoma", fayl: "072-1 Sanator kurort davolanish uchun maʼlumotnoma.doc" },
      { nomi: "Tibbiy moneliklarni ro'yxatga olish", fayl: "080 Tibbiy moneliklarni ro'yxatga olish .doc" },
      { nomi: "Davlat avtoinspeksiyasiga topshirish uchun tibbiy ma'lumotnoma", fayl: "083 Davlat avtoinspeksiyasiga topshirish  uchun tibbiy maʻlumotnoma.doc" },
      { nomi: "Haydovchi va haydovchilikka davogarlarni", fayl: "083-1 Haydovchi va haydovchilikka davogarlarni .doc" },
      { nomi: "Tibbiy ma'lumotnoma", fayl: "086 Tibbiy maʼlumotnoma .docx" },
      { nomi: "Maslahatchi shifokor mutaxassisning tibbiy xulosasi", fayl: "086-1  Tibbiy maʼlumotnoma (Maslahatchi shifokor mutaxassisning tibbiy xulosasi) .doc" },
      { nomi: "Shifokor maslahat komissiya ma'lumotnomasi", fayl: "086-3 Shifokor maslahat komissiya maʼlumotnomasi.doc" },
      { nomi: "Sog'lomlashtiruvchi lagerga ketayotgan o'quvchining tibbiy", fayl: "086-4 Sogʻlomlashtiruvchi lagerga ketayotgan oʻquvchining tibbiy maʼl.doc" },
      { nomi: "Hayotida birinchi bor faol sil, JAOYUK aniqlangan", fayl: "089 Hayotida birinchi bor faol sil,  JAOYUK (tanosil kasalligi), trixofitiya, mikrosporiya.doc" },
      { nomi: "Saraton kasalligi yoki boshqa yomon sifatli o'sma aniqlangan", fayl: "090 Hayotida birinchi bor saraton kasalligi yoki boshqa yomon sifatli oʻsma .doc" },
      { nomi: "Narkomaniya tashxisi aniqlangan bemor haqida", fayl: "091Hayotida birinchi marta narkomaniya tashxisi aniqlangan bemor haqida xabar.doc" },
      { nomi: "Homilador va tuqqan ayolning individual kartasi", fayl: "111 Homilador va tuqqan ayolning individual kartasi .doc" },
    ],
  },
  {
    id: "laboratoriya",
    nomi: "Laboratoriya va diagnostika hujjatlari",
    icon: "fa-solid fa-flask-vial",
    ratio: "+3.0",
    hujjatlar: [
      { nomi: "Gemodializ seansini qayd qilish kartasi", fayl: "011 Gemodializ seansini qayd qilish kartasi+.docx" },
      { nomi: "Kolonoskopik tekshiruvlarni qayd qilish", fayl: "012 Kolonoskopik tekshiruvlarni qayd qilish +.doc" },
      { nomi: "Kolonoskopiya bayoni", fayl: "012 -1 Kolonoskopiya bayoni .doc" },
      { nomi: "Spirometriya", fayl: "013 Spirometriya+.doc" },
      { nomi: "Nur bilan davolashni qayd qilish", fayl: "014 Nur bilan davolashni  qayd qilish +.doc" },
      { nomi: "Ultratovush tekshiruvlarni qayd etish", fayl: "015 Ultratovush tekshiruvlarni qayd etish +.doc" },
      { nomi: "Quloq oldi bezining UTT bayoni", fayl: "015-1 Quloq oldi bezining UTT bayoni +.DOC" },
      { nomi: "Qalqonsimon bezining UTT bayoni", fayl: "015-2 Qalqonsimon bezining UTT bayoni +.DOC" },
      { nomi: "Sut bezlarining UTT bayoni", fayl: "015-3 Sut bezlarining UTT bayoni +.DOC" },
      { nomi: "Ayrisimon bezining UTT bayoni", fayl: "015-4 Ayrisimon bezining UTT bayoni +.DOC" },
      { nomi: "Buyrak usti bezining UTT bayoni", fayl: "015-5 Buyrak usti bezining UTT bayoni +.DOC" },
      { nomi: "Oshqozon-ichak tizimining UTT bayoni", fayl: "015-6 Oshqozon-ichak tizimining +.DOC" },
      { nomi: "Neyrosanografik tekshiruv bayoni", fayl: "015-7 Neyrosanografik tekshiruv bayoni +.DOC" },
      { nomi: "Siydik pufagi UTT bayoni", fayl: "015-8 Siydik pufagi UTT bayoni+.doc" },
      { nomi: "Prostata bezi va urug' pufakchasining UTT bayoni", fayl: "015-9 Prostata bezi va urugʻ pufakchasining UTT bayoni +.DOC" },
      { nomi: "Yorg'oqning UTT bayoni", fayl: "015-10 Yorgʻoqning UTT bayoni +.DOC" },
      { nomi: "Yurakning UTT bayoni", fayl: "015-11 Yurakning UTT bayoni +.doc" },
      { nomi: "Fonokardiogramma", fayl: "015-12  Fonokardiogramma +.doc" },
      { nomi: "Sado-kardiografiya", fayl: "015-13 Sado-kardiografiya +.doc" },
      { nomi: "Kichik chanoq a'zolari UTT bayoni", fayl: "015-14 Kichik chanoq aʻozolari UTT bayoni +.doc" },
      { nomi: "Tos-son bo'g'imining ultratovush tekshiruvi", fayl: "015-15  Tos-son bo'g'imining ultratovush tekshiruvi +.docx" },
      { nomi: "Jigar va o't pufagi UTT bayoni", fayl: "015-16 Jigar va oʻt pufagi UTT bayoni +.docx" },
      { nomi: "Taloqning UTT bayoni", fayl: "015-17 Taloqning UTT bayoni +.DOC" },
      { nomi: "Buyrakning UTT bayoni", fayl: "015-18 Buyrakning UTT bayoni+.doc" },
      { nomi: "Oshqozon osti bezi UTT bayoni", fayl: "015-19  Oshqozon osti bezi  UTT bayoni +.DOC" },
      { nomi: "Limfa-uzel UTT tekshiruv bayoni", fayl: "015-20  Limfa-uzel UTT tekshiruv bayoni +.DOC" },
      { nomi: "Ko'zni UTT tekshiruv bayoni", fayl: "015-21 Koʻzni UTT tekshiruv bayoni+.doc" },
      { nomi: "Bosh miyaning UTT tekshiruv bayoni", fayl: "015-22 Bosh miyaning UTT tekshiruv bayoni+.doc" },
      { nomi: "Elektroensefalografiya", fayl: "015-23.. ELEKTROENSEFALOGRAFIYA+.doc" },
      { nomi: "Reoensefalografiya", fayl: "015-24..REOENSEFALOGRAFIYA+.doc" },
      { nomi: "Sadoensefalografiya", fayl: "015-25..SADOENSEFALOGRAFIYA +.doc" },
      { nomi: "Braxiosefal arteriyalarning ultratovush dopplerografiyasi", fayl: "015-26 BRAXIOSEFAL ARTERIYALARNING ULTRATOVUSH DOPPLEROGRAFIYASI+.doc" },
      { nomi: "Oftalmoskopiyani qayd etish", fayl: "016_OFTOLMOSKOPIYANI_QAYD_ETISH  +.doc" },
      { nomi: "Rentgen", fayl: "017-Rentgen+.doc" },
      { nomi: "EXO va EEG tekshiruvlarni qayd etish", fayl: "018_EXO va EEG  tekshiruvlarni qayd etish+.doc" },
      { nomi: "Kompyuter tomografiyasi (KT) va MRT qayd etish", fayl: "019_Kompyuter tomografiyasi (KT) va MRT qayd etish +.doc" },
      { nomi: "EKG tekshiruvlarni qayd etish", fayl: "020_EKG tekshiruvlarni qayd etish+.doc" },
      { nomi: "Veloergometriya tekshiruvlarni qayd etish", fayl: "021-Veloergometriya tekshiruvlarni qayd etish +.doc" },
      { nomi: "Udioskopiya, otoskopiya tekshiruvlarni qayd etish", fayl: "022-udioskopiya, otoskopiya tekshiruvlarni qayd etish +.doc" },
      { nomi: "Ezofagogastroduodenoskopik (EFGDES) tekshiruvlarni", fayl: "026-Ezofagogastroduodenoskopik  (EFGDES) tekshiruvlarni  qayd etish+.doc" },
      { nomi: "Bemorning tibbiy bayonnosidan ko'chirma", fayl: "027 Tibbiy muassasadagi bemorning tibbiy bayonnosidan koʻchirma.docx" },
      { nomi: "Yomon sifatli o'sma xastaligi bor shifoxona KOCHIRMA", fayl: "027-1-Yomon sifatli Oʻsma xastaligi bor shifoxona  KOCHIRMA+.doc" },
      { nomi: "Yomon sifatli o'sma", fayl: "028-yomon sifatli o'sma +.doc" },
      { nomi: "Muolaja xonasida qon namunalari olishni qayd qilish", fayl: "029_Muolaja xonasida qon namunalari olishni qayd qilish +.docx" },
      { nomi: "Fizioterapiya hamshirasining kundalik qabuli", fayl: "031 Fizioterapiya hamshirasining kundalik qabuli +.doc" },
      { nomi: "Fizioterapiya bo'limida davolanayotgan bemor KARTASI", fayl: "031-1-Fizioterapiya boʻlimida (xonada) davolanayotgan bemor KARTASI +.doc" },
      { nomi: "Tibbiy jixoz va asbob-uskunalarni zararsizlantirish", fayl: "032-Tibbiy jixoz va asbob uskunalarni zararsizlantirishni  +.docx" },
      { nomi: "Asbob-uskunalarni qabul qilish va zararsizlantirish", fayl: "033-Asbob uskunalarni qabul qilish va zararsizlantirish +.docx" },
      { nomi: "Laborator taxlillarni qayd etish", fayl: "034 Laborator taxlillarni qayd etish — копия +.docx" },
      { nomi: "Mehnatga layoqatsizlik varog'i", fayl: "036 Mehnatga layoqatsizlik varogʻini.doc" },
      { nomi: "Ta'lim olayotgan", fayl: "036-1 Taʼlim olayotgan +.doc" },
      { nomi: "Bemor bolani parvarishlash", fayl: "036-2 Bemor bolani parvarishlash +.doc" },
      { nomi: "Mastlik holati bo'yicha", fayl: "036-3 Mastlik holati boʻyicha +.doc" },
      { nomi: "Qonning umumiy tahlili", fayl: "040..-QONNING UMUMIY TAXLILI +.doc" },
      { nomi: "Rezus faktor va qon guruhi", fayl: "041..-Rezus faktor va qon guruhi+.doc" },
      { nomi: "Kon ivish vaqti tahlili", fayl: "042.. QON IVISH VAQTI TAHLILI+.docx" },
      { nomi: "Beslik kon tahlili", fayl: "046.. BESHLIK QON TAHLILI +.doc" },
      { nomi: "Koagulogramma", fayl: "047..-KOAGULOGRAMMA +.doc" },
      { nomi: "Konning biokimyoviy tahlili", fayl: "048..-QONNING  БИОКИМЁВИЙ ТАХЛИЛИ+.doc" },
      { nomi: "Qondagi gormonlarni", fayl: "049..-QONDAGI  ГОРМОНЛАРНИ  +.doc" },
      { nomi: "Qon zardobida lipoproteinlar", fayl: "050.. QON ZARDOBIDA LIPOPROTEIDLAR +.docx" },
      { nomi: "Bal'gam tahlili", fayl: "052_BALGʻAM TAHLILI +.doc" },
      { nomi: "Spermogramma", fayl: "054..-SPERMOGRAMMA +.doc" },
      { nomi: "Mikrobiologik tekshiruv natijasi", fayl: "055_MIKROBIOLOGIK TEKSHIRUV NATIJASI (2) +.doc" },
      { nomi: "Sil kasalligiga mikrobiologik tekshirishlarni qayd etish", fayl: "057  Sil kasalligiga mikrobiologik tekshirishlarni qayd etish +.doc" },
      { nomi: "Muolajalarni qayd qilish", fayl: "059-1 Muolajalarni qayd qilish +.docx" },
      { nomi: "Yuqumli kasalliklarni qayd etish", fayl: "060  Yuqumli kasalliklarni qayd etish +.docx" },
      { nomi: "Ichak mikroflorasini tekshirish", fayl: "062...ICHAK MIKROFLORASINI TEKSHIRISH +.doc" },
      { nomi: "Vasserman reaksiyasiga kon tahlili", fayl: "065.. VASSERMAN  REAKSIYASIGA  QON  TAHLILI  VA BOSHQALAR +.docx" },
      { nomi: "Siydik tahlili", fayl: "071..-SIYDIK TAHLILI +.doc" },
      { nomi: "Zimniskiy bo'yicha siydik tahlili", fayl: "073..Zimniskiy buyicha siydik TAHLILI+.doc" },
      { nomi: "Glyukozaga va keton tanachasiga", fayl: "074..GLYUKOZAGA VA KETON TANACHASIGA +.doc" },
      { nomi: "Glyukoza profili", fayl: "075..Glyukozuriya profili +.doc" },
      { nomi: "Siydik tahlili - amilaza faolligi", fayl: "076..Siydik taʼlili - amilaza faolligi +.doc" },
      { nomi: "Siydik shakliy elementlar sonini aniqlash", fayl: "077..Siydik shakliy elementlar sonini aniqlash TAHLILI +.doc" },
      { nomi: "Prostata bezi shirasi tahlili", fayl: "078..-prostata bezi shirasi tahlili +.doc" },
      { nomi: "TORCH infeksiya", fayl: "079..-TORCH infeksiya +.doc" },
      { nomi: "Duodenal shirasi tahlili", fayl: "081..-DUODENAL SHIRASI TAHLILI +.doc" },
      { nomi: "Orqa miya suyuqligi tahlili", fayl: "082..-ORQA MIYA SUYUQLIGI TAHLILI +.doc" },
      { nomi: "Kimyo-terapevtik preparatlarga ajratilgan", fayl: "084-KIMYO-TERAPEVTIK PREPARATLARGA AJRATILGAN +.doc" },
      { nomi: "Suyak ilik punktati tahlili", fayl: "085..-SUYAK ILIK PUNKTATI TAHLILI  +.doc" },
      { nomi: "Glikoza borligini aniqlash bo'yicha kon tahlili", fayl: "087..Glyukoza borligini aniqlash boʻyicha qon tahlili +.doc" },
      { nomi: "Vidal, Rayta-Xedelson va boshqa reaksiyalarga", fayl: "088.. Vidal, Rayta-Xedelson va boshыa reaksiyalarga qon taʼlili +.doc" },
      { nomi: "Immunoglobulin tahlili", fayl: "092-Immunoglobulin taʼlili +.doc" },
      { nomi: "Alfa fetoprotein, gepatit V", fayl: "093..ALʼFA FETOPROTEIN, GEPATIT “V” +.doc" },
      { nomi: "Komplementning gemolitik faolligi", fayl: "094...KOMPLIMENTNING GEMOLITIK FAOLLIGI +.doc" },
      { nomi: "Klinik-diagnostik laboratoriya", fayl: "095- Klinik - diagnostik laboratoriya +.docx" },
      { nomi: "TORCH IXLA tahlili", fayl: "098.. TORCH  IXLA  tahlili +.docx" },
      { nomi: "TORCH infeksiyasi IXLA tahlili", fayl: "099.. TORCH infeksiyasi IXLA  tahlili +.docx" },
      { nomi: "Shifoxona, ambulator, sirtqi, vafotidan keyingi", fayl: "100..Shifoxona, ambulator, sirtqi, vafotidan keyingi +.doc" },
      { nomi: "Sudlanganning psixiatrik", fayl: "101  SUDLANGANNING PSIXIATRIK +.doc" },
      { nomi: "Statsionar va ambulator sud-psixiatrik ekspertizalari", fayl: "102.. Statsionar va  ambulator  sud–psixiatrik  ekspertizalarini  qayd etish.+.doc" },
      { nomi: "Majburiy ravishda davolanayotgan shaxsning ruhiy", fayl: "104   Majburiy ravishda davolanayotgan shaxsning ruhiy +.doc" },
      { nomi: "Tug'ma nuqsonlar to'g'risida bildirishnoma", fayl: "114_BOLA (HOMILA) RIVOJLANISHINING TUGʻMA NUQSONI VAYOKI XROMOSOM BUZILISHLAR BILAN TUGʻILGANLIGI TOʻGʻRISIDA BILDIRISHNOMA   +.DOC" },
      { nomi: "PSR tahlil", fayl: "117.. PSR tahlil +.docx" },
      { nomi: "Gelminioz kasalliklariga qarshi", fayl: "121_GELMINTOZ  KASALLIKLARIGA QARSHI DEGELMINTIZATSIYA TADBIRLARINI QAYD ETISH +.DOC" },
      { nomi: "Bezgak kasalligi bo'yicha", fayl: "122_Bezgak kasalligi boʻyicha xavfli joylardan kelganlarni roʻyxatdan oʻtkazish va “D” kuzatuviga olish +.docx" },
    ],
  },
  {
    id: "dorixona",
    nomi: "Dorixona hujjatlari",
    icon: "fa-solid fa-pills",
    ratio: "+4.0",
    hujjatlar: [
      { nomi: "Dori vositalariga o'rtacha ehtiyoj hisoblash", fayl: "+131 DAVOLASH STANDARTLARI HAMDA NOZOLOGIYASIGA ASOSAN OʻRINLAR SONINI HISOBGA OLGAN HOLATDA  BIR OYLIK DORI VOSITALARIGA BOʻLGAN OʻRTACHA EHTIYOJI.docx" },
      { nomi: "DPM dorixonasining miqdoriy kirim hisoboti", fayl: "+132 DPM dorixonasining miqdoriy kirim hisoboti.docx" },
      { nomi: "Doimiy faoliyatdagi hay'atning qabul qilish", fayl: "+133 Doimiy Faoliyatdagi Hayʻatning qabul qilish _.docx" },
      { nomi: "Yuk xati (talabnoma)", fayl: "+134 Yuk xati (talabnoma).docx" },
      { nomi: "Dorixonaning kunlik miqdoriy chiqim hisobi", fayl: "+135 Dorixonaning kunlik miqdoriy chiqim xisobi.docx" },
      { nomi: "Dorixonadan bo'limlarga berilgan dorilar", fayl: "+136 Dorixonadan boʻlimlarga berilgan dorilar.docx" },
      { nomi: "Hisob varaq", fayl: "+137 Hisob  varaqa.docx" },
      { nomi: "Moliyalashtirish manbasi bo'yicha aylanma vedomost", fayl: "+138 Moliyalashtirish manbasi bo ʻ yicha aylanma vedomost.docx" },
      { nomi: "Chiqim", fayl: "+139_Chiqim.docx" },
      { nomi: "Moliyalashtirish manbasi bo'yicha aylanma bayonot", fayl: "+140 Moliyalashtirish manbasi boʻyicha aylanma bayonot_2.docx" },
      { nomi: "Dori-vositalarining qoldig'i", fayl: "+141 Dori-vositalarining qoldigʻi.docx" },
    ],
  },
  {
    id: "tez-yordam",
    nomi: "Tez tibbiy yordam",
    icon: "fa-solid fa-truck-medical",
    ratio: "+5.0",
    hujjatlar: [
      { nomi: "Shoshilinch tez tibbiy yordam ilmiy", fayl: "059-3 Shoshilinch tez tibbiy yordam ilmiy.doc" },
      { nomi: "Murojaatlarni qayd qilish", fayl: "142-Murojaatlarni qayd qilish.xlsx" },
      { nomi: "Tez tibbiy yordam chaqiruv kartasi", fayl: "143-Тез тиббий ёрдам чақирув картаси.xlsx" },
      { nomi: "Kuzatuv varaqasi", fayl: "144-Kuzatuv varaqasi.doc" },
      { nomi: "Kundalik podstansiya ishi", fayl: "145- Kundalik podstansiya ishi.xlsx" },
      { nomi: "Favqulotdda vaziyatlarni hisobga olish", fayl: "146- Tez tibbiy yordam stansiyasi va sanitar aviatsiyasi boʻlimlarida favqulotdda vaziyatlarni hisobga olish.doc" },
      { nomi: "Tez tibbiy yordam stansiyasi", fayl: "147-TEZ TIBBIY YORDAM STANSIYASI.doc" },
      { nomi: "Sanitar aviatsiyasi avtoulovlari faoliyatini ruyxatga olish", fayl: "148- Sanitar aviatsiyasi avtoulovlari faoliyatini ruyxatga olish jurnali.docx" },
      { nomi: "Sanitar aviatsiyasiga chaqiriqlarni qayd etish", fayl: "149- Sanitar aviatsiyasiga chaqiriqlarni qayd etish jurnali.docx" },
      { nomi: "Sanitar aviatsiyasi maslahatchi shifokor varaqasi", fayl: "150-Sanitar aviatsiyasi maslahatchi shifokor varaqasi.doc" },
      { nomi: "Haydovchilarni tibbiy ko'rikdan o'tkazishni", fayl: "151 Xaydovchilarni tibbiy koʻrikdan oʻtkazishni xisobga olish.docx" },
    ],
  },
  {
    id: "genetika",
    nomi: "Genetika bo'limi",
    icon: "fa-solid fa-dna",
    ratio: "+6.0",
    hujjatlar: [
      { nomi: "Homilador genetik kasal invaziv", fayl: "152 хомиладор генетик касал инвазив.doc" },
      { nomi: "Perinatal diag invaziv", fayl: "153_перитатал диаг инвазив.doc" },
      { nomi: "Sitogenetik, molekulyar-sitogenik tekshiruv natijalari", fayl: "154 Sitogenetik, molekulyar-sitogenik tekshiruv natijalari.doc" },
      { nomi: "Rad etish", fayl: "155 рад этиш.docx" },
      { nomi: "Trimestr biokimyoviy prenatal", fayl: "156-Триместр биокимёвий пренатал.docx" },
      { nomi: "I-II trimestr prenatal biokimyoviy tekshiruv xulosasi", fayl: "157_I_I_трим_прен_биох_тек_хулосаси.docx" },
      { nomi: "Irsgiy genetik kasallik bilan bemor ambulator kartasi", fayl: "158  ирсий_гинетик_касаллик_билан_бемор_амбулатор_карта_Генетик_uz.docx" },
      { nomi: "Homilador prenatall tekshiruv kartasi", fayl: "159_Хомиладор_пренатал_текширув_картаси.rtf" },
      { nomi: "Irsgiy-genetik kasalligi bor bemorni nevropatolog ko'rigi", fayl: "160 IRSIY-GENETIK KASALLIGI BOR BEMORNI NEVROPATOLOG KO’RIGI.docx" },
      { nomi: "Irsgiy-genetik kasalligi bor bemorni endokrinolog ko'rigi", fayl: "161  IRSIY-GENETIK KASALLIGI BOR BEMORNI ENDOKRINOLOG KO’RIGI.docx" },
      { nomi: "I trimestr shablon", fayl: "162----- I триместр шаблон.doc" },
      { nomi: "II trimestr shablon", fayl: "163  - II триместр шаблон.doc" },
      { nomi: "III trimestr shablon", fayl: "164---- III триместр шаблон.docx" },
      { nomi: "Tibbiy genetik xulosasi", fayl: "165- тиббий генетик хулосаси.doc" },
      { nomi: "Protokol operatsii IPD", fayl: "166 протокол операции ИПД uz.docx" },
      { nomi: "Neonatal IRT, FKU, VG skrining tahlili", fayl: "167 Неонатал_IRT,_ФКУ,_ВГ_скрининг_тахлили.docx" },
      { nomi: "Tandem mass-spektrometriya tahlili", fayl: "168_Тандем_масс_спектрометрия_тахлили 2.doc" },
      { nomi: "Dopol klinik-diagnostik laboratoriya IXLA tahlili", fayl: "169 допол клин -диаг лабор ИХЛА тахлили.docx" },
      { nomi: "Ter sinamasi tahlili", fayl: "170 Тер синамаси тахлили.docx" },
      { nomi: "Neonatal skrinig retest", fayl: "171-Неонатал скрининг ретест.docx" },
      { nomi: "Zaklyuchenie IPD uz", fayl: "172 заключение ИПД узб.docx" },
      { nomi: "Prenatal konsiliyum 2025", fayl: "173 пренатальный консилиум 2025 uz.docx" },
      { nomi: "Homilador ayolning jarrohlik amaliyotidan oldingi epikrizi", fayl: "174  Хомиладор аёлнинг жарроҳлик амалиётидан олдинги эпикризи uz.docx" },
    ],
  },
  {
    id: "oiv",
    nomi: "OIV laboratoriyasi hujjatlari",
    icon: "fa-solid fa-virus",
    ratio: "+7.0",
    hujjatlar: [
      { nomi: "Bemorni dispanser nazoratiga olish", fayl: "175_БЕМОРНИНГ_ДИСПАНСЕР_–_НАЗОРАТ_КАРТАСИ+.doc" },
      { nomi: "Anonim xonaga murojaat etgan shaxslarning OIVga", fayl: "176_Anonim_xonaga_murojaat_etgan_shaxslarning_OIVga_tekshirishni+.docx" },
      { nomi: "Anonim xonaga fuqarolarni shaxsini tasdiqlovchi", fayl: "177_Anonim_xonaga_fuqarolarni_shaxsini_tasdiqlovchi_hujjatlari_bilan+.docx" },
      { nomi: "Anonim xonaga fuqarolarni shaxsini tasdiqlovchi (2)", fayl: "178_Anonim_xonaga_fuqarolarni_shaxsini_tasdiqlovchi_hujjatlari_bilan+.docx" },
      { nomi: "Ma'lumotnoma anonim xona", fayl: "179-Маълумотнома аноним хона+.docx" },
      { nomi: "JAYBYUK aniqlangan mijozlarni qayd etish", fayl: "180-JAYBYUK aniqlangan mijozlarni qayd etish+.docx" },
      { nomi: "OIV infeksiyali bemorlarga RVQ va oppor-tunistik kasalliklarga", fayl: "181_ОИВ_инфекцияли_беморларга_РВҚ_ва_оппортунистик_касалликларга+.doc" },
      { nomi: "Yo'llanma", fayl: "182-Yoʻllanma+.docx" },
      { nomi: "Komissiya ishtirokida olingan kon namunalarini OIVga", fayl: "183_Komissiya_ishtirokida_olingan_qon_namunalarini_OIVga_tekshirish+.docx" },
      { nomi: "Komissiya xulosasi ma'lumotnoma", fayl: "184-komissiya xulosasi ma'lumotnoma+.docx" },
      { nomi: "Komission kon olishni qayd etish", fayl: "185_Комиссион_қон_олишни_қайт_этиш+.docx" },
      { nomi: "OIV infektsiyasiga polimeraz zanjirli reaksiya", fayl: "186_ОИВ_инфекциясига_полимераза_занжирли_реакция_ПЗР_ДНК,ВЮ_усулида+.doc" },
      { nomi: "OIV infektsiyali bemorlarni immunologik SD4 hujayralar", fayl: "187_ОИВ_инфекцияли_беморларни_иммунологик_СД4_хужайраларга_текширувларни+.doc" },
      { nomi: "Kon namunalari laboratoriyasi", fayl: "188_қон_намуналари_лаборatori+.xlsx" },
      { nomi: "Biomateriallar laboratoriyasi", fayl: "189_биоматериалларни_лаборatori+.xlsx" },
      { nomi: "OIV musbat", fayl: "190- ОИВ мусбат+.xlsx" },
      { nomi: "OIVga PZR", fayl: "191- ОИВга ПЗР+.xlsx" },
      { nomi: "SD4 hujayralariga", fayl: "192- СД 4 хужайраларига+.xlsx" },
      { nomi: "Yaroqsiz namunalar", fayl: "+193- Яроксиз намуналар+.xlsx" },
    ],
  },
  {
    id: "qon-banki",
    nomi: "Qon banki hujjatlari",
    icon: "fa-solid fa-droplet",
    ratio: "+8.0",
    hujjatlar: [
      { nomi: "Donorlardan olingan konni qayd etish", fayl: "194_Qon topshirgan donorga beriladigan +.docx" },
      { nomi: "Donorlar bo'limiga murojaat qilgan beg'araz", fayl: "195_Donorlar boʻlimiga murojat qilgan begʻaraz +.docx" },
      { nomi: "Donorni hisobga olish kartasi", fayl: "196_Donorni xisobga olish kartasi.docx" },
      { nomi: "AVO tizimidagi standart va rezusga qarshi", fayl: "197 AVO tizimidagi standart va rezusga karshi .docx" },
      { nomi: "Donorlardan plazma va sitaferez usuli bilan kon", fayl: "198_Donorlardan plazma va sitaferez usuli bilan qon .doc" },
      { nomi: "Beg'araz donor kartasi", fayl: "199_Begaraz donor kartasi.docx" },
      { nomi: "Komissiya ishtirokida OIV infektsiyasiga kon olishni", fayl: "200_Komissiya ishtirokida OIV infeksiyasiga qon olishni qayd etish jurnali+.doc" },
      { nomi: "To'liq kon tayyorlashni hisoga olish", fayl: "201_Toʻliq qon tayyorlashni hisoga olish jurnali.doc" },
      { nomi: "AVO tizimi bo'yicha tayyorlangan standart va rezusga", fayl: "202_AVO tizimi boʻyicha tayyorlangan standart va rezusga karshi zardobni qayd etish.docx" },
      { nomi: "Donorlar qon guruhi va rezus faktori natijalarini qayd etish", fayl: "203_Donorlar qon guruhi va rezus faktori natijalarini qayd etish .docx" },
      { nomi: "Qonni brutsellyozga serologik tekshirishni qayd etish", fayl: "204_Qonni brutsellyozga serologik tekshirishni qayd etish jurnali_.docx" },
      { nomi: "Konservlangan kon va komponentlarini sterillikka tekshirish", fayl: "205_Konservlangan qon va uning komponentlarini sterillikka tekshirishni qayd +.docx" },
      { nomi: "Yaroqsiz qon komponentlarini yo'q qilish", fayl: "206_Yaroqsiz qon komponentlarini yoʻq qilish jurnali_.docx" },
      { nomi: "Beg'araz donorlardan tayyorlangan kon komponentlarni", fayl: "207_Begʻaraz donorlardan tayyorlangan qon komponentlarni hisobga olish jurnali.docx" },
      { nomi: "Kriopretsipitat tayyorlashni qayd etish", fayl: "208_Kriopretsipitat tayyorlashni qayd etish .docx" },
      { nomi: "Plazma tayyorlashni qayd etish", fayl: "209_Plazma tayyorlashni qayd etish jurnali.docx" },
      { nomi: "Yuvilgan eritrotsitlarni tayyorlashni qayd etish", fayl: "210_Yuvilgan eritrotsitlarni tayyorlashni qaydetish _.docx" },
      { nomi: "Tayyor qon mahsulotlarini qayd etish", fayl: "211_Davolash profilaktika muassasalariga beriladigan tayyor qon mahsulotlarini qayd .docx" },
      { nomi: "Qon kompanentlarini qabul qilish", fayl: "212_Qon kompanentlarini qon zahiralarini boshqarish boʻlimiga qabul qilishni .docx" },
      { nomi: "Qon tarkibiy qismlari va preparatlarini olish uchun talabnoma", fayl: "213_Qon tarkibiy qismlari va preparatlarini olish uchun talabnoma.doc" },
      { nomi: "Qon preparatlarini ekspeditsiyaga topshirishni qayd etish", fayl: "214_Qon preparatlarini ekspeditsiyaga topshirishni qayd etish.docx" },
      { nomi: "Qon preparatlari bo'limiga kirim qilingan plazmalarni qayd etish", fayl: "215_Qon preparatlari boʻlimiga kirim qilingan plazmalarii qayd etish .docx" },
      { nomi: "OIVga seropozitiv donorlarni qayd etish", fayl: "216_OIVga seropozitiv donorlarni qayd etish jurnali.docx" },
      { nomi: "Beg'araz qon guruhi va rezus-faktori tahlillari ro'yxatga olish", fayl: "217_Begaraz qon guruhi va rezus-faktori tahlillari roʻyhatga olish.docx" },
      { nomi: "Zahm, NSU, NBsAg va OIVga tekshirishlarni qayd etish", fayl: "218_Zahm, NSU, NBsAg va OIVga tekshirishlarni qayd etish jurnali.docx" },
      { nomi: "Donorlarni klinik va bioximik tahlillarni qayd etish", fayl: "219_Donorlarni klinik va bioximik tahlillarni qayd etish .docx" },
      { nomi: "Donorlar qon guruhi va rezus-faktori tahlillarini ro'yxatga olish", fayl: "220_Donorlar qon  guruhi  va  rezus-faktori tahlillarini  roʻyhatga  olish +.docx" },
      { nomi: "DPM jurnali usti KONSUL+", fayl: "221_DPM jurnali usti KONSUL+.docx" },
      { nomi: "Rezusga qarshi tayyorlangan", fayl: "222-Rezusga qarshi tayyorlangan .docx" },
    ],
  },
  {
    id: "patologiya",
    nomi: "Patologo-anatomiya bo'limi",
    icon: "fa-solid fa-microscope",
    ratio: "+9.0",
    hujjatlar: [
      { nomi: "Patologo-anatomi tekshirish uchun yorilgan murnalarni qayd etish", fayl: "223-_PАTOLOGО_АNАTОМИК_TEKShIRISh_UChUN_YoRILGАN_MURDАLАRNI_QАYD.doc" },
      { nomi: "Patologo-anatomi tadqiqot bayoni", fayl: "224_PАТОLOGО_АNАTОМИК_TАDQIQOT_BАYoNI_№_.doc" },
      { nomi: "Patologo-gistologik tadqiqot uchun yo'llanma", fayl: "225_PАТОLOGО_GISTОLOGIK_TАDQIQOT_UChUN_YOʼLLАNMА_.doc" },
      { nomi: "Sektsion material", fayl: "226 секцион материал.doc" },
      { nomi: "Biopsiya va operatsion material", fayl: "227-биопсия ва операцион.doc" },
      { nomi: "Murnalarni qayd etish", fayl: "228 -мурдаларни кайд этиш.doc" },
    ],
  },
  {
    id: "sud-tibbiy",
    nomi: "Sud-tibbiy ekspertiza hujjatlari",
    icon: "fa-solid fa-gavel",
    ratio: "+10.0",
    hujjatlar: [
      { nomi: "Sud-tibbiy tekshiruv dalolatnomasi", fayl: "229-Sud-tibbiy tekshiruv dalolatnomasi.doc" },
      { nomi: "Ekspert xulosasi", fayl: "230-Ekspert xulosasi  №.doc" },
      { nomi: "Sud-tibbiy laboratoriya va mutaxassis maslahatiga yo'llanma", fayl: "231_Sud-tibbiy laboratoriya va mutaxassis maslahatiga yoʻllanma .doc" },
      { nomi: "Sud-gistologik tekshiruvga yo'llanma", fayl: "232_Sud-gistologik tekshiruvga yoʻllanma.doc" },
      { nomi: "Tanatologiya bo'limida murnalarni ro'yxatga olish", fayl: "233_Tanatologiya boʻlimida murdalarni roʻyxatga olish.doc" },
      { nomi: "Sud-tibbiy ambulatoriyada shaxslarni ro'yxatga olish", fayl: "234_Sud-tibbiy ambulatoriyada shaxslarni roʻyxatga olish.doc" },
      { nomi: "Qayta, komission, kompleks va murakkab", fayl: "235_Qayta, komission, kompleks va murakkab .doc" },
      { nomi: "Sud biologik bo'limda ashyoviy dalillar", fayl: "236_Sud biologik boʻlimda ashyoviy dalillarni va ularga tegishli xujjatlar.doc" },
      { nomi: "Sud biologik bo'limda murda koni", fayl: "237_Sud biologik boʻlimda murda koni.doc" },
      { nomi: "Sud gistologik bo'linmada material va xujjatlarni", fayl: "238_Sud gistologik boʻlinmada material va xujjatlarni roʻyxatga olish .doc" },
      { nomi: "Mikrodonorlardan olingan konni qayd etish", fayl: "239-Mikrodonorlardan olingan qonni qayd etish .doc" },
      { nomi: "Kiyim, ashyoviy dalillar", fayl: "240_Kiyim, ashyoviy dalillar.doc" },
      { nomi: "Sud-kimyo bo'limida ashyoviy dalillar", fayl: "241_Sud-kimyo boʻlimida ashyoviy dalillar _ВА.doc" },
      { nomi: "Sud-kimyo bo'limida tirik shaxslardan narkologik", fayl: "242_Sud-kimyo boʻlimida tirik shaxslardan narkologik .doc" },
      { nomi: "Fuqarolar murojaatlarini qayd etish", fayl: "243_Fuqarolar murojaatlarini qayd etish .docx" },
      { nomi: "Ma'lumotlarni yig'ish", fayl: "244-Maʼlumotlarni yigʻish.docx" },
      { nomi: "Tibbiy kriminalistika bo'limida ashyoviy dalillar", fayl: "245_Tibbiy kriminalistika boʻlimida ashyoviy dalillar .doc" },
    ],
  },
  {
    id: "sanitariya",
    nomi: "Sanitariya-epidemiologiya hujjatlari",
    icon: "fa-solid fa-shield-virus",
    ratio: "+11.0",
    hujjatlar: [
      { nomi: "Davlat sanitariya nazoratiga olingan ob'yektlarni ro'yxatga olish", fayl: "246  Davlat sanitariya nazoratiga olingan ob'yektlarni ro'yxatga olish jurnali.docx_Parsing.uz.docx" },
      { nomi: "Qurilish uchun ajratilgan yer-maydoni bo'yicha xulosa", fayl: "247 Qurilish uchun ajratilgan yer-maydoni bo'yicha xulosa.docx_Parsing.uz.docx" },
      { nomi: "Qurilish uchun ajratilgan yer maydonlariga", fayl: "248 Qurilish uchun ajratilgan yer maydonlariga.docx" },
      { nomi: "Loyiha bo'yicha xulosa", fayl: "249 Loyiha bo'yicha xulosa.docx_Parsing.uz.docx" },
      { nomi: "Loyiha bo'yicha berilgan xulosalarni ro'yxatga olish", fayl: "250  Loyiha boʻyicha berilgan xulosalarni roʻyhatga olish .docx_Parsing.uz (1).docx" },
      { nomi: "Ogohlantiruvchi sanitariya nazorati kartasi", fayl: "251 Qurilayotgan (tamirlanayotgan) obʻyekt boʻyicha ogohlantiruvchi sanitariya nazorati kartasi.docx_Parsing.uz.docx" },
      { nomi: "Joriy sanitariya nazoratiga olingan ob'yektning kartasi", fayl: "252  Joriy sanitariya nazoratiga olingan obʻyektning kartasi.docx_Parsing.uz.docx" },
      { nomi: "Bolalarni dam olish va sog'lomlashtirish joylariga", fayl: "253  Bolalarni dam olish va sogʻlomlashtirish joylariga olib chiqish uchun beriladigan sanitariya ruxsatnoma.docx_Parsing.uz.docx" },
      { nomi: "Suv namunasini olish dalolotnomasi", fayl: "254  Suv namunasini olish dalolotnomasi.docx_Parsing.uz.docx" },
      { nomi: "Oziq-ovqat mahsulotlaridan namunalar olish", fayl: "255  Oziq-ovqat mahsulotlaridan namunalar olish boʻyicha dalolatnoma.docx_Parsing.uz.docx" },
      { nomi: "Qishloq xo'jaligi va oziq-ovqat mahsulotlari namunalarida", fayl: "256 (H.Sh) Qishloq xo'jaligi va oziq-ovqat mahsulotlari namunalarida pestisidlar qoldiq miqdorini aniqlash boʻyicha dalolatnoma.docx_Parsing.uz.docx" },
      { nomi: "Tashqi muhit anjomlaridan surtmalar olish", fayl: "257 Tashqi muxit anjomlaridan surtmalar olish boʻyicha dalolatnoma.docx_Parsing.uz.docx" },
      { nomi: "Yuqumli kasallik bilan og'rigan bemorni ko'chirish", fayl: "258  Yuqumli kasallik bilan og'rigan bemorni ko'chirish.docx_Parsing.uz.docx" },
      { nomi: "Yuqumli kasallik bilan og'rigan bemorlarni evakuatsiya qilishni", fayl: "259  Yuqumli kasallik bilan og'rigan bemorlarni evakuatsiya qilishni qayd etish .docx_Parsing.uz.docx" },
      { nomi: "Kamerali DD qilinishini hisobga olish", fayl: "260  Kiyimlar, o'rindiq anjomlari, oyoq kiymi va boshqa narsalarni kamerali DD qilinishini hisobga olish.docx_Parsing.uz.docx" },
      { nomi: "O'tkazilgan dezinfeksiyani hisobga olish", fayl: "261  Yuqumli kasalliklar o'chog'ida o'tkazilgan dezinfeksiyani hisobga olish.docx_Parsing.uz.docx" },
      { nomi: "Epidemiologik tekshirish kartasi", fayl: "262  Yuqumli kasallik o'chog'ini epidemiologik tekshirish kartasi.docx_Parsing.uz.docx" },
      { nomi: "Ovqatdan zaharlanish holatlarini ro'yxatga olish", fayl: "263 Ovqatdan zaharlanish holatlarini roʻxatga olish.docx_Parsing.uz.docx" },
      { nomi: "Shoshilinch habarlarni ro'yxatga olish", fayl: "264 Ovqatdan zaharlanganda va kasb kasalligi qayd qilinganda shoshilinch habarlarni ro'xatga olish.docx_Parsing.uz.docx" },
      { nomi: "Gelminioz kasalliklariga qarshi", fayl: "265 Gelmintoz kasalliklariga qarshi degelmintizasiya tadbirlarini qayd etish.docx_Parsing.uz.docx" },
      { nomi: "Brusellalarni tavsifnomasini qayd etish", fayl: "266  Ajratib olingan brusellalarni tavsifnomasini qayd etish.docx_Parsing.uz.docx" },
      { nomi: "Konni brusellyozga serologik tekshirish", fayl: "267  Qonni brusellyozga serologik tekshirish.docx_Parsing.uz.docx" },
      { nomi: "Sut va sut mahsulotlarini serologik tekshiruvini", fayl: "268  Sut va sut mahsulotlarini serologik tekshiruvini qayd etish.docx_Parsing.uz (1).docx" },
      { nomi: "Suv havzasini holati bo'yicha tavsifnomasi", fayl: "269  Suv xavzasini holati boʻyicha tavsifnomasi.docx" },
      { nomi: "Kuydirgi kasalligiga bakteriologik va serologik tekshirish", fayl: "270 (H.Sh) Tashqi muxit obʻyektlaridan va odamlardan olingan namunalarni kuydirgi kasalligiga bakteriologik va serologik tekshirish.docx_Parsing.uz.docx" },
      { nomi: "Bioprobalarni qayd etish", fayl: "271 Bioprobalarni qayd etish .docx_Parsing.uz.docx" },
      { nomi: "Kuydirgi mikrobining xususiyatlarini qayd etish", fayl: "272 Kuydirgi mikrobining xususiyatlarini қайд этиш.docx_Parsing.uz.docx" },
      { nomi: "Kasb kasalliklari (zaharlanishlarni) ro'yxatga olish", fayl: "273  Kasb kasalliklari (zaharlanishlar)ni ro'yxatga olish kartasi.docx_Parsing.uz.docx" },
      { nomi: "Quturish kasalligi bilan o'lganlardan olingan patmaterialni", fayl: "274  Quturish kasalligi bilan o'lganlardan olingan patmaterialni tekshirish .docx_Parsing.uz.docx" },
      { nomi: "Zoonoz kasalligi o'chog'ini tekshirish kartasi", fayl: "275 Zoonoz kasalligi o'chog'ini epizotologik-epidemiologik tekshirish kartasi.docx_Parsing.uz.docx" },
      { nomi: "Zoonoz kasalligi o'chog'ini tekshirish kartasiga ilova", fayl: "276  Zoonoz kasalligi o'chog'ini epizotoologik-epidemiologik tekshirish kartasiga ilova.docx_Parsing.uz.docx" },
      { nomi: "AB qoldiq miqdorini aniqlash", fayl: "277 (H.Sh) Oziq-ovqat mahsulotlarida AB qoldiq miqdorini aniqlash boʻyicha oʻtkazilgan laboratoriya tekshiruvlarini roʻyxatga olish .docx_Parsing.uz.docx" },
      { nomi: "Rentgen kabinetidan foydalanish huquqi", fayl: "278  Rentgen kabinetidan foydalanish huquqi boʻyicha sanitariya pasporti.docx_Parsing.uz.docx" },
      { nomi: "Ionlashtiruvchi nurlar manbaalari bilan ishlash", fayl: "279  Ionlashtiruvchi nurlar manbaalari bilan ishlash huquqini beruvchi sanitariya epidemiologik xulosa.docx_Parsing.uz.docx" },
      { nomi: "Radiaktiv moddalar va materiallarini", fayl: "280 Radiaktiv moddalar va materiallarini, ionlashtiruvchi nurlar va radiaktiv.docx" },
      { nomi: "Patogen biologik agentlarni qayd qilish", fayl: "281  Tekshirish (identifikatsiya qilish) uchun yuborilgan patogen biologik agentlarni qayd qilish .docx_Parsing.uz.docx" },
      { nomi: "Ajratilgan kulturalar va ularni yo'q qilinishini", fayl: "282  Ajratilgan kulturalar va ularni yo'q qilinishini qayd qilish jurnali.docx_Parsing.uz.docx" },
      { nomi: "Patogen biologik agentlarning harakatini qayd etish", fayl: "283 Patogen biologik agentlar (PBA)ning harakatini qayd etish .docx_Parsing.uz.docx" },
      { nomi: "Muzey kulturalarining inventar kitobi", fayl: "284 Muzey kulturalarining inventar kitobi.docx_Parsing.uz.docx" },
      { nomi: "Yuqumli materiallarni avtoklavda zararsizlantirishni", fayl: "285  yuqumli materiallarni avtoklavda zararsizlantirishni hisobga olish.docx_Parsing.uz.docx" },
      { nomi: "VABO qo'zg'atuvchisiga odamlardan olingan materiallarni", fayl: "286  VABO  QOʻZGʻATUVCHISIGA ODAMLARDAN OLINGAN  MATERIALLARNI.docx_Parsing.uz.docx" },
      { nomi: "Vabo qo'zg'atuvchisiga atrof-muhit ob'yektlaridan", fayl: "287  Vabo qo'zg'atuvchisiga atrof-muhit ob'yektlaridan olingan materiallarni qayd qilish .docx_Parsing.uz.docx" },
      { nomi: "Vabo vibrionlari kulturalarining tavsifnomasi", fayl: "288  AJRATILGAN O1 SEROGURUHGA  MANSUB  VABO VIBRIONI KULTURALARINING TAVSIFNOMASI  VA QAYD QILISH DAFTARI  i.docx_Parsing.uz.docx" },
      { nomi: "Shtamm pasporti (brusellyoz, kuydirgi, vabo)", fayl: "289 Shtamm pasporti (brusellyoz, kuydirgi, vabo).docx_Parsing.uz.docx" },
      { nomi: "01 guruhga mansub vabo vibrionlarini tekshirish", fayl: "290  01 guruhga mansub vabo vibrionlarini tekshirish natijasi.docx_Parsing.uz.docx" },
      { nomi: "Zoonoz kasalliklarga tekshiruv xulosasi", fayl: "291  Zoonoz kasalliklarga tekshiruv xulosasi.docx_Parsing.uz.docx" },
      { nomi: "Identifikatsiyaga yuborilgan kulturalarning tekshirish", fayl: "292  Identifikatsiyaga yuborilgan kulturalarning tekshirish natijasi.docx_Parsing.uz.docx" },
      { nomi: "Shtammlarni berishni hisobga olish", fayl: "293  Shtammlarni berishni hisobga olish (respublika ichida).docx_Parsing.uz.docx" },
      { nomi: "Chet eldan shtammlarni qabul qilish", fayl: "294 Chet eldan shtammlarni qabul qilish.docx_Parsing.uz.docx" },
      { nomi: "Liofilizatsiya uchun keltirilgan shtammlar xarakati", fayl: "295  Liofilizatsiya uchun keltirilgan shtammlar xarakati .docx_Parsing.uz.docx" },
      { nomi: "1-2 guruh infektsiyalar qo'zg'atuvchilarini yo'q qilish", fayl: "296 1-2 guruh infektsiyalar qo'zg'atuvchilarini yo'q qilish dalolatnomasi.docx_Parsing.uz.docx" },
      { nomi: "Shtammlarni qabul qilish dalolatnomasi", fayl: "297  Shtammlarni qabul qilish dalolatnomasi.docx_Parsing.uz.docx" },
      { nomi: "Kuydirgi qo'zg'atuvchisi shtammlarni qayd qilish", fayl: "298  Ajratilgan kuydirgi qo'zg'atuvchisi shtammlarni qayd qilish va identifikatsiya natijalari.docx_Parsing.uz.docx" },
      { nomi: "Hayvonlarni yorish va tekshiruv natijalarini", fayl: "299 Hayvonlarni yorish va tekshiruv natijalarini qayd qilish.docx_Parsing.uz.docx" },
      { nomi: "Hayvonlar tomonidan tishlanganlar o'chog'ida", fayl: "300  Hayvonlar tomonidan tishlangan va boshqa muloqotlar natijasida jarohat olganlar o'chog'ida .docx_Parsing.uz.docx" },
      { nomi: "Birlamchi rayon sektorlarini tekshiruv natijalari", fayl: "301 Birlamchi rayon sektorlarini tekshiruv natijalari.docx" },
      { nomi: "Tuproqdan olingan namunalarni radiologik tekshirish", fayl: "302 Tuproqdan olingan namunalarni radiologik tekshirish bayonnomasi.docx_Parsing.uz.docx" },
      { nomi: "O'simliklardan olingan namunalarni radiologik tekshirish", fayl: "303 O'simliklardan olingan namunalarni radiologik tekshirish bayonnomasi.docx_Parsing.uz.docx" },
      { nomi: "Qurilish tugallangan ob'yektlarni foydalanishga rad etish", fayl: "304 (H.Sh) Qurilish (rekonstruksiya) tugallangan o,'yektlarni foydalanishga qabul qilishni rad etish to'g'risida xulosa.docx_Parsing.uz.docx" },
      { nomi: "Qurilish tugallangan ob'yektlarni foydalanishga qabul qilish", fayl: "305 (H.Sh) qurilish (rekonstruksiya) tugallangan ob'yektlarni foydalanishga qabul qilishni maqullash to'g'risida xulosa.docx_Parsing.uz.docx" },
      { nomi: "Bezgak kasalligi bo'yicha xavfli joylardan kelganlarni", fayl: "306 Bezgak kasalligi boʻyicha xavfli joylardan kelganlarni roʻyxatdan oʻt-kazish va D kuzatuviga olish.docx_Parsing.uz.docx" },
      { nomi: "Bezgak va kanali qaytalama tif kasalligiga", fayl: "307 Bezgak va  kanali qaytalama tif kasalligiga qon preparatlari tekshiruvlarini roʻyxatga olish.docx_Parsing.uz.docx" },
      { nomi: "Gelminioz va ichak soddalarga tekshiruvlarni", fayl: "308  Gelmintoz va ichak soddalarga tekshiruvlarni ro'yxatga olish jurnali.docx_Parsing.uz.docx" },
      { nomi: "Dezinfeksiya vositalarini natijalarini qayd etish", fayl: "309  Dezinfeksiya vositalarini natijalarini qayd etish .docx_Parsing.uz.docx" },
      { nomi: "Ultrabinafsha nurlanish darajasini o'lchash", fayl: "310 Ultrabinafsha nurlanish darajasini o'lchashdagi protokol.docx_Parsing.uz.docx" },
      { nomi: "Sanitariya-qoidalarni buzganligi haqida bayonnoma", fayl: "311 Sanitariya-gigiyena qoidalari va epidemiyaga qarshi kurash tartiblarini buzganligi haqida bayonnoma.docx_Parsing.uz.docx" },
      { nomi: "Jarima solish to'g'risidagi qarori", fayl: "312  Jarima solish to'g'risidagi qarori.docx_Parsing.uz.docx" },
      { nomi: "Jarima solinganligi haqidagi qarorni ro'yxatga olish", fayl: "313  Jarima solinganligi haqidagi qarorni ro'xatga olish .docx_Parsing.uz (1).docx" },
      { nomi: "Ma'muriy huquqbuzarlik ishini ko'rib chiqish", fayl: "314  Ma'muriy huquqbuzarlik to'g'risidagi ishni ko'rib chiqishbayonnomasi.docx_Parsing.uz.docx" },
      { nomi: "Ishdan chetlatish to'g'risidagi taklifi", fayl: "315  Ishdan chetlatish to'g'risidagi taklifi.docx_Parsing.uz.docx" },
      { nomi: "Taqiqlash, to'xtatib qo'yish bo'yicha qaror", fayl: "316  Taqiqlash, to'xtatib qo'yish bo'yicha qaror.docx_Parsing.uz.docx" },
      { nomi: "Ichimlik suvini tekshirish va natijalarini", fayl: "317  Ichimlik suvini tekshirish va natijalarini qayd etish.docx_Parsing.uz.docx" },
      { nomi: "Tuproq namunalarini tekshirish bo'yicha dalolatnoma", fayl: "318 Tuproq namunalarini tekshirish boʻyicha dalolatnoma.docx_Parsing.uz.docx" },
      { nomi: "Sanitariya-epidemiologik tekshiruv dalolatnomasi", fayl: "319 Sanitariya-epidemiologik tekshiruv oʻtkazilganligi haqida dalolatnoma.docx_Parsing.uz.docx" },
      { nomi: "Quturish kasalligiga gumon qilinib o'lganlardan", fayl: "320  Quturish kasalligiga gumon qilinib o'lganlardan olingan material (yo'llanma).docx_Parsing.uz.docx" },
      { nomi: "Kasallik qo'zg'atuvchi mikroblar bilan ifloslangan", fayl: "321  Kasallik qo'zg'atuvchi mikroblar bilan ifloslangan materiallarni zararsizlantirishni xisobga olish.docx_Parsing.uz.docx" },
      { nomi: "Muhitlarni tayyorlashni qayd qilish", fayl: "322  Muxitlarni tayyerlashni qayd qilish .docx_Parsing.uz.docx" },
      { nomi: "Ozuqa muhitlarni sterillash", fayl: "323  Ozuqa muxitlarni sterillash (avtoklavdan oʻt-kazish).docx_Parsing.uz.docx" },
      { nomi: "Mikrobiologik tekshirishlarni qayd qilish", fayl: "324  Mikrobiologik tekshirishlarni qayd qilish .docx_Parsing.uz.docx" },
      { nomi: "Leyshmanioz kasalligiga tekshiruvlarni", fayl: "325  Leyshmanioz kasalligiga tekshiruvlarni ro'yxatga olish .docx_Parsing.uz.docx" },
      { nomi: "Namunalar va ularni tekshirish natijalari", fayl: "326  Namunalar va ularni tekshirnsh natijalari berilganligini qayd etish.docx_Parsing.uz.docx" },
      { nomi: "Ochiq suv havzalari va oqava suvlarni tekshirish", fayl: "327  Ochiq suv havzalari va oqava suvlarni tekshirish natijalarini qayd etish.docx_Parsing.uz.docx" },
      { nomi: "Ochiq suv havzalari va oqava suvlarni tekshirish bo'yicha", fayl: "328  Ochiq suv havzalari va oqava suvlarni tekshirish boʻyicha bayonnoma.docx_Parsing.uz.docx" },
      { nomi: "Ochiq suv xavzalari va oqava suvlarni mikrobiologik", fayl: "329  Ochiq suv xavzalari va oqava suvlarni mikrobiologik tekshirish .docx_Parsing.uz.docx" },
      { nomi: "Ichimlik suvini tekshirish bo'yicha bayonnoma", fayl: "330  Ichimlik suvini tekshirish boʻyicha bayonnoma.docx_Parsing.uz.docx" },
      { nomi: "Ichimlik suvi bo'yicha mikrobiologik tekshirishlarni", fayl: "331  Ichimlik suvi boʻyicha mikrobiologik tekshirishlarni qayd etish.docx_Parsing.uz.docx" },
      { nomi: "Havoni tekshirish natijalarini qayd etish", fayl: "332 Havoni tekshirish natijalarini qayd etish .docx_Parsing.uz.docx" },
      { nomi: "Aholi yashash joylari havosini tekshirish bo'yicha", fayl: "333 Aholi yashash joylari havosini tekshirish boʻyicha bayonnoma.docx_Parsing.uz.docx" },
      { nomi: "Yopiq xonalar havosini tekshirish bo'yicha bayonnoma", fayl: "334  Yopiq xonalar havosini tekshirish boʻyicha bayonnoma.docx_Parsing.uz.docx" },
      { nomi: "Ob-havo omillarini o'lchash bo'yicha bayonnoma", fayl: "335  Ob-havo omillarini oʻlchash boʻyicha bayonnoma.docx_Parsing.uz.docx" },
      { nomi: "Havoni mikrobiologik tekshirish", fayl: "336 Havoni mikrobiologik tekshirish.docx_Parsing.uz.docx" },
      { nomi: "Tuproq namunasini tekshirish natijasini", fayl: "337  Tuproq namunasini tekshirish natijasini qayd etish .docx_Parsing.uz.docx" },
      { nomi: "Tuproq namunalarini tekshirish bo'yicha bayonnoma", fayl: "338  Tuproq namunalarini tekshirish boʻyicha bayonnoma.docx_Parsing.uz.docx" },
      { nomi: "Tuproqni mikrobiologik tekshirish", fayl: "339  Tuproqni mikrobiologik tekshirish .docx_Parsing.uz.docx" },
      { nomi: "Elektromagnit maydoni kuchlanishini o'lchash", fayl: "340 Elektromagnit maydoni kuchlanishini oʻlchashdagi.docx_Parsing.uz.docx" },
      { nomi: "Shovqin va tebranishni o'lchash bo'yicha", fayl: "341  Shovqin va tebranishni (vibrasiya) oʻlchash boʻyicha.docx_Parsing.uz.docx" },
      { nomi: "Yorug'likni o'lchash bo'yicha bayonnoma", fayl: "342 Yorugʻlikni oʻlchash boʻyicha bayonnoma.docx_Parsing.uz.docx" },
      { nomi: "Fizik omillar o'lchov natijalarini qayd etish", fayl: "343 (H.Sh) Fizik omillar (shovqin, tebranish, EM, MM, EMM, ESM, ultrabinafsha nurlanish, yoritilganlik) oʻlchov natijalarini qayd etish.docx_Parsing.uz.docx" },
      { nomi: "Radiotexnik ob'ektning sanitariya pasporti", fayl: "344 Radiotexnik ob'ektning sanitariya pasporti.docx_Parsing.uz.docx" },
      { nomi: "Tayyor taom va rasionlar kaloriyasi", fayl: "345 Tayyor taom va rasionlar kaloriyasi hamda kimyoviy tarkibini tekshirish bayonnomasi.docx_Parsing.uz.docx" },
      { nomi: "Tayyor taom va rasionlar tekshirish natijalarini", fayl: "346 Tayyor taom va rasionlar kaloriyasi hamda kimyoviy tarkibini tekshirish natijalarini qayd etish jurnali.docx_Parsing.uz.docx" },
      { nomi: "Oziq-ovqat mahsulotlaridan olingan namunalarni", fayl: "347  Oziq-ovqat mahsulotlaridan olingan namunalarni tekshirish boʻyicha.docx_Parsing.uz.docx" },
      { nomi: "Oziq-ovqat mahsuloti namunalarini tekshirish", fayl: "348  Oziq-ovqat mahsuloti namunalarini tekshirish natijalarini qayd etish.docx_Parsing.uz.docx" },
      { nomi: "Pestisidlar qoldiq miqdorini tekshirish", fayl: "349 (H.Sh) Qishloq xoʻjaligi va oziq-ovqat mahsulotlari namunalarida pestisidlar qoldiq miqdorini tekshirish natijalarini hisobga olish.docx_Parsing.uz.docx" },
      { nomi: "Oziq-ovqat mahsulotlarini mikrobiologik tekshiruvlarni", fayl: "350  Oziq- ovqat mahsulotlarini mikrobiologik tekshiruvlarini qayd etish jurnali.docx_Parsing.uz.docx" },
      { nomi: "Oziq-ovqat va kosmetika mahsulotlarini sanitariya", fayl: "351 Oziq-ovqat va kosmetika maxsulotlarini sanitariya-bakteriologik tekshiruvi boʻyicha bayonnoma.docx_Parsing.uz.docx" },
      { nomi: "Iste'mol uchun yaroqsiz deb topilgan", fayl: "352 (H.Sh) Iste'mol uchun yaroqsiz deb topilgan oziq- ovqat mahsulotlarini savdoga chiqarilishini taqiqlash qarorlarini roʻyhatga olish.docx_Parsing.uz.docx" },
      { nomi: "Oziq-ovqat namunalarida spektrometrik", fayl: "353  Oziq-ovqat namunalarida spektrometrik oʻlchovlarni hisobga olish.docx_Parsing.uz.docx" },
      { nomi: "Qurilish namunalarida spektrometrik", fayl: "354  Qurilish namunalarida spektrometrik oʻlchovlarni hisobga olish.docx_Parsing.uz.docx" },
      { nomi: "Radiometrik o'lchovlarni hisobga olish", fayl: "355  Radiometrik oʻlchovlarni hisobga olish.docx_Parsing.uz.docx" },
      { nomi: "Dozimetrik o'lchov bo'yicha bayonnoma", fayl: "356  Dozimetrik oʻlchov boʻyicha bayonnoma.docx_Parsing.uz.docx" },
      { nomi: "Rentgen kabinetni foydalanishga qabul qilish", fayl: "357  Rentgen kabinetni foydalanishga qabul etilganligi haqida dalolatnoma.docx_Parsing.uz.docx" },
      { nomi: "Radiometrik o'lchov bo'yicha", fayl: "358 Oʻtkazilgan radiometrik oʻlchov buyicha.docx_Parsing.uz.docx" },
      { nomi: "Rentgen nurlaridan saqlanish vositalarini", fayl: "359  Rentgen kabinetida rentgen nurlaridan saqlanish vositalarini tekshirish boʻyicha bayonnoma.docx_Parsing.uz.docx" },
      { nomi: "Dozimetrik o'lchovlarni hisobga olish", fayl: "360  Dozimetrik oʻlchovlarni hisobga olish.docx_Parsing.uz.docx" },
      { nomi: "Sanitariya-epidemiologiya belgisi", fayl: "361 (H.Sh) Tadbirkorlik sub'ektlarining sanitariya qoidalari, normalari va gigiena normativlariga mosligi boʻyicha Sanitariya-epidemiologiya osoyishtalik belgisi.docx_Parsing.uz.docx" },
      { nomi: "Polimer va boshqa materiallardan tayyorlangan", fayl: "362 (H.Sh) Polimer va boshqa materiallardan tayyorlangan ashyolardan (idish, tovoq, oʻyinchoq va boshqalardan) olingan namunalarni va tekshirish natijalarini roʻyxat.docx_Parsing.uz.docx" },
      { nomi: "Polimer va boshqa ashyolardan tayyorlangan materiallarni", fayl: "363  Polimer va boshqa ashyolardan tayyorlangan materiallarni tekshirish boʻyicha bayonnoma.docx_Parsing.uz.docx" },
      { nomi: "Toksikologik tekshiruvlarni ro'yxatga olish", fayl: "364  Toksikologik tekshiruvlarni roʻyxatga olish.docx_Parsing.uz.docx" },
      { nomi: "Virusologik tekshiruvlarni qayd etish", fayl: "365  Virusologik tekshiruvlarni qayd etish.docx_Parsing.uz.docx" },
      { nomi: "Sanitariya-virusologiya nazoratidagi", fayl: "366 Sanitariya-virusologiya nazoratidagi roʻyxatga olish va tekshiruv natijalarini qayd etish.docx_Parsing.uz.docx" },
      { nomi: "Dori-darmonlar va dorixona idishlarini mikrobiologik", fayl: "367  Dori-darmonlar va dorixona idishlarini mikrobiologik tekshirishni qayd etish.docx_Parsing.uz.docx" },
      { nomi: "Konservalarni mikrobiologik tekshirish", fayl: "368  Konservalarni mikrobiologik tekshirish.docx_Parsing.uz.docx" },
      { nomi: "Serologik tekshiruvlarni qayd etish", fayl: "369  Serologik tekshiruvlarni qayd etish .docx_Parsing.uz.docx" },
      { nomi: "Namunalarni sanitariya-bakteriologik tekshiruv", fayl: "370  Namunalarni sanitariya-bakteriologik tekshiruv bayoni.docx_Parsing.uz.docx" },
      { nomi: "Bo'g'ma kasallarni mikrobiologik tekshirish", fayl: "371  Bo'g'ma kasallarni mikrobiologik tekshirish.docx_Parsing.uz.docx" },
      { nomi: "Ko'k yo'tal kasalligini mikrobiologik tekshirish", fayl: "372  Koʻk yoʻtal kasalligini mikrobiologik tekshirish.docx_Parsing.uz.docx" },
      { nomi: "Meningokokklarni mikrobiologik tekshirish", fayl: "373 Meningokokklarni mikrobiologik tekshirish.docx_Parsing.uz.docx" },
      { nomi: "Patogen stafilakokk tashuvchanlikka tekshiruv", fayl: "374  Patogen stafilakokk tashuvchanlikka tekshiruv.docx_Parsing.uz.docx" },
      { nomi: "Xirurgik materiallarni sterillikka tekshiruv", fayl: "375 Xirurgik materiallarni sterillikka tekshiruv.docx_Parsing.uz.docx" },
      { nomi: "Konni sterillikka tekshirishni qayd qilish", fayl: "376 Qonni sterillikka tekshirishni qayd qilish.docx_Parsing.uz.docx" },
      { nomi: "Tashqi muhit anjomlaridan olingan surtma", fayl: "377  Tashqi muxit anjomlaridan olingan surtmalar namunalarini tekshirish bayoni.docx_Parsing.uz.docx" },
      { nomi: "Surtmalarda o'tkazilgan mikrobiologik", fayl: "378  Surtmalarda oʻtkazilgan mikrobiologik tekshirishlarni qaydlov.docx_Parsing.uz.docx" },
      { nomi: "Kon so'ruvchi bo'g'imoyoqlilarning imago va lichinkalari", fayl: "379  Qon soʻruvchi boʻgʻimoyoqlilarning imago va lichinkalari bilan kurashish ishlarini hisobga olish.docx_Parsing.uz.docx" },
      { nomi: "Entomofauna va kanalar ustidan kuzatuvlarni", fayl: "380  Entomofauna va kanalar ustidan asosiy fenologik kuzatuvlarni hisobga olish.docx_Parsing.uz.docx" },
      { nomi: "Entomofauna va kanalar asosiy vakillarining", fayl: "381 Entomofauna va kanalar asosiy vakillarining mavsumiy son oʻzgarishlarini hisobga olish.docx_Parsing.uz.docx" },
      { nomi: "Jamlama bildirishnoma (bo'g'imoyoqlilar guruhi)", fayl: "382 Jamlama bildirishnoma (boʻgʻimoyoqlilar guruhi) mavsumiy tur tarkibi.docx_Parsing.uz.docx" },
      { nomi: "Sanitariya-gelminioz tekshiruvlarni ro'yxatga olish", fayl: "383  Sanitariya- gelmintologik tekshirishlarni ro'yxatga olish.docx_Parsing.uz.docx" },
      { nomi: "Bezgak va kanali qaytalama tif kasalliklari bo'yicha", fayl: "384 (H.Sh) Bezgak va kanali qaytalama tif kasalliklari boʻyicha musbat qon preparatlarini nazorat tekshiruvini qayd etish.docx_Parsing.uz.docx" },
      { nomi: "Bezgak va kanali qaytalama tif kasalligiga manfiy", fayl: "385 Bezgak va kanali kaytalama tif kasalligiga manfiy qon preparatlarini nazorat tekshiruvini qayd etish.docx_Parsing.uz.docx" },
      { nomi: "Bezgak va kanali qaytalama tif kasalliklariga", fayl: "386 Bezgak va kanali kaytalama tif kasalliklariga tekshiruvlarni ruyxatga olish.docx_Parsing.uz.docx" },
      { nomi: "Tashqi muhit anjomlaridan sanitariya-gelminioz", fayl: "387 Tashqi muhit anjomlaridan sanitar- gelmintologik surtmalar olish dalolatnomasi.docx_Parsing.uz.docx" },
      { nomi: "Aholi punktlarini ekstensiv tekshirish natijasida", fayl: "388 Aholi punktlarini ekstensiv tekshirish natijasida aniqlangan boʻgʻmoyoqlilarning imago sonini hisobga olish.docx_Parsing.uz.docx" },
      { nomi: "Dezinfeksiyalovchi kameraga kuzatuvchi xat", fayl: "389  dezinfeksiyalovchi kameraga kuzatuvchi (xamrox) xat.docx_Parsing.uz.docx" },
      { nomi: "Yakunlovchi dezinfeksiya uchun naryad", fayl: "390  Yakunlovchi dezinfeksiya oʻtkazish uchun №- naryad.docx_Parsing.uz.docx" },
      { nomi: "Naryad bo'yicha o'tkazilgan dezinfeksiya", fayl: "391  Naryad boʻyicha oʻtkazilgan dezinfeksiya haqida ma'lumotnoma.docx_Parsing.uz.docx" },
      { nomi: "Dezinfeksiyalovchi kameraga kuzatuvchi (2)", fayl: "392  sonli dezinfeksiyalovchi kameraga kuzatuvchi (xamrox) xat.docx_Parsing.uz.docx" },
      { nomi: "Joriy dezinfeksiya nazorat qilish kartasi", fayl: "393  Kasallik oʻchogʻida joriy dezinfeksiya oʻtkazilganligini nazorat qilish kartasi.docx_Parsing.uz.docx" },
      { nomi: "Dezinfeksiya vositalarini tekshirish bayonnoma", fayl: "394  Dezinfeksiya vositalarini tekshirish bayonnoma.docx_Parsing.uz.docx" },
      { nomi: "Dezinfeksiya sifatini laboratoriya usulida", fayl: "395  Dezinfeksiya sifatini laboratoriya usulida nazorat qilishni roʻyxatga olish.docx_Parsing.uz.docx" },
      { nomi: "Dezinsektsiya o'tkazish uchun naryad", fayl: "396  Dezinseksiya oʻtkazish uchun naryad.docx_Parsing.uz.docx" },
      { nomi: "Dezinfeksiyalovchi moddalarni bakteriosid", fayl: "397 (H.Sh) Dezinfeksiyalovchi moddalarni bakteriosid xususiyatlarini toʻqimali test ob'ektlarda tajriba qilish natijalarini qayd qilish.docx_Parsing.uz.docx" },
      { nomi: "Sil epid kartasi", fayl: "398  Сил эпид карта.docx" },
      { nomi: "O'lat qo'zg'atuvchisini ajratilgan kultura", fayl: "399  O'zR SSV KUXYuKMM tomonidan o'lat qo'zg'atuvchisini ajratilgan kultura to'g'risida xabarnoma.docx_Parsing.uz.docx" },
    ],
  },
];

const raiTabs = [
  { id: "all", nomi: "Barchasi" },
  ...kategoriyalar.map((k) => ({ id: k.id, nomi: k.nomi })),
];

export default function Buyruqlar() {
  const [activeTab, setActiveTab] = useState("all");
  const [openCat, setOpenCat] = useState(null);
  const [search, setSearch] = useState("");

  const trimmed = search.trim().toLowerCase();

  const filteredKategoriyalar = trimmed
    ? kategoriyalar.map((k) => ({
        ...k,
        hujjatlar: k.hujjatlar.filter((h) => h.nomi.toLowerCase().includes(trimmed)),
      })).filter((k) => k.hujjatlar.length > 0)
    : kategoriyalar;

  const visible = activeTab === "all" ? filteredKategoriyalar : filteredKategoriyalar.filter((k) => k.id === activeTab);

  const toggleCat = (id) => setOpenCat((prev) => (prev === id ? null : id));

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-10 py-16">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline mb-8">
        <i className="fa-solid fa-arrow-left"></i>
        Menyuga qaytish
      </Link>

      <div className="flex items-center gap-4 mb-3">
        <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl flex-shrink-0">
          <i className="fa-solid fa-file-lines"></i>
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900">Buyruqlar va shakllar</h1>
          <p className="text-gray-500 text-sm">Tibbiy hujjatlar va birlamchi shakllar to'plami</p>
        </div>
      </div>

      <p className="text-sm text-gray-400 mb-6 ml-[4.5rem]">
        {trimmed ? `Topiladi: ${visible.reduce((s, k) => s + k.hujjatlar.length, 0)} ta` : `Jami: ${kategoriyalar.reduce((s, k) => s + k.hujjatlar.length, 0)} ta hujjat`}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {raiTabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition border ${
              activeTab === t.id
                ? "bg-blue-700 text-white border-blue-700"
                : "bg-white text-gray-600 border-gray-200 hover:border-blue-400"
            }`}
          >
            {t.nomi}
          </button>
        ))}
      </div>

      <div className="relative mb-6">
        <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Hujjat nomi bo'yicha qidirish..."
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
          >
            <i className="fa-solid fa-xmark text-gray-500 text-xs"></i>
          </button>
        )}
      </div>

      <div className="flex flex-col gap-4">
        {trimmed && visible.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <i className="fa-solid fa-folder-open text-3xl mb-3 block"></i>
            <p className="font-semibold">Hech narsa topilmadi</p>
            <p className="text-sm mt-1">Boshqa kalit so'z bilan qidirib ko'ring</p>
          </div>
        )}
        {visible.map((kat) => {
          const isOpen = openCat === kat.id || activeTab !== "all" || !!trimmed;
          return (
            <div key={kat.id} className="border border-blue-100 rounded-xl bg-white shadow-sm overflow-hidden">
              <button
                onClick={() => toggleCat(kat.id)}
                className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-blue-50/50 transition"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                  <i className={kat.icon}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-blue-900">{kat.nomi}</p>
                  <p className="text-xs text-gray-400">{kat.hujjatlar.length} ta hujjat</p>
                </div>
                <i className={`fa-solid fa-chevron-down text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}></i>
              </button>

              <div className={`transition-all duration-300 ease-out ${isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
                <div className="px-5 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {kat.hujjatlar.map((h, i) => {
                    const ext = h.fayl.split(".").pop().toLowerCase();
                    const isXlsx = ext === "xlsx";
                    const iconClass = isXlsx ? "fa-solid fa-file-excel text-green-500" : "fa-solid fa-file-word text-blue-500";
                    return (
                      <a
                        key={i}
                        href={`/docs/buyruqlar/${kat.ratio}/${encodeURIComponent(h.fayl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-blue-50 transition text-sm text-gray-700 group"
                      >
                        <i className={`${iconClass} text-base flex-shrink-0`}></i>
                        <span className="truncate group-hover:text-blue-700 transition">{h.nomi}</span>
                        <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-gray-300 group-hover:text-blue-500 ml-auto flex-shrink-0"></i>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
