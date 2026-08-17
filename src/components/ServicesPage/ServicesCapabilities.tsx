import {
    Factory,
    Layers3,
    Lightbulb,
    RadioTower,
    type LucideIcon,
  } from "lucide-react";
  
  import ServiceCard from "./ServiceCard";
  
  interface ServiceItem {
    id: number;
    title: string;
    description: string;
    image: string;
    icon: LucideIcon;
    href?: string;
  }
  
  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Pun-sonic / Ultrasónico",
      description:
        "Unión de materiales mediante tecnología ultrasónica con acabados limpios, resistentes y eficientes.",
      image: "/images/services/ultrasonico-principal.png",
      icon: RadioTower,
      href: "#ultrasonico",
    },
    {
      id: 2,
      title: "Capitonados",
      description:
        "Diseños capitonados de alta precisión para colchones, muebles, tapicería y más aplicaciones.",
      image: "/images/services/capitonado2.jpg",
      icon: Layers3,
    },
    {
      id: 3,
      title: "Desarrollo de soluciones",
      description:
        "Creamos soluciones textiles a la medida según las necesidades de cada cliente e industria.",
      image: "/images/industries/industria2.webp",
      icon: Lightbulb,
    },
    {
      id: 4,
      title: "Producción personalizada",
      description:
        "Procesos flexibles y escalables para proyectos especiales con altos estándares de calidad.",
      image: "/images/industries/industrias1.webp",
      icon: Factory,
    },
  ];
  
  const ServicesCapabilities = () => {
    return (
      <section
        id="capacidades"
        className="bg-white px-6 py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-[1320px]">
          
          {/* Heading */}
          <div className="mb-12 text-center">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-blue-600">
              Nuestras capacidades
            </span>
  
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              Servicios que ofrecemos
            </h2>
  
            <div className="mx-auto mt-5 h-[2px] w-12 bg-blue-600" />
          </div>
  
          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
                icon={service.icon}
                href={service.href}
              />
            ))}
          </div>
  
        </div>
      </section>
    );
  };
  
  export default ServicesCapabilities;