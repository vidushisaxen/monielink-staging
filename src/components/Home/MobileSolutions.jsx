"use client";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import BlackButton from "../Buttons/BlackButton";
import ScrambleText from "../ScrambleText";
import ArrowButton from "../Buttons/ArrowButton";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function MobileSolutions() {
  const solutionContainerRef = useRef(null);
  const swiperRef = useRef(null);

const handleCardClick = (index) => {
  if (swiperRef.current && swiperRef.current.swiper) {
    swiperRef.current.swiper.slideTo(index);
  }
};
const [activeIndex, setActiveIndex] = useState(1);

  const handlePrevClick = () => {
    swiperRef.current.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current.slideNext();
  };
  useGSAP(
    () => {
      const container = solutionContainerRef.current;
      const slides = solutionContainerRef.current.querySelectorAll(
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
    { scope: solutionContainerRef }
  );

  return (
    <section
      id="solutions"
      className="h-full w-screen max-sm:pb-[15vw] max-md:pb-[12vw] relative overflow-hidden bg-[#050505]"
    >
      <div className="w-screen overflow-x-scroll max-sm:mb-[10vw] scrollbar-hidden">
        <div className="border-t w-fit flex items-center justify-center max-sm:items-center max-sm:justify-center border-b border-[#282828] bg-[#050505]  !px-0 mb-[3vw]">
          <div className="w-[25vw] max-sm:w-[25vw] max-md:w-[1vw] h-full" />
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
              className="border-l py-5 w-[15vw] max-sm:min-w-[50vw] max-md:w-[32vw]  text-center border-r border-[#282828] card-tag cursor-pointer max-sm:pl-[-10vw] active-title"
              onClick={() => handleCardClick(index)}
            >
              <div className="text-[#A8A8A8] text-[0.95vw] max-md:text-[3vw] max-sm:text-[4vw] !text-center w-[15vw] max-sm:w-full max-md:w-full">
                <ScrambleText text={item} speed={0.6}/>
              </div>
            </div>
          ))}
          <div className="w-[25vw] h-full" />
        </div>
      </div>
      <div
        ref={solutionContainerRef}
        className="relative w-screen overflow-hidden z-10 flex flex-col items-center justify-center py-[10vw] pt-[0vw] gap-[3vw] max-sm:px-0 max-md:px-[3vw]"
      >
        <Swiper
        ref={swiperRef}
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setActiveIndex(swiper.activeIndex);
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          initialSlide={0}
          centeredSlides={false}
          slidesPerView={2}
          spaceBetween={40}
          speed={500}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 1.5,
              centeredSlides: false,
            },
            1080: {
              slidesPerView: 2,
              centeredSlides: false,
            }
          }}
          className="mySwiper max-md:px-0 max-sm:px-[2vw] w-screen !overflow-y-visible"
        >
          {cardsData.map((card, cardIndex) => (
            <SwiperSlide
              key={cardIndex}
              className="w-full h-full swiper-slides-anim !origin-top"
            >
              <SwiperCard
                title={card.title}
                id={card.id}
                description={card.description}
                link={card.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className=" flex items-center justify-center gap-5 max-sm:pt-[15vw] max-md:pt-[5vw]">
          <ArrowButton
            onClick={handlePrevClick}
            arrowColor={"#ffffff"}
            borderColor={"#636363"}
            hoverColor={"bg-[#636363]/20"}
            rotate={"-rotate-180"}
          />
          <ArrowButton
            onClick={handleNextClick}
            arrowColor={"#ffffff"}
            borderColor={"#636363"}
            hoverColor={"bg-[#636363]/20"}
          />
        </div>
      </div>
    </section>
  );
}

const SwiperCard = ({ title, id, description, link }) => {

  return (
    <div className="card relative h-fit  w-full max-sm:px-0 max-md:px-0">
      <div className="absolute h-[105%] max-md:w-[65vw] max-sm:h-[105%] max-sm:w-full w-full">
        <svg
          width="330"
          height="530"
          viewBox="0 0 330 530"
          fill="none"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_754_3108" fill="white">
            <path d="M127.266 43.7451C129.137 45.593 131.662 46.6289 134.292 46.6289H289.243C308.099 46.6289 317.527 46.6289 323.385 52.4868C329.243 58.3446 329.243 67.7727 329.243 86.6289V499.245C329.243 515.814 315.812 529.245 299.243 529.245H30.0312C13.4627 529.245 0.03125 515.814 0.03125 499.245V30.168C0.03125 13.5994 13.4627 0.167969 30.0312 0.167969H66.7104C74.8136 0.167969 78.8653 0.167969 82.5149 1.6661C86.1646 3.16423 89.0477 6.01087 94.8139 11.7041L127.266 43.7451Z" />
          </mask>
          <path
            d="M127.266 43.7451C129.137 45.593 131.662 46.6289 134.292 46.6289H289.243C308.099 46.6289 317.527 46.6289 323.385 52.4868C329.243 58.3446 329.243 67.7727 329.243 86.6289V499.245C329.243 515.814 315.812 529.245 299.243 529.245H30.0312C13.4627 529.245 0.03125 515.814 0.03125 499.245V30.168C0.03125 13.5994 13.4627 0.167969 30.0312 0.167969H66.7104C74.8136 0.167969 78.8653 0.167969 82.5149 1.6661C86.1646 3.16423 89.0477 6.01087 94.8139 11.7041L127.266 43.7451Z"
            fill="black"
          />
          <path
            d="M127.266 43.7451L126.563 44.4567V44.4567L127.266 43.7451ZM30.0312 529.245V530.245V529.245ZM82.5149 1.6661L82.8947 0.741008L82.5149 1.6661ZM323.385 52.4868L322.678 53.1939L323.385 52.4868ZM127.266 43.7451L126.563 44.4567C128.622 46.4895 131.399 47.6289 134.292 47.6289V46.6289V45.6289C131.925 45.6289 129.653 44.6965 127.968 43.0335L127.266 43.7451ZM134.292 46.6289V47.6289H289.243V46.6289V45.6289H134.292V46.6289ZM329.243 86.6289H328.243V499.245H329.243H330.243V86.6289H329.243ZM329.243 499.245H328.243C328.243 515.261 315.259 528.245 299.243 528.245V529.245V530.245C316.364 530.245 330.243 516.366 330.243 499.245H329.243ZM299.243 529.245V528.245H30.0312V529.245V530.245H299.243V529.245ZM30.0312 529.245V528.245C14.015 528.245 1.03125 515.261 1.03125 499.245H0.03125H-0.96875C-0.96875 516.366 12.9104 530.245 30.0312 530.245V529.245ZM0.03125 499.245H1.03125V30.168H0.03125H-0.96875V499.245H0.03125ZM0.03125 30.168H1.03125C1.03125 14.1517 14.015 1.16797 30.0312 1.16797V0.167969V-0.832031C12.9104 -0.832031 -0.96875 13.0471 -0.96875 30.168H0.03125ZM30.0312 0.167969V1.16797H66.7104V0.167969V-0.832031H30.0312V0.167969ZM94.8139 11.7041L94.1114 12.4157L126.563 44.4567L127.266 43.7451L127.968 43.0335L95.5165 10.9926L94.8139 11.7041ZM66.7104 0.167969V1.16797C74.8944 1.16797 78.7104 1.18538 82.1352 2.59119L82.5149 1.6661L82.8947 0.741008C79.0201 -0.849442 74.7328 -0.832031 66.7104 -0.832031V0.167969ZM94.8139 11.7041L95.5165 10.9926C89.8078 5.35604 86.7692 2.33146 82.8947 0.741008L82.5149 1.6661L82.1352 2.59119C85.5599 3.99701 88.2876 6.6657 94.1114 12.4157L94.8139 11.7041ZM289.243 46.6289V47.6289C298.7 47.6289 305.691 47.631 311.055 48.3522C316.391 49.0695 319.966 50.4817 322.678 53.1939L323.385 52.4868L324.092 51.7797C320.947 48.634 316.879 47.1172 311.322 46.3701C305.793 45.6268 298.643 45.6289 289.243 45.6289V46.6289ZM329.243 86.6289H330.243C330.243 77.2291 330.245 70.0786 329.502 64.5502C328.755 58.9931 327.238 54.9254 324.092 51.7797L323.385 52.4868L322.678 53.1939C325.39 55.906 326.803 59.4813 327.52 64.8167C328.241 70.1809 328.243 77.1725 328.243 86.6289H329.243Z"
            fill="#282828"
            mask="url(#path-1-inside-1_754_3108)"
          />
          <path
            d="M127.266 43.7451L126.563 44.4567V44.4567L127.266 43.7451ZM30.0312 529.245V530.245V529.245ZM82.5149 1.6661L82.8947 0.741008L82.5149 1.6661ZM323.385 52.4868L322.678 53.1939L323.385 52.4868ZM127.266 43.7451L126.563 44.4567C128.622 46.4895 131.399 47.6289 134.292 47.6289V46.6289V45.6289C131.925 45.6289 129.653 44.6965 127.968 43.0335L127.266 43.7451ZM134.292 46.6289V47.6289H289.243V46.6289V45.6289H134.292V46.6289ZM329.243 86.6289H328.243V499.245H329.243H330.243V86.6289H329.243ZM329.243 499.245H328.243C328.243 515.261 315.259 528.245 299.243 528.245V529.245V530.245C316.364 530.245 330.243 516.366 330.243 499.245H329.243ZM299.243 529.245V528.245H30.0312V529.245V530.245H299.243V529.245ZM30.0312 529.245V528.245C14.015 528.245 1.03125 515.261 1.03125 499.245H0.03125H-0.96875C-0.96875 516.366 12.9104 530.245 30.0312 530.245V529.245ZM0.03125 499.245H1.03125V30.168H0.03125H-0.96875V499.245H0.03125ZM0.03125 30.168H1.03125C1.03125 14.1517 14.015 1.16797 30.0312 1.16797V0.167969V-0.832031C12.9104 -0.832031 -0.96875 13.0471 -0.96875 30.168H0.03125ZM30.0312 0.167969V1.16797H66.7104V0.167969V-0.832031H30.0312V0.167969ZM94.8139 11.7041L94.1114 12.4157L126.563 44.4567L127.266 43.7451L127.968 43.0335L95.5165 10.9926L94.8139 11.7041ZM66.7104 0.167969V1.16797C74.8944 1.16797 78.7104 1.18538 82.1352 2.59119L82.5149 1.6661L82.8947 0.741008C79.0201 -0.849442 74.7328 -0.832031 66.7104 -0.832031V0.167969ZM94.8139 11.7041L95.5165 10.9926C89.8078 5.35604 86.7692 2.33146 82.8947 0.741008L82.5149 1.6661L82.1352 2.59119C85.5599 3.99701 88.2876 6.6657 94.1114 12.4157L94.8139 11.7041ZM289.243 46.6289V47.6289C298.7 47.6289 305.691 47.631 311.055 48.3522C316.391 49.0695 319.966 50.4817 322.678 53.1939L323.385 52.4868L324.092 51.7797C320.947 48.634 316.879 47.1172 311.322 46.3701C305.793 45.6268 298.643 45.6289 289.243 45.6289V46.6289ZM329.243 86.6289H330.243C330.243 77.2291 330.245 70.0786 329.502 64.5502C328.755 58.9931 327.238 54.9254 324.092 51.7797L323.385 52.4868L322.678 53.1939C325.39 55.906 326.803 59.4813 327.52 64.8167C328.241 70.1809 328.243 77.1725 328.243 86.6289H329.243Z"
            fill="url(#paint0_linear_754_3108)"
            mask="url(#path-1-inside-1_754_3108)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_754_3108"
              x1="183.966"
              y1="201.972"
              x2="0.031355"
              y2="24.1337"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FE6E00" stopOpacity="0" />
              <stop offset="1" stopColor="#FE6E00" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="w-full h-[60vh] max-sm:h-[60vh] max-md:pt-[13vw]   max-sm:pt-[10vw] max-sm:px-[15vw]  flex flex-col justify-between max-sm:justify-between max-md:justify-start max-sm:gap-0 max-md:gap-[4vw] px-[15vw] max-md:px-[8vw] relative z-[10] pt-[10vw]">
        <p className="text-[#A8A8A8] max-sm:text-[3.5vw] max-md:text-[2.5vw]">{id}</p>

        <div className="w-full flex flex-col gap-[5vw] max-sm:gap-[5vw] max-md:gap-[2vw]">
          <h4 className="text-head-60 font-light w-[80vw]">{title}</h4>
          <p className="text-[#A8A8A8] max-sm:text-[3.25vw] max-md:text-[2.5vw]">{description}</p>
        </div>
        <div className="max-sm:py-0 max-md:py-[10vw]">

        <BlackButton text={"Know More"} href={link} />
        </div>
      </div>
    </div>
  );
};

const cardsData = [
  {
    id: "001",
    title: "Digital Account",
    description:
      "From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions. From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions. From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions.",
    link: "/solutions/digital-accounts",
  },
  {
    id: "002",
    title: "Loyalty",
    description:
      "From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions. From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions. From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions.",
    link: "/solutions/digital-accounts",
  },
  {
    id: "003",
    title: "Merchant Acquiring",
    description:
      "From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions. From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions. From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions.",
    link: "/solutions/digital-accounts",
  },
  {
    id: "004",
    title: "Digital Lending",
    description:
      "From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions. From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions. From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions.",
    link: "/solutions/digital-accounts",
  },
  {
    id: "005",
    title: "Card Issuing",
    description:
      "From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions. From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions. From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions.",
    link: "/solutions/digital-accounts",
  },
  {
    id: "006",
    title: "KYC",
    description:
      "From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions. From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions. From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions.",
    link: "/solutions/digital-accounts",
  },
];
