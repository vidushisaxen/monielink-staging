import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    title: "2x",
    subtitle: "Your Retail Customers",
    number: 2,
    suffix: "x",
  },
  {
    title: "2x",
    subtitle: "Your X-Selling Ratio",
    number: 2,
    suffix: "x",
  },
  {
    title: "6x",
    subtitle: "Revenue from Retail Products",
    number: 6,
    suffix: "x",
  },
];

export default function Overview() {
  const numberRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#overview",
          start: "top top",
          end: "bottom 120%",
          pin: true,
          once: true,
        },
      });
      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#overview",
          start: "60% top",
          end: "bottom top",
          pin: true,
          once: true,
        },
      });
      gsap.set(".overviewText", {
        y: "100%",
      });
      gsap.set(".overviewDescriptionText", {
        y: "100%",
      });
      tl.to(".overviewText", {
        y: "0%",
        delay: 0.3,
        duration: 0.3,
        ease: "none",
      });
      gsap.set(".findText", {
        y: "100%",
      });
      gsap.set(".solutionText", {
        y: "100%",
      });

      numberRefs.current.forEach((ref, i) => {
        if (ref) {
          tl.fromTo(
            ref,
            { innerText: 0 },
            {
              innerText: data[i].number,
              duration: 1,
              ease: "power1.out",
              snap: { innerText: 1 },
              scrollTrigger: {
                trigger: ref,
                start: "top 80%",
                once: true,
              },
              onUpdate: function () {
                ref.innerText = Math.round(ref.innerText) + data[i].suffix;
              },
              onStart: function () {
                ref.innerText = "0" + data[i].suffix;
              },
              onComplete: function () {
                ref.innerText = data[i].number + data[i].suffix;
              },
            }
          );
        }
      });

      t2.to(".findText", {
        y: "-20%",
        duration: 0.2,
        delay: 0.5,
        ease: "none",
      });
      t2.to(".solutionText", {
        y: "0%",
        duration: 0.2,
        ease: "none",
      });

      t2.to(".overviewDescriptionText", {
        y: "0%",
        duration: 0.2,
        ease: "none",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="overview" className="h-fit w-full pt-[10vw] bg-background">
      <div className="py-[5vw] flex items-center flex-col justify-center">
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <p className="text-[#A8A8A8] text-center text-[3vw] w-[55%] leading-[3.5vw] capitalize font-display overviewText">
            Enabling Digital Transformation to help You Realize 6X Revenue
            Growth
          </p>
        </div>
        <div className="flex items-center justify-between w-[60%] pt-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <p
                className="text-[10vw] leading-none"
                style={{
                  background: "linear-gradient(to right, #FF5100, #FE6E00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                ref={(el) => (numberRefs.current[index] = el)}
              >
                {item.title}
              </p>
              <p className="text-[#A8A8A8]  text-center text-[1vw] tracking-wider font-display">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-screen relative pt-2 text-foreground flex items-end justify-end w-full ">
        <div className="w-[100vw] h-screen flex items-center justify-center ">
          <svg
            className="w-full h-full"
            width="1920"
            height="1051"
            viewBox="0 0 1920 1051"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.2852 232.223H760C870.181 232.223 959.5 321.542 959.5 431.723V1444.11H-175.215V431.723L-175.211 430.433C-174.517 320.845 -85.4654 232.223 24.2852 232.223Z"
              stroke="#282828"
            />
            <path
              d="M-85.7148 116.635H650C760.181 116.635 849.5 205.955 849.5 316.135V1444.11H-285.215V316.135C-285.215 205.955 -195.896 116.636 -85.7148 116.635Z"
              stroke="#282828"
            />
            <path
              d="M2010 116.635H1274.29C1164.1 116.635 1074.79 205.955 1074.79 316.135V1444.11H2209.5V316.135C2209.5 205.955 2120.18 116.636 2010 116.635Z"
              stroke="#282828"
            />
            <path
              d="M-195.715 1.04834H540C650.181 1.04834 739.5 90.3675 739.5 200.548V1444.11H-395.215V200.548C-395.215 90.3676 -305.896 1.04835 -195.715 1.04834Z"
              stroke="#282828"
            />
            <path
              d="M2120 1.04834H1384.29C1274.1 1.04834 1184.79 90.3675 1184.79 200.548V1444.11H2319.5V200.548C2319.5 90.3676 2230.18 1.04835 2120 1.04834Z"
              stroke="#282828"
            />
            <path
              d="M1160 232.223H1895.71C2005.9 232.223 2095.21 321.542 2095.21 431.723V1444.11H960.5V431.723L960.504 430.433C961.198 320.845 1050.25 232.223 1160 232.223Z"
              stroke="#282828"
            />
            <path
              d="M392.143 1.41846H542.063"
              stroke="url(#paint0_linear_73_833949)"
              strokeLinecap="round"
            />
            <path
              d="M260.984 116.548H410.905"
              stroke="url(#paint1_linear_73_833949)"
              strokeLinecap="round"
            />
            <path
              d="M30.3906 232.548H180.311"
              stroke="url(#paint2_linear_73_833949)"
              strokeLinecap="round"
            />
            <path
              d="M-104.96 1.41846H44.9607"
              stroke="url(#paint3_linear_73_833949)"
              strokeLinecap="round"
            />
            <path
              d="M740 873.434L740 1023.35"
              stroke="url(#paint4_linear_73_833949)"
              strokeLinecap="round"
            />
            <path
              d="M849.13 612.276L849.13 762.197"
              stroke="url(#paint5_linear_73_833949)"
              strokeLinecap="round"
            />
            <path
              d="M960.13 381.682L960.13 531.602"
              stroke="url(#paint6_linear_73_833949)"
              strokeLinecap="round"
            />
            <path
              d="M740 236.332L740 386.252"
              stroke="url(#paint7_linear_73_833949)"
              strokeLinecap="round"
            />
            <path
              d="M1185.13 873.434L1185.13 1023.35"
              stroke="url(#paint8_linear_73_833949)"
              strokeLinecap="round"
            />
            <path
              d="M1075 612.276L1075 762.197"
              stroke="url(#paint9_linear_73_833949)"
              strokeLinecap="round"
            />
            <path
              d="M1185.13 236.332L1185.13 386.252"
              stroke="url(#paint10_linear_73_833949)"
              strokeLinecap="round"
            />
            <path
              d="M1532.9 1.41846H1382.98"
              stroke="url(#paint11_linear_73_833949)"
              strokeLinecap="round"
            />
            <path
              d="M1664.06 116.548H1514.13"
              stroke="url(#paint12_linear_73_833949)"
              strokeLinecap="round"
            />
            <path
              d="M1894.65 232.548H1744.73"
              stroke="url(#paint13_linear_73_833949)"
              strokeLinecap="round"
            />
            <path
              d="M2030 1.41846H1880.08"
              stroke="url(#paint14_linear_73_833949)"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_73_833949"
                x1="404.76"
                y1="2.41846"
                x2="405.642"
                y2="10.727"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#282828" stopOpacity="0" />
                <stop offset="1" stopColor="#FE6E00" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_73_833949"
                x1="273.602"
                y1="117.548"
                x2="274.483"
                y2="125.857"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#282828" stopOpacity="0" />
                <stop offset="1" stopColor="#FE6E00" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_73_833949"
                x1="43.0078"
                y1="233.548"
                x2="43.8897"
                y2="241.857"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#282828" stopOpacity="0" />
                <stop offset="1" stopColor="#FE6E00" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_73_833949"
                x1="-92.3427"
                y1="2.41846"
                x2="-91.4609"
                y2="10.727"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#282828" stopOpacity="0" />
                <stop offset="1" stopColor="#FE6E00" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_73_833949"
                x1="741"
                y1="886.052"
                x2="749.309"
                y2="886.933"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#282828" stopOpacity="0" />
                <stop offset="1" stopColor="#FE6E00" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_73_833949"
                x1="850.13"
                y1="624.893"
                x2="858.438"
                y2="625.775"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#282828" stopOpacity="0" />
                <stop offset="1" stopColor="#FE6E00" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_73_833949"
                x1="961.13"
                y1="394.299"
                x2="969.438"
                y2="395.181"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#282828" stopOpacity="0" />
                <stop offset="1" stopColor="#FE6E00" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_73_833949"
                x1="741"
                y1="248.949"
                x2="749.309"
                y2="249.831"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#282828" stopOpacity="0" />
                <stop offset="1" stopColor="#FE6E00" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_73_833949"
                x1="1184.13"
                y1="886.052"
                x2="1175.82"
                y2="886.933"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#282828" stopOpacity="0" />
                <stop offset="1" stopColor="#FE6E00" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_73_833949"
                x1="1074"
                y1="624.893"
                x2="1065.69"
                y2="625.775"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#282828" stopOpacity="0" />
                <stop offset="1" stopColor="#FE6E00" />
              </linearGradient>
              <linearGradient
                id="paint10_linear_73_833949"
                x1="1184.13"
                y1="248.949"
                x2="1175.82"
                y2="249.831"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#282828" stopOpacity="0" />
                <stop offset="1" stopColor="#FE6E00" />
              </linearGradient>
              <linearGradient
                id="paint11_linear_73_833949"
                x1="1520.28"
                y1="2.41846"
                x2="1519.4"
                y2="10.727"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#282828" stopOpacity="0" />
                <stop offset="1" stopColor="#FE6E00" />
              </linearGradient>
              <linearGradient
                id="paint12_linear_73_833949"
                x1="1651.44"
                y1="117.548"
                x2="1650.56"
                y2="125.857"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#282828" stopOpacity="0" />
                <stop offset="1" stopColor="#FE6E00" />
              </linearGradient>
              <linearGradient
                id="paint13_linear_73_833949"
                x1="1882.03"
                y1="233.548"
                x2="1881.15"
                y2="241.857"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#282828" stopOpacity="0" />
                <stop offset="1" stopColor="#FE6E00" />
              </linearGradient>
              <linearGradient
                id="paint14_linear_73_833949"
                x1="2017.38"
                y1="2.41846"
                x2="2016.5"
                y2="10.727"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#282828" stopOpacity="0" />
                <stop offset="1" stopColor="#FE6E00" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex absolute top-0 left-0 gap-2 h-screen w-screen px-[4.5vw] items-end justify-between pb-[5vw]">
          <div className="flex flex-col pb-[3.5vw] text-[5vw] w-[50%] gap-2">
            <div className="flex flex-col items-center justify-center overflow-hidden">
              <p className="leading-none font-display text-[#D6D6D6] findText">
                Find the Right
              </p>
            </div>
            <div className="flex flex-col items-center justify-center overflow-hidden">
              <p className="leading-none capitalize font-display text-[#D6D6D6] solutionText">
                Solution for You
              </p>
            </div>
          </div>
          <div className="h-fit overflow-hidden w-[42%]">
            <p className="text-[1vw] leading-[1.6vw] w-[90%] text-[#A8A8A8] overviewDescriptionText">
              Enable seamless digital banking experiences for your customers
              through your mobile app. The Moneylink Super SDK empowers banks
              and fintechs to launch B2B2C services quickly, securely, and at
              scale — all from a single integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
