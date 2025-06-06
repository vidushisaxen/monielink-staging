import SwiperButton from "@/app/Buttons/SwiperButton";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ButtonComponent from "../ButtonComponent";

export default function Products() {
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
        <p className="text-foreground text-[5vw] w-[60%] text-center leading-none font-display">
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
                        textSize={".6vw"}
                        text="Talk to an expert"
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
