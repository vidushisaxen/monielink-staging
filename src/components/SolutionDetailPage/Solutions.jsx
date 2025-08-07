"use client";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "../Animations/Copy";
import { useGSAP } from "@gsap/react";
import ArrowButton from "../Buttons/ArrowButton";
import SecondaryButton from "../Buttons/SecondaryButton";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Solutions({solutionsData}) {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrevClick = () => {
    swiperRef.current.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current.slideNext();
  };

  useGSAP(
    () => {
      const container = containerRef.current;
      const slides = containerRef.current.querySelectorAll(
        ".swiper-slides-anim"
      );
      gsap.from(slides, {
        x: 50,
        opacity: 0,
        rotate: "-20deg",
        duration: 0.5,
        stagger: 0.25,
        scrollTrigger: {
          trigger: container,
          start: "30% 90%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      data-theme="orange"
      id="products"
      className="h-full w-screen relative bg-gradient "
    >
      <div className="w-full flex flex-col items-center ">
        <div className="text-center w-[70%] py-[10vw] max-sm:w-full max-md:w-[80%] max-sm:py-[50%] max-sm:px-[5vw] ">
          <Copy>
            <p className="text-head-60 font-display">
            {solutionsData.headline}
            </p>
          </Copy>
        </div>
        <div
          ref={containerRef}
          className="relative w-screen overflow-hidden z-10 flex flex-col items-center justify-center py-[10vw] gap-[3vw] max-sm:items-start max-sm:py-[15%]"
        >
          <Copy>
            <h2 className="text-foreground productsText text-head-100  text-center leading-[1.25] font-display capitalize pb-[5vw] max-sm:px-[5vw] max-sm:text-left">
            {solutionsData.heading}
            </h2>
          </Copy>

          <Swiper
            modules={[Navigation]}
            // initialSlide={1}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setActiveIndex(swiper.activeIndex);
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex);
            }}
            // centeredSlides={true}
            slidesPerView={3.5}
            spaceBetween={40}
            speed={500}
            breakpoints={{
              0: {
                slidesPerView: 1,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 2.2,
                centeredSlides: false,
              },
              1080: {
                slidesPerView: 3,
                // centeredSlides: true,
              },
            }}
            className="mySwiper !px-[10vw] max-md:!px-[3vw] w-screen !overflow-y-visible max-sm:h-[55vh]"
          >
            {solutionsData.cards.map((card, cardIndex) => (
              <SwiperSlide
                key={cardIndex}
                className="w-full h-full max-sm:!mr-[10vw] max-sm:pl-[5vw] max-md:!mr-[8vw] swiper-slides-anim !origin-top"
              >
                <SwiperCard
                  title={card.title}
                  para={card.para}
                  index={cardIndex}
                  activeIndex={activeIndex}
                  link={card.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-start max-sm:mt-0 max-md:mt-[8vw] justify-center gap-5 max-sm:w-full">
            <ArrowButton
              onClick={handlePrevClick}
              arrowColor={"#ffffff"}
              borderColor={"#ffffff"}
              hoverColor={"bg-white/20"}
              rotate={"-rotate-180"}
            />
            <ArrowButton
              onClick={handleNextClick}
              arrowColor={"#ffffff"}
              borderColor={"#ffffff"}
              hoverColor={"bg-white/20"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const SwiperCard = ({
  activeIndex,
  index,
  link,
  title,
  para,
}) => {
  const isActive = activeIndex === index;

  return (
    <div className="card relative h-[70vh] max-sm:pb-[0.5vw]  max-md:py-[0.5vw] w-full active:scale-95 duration-300 transition-scale max-sm:h-[50vh]">
      <div className="absolute h-full w-full max-md:w-[42vw] max-md:pb-[1vw] max-md:h-[38vh] max-sm:w-[85vw] max-sm:h-[100%] max-sm:pb-[1vw] max-sm:px-[1vw] ">
        <svg
          width="466"
          height="638"
          viewBox="0 0 466 638"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            backdropFilter: "blur(10px)",
            clipPath: "url(#bgblur_0_3125_38_clip_path)",
            height: "100%",
            width: "100%",
          }}
        >
          <foreignObject x="-20.0078" y="-20" width="506.006" height="678">
            <div xmlns="http://www.w3.org/1999/xhtml"></div>
          </foreignObject>
          <g data-figma-bg-blur-radius="20">
            <mask
              id="path-1-outside-1_41_2"
              maskUnits="userSpaceOnUse"
              x="-0.0078125"
              y="0"
              width="467"
              height="638"
              fill="black"
            >
              <rect fill="white" x="-0.0078125" width="467" height="638" />
              <path d="M444.998 1C456.044 1 464.998 9.95431 464.998 21V537.464C464.998 542.177 463.333 546.739 460.298 550.345L393.334 629.881C389.534 634.395 383.935 637 378.035 637H20.9922C9.9465 637 0.992188 628.046 0.992188 617V21C0.992188 9.95431 9.94649 1 20.9922 1H444.998Z" />
            </mask>
            <path
              d="M444.998 1C456.044 1 464.998 9.95431 464.998 21V537.464C464.998 542.177 463.333 546.739 460.298 550.345L393.334 629.881C389.534 634.395 383.935 637 378.035 637H20.9922C9.9465 637 0.992188 628.046 0.992188 617V21C0.992188 9.95431 9.94649 1 20.9922 1H444.998Z"
              fill="url(#paint0_linear_41_2)"
              fillOpacity="0.02"
            />
            <path
              d="M444.998 1L444.998 0H444.998V1ZM464.998 21L465.998 21V21L464.998 21ZM20.9922 637L20.9922 638H20.9922V637ZM0.992188 617L-0.0078125 617L-0.0078125 617L0.992188 617ZM20.9922 1L20.9922 0L20.9922 0L20.9922 1ZM393.334 629.881L394.099 630.525L393.334 629.881ZM460.298 550.345L459.533 549.701L460.298 550.345ZM444.998 1L444.998 2C455.491 2 463.998 10.5066 463.998 21L464.998 21L465.998 21C465.998 9.40202 456.596 4.23435e-06 444.998 0L444.998 1ZM464.998 21H463.998V537.464H464.998H465.998V21H464.998ZM460.298 550.345L459.533 549.701L392.569 629.237L393.334 629.881L394.099 630.525L461.063 550.989L460.298 550.345ZM378.035 637V636H20.9922V637V638H378.035V637ZM20.9922 637L20.9922 636C10.4988 636 1.99219 627.493 1.99219 617L0.992188 617L-0.0078125 617C-0.00781188 628.598 9.39421 638 20.9922 638L20.9922 637ZM0.992188 617H1.99219V21H0.992188H-0.0078125V617H0.992188ZM0.992188 21H1.99219C1.99219 10.5066 10.4988 2 20.9922 2L20.9922 1L20.9922 0C9.39421 3.1077e-07 -0.0078125 9.40202 -0.0078125 21H0.992188ZM20.9922 1V2H444.998V1V0H20.9922V1ZM393.334 629.881L392.569 629.237C388.959 633.525 383.64 636 378.035 636V637V638C384.23 638 390.109 635.264 394.099 630.525L393.334 629.881ZM464.998 537.464H463.998C463.998 541.941 462.417 546.275 459.533 549.701L460.298 550.345L461.063 550.989C464.25 547.203 465.998 542.413 465.998 537.464H464.998Z"
              fill="#EEEDED"
              mask="url(#path-1-outside-1_41_2)"
            />
          </g>
          <defs>
            <clipPath
              id="bgblur_0_41_2_clip_path"
              transform="translate(20.0078 20)"
            >
              <path d="M444.998 1C456.044 1 464.998 9.95431 464.998 21V537.464C464.998 542.177 463.333 546.739 460.298 550.345L393.334 629.881C389.534 634.395 383.935 637 378.035 637H20.9922C9.9465 637 0.992188 628.046 0.992188 617V21C0.992188 9.95431 9.94649 1 20.9922 1H444.998Z" />
            </clipPath>
            <linearGradient
              id="paint0_linear_41_2"
              x1="-65.002"
              y1="26.5257"
              x2="466.497"
              y2="27.5278"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="py-[3vw] relative z-10 justify-center flex-col flex items-start ml-[2vw] gap-y-[2vw] h-full w-full max-sm:h-[50vh] max-sm:ml-[14vw] max-md:ml-[5vw] max-sm:py-[8vw] max-sm:gap-y-[7vw]">
        <div className=" w-[60%] max-sm:mx-0">
          <p className="text-head-60 font-display">{title}</p>
        </div>
        <div className="py-[1vw] w-[80%] max-sm:w-[60%] max-md:w-[80%]">
          <p className="text-content-20">{para}</p>
        </div>

        <SecondaryButton href={link} text="Know More" className=" text-white" />
      </div>
    </div>
  );
};
