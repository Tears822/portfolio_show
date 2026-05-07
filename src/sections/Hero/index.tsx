import { HeroActions } from "./components/HeroActions";

export const Hero = () => {
  return (
    <header
      className="relative z-10 min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat pt-28 pb-14 md:pt-40 md:pb-20"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(2,6,23,0.88)_0%,rgba(15,23,42,0.72)_40%,rgba(15,23,42,0.4)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(15,23,42,0)_0%,rgba(15,23,42,0.72)_45%,rgba(2,6,23,0.96)_100%)] md:h-56" />
      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] w-[min(100%-35px,1645px)] flex-col items-stretch justify-center gap-8 md:min-h-[calc(100vh-10rem)] md:w-[min(100%-80px,1840px)] md:flex-row md:items-end md:justify-between md:gap-10 lg:gap-14">
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-7 md:gap-9 md:pb-4 md:pr-4 lg:pr-8">
          <div className="flex max-w-5xl flex-col gap-3 md:gap-4">
            <small className="text-[11.6667px] items-center bg-no-repeat box-border caret-transparent gap-x-0.5 flex flex-wrap leading-[20.4167px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-0.5 md:text-[13.3333px] md:leading-[23.3333px]">
              <a
                href="#services"
                className="text-violet-200 text-[12.25px] items-center bg-violet-200/10 bg-no-repeat box-border caret-transparent gap-x-[17.5px] block justify-center tracking-[0.30625px] leading-[16.5375px] min-h-[auto] min-w-[auto] outline-transparent outline-offset-4 outline outline-2 gap-y-[17.5px] underline-offset-[1.93201px] text-center max-w-[min(100%,20rem)] border px-[13.125px] py-[4.375px] rounded-bl rounded-br rounded-tl rounded-tr border-solid border-transparent sm:max-w-none sm:text-nowrap md:text-sm md:gap-x-5 md:tracking-[0.35px] md:leading-[18.9px] md:gap-y-5 md:underline-offset-[2.20801px] md:px-[15px] md:py-[5px] hover:bg-violet-200/20"
              >
                Fullstack + AI Engineer
              </a>
            </small>
            <h1 className="max-w-5xl break-words font-geist text-[36.288px] font-medium leading-[46.6019px] md:text-[76.2939px] md:leading-[89.1726px]">
              AI, Fullstack and
              <br />
              Intelligent Products That Scale.
              <br />
              <span className="bg-[linear-gradient(to_right,rgb(250,175,200)_25%,rgb(175,200,250)_75%)] bg-clip-text text-transparent">
                Built by Jason Liu.
              </span>
            </h1>
          </div>
          <div className="max-w-3xl text-[15.75px] leading-[27.5625px] text-white/95 md:text-lg md:leading-[31.5px]">
            <p>
              Fullstack + AI with end-to-end ownership from product implementation to stable production delivery.
            </p>
            <p className="mt-2 text-violet-100/95 md:mt-3">
              <strong className="font-medium text-white">Stack:</strong> Java Spring Boot, .NET Core, Node.js,
              GraphQL/REST APIs, Azure/AKS, CI/CD, caching, and observability.
            </p>
            <p className="mt-2 md:mt-3">
              Shopify and WordPress support projects when CMS is part of the roadmap.
            </p>
          </div>
          <HeroActions />
        </div>

        <figure className="relative mx-auto flex w-full max-w-[280px] shrink-0 justify-center md:mx-0 md:w-[min(38%,420px)] md:max-w-none md:justify-end">
          <img
            src="/me.png"
            alt="Jason Liu"
            className="h-auto max-h-[min(42vh,360px)] w-full max-w-[320px] object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.45)] md:max-h-[min(78vh,680px)] md:max-w-none md:w-auto"
            loading="eager"
            decoding="async"
          />
        </figure>
      </div>
    </header>
  );
};
