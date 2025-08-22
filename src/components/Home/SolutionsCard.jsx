"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import BlackButton from "../Buttons/BlackButton";
import { CardIssuing, DigitalBanking, DigitalLending, DualTransaction, KYC, Loyalty, MerchantAcquiring, SVGLeft, SVGRight } from "../Icons";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import ScrambleText from "../h/ScrambleText";
gsap.registerPlugin(ScrollTrigger, useGSAP, DrawSVGPlugin);

const SolutionsCard = ({ solutionsRef }) => {
  const svgRightRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const cardsData = [
    {
      id: "001",
      title: "Digital Banking & Payments",
      description:
        "Build a digital wallet ecosystem that supports Consumers, Merchants, Multiple Currencies, and Instant Virtual Card Issuance. Our Digital Account Management solution is supported by digital KYC management & Soft-Token authentication security ",
      cardClass: "card-1",
      link: "/solutions/digital-accounts",
      svgRightRef: svgRightRefs[0],
      svgLeft: <SVGLeft />,
      svgRight: <DigitalBanking />,
      y: "",
      zIndex: 1,
    },
    {
      id: "002",
      title: "Merchant Acquiring ",
      description:
        "Monielink SDK facilitates instant and digital onboarding of merchants while equipping them with interoperable QR code and Soft-POS capabilities. Additionally, merchants can apply for POS issuance through Banks and FinTechs, leveraging our SDK to evaluate and process their requests for POS issuance if they meet the eligibility criteria",
      cardClass: "card-2",
      link: "/solutions/merchant-acquiring",
      svgRightRef: svgRightRefs[1],
      svgLeft: <SVGLeft />,
      svgRight: <MerchantAcquiring/>,
      y: "",
      zIndex: 2,
    },
    {
      id: "003",
      title: "Card Issuing ",
      description:
        "Issuers can seamlessly issue virtual Debit, Credit, and Prepaid cards instantly through their Mobile App integrated with the Monielink Super SDK. These cards are securely stored in a Digital Card Wallet, allowing users easy access for both online and offline payments. Additionally, our Universal Physical Card solution enables users to purchase and link virtual cards to a physical universal card for immediate use in physical form. Users can also unlink a previously linked virtual card from the Universal Card and link it to another virtual card within seconds.",
      cardClass: "card-3",
      link: "/solutions/card-issuing",
      svgRightRef: svgRightRefs[2],
      svgLeft: <SVGLeft />,
      svgRight: <CardIssuing/>,
      y: 'translate-y-[-100%]',
      zIndex: 3,
    },
    {
      id: "004",
      title: "Digital Lending",
      description:
        "Our SDK platform can help our Partners offer a variety of loan products to their customers on their Mobile Banking app. Monielink underwrites these loans instantly based on the  rules that they set-up on our Web Portal. Monielink platform can instantly disburse once they are approved digitally. Lenders can set-up underwriting & collection rules besides accessing the dashboards and variety of reports to analyze and manage the Loan & Credit Card Portfolio.",
      cardClass: "card-4",
      link: "/solutions/digital-lending",
      svgRightRef: svgRightRefs[3],
      svgLeft: <SVGLeft />,
      svgRight: <DigitalLending />,
      y: 'translate-y-[-200%]',
      zIndex: 4,
    },
    {
      id: "005",
      title: "Dual Transaction Service ",
      description:
        "DUO features the groundbreaking, patented Dual Transaction Service (DTS), which allows pre-approved customers to access their approved credit limits set on a virtual credit card using their existing debit cards. Customers can Simply Activate DTS on our Partner’s Mobile App integrated with our SDK to start using their virtual credit card using their existing Debit Cards.",
      cardClass: "card-5",
      link: "/solutions/dual-transaction-service",
      svgRightRef: svgRightRefs[4],
      svgLeft: <SVGLeft />,
      svgRight: <DualTransaction />,
      y: 'translate-y-[-300%]',
      zIndex: 4,
    },
    {
      id: "006",
      title: "KYC & Soft Token ",
      description:
        "Enable fast, secure KYC verification allowing customers to sign up, get verified, and start using financial services in minutes. From facial biometrics to NIN, BVN, and ID validation, every step is streamlined for compliance, speed, and a seamless user experience protected with built-in 2FA soft token.",
      cardClass: "card-6",
      link: "/solutions/kyc-and-soft-token",
      svgRightRef: svgRightRefs[5],
      svgLeft: <SVGLeft />,
      svgRight: <KYC/>,
      y: 'translate-y-[-400%]',
      zIndex: 4,
    },
    {
      id: "007",
      title: "Loyalty",
      description:
        "Design a customized Loyalty Program that rewards customers with usage-based points credited to a dedicated rewards account. Customers can view their reward point statements on our Partner’s Mobile App integrated with our SDK. Reward points can be redeemed for cash under a tailored loyalty program, with funds credited to a dedicated reward redemption account.",
      cardClass: "card-7",
      link: "/solutions/loyalty-management",
      svgRightRef: svgRightRefs[5],
      svgLeft: <SVGLeft />,
      svgRight: <Loyalty />,
      y: 'translate-y-[-500%]',
      zIndex: 4,
    },
  ];
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#solutions",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
            // markers:true
        },
        //   defaults:"none"
      });
      tl.to(".card-2", {
        yPercent: -100,
      });
      tl.to(".card-1", {
        scale: 0.9,
        yPercent: -6,
        delay: -0.5,
      }).to(".card-3", {
        yPercent: -100,
      });
      tl.to(".card-2", {
        scale: 0.9,
        yPercent: -106,
        delay: -0.5,
      })
        .to(".card-1", {
          scale: 0.8,
          yPercent: -11,
          delay: -0.5,
        })
        .to(".card-4", {
          yPercent: -100,
        })
        .to(".card-3", {
          yPercent: -106,
          scale: 0.9,
          delay: -0.5,
        })
        .to(".card-2", {
          scale: 0.8,
          yPercent: -111,
          delay: -0.5,
        }).to(".card-1", {
          scale: 0.7,
          yPercent: -16,
          delay: -0.5,
        })
        .to(".card-5", {
          yPercent: -100
        })
        .to(".card-4", {
          scale: 0.9,
          yPercent: -106,
          delay: -0.5,
        })
        .to(".card-3", {
          yPercent: -111,
          scale: 0.8,
          delay: -0.5,
        })
        .to(".card-2", {
          scale: 0.7,
          yPercent: -116,
          delay: -0.5,
        }).to(".card-1", {
          scale: 0.6,
          yPercent: -20,
          delay: -0.5,
        })
        .to(".card-6", {
          yPercent: -100
        })
        .to(".card-5", {
          scale: 0.9,
          yPercent: -106,
          delay: -0.5,
        })
        .to(".card-4", {
          yPercent: -111,
          scale: 0.8,
          delay: -0.5,
        })
        .to(".card-3", {
          scale: 0.7,
          yPercent: -116,
          delay: -0.5,
        })
        .to(".card-2", {
          scale: 0.6,
          yPercent: -120,
          delay: -0.5,
        }).to(".card-1", {
          scale: 0.5,
          yPercent: -24,
          delay: -0.5,
        }).to(".card-7", {
          yPercent: -100
        }) .to(".card-6", {
          scale: 0.9,
          yPercent: -106,
          delay: -0.5,
        })
        .to(".card-5", {
          yPercent: -111,
          scale: 0.8,
          delay: -0.5,
        })
        .to(".card-4", {
          scale: 0.7,
          yPercent: -116,
          delay: -0.5,
        })
        .to(".card-3", {
          scale: 0.6,
          yPercent: -120,
          delay: -0.5,
        })
    });
    return () => ctx.revert();
  }, []);

  useGSAP(() => {
    svgRightRefs.forEach((ref, index) => {
      const paths = ref.current?.querySelectorAll(".path-draw");
      if (paths) {
        
        const offsetPercent = 0 + index * 100;
  
        gsap.from(paths, {
          scrollTrigger: {
            trigger: ref.current,
            start: `top+=${offsetPercent}% 80%`,
            // markers: true
          },
          duration: 2,
          drawSVG: 0,
        });
      }
    });
  });
  
  
  const handleCardClick = (index) => {
    if (!solutionsRef.current) return;
    const sectionTop =
      solutionsRef.current.getBoundingClientRect().top + window.pageYOffset;
    const scrollY = sectionTop + window.innerHeight * index * 1.19;
    window.scrollTo({ top: scrollY, behavior: "smooth" });
  };

  return (
    <div className="w-full  h-[90vh]  flex flex-col sticky top-[5%]">
      <div className="border-t w-full flex items-center justify-center max-sm:items-center max-sm:justify-center border-b border-[#282828] bg-[#050505]  !px-0 mb-[3vw] max-sm:mb-[20vw]">
        {[
          "Digital Banking ",
          "Merchant Acquiring ",
          "Card Issuing ",
          "Digital Lending",
          "Dual Transaction ",
          "KYC & Soft Token ",
          "Loyalty"
        ].map((item, index) => (
          <div
            key={index}
            className="border-l py-5 w-[15vw] max-sm:min-w-[45vw]  text-center border-r border-[#282828] card-tag cursor-pointer max-sm:pl-[-10vw] text-[#A8A8A8] text-[0.95vw] max-sm:text-[4vw]  max-sm:w-full"
            onClick={() => handleCardClick(index)}
          >
             <ScrambleText onHover={true} speed={0.35} className="min-w-[15vw]">
                                            {item}
                                        </ScrambleText>
          </div>
        ))}
      </div>
      {cardsData.map((item, index) => (
        <SolutionCard
          key={index}
          id={item.id}
          title={item.title}
          description={item.description}
          cardClass={item.cardClass}
          zIndex={item.zIndex}
          svgLeft={item.svgLeft}
          svgRight={item.svgRight}
          y={item.y}
          svgRightRef={item.svgRightRef}
          link={item.link}
        />

      ))}
    </div>
  );
};

export default SolutionsCard;


function SolutionCard({ title, description, cardClass, zIndex, id, link, svgLeft, svgRight, y, svgRightRef }) {
  return (
    <>
      <div className={`h-[85vh] max-sm:h-[90vh] max-sm:py-[20vw] w-full flex items-center justify-center relative ${cardClass} ${zIndex} ${y} `}>
        <div className="w-[75vw] max-sm:hidden h-auto flex items-center justify-center z-0">
          {svgLeft}
        </div>

        <div className="h-full w-full flex items-center justify-center absolute top-0 left-0 inset-0 z-10  !px-[4vw] !pr-[8vw]">
          <div className="flex flex-col items-start px-[12vw] justify-evenly h-[80%] w-full">
            <p className="text-[#A8A8A8] text-content-20 absolute top-[12%] left-[16%]">{id}</p>
            <div className="flex items-start justify-between gap-10">
              <div className="flex items-start justify-start gap-10">
                <div className="h-full w-[2vw] ">
                <svg
  className="w-full h-[70%]"
  width="38"
  height="291"
  viewBox="0 0 38 291"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g filter="url(#filter0_f_73_814920)">
    <rect className="bar bar-3" x="13.9219" y="124.314" width="10.6121" height="41.7132" fill="#FF2900"/>
  </g>
  <rect className="bar bar-3" x="13.9219" y="126.44" width="10.6121" height="37.461" fill="#FF2900"/>

  <g filter="url(#filter1_f_73_814920)">
    <rect className="bar bar-2" x="13.9219" y="84.2959" width="10.6121" height="37.461" fill="#FF5100"/>
  </g>
  <rect className="bar bar-2" x="13.9219" y="84.2959" width="10.6121" height="37.461" fill="#FF5100"/>
  {/* <rect className="" x="13.9219" y="252.871" width="10.6121" height="37.461" fill="#000000"/> */}


  <rect className="bar bar-1" x="13.9219" y="42.1526" width="10.6121" height="37.461" fill="#8F2E00"/>
  <rect className="bar bar-0" x="13.9219" y="0.00878906" width="10.6121" height="37.461" fill="#3F1C00"/>

  <g filter="url(#filter2_f_73_814920)">
    <rect className="bar bar-4" x="13.9219" y="168.583" width="10.6121" height="37.461" fill="#FF5100"/>
  </g>
  <rect className="bar bar-4" x="13.9219" y="168.583" width="10.6121" height="37.461" fill="#FF5100"/>

  <rect className="bar bar-5" x="13.9219" y="210.727" width="10.6121" height="37.461" fill="#8F2E00"/>
  <rect className="bar bar-6" x="13.9219" y="252.871" width="10.6121" height="37.461" fill="#3F1C00"/>

 


  <defs>
    <filter id="filter0_f_73_814920" x="0.500343" y="110.892" width="37.4549" height="68.5562" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="6.71077" result="effect1_foregroundBlur_73_814920"/>
    </filter>
    <filter id="filter1_f_73_814920" x="5.86896" y="76.243" width="26.7177" height="53.5668" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="4.02646" result="effect1_foregroundBlur_73_814920"/>
    </filter>
    <filter id="filter2_f_73_814920" x="5.86896" y="160.531" width="26.7177" height="53.5668" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="4.02646" result="effect1_foregroundBlur_73_814920"/>
    </filter>
  </defs>
</svg>


                  {/* <img
                    className="w-full h-[70%]"
                    src="/assets/images/solutionsLights.png"
                    alt="solutionLights" */}
                  {/* /> */}
                </div>
                <div className="w-[80%] flex flex-col items-start justify-center">
                  <p className="text-[#D6D6D6] font-display leading-none text-[3.12vw] max-sm:text-[4vw]">
                    {title}
                  </p>
                  <p className="pt-10 text-[1.04vw] text-[#A8A8A8] w-full">
                    {description}
                  </p>
                  <div className="pt-10">
                    <BlackButton href={link} text={"Read More"} />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end pt-[3vw]">
                <div className="h-[14vw] w-[20vw]">
                  <svg
                  className="h-full w-full"
                    width="251"
                    height="252"
                    viewBox="0 0 251 252"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    ref={svgRightRef}
                  >
                    {svgRight}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


