import {
    Award,
    Handshake,
    Settings,
    ShieldCheck,
    Truck,
    type LucideIcon,
  } from "lucide-react";
  
  interface AdvantageItem {
    title: string;
    description: string;
    icon: LucideIcon;
  }
  
  const advantages: AdvantageItem[] = [
    {
      title: "Confianza y experiencia",
      description:
        "Años de experiencia que respaldan la calidad de nuestros productos.",
      icon: ShieldCheck,
    },
    {
      title: "Soluciones a la medida",
      description:
        "Desarrollamos productos personalizados según las necesidades de cada industria.",
      icon: Settings,
    },
    {
      title: "Innovación constante",
      description:
        "Mejoramos continuamente nuestros procesos y materiales para ofrecerte lo mejor.",
      icon: Award,
    },
    {
      title: "Acompañamiento total",
      description:
        "Te asesoramos en cada etapa de tu proyecto para garantizar los mejores resultados.",
      icon: Handshake,
    },
    {
      title: "Cobertura nacional",
      description:
        "Entregamos en todo México con tiempos y logística confiables.",
      icon: Truck,
    },
  ];
  
  const IndustriesAdvantages = () => {
    return (
      <section className="bg-white px-6 pb-16 lg:px-10 lg:pb-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="rounded-xl bg-[#f5f7fc] px-6 py-10 lg:px-10 lg:py-12">
            
            <div className="text-center">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-blue-600">
                ¿Por qué elegirnos?
              </span>
  
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                Tu aliado estratégico en cada industria
              </h2>
  
              <div className="mx-auto mt-5 h-[2px] w-12 bg-blue-600" />
            </div>
  
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
  
                return (
                  <article
                    key={advantage.title}
                    className={`flex flex-col items-center px-6 py-6 text-center ${
                      index !== advantages.length - 1
                        ? "lg:border-r lg:border-slate-300"
                        : ""
                    }`}
                  >
                    <div className="flex h-14 items-center justify-center text-blue-600">
                      <Icon
                        size={42}
                        strokeWidth={1.6}
                      />
                    </div>
  
                    <h3 className="mt-4 text-sm font-bold text-slate-950">
                      {advantage.title}
                    </h3>
  
                    <p className="mt-3 max-w-[190px] text-[13px] leading-6 text-slate-600">
                      {advantage.description}
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
  
  export default IndustriesAdvantages;