"use client";
import React, { useRef } from "react";
import ButtonComponent from "../Buttons/ButtonComponent";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import ArrowButton from "../Buttons/ArrowButton";
import Copy from "../Animations/Copy";
import Link from "next/link";

export default function Blogs() {

  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    swiperRef.current.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current.slideNext();
  };

  return (
    <section id="blogs" className="h-fit py-[5vw] text-background bg-[#F5F5F5] white">

      <div className="flex pb-[3vw] px-[3.75vw] items-end justify-between">
        <div className="space-y-[1vw] w-1/2">
          <Copy>
            <h2 className="text-[5.2vw] font-display leading-[1.2]">
              Insights That Drive  Innovation
            </h2>
          </Copy>
          <Copy>
            <p className="text-[1vw] w-4/5 leading-[1.5]">
              Stay ahead of the curve with expert insights, industry trends, and
              actionable tips from the world of technology and business.
            </p>
          </Copy>
        </div>
        <div className="w-fit">
          <ButtonComponent
            className="button"
            text="View All"
            darkTheme
            borderTrue
            bgColor="false"
          />
        </div>
      </div>

      <div className="w-full h-full mb-[3vw]">
        <Swiper
          spaceBetween={0}
          slidesPerView={1.8}
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          freeMode={true}
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

      <div className="flex items-center justify-end px-[3.75vw]">
        <div className="flex items-center w-fit gap-5 ">
          <ArrowButton onClick={handlePrevClick} rotate={"-rotate-180"} />
          <ArrowButton onClick={handleNextClick} />
        </div>
      </div>

    </section>
  );
}


const Card = ({ img, href, title, date }) => {
  return (
    <>
      <div className="h-[65vh] border border-[#D3D3D3] border-r-[0.5px] p-[2vw] w-full fadeupanim">
        <div className="flex flex-col gap-[1vw]">
          <Link href={href}>
            <div className={`w-full h-[45vh] group overflow-hidden relative rounded-xl`}>
              <Image
                fill
                src={img}
                alt="blog"
                quality={90}
                className="scale-105 group-hover:scale-100 duration-300"
              />
            </div>
          </Link>
          <div className="flex items-center justify-between">
            <div className="w-1/2 space-y-[1vw]">
              <p className="text-[1.25vw] font-medium">{title}</p>
              <p className="text-[0.95vw] font-light">{date}</p>
            </div>
            <ArrowButton href={href} rotate={"-rotate-45"} />
          </div>
        </div>
      </div>
    </>
  )
}

const data = [
  {
    bg: "/assets/images/blog-image-1.png",
    title: "How Generative AI is Revolutionizing Insurance",
    date: "6 March, 2025"
  },
  {
    bg: "/assets/images/blog-image-2.png",
    title: "How Generative AI is Revolutionizing Insurance",
    date: "6 March, 2025"
  },
  {
    bg: "/assets/images/blog-image-1.png",
    title: "How Generative AI is Revolutionizing Insurance",
    date: "6 March, 2025"
  },
  {
    bg: "/assets/images/blog-image-2.png",
    title: "How Generative AI is Revolutionizing Insurance",
    date: "6 March, 2025"
  }
]