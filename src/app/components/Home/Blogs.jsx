"use client";
import React, { useRef } from "react";
import ButtonComponent from "../ButtonComponent";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperButton from "@/app/Buttons/SwiperButton";

export default function Blogs() {
  const swiperRef = useRef(null);
  const handlePrevClick = () => {
    swiperRef.current.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current.slideNext();
  };

  return (
    <section id="blogs" className="h-fit py-[5vw] text-background bg-[#F5F5F5]">
      <div className=" h-fit py-[3vw] px-[3.75vw]">
        <p className="text-[5vw] font-display w-[55%] leading-[5.2vw] ">
          Insights That Drive Innovation
        </p>
        <div className="flex items-center justify-between">
          <p className="text-[1vw] font-medium w-[40%] leading-1.1 mt-5 ">
            Stay ahead of the curve with expert insights, industry trends, and
            actionable tips from the world of technology and business.
          </p>
          <ButtonComponent
            text="View All"
            darkTheme
            borderTrue
            bgColor="false"
          />
        </div>
      </div>
      <div className="w-full px-[1.75vw] h-[75vh] border-t border-b border-[#D3D3D3] mb-[3vw]">
        <Swiper
          slidesPerView={1.7}
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          className="mySwiper items-center justify-center flex h-full"
        >
          {[
            {
              bg: "/assets/images/image.png",
              title: "How Generative AI is Revolutionizing Insurance",
            },
            {
              bg: "/assets/images/image2.png",
              title: "The Future of Digital Banking in 2025",
            },
            {
              bg: "/assets/images/image.png",
              title: "Blockchain Technology in Modern Finance",
            },
            {
              bg: "/assets/images/image.png",
              title: "Cybersecurity Best Practices for FinTech",
            },
            { bg: "/assets/images/image.png", title: "Mobile Payment Trends to Watch" },
            {
              bg: "/assets/images/image.png",
              title: "AI-Powered Risk Assessment in Banking",
            },
          ].map((blog, index) => (
            <SwiperSlide key={index}>
              <div className="h-[75vh] cursor-pointer border-r border-[#D3D3D3] px-[2vw] py-[2vw] w-full ">
                <div className=" h-full flex flex-col gap-5 w-full">
                  <div className={`w-full h-full rounded-lg overflow-hidden`}>
                    <img src={blog.bg} alt="blog" width={100} height={100} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col w-[50%] gap-4">
                      <p className="text-[1.3vw] font-medium">{blog.title}</p>
                      <p className="text-[0.9vw] font-light">6 March, 2025</p>
                    </div>
                    <div className="w-[10%]">
                      <SwiperButton rotate removeBg />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex items-center justify-end px-[3.75vw]">
        <div className="flex items-center w-fit gap-5 ">
          <div onClick={handlePrevClick} className="cursor-pointer">
            <SwiperButton isRight removeBg />
          </div>
          <div onClick={handleNextClick} className="cursor-pointer">
            <SwiperButton removeBg />
          </div>
        </div>
      </div>
    </section>
  );
}
