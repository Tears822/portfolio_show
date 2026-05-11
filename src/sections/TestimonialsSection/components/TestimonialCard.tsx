export type TestimonialCardProps = {
    quote: string;
    name: string;
    role: string;
    company: string;
    logoSrc?: string;
    logoAlt?: string;
  };
  
  export const TestimonialCard = (props: TestimonialCardProps) => {
    return (
      <article className="relative text-sm bg-blue-950/20 bg-[linear-gradient(175deg,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.024)_75%)] bg-no-repeat shadow-[rgba(0,0,50,0.15)_0px_4.92188px_4.92188px_0px,rgba(0,0,50,0.15)_0px_9.84375px_9.84375px_0px,rgba(0,0,50,0.15)_0px_19.6875px_19.6875px_0px] box-border caret-transparent leading-[24.5px] min-h-[auto] min-w-[auto] outline-[3px] text-center z-20 rounded-xl md:text-base md:shadow-[rgba(0,0,50,0.15)_0px_10px_10px_0px,rgba(0,0,50,0.15)_0px_20px_20px_0px,rgba(0,0,50,0.15)_0px_40px_40px_0px] md:leading-7 md:translate-y-20 before:accent-auto before:bg-[linear-gradient(165deg,rgba(255,255,255,0.16),rgba(255,255,255,0)_60%)] before:bg-origin-border before:box-border before:caret-transparent before:text-white before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[24.5px] before:list-outside before:list-disc before:[mask-clip:padding-box,border-box] before:[mask-composite:exclude,exclude] before:[mask-image:linear-gradient(rgb(0,0,0)_0px,rgb(0,0,0)_0px),linear-gradient(rgb(0,0,0)_0px,rgb(0,0,0)_0px)] before:[mask-mode:match-source,match-source] before:[mask-origin:padding-box,border-box] before:[mask-position:0%_0%,0%_0%] before:[mask-repeat:repeat,repeat] before:[mask-size:auto,auto] before:outline-[3px] before:pointer-events-none before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:z-30 before:border before:rounded-xl before:border-separate before:border-solid before:border-transparent before:inset-0 before:font-inter before:md:text-base before:md:leading-7">
        <div className="relative text-sm bg-no-repeat box-border caret-transparent gap-x-[26.25px] flex flex-col h-full justify-between leading-[24.5px] outline-[3px] gap-y-[26.25px] p-[26.25px] md:text-base md:gap-x-[30px] md:leading-7 md:gap-y-[30px] md:p-10">
          <blockquote className="relative text-[17.5px] bg-no-repeat box-border caret-transparent gap-x-0 flex flex-col leading-[27.125px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 font-geist md:text-[21.12px] md:leading-[32.736px]">
            {props.logoSrc ? (
              <div className="mb-4 flex justify-center">
                <img
                  src={props.logoSrc}
                  alt={props.logoAlt ?? `${props.name} logo`}
                  className="h-8 w-auto max-w-[170px] object-contain opacity-90 md:h-10 md:max-w-[210px]"
                />
              </div>
            ) : null}
            <p className="text-[17.5px] bg-no-repeat box-border caret-transparent leading-[27.125px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[21.12px] md:leading-[32.736px]">
              {props.quote}
            </p>
          </blockquote>
          <header className="text-sm bg-no-repeat box-border caret-transparent gap-x-[13.125px] flex flex-col justify-start leading-[24.5px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-[13.125px] md:text-base md:gap-x-[15px] md:leading-7 md:gap-y-[15px]">
            <h3 className="text-[25.2px] font-medium bg-no-repeat box-border caret-transparent leading-[34.8128px] min-h-[auto] min-w-[auto] outline-[3px] break-words font-geist md:text-[31.25px] md:leading-[41.25px]">
              {props.name}
            </h3>
            <div className="text-sm bg-no-repeat box-border caret-transparent gap-x-0 flex flex-col justify-start leading-[24.5px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 md:text-base md:leading-7">
              <div className="text-violet-200 text-[13.125px] bg-no-repeat box-border caret-transparent leading-[22.9688px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[15px] md:leading-[26.25px]">
                {props.role}
              </div>
              <div className="text-[13.125px] bg-no-repeat box-border caret-transparent leading-[22.9688px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[15px] md:leading-[26.25px]">
                {props.company}
              </div>
            </div>
          </header>
        </div>
      </article>
    );
  };
  