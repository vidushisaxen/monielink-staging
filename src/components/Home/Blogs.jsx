"use client";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import ArrowButton from "../Buttons/ArrowButton";
import Copy from "../Animations/Copy";
import Link from "next/link";
import WhiteButton from "../Buttons/WhiteButton";

export default function Blogs() {
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    swiperRef.current.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current.slideNext();
  };

  return (
    <section
      data-theme="white"
      id="blogs"
      className="h-fit py-[5vw] text-background overflow-hidden "
    >
      <div className="flex max-sm:flex-col max-sm:items-start max-sm:py-[12vw] max-md:py-[5vw] pb-[3vw] px-[3.75vw] max-sm:px-[6vw] items-end justify-between">
        <div className="space-y-[1vw] w-1/2 max-md:w-[70%] max-sm:w-[90%]">
          <Copy>
            <h2 className="text-[5.2vw] text max-sm:text-head-100 max-md:text-head-100 font-display leading-[1.2]">
              <span className="inline-block max-sm:block">Insights That</span>

              <span className="inline-block max-sm:block">
                Drive Innovation
              </span>
            </h2>
          </Copy>
          <Copy>
            <p className="text-[1vw] w-[88%] leading-[1.5] max-sm:text-content-20 max-sm:w-full max-sm:py-[3vw] max-sm:text-[3.7vw] max-md:text-[2.5vw]">
              Stay ahead of the curve with expert insights, industry trends, and
              actionable tips from the world of technology and business.
            </p>
          </Copy>
        </div>
        <div className=" flex-col w-full h-fit mt-[10vw] hidden max-sm:flex">
          {data.map((data,index)=>(

          <div key={index} className="w-full  flex flex-col gap-[4vw] h-[40vh] border border-black/10 p-[5vw] mb-[7vw]">
            <div className="w-full h-[70%] rounded-[1vw] overflow-hidden">
              <Image
                src={data.bg}
                width={500}
                height={300}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-between">
              <div className="w-[70%] flex flex-col gap-[3vw]">
                <h4 className="font-medium ">
                  {data.title}
                </h4>
                <p className="text-[#535353]">6 March , 2025</p>
              </div>
              <div className="w-[30%] flex justify-end">
                <ArrowButton
                  href={"/"}
                  rotate={"-rotate-45"}
                  arrowColor={"#050505"}
                  borderColor={"#050505"}
                  hoverColor={"bg-[#050505]/10"}
                />
              </div>
            </div>
          </div>

          ))}
        </div>

        <div className="w-fit fadeupanim">
          <WhiteButton text="View All" href="/blogs" />
        </div>
      </div>

      <div className="w-full h-full max-md:pt-[8vw] mb-[3vw] max-sm:hidden">
        <Swiper
          spaceBetween={0}
          slidesPerView={1.8}
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          freeMode={true}
          speed={500}
          breakpoints={{
           0: {
    slidesPerView: 1.8, // mobile
  },
  768: {
    slidesPerView: 1.2, // tablet
    centeredSlides: false,
  },
  1080: {
    slidesPerView: 1.8, // desktop
    centeredSlides: false,
  }
          }}
          className="mySwiper items-center justify-center flex h-full"
        >
          {data.map((blog, index) => (
            <SwiperSlide key={index}>
              <Card
                img={blog.bg}
                href={"#"}
                title={blog.title}
                date={blog.date}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex items-center justify-end px-[3.75vw] max-sm:hidden">
        <div className="flex items-center w-fit gap-5 ">
          <ArrowButton
            onClick={handlePrevClick}
            rotate={"-rotate-180"}
            arrowColor={"#050505"}
            borderColor={"#050505"}
            hoverColor={"bg-[#050505]/10"}
          />
          <ArrowButton
            onClick={handleNextClick}
            arrowColor={"#050505"}
            borderColor={"#050505"}
            hoverColor={"bg-[#050505]/10"}
          />
        </div>
      </div>
    </section>
  );
}

const Card = ({ img, href, title, date }) => {
  return (
    <>
      <div className="h-[65vh] max-sm:h-[65vh] max-md:h-[55vh] border border-[#D3D3D3] border-r-[0.5px] p-[2vw] w-full fadeupanim">
        <div className="flex flex-col gap-[1vw]">
          <Link href={href}>
            <div
              className={`w-full h-[45vh] max-sm:h-[45vh] max-md:w-full max-sm:w-full max-md:h-[30vh] group overflow-hidden relative rounded-xl`}
            >
              <Image
                fill
                src={img}
                alt="blog"
                quality={90}
                className="scale-105 group-hover:scale-100 duration-300"
              />
            </div>
          </Link>
          <div className="flex items-center max-md:items-start justify-between max-sm:pt-0 max-md:pt-[2vw]">
            <div className="w-1/2 max-md:w-3/4 max-sm:w-1/2 space-y-[1vw] max-sm:space-y-[1vw] max-md:space-y-[2vw]">
              <p className="text-[1.25vw] max-sm:text-[2vw] max-md:text-[3.5vw] font-medium">{title}</p>
              <p className="text-[0.95vw] max-md:text-[2.5vw] font-light">{date}</p>
            </div>
            <ArrowButton
              href={href}
              rotate={"-rotate-45"}
              arrowColor={"#050505"}
              borderColor={"#050505"}
              hoverColor={"bg-[#050505]/10"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const data = [
  {
    bg: "/assets/images/blog-image-1.png",
    title: "How Generative AI is Revolutionizing Insurance",
    date: "6 March, 2025",
  },
  {
    bg: "/assets/images/blog-image-2.png",
    title: "How Generative AI is Revolutionizing Insurance",
    date: "6 March, 2025",
  },
  {
    bg: "/assets/images/blog-image-1.png",
    title: "How Generative AI is Revolutionizing Insurance",
    date: "6 March, 2025",
  },
  {
    bg: "/assets/images/blog-image-2.png",
    title: "How Generative AI is Revolutionizing Insurance",
    date: "6 March, 2025",
  },
];
