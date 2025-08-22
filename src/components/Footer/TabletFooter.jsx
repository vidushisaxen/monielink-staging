import {
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
    TwitterIcon,
  } from "@/components/Icons";
  import Link from "next/link";
  import Image from "next/image";
  import React from "react";
  import ScrambleText from "@/components/ScrambleText";
  import SocialMediaBtn from "@/components/Footer/SocialMediaBtn";
  import BackgroundLine from "@/components/BackgroundLine";
  
  export default function TabletFooter() {
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
        link: "//#",
      },
    ];
    const links2 = [
      {
        name: "LEGAL",
        link: "/",
      },
      {
        name: "TERMS & CONDITIONS",
        link: "/",
      },
      {
        name: "PRIVACY POLICY",
        link: "/",
      },
      {
        name: "INVESTOR PRIVACY NOTICE",
        link: "/",
      },
      {
        name: "COOKIES POLICY",
        link: "/",
      },
    ];
    const links = [
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
        name: "Contact",
        link: "/contact-us",
      },
    ];
    return (
      <div className="bg-black max-sm:hidden max-md:flex  hidden text-[#A8A8A8] relative h-screen  items-center justify-center w-full">
        <div className="absolute top-0 left-0 w-full h-full">
          <BackgroundLine />
        </div>
        <Image
          className="h-full pl-[1vw] pb-[2vw] absolute top-0 left-0 z-[0] w-full"
          src={"/assets/icons/Tablet-Footer.svg"}
          alt="loader"
          width={100}
          height={100}
        />
        <div className=" w-[90%] h-[75%] z-[1]">
          <div className="w-full h-[85%]  ">
            <div className="w-full h-[80%] flex">
              {/* left */}
              <div className="w-1/2 h-full flex flex-col justify-between pb-[15%] px-[5vw] py-[5.5vw] ">
                <svg
                  width="200"
                  height="60"
                  viewBox="0 0 253 60"
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
                <div className="">
                  {links.map((item, index) => (
                    <Link href={item.link} key={index}>
                      <div className="text-white mb-[1vw] text-[1.05vw] font-medium">
                        <div className="flex items-center gap-[.5vw] group justify-start">
                          <div
                            style={{
                              animation: "pulse .5s infinite",
                            }}
                            className="w-[.3vw] h-[0vw] group-hover:h-[1vw] group-hover:bg-orange-500  transition-all duration-200"
                          ></div>
                          <div className="flex flex-col cursor-pointer relative items-start justify-start overflow-hidden ">
                            <span className="text-[#A8A8A8] uppercase text-[2.2vw] ">
                              <ScrambleText
                                text={item.name}
                                speed={0.8}
                                charType={"lowercase"}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              {/* right */}
              <div className="w-1/2 h-full flex flex-col pb-[12%] py-[5vw] pr-[5vw] justify-evenly items-start ">
                <div>
                  <p>
                 Integrate the Monielink Super SDK and start delivering seamless, scalable banking services within your mobile app, faster than ever. Let&apos;s build the future of finance together.
                  </p>
                </div>
                <div className="">
                  {links2.map((item, index) => (
                    <Link href={item.link} key={index}>
                      <div className="text-white  mb-[1vw] text-sm font-medium">
                        <div className="flex items-center gap-[.5vw] group justify-start">
                          <div
                            style={{
                              animation: "pulse .5s infinite",
                            }}
                            className="w-[.3vw] h-[0vw] group-hover:h-[1vw] group-hover:bg-orange-500  transition-all duration-200"
                          ></div>
                          <div className="flex flex-col cursor-pointer relative items-start justify-center overflow-hidden min-w-[8vw] ">
                            <span className="text-[#A8A8A8] uppercase text-[2.2vw]">
                              <ScrambleText
                                text={item.name}
                                speed={0.8}
                                charType={"lowercase"}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full h-[20%] flex flex-col  -mt-[5vw] justify-start items-end px-[5vw] pr-[10%] py-[2vw] ">
              <a
                href="mailto:info@monielink.org"
                className="text-head-80 font-display"
              >
                <ScrambleText
                  text={"info@monielink.io"}
                  speed={0.8}
                  charType={"lowercase"}
                />
              </a>
              <div className="items-end justify-end pr-[8%]  w-full flex gap-[1vw]">
                {socials.map((item, index) => (
                  <SocialMediaBtn className="" key={index} href={item.href}>
                    {item.icon}
                  </SocialMediaBtn>
                ))}
              </div>
            </div>
          </div>
  
          {/* bttom */}
          <div className="w-full flex items-start py-[2vw] justify-between px-[5vw] h-[15%]">
            <p className="">Copyright © Monielink 2025</p>
            <div className="">
              By :{" "}
              <a href={"https://weareenigma.com/"} target="_blank">
                <span className="link-line">Enigma Digital</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  