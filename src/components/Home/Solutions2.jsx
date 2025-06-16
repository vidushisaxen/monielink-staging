"use client";
import React, { useRef, useState } from "react";
import ButtonComponent from "../Buttons/ButtonComponent";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const data = [
  {
    number: "001",
    title: "Digital Account",
    para:
      "From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions.",
    link: "/",
  },
  {
    number: "002",
    title: "Loyalty",
    para:
      "We design loyalty programs to retain customers and enhance brand engagement with measurable impact.",
    link: "/",
  },
  {
    number: "003",
    title: "Merchant Acquiring",
    para:
      "Secure, scalable merchant solutions that support seamless transactions and customer trust.",
    link: "/",
  },
  {
    number: "004",
    title: "Digital Lending",
    para:
      "We help customers access lending solutions digitally, ensuring security and compliance.",
    link: "/",
  },
  {
    number: "005",
    title: "Card Issuing",
    para:
      "Enable businesses to issue secure payment cards with robust APIs and infrastructure.",
    link: "/",
  },
  {
    number: "006",
    title: "KYC",
    para:
      "Digitize customer onboarding with seamless, compliant Know Your Customer processes.",
    link: "/",
  },
];
const SolutionsCard = ({ number, title, para, link, index, scrollYProgress }) => {
  const totalCards = data.length;
  const step = 1 / totalCards;

  const start = index * step;
  const end = (index + 1) * step;
  const prevStart = start - step;
  const prevEnd = start;

  const y = useTransform(scrollYProgress, [start, end], ["120%", `${index * 20}px`]);
  const scale = useTransform(scrollYProgress, [prevStart, start, end], [0.9, 1, 0.9]);
  const contentOpacity = useTransform(scrollYProgress, [prevStart, start, end], [0, 1, 0]);
  const pointerEvents = useTransform(contentOpacity, [0, 1], ["none", "auto"]);
  const zIndex = useTransform(scrollYProgress, [prevStart, start, end], [index - 1, index + 10, index]);

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
      style={{
        y,
        scale,
        zIndex,
      }}
    >
      <div className="h-[80%] w-[70%] bg-[#111] border border-[#333] rounded-xl p-10 text-white flex flex-col justify-between shadow-xl">
        <motion.div
          style={{ opacity: contentOpacity, pointerEvents }}
          className="flex flex-col gap-4"
        >
          <p className="text-[0.9vw]">{number}</p>
          <p className="text-[3vw] font-bold">{title}</p>
          <p className="text-[1vw] text-gray-400">{para}</p>
          <ButtonComponent
            link={link}
            text="Talk to an expert"
            borderTrue={true}
            bgColor={true}
            borderColor="#636363"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};



export default function Solutions2() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const handleNavClick = (index) => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const totalCards = data.length;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    const progress = index / totalCards;
    const targetScroll = sectionTop + progress * sectionHeight;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-screen h-[400vh] bg-background"
      id="overview"
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* ✅ Top Nav */}
        <div className="w-full border-t border-b border-[#282828] flex justify-center bg-background z-10 relative">
          {data.map((item, index) => (
            <div
              key={index}
              onClick={() => handleNavClick(index)}
              className={`border-l border-r border-[#282828] px-[5vw] py-5 cursor-pointer ${
                activeIndex === index ? "bg-[#1a1a1a]" : ""
              }`}
            >
              <p className="text-foreground text-[.9vw]">{item.title}</p>
            </div>
          ))}
        </div>

        {/* ✅ Card Stack */}
        <div className="w-full h-full relative">
          {data.map((item, index) => (
            <SolutionsCard
              key={index}
              index={index}
              number={item.number}
              title={item.title}
              para={item.para}
              link={item.link}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
