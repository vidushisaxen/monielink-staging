"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Logo } from "../Icons";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useGSAP } from "@gsap/react";
import HamButton from "../Buttons/HamButton";
import ScrambleText from "../ScrambleText";
import { usePathname } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const links = [
  {
    name: "About Us",
    link: "/about",
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
    link: "/blogs",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [isInverted, setIsInverted] = useState(false);
  const [isWhite, setIsWhite] = useState(false);

  const pathname = usePathname();

  useGSAP(() => {
    const triggers = [];
    document.querySelectorAll("[data-theme]").forEach((section) => {
      const theme = section.dataset.theme;
  
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        onEnter: () => {
          if (theme === "orange") setIsInverted(true);
          if (theme === "white") setIsWhite(true);
        },
        onEnterBack: () => {
          if (theme === "orange") setIsInverted(true);
          if (theme === "white") setIsWhite(true);
        },
        onLeave: () => {
          if (theme === "orange") setIsInverted(false);
          if (theme === "white") setIsWhite(false);
        },
        onLeaveBack: () => {
          if (theme === "orange") setIsInverted(false);
          if (theme === "white") setIsWhite(false);
        },
      });
  
      triggers.push(trigger);
    });
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
      className={`fixed px-[2.55vw] py-[1.51vw] top-0 left-0 w-screen z-[300] transform transition-transform duration-300 pointer-events-none max-sm:px-[6vw] ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div id="header-inner" className="relative flex items-center justify-center h-full w-full px-[1.25vw] py-[1.7vw]">

        {/* Background SVG */}
        <div className="w-full h-auto absolute top-0 left-0 max-sm:hidden">
          <svg className="w-full h-auto" width="1818" height="135" viewBox="0 0 1818 135" fill="none" xmlns="http://www.w3.org/2000/svg">
            <foreignObject x="-40" y="-39.6064" width="1898" height="213.852">
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  backdropFilter: "blur(20px)",
                  clipPath: "url(#bgblur_0_73_833892_clip_path)",
                  height: '100%',
                  width: '100%',
                  backgroundColor: (isInverted || isWhite) ? 'rgba(0, 0, 0, 0.3)' : 'transparent',
                }}
              />
            </foreignObject>

            <g data-figma-bg-blur-radius="40">
              <mask id="path-1-inside-1_73_833892" fill="white">
                <path d="M257.05 0.393555C263.207 0.393607 269.021 3.22969 272.812 8.08203L291.762 32.3438C291.983 32.6265 292.316 32.7998 292.675 32.7998H1525.32C1525.68 32.7998 1526.02 32.6265 1526.24 32.3438L1545.19 8.08203C1548.98 3.22969 1554.79 0.393607 1560.95 0.393555H1798C1809.05 0.393559 1818 9.34798 1818 20.3936V44.6553C1818 47.3603 1818 50.0947 1818 52.7998V114.245C1818 125.291 1809.05 134.245 1798 134.245H20C8.95445 134.245 0.000222773 125.291 0 114.245V52.7998C4.039e-05 50.0948 6.447e-05 47.3603 0 44.6553V20.3936C0.00014365 9.34798 8.9544 0.393559 20 0.393555H257.05Z" />
              </mask>
              <path d="M257.05 0.393555C263.207 0.393607 269.021 3.22969 272.812 8.08203L291.762 32.3438C291.983 32.6265 292.316 32.7998 292.675 32.7998H1525.32C1525.68 32.7998 1526.02 32.6265 1526.24 32.3438L1545.19 8.08203C1548.98 3.22969 1554.79 0.393607 1560.95 0.393555H1798C1809.05 0.393559 1818 9.34798 1818 20.3936V44.6553C1818 47.3603 1818 50.0947 1818 52.7998V114.245C1818 125.291 1809.05 134.245 1798 134.245H20C8.95445 134.245 0.000222773 125.291 0 114.245V52.7998C4.039e-05 50.0948 6.447e-05 47.3603 0 44.6553V20.3936C0.00014365 9.34798 8.9544 0.393559 20 0.393555H257.05Z" fill="#AAAAAA" fillOpacity="0.1" />
              <path d="M257.05 0.393555V-0.606445V0.393555ZM272.812 8.08203L273.6 7.46647V7.46645L272.812 8.08203ZM1545.19 8.08203L1544.4 7.46645V7.46647L1545.19 8.08203ZM1560.95 0.393555V-0.606445V0.393555ZM1798 0.393555V-0.606445V0.393555ZM1818 20.3936H1819V20.3935L1818 20.3936ZM1818 114.245L1819 114.245V114.245H1818ZM20 134.245V135.245V134.245ZM0 114.245H-1V114.245L0 114.245ZM0 20.3936L-1 20.3935V20.3936H0ZM20 0.393555V-0.606445V0.393555ZM257.05 0.393555V1.39355C262.899 1.3936 268.423 4.0879 272.023 8.69761L272.812 8.08203L273.6 7.46645C269.62 2.37149 263.515 -0.60639 257.05 -0.606445V0.393555ZM272.812 8.08203L272.023 8.69759L290.974 32.9593L291.762 32.3438L292.55 31.7282L273.6 7.46647L272.812 8.08203ZM292.675 32.7998V33.7998H1525.32V32.7998V31.7998H292.675V32.7998ZM1526.24 32.3438L1527.03 32.9593L1545.98 8.69759L1545.19 8.08203L1544.4 7.46647L1525.45 31.7282L1526.24 32.3438ZM1545.19 8.08203L1545.98 8.69761C1549.58 4.0879 1555.1 1.3936 1560.95 1.39355V0.393555V-0.606445C1554.49 -0.60639 1548.38 2.37149 1544.4 7.46645L1545.19 8.08203ZM1560.95 0.393555V1.39355H1798V0.393555V-0.606445H1560.95V0.393555ZM1798 0.393555V1.39355C1808.49 1.39356 1817 9.90026 1817 20.3936L1818 20.3936L1819 20.3935C1819 8.79571 1809.6 -0.606441 1798 -0.606445V0.393555ZM1818 20.3936H1817V44.6553H1818H1819V20.3936H1818ZM1818 52.7998H1817V114.245H1818H1819V52.7998H1818ZM1818 114.245L1817 114.245C1817 124.738 1808.49 133.245 1798 133.245V134.245V135.245C1809.6 135.245 1819 125.843 1819 114.245L1818 114.245ZM1798 134.245V133.245H20V134.245V135.245H1798V134.245ZM20 134.245V133.245C9.50675 133.245 1.00021 124.738 1 114.245L0 114.245L-1 114.245C-0.999766 125.843 8.40215 135.245 20 135.245V134.245ZM0 114.245H1V52.7998H0H-1V114.245H0ZM0 44.6553H1V20.3936H0H-1V44.6553H0ZM0 20.3936L1 20.3936C1.00014 9.90026 9.50669 1.39356 20 1.39355V0.393555V-0.606445C8.4021 -0.606441 -0.999849 8.79571 -1 20.3935L0 20.3936ZM20 0.393555V1.39355H257.05V0.393555V-0.606445H20V0.393555ZM1818 44.6553L1817 44.6553C1817 47.3603 1817 50.0947 1817 52.7998L1818 52.7998L1819 52.7998C1819 50.0947 1819 47.3603 1819 44.6553L1818 44.6553ZM1525.32 32.7998V33.7998C1526.01 33.7998 1526.63 33.4687 1527.03 32.9593L1526.24 32.3438L1525.45 31.7282C1525.41 31.7844 1525.36 31.7998 1525.32 31.7998V32.7998ZM0 52.7998L1 52.7998C1.00004 50.0948 1.00006 47.3603 1 44.6553L0 44.6553L-1 44.6553C-0.999936 47.3603 -0.99996 50.0948 -1 52.7998L0 52.7998ZM291.762 32.3438L290.974 32.9593C291.371 33.4687 291.988 33.7998 292.675 33.7998V32.7998V31.7998C292.644 31.7998 292.594 31.7844 292.55 31.7282L291.762 32.3438Z" fill="#C1C1C1" fillOpacity="0.38" mask="url(#path-1-inside-1_73_833892)" />
            </g>
            <defs>
              <clipPath id="bgblur_0_73_833892_clip_path" transform="translate(40 39.6064)">
                <path d="M257.05 0.393555C263.207 0.393607 269.021 3.22969 272.812 8.08203L291.762 32.3438C291.983 32.6265 292.316 32.7998 292.675 32.7998H1525.32C1525.68 32.7998 1526.02 32.6265 1526.24 32.3438L1545.19 8.08203C1548.98 3.22969 1554.79 0.393607 1560.95 0.393555H1798C1809.05 0.393559 1818 9.34798 1818 20.3936V44.6553C1818 47.3603 1818 50.0947 1818 52.7998V114.245C1818 125.291 1809.05 134.245 1798 134.245H20C8.95445 134.245 0.000222773 125.291 0 114.245V52.7998C4.039e-05 50.0948 6.447e-05 47.3603 0 44.6553V20.3936C0.00014365 9.34798 8.9544 0.393559 20 0.393555H257.05Z" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex items-center justify-between w-full h-full relative z-10 pointer-events-auto">
          {/* Logo */}
          <Link href={"/"} className={`w-[12vw] h-full flex items-center justify-center max-sm:w-auto max-sm:h-[12vw] ${isInverted ? " brightness-[16]" : ""}`}>
              <Logo className="h-full w-full"  />
          </Link>
          <div className="hidden max-sm:block">
             <HamButton
                  href={"/"}
                  rotate={""}
                  arrowColor={"#ffffff"}
                  borderColor={"#636363"}
                  hoverColor={"bg-[#ffffff]/10"}
                />

          </div>
          <nav className="flex items-center gap-[3vw] text-foreground pt-5 max-sm:hidden">
  {links.map((item, index) => {
    const isActive = pathname === item.link;

    return (
      <Link
        href={item.link}
        key={index}
        className="flex items-center group gap-[0.5vw] justify-start pointer-events-auto"
      >
        <div
          style={isActive ? { animation: 'pulse .5s infinite' } : { animation: 'pulse .5s infinite'}}
          className={`w-[.3vw] ${
            isActive ? 'h-[1vw]' : 'h-[0vw] group-hover:h-[1vw]'
          } transition-all duration-200 ${
            isInverted
              ? 'bg-white'
              : 'group-hover:bg-orange-500'
          } ${isActive && !isInverted ? 'bg-orange-500' : ''}`}
        ></div>

        <div className="cursor-pointer text-left relative w-[7vw] overflow-hidden">
          <span
            className={`uppercase  text-[.9vw] text-left ${
              isWhite ? 'text-white' : 'text-[#D6D6D6]'
            }`}
          >
            <ScrambleText
              text={item.name}
              speed={0.4}
              charType={'lowercase'}
            />
          </span>
        </div>
      </Link>
    );
  })}
</nav>


          {/* CTA */}
          <PrimaryButton
            href={"#"}
            text="Get In Touch"
            className="max-sm:hidden"
          />
        </div>
      </div>
    </header>
  );
}
