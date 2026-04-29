import { Navbar } from "@/sections/Header/components/Navbar";

export const Header = () => {
  return (
    <header
      role="banner"
      className="fixed text-sm bg-no-repeat box-border caret-transparent leading-[24.5px] min-w-80 outline-[3px] w-full z-[70] left-0 top-0 md:text-base md:leading-7 after:accent-auto after:backdrop-blur-[30px] after:bg-blue-950/50 after:bg-no-repeat after:box-border after:caret-transparent after:text-white after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-[150%] after:tracking-[normal] after:leading-[24.5px] after:list-outside after:list-disc after:[mask-composite:subtract] after:[mask-image:linear-gradient(rgb(0,0,0)_25%,rgba(0,0,0,0)_100%)] after:outline-[3px] after:pointer-events-none after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:z-[-2] after:border-separate after:left-0 after:top-0 after:font-inter after:md:text-base after:md:leading-7"
    >
      <div className="text-sm bg-no-repeat box-border caret-transparent leading-[24.5px] max-w-[375px] min-w-80 outline-[3px] w-[min(100%,375px)] mx-auto p-[8.75px] md:text-base md:leading-7 md:max-w-screen-xl md:w-[min(100%,1280px)] md:p-5">
        <Navbar />
      </div>
    </header>
  );
};
