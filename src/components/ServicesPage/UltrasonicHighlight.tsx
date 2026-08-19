import {
    ArrowRight,
    Layers3,
    ShieldCheck,
    Sparkles,
    X,
  } from "lucide-react";
  
  const benefits = [
    {
      title: "Sin agujas ni hilos",
      description: "Uniones limpias que mejoran la apariencia y reducen costos.",
      icon: X,
    },
    {
      title: "Acabados resistentes",
      description: "Sellos firmes que garantizan durabilidad y desempeño.",
      icon: ShieldCheck,
    },
    {
      title: "Uniones limpias",
      description: "Sin residuos ni elementos adicionales en el material.",
      icon: Sparkles,
    },
    {
      title: "Aplicaciones textiles",
      description: "Ideal para telas técnicas, no tejidos y materiales compuestos.",
      icon: Layers3,
    },
  ];
  
  const UltrasonicHighlight = () => {
    return (
      <section className="bg-[#f8f9fb] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.05)] lg:grid-cols-[50%_50%]">
            
            <div className="flex items-center px-7 py-10 lg:px-10 xl:px-12">
              <div className="w-full">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-blue-600">
                  Nuestro servicio estrella
                </span>
  
                <h2 className="mt-3 max-w-[500px] text-3xl font-extrabold leading-tight tracking-tight text-slate-950 lg:text-[36px]">
                  Tecnología ultrasónica
                  <br />
                  para uniones textiles superiores
                </h2>
  
                <div className="mt-5 h-[2px] w-10 bg-blue-600" />
  
                <p className="mt-6 max-w-[520px] text-sm leading-7 text-slate-600">
                  La tecnología ultrasónica permite unir materiales textiles
                  mediante vibraciones de alta frecuencia, generando sellos
                  fuertes, limpios y duraderos sin necesidad de hilos, adhesivos
                  ni costuras convencionales.
                </p>
  
                <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  {benefits.map((benefit) => {
                    const Icon = benefit.icon;
  
                    return (
                      <article
                        key={benefit.title}
                        className="flex items-start gap-4"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                          <Icon
                            size={24}
                            strokeWidth={1.6}
                          />
                        </div>
  
                        <div>
                          <h3 className="text-sm font-bold text-slate-950">
                            {benefit.title}
                          </h3>
  
                          <p className="mt-1 max-w-[190px] text-[12px] leading-5 text-slate-600">
                            {benefit.description}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
  
                <a
                  href="#capacidades"
                  className="mt-8 inline-flex min-h-[46px] items-center gap-3 rounded-sm bg-blue-600 px-6 text-xs font-bold text-white transition-all duration-300 hover:bg-blue-700"
                >
                  Conocer más sobre tecnología ultrasónica
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
  
            <div className="h-[340px] overflow-hidden sm:h-[420px] lg:h-auto lg:min-h-[500px]">
              <img
                src="/images/gallery/planta3.jpg"
                alt="Proceso de unión textil mediante tecnología ultrasónica"
                className="h-160 w-full object-cover object-center"
              />
            </div>
  
          </div>
        </div>
      </section>
    );
  };
  
  export default UltrasonicHighlight;