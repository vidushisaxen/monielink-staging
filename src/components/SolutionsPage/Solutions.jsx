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
import { CardIssuing, DigitalBanking, DigitalLending, DualTransaction, KYC, Loyalty, MerchantAcquiring } from "../Icons";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger, SplitText, ScrollToPlugin);



export default function Solutions() {
  const containerRef = useRef(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const svgRightRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const features = [
    {
      id: 1,
      title: "Digital Account",
      description:
        "Monielink powers you to build a full-featured digital wallet ecosystem for both consumers and merchants, with support for multiple currencies. Instantly issue virtual Debit, Credit, or Prepaid cards through our integrated card issuing platform and SDK.",
      description2: "You can also assign NUBAN account numbers linked to verified mobile numbers, allowing customers to receive inflow transfers using just their phone number.",
      img: "/assets/images/solutions/slide-1.svg",
      href: "/solutions/digital-accounts",
      svgRightRef: svgRightRefs[0],
     svgRight: <DigitalBanking />,
    },
    {
      id: 2,
      title: "Merchant Acquiring ",
      description:
        "Monielink enables instant, digital onboarding for merchants directly through your mobile app. Using SoftPOS on NFC-enabled Android phones, merchants can start accepting contactless card payments without additional hardware.",
      description2: "Our platform also supports ScanPay with static and dynamic QR codes, and traditional POS terminals for card dipping, tapping, or swiping",
      img: "/assets/images/solutions/slide-1.svg",
      href: "/solutions/merchant-acquiring",
      svgRightRef: svgRightRefs[1],
      svgRight: <MerchantAcquiring/>,
    },
    {
      id: 3,
      title: "Card Issuing",
      description:
        "Monielink enables instant issuance of virtual Debit, Credit, Prepaid, and Universal cards directly within your mobile app through our Super SDK. Each card is securely stored in a digital card wallet for seamless online and offline use. Card control settings on the SDK allows customers to set-up transaction limits across POS, ATM, and online channels.",
      description2: "With our Universal Instacard, users can access multiple virtual cards through a single physical card. delivering flexibility, security, and a superior user experience.",
      img: "/assets/images/solutions/slide-1.svg",
      href: "/solutions/card-issuing",
      svgRightRef: svgRightRefs[2],
      svgRight: <CardIssuing />,
    },
    {
      id: 4,
      title: "Digital Lending",
      description:
        "End-to-end loan and credit card management through SnapCred, a purpose-built solution that helps lenders and issuers create and scale high-performing credit portfolios.",
      description2: "With full-spectrum service delivery, SnapCred supports everything from origination and disbursement to repayment and collections, all on a secure, cloud-based infrastructure.",
      img: "/assets/images/solutions/slide-1.svg",
      href: "/solutions/digital-lending",
      svgRightRef: svgRightRefs[3],
      svgRight: <DigitalLending />,
    },
    {
      id: 5,
      title: "Dual Transaction Service",
      description:
        "You can unlock new revenue by transforming debit cards into virtual credit cards.",
      description2: "With our patented Dual Transaction Service, you can offer instant credit card access through existing debit cards. No new plastic required. Drive engagement and grow income with ease.",
      img: "/assets/images/solutions/slide-1.svg",
      href: "/solutions/dual-transaction-service",
      svgRightRef: svgRightRefs[4],
      svgRight: <DualTransaction />,
    },
    {
      id: 6,
      title: "KYC & Soft Token",
      description:
        "Monielink Super SDK, enables instant customer onboarding with:",
      description2: "The solution also includes soft token- 2FA, adding an extra layer of security for account activation and ongoing transactions through a soft-token set-up on Verifyed App",
      list:[
  "Face capture supported with liveness detection which confirms that the captured face belongs to a live individual preventing spoofing and impersonation.",
  "Facial recognition technology to match live captures against BVN, NIN, or photo ID records in real time, ensuring high-confidence identity verification. ",
  "ID Verifications to verify NIN, Driver’s License, International Passport etc.",
  "Digital Business Verification for a registered business",
  "Address Verification for digitally verifying residence & business address",
  "KYC Upgrades"
      ],
      img: "/assets/images/solutions/slide-1.svg",
      href: "/solutions/kyc-and-soft-token",
      svgRightRef: svgRightRefs[4],
      svgRight: <KYC />,
    },
    {
      id: 7,
      title: "Loyalty Management ",
      description:
        "Boost adoption and engagement by offering a customized loyalty program for all products & services offered on by Monielink. With Monielink’s SDK, you can reward customers with usage-based points credited to a dedicated rewards account, complete with real-time reward statements and transaction visibility.",
      description2: "",
      img: "/assets/images/solutions/slide-1.svg",
      href: "/solutions/loyalty-management",
      svgRightRef: svgRightRefs[5],
      svgRight: <Loyalty/>,
    },
  ];

  useEffect(() => {
    if(globalThis.innerWidth>1024){
    let ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".slide");
      const total = slides.length;
      const splits = slides.map((slide) => {
  const elems = slide.querySelectorAll(".splitLines");
  const split = new SplitText(elems, {
    type: "lines",
    mask: "lines",
    linesClass: "line",
    lineThreshold: 0.1,
  });

  // Remove aria-label from elements that have splitLines class
  elems.forEach(elem => {
    elem.removeAttribute('aria-label');
  });

  // Also remove from split lines if they have it
  split.lines.forEach(line => {
    line.removeAttribute('aria-label');
  });

  return split;
});
      const snapPoints = [0, 0.185, 0.349,0.505, 0.65, 0.8235, 1]

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
        const imgCurr = slide.querySelector("svg");
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
          const imgNext = slides[i + 1].querySelector("svg");
          const btnNext = slides[i + 1].querySelector(".btnFade");

          tl.from(
            nextSplit.lines,
            {
              yPercent: 100,
              // stagger: 0.01,
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

  }
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
                className={`w-[10vw] first:text-left text-center last:text-right cursor-pointer font-body transition-all duration-300 text-content-18  ${i === activeSlide ? "text-white" : "text-gray-2"
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
                className={`slide absolute inset-0 flex items-center justify-between gap-[3vw] py-[8vw] transition-all duration-300 z-0 pointer-events-none ${i === activeSlide ? "z-10 pointer-events-auto" : ""
                  }`}
              >
                <div className="w-1/2 flex">
                   <div className="h-[20vw] w-full mx-auto">
                  <svg
                  className="h-full w-full"
                    width="251"
                    height="252"
                    viewBox="0 0 251 252"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    ref={f.svgRightRef}
                  >
                    {f.svgRight}
                  </svg>
                </div>
                </div>

                <div className="w-1/2 flex flex-col gap-[2vw]">
                  <div className="splitLines titleFade">
                    <span className="!inline-block mr-[0.5vw] h-[2.2vw] w-[0.5vw] bg-primary-2"></span>
                    <h3 className="!inline-block text-head-60 font-display font-light">
                      {f.title}
                    </h3>
                  </div>
                  <div className="text-content-20 text-gray-2 w-9/10 paraFade splitLines">{f.description}</div>
                  {f.list && f.list.length > 0 && i === 5 && (
  <ul className="!list-disc space-y-[0.5vw] paraFade splitLines pl-[3vw]">
    {f.list.map((item, idx) => (
      <li key={idx} className="text-content-18 text-gray-2">{item}</li>
    ))}
  </ul>
)}

                  <div className="text-content-20 text-gray-2 w-9/10 paraFade splitLines">{f.description2}</div>

                  <div className="w-fit btnFade">
                    <PrimaryButton text="Know More" href={f.href}  className={`${i === activeSlide ? "pointer-events-auto" : "pointer-events-none"}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={handleSkip} className="round absolute bottom-[5%] right-[-5%] ml-[-1vw] flex items-center justify-center min-w-[9vw] h-[4.3vw] w-fit max-sm:h-[17vw] max-sm:min-w-[34vw] cursor-pointer">
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
