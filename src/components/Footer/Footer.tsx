import {
    Mail,
    MapPin,
    Phone,
  } from "lucide-react";
  
  import {
    FaFacebookF,
    FaWhatsapp,
  } from "react-icons/fa";
  
  const Footer = () => {
    return (
      <footer className="bg-[#061b31] text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-10 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1.25fr_0.9fr]">
  
            {/* Brand */}
            <div>
              <img
                src="/iconF/logoRec.png"
                alt="Fiber Gomser"
                className="h-16 w-auto object-contain"
              />
  
              <p className="mt-4 max-w-[260px] text-xs leading-5 text-white/75">
                Fabricamos soluciones textiles de alta calidad para diferentes
                industrias en todo México.
              </p>
  
              <div className="mt-5 flex items-center gap-3">
  {/* Facebook */}
  <a
    href="https://www.facebook.com/fiber.gomser.3"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook de Fiber Gomser"
    className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
  >
    <FaFacebookF size={17} />
  </a>

  {/* WhatsApp */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp de Fiber Gomser"
    className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
  >
    <FaWhatsapp size={19} />
  </a>
</div>
            </div>
  
            {/* Links */}
            <div>
              <h3 className="text-xs font-bold uppercase">
                Enlaces
              </h3>
  
              <ul className="mt-4 space-y-2 text-xs text-white/80">
                <li><a href="#inicio" className="hover:text-blue-400">Inicio</a></li>
                <li><a href="#nosotros" className="hover:text-blue-400">Nosotros</a></li>
                <li><a href="#productos" className="hover:text-blue-400">Productos</a></li>
                <li><a href="#industrias" className="hover:text-blue-400">Industrias</a></li>
                <li><a href="#servicios" className="hover:text-blue-400">Servicios</a></li>
                <li><a href="#galeria" className="hover:text-blue-400">Galería</a></li>
                <li><a href="#contacto" className="hover:text-blue-400">Contacto</a></li>
              </ul>
            </div>
  
            {/* Products */}
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
  
            {/* Contact */}
            <div>
              <h3 className="text-xs font-bold uppercase">
                Contacto
              </h3>
  
              <div className="mt-4 space-y-4 text-xs text-white/80">
                <div className="flex items-start gap-3">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-white" />
  
                  <p className="leading-5">
                    Carretera Federal No. 80 #2985,
                    <br />
                    El Hipadero, Tepatitlán de Morelos,
                    <br />
                    Jalisco, México.
                  </p>
                </div>
  
                <div className="flex items-center gap-3">
                  <Phone size={16} className="shrink-0 text-white" />
                  <a href="tel:3337917155" className="hover:text-blue-400">
                    333 791 7155
                  </a>
                </div>
  
                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-white" />
                  <a
                    href="mailto:ventas@fibergomser.com"
                    className="hover:text-blue-400"
                  >
                    ventas@fibergomser.com
                  </a>
                </div>
              </div>
            </div>
  
            {/* Hours */}
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
  
          {/* Bottom */}
          <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-5 text-[11px] text-white/65 md:flex-row md:items-center md:justify-between">
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
      </footer>
    );
  };
  
  export default Footer;