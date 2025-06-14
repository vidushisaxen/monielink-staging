"use client";
import React, { useState } from "react";
import ButtonComponent from "../Buttons/ButtonComponent";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import DecryptedText from "../DecryptedText";
gsap.registerPlugin(ScrollTrigger);

const links = [
  {
    name: "About Us",
    link: "/",
  },
  {
    name: "Solutions",
    link: "/",
  },
  {
    name: "Products",
    link: "/",
  },
  {
    name: "Resources",
    link: "/",
  },
  {
    name: "Contact Us",
    link: "/",
  },
];

export default function NavBar() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [isInverted, setIsInverted] = useState(false);
  const [isWhite, setIsWhite] = useState(false);

  useEffect(() => {
    const triggers = [];

    document.querySelectorAll(".dark").forEach((section) => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top", 
        end: "bottom top",
        onEnter: () => setIsInverted(true),
        onEnterBack: () => setIsInverted(true),
        onLeave: () => setIsInverted(false),
        onLeaveBack: () => setIsInverted(false),
      });

      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);
  useEffect(() => {
    const triggers = [];

    document.querySelectorAll(".white").forEach((section) => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top", 
        end: "bottom top",
        onEnter: () => setIsWhite(true),
        onEnterBack: () => setIsWhite(true),
        onLeave: () => setIsWhite(false),
        onLeaveBack: () => setIsWhite(false),
      });

      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
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
  }, [lastY]);

  return (
    <header
      id="nav"
      className={` flex flex-col items-center justify-center fixed inset-0 px-[2.55vw] op-0 left-0 right-0 z-[300] transform transition-transform duration-300 w-screen py-[1.51vw] h-fit  pointer-events-none ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="relative h-full w-full">
        <div className="w-[95vw] h-auto  flex items-center justify-center">
          <Image
            className="h-full w-full "
            src={"/assets/icons/Union.svg"}
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <div style={{
          clipPath: "polygon(16% 28%, 84% 28%, 86% 0, 100% 0, 100% 100%, 0 100%, 0 0, 14.5% 0)",

        }} className={`absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-md h-[96%] w-[99.8%] rounded-xl ${isWhite ? " bg-black/30" : ""}`}></div>
      </div>
      <nav className="h-auto w-screen absolute top-0 left-0 flex justify-between items-center px-[4vw] py-[3.5vw] ">
        <Link
          href={"/"}
          className={`w-[12vw] h-full flex items-center justify-center ${isInverted ? " brightness-[16]" : ""}`}
        >
          <svg
            width="200"
            height="60"
            viewBox="0 0 253 60"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.0507812 0.0696106L30.9446 17.8818L62.2195 0.129209L62.2195 41.9392L53.3014 46.9927L53.3014 15.446L30.91 28.1561L8.96884 15.5056L8.96884 46.9927L0.0507794 41.9392L0.0507812 0.0696106Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.6279 37.8125L30.9201 48.9829L50.6413 37.6597L50.6413 48.2483L30.9201 59.5265L11.6279 48.3815L11.6279 37.8125Z"
              fill="#FE6E00"
            />
            <path
              d="M111.768 32.7118L107.268 32.7118L107.268 18.0163L101.352 32.7118L99.4007 32.7118L93.4848 18.0163L93.4848 32.7118L89.0163 32.7118L89.0163 11.7227L95.2784 11.7227L100.376 24.4043L105.474 11.7227L111.768 11.7227L111.768 32.7118ZM125.88 33.0894C119.555 33.0894 114.929 28.5581 114.929 22.233C114.929 15.908 119.555 11.3766 125.88 11.3766C132.237 11.3766 136.862 15.908 136.862 22.233C136.862 28.5581 132.237 33.0894 125.88 33.0894ZM125.88 29.1245C129.751 29.1245 132.268 26.135 132.268 22.233C132.268 18.2995 129.751 15.3415 125.88 15.3415C122.009 15.3415 119.523 18.2995 119.523 22.233C119.523 26.135 122.009 29.1245 125.88 29.1245ZM158.784 32.7118L154.473 32.7118L144.466 19.0233L144.466 32.7118L139.998 32.7118L139.998 11.7227L144.592 11.7227L154.316 24.9078L154.316 11.7227L158.784 11.7227L158.784 32.7118ZM167.391 32.7118L162.923 32.7118L162.923 11.7227L167.391 11.7227L167.391 32.7118ZM186.411 32.7118L171.558 32.7118L171.558 11.7227L186.411 11.7227L186.411 15.6562L176.027 15.6562L176.027 20.0932L186.191 20.0932L186.191 24.0267L176.027 24.0267L176.027 28.7783L186.411 28.7783L186.411 32.7118Z"
              fill="white"
            />
            <path
              d="M202.649 32.7118L190.282 32.7118L190.282 11.7227L192.894 11.7227L192.894 30.3832L202.649 30.3832L202.649 32.7118ZM208.935 32.7118L206.323 32.7118L206.323 11.7227L208.935 11.7227L208.935 32.7118ZM231.222 32.7118L228.705 32.7118L216.464 15.9709L216.464 32.7118L213.852 32.7118L213.852 11.7227L216.527 11.7227L228.61 28.1175L228.61 11.7227L231.222 11.7227L231.222 32.7118ZM252.054 32.7118L248.813 32.7118L240.852 23.2715L238.743 25.663L238.743 32.7118L236.131 32.7118L236.131 11.7227L238.743 11.7227L238.743 22.5792L248.026 11.7227L251.299 11.7227L242.551 21.6981L252.054 32.7118Z"
              fill="#FE6E00"
            />
          </svg>
        </Link>

        <div className="flex items-center gap-[5vw] text-foreground ">
          {links.map((item, index) => (
            <Link
              href={"/"}
              key={index}
              className="flex items-center gap-[.5vw] group justify-center pointer-events-auto"
            >
              <div
                style={{
                  animation: "pulse .5s infinite",
                }}
                className={`w-[.3vw] h-[0vw] group-hover:h-[1vw]  transition-all duration-200 ${isInverted ? "group-hover:bg-white" : "group-hover:bg-orange-500"}`}
              ></div>
              <div className="flex flex-col cursor-pointer relative items-center justify-center overflow-hidden">
  <span className={`uppercase text-[.9vw] ${isWhite ? "text-white" : "text-[#D6D6D6]"}`}>
    <DecryptedText text={item.name}/>
  </span>
</div>

            </Link>
          ))}
        </div>
        <ButtonComponent
          link={"/"}
          text="Get In Touch"
          bgColor={false}
          borderColor="white"
        />
      </nav>
    </header>
  );
}
