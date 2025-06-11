"use client"
import React, { useEffect } from "react";
import ButtonComponent from "../../Buttons/ButtonComponent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Intro() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const introText = SplitText.create(".introText", {
        type: "lines",
        mask:"lines",
        linesClass: "introTextLines",
      });
      const introTextDescription = SplitText.create(".introTextDescription", {
        type: "lines",
        mask:"lines",
        linesClass: "introTextDescriptionLines",
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#intro",
          start: "top 80%",
          end: "bottom top",
          // markers: true,
        },
      });
      gsap.set(".introTextLines", { y: "100%" });
      gsap.set(".introTextDescriptionLines", { y: "100%" });
      tl.to(".introTextLines", {
        y: "0%",
        duration: 1,
        stagger: 0.08,
        ease: "power3.inOut",
      });
      tl.to(".introTextDescriptionLines", {
        y: "0%",
        duration: 1,
        stagger: 0.08,
        ease: "power3.inOut",
      },'<+.5');
    });
  }, []);

  return (
    <section
      id="intro"
      className="flex flex-col items-center h-screen py-[9vw] gap-10 bg-[#050505]"
    >
      <div className=" w-full flex items-center py-1 justify-center h-fit">
        <h2 className="text-[#D6D6D6] introText text-[5vw] w-[70%] text-center leading-[1.25] font-display">
          Empowering Banks & Fintechs with Scalable Solutions
        </h2>
      </div>
      <div className=" w-full flex items-center justify-center h-fit">
          <p className="text-[#A8A8A8] introTextDescription text-[1.1vw] w-[44%] text-center font-display ">
            Our Plug & Play SDK can be Easily Integrated into Mobile Apps of Banks
            & FinTechs to deliver a wide variety of use cases without requiring
            them to build these functionalities from scratch. Our Back-End
            Applications may be deployed in a dedicated instance on our Cloud
            Infrastructure providing our partners full control over its access,
            management , security , data-protection & business continuity.
          </p>
      </div>
      <ButtonComponent text="Learn More" bgColor={false} borderColor="white" />
    </section>
  );
}
