import { ArrowRight, HandHelping } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesCTA = () => {
  return (
    <section data-aos="fade-up" className="bg-white px-6 pb-16 lg:px-10 lg:pb-20">
      <div className="mx-auto max-w-[1320px]">
        <div className="relative overflow-hidden rounded-xl bg-[#05264a]">
          
          <div className="absolute inset-0">
            <img
              src="/images/services/capitonado-textil.jpg"
              alt=""
              className="h-full w-full object-cover object-center opacity-20"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#05264a] via-[#05264a]/95 to-[#021a35]/90" />
          </div>

          <div className="relative z-10 grid min-h-[145px] grid-cols-1 items-center gap-6 px-7 py-7 md:grid-cols-[auto_1fr_auto] lg:px-12">
            
            <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full bg-blue-500/20 text-white ring-1 ring-blue-400/20">
              <HandHelping
                size={37}
                strokeWidth={1.5}
              />
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-white md:text-2xl">
                ¿Tienes un proyecto especial?
              </h2>

              <p className="mt-2 max-w-[570px] text-sm leading-6 text-white/85">
                Nuestro equipo está listo para asesorarte y desarrollar la
                solución textil perfecta para tu industria.
              </p>
            </div>

            <Link
              to="/contacto"
              className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-md bg-white px-8 text-sm font-bold text-[#05264a] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-md"
            >
              Solicitar asesoría

              <ArrowRight
                size={17}
                strokeWidth={2}
              />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;