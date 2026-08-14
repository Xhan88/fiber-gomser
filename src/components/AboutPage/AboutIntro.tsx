import {
    Award,
    PackageOpen,
    ShieldCheck,
    Users,
    type LucideIcon,
  } from "lucide-react";
  
  interface StatItem {
    value: string;
    label: string;
    icon: LucideIcon;
  }
  
  const stats: StatItem[] = [
    {
      value: "+15",
      label: "Años de experiencia",
      icon: Award,
    },
    {
      value: "+500",
      label: "Clientes satisfechos",
      icon: Users,
    },
    {
      value: "+1000",
      label: "Pedidos entregados",
      icon: PackageOpen,
    },
    {
      value: "100%",
      label: "Calidad asegurada",
      icon: ShieldCheck,
    },
  ];
  
  const AboutIntro = () => {
    return (
      <section className="bg-[#f8f9fb] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[45%_55%] lg:gap-12">
            
            {/* LEFT CONTENT */}
            <div>
              <span className="text-[12px] font-extrabold uppercase tracking-[0.05em] text-blue-600">
                ¿Quiénes somos?
              </span>
  
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 lg:text-[34px]">
                Fabricamos calidad, conectamos industrias.
              </h2>
  
              <p className="mt-4 max-w-[600px] text-[15px] leading-7 text-slate-700">
                En Fiber Gomser somos fabricantes especializados en fibras, guata
                laminada, geotextiles, capitonados y servicios ultrasónicos.
                Trabajamos cada día para ofrecer productos confiables que impulsen
                el éxito de nuestros clientes.
              </p>
  
              <p className="mt-1 max-w-[600px] text-[15px] leading-7 text-slate-700">
                Nuestra experiencia, tecnología y equipo humano nos permiten
                cumplir con los más altos estándares de calidad.
              </p>
            </div>
  
            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
  
                return (
                  <article
                    key={stat.label}
                    className="flex min-h-[210px] flex-col items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-7 text-center shadow-[0_4px_18px_rgba(15,23,42,0.05)]"
                  >
                    <Icon
                      size={45}
                      strokeWidth={1.7}
                      className="text-blue-600"
                    />
  
                    <p className="mt-4 text-[30px] font-extrabold leading-none text-blue-600">
                      {stat.value}
                    </p>
  
                    <p className="mt-3 max-w-[120px] text-[13px] font-bold leading-5 text-slate-950">
                      {stat.label}
                    </p>
                  </article>
                );
              })}
            </div>
  
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutIntro;