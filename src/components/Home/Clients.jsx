"use client";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Copy from "../Animations/Copy";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Clients() {
  const svgRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);

  const logos = [
    {
      src: "/assets/icons/clients/fcmb.svg",
      width: "10vw",
      right: "5%",
      top: "5%",
      mobileRight: isTab ?"-5%": "15%",
      mobileTop: "-30%",
      mobileWidth: "18vw",
    },
    {
      src: "/assets/icons/clients/tranzact.svg",
      width: "10vw",
      right: "25%",
      top: "25%",
      mobileRight: isTab ?"25%": "20%",
      mobileTop: "-10%",
      mobileWidth: "15vw",
    },
    {
      src: "/assets/icons/clients/mastercard.svg",
      width: "7vw",
      right: "10%",
      top: "35%",
      mobileRight: "5%",
      mobileTop: "5%",
      mobileWidth: "10vw",
    },
    {
      src: "/assets/icons/clients/access.svg",
      width: "10vw",
      right: "40%",
      top: "50%",
      mobileRight: isTab ?"43%": "50%",
      mobileTop: isTab ?"27%": "20%",
      mobileWidth: "15vw",
    },
    {
      src: "/assets/icons/clients/NIBSS.svg",
      width: "8vw",
      right: "30%",
      top: "63%",
      mobileRight: isTab ?"15%": "30%",
      mobileTop: isTab ?"56%": "35%",
      mobileWidth: "15vw",
    },
    {
      src: "/assets/icons/clients/VISA.svg",
      width: "6vw",
      right: "3%",
      top: "75%",
      mobileRight: isTab ?"-10%": "5%",
      mobileTop: isTab ? "90%": "55%",
      mobileWidth: "15vw",
    },
    {
      src: "/assets/icons/clients/unified.svg",
      width: "10vw",
      right: "20%",
      top: "90%",
      mobileRight: isTab ?"15%": "20%",
      mobileTop: isTab ?"110%": "75%",
      mobileWidth: "18vw",
    },
    {
      src: "/assets/icons/clients/interswitch.svg",
      width: "13vw",
      right: "5%",
      top: "105%",
      mobileRight: isTab ?"15%": "10%",
      mobileTop: isTab ?"110%": "90%",
      mobileWidth: "15vw",
    },
  ];

  const curveIDs = [
    "paint0_linear_252_22056",
    "paint1_linear_252_22056",
    "paint2_linear_252_22056",
    "paint3_linear_252_22056",
    "paint4_linear_252_22056",
    "paint5_linear_252_22056",
    "paint6_linear_252_22056",
  ];
  useEffect(() => {
  const handleResize = () => {
    const width = globalThis.innerWidth;

    setIsMobile(width <= 768);
    setIsTab(width > 768 && width <= 1024);
  };

  handleResize(); 
  globalThis.addEventListener("resize", handleResize);

  return () => globalThis.removeEventListener("resize", handleResize);
}, []);
  useGSAP(() => {
    const activeAnimsRef = { current: [] };
    const DURATION = 3;
    const REVEAL_DURATION = 4;
    curveIDs.forEach((id) => {
      const gradient = document.getElementById(id);
      if (gradient) {
        gsap.set(gradient, {
          attr: { gradientTransform: "translate(-1000, 0)" },
        });
      }
    });
    const lineGradient = document.getElementById("paint7_linear_252_22056");
    if (lineGradient) {
      gsap.set(lineGradient, {
        attr: { gradientTransform: "translate(-1920, 0)" },
      });
    }
    gsap.set("#svgMask rect", {
      x: "-100%",
    });

    const animateRandomCurves = () => {
      activeAnimsRef.current.forEach((anim) => anim.kill());
      activeAnimsRef.current = [];
      const shuffled = [...curveIDs].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, Math.floor(Math.random() * 2) + 2);

      curveIDs.forEach((id) => {
        const gradient = document.getElementById(id);
        if (gradient && !selected.includes(id)) {
          gsap.set(gradient, {
            attr: { gradientTransform: "translate(-1000, 0)" },
          });
        }
      });

      selected.forEach((id) => {
        const gradient = document.getElementById(id);
        if (gradient) {
          const anim = gsap.fromTo(
            gradient,
            {
              attr: { gradientTransform: "translate(-1200, 0)" },
            },
            {
              attr: { gradientTransform: "translate(1200, 0)" },
              duration: DURATION,
              ease: "linear",
              delay: 1.15,
            }
          );
          activeAnimsRef.current.push(anim);
        }
      });
    };

    const startMainAnimation = () => {
      if (lineGradient) {
        const tl = gsap.timeline({
          repeat: -1,
          onRepeat: animateRandomCurves,
          onStart: animateRandomCurves,
        });

        tl.fromTo(
          lineGradient,
          {
            attr: { gradientTransform: "translate(-1000, 0)" },
          },
          {
            attr: { gradientTransform: "translate(1000, 0)" },
            duration: DURATION,
            ease: "linear",
          }
        );
      }
    };
    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#clients",
        start: "top 80%", // You can adjust this
        once: true, // Run only once
      },
    });

    masterTimeline
      .fromTo(
        "#svgMask rect",
        {
          x: "-100%",
        },
        {
          x: "0%",
          duration: REVEAL_DURATION,
          ease: "power2.out",
        }
      )
      .call(startMainAnimation, null, `+=${-0.01}`);
  }, []);

  const container = useRef(null);
  const logosRef = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      logosRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay:1.2,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '#clients',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    // gsap.to(".clients-transition",{
    //   backgroundColor:"#F5F5F5",
    //   scrollTrigger:{
    //     trigger:"#blogs",
    //     start:"30% 90%",
    //     end:"30% 70%",
    //     scrub:true,
    //     markers:true,
    //   }
    // })
  }, []);

  return (
    <section
      id="clients"
      ref={container}
      className="h-[130vh] w-screen overflow-hidden flex items-center justify-center relative  pb-[4vw] max-sm:py-[15%]  max-md:h-[150vh] max-sm:h-[110vh]"
    >
      <div className="w-full h-full max-sm:h-[100vw] max-md:h-[100vh] max-sm:w-[100vw] max-md:scale-[2] max-md:translate-x-[-40%] max-sm:scale-[2.2] max-sm:translate-x-[-50%] max-sm:translate-y-[30%]">
        <svg
          ref={svgRef}
          className="w-full h-full"
          width="1920"
          height="1296"
          viewBox="0 0 1920 1296"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <mask id="svgMask">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
            </mask>

            <linearGradient
              id="paint0_linear_252_22056"
              x1="1783.53"
              y1="24.0547"
              x2="1559.83"
              y2="24.0547"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.4999" stopColor="#282828" stopOpacity="0" />
              <stop offset="0.5" stopColor="#FE6E00" />
              <stop offset="1" stopColor="#282828" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_252_22056"
              x1="1863.5"
              y1="113"
              x2="1658"
              y2="113"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#282828" stopOpacity="0" />
              <stop stopColor="#FE6E00" />
              <stop offset="0.497746" stopColor="#282828" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_252_22056"
              x1="1673"
              y1="210"
              x2="1454"
              y2="210"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.4999" stopColor="#282828" stopOpacity="0" />
              <stop offset="0.5" stopColor="#FE6E00" />
              <stop offset="1" stopColor="#282828" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_252_22056"
              x1="1783.53"
              y1="299.941"
              x2="1559.83"
              y2="299.941"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#282828" stopOpacity="0" />
              <stop stopColor="#FE6E00" />
              <stop offset="0.497746" stopColor="#282828" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_252_22056"
              x1="1673"
              y1="389.364"
              x2="1454"
              y2="389.364"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.4999" stopColor="#282828" stopOpacity="0" />
              <stop offset="0.5" stopColor="#FE6E00" />
              <stop offset="1" stopColor="#282828" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_252_22056"
              x1="1863.96"
              y1="471.646"
              x2="1658.32"
              y2="471.646"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#282828" stopOpacity="0" />
              <stop stopColor="#FE6E00" />
              <stop offset="0.497746" stopColor="#282828" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_252_22056"
              x1="1783.53"
              y1="553.889"
              x2="1559.83"
              y2="553.889"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.4999" stopColor="#282828" stopOpacity="0" />
              <stop offset="0.5" stopColor="#FE6E00" />
              <stop offset="1" stopColor="#282828" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_252_22056"
              x1="721.564"
              y1="649.371"
              x2="1915.5"
              y2="648.991"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#282828" stopOpacity="0" />
              <stop offset="0.19654" stopColor="#FE6E00" />
              <stop offset="0.196544" stopColor="#934B14" stopOpacity="0.5" />
              <stop offset="0.196548" stopColor="#282828" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_252_22056">
              <rect
                width="1920"
                height="1296"
                fill="white"
                transform="matrix(-1 0 0 -1 1920 1296)"
              />
            </clipPath>
          </defs>

          <g clipPath="url(#clip0_252_22056)" mask="url(#svgMask)">
            <path
              d="M1919.5 24.0547L1814.25 24.0547C1469.64 24.0547 1190.28 303.412 1190.28 648.018V648.018C1190.28 992.623 1469.64 1271.98 1814.25 1271.98H1919.5"
              stroke="#282828"
            />
            <path
              d="M1919.5 24.0547L1814.25 24.0547C1469.64 24.0547 1190.28 303.412 1190.28 648.018V648.018C1190.28 992.623 1469.64 1271.98 1814.25 1271.98H1919.5"
              stroke="url(#paint0_linear_252_22056)"
              strokeLinecap="round"
            />
            <path
              d="M1919.5 113.251H1725.05C1429.71 113.251 1190.28 352.675 1190.28 648.019V648.019C1190.28 943.363 1429.71 1182.79 1725.05 1182.79H1919.5"
              stroke="#282828"
            />
            <path
              d="M1919.5 113.251H1725.05C1429.71 113.251 1190.28 352.675 1190.28 648.019V648.019C1190.28 943.363 1429.71 1182.79 1725.05 1182.79H1919.5"
              stroke="url(#paint1_linear_252_22056)"
              strokeLinecap="round"
            />
            <path
              d="M1919.5 210.347L1627.96 210.346C1386.24 210.346 1190.28 406.298 1190.28 648.017V648.017C1190.28 889.736 1386.24 1085.69 1627.96 1085.69H1919.5"
              stroke="#282828"
            />
            <path
              d="M1919.5 210.347L1627.96 210.346C1386.24 210.346 1190.28 406.298 1190.28 648.017V648.017C1190.28 889.736 1386.24 1085.69 1627.96 1085.69H1919.5"
              stroke="url(#paint2_linear_252_22056)"
              strokeLinecap="round"
            />
            <path
              d="M1919.5 299.941L1538.33 299.942C1346.11 299.942 1190.28 455.767 1190.28 647.986V647.986C1190.28 840.206 1346.11 996.03 1538.33 996.03H1919.5"
              stroke="#282828"
            />
            <path
              d="M1919.5 299.941L1538.33 299.942C1346.11 299.942 1190.28 455.767 1190.28 647.986V647.986C1190.28 840.206 1346.11 996.03 1538.33 996.03H1919.5"
              stroke="url(#paint3_linear_252_22056)"
              strokeLinecap="round"
            />
            <path
              d="M1919.5 389.568L1448.7 389.569C1305.98 389.569 1190.28 505.266 1190.28 647.985V647.985C1190.28 790.704 1305.98 906.401 1448.7 906.401H1919.5"
              stroke="#282828"
            />
            <path
              d="M1919.5 389.568L1448.7 389.569C1305.98 389.569 1190.28 505.266 1190.28 647.985V647.985C1190.28 790.704 1305.98 906.401 1448.7 906.401H1919.5"
              stroke="url(#paint4_linear_252_22056)"
              strokeLinecap="round"
            />
            <path
              d="M1920 471.729L1366.54 471.729C1269.2 471.729 1190.28 550.642 1190.28 647.987V647.987C1190.28 745.331 1269.2 824.244 1366.54 824.244H1919.5"
              stroke="#282828"
            />
            <path
              d="M1920 471.729L1366.54 471.729C1269.2 471.729 1190.28 550.642 1190.28 647.987V647.987C1190.28 745.331 1269.2 824.244 1366.54 824.244H1919.5"
              stroke="url(#paint5_linear_252_22056)"
              strokeLinecap="round"
            />
            <path
              d="M1919.5 553.889L1281.34 553.89C1231.05 553.89 1190.28 594.657 1190.28 644.946V644.946C1190.28 695.235 1231.05 736.002 1281.34 736.002H1919.5"
              stroke="#282828"
            />
            <path
              d="M1919.5 553.889L1281.34 553.89C1231.05 553.89 1190.28 594.657 1190.28 644.946V644.946C1190.28 695.235 1231.05 736.002 1281.34 736.002H1919.5"
              stroke="url(#paint6_linear_252_22056)"
              strokeLinecap="round"
            />
            <line
              x1="-12.8145"
              y1="648.871"
              x2="2159.68"
              y2="648.871"
              stroke="#282828"
            />
            <line
              x1="-12.3145"
              y1="648.871"
              x2="2159.18"
              y2="648.871"
              stroke="url(#paint7_linear_252_22056)"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>

      <div className="absolute w-screen h-screen max-sm:items-start max-md:items-center max-md:flex-col  top-0 left-0 flex max-sm:flex-col items-center justify-center max-sm:px-[3.5vw]">
        <div className="w-1/2 max-md:w-[90%] max-sm:w-[90%] h-full px-[3.75vw] flex flex-col pt-[12vw] items-start justify-start">
          <Copy>
            <h2 className="text-[5.2vw] clientText font-display font-light text-[#D6D6D6] leading-[1.15] max-md:text-[6vw] max-md:w-[70%] w-[90%] max-sm:w-full max-sm:text-head-100">
              Clients & Partners We Work Alongside
            </h2>
          </Copy>
        </div>
        <div className="w-1/2 relative px-20 max-sm:pt-0 h-full flex flex-col items-end justify-between max-sm:w-full  max-sm:px-0">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`absolute h-auto  flex items-end justify-end logoanim ${
                index == 1 ? "max-sm:!w-[12vw]" : "max-sm:!w-[22vw] max-md:!w-[20vw]"
              }`}
              style={{
                width: logo.width,
                right: (isMobile || isTab) ? logo.mobileRight : logo.right,
                top: (isMobile || isTab) ? logo.mobileTop : logo.top,
              }}
            >
              <Image
                src={logo.src}
                ref={(el) => (logosRef.current[index] = el)}
                alt={`client-logo-${index + 1}`}
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
