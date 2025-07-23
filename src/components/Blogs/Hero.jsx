"use client";

import Copy from "../Animations/Copy";
import { fadeUpAnim } from "../Animations/gsapAnimations";
import HeroBackground from "../Hero/HeroBackground";

export default function Hero() {

  const preloaderShown = typeof window !== 'undefined' ? sessionStorage.getItem('preloaderShown') : null;
  const baseDelay = preloaderShown ? 0.5 : 7.5;

  fadeUpAnim();

  return (
    <section className="w-screen relative h-screen  max-sm:pb-0 bg-background overflow-hidden">
      <div className="relative h-screen max-sm:h-[80vh] max-sm:pt-[15vh] w-full flex flex-col items-center justify-center max-sm:items-start max-sm:px-[2vw]">
        <HeroBackground />
        <div
          className={`h-fit pointer-events-none w-full flex-col flex items-center justify-center z-10 text-foreground max-sm:items-start text-center max-sm:text-left max-sm:pl-[5vw] max-sm:pt-[0vw]`}
        >
          <Copy delay={baseDelay}>
            <h1
              className={`text-head-150 font-display w-[80%] headingText  text-gray-1 max-sm:w-[90%]`}
            >
              Ideas, Insights <br/> & Innovation
            </h1>
          </Copy>
          <div
            className={`w-[60%] pt-5 text-content-20 max-sm:text-left text-gray-2 max-sm:w-[90%] max-sm:pt-[10vw] max-md:pt-[5vw]`}
          >
            <Copy delay={baseDelay + 0.5}>
              <p className="descriptionText max-sm:text-left max-sm:text-content-20 max-sm:leading-[1.5]">
                Explore expert insights, product updates, market trends, and
                thought leadership from the team driving the future of digital
                banking in Africa. Stay informed on what’s shaping fintech,
                financial inclusion, and scalable innovation — all in one place.
              </p>
            </Copy>
          </div>
        </div>
      </div>
    </section>
  );
}
