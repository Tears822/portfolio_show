export type BlogPostCardProps = {
  href: string;
  imageAlt: string;
  imageSrc: string;
  title: string;
  date: string;
  ctaText: string;
};

export const BlogPostCard = (props: BlogPostCardProps) => {
  return (
    <article className="blog-post-card-rim text-sm outline-[3px] scroll-mt-[47.875px] md:text-base md:scroll-mt-[60px]">
      <div className="blog-post-card-inner">
        <figure className="sr-only">
          <img alt={props.imageAlt} src={props.imageSrc} />
        </figure>

        <header>
          <h3 className="font-geist text-xl font-medium leading-snug text-white md:text-2xl md:leading-tight">
            <a
              href={props.href}
              className="text-white decoration-transparent outline-none transition hover:text-violet-200 focus-visible:ring-2 focus-visible:ring-violet-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(13,17,32)]"
            >
              {props.title}
            </a>
          </h3>
        </header>

        <footer className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-1">
          <time className="text-sm text-slate-400 md:text-[15px]" dateTime={props.date}>
            {props.date}
          </time>
          <a href={props.href} className="blog-post-card-cta shrink-0">
            {props.ctaText}
          </a>
        </footer>
      </div>
    </article>
  );
};
