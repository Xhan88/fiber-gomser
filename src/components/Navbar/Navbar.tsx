import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  MessageCircle,
  X,
} from "lucide-react";

const navLinks = [
  {
    label: "Inicio",
    path: "/",
  },
  {
    label: "Nosotros",
    path: "/nosotros",
  },
  {
    label: "Productos",
    path: "/productos",
  },
  {
    label: "Industrias",
    path: "/industrias",
  },
  {
    label: "Servicios",
    path: "/servicios",
  },
  {
    label: "Galería",
    path: "/galeria",
  },
  {
    label: "Contacto",
    path: "/contacto",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 lg:px-10">
        
        {/* Logo */}
        <NavLink to="/" className="flex shrink-0 items-center">
          <img
            src="/iconF/logo.png"
            alt="Fiber Gomser"
            className="h-20 w-auto object-contain"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `relative text-[13px] font-semibold uppercase transition-colors duration-300 ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-800 hover:text-blue-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute -bottom-3 left-0 h-[2px] bg-blue-600 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-sm bg-blue-600 px-5 py-3 text-xs font-bold uppercase text-white shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg lg:flex"
        >
          <MessageCircle size={17} />
          Cotizar ahora
        </a>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex items-center justify-center text-slate-900 lg:hidden"
          aria-label="Abrir menú"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-6 shadow-lg lg:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-semibold uppercase transition-colors ${
                    isActive ? "text-blue-600" : "text-slate-800 hover:text-blue-600"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-blue-600 px-5 py-3 text-sm font-bold uppercase text-white rounded-sm"
            >
              <MessageCircle size={18} />
              Cotizar ahora
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;