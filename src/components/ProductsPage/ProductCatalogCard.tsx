import { ArrowRight, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCatalogCardProps {
  title: string;
  description: string;
  image: string;
  path: string;
  icon: LucideIcon;
}

const ProductCatalogCard = ({
  title,
  description,
  image,
  path,
  icon: Icon,
}: ProductCatalogCardProps) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_5px_20px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(15,23,42,0.10)]">
      
      <div className="h-[210px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 gap-5 p-6">
        
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
          <Icon
            size={24}
            strokeWidth={1.7}
          />
        </div>

        <div className="flex flex-1 flex-col">
          <h3 className="text-lg font-bold text-slate-950">
            {title}
          </h3>

          <p className="mt-3 text-[14px] leading-6 text-slate-600">
            {description}
          </p>

          <Link
            to={path}
            className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-blue-600 transition-colors hover:text-blue-800"
          >
            Ver más

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCatalogCard;