import {
    Award,
    Boxes,
    GalleryHorizontal,
    Settings,
    type LucideIcon,
  } from "lucide-react";
  
  interface StatItem {
    value: string;
    label: string;
    icon: LucideIcon;
  }
  
  const stats: StatItem[] = [
    {
      value: "150+",
      label: "Proyectos realizados",
      icon: GalleryHorizontal,
    },
    {
      value: "8+",
      label: "Años de experiencia",
      icon: Settings,
    },
    {
      value: "10+",
      label: "Industrias atendidas",
      icon: Boxes,
    },
    {
      value: "100%",
      label: "Compromiso con la calidad",
      icon: Award,
    },
  ];
  
  const GalleryStats = () => {
    return (
      <section data-aos="fade-up" className="bg-white px-6 py-10 lg:px-10">
        <div className="mx-auto max-w-[1320px]">
          <div className="rounded-xl bg-[#f5f7fc] px-6 py-7 lg:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
  
                return (
                  <article
                    key={stat.label}
                    className={`flex min-h-[90px] items-center justify-center gap-5 px-6 py-4 ${
                      index !== stats.length - 1
                        ? "lg:border-r lg:border-slate-300"
                        : ""
                    }`}
                  >
                    <Icon
                      size={42}
                      strokeWidth={1.6}
                      className="shrink-0 text-blue-600"
                    />
  
                    <div>
                      <p className="text-3xl font-extrabold leading-none text-slate-950">
                        {stat.value}
                      </p>
  
                      <p className="mt-2 text-[12px] font-medium text-slate-700">
                        {stat.label}
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
  
  export default GalleryStats;