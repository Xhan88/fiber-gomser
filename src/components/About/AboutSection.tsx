import { ArrowRight } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  {
    value: "+15",
    label: "Años de experiencia",
  },
  {
    value: "+500",
    label: "Clientes satisfechos",
  },
  {
    value: "+1000",
    label: "Pedidos entregados",
  },
  {
    value: "100%",
    label: "Calidad asegurada",
  },
];

const AboutSection = () => {
  return (
    <section
      id="nosotros"
      className="bg-[#f7f8fa]"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:min-h-[390px] lg:grid-cols-[44%_32%_24%]">

        {/* Left content */}
        <div className="flex items-center px-6 py-14 lg:px-12 xl:px-16">
          <div className="max-w-[560px]">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
              Sobre nosotros
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-4xl">
              Comprometidos con la calidad
              <br />
              y la innovación
            </h2>

            <p className="mt-5 max-w-[520px] text-sm leading-6 text-slate-600 md:text-[15px]">
              En Fiber Gomser somos fabricantes especializados en fibras, guata
              laminada, geotextiles, capitonados y servicios ultrasónicos.
              Ofrecemos productos de alta calidad para distintas industrias,
              con procesos eficientes y atención personalizada.
            </p>

            <a
              href="#contacto"
              className="mt-7 inline-flex min-h-[46px] items-center gap-2 bg-blue-600 px-5 text-xs font-bold uppercase text-white transition-colors duration-300 hover:bg-blue-700"
            >
              Conoce más de nosotros
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Center image */}
        <div className="h-[320px] overflow-hidden lg:h-full">
          <img
            src="/images/about/fiber-gomser-industria.jpg"
            alt="Instalaciones y producción de Fiber Gomser"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Stats */}
        <div className="flex items-center px-6 py-10 lg:px-10">
          <div className="grid w-full grid-cols-2 gap-8 lg:grid-cols-1 lg:gap-6">
            {stats.map((stat) => (
              <div key={stat.value}>
                <p className="text-3xl font-extrabold leading-none text-blue-600">
                  {stat.value}
                </p>

                <p className="mt-2 text-sm font-medium text-slate-700">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;