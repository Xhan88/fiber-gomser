import {
    Award,
    BadgeCheck,
    MapPinned,
    ShieldCheck,
    Truck,
  } from "lucide-react";
  
  interface TrustItem {
    id: number;
    title: string;
    subtitle: string;
    icon: React.ElementType;
  }
  
  const trustItems: TrustItem[] = [
    {
      id: 1,
      title: "+15",
      subtitle: "Años de experiencia",
      icon: Award,
    },
    {
      id: 2,
      title: "Producción",
      subtitle: "De alta calidad",
      icon: BadgeCheck,
    },
    {
      id: 3,
      title: "Atención",
      subtitle: "A nivel nacional",
      icon: MapPinned,
    },
    {
      id: 4,
      title: "Materiales",
      subtitle: "100% confiables",
      icon: ShieldCheck,
    },
    {
      id: 5,
      title: "Envíos",
      subtitle: "A todo México",
      icon: Truck,
    },
  ];
  
  const TrustBar = () => {
    return (
      <section className="bg-[#06213b] px-4 py-6 sm:px-6 lg:px-0 lg:py-0">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-x-4 gap-y-3 lg:grid-cols-5 lg:gap-0">
        {trustItems.map((item, index) => {
          const Icon = item.icon;
    
          return (
            <div
              key={item.id}
              className={`flex min-h-[100px] items-center gap-3 rounded-lg bg-white/[0.03] px-4 py-4 lg:min-h-[110px] lg:justify-center lg:rounded-none lg:bg-transparent lg:px-6 lg:py-5 ${
                index !== trustItems.length - 1
                  ? "lg:border-r lg:border-white/20"
                  : ""
              }`}
            >
              <Icon
                size={34}
                strokeWidth={1.5}
                className="shrink-0 text-white lg:h-[42px] lg:w-[42px]"
              />
    
              <div>
                <p className="text-[13px] font-extrabold uppercase leading-tight text-white lg:text-sm">
                  {item.title}
                </p>
    
                <p className="mt-1 text-[10px] font-semibold uppercase leading-4 text-white/80 lg:text-[11px]">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    );
  };
  
  export default TrustBar;