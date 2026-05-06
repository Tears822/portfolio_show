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

/** Lead card: AI-first fullstack positioning; CMS appears as supporting capability. */
const cards = [
  {
    title: "AI Product Engineering",
    icon: Blocks,
    description:
      "Design and build AI-enabled product features with practical automation, strong UX, and maintainable delivery pipelines from prototype to production.",
  },
  {
    title: "Intelligent APIs & Integrations",
    icon: Network,
    description:
      "REST, GraphQL, and event-driven integrations connecting LLM workflows, business systems, and internal tools with reliability and observability.",
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
      "Latency budgets, caching, monitoring, and alerting so AI and fullstack services remain fast and dependable under real usage.",
  },
  {
    title: "Fast Iteration",
    icon: Rocket,
    description:
      "Rapid build-test-learn cycles with CI/CD and clear milestones, shipping features often without compromising engineering quality.",
  },
  {
    title: "CMS as Additional Skill",
    icon: CloudCog,
    description:
      "Shopify and WordPress support available for projects that need storefront, content, or editorial workflows alongside fullstack AI systems.",
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
