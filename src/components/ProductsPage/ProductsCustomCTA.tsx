import { ArrowRight, Box } from "lucide-react";
import { Link } from "react-router-dom";

const ProductsCustomCTA = () => {
  return (
    <section data-aos="fade-up" className="bg-[#fafafa] px-6 pb-16 lg:px-10 lg:pb-20">
      <div data-aos="fade-up" className="mx-auto max-w-[1320px]">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-700 via-blue-700 to-[#06213b]">
          
          <div  className="absolute inset-y-0 right-0 hidden w-[45%] lg:block">
            <img
              src="/images/products/products.jpeg"
              alt=""
              className="h-full w-full object-cover object-center opacity-35"
            />

            <div  className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-700/60 to-transparent" />
          </div>

          <div  className="relative z-10 grid grid-cols-1 items-center gap-7 px-7 py-8 md:grid-cols-[auto_1fr_auto] md:px-10 lg:px-12">
            
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-blue-300/70 text-white">
              <Box
                size={38}
                strokeWidth={1.5}
              />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-white">
                ¿No encuentras lo que buscas?
              </h2>

              <p className="mt-2 max-w-[600px] text-sm leading-6 text-white/85">
                Desarrollamos soluciones personalizadas según las necesidades
                de tu proyecto. Contáctanos y con gusto te asesoramos.
              </p>
            </div>

            <Link
              to="/contacto"
              className="inline-flex min-h-[46px] items-center justify-center gap-3 rounded-md bg-white px-7 text-sm font-bold text-blue-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-md"
            >
              Solicitar asesoría
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsCustomCTA;