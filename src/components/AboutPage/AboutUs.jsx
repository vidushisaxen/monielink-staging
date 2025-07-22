"use client";
import Copy from "../Animations/Copy";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);

const AboutUs = () => {
  const svgRef = useRef(null);
  const path1Ref = useRef(null);
  const path2Ref = useRef(null);
  const path3Ref = useRef(null);
  const path4Ref = useRef(null);

  useGSAP(() => {
    const paths = [
      path1Ref.current,
      path2Ref.current,
      path3Ref.current,
      path4Ref.current,
    ];
    const dots = svgRef.current?.querySelectorAll(".dot");

    if (paths.every(Boolean) && dots) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top 60%",
        },
      });
      //   paths.forEach((path, index) => {
      tl.fromTo(
        paths,
        {
          scale: 0.5,
          opacity: 0,
          transformOrigin: "center center",
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
      //   });

      tl.fromTo(
        dots,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,

          ease: "power2.out",
        },
        "-=0.5"
      );
    }
  }, []);

  return (
    <>
      <section
        data-theme="white"
        className="bg-white-1 p-[8vw] white max-sm:px-[5.5vw] max-sm:py-[25%] relative"
      >
        <div className="w-full flex items-center justify-between max-sm:flex-col">
          <div className="flex flex-col gap-y-[5vw] text-black-1 w-[58%] max-sm:w-full max-md:w-[55%] max-sm:gap-y-[120vw]">
            <Copy>
              <h2 className="text-head-40 font-body max-sm:text-head-60">
                Monielink is a neobank enablement platform designed to help
                banks and fintechs deliver full-scale digital banking
                experiences directly within their mobile apps. With our
                all-in-one Super SDK, partners can integrate and launch secure,
                compliant, and feature-rich services — faster and more
                efficiently than ever before.
              </h2>
            </Copy>
           
            <Copy>
              <p className="text-content-20 leading-[1.5] max-sm:leading-[1.5]">
                Our Dedicated Instance SaaS model replicates the control and
                security of an on-premise setup — hosted on Monielink&apos;s secure
                cloud infrastructure. Each partner operates within a fully
                isolated environment, including dedicated platforms, databases,
                and supporting infrastructure. This architecture ensures
                enhanced security, privacy, and regulatory compliance by
                eliminating any resource or data sharing between tenants.
              </p>
            </Copy>
          </div>
          <div className="flex items-end flex-col w-[30%] max-md:w-[40%] max-sm:w-[90%] max-sm:absolute max-sm:top-[50%]">
            <svg
              className="h-auto w-full"
              ref={svgRef}
              width="470"
              height="471"
              viewBox="0 0 470 471"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_215_69136)">
                <path
                  ref={path1Ref}
                  className="svg-path"
                  d="M234.9 295.445C268.017 295.445 294.863 268.599 294.863 235.482C294.863 202.365 268.017 175.519 234.9 175.519C201.784 175.519 174.938 202.365 174.938 235.482C174.938 268.599 201.784 295.445 234.9 295.445Z"
                  stroke="url(#paint0_linear_215_69136)"
                  strokeWidth="1.94361"
                />
                <path
                  ref={path2Ref}
                  className="svg-path"
                  d="M234.865 356.47C301.676 356.47 355.836 302.309 355.836 235.499C355.836 168.689 301.676 114.528 234.865 114.528C168.055 114.528 113.895 168.689 113.895 235.499C113.895 302.309 168.055 356.47 234.865 356.47Z"
                  stroke="url(#paint1_linear_215_69136)"
                  strokeWidth="1.94361"
                />
                <path
                  ref={path3Ref}
                  className="svg-path"
                  d="M234.855 410.668C331.598 410.668 410.023 332.243 410.023 235.5C410.023 138.758 331.598 60.3325 234.855 60.3325C138.113 60.3325 59.6875 138.758 59.6875 235.5C59.6875 332.243 138.113 410.668 234.855 410.668Z"
                  stroke="url(#paint2_linear_215_69136)"
                  strokeWidth="1.94361"
                />
                <path
                  ref={path4Ref}
                  className="svg-path"
                  d="M234.857 469.381C364.026 469.381 468.738 364.669 468.738 235.5C468.738 106.331 364.026 1.61938 234.857 1.61938C105.689 1.61938 0.976562 106.331 0.976562 235.5C0.976562 364.669 105.689 469.381 234.857 469.381Z"
                  stroke="url(#paint3_linear_215_69136)"
                  strokeWidth="1.94361"
                />
                <path
                  className="svg-path dot"
                  d="M275.494 199.37C280.482 199.37 284.527 195.326 284.527 190.337C284.527 185.348 280.482 181.304 275.494 181.304C270.505 181.304 266.461 185.348 266.461 190.337C266.461 195.326 270.505 199.37 275.494 199.37Z"
                  fill="url(#paint4_linear_215_69136)"
                />
                <path
                  className="svg-path dot"
                  d="M180.668 262.6C185.656 262.6 189.7 258.556 189.7 253.568C189.7 248.579 185.656 244.535 180.668 244.535C175.679 244.535 171.635 248.579 171.635 253.568C171.635 258.556 175.679 262.6 180.668 262.6Z"
                  fill="url(#paint5_linear_215_69136)"
                />
                <path
                  className="svg-path dot"
                  d="M176.138 136.139C181.127 136.139 185.171 132.095 185.171 127.107C185.171 122.118 181.127 118.074 176.138 118.074C171.15 118.074 167.105 122.118 167.105 127.107C167.105 132.095 171.15 136.139 176.138 136.139Z"
                  fill="url(#paint6_linear_215_69136)"
                />
                <path
                  className="svg-path dot"
                  d="M112.894 118.076C117.883 118.076 121.927 114.032 121.927 109.043C121.927 104.055 117.883 100.011 112.894 100.011C107.905 100.011 103.861 104.055 103.861 109.043C103.861 114.032 107.905 118.076 112.894 118.076Z"
                  fill="url(#paint7_linear_215_69136)"
                />
                <path
                  className="svg-path dot"
                  d="M293.564 77.4262C298.553 77.4262 302.597 73.382 302.597 68.3934C302.597 63.4047 298.553 59.3606 293.564 59.3606C288.575 59.3606 284.531 63.4047 284.531 68.3934C284.531 73.382 288.575 77.4262 293.564 77.4262Z"
                  fill="url(#paint8_linear_215_69136)"
                />
                <path
                  className="svg-path dot"
                  d="M149.033 393.572C154.021 393.572 158.066 389.528 158.066 384.539C158.066 379.55 154.021 375.506 149.033 375.506C144.044 375.506 140 379.55 140 384.539C140 389.528 144.044 393.572 149.033 393.572Z"
                  fill="url(#paint9_linear_215_69136)"
                />
                <path
                  className="svg-path dot"
                  d="M388.418 420.669C393.406 420.669 397.45 416.625 397.45 411.636C397.45 406.648 393.406 402.603 388.418 402.603C383.429 402.603 379.385 406.648 379.385 411.636C379.385 416.625 383.429 420.669 388.418 420.669Z"
                  fill="url(#paint10_linear_215_69136)"
                />
                <path
                  className="svg-path dot"
                  d="M460.668 194.852C465.656 194.852 469.7 190.808 469.7 185.82C469.7 180.831 465.656 176.787 460.668 176.787C455.679 176.787 451.635 180.831 451.635 185.82C451.635 190.808 455.679 194.852 460.668 194.852Z"
                  fill="url(#paint11_linear_215_69136)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_215_69136"
                  x1="191.777"
                  y1="175.519"
                  x2="288.76"
                  y2="184.942"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF5100" />
                  <stop offset="1" stopColor="#FE6E00" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_215_69136"
                  x1="147.867"
                  y1="114.528"
                  x2="343.523"
                  y2="133.538"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF5100" />
                  <stop offset="1" stopColor="#FE6E00" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_215_69136"
                  x1="108.881"
                  y1="60.3325"
                  x2="392.193"
                  y2="87.8581"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF5100" />
                  <stop offset="1" stopColor="#FE6E00" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_215_69136"
                  x1="66.6585"
                  y1="1.61939"
                  x2="444.932"
                  y2="38.3711"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF5100" />
                  <stop offset="1" stopColor="#FE6E00" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_215_69136"
                  x1="268.998"
                  y1="181.304"
                  x2="283.607"
                  y2="182.724"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF5100" />
                  <stop offset="1" stopColor="#FE6E00" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_215_69136"
                  x1="174.171"
                  y1="244.535"
                  x2="188.781"
                  y2="245.954"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF5100" />
                  <stop offset="1" stopColor="#FE6E00" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_215_69136"
                  x1="169.642"
                  y1="118.074"
                  x2="184.252"
                  y2="119.493"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF5100" />
                  <stop offset="1" stopColor="#FE6E00" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_215_69136"
                  x1="106.398"
                  y1="100.011"
                  x2="121.007"
                  y2="101.43"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF5100" />
                  <stop offset="1" stopColor="#FE6E00" />
                </linearGradient>
                <linearGradient
                  id="paint8_linear_215_69136"
                  x1="287.068"
                  y1="59.3606"
                  x2="301.677"
                  y2="60.78"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF5100" />
                  <stop offset="1" stopColor="#FE6E00" />
                </linearGradient>
                <linearGradient
                  id="paint9_linear_215_69136"
                  x1="142.537"
                  y1="375.506"
                  x2="157.146"
                  y2="376.926"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF5100" />
                  <stop offset="1" stopColor="#FE6E00" />
                </linearGradient>
                <linearGradient
                  id="paint10_linear_215_69136"
                  x1="381.921"
                  y1="402.603"
                  x2="396.531"
                  y2="404.023"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF5100" />
                  <stop offset="1" stopColor="#FE6E00" />
                </linearGradient>
                <linearGradient
                  id="paint11_linear_215_69136"
                  x1="454.171"
                  y1="176.787"
                  x2="468.781"
                  y2="178.206"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF5100" />
                  <stop offset="1" stopColor="#FE6E00" />
                </linearGradient>
                <clipPath id="clip0_215_69136">
                  <rect
                    width="469.705"
                    height="469.705"
                    fill="white"
                    transform="translate(0 0.647461)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
