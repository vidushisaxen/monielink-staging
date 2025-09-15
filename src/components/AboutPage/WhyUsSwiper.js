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

    if (globalThis.innerWidth < 1024) {
      return;
    }
    gsap.set(".swiper-container", {
      scale: 0.5,
      xPercent: -15,
    });

    gsap.to(".swiper-container", {
      scale: 1,
      xPercent: -10,
      // yPercent:-15,
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
     <div className="flex absolute top-[50%] right-[5%]   items-start max-sm:top-[68%] max-sm:right-[35%]  max-md:top-[70%] justify-end gap-5 max-sm:w-full fadeupanim z-[99]">
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
      <div
        ref={containerRef}
        className="flex justify-start relative items-center gap-10 max-sm:flex-col max-sm:gap-[4vw] max-md:flex-col max-md:gap-[4vw] max-sm:pl-[4vw]"
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
          className="mySwiper !px-[4.5vw] w-screen  !overflow-y-visible max-sm:!px-[5.5vw] max-sm:h-[55vh] max-md:!px-[5vw] max-md:h-[50vh] swiper-container"
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
                  height={item.height}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        
      </div>
       
       
         
    </>
  );
};

export default WhyUsSwiper;

const SwiperCard = ({ id, title, description, index, activeIndex,height }) => {
  const isActive = activeIndex === index;

  return (
    <div
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 80% 100%, 0% 100%)",
      }}
      className={`overflow-hidden p-[1px] rounded-[16px] bg-gradient-to-br from-white/50 to-[#FE701A] flex items-center justify-center duration-500 transition-all h-[14vw] max-sm:h-[110vw] max-md:h-[50vh] max-sm:w-[90%] ${
        isActive ? `${height || "h-[28vw]"} max-sm:h-[105vw]` : ""
      }`}
    >
      <div className="bg-[#FE701A] p-[2vw] rounded-[15px] w-[calc(100%-1px)] h-[calc(100%-1px)] space-y-[3.5vw] max-sm:p-[7vw]  max-md:p-[5vw] ">
        <p className="max-sm:text-[4vw] max-md:text-[2.7vw]">00{id}</p>
        <div
          className={`space-y-[5vw] duration-500 w-[18vw] transition-all max-sm:w-full max-sm:space-y-[5vw] max-sm:mt-[5vw] max-md:w-full max-md:space-y-[7vw] max-md:mt-[7vw] `}
        >
          <h4 className={`font-display  max-sm:text-head-60 capitalize max-sm:w-full max-md:text-head-80 max-md:w-full max-md:!leading-[1.2]  ${
            isActive ? "text-content-30 w-[80%]" : "text-[1.2vw] w-[20%]"
          }`}>
            {title}
          </h4>
          <div className={`text-content-20 mb-[3.5vw] ${
            isActive ? "opacity-100" : "opacity-0 max-md:opacity-100"
          }`} dangerouslySetInnerHTML={{__html:description}}/>
        </div>
      </div>
    </div>
  );
};

const SwiperData = [
  {
    id: 1,
    title: "Super SDK offering",
    description:
      "Our Plug & Play SDK can be Easily Integrated into Mobile Apps of Banks & FinTechs to deliver a wide variety of use cases without requiring them to build these functionalities from scratch. ",
      
  },
  {
    id: 2,
    title: "Dedicated Instance deployment ",
    description:
      "Our Back-End Applications may be deployed in a dedicated instance on our Cloud Infrastructure providing our partners full control over its access, management , security , data-protection & business continuity.",
  },
  {
    id: 3,
    title: "Revenue Share Model",
    description:
      "Our partnership goes beyond Tech; it’s about Growing Revenue For Our Partners. Our Revenue share model ensures: <ul class='list-disc px-[1vw]'><li>Low Initial Investment.</li><li>Revenue Tied to the Success of the Partner.</li><li>End-to-end Business & Process Enablement.</li></ul>",
      height:"h-[32vw]"
  },
  {
    id: 4,
    title: "Superior Customer Experience",
    description:
      "Our suite of offerings include Digital Banking, Card Issuing & Acquiring and Digital Lending services supported with Digital KYC Management, Soft-Token for 2FA, Loyalty Management & Chatbot service. Together, these end-to-end solutions help drive scalable growth, operational efficiency, and a superior customer experience.",
       height:"h-[34vw]"
  },
  {
    id: 5,
    title: "Infrastructure Security",
    description:
      "The tenant has full control over the infrastructure's security configuration, including network access, firewalls, and operating system security. They are responsible for implementing security measures to protect their own data and application from unauthorised access.",
       height:"h-[30vw]"
  },
  {
    id: 6,
    title: "Regulatory Compliance",
    description:
      "Dedicated instance deployments enable tenants / partners meet regulatory compliance & security control standards.",
  }
];
