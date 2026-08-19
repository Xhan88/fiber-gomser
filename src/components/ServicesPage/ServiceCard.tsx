import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  href?: string;
}

const ServiceCard = ({
  title,
  description,
  image,
  icon: Icon,
  href = "#contacto",
}: ServiceCardProps) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_5px_20px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(15,23,42,0.10)]">
      
      <div className="relative h-[190px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute -bottom-6 left-5 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100 bg-white text-blue-600 shadow-sm">
          <Icon
            size={28}
            strokeWidth={1.6}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-10">
        <h3 className="text-lg font-extrabold text-slate-950">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-6 text-slate-600">
          {description}
        </p>

        <a
          href={href}
          className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-blue-600 transition-colors hover:text-blue-800"
        >
          Ver más

          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>
    </article>
  );
};

export default ServiceCard;