export const BenefitsIntro = () => {
  return (
    <header className="relative mx-auto mb-10 flex max-w-3xl flex-col items-center gap-y-6 px-4 text-center md:mb-14 md:gap-y-8 md:px-6">
      <div className="flex flex-col items-center gap-y-4 md:gap-y-5">
        <small className="inline-flex items-center rounded-full border border-transparent bg-violet-200/10 px-3 py-1 text-sm tracking-wide text-violet-200 md:px-4 md:py-1.5">
          Fullstack + CMS
        </small>
        <h2 className="font-geist text-3xl font-medium leading-tight text-white md:text-5xl md:leading-[1.15]">
          Shopify + WordPress, Built Like Product Engineering
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-white/85 md:text-base md:leading-7">
          Lead Software Engineer with 10+ years across CMS and enterprise systems: Shopify and WordPress
          (themes, blocks, multisite, headless), plus cloud and APIs when your content and commerce need to scale together.
        </p>
      </div>
      <a
        href="mailto:jason@aunexes.com"
        className="relative inline-flex min-w-[200px] items-center justify-center rounded-lg bg-gradient-to-b from-white/20 to-white/5 px-10 py-4 text-lg font-medium tracking-wide text-white shadow-[0_8px_40px_rgba(0,0,50,0.35)] transition hover:shadow-[0_12px_48px_rgba(0,0,50,0.5)] md:px-11 md:py-[17px]"
      >
        <span className="relative z-10">Start a CMS Project</span>
      </a>
    </header>
  );
};
