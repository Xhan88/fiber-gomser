import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactHero = () => {
  return (
    <section className="relative min-h-[360px] overflow-hidden">
      {/* Background */}
      <img
        src="/images/services/capitonado2.jpg"
        alt="Planta de producción de Fiber Gomser"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#021427]/95 via-[#021427]/75 to-[#021427]/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[360px] max-w-[1440px] items-center px-6 py-14 lg:px-12 xl:px-16">
        <div className="max-w-[650px]">
          
          {/* Breadcrumb */}
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
              Contacto
            </span>
          </div>

          {/* Label */}
          <span className="mt-8 block text-sm font-bold uppercase tracking-[0.08em] text-blue-500">
            Contacto
          </span>

          {/* Title */}
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[58px]">
            Estamos listos
            <br />

            <span className="text-blue-500">
              para atenderte
            </span>
          </h1>

          {/* Decorative line */}
          <div className="mt-5 h-[3px] w-14 bg-blue-500" />

          {/* Description */}
          <p className="mt-6 max-w-[570px] text-sm leading-7 text-white/90 md:text-base">
            ¿Tienes un proyecto en mente? Contáctanos y nuestro equipo de
            expertos te asesorará para encontrar la mejor solución textil para
            tu industria.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;