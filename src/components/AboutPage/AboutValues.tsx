import {
    Handshake,
    Heart,
    Lightbulb,
    Users,
    type LucideIcon,
  } from "lucide-react";
  
  interface ValueItem {
    title: string;
    description: string;
    icon: LucideIcon;
  }
  
  const values: ValueItem[] = [
    {
      title: "Integridad",
      description: "Actuamos con honestidad y transparencia.",
      icon: Users,
    },
    {
      title: "Responsabilidad",
      description: "Cumplimos lo que prometemos.",
      icon: Handshake,
    },
    {
      title: "Innovación",
      description: "Mejoramos continuamente para ofrecerte lo mejor.",
      icon: Lightbulb,
    },
    {
      title: "Trabajo en equipo",
      description: "Creemos en el talento y compromiso de nuestra gente.",
      icon: Heart,
    },
  ];
  
  const AboutValues = () => {
    return (
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[52%_48%] lg:gap-12">
            
            {/* Left */}
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-blue-600">
                Nuestros valores
              </span>
  
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 lg:text-[36px]">
                Lo que nos mueve cada día
              </h2>
  
              <div className="mt-9 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
                {values.map((value) => {
                  const Icon = value.icon;
  
                  return (
                    <article key={value.title}>
                      <Icon
                        size={42}
                        strokeWidth={1.5}
                        className="text-blue-600"
                      />
  
                      <h3 className="mt-4 text-sm font-bold text-slate-950">
                        {value.title}
                      </h3>
  
                      <p className="mt-2 max-w-[150px] text-[13px] leading-5 text-slate-600">
                        {value.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
  
            {/* Right image */}
            <div className="h-[280px] overflow-hidden rounded-lg sm:h-[340px] lg:h-[300px]">
              <img
                src="/images/gallery/planta2.jpg"
                alt="Equipo y procesos de Fiber Gomser"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutValues;