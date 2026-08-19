import {
    Armchair,
    BedDouble,
    Building2,
    Layers3,
    Sofa,
    ToyBrick,
    Waves,
  } from "lucide-react";
  
  interface Industry {
    id: number;
    label: string;
    icon: React.ElementType;
  }
  
  const industries: Industry[] = [
    {
      id: 1,
      label: "Colchoneros",
      icon: BedDouble,
    },
    {
      id: 2,
      label: "Tapiceros",
      icon: Armchair,
    },
    {
      id: 3,
      label: "Hotelería",
      icon: BedDouble,
    },
    {
      id: 4,
      label: "Constructoras y urbanizadoras",
      icon: Building2,
    },
    {
      id: 5,
      label: "Fabricantes de blancos hoteleros",
      icon: Layers3,
    },
    {
      id: 6,
      label: "Fabricantes de muebles",
      icon: Sofa,
    },
    {
      id: 7,
      label: "Fabricantes de peluches",
      icon: ToyBrick,
    },
    {
      id: 8,
      label: "Y más...",
      icon: Waves,
    },
  ];
  
  const IndustriesSection = () => {
    return (
      <section
        id="industrias"
        className="bg-white px-6 py-12 lg:px-10"
      >
        <div data-aos="fade-up" className="mx-auto max-w-[1440px]">
          <div className="mb-9 text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
              Industrias que atendemos
            </span>
  
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
              Soluciones textiles para múltiples industrias
            </h2>
          </div>
  
          <div className="grid grid-cols-2 border-slate-200 sm:grid-cols-4 lg:grid-cols-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
  
              return (
                <div
                  key={industry.id}
                  className={`flex min-h-[120px] flex-col items-center justify-center px-4 text-center ${
                    index !== industries.length - 1
                      ? "lg:border-r lg:border-slate-200"
                      : ""
                  }`}
                >
                  <Icon
                    size={44}
                    strokeWidth={1.4}
                    className="mb-4 text-blue-600"
                  />
  
                  <p className="max-w-[130px] text-[12px] font-bold leading-4 text-slate-900">
                    {industry.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
  
  export default IndustriesSection;