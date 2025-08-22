"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Logo } from "../Icons";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useGSAP } from "@gsap/react";
import HamButton from "../Buttons/HamButton";
import SocialMediaBtn from "@/components/Footer/SocialMediaBtn";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../Icons";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useLenis } from "lenis/react";
import ScrambleText from "../h/ScrambleText";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const socials = [
  {
    icon: <FacebookIcon />,
    link: "/#",
  },
  {
    icon: <LinkedinIcon />,
    link: "/#",
  },
  {
    icon: <InstagramIcon />,
    link: "/#",
  },
  {
    icon: <TwitterIcon />,
    link: "/#",
  },
];

const links = [
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Solutions",
    link: "/solutions",
  },
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "Resources",
    link: "/blog",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
];

const links2 = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Solutions",
    link: "/solutions",
  },
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "Resources",
    link: "/blog",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
];

const solutions = [
  {
    name: "Digital Account",
    link: "/solutions/digital-accounts",
  },
  {
    name: "Merchant Acquiring",
    link: "/solutions/merchant-acquiring",
  },
  {
    name: "Card Issuing",
    link: "/solutions//card-issuing",
  },
  {
    name: "Digital Lending",
    link: "/solutions/digital-lending",
  },
  {
    name: "Dual Transaction Service",
    link: "/solutions/dual-transaction-service",
  },
  {
    name: "KYC & Soft Token",
    link: "/solutions/kyc-and-soft-token",
  },
  {
    name: "Loyalty Management",
    link: "/solutions/loyalty-management",
  },
]

const products = [
  {
    name: "Balance",
    link: "/products/balance"
  },
  {
    name: "ScanPay",
    link: "/products/scanpay"
  },
  {
    name: "TapPay",
    link: "/products/tap-pay"
  },
  {
    name: "InstaCard",
    link: "/products/instacard"
  },
  {
    name: "snapCred",
    link: "/products/snapcred"
  },
  {
    name: "DUO",
    link: "/products/duo"
  },
  {
    name: "Verifyed",
    link: "/products/verifyed"
  },
  {
    name: "Reward+",
    link: "/products/reward"
  },
  {
    name: "ChatBox",
    link: "/products/chatbox"
  },
]

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isInverted, setIsInverted] = useState(false);
  const [isWhite, setIsWhite] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const pathname = usePathname();
  const lenis = useLenis();
  const navigationRef = useRef(null);

  const preloaderShown = typeof window !== "undefined" ? sessionStorage.getItem("preloaderShown") : null;
  const baseDelay = preloaderShown ? 0.5 : 7.5;

  const handleMenuButtonClick = () => {
    setButtonDisabled(true);
    if (globalThis.innerWidth < 541) {
      lenis.stop();
    }

    setMenuOpen((prevState) => {
      const newState = !prevState;

      if (!newState && globalThis.innerWidth < 541) {
        lenis.start();
      }

      return newState;
    });

    setTimeout(() => {
      setButtonDisabled(false);
    }, 700);
  };

  useEffect(() => {
    const navBgT = navigationRef.current.querySelectorAll('.nav-bg-t');
    const navBgB = navigationRef.current.querySelectorAll('.nav-bg-b');
    const links = navigationRef.current.querySelectorAll(".m-nav-links");

    if (menuOpen) {
      gsap.timeline()
        .to([navBgT, navBgB], {
          y: "0",
          duration: 1,
          ease: "power2.out",
        })
        .to(links, {
          y: "0",
          opacity: 1,
          delay: -0.4,
          ease: "power2.out",
          stagger: 0.05
        })
    } else {
      gsap.timeline()
        .to(links, {
          y: "100%",
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
        })
        .to(navBgT, {
          y: "-100%",
          duration: 1,
          delay: -0.5,
          ease: "power2.out",
        })
        .to(navBgB, {
          y: "100%",
          duration: 1,
          ease: "power2.out",
        }, "<")
    }
  }, [menuOpen]);

  // useGSAP(() => {
  //   const triggers = [];
  //   document.querySelectorAll("[data-theme]").forEach((section) => {
  //     const theme = section.dataset.theme;

  //     const trigger = ScrollTrigger.create({
  //       trigger: section,
  //       start: "top top",
  //       end: "bottom top",
  //       onEnter: () => {
  //         if (theme === "orange") setIsInverted(true);
  //         if (theme === "white") setIsWhite(true);
  //       },
  //       onEnterBack: () => {
  //         if (theme === "orange") setIsInverted(true);
  //         if (theme === "white") setIsWhite(true);
  //       },
  //       onLeave: () => {
  //         if (theme === "orange") setIsInverted(false);
  //         if (theme === "white") setIsWhite(false);
  //       },
  //       onLeaveBack: () => {
  //         if (theme === "orange") setIsInverted(false);
  //         if (theme === "white") setIsWhite(false);
  //       },
  //     });

  //     triggers.push(trigger);
  //   });
  // }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // gsap.fromTo(
      //   "#inner-nav",
      //   {
      //     yPercent: -110,
      //   },
      //   {
      //     yPercent: 0,
      //     duration: 1,
      //     delay: baseDelay,
      //   }
      // );
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (hoveredItem) {
        return;
      }
      const currentY = window.scrollY;
      if (currentY > lastY && currentY > 100) {
        setHidden(true);
      } else if (currentY < lastY) {
        setHidden(false);
      }
      setLastY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY, hoveredItem]);

  const solutionsDropdown = (
    <div 
      className="absolute top-full mt-3 z-10"
      ref={(el) => {
        if (el) {
          // Check if GSAP is available
          if (typeof gsap !== 'undefined' || (window && window.gsap)) {
            const GSAP = window.gsap || gsap;
            const tl = GSAP.timeline();
            const svg = el.querySelector('.dropdown-svg');
            const items = el.querySelectorAll('.dropdown-item');
            
            if (svg && items.length > 0) {
              GSAP.set(svg, { 
                height: 0,
                opacity: 1
              });
              GSAP.set(items, { 
                opacity: 0,
                y: 20
              });
             
              tl.to(svg, { 
                height: '100%',
                duration: 0.5,
                ease: 'power2.out'
              });
              tl.to(items, {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.05,
                ease: 'power2.out'
              }, '-=0.1'); 
            }
          }
        }
      }}
    >
      {/* Hover spacer */}
      <div className="h-[2vw] w-full" />
  
      <div className="relative w-[20vw]">
        {/* SVG Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg 
            className="h-full w-full dropdown-svg" 
            width="367" 
            height="363" 
            viewBox="0 0 367 363" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <foreignObject x="-79.3594" y="-79.9844" width="525.672" height="522.578">
              <div xmlns="http://www.w3.org/1999/xhtml" style={{ 
                backdropFilter: 'blur(40px)', 
                clipPath: 'url(#bgblur_0_182_10_clip_path)', 
                height: '100%', 
                width: '100%' 
              }}></div>
            </foreignObject>
            <g data-figma-bg-blur-radius="80">
              <mask id="path-1-inside-1_182_10" fill="white">
                <path d="M346.311 0.015625C357.356 0.015625 366.31 8.97022 366.311 20.0156V279.379C366.311 284.865 364.057 290.11 360.077 293.887L293.46 357.102C289.744 360.629 284.816 362.595 279.693 362.595H20.6406C9.59493 362.595 0.640625 353.64 0.640625 342.595V20.0156C0.640961 8.97022 9.59514 0.015625 20.6406 0.015625H346.311Z" />
              </mask>
              <path d="M346.311 0.015625C357.356 0.015625 366.31 8.97022 366.311 20.0156V279.379C366.311 284.865 364.057 290.11 360.077 293.887L293.46 357.102C289.744 360.629 284.816 362.595 279.693 362.595H20.6406C9.59493 362.595 0.640625 353.64 0.640625 342.595V20.0156C0.640961 8.97022 9.59514 0.015625 20.6406 0.015625H346.311Z" fill="black" fillOpacity="0.32" />
              <path d="M366.311 20.0156L367.311 20.0156L367.311 20.0156L366.311 20.0156ZM0.640625 20.0156L-0.359375 20.0156V20.0156H0.640625ZM293.46 357.102L294.148 357.828L293.46 357.102ZM360.077 293.887L359.389 293.161L360.077 293.887ZM346.311 0.015625V1.01562C356.804 1.01562 365.31 9.52248 365.311 20.0157L366.311 20.0156L367.311 20.0156C367.31 8.41796 357.908 -0.984375 346.311 -0.984375V0.015625ZM366.311 20.0156H365.311V279.379H366.311H367.311V20.0156H366.311ZM360.077 293.887L359.389 293.161L292.771 356.377L293.46 357.102L294.148 357.828L360.766 294.612L360.077 293.887ZM279.693 362.595V361.595H20.6406V362.595V363.595H279.693V362.595ZM20.6406 362.595V361.595C10.1472 361.595 1.64062 353.088 1.64062 342.595H0.640625H-0.359375C-0.359375 354.193 9.04265 363.595 20.6406 363.595V362.595ZM0.640625 342.595H1.64062V20.0156H0.640625H-0.359375V342.595H0.640625ZM0.640625 20.0156L1.64062 20.0157C1.64094 9.52248 10.1475 1.01562 20.6406 1.01562V0.015625V-0.984375C9.04282 -0.984375 -0.359022 8.41795 -0.359375 20.0156L0.640625 20.0156ZM20.6406 0.015625V1.01562H346.311V0.015625V-0.984375H20.6406V0.015625ZM293.46 357.102L292.771 356.377C289.241 359.727 284.56 361.595 279.693 361.595V362.595V363.595C285.072 363.595 290.246 361.531 294.148 357.828L293.46 357.102ZM366.311 279.379H365.311C365.311 284.591 363.17 289.574 359.389 293.161L360.077 293.887L360.766 294.612C364.944 290.647 367.311 285.139 367.311 279.379H366.311Z" fill="#C1C1C1" fillOpacity="0.38" mask="url(#path-1-inside-1_182_10)" />
            </g>
            <defs>
              <clipPath id="bgblur_0_182_10_clip_path" transform="translate(79.3594 79.9844)">
                <path d="M346.311 0.015625C357.356 0.015625 366.31 8.97022 366.311 20.0156V279.379C366.311 284.865 364.057 290.11 360.077 293.887L293.46 357.102C289.744 360.629 284.816 362.595 279.693 362.595H20.6406C9.59493 362.595 0.640625 353.64 0.640625 342.595V20.0156C0.640961 8.97022 9.59514 0.015625 20.6406 0.015625H346.311Z" />
              </clipPath>
            </defs>
          </svg>
        </div>
  
        {/* Foreground content */}
        <div
          className={`relative z-10 p-[2vw] ${isInverted ? "text-black" : "text-[#D6D6D6]"}`}
        >
          <ul className={`space-y-[1vw] ${isInverted ? "text-black" : "text-[#D6D6D6]"}`}>
            {solutions.map((item, index) => {
              const isActive = pathname === item.link;
              return (
                <li 
                  key={index} 
                  className="group dropdown-item"
                >
                  <Link href={item.link} className="flex items-center gap-[0.5vw] justify-start">
                    <div
                      style={{ animation: "pulse .5s infinite" }}
                      className={`w-[.3vw] ${isActive ? "h-[1vw]" : "h-[0vw] group-hover:h-[1vw]"}
                        transition-all duration-200 
                        ${isInverted ? "bg-white" : "group-hover:bg-orange-500"} 
                        ${isActive && !isInverted ? "bg-orange-500" : ""}`}
                    ></div>
                    <span className="uppercase text-[.9vw] text-left">
                      <ScrambleText onHover={true} centerd speed={0.5} className="min-w-[8vw]">
                        {item.name}
                      </ScrambleText>
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
  const midIndex = Math.ceil(products.length / 2);
  const firstHalf = products.slice(0, midIndex);
  const secondHalf = products.slice(midIndex);


  const productsDropdown = (
    <div 
      className="absolute top-full mt-3 z-0"
      ref={(el) => {
        if (el) {
          // Check if GSAP is available
          if (typeof gsap !== 'undefined' || (window && window.gsap)) {
            const GSAP = window.gsap || gsap;
            const tl = GSAP.timeline();
            
            const svg = el.querySelector('.dropdown-svg');
            const items = el.querySelectorAll('.dropdown-item');
            
            if (svg && items.length > 0) {
              GSAP.set(svg, { 
                height: 0,
                opacity: 1
              });
              GSAP.set(items, { 
                opacity: 0,
                y: 20
              });
              tl.to(svg, { 
                height: '100%',
                duration: 0.5,
                ease: 'power2.out'
              });
              tl.to(items, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.05,
                ease: 'power2.out'
              }, '-=0.1');
            }
          }
        }
      }}
    >
      {/* Hover spacer */}
      <div className="h-[2vw] w-full" />
  
      <div className="relative w-[20vw]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div style={{ clipPath: "inset(0% 0% 0% 0%)" }} className="h-full w-full">
            <svg 
              className="h-full w-full dropdown-svg" 
              width="392" 
              height="346" 
              viewBox="0 0 392 346" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <foreignObject x="-79.3594" y="-79.4844" width="551.234" height="504.828">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ 
                  backdropFilter: 'blur(40px)', 
                  clipPath: 'url(#bgblur_0_182_2_clip_path)', 
                  height: '100%', 
                  width: '100%' 
                }}></div>
              </foreignObject>
              <g data-figma-bg-blur-radius="80">
                <mask id="path-1-inside-1_182_2" fill="white">
                  <path d="M371.879 0.515625C382.924 0.515626 391.879 9.47022 391.879 20.5156V267.084C391.879 272.57 389.625 277.815 385.646 281.592L324.247 339.855C320.531 343.382 315.603 345.348 310.48 345.348H20.6406C9.59501 345.348 0.640749 336.393 0.640625 325.348V20.5156C0.640977 9.47023 9.59515 0.515626 20.6406 0.515625H371.879Z" />
                </mask>
                <path d="M371.879 0.515625C382.924 0.515626 391.879 9.47022 391.879 20.5156V267.084C391.879 272.57 389.625 277.815 385.646 281.592L324.247 339.855C320.531 343.382 315.603 345.348 310.48 345.348H20.6406C9.59501 345.348 0.640749 336.393 0.640625 325.348V20.5156C0.640977 9.47023 9.59515 0.515626 20.6406 0.515625H371.879Z" fill="black" fillOpacity="0.32" />
                <path d="M371.879 0.515625L371.879 -0.484375H371.879V0.515625ZM391.879 20.5156L392.879 20.5156L392.879 20.5156L391.879 20.5156ZM20.6406 345.348L20.6406 346.348H20.6406V345.348ZM0.640625 325.348L-0.359375 325.348L-0.359375 325.348L0.640625 325.348ZM0.640625 20.5156L-0.359375 20.5156V20.5156H0.640625ZM20.6406 0.515625L20.6406 -0.484375L20.6406 -0.484375L20.6406 0.515625ZM324.247 339.855L323.558 339.13L324.247 339.855ZM385.646 281.592L386.334 282.317L385.646 281.592ZM371.879 0.515625L371.879 1.51562C382.372 1.51563 390.879 10.0225 390.879 20.5157L391.879 20.5156L392.879 20.5156C392.879 8.91796 383.477 -0.484374 371.879 -0.484375L371.879 0.515625ZM391.879 20.5156H390.879V267.084H391.879H392.879V20.5156H391.879ZM385.646 281.592L384.957 280.866L323.558 339.13L324.247 339.855L324.935 340.581L386.334 282.317L385.646 281.592ZM310.48 345.348V344.348H20.6406V345.348V346.348H310.48V345.348ZM20.6406 345.348L20.6406 344.348C10.1473 344.348 1.64074 335.841 1.64062 325.348L0.640625 325.348L-0.359375 325.348C-0.359245 336.946 9.04271 346.348 20.6406 346.348L20.6406 345.348ZM0.640625 325.348H1.64062V20.5156H0.640625H-0.359375V325.348H0.640625ZM0.640625 20.5156L1.64062 20.5157C1.64096 10.0225 10.1475 1.51563 20.6406 1.51562L20.6406 0.515625L20.6406 -0.484375C9.04283 -0.484374 -0.359005 8.91797 -0.359375 20.5156L0.640625 20.5156ZM20.6406 0.515625V1.51562H371.879V0.515625V-0.484375H20.6406V0.515625ZM324.247 339.855L323.558 339.13C320.028 342.48 315.347 344.348 310.48 344.348V345.348V346.348C315.859 346.348 321.033 344.283 324.935 340.581L324.247 339.855ZM391.879 267.084H390.879C390.879 272.296 388.738 277.279 384.957 280.866L385.646 281.592L386.334 282.317C390.513 278.352 392.879 272.844 392.879 267.084H391.879Z" fill="#C1C1C1" fillOpacity="0.38" mask="url(#path-1-inside-1_182_2)" />
              </g>
              <defs>
                <clipPath id="bgblur_0_182_2_clip_path" transform="translate(79.3594 79.4844)">
                  <path d="M371.879 0.515625C382.924 0.515626 391.879 9.47022 391.879 20.5156V267.084C391.879 272.57 389.625 277.815 385.646 281.592L324.247 339.855C320.531 343.382 315.603 345.348 310.48 345.348H20.6406C9.59501 345.348 0.640749 336.393 0.640625 325.348V20.5156C0.640977 9.47023 9.59515 0.515626 20.6406 0.515625H371.879Z" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
  
        <div
          className={`relative z-10 py-[2vw] px-[3vw] ${isInverted ? "text-black" : "text-[#D6D6D6]"}`}
        >
          <div className="flex">
            {/* First Half */}
            <ul className={`space-y-[1vw] ${isInverted ? "text-black" : "text-[#D6D6D6]"}`}>
              {firstHalf.map((item, index) => {
                const isActive = pathname === item.link;
                return (
                  <li key={index} className="group dropdown-item">
                    <Link href={item.link} className="flex items-center gap-[0.5vw] justify-start">
                      <div
                        style={{ animation: "pulse .5s infinite" }}
                        className={`w-[.3vw] ${isActive ? "h-[1vw]" : "h-[0vw] group-hover:h-[1vw]"}
                          transition-all duration-200 
                          ${isInverted ? "bg-white" : "group-hover:bg-orange-500"} 
                          ${isActive && !isInverted ? "bg-orange-500" : ""}`}
                      ></div>
                      <span className="uppercase text-[.9vw] text-left">
                        <ScrambleText onHover={true} centerd speed={0.5} className="min-w-[8vw]">
                          {item.name}
                        </ScrambleText>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
  
            {/* Second Half */}
            <ul className={`space-y-[1vw] ${isInverted ? "text-black" : "text-[#D6D6D6]"}`}>
              {secondHalf.map((item, index) => {
                const isActive = pathname === item.link;
                return (
                  <li key={index} className="group dropdown-item">
                    <Link href={item.link} className="flex items-center gap-[0.5vw] justify-start">
                      <div
                        style={{ animation: "pulse .5s infinite" }}
                        className={`w-[.3vw] ${isActive ? "h-[1vw]" : "h-[0vw] group-hover:h-[1vw]"}
                          transition-all duration-200 
                          ${isInverted ? "bg-white" : "group-hover:bg-orange-500"} 
                          ${isActive && !isInverted ? "bg-orange-500" : ""}`}
                      ></div>
                      <span className="uppercase text-[.9vw] text-left">
                        <ScrambleText onHover={true} centerd speed={0.5} className="min-w-[8vw]">
                          {item.name}
                        </ScrambleText>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header
        id="nav"
        className={`fixed px-[2.55vw] py-[1.51vw] top-0 left-0 w-screen  z-[300] transform transition-transform   duration-300  max-sm:px-[6vw] max-md:px-[6vw] max-md:py-4 max-sm:bg-black/40 max-md:backdrop-blur-[1vw]
 ${hidden ? "-translate-y-full" : "translate-y-0"} ${menuOpen ? "max-md:backdrop-blur-none" : ""}`}
      >
        <div id="inner-nav" className="inner-nav">
          <div
            id="header-inner"
            className="relative flex items-center justify-center h-full w-full px-[1.25vw] py-[1.7vw] max-md:p-0"
          >
            {/* Background SVG */}
            <div className="w-full h-auto absolute top-0 left-0 max-sm:hidden max-md:hidden">
              <svg
                className="w-full h-auto"
                width="1818"
                height="135"
                viewBox="0 0 1818 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <foreignObject
                  x="-40"
                  y="-39.6064"
                  width="1898"
                  height="213.852"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      backdropFilter: "blur(20px)",
                      clipPath: "url(#bgblur_0_73_833892_clip_path)",
                      height: "100%",
                      width: "100%",
                      backgroundColor:
                        isInverted || isWhite
                          ? "rgba(0, 0, 0, 0.3)"
                          : "rgba(0, 0, 0, 0.3)",
                    }}
                  />
                </foreignObject>

                <g data-figma-bg-blur-radius="40">
                  <mask id="path-1-inside-1_73_833892" fill="white">
                    <path d="M257.05 0.393555C263.207 0.393607 269.021 3.22969 272.812 8.08203L291.762 32.3438C291.983 32.6265 292.316 32.7998 292.675 32.7998H1525.32C1525.68 32.7998 1526.02 32.6265 1526.24 32.3438L1545.19 8.08203C1548.98 3.22969 1554.79 0.393607 1560.95 0.393555H1798C1809.05 0.393559 1818 9.34798 1818 20.3936V44.6553C1818 47.3603 1818 50.0947 1818 52.7998V114.245C1818 125.291 1809.05 134.245 1798 134.245H20C8.95445 134.245 0.000222773 125.291 0 114.245V52.7998C4.039e-05 50.0948 6.447e-05 47.3603 0 44.6553V20.3936C0.00014365 9.34798 8.9544 0.393559 20 0.393555H257.05Z" />
                  </mask>
                  <path
                    d="M257.05 0.393555C263.207 0.393607 269.021 3.22969 272.812 8.08203L291.762 32.3438C291.983 32.6265 292.316 32.7998 292.675 32.7998H1525.32C1525.68 32.7998 1526.02 32.6265 1526.24 32.3438L1545.19 8.08203C1548.98 3.22969 1554.79 0.393607 1560.95 0.393555H1798C1809.05 0.393559 1818 9.34798 1818 20.3936V44.6553C1818 47.3603 1818 50.0947 1818 52.7998V114.245C1818 125.291 1809.05 134.245 1798 134.245H20C8.95445 134.245 0.000222773 125.291 0 114.245V52.7998C4.039e-05 50.0948 6.447e-05 47.3603 0 44.6553V20.3936C0.00014365 9.34798 8.9544 0.393559 20 0.393555H257.05Z"
                    fill="#AAAAAA"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M257.05 0.393555V-0.606445V0.393555ZM272.812 8.08203L273.6 7.46647V7.46645L272.812 8.08203ZM1545.19 8.08203L1544.4 7.46645V7.46647L1545.19 8.08203ZM1560.95 0.393555V-0.606445V0.393555ZM1798 0.393555V-0.606445V0.393555ZM1818 20.3936H1819V20.3935L1818 20.3936ZM1818 114.245L1819 114.245V114.245H1818ZM20 134.245V135.245V134.245ZM0 114.245H-1V114.245L0 114.245ZM0 20.3936L-1 20.3935V20.3936H0ZM20 0.393555V-0.606445V0.393555ZM257.05 0.393555V1.39355C262.899 1.3936 268.423 4.0879 272.023 8.69761L272.812 8.08203L273.6 7.46645C269.62 2.37149 263.515 -0.60639 257.05 -0.606445V0.393555ZM272.812 8.08203L272.023 8.69759L290.974 32.9593L291.762 32.3438L292.55 31.7282L273.6 7.46647L272.812 8.08203ZM292.675 32.7998V33.7998H1525.32V32.7998V31.7998H292.675V32.7998ZM1526.24 32.3438L1527.03 32.9593L1545.98 8.69759L1545.19 8.08203L1544.4 7.46647L1525.45 31.7282L1526.24 32.3438ZM1545.19 8.08203L1545.98 8.69761C1549.58 4.0879 1555.1 1.3936 1560.95 1.39355V0.393555V-0.606445C1554.49 -0.60639 1548.38 2.37149 1544.4 7.46645L1545.19 8.08203ZM1560.95 0.393555V1.39355H1798V0.393555V-0.606445H1560.95V0.393555ZM1798 0.393555V1.39355C1808.49 1.39356 1817 9.90026 1817 20.3936L1818 20.3936L1819 20.3935C1819 8.79571 1809.6 -0.606441 1798 -0.606445V0.393555ZM1818 20.3936H1817V44.6553H1818H1819V20.3936H1818ZM1818 52.7998H1817V114.245H1818H1819V52.7998H1818ZM1818 114.245L1817 114.245C1817 124.738 1808.49 133.245 1798 133.245V134.245V135.245C1809.6 135.245 1819 125.843 1819 114.245L1818 114.245ZM1798 134.245V133.245H20V134.245V135.245H1798V134.245ZM20 134.245V133.245C9.50675 133.245 1.00021 124.738 1 114.245L0 114.245L-1 114.245C-0.999766 125.843 8.40215 135.245 20 135.245V134.245ZM0 114.245H1V52.7998H0H-1V114.245H0ZM0 44.6553H1V20.3936H0H-1V44.6553H0ZM0 20.3936L1 20.3936C1.00014 9.90026 9.50669 1.39356 20 1.39355V0.393555V-0.606445C8.4021 -0.606441 -0.999849 8.79571 -1 20.3935L0 20.3936ZM20 0.393555V1.39355H257.05V0.393555V-0.606445H20V0.393555ZM1818 44.6553L1817 44.6553C1817 47.3603 1817 50.0947 1817 52.7998L1818 52.7998L1819 52.7998C1819 50.0947 1819 47.3603 1819 44.6553L1818 44.6553ZM1525.32 32.7998V33.7998C1526.01 33.7998 1526.63 33.4687 1527.03 32.9593L1526.24 32.3438L1525.45 31.7282C1525.41 31.7844 1525.36 31.7998 1525.32 31.7998V32.7998ZM0 52.7998L1 52.7998C1.00004 50.0948 1.00006 47.3603 1 44.6553L0 44.6553L-1 44.6553C-0.999936 47.3603 -0.99996 50.0948 -1 52.7998L0 52.7998ZM291.762 32.3438L290.974 32.9593C291.371 33.4687 291.988 33.7998 292.675 33.7998V32.7998V31.7998C292.644 31.7998 292.594 31.7844 292.55 31.7282L291.762 32.3438Z"
                    fill="#C1C1C1"
                    fillOpacity="0.38"
                    mask="url(#path-1-inside-1_73_833892)"
                  />
                </g>
                <defs>
                  <clipPath
                    id="bgblur_0_73_833892_clip_path"
                    transform="translate(40 39.6064)"
                  >
                    <path d="M257.05 0.393555C263.207 0.393607 269.021 3.22969 272.812 8.08203L291.762 32.3438C291.983 32.6265 292.316 32.7998 292.675 32.7998H1525.32C1525.68 32.7998 1526.02 32.6265 1526.24 32.3438L1545.19 8.08203C1548.98 3.22969 1554.79 0.393607 1560.95 0.393555H1798C1809.05 0.393559 1818 9.34798 1818 20.3936V44.6553C1818 47.3603 1818 50.0947 1818 52.7998V114.245C1818 125.291 1809.05 134.245 1798 134.245H20C8.95445 134.245 0.000222773 125.291 0 114.245V52.7998C4.039e-05 50.0948 6.447e-05 47.3603 0 44.6553V20.3936C0.00014365 9.34798 8.9544 0.393559 20 0.393555H257.05Z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex items-center justify-between w-full h-full relative z-10 pointer-events-auto">
              {/* Logo */}
              <Link
                href={"/"}
                className={`w-[12vw] h-full flex items-center justify-center max-sm:w-auto max-sm:h-[12vw] max-md:w-auto max-md:h-[8vw] ${isInverted ? " brightness-[16] max-sm:brightness-0 max-sm:invert-100" : ""
                  }`}
              >
                <Logo className="h-full w-full" />
              </Link>
              <div
                className="hidden max-md:block max-sm:block"
              >
                <HamButton
                  onClick={handleMenuButtonClick}
                  disabled={buttonDisabled}
                  menuOpen={menuOpen}
                  isInverted={isInverted}
                  isWhite={isWhite}
                  borderColor={"#ffffff"}
                />
              </div>
              <nav className="relative flex items-center gap-[3vw] text-foreground pt-5 max-sm:hidden max-md:hidden">
                {links.map((item, index) => {
                  const isActive = pathname === item.link;
                  const isDropdownItem = item.name.toLowerCase() === "solutions" || item.name.toLowerCase() === "products";

                  return (
                    <div
                      key={index}
                      className="relative"
                      onMouseEnter={() => isDropdownItem && setHoveredItem(item.name.toLowerCase())}
                      onMouseLeave={() => isDropdownItem && setHoveredItem(null)}
                    >
                      <Link
                        href={item.link}
                        className="flex items-center group gap-[0.5vw] justify-start"
                      >
                        <div
                          style={{ animation: "pulse .5s infinite" }}
                          className={`w-[.3vw] ${isActive ? "h-[1vw]" : "h-[0vw] group-hover:h-[1vw]"}
                  transition-all duration-200 
                  ${isInverted ? "bg-white" : "group-hover:bg-orange-500"} 
                  ${isActive && !isInverted ? "bg-orange-500" : ""}`}
                        ></div>

                        <div className="cursor-pointer text-left relative w-[7vw] overflow-hidden">
                          <span
                            className={`uppercase text-[.9vw] text-left ${isWhite ? "text-white" : "text-[#D6D6D6]"}`}
                          >
                            <ScrambleText onHover={true} centerd speed={0.5} className="min-w-[8vw]">
                              {item.name}
                            </ScrambleText>
                          </span>
                        </div>
                      </Link>

                      {isDropdownItem && (
                        <>
                          {hoveredItem === "solutions" && item.name.toLowerCase() === "solutions" && solutionsDropdown}
                          {hoveredItem === "products" && item.name.toLowerCase() === "products" && productsDropdown}

                          <div className="round absolute top-[-80%] bottom-auto left-[45%] ml-[-1vw] flex items-center justify-center min-w-[9vw] h-[4.3vw] w-fit max-sm:h-[17vw] max-sm:min-w-[34vw] cursor-pointer">
                            <div className="-rotate-90 text-[#D6D6D6] flex items-center justify-center gap-0 w-[0.9vw] h-full max-sm:w-[3vw]">
                              <svg
                                className="arrow next"
                                width="8"
                                height="15"
                                viewBox="0 0 8 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.50293 14.46L2.50293 7.45996L7.50293 0.459961H5.05293L0.0529289 7.45996L5.05293 14.46H7.50293Z"
                                  fill="currentColor"
                                />
                              </svg>

                            </div>
                          </div>
                        </>
                      )}

                    </div>
                  );
                })}
              </nav>
              {/* CTA */}
              <PrimaryButton
                href={"/contact-us"}
                text="Get In Touch"
                className="max-sm:hidden max-md:hidden"
              />
            </div>
          </div>
        </div>
      </header>

      <div ref={navigationRef} className={`fixed inset-0 z-[299] hidden max-md:block h-dvh w-screen overflow-hidden top-0 left-0 ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div className="w-screen max-md:h-[60vh] max-sm:h-[50vvh] absolute top-0 left-0 m-nav-bg -translate-y-full nav-bg-t">
          <Image className="w-full h-full object-cover object-bottom" src={"/assets/shapes/menu-svg-t.svg"} alt="menu background image" width={400} height={600} />
        </div>
        <div className="w-screen max-md:h-[60vh] max-sm:h-[50vvh] absolute bottom-0 left-0 m-nav-bg translate-y-full nav-bg-b">
          <Image className="w-full h-full object-cover object-top" src={"/assets/shapes/menu-svg-b.svg"} alt="menu background image" width={400} height={600} />
        </div>
        <div className="relative w-screen h-screen flex items-end">
          <nav className="flex h-1/2 flex-col relative max-md:gap-[0.2vw] max-sm:gap-3 flex-grow px-14 pt-24">
            {links2.map((item, index) => {
              const isActive = pathname === item.link;
              return (
                <Link
                  href={item.link}
                  key={index}
                  className={`overflow-hidden transition-all duration-200 group ${isActive ? "text-primary-2" : "text-white"
                    }`}
                >
                  <div className="flex items-center gap-3 m-nav-links translate-y-full opacity-0">
                    <span>
                      <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5195 0H17.5195L7.51953 22.1687H0.519531L10.5195 0Z" fill="currentColor" />
                      </svg>
                    </span>
                    <span className={`max-sm:text-[4.5vw] uppercase text-[2.5vw] max-md:text-[4vw] font-medium`}>
                      {item.name}
                    </span>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}