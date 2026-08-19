import { ArrowRight } from "lucide-react";

export interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  linkText?: string;
}

const ProductCard = ({
  title,
  description,
  image,
  href,
  linkText = "Ver productos",
}: ProductCardProps) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      <div className="h-[190px] shrink-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        
        <div>
          <h3 className="text-lg font-bold leading-tight text-slate-950">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            {description}
          </p>
        </div>

        <div className="mt-auto pt-6">
          <a
            href={href}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase text-blue-600 transition-colors duration-300 hover:text-blue-800"
          >
            {linkText}

            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;