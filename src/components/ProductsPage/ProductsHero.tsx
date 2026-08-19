import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProductsHero = () => {
  return (
    <section className="relative min-h-[360px] overflow-hidden">
      <img
        src="/images/products/products.jpeg"
        alt="Producción textil de Fiber Gomser"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div  className="absolute inset-0 bg-gradient-to-r from-[#021427]/95 via-[#021427]/75 to-[#021427]/20" />

      <div className="relative z-10 mx-auto flex min-h-[360px] max-w-[1440px] items-center px-6 py-14 lg:px-12 xl:px-16">
        <div data-aos="fade-up" className="max-w-[650px]">
          <div  className="flex items-center gap-3 text-sm font-medium">
            <Link
              to="/"
              className="text-white transition-colors duration-300 hover:text-blue-400"
              
            >
              Inicio
            </Link>

            <ChevronRight
              size={17}
              strokeWidth={2}
              className="text-white/80"
            />

            <span className="text-blue-400">
              Productos
            </span>
          </div>

          <span className="mt-8 block text-sm font-bold uppercase tracking-[0.08em] text-blue-500">
            Nuestros productos
          </span>

          <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[58px]">
            Soluciones textiles
            <br />
            <span className="text-blue-500">
              para cada necesidad
            </span>
          </h1>

          <p className="mt-6 max-w-[620px] text-sm leading-7 text-white/90 md:text-base">
            Ofrecemos una amplia gama de productos de alta calidad, fabricados
            con tecnología propia y materias primas seleccionadas para brindar
            el mejor desempeño en cada aplicación.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;