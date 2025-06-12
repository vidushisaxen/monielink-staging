"use client";
import React, { useEffect, useRef } from "react";
import ButtonComponent from "../Buttons/ButtonComponent";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperButton from "@/app/components/Buttons/SwiperButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger, SplitText);


const data=[
  {
    bg: "/assets/images/image.png",
    title: "How Generative AI is Revolutionizing Insurance",
    date:"6 March, 2025"
  },
  {
    bg: "/assets/images/image2.png",
    title: "The Future of Digital Banking in 2025",
    date:"6 March, 2025"

  },
  {
    bg: "/assets/images/image.png",
    title: "Blockchain Technology in Modern Finance",
    date:"6 March, 2025"

  },
  {
    bg: "/assets/images/image.png",
    title: "Cybersecurity Best Practices for FinTech",
    date:"6 March, 2025"

  },
  {
    bg: "/assets/images/image.png",
    title: "Mobile Payment Trends to Watch",
    date:"6 March, 2025"

  },
  {
    bg: "/assets/images/image.png",
    title: "AI-Powered Risk Assessment in Banking",
    date:"6 March, 2025"

  },
]

export default function Blogs() {
  const swiperRef = useRef(null);
  const handlePrevClick = () => {
    swiperRef.current.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current.slideNext();
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const blogsText = SplitText.create(".blogsText", {
        type: "lines",
        mask:"lines",
        linesClass: "blogsTextLines",
      });
      const blogsTextPara = SplitText.create(".blogsTextPara", {
        type: "lines",
        mask:"lines",
        linesClass: "blogsTextParaLines",
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#blogs",
          start: "top 80%",
          end: "bottom top",
          once: true,
        },
      });

      gsap.set(".blogsTextLines", { y: "100%" });
      gsap.set(".blogsTextParaLines", { y: "100%" });
      gsap.set(".button", { y: "100%" });

      tl.to(".blogsTextLines", {
        y: "0%",
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.08,
      });
      tl.to(".blogsTextParaLines", {
        y: "0%",
        delay: -0.3,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.08,
      });
    
      tl.to(
        ".cards",
        {
          opacity: 1,
          duration: 1,
          ease: "power3.inOut",
          stagger: 0.08,
          },
        "<"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="blogs" className="h-fit py-[5vw] text-background bg-[#F5F5F5] white">
      <div className=" h-fit py-[3vw] px-[3.75vw] ">
        <div className="overflow-hidden">
          <h2 className="text-[5.2vw] blogsText font-display w-[55%] leading-[1.2] ">
            Insights That Drive  Innovation
          </h2>
        </div>

        <div className="flex items-center justify-between">
            <p className="text-[1vw] blogsTextPara w-[43%] leading-[1.1] mt-5 text-[#050505]">
              Stay ahead of the curve with expert insights, industry trends, and
              actionable tips from the world of technology and business.
            </p>
          <div className="overflow-hidden">
            <ButtonComponent
              className="button"
              text="View All"
              darkTheme
              borderTrue
              bgColor="false"
            />
          </div>
        </div>
      </div>
      <div className="w-full px-[1.75vw] h-full border-t border-b border-[#D3D3D3] mb-[3vw]">
        <Swiper
          slidesPerView={1.7}
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          freeMode={true}
          className="mySwiper items-center justify-center flex h-full"
        >
          {data.map((blog, index) => (
            <SwiperSlide key={index}>
              <div className="h-[65vh] opacity-0 cards cursor-pointer border-r border-[#D3D3D3] px-[2vw] py-[2vw] w-full ">
                <div className=" h-full flex flex-col gap-5 w-full">
                  <div
                    className={`w-full max-h-[45vh] rounded-lg overflow-hidden`}
                  >
                    <Image
                      src={blog.bg}
                      alt="blog"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col w-[50%] gap-4">
                      <p className="text-[1.25vw] font-medium">{blog.title}</p>
                      <p className="text-[0.95vw] font-light">{blog.date}</p>
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
