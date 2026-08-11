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
      <section className="bg-[#06213b]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
  
            return (
              <div
                key={item.id}
                className={`flex min-h-[110px] items-center justify-center gap-4 px-6 py-5 ${
                  index !== trustItems.length - 1
                    ? "lg:border-r lg:border-white/20"
                    : ""
                }`}
              >
                <Icon
                  size={42}
                  strokeWidth={1.5}
                  className="shrink-0 text-white"
                />
  
                <div>
                  <p className="text-sm font-extrabold uppercase leading-tight text-white">
                    {item.title}
                  </p>
  
                  <p className="mt-1 text-[11px] font-semibold uppercase leading-4 text-white/85">
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