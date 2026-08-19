import {
    Armchair,
    Building2,
    Car,
    Hotel,
    Leaf,
    Baby,
    type LucideIcon,
  } from "lucide-react";
  
  import IndustryCard from "./IndustryCard";
  
  interface IndustryItem {
    id: number;
    title: string;
    description: string;
    image: string;
    icon: LucideIcon;
  }
  
  const industries: IndustryItem[] = [
    {
      id: 1,
      title: "Mueblera",
      description: "Colchones, sofás, cojines y tapicería.",
      image: "/images/industries/muebleria.jpg",
      icon: Armchair,
    },
    {
      id: 2,
      title: "Automotriz",
      description: "Aislantes, interiores y componentes textiles.",
      image: "/images/industries/automotriz.jpg",
      icon: Car,
    },
    {
      id: 3,
      title: "Construcción",
      description: "Geotextiles y materiales de protección.",
      image: "/images/industries/construccion.webp",
      icon: Building2,
    },
    {
      id: 4,
      title: "Juguetera",
      description: "Rellenos para peluches y productos infantiles.",
      image: "/images/industries/juguetes.avif",
      icon: Baby,
    },
    {
      id: 5,
      title: "Agrícola",
      description: "Protección, filtración y control de suelos.",
      image: "/images/industries/agricola.jpeg",
      icon: Leaf,
    },
    {
      id: 6,
      title: "Hotelería",
      description: "Ropa de cama, colchones y decoración.",
      image: "/images/industries/hoteleria.jpg",
      icon: Hotel,
    },
  ];
  
  const IndustriesGrid = () => {
    return (
      <section className="bg-[#fafafa] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1320px]">
          
          <div data-aos="fade-up" className="mb-12 text-center">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-blue-600">
              Industrias
            </span>
  
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              Industrias que confían en nuestras soluciones
            </h2>
  
            <div className="mx-auto mt-5 h-[2px] w-12 bg-blue-600" />
          </div>
  
          <div data-aos="fade-up" className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {industries.map((industry) => (
              <IndustryCard
                key={industry.id}
                title={industry.title}
                description={industry.description}
                image={industry.image}
                icon={industry.icon}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default IndustriesGrid;