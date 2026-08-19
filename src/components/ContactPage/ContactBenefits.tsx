import {
    Clock3,
    Handshake,
    Headset,
    ShieldCheck,
    type LucideIcon,
  } from "lucide-react";
  
  interface ContactBenefit {
    title: string;
    description: string;
    icon: LucideIcon;
  }
  
  const benefits: ContactBenefit[] = [
    {
      title: "Asesoría personalizada",
      description:
        "Te ayudamos a encontrar la solución ideal para tu proyecto.",
      icon: Headset,
    },
    {
      title: "Respuesta rápida",
      description:
        "Nos comprometemos a responder tu solicitud en el menor tiempo.",
      icon: Clock3,
    },
    {
      title: "Calidad garantizada",
      description:
        "Productos y servicios con los más altos estándares de calidad.",
      icon: ShieldCheck,
    },
    {
      title: "Acompañamiento",
      description:
        "Te acompañamos en cada etapa de tu proyecto.",
      icon: Handshake,
    },
  ];
  
  const ContactBenefits = () => {
    return (
      <section data-aos="fade-up" className="relative z-20 bg-[#fafafa] px-6 lg:px-10">
        <div className="mx-auto max-w-[1320px] lg:-mt-6">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.07)]">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
  
                return (
                  <article
                    key={benefit.title}
                    className={`flex min-h-[140px] items-center gap-5 px-7 py-6 ${
                      index !== benefits.length - 1
                        ? "lg:border-r lg:border-slate-200"
                        : ""
                    }`}
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center text-blue-600">
                      <Icon
                        size={38}
                        strokeWidth={1.6}
                      />
                    </div>
  
                    <div>
                      <h3 className="text-sm font-bold text-slate-950">
                        {benefit.title}
                      </h3>
  
                      <p className="mt-2 max-w-[190px] text-[12px] leading-5 text-slate-600">
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
  
  export default ContactBenefits;