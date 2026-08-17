import { useState } from "react";
import { ArrowRight } from "lucide-react";

import GalleryCard from "./GalleryCard";
import {
  galleryItems,
  type GalleryCategory,
} from "./galleryData";

type FilterCategory = "Todas" | GalleryCategory;

const categories: FilterCategory[] = [
  "Todas",
  "Procesos",
  "Productos",
  "Maquinaria",
  "Instalaciones",
  "Capitonados",
];

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] =
    useState<FilterCategory>("Todas");

  const [visibleItems, setVisibleItems] = useState(6);

  const filteredItems =
    activeCategory === "Todas"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  const visibleGalleryItems = filteredItems.slice(0, visibleItems);

  const handleCategoryChange = (category: FilterCategory) => {
    setActiveCategory(category);
    setVisibleItems(6);
  };

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + 6);
  };

  return (
    <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1320px]">
        
        {/* Heading */}
        <div className="text-center">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-blue-600">
            Nuestra galería
          </span>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
            Explora nuestras áreas y procesos
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-12 bg-blue-600" />
        </div>

        {/* Filters */}
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                className={`rounded-full border px-6 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                    : "border-slate-300 bg-white text-slate-700 hover:border-blue-600 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleGalleryItems.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

        {/* Load more */}
        {visibleItems < filteredItems.length && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={handleLoadMore}
              className="inline-flex min-h-[46px] items-center gap-3 rounded-full bg-blue-600 px-8 text-sm font-bold text-white transition-all duration-300 hover:bg-blue-700"
            >
              Ver más imágenes

              <ArrowRight size={17} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default GalleryGrid;