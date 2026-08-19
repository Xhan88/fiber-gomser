import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const GalleryHero = () => {
  return (
    <section className="relative min-h-[360px] overflow-hidden">
      <img
        src="/images/gallery/planta4.jpg"
        alt="Procesos y maquinaria de Fiber Gomser"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#021427]/95 via-[#021427]/75 to-[#021427]/15" />

      <div className="relative z-10 mx-auto flex min-h-[360px] max-w-[1440px] items-center px-6 py-14 lg:px-12 xl:px-16">
        <div data-aos="fade-up" className="max-w-[670px]">
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
              Galería
            </span>
          </div>

          <span className="mt-8 block text-sm font-bold uppercase tracking-[0.08em] text-blue-500">
            Galería
          </span>

          <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[58px]">
            Conoce nuestro
            <br />

            <span className="text-blue-500">
              trabajo en acción
            </span>
          </h1>

          <div className="mt-5 h-[3px] w-14 bg-blue-500" />

          <p className="mt-6 max-w-[570px] text-sm leading-7 text-white/90 md:text-base">
            Explora nuestros procesos, tecnología y productos desarrollados
            para brindar soluciones textiles de la más alta calidad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;