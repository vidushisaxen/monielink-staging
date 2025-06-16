"use client";
import SwiperButton from "@/components/Buttons/SwiperButton";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import BackgroundLine from "../BackgroundLine";
import gsap from "gsap";
import Link from "next/link";
import DecryptedText from "../DecryptedText";


const links = [
  {
    name:"Home",
    link:"/"
  },
  {
    name:"About Us",
    link:"/"
  },
  {
    name:"Solutions",
    link:"/"
  },
  {
    name:"Products",
    link:"/"
  },
  {
    name:"Resources",
    link:"/"
  },
  {
    name:"Contact",
    link:"/"
  }
]
const links2 = [
  {
    name:"LEGAL",
    link:"/"
  },
  {
    name:"TERMS & CONDITIONS",
    link:"/"
  },
  {
    name:"PRIVACY POLICY",
    link:"/"
  },
  {
    name:"INVESTOR PRIVACY NOTICE",
    link:"/"
  },
  {
    name:"COOKIES POLICY",
    link:"/"
  }
]
const socials = [
  {
    img:"/assets/icons/fb.svg",
    link:"/"
  },
  {
    img:"/assets/icons/ig.svg",
    link:"/"
  },
  {
    img:"/assets/icons/x.svg",
    link:"/"
  },
  {
    img:"/assets/icons/ld.svg",
    link:"/"
  }
]

export default function Footer() {
  return (
    <div className="relative" id="footer">
      <BackgroundLine />
      <footer
        className="h-screen absolute inset-0  z-[40] flex items-center justify-center w-full "
        id="footer"
      >
        <div className="w-full h-full flex items-center justify-center relative ">
          <div className="w-screen h-screen absolute top-0 left-0">
            <svg
              width="1920"
              height="100%"
              viewBox="0 0 1920 987"
              fill="none"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <foreignObject
                x="-6.6"
                y="0.024025"
                width="1933.2"
                height="1005.35"
              >
                <div xmlns="http://www.w3.org/1999/xhtml"></div>
              </foreignObject>
              <g
                filter="url(#filter0_d_73_700893)"
                data-figma-bg-blur-radius="20"
              >
                <mask
                  id="path-1-outside-1_73_700893"
                  maskUnits="userSpaceOnUse"
                  x="74"
                  y="78.624"
                  width="1772"
                  height="845"
                  fill="black"
                >
                  <rect
                    fill="white"
                    x="74"
                    y="78.624"
                    width="1772"
                    height="845"
                  />
                  <path d="M934.287 79.624C934.848 79.624 935.377 79.8633 935.793 80.2402L1019.47 156.139C1021.31 157.807 1023.7 158.731 1026.18 158.731H1825C1836.05 158.731 1845 167.686 1845 178.731V901.77C1845 912.815 1836.05 921.769 1825 921.77H95C83.9543 921.77 75 912.815 75 901.77V99.624C75 88.5783 83.9543 79.624 95 79.624H934.287Z" />
                </mask>
                <path
                  d="M934.287 79.624C934.848 79.624 935.377 79.8633 935.793 80.2402L1019.47 156.139C1021.31 157.807 1023.7 158.731 1026.18 158.731H1825C1836.05 158.731 1845 167.686 1845 178.731V901.77C1845 912.815 1836.05 921.769 1825 921.77H95C83.9543 921.77 75 912.815 75 901.77V99.624C75 88.5783 83.9543 79.624 95 79.624H934.287Z"
                  fill="url(#paint0_linear_73_700893)"
                  fillOpacity="0.02"
                  shapeRendering="crispEdges"
                />
                <path
                  d="M1019.47 156.139L1018.79 156.879L1018.79 156.879L1019.47 156.139ZM1845 901.77H1846H1845ZM1825 921.77V922.77V921.77ZM75 901.77H74H75ZM75 99.624H74H75ZM95 79.624V78.624V79.624ZM935.793 80.2402L935.121 80.9809L1018.79 156.879L1019.47 156.139L1020.14 155.398L936.465 79.4996L935.793 80.2402ZM1019.47 156.139L1018.79 156.879C1020.82 158.715 1023.45 159.731 1026.18 159.731V158.731V157.731C1023.95 157.731 1021.79 156.9 1020.14 155.398L1019.47 156.139ZM1026.18 158.731V159.731H1825V158.731V157.731H1026.18V158.731ZM1845 178.731H1844V901.77H1845H1846V178.731H1845ZM1845 901.77H1844C1844 912.263 1835.49 920.769 1825 920.77V921.77V922.77C1836.6 922.769 1846 913.367 1846 901.77H1845ZM1825 921.77V920.77H95V921.77V922.77H1825V921.77ZM95 921.77V920.77C84.5066 920.77 76 912.263 76 901.77H75H74C74 913.367 83.402 922.77 95 922.77V921.77ZM75 901.77H76V99.624H75H74V901.77H75ZM75 99.624H76C76 89.1306 84.5066 80.624 95 80.624V79.624V78.624C83.402 78.624 74 88.026 74 99.624H75ZM95 79.624V80.624H934.287V79.624V78.624H95V79.624ZM1825 158.731V159.731C1835.49 159.731 1844 168.238 1844 178.731H1845H1846C1846 167.133 1836.6 157.731 1825 157.731V158.731ZM935.793 80.2402L936.465 79.4996C935.898 78.9851 935.137 78.624 934.287 78.624V79.624V80.624C934.559 80.624 934.857 80.7415 935.121 80.9809L935.793 80.2402Z"
                  fill="#282828"
                  mask="url(#path-1-outside-1_73_700893)"
                />
                <path
                  d="M1019.47 156.139L1018.79 156.879L1018.79 156.879L1019.47 156.139ZM1845 901.77H1846H1845ZM1825 921.77V922.77V921.77ZM75 901.77H74H75ZM75 99.624H74H75ZM95 79.624V78.624V79.624ZM935.793 80.2402L935.121 80.9809L1018.79 156.879L1019.47 156.139L1020.14 155.398L936.465 79.4996L935.793 80.2402ZM1019.47 156.139L1018.79 156.879C1020.82 158.715 1023.45 159.731 1026.18 159.731V158.731V157.731C1023.95 157.731 1021.79 156.9 1020.14 155.398L1019.47 156.139ZM1026.18 158.731V159.731H1825V158.731V157.731H1026.18V158.731ZM1845 178.731H1844V901.77H1845H1846V178.731H1845ZM1845 901.77H1844C1844 912.263 1835.49 920.769 1825 920.77V921.77V922.77C1836.6 922.769 1846 913.367 1846 901.77H1845ZM1825 921.77V920.77H95V921.77V922.77H1825V921.77ZM95 921.77V920.77C84.5066 920.77 76 912.263 76 901.77H75H74C74 913.367 83.402 922.77 95 922.77V921.77ZM75 901.77H76V99.624H75H74V901.77H75ZM75 99.624H76C76 89.1306 84.5066 80.624 95 80.624V79.624V78.624C83.402 78.624 74 88.026 74 99.624H75ZM95 79.624V80.624H934.287V79.624V78.624H95V79.624ZM1825 158.731V159.731C1835.49 159.731 1844 168.238 1844 178.731H1845H1846C1846 167.133 1836.6 157.731 1825 157.731V158.731ZM935.793 80.2402L936.465 79.4996C935.898 78.9851 935.137 78.624 934.287 78.624V79.624V80.624C934.559 80.624 934.857 80.7415 935.121 80.9809L935.793 80.2402Z"
                  fill="url(#paint1_linear_73_700893)"
                  mask="url(#path-1-outside-1_73_700893)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_73_700893"
                  x="-6.6"
                  y="0.024025"
                  width="1933.2"
                  height="1005.35"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_73_700893"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="39.8" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 0.316667 0 0 0 0 0 0 0 0 0.19 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_73_700893"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_73_700893"
                    result="shape"
                  />
                </filter>
                <clipPath
                  id="bgblur_0_73_700893_clip_path"
                  transform="translate(6.6 -0.024025)"
                >
                  <path
                    fill="none"
                    d="M934.287 79.624C934.848 79.624 935.377 79.8633 935.793 80.2402L1019.47 156.139C1021.31 157.807 1023.7 158.731 1026.18 158.731H1825C1836.05 158.731 1845 167.686 1845 178.731V901.77C1845 912.815 1836.05 921.769 1825 921.77H95C83.9543 921.77 75 912.815 75 901.77V99.624C75 88.5783 83.9543 79.624 95 79.624H934.287Z"
                  />
                </clipPath>
                <linearGradient
                  id="paint0_linear_73_700893"
                  x1="98.3663"
                  y1="102.059"
                  x2="1826.43"
                  y2="114.112"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_73_700893"
                  x1="753.118"
                  y1="325.943"
                  x2="617.228"
                  y2="-87.3007"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FE6E00" stopOpacity="0" />
                  <stop offset="1" stopColor="#FE6E00" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="py-[8%]  px-[12vw] z-10 flex items-start justify-between left-0 w-full  flex-col h-full ">
            <div className="h-[90%] relative gap-[10vw]  w-full flex  items-center justify-between">
              <div className="w-[80vw] backdrop-blur-sm h-[75vh] rounded-3xl -translate-y-1/2 -translate-x-1/2 absolute top-[65.5%] left-1/2"></div>
              <div className="w-[50%]  z-[100]  flex flex-col h-[90%] items-start justify-between">
                <div className="flex justify-between items-center">
                  <div className="w-[20vw] h-auto">
                    <svg
                      width="253"
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
                        strokeWidth="2"
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
                  </div>
                </div>
                <div className="flex  z-[100]  gap-20 items-start">
                  <div>
                    {links.map((item, index) => (
                      <Link href={item.link} key={index}>
                      <div
                        className="text-white mb-[1vw] text-[1.05vw] font-medium"
                      >
                        <div className="flex items-center gap-[.5vw] group justify-start">
                          <div
                            style={{
                              animation: "pulse .5s infinite",
                            }}
                            className="w-[.3vw] h-[0vw] group-hover:h-[1vw] group-hover:bg-orange-500  transition-all duration-200"
                          ></div>
                          <div className="flex flex-col cursor-pointer relative items-center justify-center overflow-hidden">
  <span className="text-[#A8A8A8] uppercase text-[1vw]">
   <DecryptedText text={item.name}/>
  </span>
</div>

                        </div>
                      </div>
                      </Link>
                    ))}
                  </div>
                  <div>
                    {links2.map((item, index) => (
                      <Link href={item.link}  key={index}>
                      <div
                       
                        className="text-white  mb-[1vw] text-sm font-medium"
                      >
                        <div className="flex items-center gap-[.5vw] group justify-start">
                          <div
                            style={{
                              animation: "pulse .5s infinite",
                            }}
                            className="w-[.3vw] h-[0vw] group-hover:h-[1vw] group-hover:bg-orange-500  transition-all duration-200"
                          ></div>
                         <div className="flex flex-col cursor-pointer relative items-center justify-center overflow-hidden">
  <span className="text-[#A8A8A8] uppercase text-[1vw]">
   <DecryptedText text={item.name}/>
  </span>
</div>
                        </div>
                      </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-[45%]  z-[100]   text-[#A8A8A8] py-[5vw] flex flex-col h-[90%] items-end justify-between gap-16">
                <p className=" text-[1.05vw] w-full">
                  Integrate the Moneylink Super SDK and start delivering
                  seamless, scalable banking services within your mobile app —
                  faster than ever. Let&apos;s build the future of finance together.
                </p>
                <div className="w-full flex  items-start justify-center flex-col">
                  <p className="text-[3.125vw] font-display">info@monielink.Io</p>
                  <div className="pt-2 flex  items-start gap-2">
                    {socials.map((item, index) => (
                      <Link href={item.link}
                        key={index}
                        style={{
                          clipPath:
                            "polygon(25% 0%, 100% 0, 100% 75%, 75% 100%, 0 100%, 0 20%)",
                        }}
                        className="bg-background w-[4vw] h-[4vw]  flex items-center justify-center"
                      >
                        <Image
                          src={item.img}
                          width={5}
                          height={5}
                          alt="socialIcons"
                          className="w-[25%] h-[25%] object-contain"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full  z-[100]  h-[10%] flex items-end justify-between text-[#A8A8A8] text-[1.05vw]">
              <p>Copyright © Monielink 2025</p>
              <p>By : Enigma Digital</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
