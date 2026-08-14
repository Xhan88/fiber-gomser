import ProductCard, {
    type ProductCardProps,
  } from "./ProductCard";
  
  const products: ProductCardProps[] = [
    {
      title: "Fibras para relleno",
      description:
        "Fibra siliconizada, Micro Gel y más. Ideales para almohadas, peluches, cojines y más.",
      image: "public/images/products/fibras-relleno.jpg",
      href: "#fibras",
    },
    {
      title: "Guata laminada",
      description:
        "Guata Delcron laminada en diferentes espesores, medidas y densidades.",
      image: "/images/products/guata-laminada.webp",
      href: "#guata",
    },
    {
      title: "Geotextiles",
      description:
        "Soluciones para construcción, drenaje, separación y protección de suelos.",
      image: "/images/products/geotextiles.jpg",
      href: "#geotextiles",
    },
    {
      title: "Capitonados",
      description:
        "Capitonados decorativos, hoteleros y para tapicería. Gran variedad de diseños, materiales y colores.",
      image: "/images/products/capitonados.jpg",
      href: "#capitonados",
      linkText: "Ver catálogo",
    },
    {
      title: "Servicio ultrasónico",
      description:
        "Pun-sonic ultrasónico para cubre colchones, cubre salas y diferentes aplicaciones.",
      image: "/images/products/ser-ultrasonico.jpeg",
      href: "#ultrasonico",
      linkText: "Ver servicios",
    },
    {
      title: "Guata para acolchado",
      description:
        "Guata para acolchado de colchones, cubrecolchones y productos textiles en general.",
      image: "/images/products/guata-acolchado.jpg",
      href: "#acolchado",
    },
  ];
  
  const ProductsSection = () => {
    return (
      <section
        id="productos"
        className="bg-[#f7f9fc] px-6 py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-[1440px]">
          {/* Heading */}
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
              Nuestros productos
            </span>
  
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              Variedad, calidad y soluciones para cada necesidad
            </h2>
  
            <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
              Contamos con una amplia gama de productos textiles para múltiples
              aplicaciones.
            </p>
          </div>
  
          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {products.map((product) => (
              <ProductCard
                key={product.title}
                {...product}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ProductsSection;