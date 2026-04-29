import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export type BenefitCardProps = {
  title: string;
  icon: LucideIcon;
  description: ReactNode;
  articleVariant?: string;
  articleClassName?: string;
};

export const BenefitCard = (props: BenefitCardProps) => {
  const Icon = props.icon;

  return (
    <article
      className={`benefit-card-outer${props.articleVariant ? ` ${props.articleVariant}` : ""}${
        props.articleClassName ? ` ${props.articleClassName}` : ""
      }`}
    >
      <div className="benefit-card-dot" aria-hidden />
      <div className="benefit-card-surface">
        <div className="benefit-card-ray" aria-hidden />

        <figure className="absolute left-1/2 top-6 z-10 flex -translate-x-1/2 justify-center md:top-7">
          <Icon
            aria-hidden="true"
            className="h-10 w-10 text-indigo-200/90 md:h-12 md:w-12"
            style={{ filter: "drop-shadow(0 0 8px rgba(129, 140, 248, 0.35))" }}
            strokeWidth={1.8}
          />
        </figure>
        <header className="relative z-10 mt-16 px-0.5 md:mt-[4.5rem]">
          <h3 className="bg-gradient-to-br from-white via-indigo-100 to-violet-200/90 bg-clip-text font-geist text-lg font-semibold leading-snug text-transparent md:text-xl">
            {props.title}
          </h3>
        </header>
        <p className="relative z-10 mt-3 line-clamp-4 text-sm leading-relaxed text-slate-300/90 md:text-[15px]">
          {props.description}
        </p>
      </div>
    </article>
  );
};
