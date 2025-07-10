"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState, useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ArrowButton from "../Buttons/ArrowButton";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger,useGSAP);

const WhyUsSwiper = () => {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);


  const handlePrevClick = () => {
    swiperRef.current.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current.slideNext();
  };


  useEffect(() => {
    
    if (!swiperRef.current) return;
    const ctx = gsap.context(() => {
      const swiperEl = swiperRef.current.el;
      const wrapper = swiperEl.querySelector(".swiper-wrapper");
      const slideEls = Array.from(wrapper.querySelectorAll(".swiper-slide"));

      const rects = slideEls.map((el) => el.getBoundingClientRect());

      const dxdy = rects.map((r) => ({
        x: rects[0].left - r.left,
        y: rects[0].top - r.top,
      }));

      gsap.set(slideEls, {
        x: (i) => dxdy[i].x,
        y: (i) => dxdy[i].y,
        opacity: 0,
        zIndex: (i) => slideEls.length - i,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          // markers: true,
        },
      });

      tl.fromTo(
        slideEls[0],
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.1,
          onComplete: () => {
            tl.to(slideEls, {
              opacity: 1,
              duration: 0.2,
            });
            slideEls.forEach((el, i) => {
              if (i === 0) return;
              tl.to(
                el,
                {
                  x: 0,
                  y: 0,
                  duration: 0.5,
                  ease: "power2.out",
                },
                (i - 1) * 0.01
              );
            });
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useGSAP(() => {
    gsap.set(".swiper-container", {
      scale: 0.5,
      xPercent: -10,
    });

    gsap.to(".swiper-container", {
      scale: 1,
      xPercent: 0,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        // markers: true, 
      },
    });
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="flex justify-start items-center gap-10 max-sm:flex-col max-sm:gap-[4vw] max-md:flex-col max-md:gap-[4vw]"
      >
        <Swiper
          modules={[Navigation]}
          initialSlide={0}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setActiveIndex(swiper.activeIndex);
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: false,
              speed:500
            },
            768: {
              slidesPerView: 1.5,
              centeredSlides: false,
              // speed:500
            },
            1080: {
                slidesPerView: 7,
                centeredSlides: true,
            }
          }}
          // slidesPerView={"auto"}
          spaceBetween={30}
          threshold={10}
          speed={100}
          slidesPerView={1.5}
          className="mySwiper !px-[4.5vw] w-screen !overflow-y-visible max-sm:!px-[5.5vw] max-sm:h-[55vh] max-md:!px-[5vw] max-md:h-[50vh] swiper-container"
        >
          {SwiperData.map((item, cardIndex) => {
            const isActive = activeIndex === cardIndex;
            return (
              <SwiperSlide
                key={item.id}
                className={`cursor-grab duration-500 !transition-all !w-[12vw] overflow-hidden max-sm:!w-full max-md:!w-[60vw] ${
                  isActive ? "!w-[22vw] max-sm:!w-full max-md:!w-[20vw]" : ""
                }`}
              >
                <SwiperCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  index={cardIndex}
                  activeIndex={activeIndex}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
          <div className="flex items-center justify-center gap-5 max-sm:pt-[0vw] max-sm:mb-[10vw] max-md:pt-0 max-md:mb-[10vw]">
          <ArrowButton onClick={handlePrevClick} arrowColor={"#ffffff"} borderColor={"#ffffff"} hoverColor={"bg-[#636363]/20"} rotate={"-rotate-180"} />
          <ArrowButton onClick={handleNextClick} arrowColor={"#ffffff"} borderColor={"#ffffff"} hoverColor={"bg-[#636363]/20"} />
        </div>
      </div>
    </>
  );
};

export default WhyUsSwiper;

const SwiperCard = ({ id, title, description, index, activeIndex }) => {
  const isActive = activeIndex === index;

  return (
    <div
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 80% 100%, 0% 100%)",
      }}
      className={`overflow-hidden p-[1px] rounded-[16px] bg-gradient-to-br from-white/50 to-[#FE701A] flex items-center justify-center duration-500 transition-all h-[14vw] max-sm:h-[110vw] max-md:h-[45vh] ${
        isActive ? "h-[25vw] max-sm:h-[110vw] max-md:h-[30vh]" : ""
      }`}
    >
      <div className="bg-[#FE701A] p-[2vw] rounded-[15px] w-[calc(100%-1px)] h-[calc(100%-1px)] space-y-[3.5vw] max-sm:p-[10vw] max-md:p-[5vw]">
        <p>00{id}</p>
        <div
          className={`space-y-[3.5vw] duration-500 w-[18vw] transition-all max-sm:w-full max-sm:space-y-[10vw] max-sm:mt-[12vw] max-md:w-full max-md:space-y-[7vw] max-md:mt-[12vw] ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        >
          <h4 className="text-content-30 font-display max-md:text-head-80 max-sm:text-head-80 capitalize">
            {title}
          </h4>
          <p className="text-content-20 mb-[3.5vw]">{description}</p>
        </div>
      </div>
    </div>
  );
};

const SwiperData = [
  {
    id: 1,
    title: "Faster Time to Market",
    description:
      "Launch your card program in days, not months. Our end-to-end platform handles everything — from issuance to compliance — so you can focus on growth.",
  },
  {
    id: 2,
    title: "Faster Time to Market",
    description:
      "Launch your card program in days, not months. Our end-to-end platform handles everything — from issuance to compliance — so you can focus on growth.",
  },
  {
    id: 3,
    title: "Faster Time to Market",
    description:
      "Launch your card program in days, not months. Our end-to-end platform handles everything — from issuance to compliance — so you can focus on growth.",
  },
  {
    id: 4,
    title: "Faster Time to Market",
    description:
      "Launch your card program in days, not months. Our end-to-end platform handles everything — from issuance to compliance — so you can focus on growth.",
  },
  {
    id: 5,
    title: "Faster Time to Market",
    description:
      "Launch your card program in days, not months. Our end-to-end platform handles everything — from issuance to compliance — so you can focus on growth.",
  },
  {
    id: 6,
    title: "Faster Time to Market",
    description:
      "Launch your card program in days, not months. Our end-to-end platform handles everything — from issuance to compliance — so you can focus on growth.",
  },
  {
    id: 7,
    title: "Faster Time to Market",
    description:
      "Launch your card program in days, not months. Our end-to-end platform handles everything — from issuance to compliance — so you can focus on growth.",
  },
  {
    id: 8,
    title: "Faster Time to Market",
    description:
      "Launch your card program in days, not months. Our end-to-end platform handles everything — from issuance to compliance — so you can focus on growth.",
  },
];
