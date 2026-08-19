import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Building2,
  ChevronDown,
  Clock3,
  Link2,
  Mail,
  MapPin,
  Package,
  Phone,
  Settings,
} from "lucide-react";

import {
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

type AccordionName =
  | "enlaces"
  | "productos"
  | "industrias"
  | "servicios"
  | null;

const Footer = () => {
  const [openAccordion, setOpenAccordion] =
    useState<AccordionName>(null);

  const toggleAccordion = (accordion: AccordionName) => {
    setOpenAccordion((current) =>
      current === accordion ? null : accordion
    );
  };

  return (
    <footer className="bg-[#061b31] text-white">


      <div className="px-5 py-12 lg:hidden">

        <div className="flex flex-col items-center text-center">
          <Link to="/">
            <img
              src="/iconF/logoRec.png"
              alt="Fiber Gomser"
              className="h-20 w-auto object-contain"
            />
          </Link>

          <p className="mt-5 max-w-[330px] text-sm leading-6 text-white/75">
            Fabricamos soluciones textiles de alta calidad
            para diferentes industrias en todo México.
          </p>

          <div className="mt-7 flex items-center gap-4">
            <a
              href="https://www.facebook.com/fiber.gomser.3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Fiber Gomser"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition-all duration-300 hover:bg-blue-700"
            >
              <FaFacebookF size={19} />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de Fiber Gomser"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition-all duration-300 hover:bg-blue-700"
            >
              <FaWhatsapp size={21} />
            </a>
          </div>
        </div>


        <div className="mt-12 overflow-hidden rounded-xl border border-white/15 bg-white/[0.025]">

          <div className="border-b border-white/10">
            <button
              type="button"
              onClick={() => toggleAccordion("enlaces")}
              className="flex w-full items-center gap-4 px-5 py-5 text-left"
            >
              <Link2
                size={25}
                strokeWidth={1.7}
                className="text-white"
              />

              <span className="flex-1 text-sm font-bold uppercase tracking-wide">
                Enlaces
              </span>

              <ChevronDown
                size={22}
                className={`text-blue-500 transition-transform duration-300 ${
                  openAccordion === "enlaces"
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                openAccordion === "enlaces"
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <ul className="space-y-3 px-14 pb-6 text-sm text-white/70">
                  <li>
                    <Link to="/" className="hover:text-blue-400">
                      Inicio
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/nosotros"
                      className="hover:text-blue-400"
                    >
                      Nosotros
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/productos"
                      className="hover:text-blue-400"
                    >
                      Productos
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/industrias"
                      className="hover:text-blue-400"
                    >
                      Industrias
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/servicios"
                      className="hover:text-blue-400"
                    >
                      Servicios
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/galeria"
                      className="hover:text-blue-400"
                    >
                      Galería
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/contacto"
                      className="hover:text-blue-400"
                    >
                      Contacto
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-b border-white/10">
            <button
              type="button"
              onClick={() => toggleAccordion("productos")}
              className="flex w-full items-center gap-4 px-5 py-5 text-left"
            >
              <Package
                size={25}
                strokeWidth={1.7}
              />

              <span className="flex-1 text-sm font-bold uppercase tracking-wide">
                Productos
              </span>

              <ChevronDown
                size={22}
                className={`text-blue-500 transition-transform duration-300 ${
                  openAccordion === "productos"
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                openAccordion === "productos"
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <ul className="space-y-3 px-14 pb-6 text-sm text-white/70">
                  <li>Fibras para relleno</li>
                  <li>Guata laminada</li>
                  <li>Geotextiles</li>
                  <li>Capitonados</li>
                  <li>Servicio ultrasónico</li>
                  <li>Guata para acolchado</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-b border-white/10">
            <button
              type="button"
              onClick={() => toggleAccordion("industrias")}
              className="flex w-full items-center gap-4 px-5 py-5 text-left"
            >
              <Building2
                size={25}
                strokeWidth={1.7}
              />

              <span className="flex-1 text-sm font-bold uppercase tracking-wide">
                Industrias
              </span>

              <ChevronDown
                size={22}
                className={`text-blue-500 transition-transform duration-300 ${
                  openAccordion === "industrias"
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                openAccordion === "industrias"
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <ul className="space-y-3 px-14 pb-6 text-sm text-white/70">
                  <li>Mueblera</li>
                  <li>Automotriz</li>
                  <li>Construcción</li>
                  <li>Juguetera</li>
                  <li>Agrícola</li>
                  <li>Hotelería</li>
                  <li>Colchonera</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={() => toggleAccordion("servicios")}
              className="flex w-full items-center gap-4 px-5 py-5 text-left"
            >
              <Settings
                size={25}
                strokeWidth={1.7}
              />

              <span className="flex-1 text-sm font-bold uppercase tracking-wide">
                Servicios
              </span>

              <ChevronDown
                size={22}
                className={`text-blue-500 transition-transform duration-300 ${
                  openAccordion === "servicios"
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                openAccordion === "servicios"
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <ul className="space-y-3 px-14 pb-6 text-sm text-white/70">
                  <li>Pun-sonic / Ultrasónico</li>
                  <li>Capitonados</li>
                  <li>Soluciones textiles</li>
                  <li>Producción personalizada</li>
                </ul>
              </div>
            </div>
          </div>
        </div>



        <div className="mt-6 rounded-xl border border-white/15 bg-white/[0.025] p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600">
              <MapPin size={23} />
            </div>

            <h3 className="text-base font-bold uppercase">
              Contacto
            </h3>
          </div>

          <div className="mt-6 space-y-5 pl-2 text-sm text-white/75">

            <div className="flex items-start gap-4">
              <MapPin
                size={18}
                className="mt-1 shrink-0 text-white"
              />

              <p className="leading-6">
                Carretera Federal No. 80 #2985,
                <br />
                El Hipadero, Tepatitlán de Morelos,
                <br />
                Jalisco, México.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Phone
                size={18}
                className="shrink-0 text-white"
              />

              <a
                href="tel:3337917155"
                className="hover:text-blue-400"
              >
                333 791 7155
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Mail
                size={18}
                className="shrink-0 text-white"
              />

              <a
                href="mailto:ventas@fibergomser.com"
                className="break-all hover:text-blue-400"
              >
                ventas@fibergomser.com
              </a>
            </div>
          </div>
        </div>

    

        <div className="mt-6 rounded-xl border border-white/15 bg-white/[0.025] p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600">
              <Clock3 size={23} />
            </div>

            <h3 className="text-base font-bold uppercase">
              Horario de atención
            </h3>
          </div>

          <div className="mt-6 pl-16 text-sm text-white/75">
            <div>
              <p className="font-bold text-white">
                Lunes a Viernes
              </p>

              <p className="mt-1">
                8:00 am - 6:00 pm
              </p>
            </div>

            <div className="mt-5 border-t border-white/10 pt-5">
              <p className="font-bold text-white">
                Sábados
              </p>

              <p className="mt-1">
                8:00 am - 1:00 pm
              </p>
            </div>
          </div>
        </div>



        <div className="mt-10 border-t border-white/20 pt-7 text-center text-xs leading-6 text-white/60">
          <p>
            © 2024 Fiber Gomser. Todos los derechos reservados.
          </p>

          <p className="mt-3">
            Diseño web por{" "}
            <span className="font-bold text-blue-400">
              Código Fuente
            </span>{" "}
            - Desarrollo Web
          </p>
        </div>
      </div>

  

      <div className="hidden lg:block">
        <div className="mx-auto max-w-[1440px] px-12 py-10 xl:px-16">
          <div className="grid grid-cols-[1.2fr_0.8fr_0.9fr_1.25fr_0.9fr] gap-10">

            <div>
              <Link to="/">
                <img
                  src="/iconF/logoRec.png"
                  alt="Fiber Gomser"
                  className="h-16 w-auto object-contain"
                />
              </Link>

              <p className="mt-4 max-w-[260px] text-xs leading-5 text-white/75">
                Fabricamos soluciones textiles de alta calidad para diferentes
                industrias en todo México.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href="https://www.facebook.com/fiber.gomser.3"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook de Fiber Gomser"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
                >
                  <FaFacebookF size={17} />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp de Fiber Gomser"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
                >
                  <FaWhatsapp size={19} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase">
                Enlaces
              </h3>

              <ul className="mt-4 space-y-2 text-xs text-white/80">
                <li><Link to="/" className="hover:text-blue-400">Inicio</Link></li>
                <li><Link to="/nosotros" className="hover:text-blue-400">Nosotros</Link></li>
                <li><Link to="/productos" className="hover:text-blue-400">Productos</Link></li>
                <li><Link to="/industrias" className="hover:text-blue-400">Industrias</Link></li>
                <li><Link to="/servicios" className="hover:text-blue-400">Servicios</Link></li>
                <li><Link to="/galeria" className="hover:text-blue-400">Galería</Link></li>
                <li><Link to="/contacto" className="hover:text-blue-400">Contacto</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase">
                Productos
              </h3>

              <ul className="mt-4 space-y-2 text-xs text-white/80">
                <li>Fibras para relleno</li>
                <li>Guata laminada</li>
                <li>Geotextiles</li>
                <li>Capitonados</li>
                <li>Servicio ultrasónico</li>
                <li>Guata para acolchado</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase">
                Contacto
              </h3>

              <div className="mt-4 space-y-4 text-xs text-white/80">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={17}
                    className="mt-0.5 shrink-0"
                  />

                  <p className="leading-5">
                    Carretera Federal No. 80 #2985,
                    <br />
                    El Hipadero, Tepatitlán de Morelos,
                    <br />
                    Jalisco, México.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={16} />

                  <a
                    href="tel:3337917155"
                    className="hover:text-blue-400"
                  >
                    333 791 7155
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} />

                  <a
                    href="mailto:ventas@fibergomser.com"
                    className="hover:text-blue-400"
                  >
                    ventas@fibergomser.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase">
                Horario de atención
              </h3>

              <div className="mt-4 space-y-5 text-xs text-white/80">
                <div>
                  <p className="font-semibold text-white">
                    Lunes a Viernes
                  </p>

                  <p className="mt-1">
                    8:00 am - 6:00 pm
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Sábados
                  </p>

                  <p className="mt-1">
                    8:00 am - 1:00 pm
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-white/15 pt-5 text-[11px] text-white/65">
            <p>
              © 2024 Fiber Gomser. Todos los derechos reservados.
            </p>

            <p>
              Diseño web por{" "}
              <span className="font-semibold text-white">
                Código Fuente
              </span>{" "}
              - Desarrollo Web
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;