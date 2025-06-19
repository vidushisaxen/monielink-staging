"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import BlackButton from "../Buttons/BlackButton";
import { SVGLeft, SVGRight } from "../Icons";
import DecryptedText from "../DecryptedText";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(ScrollTrigger, useGSAP, DrawSVGPlugin);

const SolutionsCard = ({ solutionsRef }) => {
  const svgRightRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const cardsData = [
    {
      id: "001",
      title: "Digital Account",
      description:
        "From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions. From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions. From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions.",
      cardClass: "card-1",
      link: "#",
      svgRightRef: svgRightRefs[0],
      svgLeft: <SVGLeft />,
      svgRight: <SVGRight />,
      y: "",
      zIndex: 1,
    },
    {
      id: "002",
      title: "Loyalty",
      description:
        "From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions. From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions. From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions.",
      cardClass: "card-2",
      link: "#",
      svgRightRef: svgRightRefs[1],
      svgLeft: <SVGLeft />,
      svgRight: <SVGRight />,
      y: "",
      zIndex: 2,
    },
    {
      id: "003",
      title: "Merchant Acquiring",
      description:
        "From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions. From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions. From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions.",
      cardClass: "card-3",
      link: "#",
      svgRightRef: svgRightRefs[2],
      svgLeft: <SVGLeft />,
      svgRight: <SVGRight />,
      y: 'translate-y-[-100%]',
      zIndex: 3,
    },
    {
      id: "004",
      title: "Digital Lending",
      description:
        "From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions. From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions. From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions.",
      cardClass: "card-4",
      link: "#",
      svgRightRef: svgRightRefs[3],
      svgLeft: <SVGLeft />,
      svgRight: <SVGRight />,
      y: 'translate-y-[-200%]',
      zIndex: 4,
    },
    {
      id: "005",
      title: "Card Issuing",
      description:
        "From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions. From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions. From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions.",
      cardClass: "card-5",
      link: "#",
      svgRightRef: svgRightRefs[4],
      svgLeft: <SVGLeft />,
      svgRight: <SVGRight />,
      y: 'translate-y-[-300%]',
      zIndex: 4,
    },
    {
      id: "006",
      title: "KYC",
      description:
        "From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions. From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions. From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions.",
      cardClass: "card-6",
      link: "#",
      svgRightRef: svgRightRefs[5],
      svgLeft: <SVGLeft />,
      svgRight: <SVGRight />,
      y: 'translate-y-[-400%]',
      zIndex: 4,
    },
  ];
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#solutions",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          //   markers:true
        },
        //   defaults:"none"
      });
      tl.to(".card-2", {
        yPercent: -100,
      });
      tl.to(".card-1", {
        scale: 0.9,
        yPercent: -6,
        delay: -0.5,
      }).to(".card-3", {
        yPercent: -100,
      });
      tl.to(".card-2", {
        scale: 0.9,
        yPercent: -106,
        delay: -0.5,
      })
        .to(".card-1", {
          scale: 0.8,
          yPercent: -11,
          delay: -0.5,
        })
        .to(".card-4", {
          yPercent: -100,
        })
        .to(".card-3", {
          yPercent: -106,
          scale: 0.9,
          delay: -0.5,
        })
        .to(".card-2", {
          scale: 0.8,
          yPercent: -111,
          delay: -0.5,
        }).to(".card-1", {
          scale: 0.7,
          yPercent: -16,
          delay: -0.5,
        })
        .to(".card-5", {
          yPercent: -100
        })
        .to(".card-4", {
          scale: 0.9,
          yPercent: -106,
          delay: -0.5,
        })
        .to(".card-3", {
          yPercent: -111,
          scale: 0.8,
          delay: -0.5,
        })
        .to(".card-2", {
          scale: 0.7,
          yPercent: -116,
          delay: -0.5,
        }).to(".card-1", {
          scale: 0.6,
          yPercent: -20,
          delay: -0.5,
        })
        .to(".card-6", {
          yPercent: -100
        })
        .to(".card-5", {
          scale: 0.9,
          yPercent: -106,
          delay: -0.5,
        })
        .to(".card-4", {
          yPercent: -111,
          scale: 0.8,
          delay: -0.5,
        })
        .to(".card-3", {
          scale: 0.7,
          yPercent: -116,
          delay: -0.5,
        })
        .to(".card-2", {
          scale: 0.6,
          yPercent: -120,
          delay: -0.5,
        }).to(".card-1", {
          scale: 0.5,
          yPercent: -24,
          delay: -0.5,
        })
    });
    return () => ctx.revert();
  }, []);

  useGSAP(() => {
    svgRightRefs.forEach((ref) => {
      const paths = ref.current?.querySelectorAll(".path-draw");
      if (paths) {
        gsap.from(paths, {
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
          },
          duration: 2,
          drawSVG: 0,
        });
      }
    });
  });
  const handleCardClick = (index) => {
    if (!solutionsRef.current) return;
    const sectionTop =
      solutionsRef.current.getBoundingClientRect().top + window.pageYOffset;
    const scrollY = sectionTop + window.innerHeight * index * 1.15;
    window.scrollTo({ top: scrollY, behavior: "smooth" });
  };

  return (
    <div className="w-full h-[90vh]  flex flex-col sticky top-[5%]">
      <div className="border-t w-full flex items-center justify-center border-b border-[#282828] bg-[#050505]  !px-0 mb-[3vw] ">
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
            className="border-l py-5 w-[15vw] text-center border-r border-[#282828] card-tag cursor-pointer"
            onClick={() => handleCardClick(index)}
          >
            <div className="text-[#A8A8A8] text-[0.95vw] !text-center w-[15vw]"><DecryptedText text={item} /></div>
          </div>
        ))}
      </div>
      {cardsData.map((item, index) => (
        <SolutionCard
          key={index}
          id={item.id}
          title={item.title}
          description={item.description}
          cardClass={item.cardClass}
          zIndex={item.zIndex}
          svgLeft={item.svgLeft}
          svgRight={item.svgRight}
          y={item.y}
          svgRightRef={item.svgRightRef}
        />

      ))}
    </div>
  );
};

export default SolutionsCard;


function SolutionCard({ title, description, cardClass, zIndex, id, link, svgLeft, svgRight, y, svgRightRef }) {
  return (
    <>
      <div className={`h-[85vh]  w-full flex items-center justify-center relative ${cardClass} ${zIndex} ${y} `}>
        <div className="w-[75vw] h-auto flex items-center justify-center z-0">
          {svgLeft}
        </div>

        <div className="h-full w-full flex items-center justify-center absolute top-0 left-0 inset-0 z-10  !px-[4vw] !pr-[8vw]">
          <div className="flex flex-col items-start px-[12vw] justify-evenly h-[80%] w-full">
            <p className="text-white text-[1vw] mt-[-6vw]">{id}</p>
            <div className="flex items-start justify-between gap-10">
              <div className="flex items-start justify-start gap-10">
                <div className="h-full w-[2vw]">
                  <img
                    className="w-full h-[70%]"
                    src="/assets/images/solutionsLights.png"
                    alt="solutionLights"
                  />
                </div>
                <div className="w-[65%] flex flex-col items-start justify-center">
                  <p className="text-[#D6D6D6] font-display leading-none text-[3.12vw]">
                    {title}
                  </p>
                  <p className="pt-10 text-[1.04vw] text-[#A8A8A8] w-full">
                    {description}
                  </p>
                  <div className="pt-10">
                    <BlackButton href={link} text={"Talk to an expert"} />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end pt-[3vw]">
                <div className="h-[14vw] w-[14vw]">
                  <svg
                  className="h-full w-full"
                    width="251"
                    height="252"
                    viewBox="0 0 251 252"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    ref={svgRightRef}
                  >
                    {svgRight}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


