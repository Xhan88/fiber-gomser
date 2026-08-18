import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative min-h-[320px] overflow-hidden">
      <img
        src="/images/gallery/planta2.jpg"
        alt="Instalaciones de Fiber Gomser"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#031525]/95 via-[#031525]/75 to-[#031525]/25" />

      <div className="relative z-10 mx-auto flex min-h-[320px] max-w-[1440px] items-center px-6 py-16 lg:px-12 xl:px-16">
        <div className="max-w-[700px]">
          <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
            <Link
              to="/"
              className="transition-colors duration-300 hover:text-blue-400"
            >
              Inicio
            </Link>

            <ChevronRight size={14} />

            <span className="text-blue-400">
              Nosotros
            </span>
          </div>

          {/* Label */}
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
            Sobre nosotros
          </span>

          {/* Title */}
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[58px]">
            Conoce más sobre
            <br />
            <span className="text-blue-500">
              Fiber Gomser
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-[620px] text-sm leading-6 text-white/80 sm:text-base">
            Más de 15 años desarrollando soluciones textiles para diferentes
            industrias, combinando experiencia, calidad y atención personalizada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;