import {
    Factory,
    MessageCircle,
    PackageCheck,
    Truck,
    ClipboardList,
  } from "lucide-react";
  
  interface ProcessStep {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
  }
  
  const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: "Nos contactas",
      description: "Vía WhatsApp, llamada o correo electrónico.",
      icon: MessageCircle,
    },
    {
      id: 2,
      title: "Nos dices qué necesitas",
      description: "Te asesoramos y cotizamos tu pedido.",
      icon: ClipboardList,
    },
    {
      id: 3,
      title: "Fabricamos",
      description: "Producimos con altos estándares de calidad.",
      icon: Factory,
    },
    {
      id: 4,
      title: "Empacamos",
      description: "Empaque seguro para proteger tu producto.",
      icon: PackageCheck,
    },
    {
      id: 5,
      title: "Enviamos",
      description: "Entregamos a tiempo en cualquier parte de México.",
      icon: Truck,
    },
  ];
  
  const ProcessSection = () => {
    return (
      <section className="bg-white px-6 py-14 lg:px-10 lg:py-16">
        <div data-aos="fade-up" className="mx-auto max-w-[1440px]">
          <div className="mb-12 text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
              ¿Cómo trabajamos?
            </span>
  
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
              Un proceso simple, eficiente y confiable
            </h2>
          </div>
  
          <div className="relative hidden lg:block">
            <div className="absolute left-[10%] right-[10%] top-[38px] border-t border-dashed border-slate-300" />
  
            <div className="relative z-10 grid grid-cols-5">
              {processSteps.map((step) => {
                const Icon = step.icon;
  
                return (
                  <div
                    key={step.id}
                    className="flex flex-col items-center px-5 text-center"
                  >
                    <div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border-2 border-blue-500 bg-white text-blue-600">
                      <Icon size={34} strokeWidth={1.5} />
  
                      <div className="absolute -bottom-2 -left-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[11px] font-bold text-white">
                        {step.id}
                      </div>
                    </div>
  
                    <h3 className="mt-5 text-sm font-bold text-slate-950">
                      {step.title}
                    </h3>
  
                    <p className="mt-2 max-w-[180px] text-xs leading-5 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
  
          <div className="space-y-8 lg:hidden">
            {processSteps.map((step) => {
              const Icon = step.icon;
  
              return (
                <div
                  key={step.id}
                  className="relative flex gap-5"
                >
                  <div className="relative shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-blue-500 bg-white text-blue-600">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
  
                    <div className="absolute -bottom-1 -left-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[11px] font-bold text-white">
                      {step.id}
                    </div>
                  </div>
  
                  <div className="pt-2">
                    <h3 className="text-sm font-bold text-slate-950">
                      {step.title}
                    </h3>
  
                    <p className="mt-1 max-w-[300px] text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
  
  export default ProcessSection;