import { ArrowRight } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/gallery/planta1.jpg",
    alt: "Materiales de Fiber Gomser",
  },
  {
    id: 2,
    src: "/images/gallery/planta2.jpg",
    alt: "Área de producción de Fiber Gomser",
  },
  {
    id: 3,
    src: "/images/gallery/planta3.jpg",
    alt: "Rollos y materiales textiles en planta",
  },
  {
    id: 4,
    src: "/images/gallery/planta4.jpg",
    alt: "Detalle de capitonado textil",
  },
  {
    id: 5,
    src: "/images/gallery/planta5.jpg",
    alt: "Carga y distribución de producto",
  },
];

const GallerySection = () => {
  return (
    <section
      id="galeria"
      className="bg-white px-6 py-14 lg:px-10 lg:py-16"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Heading */}
        <div className="mb-8 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
            Galería
          </span>

          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
            Nuestra planta y procesos
          </h2>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group h-[190px] overflow-hidden rounded-sm"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-5 flex justify-center">
          <a
            href="#galeria-completa"
            className="inline-flex min-h-[44px] items-center gap-2 border border-slate-400 bg-white px-6 text-xs font-bold uppercase text-slate-800 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
          >
            Ver toda la galería
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;