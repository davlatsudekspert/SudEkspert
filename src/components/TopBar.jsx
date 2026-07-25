import logo from '../assets/logo.jpg'

export default function TopBar() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-[#13285A] flex items-center justify-center text-white flex-shrink-0">
          <img className='rounded-[50%]' src={logo} alt="" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-lg md:text-xl font-extrabold text-[#13285A] leading-tight">
              RESPUBLIKA SUD TIBBIY EKSPERTIZA
            </h1>
            <h1 className="text-lg md:text-xl font-extrabold text-[#13285A] leading-tight">
              ILMIY-AMALIY MARKAZI
            </h1>
            <h1 className="text-lg md:text-xl font-extrabold text-[#13285A] leading-tight">
              ANDIJON FILIALI
            </h1>
          </div>
        </div>

      </div>
    </div>
  );
}
