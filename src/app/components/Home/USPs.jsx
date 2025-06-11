"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);

export default function USPs() {
  const svgRefs = useRef([]);

  const setSvgPathRef = (el, idx) => {
    if (!svgRefs.current) {
      svgRefs.current = [];
    }
    svgRefs.current[idx] = el;
  };

  useEffect(() => {
    const headingText = SplitText.create(".uspsText", {
      type: "lines",
      linesClass: "uspsTextLines",
      mask: "lines",
    });

    const subText = SplitText.create(".subText", {
      type: "lines",
      linesClass: "subTextLines",
      mask: "lines",
    });

    const sdkText = SplitText.create(".sdkText", {
      type: "lines",
      linesClass: "sdkTextLines",
      mask: "lines",
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#usps",
          start: "top 80%",
          end: "bottom top",
        },
      });

      // Initial states
      gsap.set([".subTextLines", ".uspsTextLines", ".sdkTextLines"], {
        y: "100%",
        opacity: (i, el) => (el.classList.contains("subTextLines") ? 0 : 1),
      });

      gsap.set("path", {
        drawSVG: "0%",
      });

      // Animations
      tl.to(".uspsTextLines", {
        y: "0%",
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.08,
      })
        .to(
          ".subTextLines",
          {
            y: "0%",
            opacity: 1,
            duration: 1,
            ease: "power3.inOut",
            stagger: 0.08,
          },
          "<+.5"
        )
        .to(
          "path",
          {
            drawSVG: "100%",
            duration: 1.5,
            ease: "power2.inOut",
            stagger: 0.08,
          },
          "<-2.5"
        )
        .to(".sdkTextLines", {
          y: "0%",
          duration: 1,
          ease: "power2.inOut",
          stagger: 0.08,
          delay: -2.5,
        });
    });

    return () => {
      ctx.revert();
      headingText.revert();
      subText.revert();
      sdkText.revert();
    };
  }, []);

  return (
    <section
      id="usps"
      className="h-fit py-[11vw] flex items-center flex-col justify-center w-screen bg-gradient-to-r from-[#FF5100] to-[#FE6E00]"
    >
      <h2 className="text-white w-[80%] text-[5vw] mb-[6vw] text-center font-display leading-[1.25] uspsText">
        Scalable, Secure, and Cost-Efficient Banking Infrastructure
      </h2>
      <div className="flex items-center justify-center w-full flex-col gap-16">
        <div className="flex items-center gap-20 h-full w-full justify-center">
          <div className="w-[40%] items-end justify-end flex h-full">
            <svg
              className="h-1/3 w-1/3"
              width="249"
              height="250"
              viewBox="0 0 249 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.7446 150.931C20.7446 157.06 21.9519 163.13 24.2976 168.793C26.6433 174.456 30.0814 179.601 34.4156 183.936C43.169 192.689 55.0412 197.607 67.4203 197.607H191.889C201.078 197.623 209.932 194.154 216.664 187.899C223.397 181.644 227.506 173.069 228.164 163.903C228.822 154.737 225.98 145.662 220.21 138.51C214.44 131.357 206.173 126.659 197.075 125.363C197.176 107.717 190.848 90.6383 179.273 77.319C167.697 63.9998 151.668 55.3519 134.18 52.9918C116.693 50.6318 98.9441 54.7211 84.2523 64.4954C69.5605 74.2697 58.9311 89.06 54.3511 106.101C44.6525 108.93 36.1334 114.829 30.0735 122.913C24.0137 130.997 20.7401 140.828 20.7446 150.931Z"
                stroke="white"
                stroke-width="4"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M153.329 120.711L116.501 157.539L95.6729 136.711L98.5009 133.883L116.501 151.883L150.501 117.883L153.329 120.711Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex items-start w-[60%] iconText justify-center font-body flex-col gap-6 h-full text-white">
            <p className="text-[1.6vw] subText">Cloud Based Implementation</p>
            <p className="text-[1vw] w-[45%] subText leading-1.1 tracking-wide">
              Deploy dedicated cloud instances with partner-managed access
              control and firewalls.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-20 h-full w-full justify-center">
          <div className="w-[40%] items-end justify-end flex h-full">
            <svg
              className="h-1/3 w-1/3"
              width="249"
              height="250"
              viewBox="0 0 249 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M82.979 104.192V73.075C82.979 62.0713 87.3502 51.5182 95.131 43.7374C102.912 35.9567 113.465 31.5854 124.469 31.5854C135.472 31.5854 146.025 35.9567 153.806 43.7374C161.587 51.5182 165.958 62.0713 165.958 73.075V104.192"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M51.8618 104.192H197.075V197.543C197.075 203.045 194.889 208.322 190.999 212.212C187.109 216.102 181.832 218.288 176.33 218.288H72.6066C67.1047 218.288 61.8282 216.102 57.9378 212.212C54.0474 208.322 51.8618 203.045 51.8618 197.543V104.192Z"
                stroke="white"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path
                d="M150.399 161.24H150.503V161.344H150.399V161.24Z"
                stroke="white"
                strokeWidth="10"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex items-start w-[60%] iconText justify-center font-body flex-col gap-6 h-full text-white">
            <p className="text-[1.6vw] subText">Secure environments</p>
            <p className="text-[1vw] w-[45%] subText leading-1.1 tracking-wide">
              Meet regulatory compliance with secure, isolated environments at
              lower cost and higher efficiency than on-premise systems.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-20 h-full w-full justify-center">
          <div className="w-[40%] items-end justify-end flex h-full">
            <svg
              className="h-1/3 w-1/3"
              width="249"
              height="250"
              viewBox="0 0 249 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.0513 210.673H168.677M204.043 210.673H212.885"
                stroke="white"
                strokeWidth="3.40971"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M36.0513 170.001V56.8275C36.0513 55.4205 36.6102 54.0711 37.6051 53.0763C38.6 52.0814 39.9493 51.5225 41.3563 51.5225H207.58C208.987 51.5225 210.336 52.0814 211.331 53.0763C212.326 54.0711 212.885 55.4205 212.885 56.8275V170.001C212.885 171.408 212.326 172.757 211.331 173.752C210.336 174.747 208.987 175.306 207.58 175.306H41.3563C39.9493 175.306 38.6 174.747 37.6051 173.752C36.6102 172.757 36.0513 171.408 36.0513 170.001Z"
                stroke="white"
                strokeWidth="3.40971"
              />
              <path
                d="M124.501 120.442C128.76 120.442 132.213 116.99 132.213 112.731C132.213 108.472 128.76 105.019 124.501 105.019C120.242 105.019 116.79 108.472 116.79 112.731C116.79 116.99 120.242 120.442 124.501 120.442Z"
                stroke="white"
                strokeWidth="3.85579"
              />
              <path
                d="M99.048 89.1332L100.012 87.4598C99.6335 87.241 99.1919 87.1573 98.7596 87.2224C98.3273 87.2876 97.93 87.4977 97.6329 87.8184L99.048 89.1332ZM91.3402 102.49L89.4972 101.919C89.3689 102.336 89.386 102.785 89.5457 103.191C89.7054 103.597 89.9982 103.937 90.3763 104.155L91.3402 102.49ZM91.3325 122.968L90.3686 121.298C89.9897 121.517 89.6963 121.857 89.5366 122.264C89.3768 122.671 89.3602 123.121 89.4895 123.538L91.3325 122.968ZM99.0441 136.324L97.629 137.635C97.9262 137.956 98.3235 138.166 98.7558 138.231C99.188 138.296 99.6296 138.213 100.008 137.994L99.0441 136.324ZM116.781 146.561H114.853C114.853 146.999 115.001 147.424 115.275 147.766C115.548 148.108 115.93 148.347 116.357 148.443L116.781 146.561ZM132.208 146.569L132.636 148.451C133.062 148.354 133.443 148.115 133.715 147.773C133.988 147.431 134.136 147.006 134.136 146.569H132.208ZM149.948 136.328L148.984 137.998C149.363 138.216 149.804 138.3 150.237 138.235C150.669 138.17 151.066 137.96 151.363 137.639L149.948 136.328ZM157.652 122.964L159.495 123.535C159.624 123.117 159.606 122.669 159.447 122.263C159.287 121.856 158.994 121.516 158.616 121.298L157.652 122.964ZM157.66 102.486L158.624 104.155C159.003 103.937 159.296 103.596 159.456 103.189C159.616 102.782 159.632 102.333 159.503 101.915L157.66 102.486ZM149.948 89.1255L151.363 87.8145C151.066 87.4939 150.669 87.2837 150.237 87.2186C149.804 87.1534 149.363 87.2371 148.984 87.4559L149.948 89.1255ZM132.212 78.896H134.14C134.139 78.4595 133.99 78.036 133.718 77.6948C133.446 77.3537 133.065 77.1152 132.64 77.0183L132.212 78.896ZM116.788 78.8883L116.36 77.0067C115.933 77.103 115.552 77.3418 115.279 77.6838C115.005 78.0258 114.857 78.4506 114.857 78.8883H116.788ZM93.1833 103.06C94.6312 98.3611 97.1179 94.0479 100.459 90.4403L97.6329 87.8184C93.8972 91.8499 91.1166 96.6667 89.4972 101.919L93.1833 103.06ZM96.1137 129.118C94.8876 126.996 93.9033 124.743 93.1795 122.401L89.4933 123.542C90.3044 126.158 91.4063 128.675 92.7785 131.046L96.1137 129.118ZM100.463 135.017C98.7986 133.219 97.3372 131.24 96.1137 129.118L92.7785 131.046C94.1451 133.418 95.7734 135.63 97.6329 137.639L100.463 135.017ZM131.784 144.695C126.989 145.785 122.01 145.783 117.216 144.687L116.36 148.443C121.717 149.668 127.281 149.672 132.64 148.455L131.784 144.695ZM155.817 122.401C154.369 127.1 151.882 131.413 148.541 135.021L151.367 137.643C155.103 133.611 157.884 128.791 159.503 123.538L155.817 122.401ZM152.886 96.3435C154.136 98.5143 155.111 100.766 155.825 103.06L159.507 101.919C158.696 99.3029 157.594 96.7861 156.222 94.4156L152.886 96.3435ZM148.537 90.4441C150.202 92.242 151.663 94.2208 152.886 96.3435L156.222 94.4156C154.855 92.0433 153.227 89.8317 151.367 87.8222L148.537 90.4441ZM117.216 80.7661C122.011 79.6759 126.99 79.6785 131.784 80.7738L132.64 77.0183C127.283 75.7934 121.719 75.7894 116.36 77.0067L117.216 80.7661ZM118.716 86.0177V78.8845H114.861V86.0177H118.716ZM106.185 91.0225L100.012 87.4598L98.084 90.795L104.253 94.3616L106.185 91.0225ZM96.5456 117.735L90.3686 121.298L92.3003 124.637L98.4696 121.075L96.5456 117.735ZM98.4735 104.379L92.3042 100.82L90.3763 104.159L96.5456 107.718L98.4735 104.379ZM118.716 146.561V139.44H114.861V146.561H118.716ZM104.257 131.092L98.084 134.655L100.012 137.994L106.181 134.431L104.257 131.092ZM150.916 134.659L144.743 131.092L142.815 134.435L148.984 137.998L150.916 134.659ZM134.14 146.573V139.44H130.284V146.573H134.14ZM156.7 100.816L150.527 104.379L152.455 107.718L158.624 104.155L156.7 100.816ZM158.62 121.294L152.455 117.743L150.527 121.082L156.696 124.641L158.62 121.294ZM134.14 86.0177V78.896H130.284V86.0177H134.14ZM148.988 87.4598L142.815 91.0264L144.743 94.3655L150.916 90.7989L148.988 87.4598ZM130.284 86.0177C130.284 93.4362 138.315 98.0748 144.743 94.3655L142.815 91.0264C141.936 91.5342 140.938 91.8014 139.922 91.8012C138.907 91.8011 137.909 91.5335 137.03 91.0254C136.15 90.5174 135.42 89.7867 134.913 88.907C134.406 88.0272 134.139 87.0333 134.14 86.0177H130.284ZM150.527 104.383C144.099 108.092 144.099 117.369 150.527 121.078L152.455 117.739C151.575 117.232 150.845 116.502 150.338 115.622C149.83 114.743 149.563 113.746 149.563 112.731C149.563 111.715 149.83 110.718 150.338 109.839C150.845 108.96 151.575 108.23 152.455 107.722L150.527 104.383ZM144.743 131.096C138.315 127.387 130.284 132.017 130.284 139.44H134.14C134.14 138.424 134.407 137.431 134.914 136.552C135.422 135.673 136.152 134.942 137.031 134.435C137.911 133.927 138.908 133.66 139.923 133.66C140.939 133.66 141.936 133.927 142.815 134.435L144.743 131.096ZM118.716 139.44C118.716 132.021 110.685 127.387 104.257 131.096L106.185 134.435C107.065 133.927 108.062 133.66 109.078 133.66C110.093 133.66 111.091 133.928 111.97 134.436C112.85 134.944 113.58 135.675 114.087 136.554C114.594 137.434 114.861 138.432 114.861 139.447L118.716 139.44ZM98.4735 121.078C104.901 117.369 104.901 108.092 98.4735 104.383L96.5456 107.722C100.401 109.947 100.401 115.507 96.5456 117.735L98.4735 121.078ZM114.861 86.0177C114.86 87.0326 114.592 88.0295 114.084 88.9081C113.576 89.7868 112.846 90.5164 111.967 91.0235C111.088 91.5307 110.091 91.7976 109.076 91.7974C108.061 91.7972 107.064 91.53 106.185 91.0225L104.257 94.3655C110.685 98.0748 118.716 93.4401 118.716 86.0177H114.861Z"
                stroke="white"
              />
            </svg>
          </div>
          <div className="flex items-start w-[60%] iconText justify-center font-body flex-col gap-6 h-full text-white">
            <p className="text-[1.6vw] subText">Dedicated Instant SaaS</p>
            <p className="text-[1vw] w-[45%] subText leading-1.1 tracking-wide">
              Eliminate heavy upfront licensing costs with our revenue-sharing
              SaaS model.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-20 h-full w-full justify-center">
          <div className="w-[40%] items-end justify-end flex h-full">
          <svg className="h-1/3 w-1/3" width="249" height="250" viewBox="0 0 249 250" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47.5 74.5H202M47.5 74.5V192.5C47.5 198.023 51.9772 202.5 57.5 202.5H192C197.523 202.5 202 198.023 202 192.5V74.5M47.5 74.5L62.5129 57.402C64.4115 55.2396 67.1497 54 70.0273 54H180.302C183.278 54 186.099 55.3257 187.999 57.6166L202 74.5" stroke="white" stroke-width="4"/>
<path d="M100.5 164.5L76.5 140.5L100.5 117.5" stroke="white" stroke-width="4"/>
<path d="M149 164.5L173 140.5L149 117.5" stroke="white" stroke-width="4"/>
</svg>

          </div>
          <div className="flex items-start w-[60%] iconText justify-center font-body flex-col gap-6 h-full text-white">
            <p className="text-[1.6vw] subText">Seamless integration</p>
            <p className="text-[1vw] w-[45%] subText leading-1.1 tracking-wide">
              Seamlessly integrate digital banking experiences using our Super
              SDK front-end and dedicated cloud back-end — fully managed on
              Monielink Infrastructure.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center overflow-hidden h-[70vh] pt-[10vw] text-white font-display flex-col justify-center mt-[5vw]">
        <h2 className="text-[7vw] sdkText leading-[1]">One SDK.</h2>
        <h2 className="text-[7vw] sdkText leading-[1]">
          Endless Possibilities.
        </h2>
      </div>
    </section>
  );
}
