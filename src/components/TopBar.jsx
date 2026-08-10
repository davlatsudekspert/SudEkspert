import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'

export default function TopBar() {
  return (
    <div className="hidden lg:block bg-white">
      <div className="max-w-7xl mx-auto flex items-center gap-3 px-4 py-3 lg:px-6 lg:py-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-[#13285A] flex items-center justify-center flex-shrink-0 overflow-hidden">
          <img className="w-full h-full object-cover" src={logo} alt="Andijon filiali logotipi" />
        </div>
        <div className="text-left min-w-0 flex-1">
          <h1 className="text-[13px] sm:text-base lg:text-[19px] font-extrabold text-[#13285A] leading-snug tracking-tight">
            RESPUBLIKA SUD TIBBIY EKSPERTIZA ILMIY-AMALIY MARKAZI
          </h1>
          <h1 className="text-[13px] sm:text-base lg:text-[19px] font-extrabold text-[#13285A] leading-snug tracking-tight">
            ANDIJON FILIALI
          </h1>
        </div>

        <Link
          to="/boglanish"
          className="hidden lg:flex items-center justify-center gap-2.5 bg-[#13285A] text-white rounded-full px-6 py-3 text-sm font-bold tracking-wide hover:opacity-90 active:scale-95 transition flex-shrink-0"
        >
          <i className="fa-solid fa-phone"></i>
          Bog'lanish
        </Link>
      </div>
    </div>
  );
}
