import { BenefitsIntro } from "@/sections/BenefitsSection/components/BenefitsIntro";
import { BenefitCard } from "@/sections/BenefitsSection/components/BenefitCard";
import {
  Blocks,
  CloudCog,
  GaugeCircle,
  Network,
  Rocket,
  ShieldCheck,
} from "lucide-react";

/** Lead card: combined CMS positioning; other cards support integrations & scale. */
const cards = [
  {
    title: "CMS: Shopify + WordPress",
    icon: Blocks,
    description:
      "Commerce on Shopify, publishing and marketing on WordPress - custom themes, blocks, apps, and content architecture that stay maintainable.",
  },
  {
    title: "APIs & Integrations",
    icon: Network,
    description:
      "ERP, CRM, OMS, payments - REST, GraphQL, and webhooks connecting Shopify, WordPress, and your internal tools.",
  },
  {
    title: "Enterprise-Grade Quality",
    icon: ShieldCheck,
    description:
      "Clean, reviewable code and architecture so your storefront and services stay evolvable as the catalog grows.",
  },
  {
    title: "Performance & Reliability",
    icon: GaugeCircle,
    description:
      "Core Web Vitals, caching, and observability - so campaigns and peak seasons do not break the buying path.",
  },
  {
    title: "Fast Delivery",
    icon: Rocket,
    description:
      "Clear milestones for theme launches, migrations, and integration rollouts - shipping often without sacrificing quality.",
  },
  {
    title: "Cloud Cost Optimization",
    icon: CloudCog,
    description:
      "Lean infrastructure behind integrations and services - stable APIs and lower waste as you scale traffic.",
  },
] as const;

export const BenefitsSection = () => {
  const col1 = cards[0];
  const col2 = cards.slice(1, 3);
  const col3 = cards.slice(3, 5);
  const col4 = cards.slice(5, 6);

  return (
    <section
      id="benefits"
      className="relative scroll-mt-[48px] py-12 md:scroll-mt-[60px] md:py-[60px]"
    >
      <div className="mx-auto w-[min(100%-35px,1645px)] md:w-[min(100%-80px,1840px)]">
        <BenefitsIntro />

        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-6 lg:gap-8">
          <div className="flex flex-1 flex-col gap-6 md:mt-0 md:gap-8">
            <BenefitCard {...col1} />
          </div>
          <div className="flex flex-1 flex-col gap-6 md:mt-12 md:gap-8">
            {col2.map((card) => (
              <BenefitCard key={card.title} {...card} />
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-6 md:mt-24 md:gap-8">
            {col3.map((card) => (
              <BenefitCard key={card.title} {...card} />
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-6 md:mt-12 md:gap-8">
            {col4.map((card) => (
              <BenefitCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
