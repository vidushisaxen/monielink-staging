"use client"
import SwiperButton from "@/app/Buttons/SwiperButton";
import Image from "next/image";
import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ButtonComponent from "../../Buttons/ButtonComponent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Products() {

  useEffect(() => {
    const ctx = gsap.context(() => {
      const productsText = SplitText.create(".productsText", {
        type: "lines",
        linesClass: "productsTextLines",
        mask:"lines",
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
  }, [])
  
  const handlePrevClick = () => {
    const swiper = document.querySelector(".mySwiper").swiper;
    swiper.slidePrev();
  };

  const handleNextClick = () => {
    const swiper = document.querySelector(".mySwiper").swiper;
    swiper.slideNext();
  };

  return (
    <section
      id="products"
      className="h-fit w-full relative bg-[#050505] flex flex-col items-center justify-center py-[5vw]"
    >
      <div className=" flex  flex-col items-center justify-center">
        <p className="text-foreground productsText text-[5vw] w-[60%] text-center leading-[1.25] font-display">
          Everything You Need to Power Digital Banking
        </p>

        <div className="h-[90vh] flex items-center justify-center p-[3vw] w-full ">
          
            {[1, 2, 3].map((_, index) => (
                <div key={index} className="card relative  h-full w-fit">
                  <div className="cards h-full w-full">
                    <Image
                      src={"/assets/Cards.svg"}
                      alt="frameScoll"
                      width={100}
                      height={100}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="absolute top-0 py-[5vw] flex-col flex items-center justify-evenly left-0 h-full w-full ">
                    <div className="h-auto w-[15vw]">
                      <Image
                        src={"/assets/logo/scanPay.svg"}
                        alt="frameScoll"
                        width={100}
                        height={100}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="py-[1vw] flex  text-[#A8A8A8] items-center flex-col">
                      {[
                        "Digital Accounts",
                        "Pre-Paid Accounts",
                        "Reward Account Loyalty",
                        "Redemption Account",
                        "Credit Card Account",
                        "Loan Account",
                      ].map((item, index) => (
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
            ))}
        </div>

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
