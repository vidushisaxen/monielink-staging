"use client";
import SwiperButton from "@/app/components/Buttons/SwiperButton";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ButtonComponent from "../Buttons/ButtonComponent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import BackgroundLine from "../BackgroundLine";
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Products() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    swiperRef.current.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current.slideNext();
  };
  useEffect(() => {
    const ctx = gsap.context(() => {
      const productsText = SplitText.create(".productsText", {
        type: "lines",
        linesClass: "productsTextLines",
        mask: "lines",
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#products",
          start: "top 80%",
          end: "bottom top",
          // markers: true,
        },
      });
      gsap.set(".productsTextLines", { y: "100%" });
      tl.to(".productsTextLines", {
        y: "0%",
        duration: 1,
        stagger: 0.08,
        ease: "power3.inOut",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="products"
      className="h-[150vh] w-full relative  flex flex-col items-center justify-center"
    >
      <BackgroundLine />
      <div className="absolute top-0 left-0  h-[150vh] w-full flex  flex-col items-center justify-center">
        <p className="text-foreground productsText text-[5vw] w-[60%] text-center leading-[1.25] font-display">
          Everything You Need to Power Digital Banking
        </p>

        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setActiveIndex(swiperRef.current.activeIndex);
          }}
          loop={true}
          centeredSlides={true}
          slidesPerView={3}
          className="h-fit mySwiper flex items-center justify-center p-[3vw] w-screen "
        >
          {[
            {
              cardImage: "/assets/Cards.svg",
              logo: "/assets/logo/scanPay.svg",
              items: [
                "Digital Accounts",
                "Pre-Paid Accounts",
                "Reward Account Loyalty",
                "Redemption Account",
                "Credit Card Account",
                "Loan Account",
              ],
            },
            {
              cardImage: "/assets/Cards.svg",
              logo: "/assets/logo/Balance.svg",
              items: [
                "Digital Accounts",
                "Pre-Paid Accounts",
                "Reward Account Loyalty",
                "Redemption Account",
                "Credit Card Account",
                "Loan Account",
              ],
            },
            {
              cardImage: "/assets/Cards.svg",
              logo: "/assets/logo/snapCreed.svg",
              items: [
                "Digital Accounts",
                "Pre-Paid Accounts",
                "Reward Account Loyalty",
                "Redemption Account",
                "Credit Card Account",
                "Loan Account",
              ],
            },
            {
              cardImage: "/assets/Cards.svg",
              logo: "/assets/logo/snapCreed.svg",
              items: [
                "Digital Accounts",
                "Pre-Paid Accounts",
                "Reward Account Loyalty",
                "Redemption Account",
                "Credit Card Account",
                "Loan Account",
              ],
            },
          ].map((card, cardIndex) => (
            <SwiperSlide key={cardIndex}>
              <div className="card relative h-full w-full">
                <div className="h-full  w-full relative">
                  <div className="cards  h-full w-full">
                    <Image
                      src={card.cardImage}
                      alt="frameScoll"
                      width={100}
                      height={100}
                      className={`w-full svg h-full`}
                    />
                    <div className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-xs h-[78%] w-[80%] rounded-3xl "></div>
                  </div>
                </div>
                <div className="absolute  top-0 py-[5vw] flex-col flex items-center justify-evenly left-0 h-full w-full ">
                  <div className="h-auto w-[15vw]">
                    <Image
                      src={card.logo}
                      alt="frameScoll"
                      width={100}
                      height={100}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="py-[1vw] flex  text-[#A8A8A8] items-center flex-col">
                    {card.items.map((item, index) => (
                      <div
                        className={`flex w-full ${
                          index !== 5 ? "border-b border-[#282828]" : ""
                        } items-center py-2 justify-center`}
                        key={index}
                      >
                        <p className="text-[1vw]" key={index}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="h-auto w-full flex items-center justify-center">
                    <ButtonComponent
                      chevronSize={"1.2vw"}
                      textSize={"1vw"}
                      text="Know More"
                      borderColor="white"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center gap-5">
          <div>
            <SwiperButton onClick={handlePrevClick} isRight={true} />
          </div>
          <div>
            <SwiperButton onClick={handleNextClick} isRight={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
