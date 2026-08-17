import type { GalleryItem } from "./galleryData";

interface GalleryCardProps {
  item: GalleryItem;
}

const GalleryCard = ({ item }: GalleryCardProps) => {
  const Icon = item.icon;

  return (
    <article className="group relative h-[300px] overflow-hidden rounded-lg">
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#021a35]/95 via-[#021a35]/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
          <Icon size={24} strokeWidth={1.6} />
        </div>

        <h3 className="mt-4 text-xl font-extrabold text-white">
          {item.title}
        </h3>

        <p className="mt-1 text-sm text-white/85">
          {item.description}
        </p>
      </div>
    </article>
  );
};

export default GalleryCard;