import {
    ClipboardList,
    MessageSquareText,
    PackageCheck,
    ShieldCheck,
    Truck,
    type LucideIcon,
  } from "lucide-react";
  
  interface ProcessStep {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
  }
  
  const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: "Entendemos tu necesidad",
      description:
        "Escuchamos tu proyecto y analizamos los requerimientos para ofrecerte la mejor solución.",
      icon: MessageSquareText,
    },
    {
      id: 2,
      title: "Asesoría especializada",
      description:
        "Te orientamos en materiales, procesos y aplicaciones ideales para tus objetivos.",
      icon: ClipboardList,
    },
    {
      id: 3,
      title: "Producción",
      description:
        "Utilizamos tecnología avanzada y personal calificado para garantizar calidad y precisión.",
      icon: PackageCheck,
    },
    {
      id: 4,
      title: "Control de calidad",
      description:
        "Inspeccionamos cada proceso para asegurar que cada producto cumpla con nuestros estándares.",
      icon: ShieldCheck,
    },
    {
      id: 5,
      title: "Entregamos tu solución",
      description:
        "Entregamos en tiempo y forma en todo México, con logística segura y confiable.",
      icon: Truck,
    },
  ];
  
  const ServicesProcess = () => {
    return (
      <section className="bg-[#f5f7fc] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1320px]">
          
          <div className="mb-12 text-center">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-blue-600">
              Nuestro proceso
            </span>
  
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              ¿Cómo trabajamos?
            </h2>
          </div>
  
          <div className="relative hidden lg:block">
            <div className="absolute left-[9%] right-[9%] top-[41px] border-t border-dashed border-blue-200" />
  
            <div className="relative z-10 grid grid-cols-5 gap-4">
              {processSteps.map((step) => {
                const Icon = step.icon;
  
                return (
                  <article
                    key={step.id}
                    className="flex flex-col items-center px-4 text-center"
                  >
                    <div className="relative flex h-[82px] w-[82px] items-center justify-center rounded-full border border-blue-200 bg-[#f5f7fc] text-blue-600">
                      <Icon
                        size={34}
                        strokeWidth={1.5}
                      />
  
                      <span className="absolute -left-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                        {step.id}
                      </span>
                    </div>
  
                    <h3 className="mt-5 text-sm font-bold text-slate-950">
                      {step.title}
                    </h3>
  
                    <p className="mt-3 max-w-[190px] text-[12px] leading-5 text-slate-600">
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
  
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:hidden">
            {processSteps.map((step) => {
              const Icon = step.icon;
  
              return (
                <article
                  key={step.id}
                  className="flex items-start gap-5 rounded-lg bg-white p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)]"
                >
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-blue-200 text-blue-600">
                    <Icon size={27} strokeWidth={1.5} />
  
                    <span className="absolute -left-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[11px] font-bold text-white">
                      {step.id}
                    </span>
                  </div>
  
                  <div>
                    <h3 className="text-sm font-bold text-slate-950">
                      {step.title}
                    </h3>
  
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesProcess;