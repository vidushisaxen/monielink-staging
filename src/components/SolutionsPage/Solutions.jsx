"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import SplitText from "gsap/SplitText";
import Image from "next/image";
import SegmentedProgressBar from "./SegmntedProgressBar";
import PrimaryButton from "../Buttons/PrimaryButton";
import ScrambleText from "../h/ScrambleText";


gsap.registerPlugin(ScrollTrigger, SplitText, ScrollToPlugin);

const features = [
  {
    id: 1,
    title: "Digital Account",
    description:
      "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
    img: "/assets/images/solutions/slide-1.svg",
    href: "/solutions/digital-accounts",
  },
  {
    id: 2,
    title: "Loyalty",
    description:
      "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
    img: "/assets/images/solutions/slide-1.svg",
    href: "/solutions/digital-accounts",
  },
  {
    id: 3,
    title: "Merchant Acquiring",
    description:
      "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
    img: "/assets/images/solutions/slide-1.svg",
    href: "/solutions/digital-accounts",
  },
  {
    id: 4,
    title: "Digital Lending",
    description:
      "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
    img: "/assets/images/solutions/slide-1.svg",
    href: "/solutions/digital-accounts",
  },
  {
    id: 5,
    title: "Card Issuing",
    description:
      "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
    img: "/assets/images/solutions/slide-1.svg",
    href: "/solutions/digital-accounts",
  },
  {
    id: 6,
    title: "KYC",
    description:
      "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
    img: "/assets/images/solutions/slide-1.svg",
    href: "/solutions/digital-accounts",
  },
];

export default function Solutions() {
  const containerRef = useRef(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".slide");
      const total = slides.length;

      const splits = slides.map((slide) => {
        const elems = slide.querySelectorAll(".splitLines");
        return new SplitText(elems, {
          type: "lines",
          mask: "lines",
          linesClass: "line",
          lineThreshold: 0.1,
        });
      });

      const snapPoints = [0, 0.223, 0.411, 0.6, 0.78, 1]

      const tl = gsap.timeline({
        scrollTrigger: {
          id: "solutions-slider-solutions-page",
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          snap: {
            snapTo: snapPoints,
            delay: 0,
            duration: { min: 0.1, max: 0.3 },
            ease: "power1.inOut",
          },
          onUpdate: (self) => {
            setScrollProgress(self.progress);
            setActiveSlide(
              Math.min(total - 1, Math.floor(self.progress * total))
            );
          },
        },
      });

      slides.forEach((slide, i) => {
        const currSplit = splits[i];
        const imgCurr = slide.querySelector("img");
        const btnCurr = slide.querySelector(".btnFade");

        if (i < total - 1) {
          // animate current slide out
          tl.to(
            currSplit.lines,
            { yPercent: -100, duration: 0.5, ease: "power1.inOut" },
            i
          )
            .to(
              [imgCurr, btnCurr],
              {
                scale: 0.8,
                opacity: 0,
                y: (el) => (el === btnCurr ? -20 : 0),
                duration: 0.5,
                ease: "power1.inOut",
              },
              "<"
            )
            .set(currSplit.lines, { yPercent: 100 });

          // animate next slide in
          const nextSplit = splits[i + 1];
          const imgNext = slides[i + 1].querySelector("img");
          const btnNext = slides[i + 1].querySelector(".btnFade");

          tl.from(
            nextSplit.lines,
            {
              yPercent: 100,
              stagger: 0.05,
              duration: 0.5,
              ease: "power1.inOut",
            },
            ">"
          ).from(
            [imgNext, btnNext],
            {
              scale: 0.8,
              opacity: 0,
              y: (el) => (el === btnNext ? 20 : 0),
              duration: 0.5,
              ease: "power1.inOut",
            },
            "<"
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSkip = () => {
    const next = document.getElementById("features");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  const goToSlide = (i) => {
    const st = ScrollTrigger.getById("solutions-slider-solutions-page");
    if (!st) return;
    const scrollY =
      st.start + (st.end - st.start) * (i / (features.length - 1));
    gsap.to(window, {
      scrollTo: scrollY,
      duration: 0.6,
      ease: "power2.inOut",
    });
  };

  return (
    <>
     
        <section
          ref={containerRef}
          className="bg-black-1 px-[4.5vw] relative h-[600vh] max-sm:hidden max-md:hidden"
          style={{ height: `${features.length * 100}vh` }}
        >
          <div className="sticky h-screen top-0 py-[5vw]">
            {/* buttons + progress bar */}
            <div className="flex justify-between mb-6 pr-[4vw]">
              {features.map((f, i) => (
                <button
                  key={i}
                  className={`w-[10vw] first:text-left text-center last:text-right cursor-pointer font-body transition-all duration-300 text-content-18  ${
                    i === activeSlide ? "text-white" : "text-gray-2"
                  }`}
                  onClick={() => goToSlide(i)}
                >
                  <ScrambleText onHover={true} centerd speed={0.45} className="min-w-[14vw]">
                                                 {f.title}
                                             </ScrambleText>
                </button>
              ))}
            </div>
            <SegmentedProgressBar
              percent={scrollProgress * 100}
              segments={100}
            />

            {/* slides container */}
            <div className="relative h-[70vh] mt-10">
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`slide absolute inset-0 flex items-center justify-between gap-[3vw] py-[8vw] transition-all duration-300 z-0 pointer-events-none ${
                    i === activeSlide ? "z-10 pointer-events-auto" : ""
                  }`}
                >
                  <div className="w-1/2 flex justify-center">
                    <Image
                      src={f.img}
                      alt={f.title}
                      width={500}
                      height={500}
                      className="object-contain"
                    />
                  </div>

                  <div className="w-1/2 flex flex-col gap-[2.5vw]">
                    <div className="splitLines titleFade">
                      <span className="!inline-block mr-[0.5vw] h-[2.2vw] w-[0.5vw] bg-primary-2"></span>
                      <h3 className="!inline-block text-head-60 font-display font-light">
                        {f.title}
                      </h3>
                    </div>
                    <p className="text-content-20 text-gray-2 w-9/10 paraFade splitLines">
                      {f.description}
                    </p>
                    <div className="w-fit btnFade">
                      <PrimaryButton text="Know More" href={f.href} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
           
        <button  onClick={handleSkip} className="round absolute bottom-0 right-[-5%] ml-[-1vw] flex items-center justify-center min-w-[9vw] h-[4.3vw] w-fit max-sm:h-[17vw] max-sm:min-w-[34vw] cursor-pointer">
                <div className="absolute inset-0 z-10">
                    <div className="w-[80%] mx-auto h-full text-[#A8A8A8] relative z-10 flex items-center gap-3 justify-center">
                        <span className="text-content-18">Skip</span>
                        <div className="-rotate-90 text-[#A8A8A8] flex items-center justify-center gap-0 w-[1vw] h-full max-sm:w-[3vw]">
                            <svg
                                className="arrow primera next"
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
                            <svg
                                className="arrow segunda next"
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
                </div>
            </button>
          </div>
         
        </section>
     
    </>
  );
}
