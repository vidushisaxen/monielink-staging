"use client";
import SwiperButton from "@/components/Buttons/SwiperButton";
import Image from "next/image";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ButtonComponent from "../Buttons/ButtonComponent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackgroundLine from "../BackgroundLine";
import Copy from "../Animations/Copy";
import { useGSAP } from "@gsap/react";
import ArrowButton from "../Buttons/ArrowButton";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Products() {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    swiperRef.current.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current.slideNext();
  };

  useGSAP(() => {
    const container = containerRef.current;
    const slides = containerRef.current.querySelectorAll(".swiper-slides-anim");
    gsap.from(slides, {
      x: 50,
      opacity: 0,
      rotate: '-20deg',
      duration: 0.5,
      stagger: 0.25,
      scrollTrigger: {
        trigger: container,
        start: "30% 90%",
      }
    })
  }, { scope: containerRef })

  return (
    <section id="products" className="h-full w-screen relative">
      <div className="sticky top-0 left-0">
        <BackgroundLine />
      </div>

      <div ref={containerRef} className="relative w-screen overflow-hidden mt-[-100vh] z-10 flex flex-col items-center justify-center py-[10vw] gap-[3vw]">
        <Copy>
          <h2 className="text-foreground productsText text-[5.2vw] w-[60%] text-center leading-[1.25] font-display capitalize pb-[5vw]">
            Everything You Need to Power Digital Banking
          </h2>
        </Copy>

        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setActiveIndex(swiper.activeIndex);
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          // loop={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={40}
          speed={500}
          className="mySwiper !px-[4.5vw] w-screen !overflow-y-visible"
        >
          {data.map((card, cardIndex) => (
            <SwiperSlide key={cardIndex} className="w-full h-full swiper-slides-anim !origin-top">
              <SwiperCard
                logo={card.logo}
                features={card.features}
                index={cardIndex}
                activeIndex={activeIndex}
                link="#"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center gap-5">
          <ArrowButton onClick={handlePrevClick} className={"text-white"} rotate={"-rotate-180"} />
          <ArrowButton onClick={handleNextClick} className={"text-white"} />
        </div>
      </div>
    </section>
  );
}

const SwiperCard = ({ logo, activeIndex, index, features, link }) => {
  const isActive = activeIndex === index;

  return (
    <div className="card relative h-fit w-full active:scale-95 duration-300 transition-scale">
      <div className="absolute h-full w-full">
        <svg className="h-full w-full" width="532" height="679" viewBox="0 0 532 679" fill="none" xmlns="http://www.w3.org/2000/svg">
          <foreignObject x="-20" y="-20" width="572" height="718.707">
            <div xmlns="http://www.w3.org/1999/xhtml" style={{ backdropFilter: 'blur(10px)', clipPath: 'url(#bgblur_0_3125_38_clip_path)', height: '100%', width: '100%' }}></div>
          </foreignObject>
          <g data-figma-bg-blur-radius="20">
            <mask id="path-1-outside-1_3125_38" maskUnits="userSpaceOnUse" x="0" y="0" width="532" height="679" fill="black">
              <rect fill="white" width="532" height="679" />
              <path d="M511 1C522.046 1 531 9.95436 531 21V657.707C531 668.753 522.046 677.707 511 677.707H21C9.95438 677.707 1 668.753 1 657.707V84.7149C1 79.2288 3.2536 73.9836 7.23317 70.2072L74.3772 6.49226C78.0934 2.96589 83.021 1 88.144 1H511Z" />
            </mask>
            <path d="M511 1C522.046 1 531 9.95436 531 21V657.707C531 668.753 522.046 677.707 511 677.707H21C9.95438 677.707 1 668.753 1 657.707V84.7149C1 79.2288 3.2536 73.9836 7.23317 70.2072L74.3772 6.49226C78.0934 2.96589 83.021 1 88.144 1H511Z" fill="url(#paint0_linear_3125_38)" fillOpacity="0.02" />
            <path d="M531 21L532 21L532 21L531 21ZM21 677.707L21 678.707H21V677.707ZM74.3772 6.49226L73.6889 5.76687L74.3772 6.49226ZM511 1V2C521.493 2 530 10.5066 530 21L531 21L532 21C532 9.40208 522.598 0 511 0V1ZM531 21H530V657.707H531H532V21H531ZM531 657.707H530C530 668.2 521.493 676.707 511 676.707V677.707V678.707C522.598 678.707 532 669.305 532 657.707H531ZM511 677.707V676.707H21V677.707V678.707H511V677.707ZM21 677.707L21 676.707C10.5067 676.707 2 668.2 2 657.707H1H0C0 669.305 9.4021 678.707 21 678.707L21 677.707ZM1 657.707H2V84.7149H1H0V657.707H1ZM7.23317 70.2072L7.92151 70.9326L75.0655 7.21765L74.3772 6.49226L73.6889 5.76687L6.54483 69.4818L7.23317 70.2072ZM88.144 1V2H511V1V0H88.144V1ZM74.3772 6.49226L75.0655 7.21765C78.5959 3.86759 83.2772 2 88.144 2V1V0C82.7649 0 77.5908 2.06418 73.6889 5.76687L74.3772 6.49226ZM1 84.7149H2C2 79.5031 4.14092 74.5201 7.92151 70.9326L7.23317 70.2072L6.54483 69.4818C2.36628 73.447 0 78.9545 0 84.7149H1Z" fill="#282828" mask="url(#path-1-outside-1_3125_38)" />
          </g>
          <mask id="path-3-outside-2_3125_38" maskUnits="userSpaceOnUse" x="0" y="0" width="532" height="679" fill="black">
            <rect fill="white" width="532" height="679" />
            <path d="M511 1C522.046 1 531 9.95436 531 21V657.707C531 668.753 522.046 677.707 511 677.707H21C9.95438 677.707 1 668.753 1 657.707V84.7149C1 79.2288 3.2536 73.9836 7.23317 70.2072L74.3772 6.49226C78.0934 2.96589 83.021 1 88.144 1H511Z" />
          </mask>
          <g className={`${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
            <path d="M511 1C522.046 1 531 9.95436 531 21V657.707C531 668.753 522.046 677.707 511 677.707H21C9.95438 677.707 1 668.753 1 657.707V84.7149C1 79.2288 3.2536 73.9836 7.23317 70.2072L74.3772 6.49226C78.0934 2.96589 83.021 1 88.144 1H511Z" fill="#0A0A0A" />
            <path d="M531 21L532 21L532 21L531 21ZM21 677.707L21 678.707H21V677.707ZM74.3772 6.49226L73.6889 5.76687L74.3772 6.49226ZM511 1V2C521.493 2 530 10.5066 530 21L531 21L532 21C532 9.40208 522.598 0 511 0V1ZM531 21H530V657.707H531H532V21H531ZM531 657.707H530C530 668.2 521.493 676.707 511 676.707V677.707V678.707C522.598 678.707 532 669.305 532 657.707H531ZM511 677.707V676.707H21V677.707V678.707H511V677.707ZM21 677.707L21 676.707C10.5067 676.707 2 668.2 2 657.707H1H0C0 669.305 9.4021 678.707 21 678.707L21 677.707ZM1 657.707H2V84.7149H1H0V657.707H1ZM7.23317 70.2072L7.92151 70.9326L75.0655 7.21765L74.3772 6.49226L73.6889 5.76687L6.54483 69.4818L7.23317 70.2072ZM88.144 1V2H511V1V0H88.144V1ZM74.3772 6.49226L75.0655 7.21765C78.5959 3.86759 83.2772 2 88.144 2V1V0C82.7649 0 77.5908 2.06418 73.6889 5.76687L74.3772 6.49226ZM1 84.7149H2C2 79.5031 4.14092 74.5201 7.92151 70.9326L7.23317 70.2072L6.54483 69.4818C2.36628 73.447 0 78.9545 0 84.7149H1Z" fill="url(#paint1_linear_3125_38)" mask="url(#path-3-outside-2_3125_38)" />
          </g>
          <defs>
            <clipPath id="bgblur_0_3125_38_clip_path" transform="translate(20 20)">
              <path d="M511 1C522.046 1 531 9.95436 531 21V657.707C531 668.753 522.046 677.707 511 677.707H21C9.95438 677.707 1 668.753 1 657.707V84.7149C1 79.2288 3.2536 73.9836 7.23317 70.2072L74.3772 6.49226C78.0934 2.96589 83.021 1 88.144 1H511Z" />
            </clipPath>
            <linearGradient id="paint0_linear_3125_38" x1="1" y1="21.3932" x2="532.498" y2="22.6475" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient id="paint1_linear_3125_38" x1="202.372" y1="224.903" x2="-5.67047" y2="10.8423" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FE6E00" stopOpacity="0" />
              <stop offset="1" stopColor="#FE6E00" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="py-[3vw] relative z-10 gap-y-[2vw] flex-col flex items-center justify-between h-full w-full">
        <div className="h-[3.5vw] w-auto">
          <Image
            src={logo}
            alt="frameScoll"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
        <ul className="py-[1vw] text-[#A8A8A8] text-center space-y-4 w-2/4">
          {features.map((item, index) => (
            <li
              key={index}
              className={`w-full border-b border-[#282828] last:border-0 text-[0.95vw] pb-2`}>
              {item}
            </li>
          ))}
        </ul>
        <ButtonComponent
          chevronSize={"1.2vw"}
          textSize={"1vw"}
          text="Know More"
          borderColor="white"
          link={link}
        />
      </div>
    </div>
  )
}

const data = [
  {
    logo: "/assets/icons/logo/scanPay.svg",
    features: [
      "Digital Accounts",
      "Pre-Paid Accounts",
      "Reward Account Loyalty",
      "Redemption Account",
      "Credit Card Account",
      "Loan Account",
    ],
  },
  {
    logo: "/assets/icons/logo/Balance.svg",
    features: [
      "Digital Accounts",
      "Pre-Paid Accounts",
      "Reward Account Loyalty",
      "Redemption Account",
      "Credit Card Account",
      "Loan Account",
    ],
  },
  {
    logo: "/assets/icons/logo/snapCreed.svg",
    features: [
      "Digital Accounts",
      "Pre-Paid Accounts",
      "Reward Account Loyalty",
      "Redemption Account",
      "Credit Card Account",
      "Loan Account",
    ],
  },
  {
    logo: "/assets/icons/logo/scanPay.svg",
    features: [
      "Digital Accounts",
      "Pre-Paid Accounts",
      "Reward Account Loyalty",
      "Redemption Account",
      "Credit Card Account",
      "Loan Account",
    ],
  },
  {
    logo: "/assets/icons/logo/Balance.svg",
    features: [
      "Digital Accounts",
      "Pre-Paid Accounts",
      "Reward Account Loyalty",
      "Redemption Account",
      "Credit Card Account",
      "Loan Account",
    ],
  },
  {
    logo: "/assets/icons/logo/snapCreed.svg",
    features: [
      "Digital Accounts",
      "Pre-Paid Accounts",
      "Reward Account Loyalty",
      "Redemption Account",
      "Credit Card Account",
      "Loan Account",
    ],
  },
];