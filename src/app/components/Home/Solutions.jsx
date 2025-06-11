"use client"
import React, { useEffect, useRef } from "react";
import ButtonComponent from "../Buttons/ButtonComponent";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const data = [
  {
    tag:"Digital Account",
    index:"0",
    number:"001",
    title:"Digital Account",
    para:"From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions.",
    link:"/"
  },
  {
    tag:"Loyalty",
    index:"1",
    number:"002",
    title:"Loyalty",
    para:"From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions.",
    link:"/"
  },
  {
    tag:"Merchant Acquiring",
    index:"2",
    number:"003",
    title:"Merchant Acquiring",
    para:"From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions.",
    link:"/"
  },
  {
    tag:"Digital Lending",
    index:"3",
    number:"004",
    title:"Digital Lending",
    para:"From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions.",
    link:"/"
  },
  {
    tag:"Card Issuing",
    index:"4",
    number:"005",
    title:"Card Issuing",
    para:"From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions.",
    link:"/"
  },
  {
    tag:"KYC",
    index:"5",
    number:"006",
    title:"KYC",
    para:"From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions.",
    link:"/"
  },
]
const SolutionsCard = ({ number, title, para, link }) => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-[70vw] h-auto flex items-center justify-center">
        <Image
          src={"/frameScroll.svg"}
          alt="frameScroll"
          className="w-full h-full object-cover"
          width={100}
          height={100}
        />
      </div>
      <div className="h-screen w-screen flex items-center justify-center absolute inset-0">
        <div className="flex flex-col items-start px-[18vw] justify-evenly h-[80%] w-full">
          <p className="text-foreground text-[1vw]">{number}</p>
          <div className="flex items-start gap-10">
            <div className="h-full w-[2vw]">
              <img
                className="w-full h-[70%]"
                src="./assets/solutionsLights.png"
                alt=""
              />
            </div>
            <div className="w-[50%] flex flex-col items-start justify-center">
              <p className="text-[#D6D6D6] font-display leading-none text-[3vw]">
                {title}
              </p>
              <p className="pt-10 text-[1vw] text-[#A8A8A8]">{para}</p>
              <div className="pt-30">
                <ButtonComponent
                  link={link}
                  text="Talk to an expert"
                  borderTrue={true}
                  bgColor={true}
                  borderColor="#636363"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Solutions() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: true,
            start: "top top",
            end: "+=300%", // enough space to scroll through 3 cards
          },
        });

        tl.to(".overview-card1", { yPercent: -100, ease: "none", duration: 1 });
        tl.to(".overview-card2", { yPercent: -100, ease: "none", duration: 1 });
        tl.to(".overview-card3", { yPercent: -100, ease: "none", duration: 1 });
      }, sectionRef);

      return () => ctx.revert(); // Clean up on unmount
    }
  }, []);

  return (
    <section
      className="w-screen h-fit flex flex-col items-center justify-center overflow-hidden"
      id="overview"
      ref={sectionRef}
    >
      <div className="border-t w-full flex items-center justify-center border-b border-[#282828]">
        {[
          "Digital Account",
          "Loyalty",
          "Merchant Acquiring",
          "Digital Lending",
          "Card Issuing",
          "KYC",
        ].map((item, index) => (
          <div
            key={index}
            className="border-l py-5 px-[5vw] border-r border-[#282828]"
          >
            <p className="text-foreground text-[.9vw]">{item}</p>
          </div>
        ))}
      </div>

      <div className="relative w-full h-screen bg-background">
        <div className="overview-card1 absolute top-0 left-0 w-full h-full">
          <SolutionsCard
            number={"001"}
            title={"Digital Account"}
            para={"From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions."}
            link={"/"}
          />
        </div>
        <div className="overview-card2 absolute top-0 left-0 w-full h-full">
          <SolutionsCard
            number={"002"}
            title={"Loyalty"}
            para={"From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions."}
            link={"/"}
          />
        </div>
        <div className="overview-card3 absolute top-0 left-0 w-full h-full">
          <SolutionsCard
            number={"003"}
            title={"Merchant Acquiring"}
            para={"From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions."}
            link={"/"}
          />
        </div>
      </div>
    </section>
  );
}
