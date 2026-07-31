export default function HuquqiyAsos() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-10 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2 text-center">Huquqiy asos</h1>
      <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
        Filial faoliyati asos qilib olingan me'yoriy-huquqiy hujjatlar
      </p>

      <div className="flex flex-col gap-10">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center">
              <i className="fa-solid fa-landmark"></i>
            </div>
            <h2 className="text-xl font-bold text-blue-900">O'zbekiston Respublikasi Qonunlari</h2>
          </div>
          <div className="flex flex-col gap-3">
            <div className="border border-blue-100 rounded-lg p-5 bg-white shadow-sm">
              <p className="font-semibold text-gray-900 mb-1">"Sud ekspertizasi to'g'risida"gi O'zbekiston Respublikasi Qonuni</p>
              <p className="text-sm text-gray-500">Sud-ekspertlik faoliyatini tartibga soluvchi asosiy qonun hujjati.</p>
            </div>
            <div className="border border-blue-100 rounded-lg p-5 bg-white shadow-sm">
              <p className="font-semibold text-gray-900 mb-1">"Sog'liqni saqlash tizimi to'g'risida"gi qonun</p>
              <p className="text-sm text-gray-500">Tibbiy faoliyatni umumiy tartibga soluvchi qonun hujjati.</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center">
              <i className="fa-solid fa-file-shield"></i>
            </div>
            <h2 className="text-xl font-bold text-blue-900">Ichki buyruqlar va nizomlar</h2>
          </div>
          <div className="flex flex-col gap-3">
            <div className="border border-blue-100 rounded-lg p-5 bg-white shadow-sm">
              <p className="font-semibold text-gray-900 mb-1">Markazning nizomi</p>
              <p className="text-sm text-gray-500">Markaz o'z faoliyatini qanday yuritishini belgilovchi hujjat.</p>
            </div>
            <div className="border border-blue-100 rounded-lg p-5 bg-white shadow-sm">
              <p className="font-semibold text-gray-900 mb-1">Ekspertiza tayinlash tartibi</p>
              <p className="text-sm text-gray-500">Kimlar, qanday tartibda va qancha muddatda ekspertiza tayinlashi mumkinligi haqida ma'lumot.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
