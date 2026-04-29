import { useEffect, useMemo, useState } from "react";

export type CaseStudyCardProps = {
    articleClassName?: string;
    imageAlt: string;
    imageSrc: string | string[];
    imageSizes: string;
    href: string;
    title: string;
    description: string;
    tag1Title?: string;
    tag1ClassName?: string;
    tag2Title?: string;
    tag2ClassName?: string;
  };
  
  export const CaseStudyCard = (props: CaseStudyCardProps) => {
    const imageSources = useMemo(
      () => (Array.isArray(props.imageSrc) ? props.imageSrc : [props.imageSrc]),
      [props.imageSrc],
    );
    const cardSeed = useMemo(
      () => `${props.title}|${props.href}|${imageSources[0] ?? ""}`,
      [props.title, props.href, imageSources],
    );
    const cardHash = useMemo(() => {
      // Deterministic djb2-style hash for better spread than char-code sum.
      let hash = 5381;
      for (let index = 0; index < cardSeed.length; index += 1) {
        hash = (hash * 33) ^ cardSeed.charCodeAt(index);
      }
      return Math.abs(hash);
    }, [cardSeed]);

    const [imageIndex, setImageIndex] = useState(0);
    const rotationMs = useMemo(() => 2200 + (cardHash % 19) * 173, [cardHash]);
    const startDelayMs = useMemo(() => (cardHash % 13) * 211, [cardHash]);

    useEffect(() => {
      setImageIndex(0);
    }, [imageSources.length, props.title]);

    useEffect(() => {
      if (imageSources.length < 2) return;

      const delayedStart = window.setTimeout(() => {
        setImageIndex((current) => (current + 1) % imageSources.length);
      }, startDelayMs);

      const timer = window.setInterval(() => {
        setImageIndex((current) => (current + 1) % imageSources.length);
      }, rotationMs);

      return () => {
        window.clearTimeout(delayedStart);
        window.clearInterval(timer);
      };
    }, [imageSources.length, rotationMs, startDelayMs]);

    return (
      <article
        className={`relative text-sm bg-no-repeat box-border caret-transparent gap-x-0 flex flex-col row-start-[span_3] justify-start leading-[24.5px] min-h-full min-w-[auto] outline-[3px] gap-y-0 rounded-[11.375px] md:text-base md:leading-7 md:rounded-[18px] ${props.articleClassName || ""}`.trim()}
      >
        <figure className="relative text-sm items-center bg-no-repeat box-border caret-transparent flex justify-center leading-[24.5px] min-h-[auto] min-w-[280px] outline-[3px] pointer-events-none w-full pt-[8.75px] px-[8.75px] md:text-base md:leading-7 md:pt-5 md:px-5">
          <div className="relative text-sm items-center bg-slate-950 bg-no-repeat shadow-[rgba(0,0,50,0.5)_0px_4.92188px_4.92188px_0px,rgba(0,0,50,0.5)_0px_9.84375px_9.84375px_0px,rgba(0,0,50,0.5)_0px_19.6875px_19.6875px_0px] box-border caret-transparent flex justify-center leading-[24.5px] max-w-[968.75px] min-h-[auto] min-w-[auto] outline-transparent outline outline-1 w-full mx-auto p-[4.375px] rounded-[7px] md:text-base md:shadow-[rgba(0,0,50,0.5)_0px_10px_10px_0px,rgba(0,0,50,0.5)_0px_20px_20px_0px,rgba(0,0,50,0.5)_0px_40px_40px_0px] md:leading-7 md:max-w-[980px] md:p-2.5 md:rounded-lg">
            <div className="relative text-sm aspect-[4_/_3] bg-slate-950 bg-no-repeat box-border caret-transparent leading-[24.5px] min-h-[auto] min-w-[auto] outline-transparent outline outline-1 w-full md:text-base md:leading-7">
              <img
                alt={props.imageAlt}
                src={imageSources[imageIndex]}
                sizes={props.imageSizes}
                className="text-sm aspect-[auto_960_/_960] bg-no-repeat box-border caret-transparent inline h-full leading-[24.5px] max-w-full object-cover object-[50%_0%] outline-[3px] w-full md:text-base md:leading-7"
              />
            </div>
          </div>
        </figure>
        <div className="relative text-sm bg-no-repeat box-border caret-transparent gap-x-[17.5px] flex flex-col justify-between leading-[24.5px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-[17.5px] z-20 px-[13.125px] py-[26.25px] md:text-base md:gap-x-5 md:leading-7 md:gap-y-5 md:px-[30px] md:py-10">
          <header className="text-sm bg-no-repeat box-border caret-transparent gap-x-[13.125px] flex flex-col justify-start leading-[24.5px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-[13.125px] md:text-base md:gap-x-[15px] md:leading-7 md:gap-y-[15px]">
            <h3 className="text-[25.2px] font-medium bg-no-repeat box-border caret-transparent leading-[34.8128px] min-h-[auto] min-w-[auto] outline-[3px] break-words font-geist md:text-[31.25px] md:leading-[41.25px]">
              <a
                href={props.href}
                className="text-[25.2px] bg-no-repeat box-border caret-transparent leading-[34.8128px] outline-transparent outline-offset-4 outline outline-2 break-words decoration-transparent underline decoration-[2.52px] underline-offset-[4.25039px] md:text-[31.25px] md:leading-[41.25px] md:decoration-[3.125px] md:underline-offset-[5.27344px] hover:text-violet-200 hover:border-violet-200"
              >
                {props.title}
              </a>
            </h3>
            <p className="text-white/80 text-sm bg-no-repeat box-border caret-transparent leading-[24.5px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-7">
              {props.description}
            </p>
          </header>
          <ul className="absolute text-blue-950 text-sm items-end bg-no-repeat box-border caret-transparent gap-x-[3px] flex flex-wrap leading-[24.5px] list-none outline-[3px] gap-y-[3px] pl-0 right-[13.125px] top-[8.75px] md:text-base md:leading-7 md:right-[30px] md:top-5">
            {props.tag1Title && props.tag1ClassName ? (
              <li title={props.tag1Title} className={props.tag1ClassName}></li>
            ) : null}
            {props.tag2Title && props.tag2ClassName ? (
              <li title={props.tag2Title} className={props.tag2ClassName}></li>
            ) : null}
          </ul>
        </div>
      </article>
    );
  };
  