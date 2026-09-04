import { Bookmark, Menu, X } from "lucide-react";
import { useState } from "react";
import {Link, useLocation} from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 py-4 mx-10">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-lg font-bold shadow-lg shadow-violet-600/30">
            ✦
          </div>

          <h1 className="text-[28px] font-bold tracking-tight text-white">
            Media<span className="text-violet-400">Vault</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 md:flex text-[22px] font-medium">

          <Link to='/'
            className={`${(location.pathname === '/' ? 'text-white' : 'text-slate-400 transition hover:text-violet-400')}`}>
            Explore
          </Link>

          <Link to='/collection'
            className={`${(location.pathname === '/collection' ? 'text-white' : 'text-slate-400 transition hover:text-violet-400')} flex items-center gap-1.5`}>
            <Bookmark size={20} className="mt-1"/>
            Saved
          </Link>

        </div>

        {/* Mobile Menu */}
            <button

            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl p-2 text-slate-300 transition hover:bg-white/10 md:hidden">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}

            </button>

      </div>

      {/* Mobile Navigation */}
      { menuOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-2 text-[19px] font-medium">

            <Link to='/'
              className={`${(location.pathname === '/' ? 'bg-violet-600/10 text-violet-400' : 'text-slate-400 transition hover:bg-white/5 hover:text-white')} rounded-xl px-4 py-3 `} >
              Explore
            </Link>

            <Link to='/collection'
              className={`${(location.pathname === '/collection' ? 'bg-violet-600/10 text-violet-400' : 'text-slate-400 transition hover:bg-white/5 hover:text-white')} flex items-center gap-1 rounded-xl px-3 py-3 `}>
              <Bookmark size={19} className="mt-0.5"/>
              Saved
            </Link>

          </div>
        </div> )}
    </nav> )
}

export default Navbar