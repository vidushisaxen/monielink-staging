"use client";
import { useEffect, useRef, useState } from "react";
import TeamCard from "./TeamCard";
import { TeamData } from "./TeamData";
import Copy from "@/components/Animations/Copy";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ArrowButton from "@/components/Buttons/ArrowButton";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Image from "next/image";

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);
  const handlePrevClick = () => {
    swiperRef.current.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current.slideNext();
  };
  useEffect(() => {
    if (globalThis.innerWidth > 1024) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, []);
  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <section
        data-theme="white"
        className="bg-white-1 py-[4vw] max-md:py-[10%] max-sm:py-[15%] w-screen overflow-hidden"
      >
        <div className="px-[4vw] max-sm:px-[5.5vw]">
          <div className="w-[45%] mb-10 max-sm:w-[90%] max-sm:pb-0 max-md:pb-[10vw] max-md:w-[80%]">
            <Copy>
              <h3 className="text-head-60 font-display text-black-1 capitalize">
                Meet the People who drive the Business forward
              </h3>
            </Copy>
          </div>
          {isMobile ? (
            <>
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
                centeredSlides={false}
                slidesPerView={3}
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
                  // 1080: {
                  //   slidesPerView:2,
                  // }
                }}
                className="mySwiper !px-[4.5vw] max-sm:px-0 w-screen max-sm:w-full !overflow-y-visible"
              >
                {TeamData.map((card, cardIndex) => (
                  <SwiperSlide
                    key={cardIndex}
                    className="w-full h-full swiper-slides-anim !origin-top"
                  >
                    <SwiperCard
                      name={card.name}
                      position={card.position}
                      image={card.image}
                      info={card.info}
                      activeIndex={activeIndex}
                      link="#"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex items-center justify-center gap-5 max-sm:mt-[15vw] max-md:mt-[10vw]">
                <ArrowButton
                  onClick={handlePrevClick}
                  arrowColor={"#050505"}
                  borderColor={"#050505"}
                  hoverColor={"bg-[#050505]/20"}
                  rotate={"-rotate-180"}
                />
                <ArrowButton
                  onClick={handleNextClick}
                  arrowColor={"#050505"}
                  borderColor={"#050505"}
                  hoverColor={"bg-[#050505]/20"}
                />
              </div>
            </>
          ) : (
            <div className="flex flex-col items-end justify-start w-full gap-y-[1.5vw]">
              {TeamData.map((item, index) => (
                <TeamCard
                  key={index}
                  name={item.name}
                  position={item.position}
                  image={item.image}
                  info={item.info}
                  isOpen={activeIndex === index}
                  onClick={() => handleAccordionClick(index)}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Team;

const SwiperCard = ({ name,image,position,info, activeIndex, index }) => {
  const isActive = activeIndex === index;

  return (
    <div className="card relative h-fit w-full max-sm:py-0 text-black-1">
      <div className="absolute w-[105%] left-[-3%] max-md:top-[-8%] max-sm:top-0 max-sm:h-[105%] max-sm:w-[105%] max-md:w-[60vw] max-md:h-[68vh]">
        <svg
          width="333"
          height="558"
          viewBox="0 0 333 558"
          className="w-full h-full object-cover"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_754_13031" fill="white">
            <path d="M316.25 0.165771C325.087 0.165772 332.25 7.32922 332.25 16.1658V541.866C332.25 550.703 325.087 557.866 316.25 557.866H10.0879C4.51757 557.866 0.00195312 553.35 0.00195312 547.78V68.2206C0.00195312 59.9432 0.00195312 55.8045 1.55926 52.0926C3.11656 48.3806 6.06948 45.4807 11.9753 39.681L40.5437 11.6262C46.3036 5.96977 49.1836 3.14156 52.8223 1.65367C56.461 0.165771 60.4974 0.165771 68.5703 0.165771H316.25Z" />
          </mask>
          <path
            d="M316.25 0.165771C325.087 0.165772 332.25 7.32922 332.25 16.1658V541.866C332.25 550.703 325.087 557.866 316.25 557.866H10.0879C4.51757 557.866 0.00195312 553.35 0.00195312 547.78V68.2206C0.00195312 59.9432 0.00195312 55.8045 1.55926 52.0926C3.11656 48.3806 6.06948 45.4807 11.9753 39.681L40.5437 11.6262C46.3036 5.96977 49.1836 3.14156 52.8223 1.65367C56.461 0.165771 60.4974 0.165771 68.5703 0.165771H316.25Z"
            fill="#F0F0F0"
          />
          <path
            d="M316.25 0.165771V-0.834229V0.165771ZM332.25 16.1658H333.25H332.25ZM10.0879 557.866L10.0879 558.866H10.0879V557.866ZM52.8223 1.65367L52.4438 0.728062L52.8223 1.65367ZM1.55926 52.0926L2.48139 52.4794L1.55926 52.0926ZM316.25 0.165771V1.16577C324.534 1.16577 331.25 7.8815 331.25 16.1658H332.25H333.25C333.25 6.77693 325.639 -0.834228 316.25 -0.834229V0.165771ZM332.25 16.1658H331.25V541.866H332.25H333.25V16.1658H332.25ZM332.25 541.866H331.25C331.25 550.15 324.534 556.866 316.25 556.866V557.866V558.866C325.639 558.866 333.25 551.255 333.25 541.866H332.25ZM316.25 557.866V556.866H10.0879V557.866V558.866H316.25V557.866ZM10.0879 557.866L10.0879 556.866C5.06985 556.866 1.00195 552.798 1.00195 547.78H0.00195312H-0.998047C-0.998047 553.903 3.9653 558.866 10.0879 558.866L10.0879 557.866ZM0.00195312 547.78H1.00195V68.2206H0.00195312H-0.998047V547.78H0.00195312ZM11.9753 39.681L12.676 40.3945L41.2444 12.3397L40.5437 11.6262L39.843 10.9127L11.2747 38.9676L11.9753 39.681ZM68.5703 0.165771V1.16577H316.25V0.165771V-0.834229H68.5703V0.165771ZM40.5437 11.6262L41.2444 12.3397C47.0617 6.62688 49.7863 3.97548 53.2008 2.57927L52.8223 1.65367L52.4438 0.728062C48.5809 2.30764 45.5456 5.31265 39.843 10.9127L40.5437 11.6262ZM68.5703 0.165771V-0.834229C60.5779 -0.834229 56.3067 -0.851518 52.4438 0.728062L52.8223 1.65367L53.2008 2.57927C56.6152 1.18306 60.417 1.16577 68.5703 1.16577V0.165771ZM0.00195312 68.2206H1.00195C1.00195 59.8605 1.02007 55.9626 2.48139 52.4794L1.55926 52.0926L0.637121 51.7057C-1.01616 55.6464 -0.998047 60.026 -0.998047 68.2206H0.00195312ZM11.9753 39.681L11.2747 38.9676C5.42785 44.7093 2.29041 47.7649 0.637121 51.7057L1.55926 52.0926L2.48139 52.4794C3.94271 48.9962 6.71112 46.2522 12.676 40.3945L11.9753 39.681Z"
            fill="#DBDBDB"
            mask="url(#path-1-inside-1_754_13031)"
          />
        </svg>
      </div>
      <div className="py-[3vw] max-md:py-0 max-sm:pb-[2vw] max-sm:pt-[5vw] relative z-10 gap-y-[4vw] flex-col flex items-start gap-[8vw] h-[60vh] w-full px-[4vw]">
        <div className="w-full pl-[12vw] max-md:pl-0">
          <h4 className="text-head-60 font-display max-md:text-nowrap">{name}</h4>
          <p className="text-head-50 font-display">{position}</p>
        </div>
        <div className="w-full h-[60%] rounded-[4vw] overflow-hidden">
          <Image
            src={image}
            alt=""
            width={400}
            height={600}
            className="w-full h-full object-cover bg-red-300"
          />
        </div>
        <div className="space-y-[4vw] max-sm:space-y-[4vw] max-md:space-y-[2vw]">
         {info.map((info,id)=>(
            <p className="max-sm:text-[3.5vw] max-md:text-[2.5vw]" key={id}>{info}</p>
         ))}
     
        </div>
      </div>
    </div>
  );
};
