import {
    Layers3,
    Package,
    PanelsTopLeft,
    Sparkles,
    Waves,
    Workflow,
    type LucideIcon,
  } from "lucide-react";
  
  import ProductCatalogCard from "./ProductCatalogCard";
  
  interface ProductItem {
    id: number;
    title: string;
    description: string;
    image: string;
    path: string;
    icon: LucideIcon;
  }
  
  const products: ProductItem[] = [
    {
      id: 1,
      title: "Fibras para rellenos",
      description:
        "Fibras suaves y resistentes ideales para rellenos de cojines, almohadas, muñecos y más.",
      image: "/images/products/fibras-relleno.jpg",
      path: "/productos/fibras-para-relleno",
      icon: Package,
    },
    {
      id: 2,
      title: "Guata laminada",
      description:
        "Material laminado de alta calidad para mayor resistencia, durabilidad y mejor acabado.",
      image: "/images/products/guata-laminada.webp",
      path: "/productos/guata-laminada",
      icon: Layers3,
    },
    {
      id: 3,
      title: "Geotextiles",
      description:
        "Soluciones textiles para construcción, drenaje, filtración, separación y protección de suelos.",
      image: "/images/products/geotextiles.jpg",
      path: "/productos/geotextiles",
      icon: PanelsTopLeft,
    },
    {
      id: 4,
      title: "Capitonados",
      description:
        "Capitonados de diferentes diseños y gramajes para muebles, colchones, paredes y más.",
      image: "/images/products/capitonados.jpg",
      path: "/productos/capitonados",
      icon: Sparkles,
    },
    {
      id: 5,
      title: "Servicios ultrasónicos",
      description:
        "Unión de materiales textiles mediante tecnología ultrasónica con acabados limpios y resistentes.",
      image: "/images/products/ser-ultrasonico.jpeg",
      path: "/servicios",
      icon: Workflow,
    },
    {
      id: 6,
      title: "Productos especiales",
      description:
        "Desarrollos a medida según los requerimientos específicos de cada cliente e industria.",
      image: " /images/products/guata-acolchado.jpg",
      path: "/contacto",
      icon: Waves,
    },
  ];
  
  const ProductsCatalogSection = () => {
    return (
      <section className="bg-[#fafafa] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1320px]">
          
          <div data-aos="fade-up" className="mb-12 text-center">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-blue-600">
              Nuestros productos
            </span>
  
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              Conoce nuestra gama de productos
            </h2>
  
            <div className="mx-auto mt-5 h-[2px] w-12 bg-blue-600" />
          </div>
  
          <div data-aos="fade-up" className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCatalogCard
                key={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                path={product.path}
                icon={product.icon}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ProductsCatalogSection;