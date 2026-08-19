import {
    Factory,
    Target,
    ShieldCheck,
    Leaf,
    type LucideIcon,
  } from "lucide-react";
  
  interface FeatureItem {
    title: string;
    description: string;
    icon: LucideIcon;
  }
  
  const features: FeatureItem[] = [
    {
      title: "Fabricación propia",
      description:
        "Contamos con tecnología y procesos propios para garantizar calidad constante.",
      icon: Factory,
    },
    {
      title: "Enfoque en el cliente",
      description:
        "Escuchamos tus necesidades y ofrecemos soluciones a la medida.",
      icon: Target,
    },
    {
      title: "Calidad garantizada",
      description:
        "Materias primas seleccionadas y procesos bajo estrictos controles.",
      icon: ShieldCheck,
    },
    {
      title: "Compromiso sostenible",
      description:
        "Buscamos reducir nuestro impacto ambiental con procesos más responsables.",
      icon: Leaf,
    },
  ];
  
  const AboutFeatures = () => {
    return (
      <section className="bg-[#f8f9fb] px-6 pb-16 lg:px-10 lg:pb-20">
        <div data-aos="fade-up" className="mx-auto max-w-[1320px]">
          <div className="overflow-hidden rounded-xl bg-[#06213b]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
  
                return (
                  <article
                    key={feature.title}
                    className={`flex gap-5 px-7 py-7 lg:min-h-[150px] lg:px-8 ${
                      index !== features.length - 1
                        ? "lg:border-r lg:border-white/15"
                        : ""
                    }`}
                  >
                    <div className="shrink-0 pt-1">
                      <Icon
                        size={43}
                        strokeWidth={1.5}
                        className="text-white"
                      />
                    </div>
  
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        {feature.title}
                      </h3>
  
                      <p className="mt-3 text-[13px] leading-6 text-white/80">
                        {feature.description}
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
  
  export default AboutFeatures;