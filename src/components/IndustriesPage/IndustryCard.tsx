import type { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

const IndustryCard = ({
  title,
  description,
  image,
  icon: Icon,
}: IndustryCardProps) => {
  return (
    <article className="group grid min-h-[250px] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_5px_18px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,23,42,0.10)] sm:grid-cols-[55%_45%]">
      
      <div className="flex flex-col justify-center px-6 py-7">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <Icon
            size={30}
            strokeWidth={1.7}
          />
        </div>

        <h3 className="mt-4 text-xl font-extrabold text-slate-950">
          {title}
        </h3>

        <div className="mt-4 h-[2px] w-7 bg-blue-600" />

        <p className="mt-5 max-w-[170px] text-sm leading-6 text-slate-600">
          {description}
        </p>
      </div>

      <div className="h-[220px] overflow-hidden sm:h-full">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </article>
  );
};

export default IndustryCard;