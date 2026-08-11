import { useState } from "react";
import {
  ChevronDown,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";

const navLinks = [
  {
    label: "Inicio",
    href: "#inicio",
  },
  {
    label: "Nosotros",
    href: "#nosotros",
  },
  {
    label: "Productos",
    href: "#productos",
    dropdown: true,
  },
  {
    label: "Industrias",
    href: "#industrias",
  },
  {
    label: "Servicios",
    href: "#servicios",
  },
  {
    label: "Galería",
    href: "#galeria",
  },
  {
    label: "Contacto",
    href: "#contacto",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 lg:px-10">
        
        {/* Logo */}
        <a href="#inicio" className="flex shrink-0 items-center">
          <img
            src="/iconF/logo.png"
            alt="Fiber Gomser"
            className="h-20 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 text-[13px] font-semibold uppercase text-slate-800 transition-colors hover:text-blue-600"
                  >
                    {link.label}

                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        isProductsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isProductsOpen && (
                    <div className="absolute left-0 top-full min-w-[230px] pt-5">
                      <div className="overflow-hidden rounded-md border border-slate-100 bg-white shadow-xl">
                        <a
                          href="#fibras"
                          className="block px-5 py-3 text-sm text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                        >
                          Fibras para relleno
                        </a>

                        <a
                          href="#guata"
                          className="block px-5 py-3 text-sm text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                        >
                          Guata laminada
                        </a>

                        <a
                          href="#geotextiles"
                          className="block px-5 py-3 text-sm text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                        >
                          Geotextiles
                        </a>

                        <a
                          href="#capitonados"
                          className="block px-5 py-3 text-sm text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                        >
                          Capitonados
                        </a>

                        <a
                          href="#ultrasonico"
                          className="block px-5 py-3 text-sm text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                        >
                          Servicio ultrasónico
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                className="relative text-[13px] font-semibold uppercase text-slate-800 transition-colors hover:text-blue-600"
              >
                {link.label}

                {link.label === "Inicio" && (
                  <span className="absolute -bottom-3 left-0 h-[2px] w-full bg-blue-600" />
                )}
              </a>
            );
          })}
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
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-semibold uppercase text-slate-800 transition-colors hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-blue-600 px-5 py-3 text-sm font-bold uppercase text-white"
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