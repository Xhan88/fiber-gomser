import {
    Award,
    Factory,
    ShieldCheck,
    Truck,
    type LucideIcon,
  } from "lucide-react";
  
  interface BenefitItem {
    title: string;
    description: string;
    icon: LucideIcon;
  }
  
  const benefits: BenefitItem[] = [
    {
      title: "Calidad garantizada",
      description:
        "Procesos bajo estrictos controles para asegurar productos confiables.",
      icon: Award,
    },
    {
      title: "Fabricación propia",
      description:
        "Contamos con tecnología y procesos propios para cada producto.",
      icon: Factory,
    },
    {
      title: "Variedad de soluciones",
      description:
        "Productos diseñados para diversas industrias y aplicaciones.",
      icon: ShieldCheck,
    },
    {
      title: "Entregas a todo México",
      description:
        "Cobertura nacional con tiempos de entrega confiables.",
      icon: Truck,
    },
  ];
  
  const ProductsBenefitsBar = () => {
    return (
      <section className="relative z-20 bg-[#f8f9fb] px-6 lg:px-10">
        <div className="mx-auto max-w-[1320px] lg:-mt-6">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.08)]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
  
                return (
                  <article
                    key={benefit.title}
                    className={`flex min-h-[145px] items-center gap-5 px-7 py-6 ${
                      index !== benefits.length - 1
                        ? "lg:border-r lg:border-slate-200"
                        : ""
                    }`}
                  >
                    <div className="shrink-0">
                      <Icon
                        size={42}
                        strokeWidth={1.5}
                        className="text-blue-600"
                      />
                    </div>
  
                    <div>
                      <h3 className="text-sm font-bold text-slate-950">
                        {benefit.title}
                      </h3>
  
                      <p className="mt-2 text-[13px] leading-5 text-slate-600">
                        {benefit.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ProductsBenefitsBar;