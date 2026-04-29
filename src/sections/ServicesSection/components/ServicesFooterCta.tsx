export type ServiceCardProps = {
  sectionVariant: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  titleVariant: string;
  titleHref: string;
  subtitle: string;
  listVariant: string;
  itemLinkClassName: string;
  items: { label: string; href: string }[];
  description: React.ReactNode;
  iconItemVariant: string;
  iconSrc: string;
  iconAlt: string;
  iconClassName: string;
  footerText: string;
  footerTextVariant: string;
  ctaHref: string;
  ctaText: string;
  ctaVariant: string;
};

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <section className={`rounded-xl border border-white/10 bg-blue-950/20 p-8 md:p-10 ${props.sectionVariant}`}>
      <header className="text-center">
        <img src={props.imageSrc} alt={props.imageAlt} className="mx-auto h-8 w-8" />
        <h3 className={`mt-4 font-geist text-4xl md:text-5xl ${props.titleVariant}`}>
          <a href={props.titleHref}>{props.title}</a>
        </h3>
        <p className="mt-3 text-white/80">{props.subtitle}</p>
      </header>

      <div className="service-skill-marquee mt-6">
        <div className="service-skill-marquee-track">
          {[0, 1].map((lane) => (
            <ul key={lane} className="service-skill-row">
              {props.items.map((item, index) => (
                <li key={`${lane}-${item.label}-${index}`} className="service-skill-item">
                  <a href={item.href} className={props.itemLinkClassName}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-4 text-center">
        <p className="text-white/80">{props.description}</p>
        <div className="flex items-center justify-center gap-2">
          <img src={props.iconSrc} alt={props.iconAlt} className={props.iconClassName} />
          <span className={props.iconItemVariant}>{props.footerText}</span>
        </div>
        <a href={props.ctaHref} className={`underline ${props.ctaVariant}`}>
          {props.ctaText}
        </a>
      </div>
    </section>
  );
};
