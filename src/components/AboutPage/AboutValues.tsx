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
    <section className="bg-white px-5 py-12 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[52%_48%] lg:gap-12">
          
          {/* Left */}
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-blue-600">
              Nuestros valores
            </span>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl lg:text-[36px]">
              Lo que nos mueve cada día
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-3">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <article
                    key={value.title}
                    className="rounded-xl border border-slate-200 bg-white p-4 shadow-[0_4px_16px_rgba(15,23,42,0.05)] lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600 lg:h-auto lg:w-auto lg:bg-transparent">
                      <Icon
                        size={28}
                        strokeWidth={1.5}
                        className="lg:h-[42px] lg:w-[42px]"
                      />
                    </div>

                    <h3 className="mt-4 text-sm font-bold text-slate-950">
                      {value.title}
                    </h3>

                    <p className="mt-2 text-[12px] leading-5 text-slate-600 lg:max-w-[150px] lg:text-[13px]">
                      {value.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Right image */}
          <div className="h-[240px] overflow-hidden rounded-lg sm:h-[340px] lg:h-[300px]">
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