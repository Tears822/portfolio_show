export type SkipLinksProps = {
    href: string;
    text: string;
  };
  
  export const SkipLinks = (props: SkipLinksProps) => {
    return (
      <a
        href={props.href}
        className="absolute text-sm bg-no-repeat box-border caret-transparent block left-[-10000px] leading-[24.5px] outline-transparent outline-offset-4 outline outline-2 underline decoration-from-font underline-offset-[2.20801px] top-0 md:text-base md:leading-7 md:underline-offset-[2.52344px] hover:text-violet-200 hover:decoration-transparent hover:border-violet-200"
      >
        {props.text}
      </a>
    );
  };
  