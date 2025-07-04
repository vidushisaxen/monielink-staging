"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import Copy from "../Animations/Copy";
import { fadeUpAnim } from "../Animations/gsapAnimations";

const Hero = () => {
  fadeUpAnim()
  
  const pathname = usePathname();
  const pathArray = pathname.split("/").filter(Boolean);
  const createBreadcrumbName = (segment) =>
    segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
  return (
    <section className="w-screen h-fit " id="hero">
      <div className="px-[5vw] bg-black-1 w-full h-full flex flex-col pt-[15%] gap-[3vw] max-sm:pt-[30%]">
        <Copy>

        <h1 className="text-head-100 font-display w-[60%] capitalize max-sm:w-[90%] max-sm:text-head-150 text-gray-1">
          Your passport to the web3 economy
        </h1>
        </Copy>
        <div className="breadcrumbs w-full flex items-start justify-start text-content-20 text-gray-4 max-sm:mt-[8vw] ">
          <div className="flex gap-3  ">
            <a
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/");
              }}
              href="/"
              className=" text-[#636363]"
            >
              Home
            </a>
            {pathArray.map((segment, index) => {
              const href = "/" + pathArray.slice(0, index + 1).join("/");
              const isLast = index === pathArray.length - 1;
              return (
                <div key={index} className="flex items-center gap-2 ">
                  <span>
                    <Image
                      src="/assets/icons/slash.svg"
                      height={13}
                      width={13}
                      alt="slash"
                      className="max-sm:w-[4.5vw] max-sm:h-auto"
                    />
                  </span>
                  {isLast ? (
                    <span className="text-gray-1">
                      {createBreadcrumbName(segment)}
                    </span>
                  ) : (
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo(href);
                      }}
                      href={href}
                      className=" text-[#636363]"
                    >
                      {createBreadcrumbName(segment)}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex justify-center">
        <div className="w-full h-[80vh] rounded-[0.8vw] mt-[3vw] overflow-hidden relative z-[10] max-sm:mt-[30vw] max-sm:h-[55vh] max-sm:w-[94%] max-sm:rounded-[2.5vw] fadeupanim">
          <Image src={"/assets/images/blogs/blog-detail-hero.png"} alt="blog-detail-hero" width={1920} height={1080} className="w-full h-full object-cover"/>
        </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
