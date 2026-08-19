import {
    Armchair,
    Baby,
    Building2,
    Car,
    Hotel,
    Layers3,
    Leaf,
    type LucideIcon,
  } from "lucide-react";
  
  interface IndustryItem {
    title: string;
    icon: LucideIcon;
  }
  
  const industries: IndustryItem[] = [
    {
      title: "Mueblera",
      icon: Armchair,
    },
    {
      title: "Automotriz",
      icon: Car,
    },
    {
      title: "Construcción",
      icon: Building2,
    },
    {
      title: "Juguetera",
      icon: Baby,
    },
    {
      title: "Agrícola",
      icon: Leaf,
    },
    {
      title: "Hotelería",
      icon: Hotel,
    },
    {
      title: "Colchonera",
      icon: Layers3,
    },
  ];
  
  const ServicesIndustries = () => {
    return (
      <section className="bg-white px-6 py-14 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1320px]">
          
          <div className="mb-10 text-center">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-blue-600">
              Industrias que atendemos
            </span>
  
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              Presentes en múltiples industrias
            </h2>
  
            <div className="mx-auto mt-5 h-[2px] w-12 bg-blue-600" />
          </div>
  
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
  
              return (
                <div
                  key={industry.title}
                  className={`flex min-h-[105px] flex-col items-center justify-center px-4 text-center ${
                    index !== industries.length - 1
                      ? "lg:border-r lg:border-slate-200"
                      : ""
                  }`}
                >
                  <Icon
                    size={38}
                    strokeWidth={1.5}
                    className="text-blue-600"
                  />
  
                  <p className="mt-4 text-sm font-bold text-slate-950">
                    {industry.title}
                  </p>
                </div>
              );
            })}
  
            <div className="flex min-h-[105px] items-center justify-center px-4 text-center">
              <p className="text-sm font-bold text-slate-950">
                Y más...
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesIndustries;