"use client";
import React, { useEffect } from "react";
import ButtonComponent from "../Buttons/ButtonComponent";
import HeroBackground from "../Hero/HeroBackground";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function CTA({
 
}) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const ctaText = SplitText.create(".ctaDescription", {
        type: "lines",
        linesClass: "ctaDescriptionLines",
        mask: "lines",
      });
      const ctaText1 = SplitText.create(".ctaText1", {
        type: "lines",
        linesClass: "ctaText1Lines",
        mask: "lines",
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#cta",
          start: "top 80%",
          end: "bottom top",
          // markers: true,
          once: true,
        },
      });
      gsap.set(".ctaText1Lines", { y: "100%" });
      gsap.set(".ctaDescriptionLines", { y: "100%" });
      tl.to(".ctaText1Lines", {
        y: "0%",
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.02,
      });
      tl.to(
        ".ctaDescriptionLines",
        {
          y: "0%",
          duration: 1,
          stagger: 0.02,
        },
        "<+1"
      );
    });
    return () => ctx.revert();
  }, []);
  return (
    <section id="cta" className="w-screen relative h-screen bg-background">
      <div className="relative h-screen w-full flex flex-col items-center justify-center">
        <HeroBackground />
        <div
          className={`h-fit pointer-events-none w-full
          flex-col flex items-center justify-center z-10 text-foreground`}
        >
          <h2
            className={`
                text-[5.2vw]
              font-display w-[75%] text-center leading-[1.25] ctaText1 text-[#D6D6D6]`}
          >
            Ready to Power Your Digital Banking Experience
          </h2>

          <div className={`w-[48%] pt-[3vw] text-center text-[1.05vw] tracking-wide `}>
            <p className="text-[#A8A8A8] ctaDescription">
              Integrate the Moneylink Super SDK and start delivering seamless,
              scalable banking services within your mobile app — faster than
              ever. Let's build the future of finance together.
            </p>
          </div>
          <div className="flex items-center pt-[3vw] gap-5">
            <ButtonComponent text="Talk to an expert" borderColor="white" />
            <ButtonComponent
              text="Talk to an expert"
              borderTrue
              bgColor="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
