import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesHero = () => {
  return (
    <section className="relative min-h-[360px] overflow-hidden">
      
      <img
        src="/images/services/ultrasonico-principal.png"
        alt="Maquinaria y procesos textiles de Fiber Gomser"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#021427]/95 via-[#021427]/75 to-[#021427]/15" />

      <div className="relative z-10 mx-auto flex min-h-[360px] max-w-[1440px] items-center px-6 py-14 lg:px-12 xl:px-16">
        <div className="max-w-[680px]">
          
          <div className="flex items-center gap-3 text-sm font-medium">
            <Link
              to="/"
              className="text-white transition-colors duration-300 hover:text-blue-400"
            >
              Inicio
            </Link>

            <ChevronRight
              size={17}
              strokeWidth={2}
              className="text-white/80"
            />

            <span className="text-blue-400">
              Servicios
            </span>
          </div>

          <span className="mt-8 block text-sm font-bold uppercase tracking-[0.08em] text-blue-500">
            Servicios
          </span>

          <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[58px]">
            Tecnología y procesos
            <br />
            que transforman
            <br />

            <span className="text-blue-500">
              materiales textiles
            </span>
          </h1>

          <p className="mt-6 max-w-[610px] text-sm leading-7 text-white/90 md:text-base">
            Contamos con tecnología avanzada y un equipo especializado para
            desarrollar soluciones textiles de alta calidad para cada
            necesidad.
          </p>

        </div>
      </div>
    </section>
  );
};

export default ServicesHero;