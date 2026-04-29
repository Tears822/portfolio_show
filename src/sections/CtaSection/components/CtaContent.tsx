import { Building2, Globe, Rocket, ShieldCheck, Wrench } from "lucide-react";

const reviews = [
  {
    name: "Jason Chan",
    company: "Soundbrenner",
    title: "Shopify + WordPress Integration",
    quote:
      "Jason unified our Shopify storefront with WordPress content workflows and cut launch friction across teams.",
    icon: Globe,
    avatarSrc: "/client/cli-1.webp",
  },
  {
    name: "Kenneth Wong",
    company: "Sino Land",
    title: "Performance & Conversion Lift",
    quote:
      "The stack is faster, cleaner, and easier to ship on. We saw better checkout completion after the rebuild.",
    icon: Rocket,
    avatarSrc: "/client/cli-2.webp",
  },
  {
    name: "Raymond Lee",
    company: "RoadShow",
    title: "Reliable API Delivery",
    quote:
      "Great ownership from architecture to rollout. Integrations with ERP and CRM are now stable and observable.",
    icon: Building2,
    avatarSrc: "/client/cli-3.avif",
  },
  {
    name: "Adrian Lau",
    company: "Sun Hung Kai Properties",
    title: "Design + CMS Execution",
    quote:
      "He translated requirements into a maintainable implementation without sacrificing brand and content flexibility.",
    icon: Wrench,
    avatarSrc: "/client/cli-4.avif",
  },
  {
    name: "Marcus Ho",
    company: "Vita Green",
    title: "Governance & Quality",
    quote:
      "Structured delivery and high code quality gave us confidence to scale features across multiple markets.",
    icon: ShieldCheck,
    avatarSrc: "/client/cli-5.avif",
  },
] as const;

export const CtaContent = () => {
  return (
    <div className="space-y-8 md:space-y-10">
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-violet-200">Client Reviews</p>
        <h2 className="mt-2 bg-gradient-to-r from-white via-violet-100 to-indigo-200 bg-clip-text font-geist text-4xl font-medium text-transparent md:text-5xl">
          Trusted Delivery Across CMS and Fullstack Projects
        </h2>
      </header>

      <div className="review-carousel">
        <div className="review-carousel-track">
          {[0, 1].map((loopIndex) => (
            <div className="review-carousel-row" key={loopIndex}>
              {reviews.map((review, index) => {
                const Icon = review.icon;

                return (
                  <article
                    key={`${loopIndex}-${review.name}-${index}`}
                    className="review-card rounded-2xl border border-white/15 bg-[linear-gradient(155deg,rgba(255,255,255,0.12),rgba(30,41,59,0.92))] p-5 shadow-[0_14px_34px_rgba(2,6,23,0.45)] backdrop-blur-sm md:p-6"
                  >
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-300/30 bg-indigo-400/10 text-indigo-200">
                        <Icon className="h-5 w-5" strokeWidth={1.9} />
                      </div>
                      <img
                        src={review.avatarSrc}
                        alt={`${review.name} avatar`}
                        className="h-11 w-11 rounded-full border border-violet-200/40 object-cover shadow-[0_0_0_2px_rgba(79,70,229,0.25)]"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="font-geist text-xl text-white">{review.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-200/90 md:text-[15px]">
                      "{review.quote}"
                    </p>
                    <div className="mt-4 space-y-1">
                      <p className="bg-gradient-to-r from-violet-100 via-violet-200 to-indigo-200 bg-clip-text font-geist text-base font-semibold tracking-[0.2px] text-transparent md:text-lg">
                        {review.name}
                      </p>
                      <p className="text-xs font-medium tracking-[0.2px] text-indigo-200/80 md:text-sm">
                        {review.company}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
  