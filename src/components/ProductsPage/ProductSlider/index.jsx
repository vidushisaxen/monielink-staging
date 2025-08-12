'use client'
import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import SplitText from 'gsap/SplitText'
import Image from 'next/image'
import PrimaryButton from '@/components/Buttons/PrimaryButton'
import RadialSegmentedProgressBar from './RadialSegmentedProgressBar';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollToPlugin,useGSAP);

const products = [
    {
        id: 1,
        title: "Balance",
        description: [
            "Monielink powers you to build a full-featured digital wallet ecosystem for both consumers and merchants, with support for multiple currencies. Instantly issue virtual Debit, Credit, or Prepaid cards through our integrated card issuing platform and SDK.",
            "You can also assign NUBAN account numbers linked to verified mobile numbers, allowing customers to receive inflow transfers using just their phone number."
        ],
        img: "/assets/images/products/product-balance.svg",
        href: '/products/balance'
    },
        {
        id: 2,
        title: "ScanPay",
        description: [
            "Merchants can instantly self-onboard to start accepting digital and card payments directly into their settlement accounts. Each merchant is issued an interoperable QR code compatible with any bank, ensuring seamless and universal payment acceptance via ScanPay.",
            "They receive instant payment notifications and can view all transactions in real time through the dashboard and account statement — fully accessible via our SDK within your mobile app."
        ],
        img: "/assets/images/products/product-scanpay.svg",
        href: '/products/scanpay'
    },
    {
        id: 3,
        title: "TapPay",
        description: [
            "With TapPay, merchants can digitally self-onboard and start accepting contactless card payments using Soft-POS directly on their NFC-enabled Android phones all within your mobile app via Monielink’s SDK.",
            "Merchants can also request a physical POS terminal. Eligibility is automatically scored based on rules set by your institution, with approvals handled seamlessly through the SDK.",
            "Every TapPay transaction triggers instant notifications, with real-time visibility into payments via the dashboard and collection account statement — all accessible through your app."
        ],
        img: "/assets/images/products/product-tappay.svg",
        href: '/products/tap-pay'
    },
    {
        id: 4,
        title: "Instacard",
        description: [
           "Issue virtual debit, credit, prepaid, and universal cards instantly via your mobile app. Instacard supports online and offline use, with enhanced security through dynamic CVV and tokenized contactless payments.",
           "Customers can link virtual cards to a physical Universal Instacard for global ATM and POS use",
           "All card controls including limits, block & unblock card, and instant linking are managed seamlessly through your app via our SDK."
        ],
        img: "/assets/images/products/product-instacard.svg",
        href: '/products/instacard'
    },
    {
        id: 5,
        title: "Verifyed",
        description: [
           "Verifyed simplifies digital KYC with instant onboarding, facial recognition, passive liveness detection, and soft-token-based two-factor authentication — all via the Monielink SDK.",
           " It supports ID and address verification, location checks, and CAC-based business verification for secure, compliant onboarding."
        ],
        img: "/assets/images/products/product-verifyed.svg",
        href: '/products/verifyed'
    },
    {
        id: 6,
        title: "SnapCred",
        description: [
            "SnapCred is Monielink’s cloud-based credit infrastructure that enables lenders and issuers to originate, disburse, manage, and collect towards creating profitable credit programs.",
            "Using our SDK and web portal, you can configure underwriting and collection rules, launch credit products, and automate disbursements directly through your mobile app.",
            "Borrowers can view statements, make repayments from any linked bank account, and manage obligations with ease",
            "SnapCred supports real-time portfolio tracking, automated collections (including from non-host banks via GSI), and full lifecycle management — from origination to recovery."
        ],
        img: "/assets/images/products/product-snapcred.svg",
        href: '/products/snapcred'
    },
    {
        id: 7,
        title: "Reward+",
        description: [
            "Boost adoption and engagement with Reward+ — a customizable loyalty program that credits usage-based points to a dedicated rewards account.",
            "Customers can view and track their points in real time through your mobile app via the Monielink SDK."
        ],
        img: "/assets/images/products/product-reward.svg",
        href: '/products/reward'
    },
    {
        id: 8,
        title: "ChatBox",
        description: [
            "Enhance user experience with interactive FAQs, product guides, and self-training videos — all accessible via the Monielink Super SDK. ",
            "Chatbox helps users explore features, get instant answers, and learn how to use services with ease, making it an essential support tool for banks and issuers."
        ],
        img: "/assets/images/products/product-chatbox.svg",
        href: '/proucts/chatbox'
    },
    {
        id: 9,
        title: "DUO",
        description: [
            "DUO transforms existing debit cards into powerful virtual credit cards using our patented Dual Transaction Service (DTS). ",
            "With DTS, pre-approved customers can access their virtual credit limit through their existing Visa, Mastercard, or Verve debit cards — without needing a new physical credit card.",
            "Once activated via your mobile app (using our SDK), users simply select 'Credit' when prompted at any POS or ATM. The transaction is seamlessly processed against the balance Credit Limit  offered on DUO virtual credit card."
        ],
        img: "/assets/icons/duo-logo.svg",
        href: '/proucts/duo'
    },
]

export default function ProductSlider() {
    const containerRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        let ctx = gsap.context(() => {

            const slides = gsap.utils.toArray('.slide');
            const total = slides.length;

            const splits = slides.map(slide => {
                const elems = slide.querySelectorAll('.splitLines');
                return new SplitText(elems, {
                    type: 'lines',
                    mask: 'lines',
                    linesClass: 'line',
                    lineThreshold: 0.1,
                });
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'solutions-slider-solutions-page',
                    trigger: containerRef.current,
                    start: 'top top',
                    end: "bottom bottom",
                    scrub: true,
                    snap: {
                        snapTo: [0, 0.17, 0.29, 0.41, 0.53, 0.65, 0.75, 0.88, 1],
                        duration: { min: 0.1, max: 0.3 },
                        ease: 'power1.inOut',
                        delay: 0,
                        directional: false,
                    },
                    onUpdate: self => {
                        setScrollProgress(self.progress);
                        setActiveSlide(Math.min(total - 1, Math.floor(self.progress * total)));
                    },
                }
            });

            slides.forEach((slide, i) => {
                const currSplit = splits[i];
                const imgCurr = slide.querySelector('img');
                const btnCurr = slide.querySelector('.btnFade');

                if (i < total - 1) {
                    tl.to(imgCurr, {opacity: 0, y: -20, duration: 0.5, ease: 'power1.inOut', delay: 0.5 }, i)
                        .to(currSplit.lines, { yPercent: -100, duration: 0.5, ease: 'power1.inOut' }, '<')
                        .to(btnCurr, {opacity: 0, y: -20, duration: 0.5, ease: 'power1.inOut'}, '<')
                        .set(currSplit.lines, { yPercent: 100 });

                    const nextSplit = splits[i + 1];
                    const imgNext = slides[i + 1].querySelector('img');
                    const btnNext = slides[i + 1].querySelector('.btnFade');

                    tl.from(imgNext, {opacity: 0, y: 20, duration: 0.5, ease: 'power1.inOut'}, '>')
                        .from(nextSplit.lines, { yPercent: 100, duration: 0.5, ease: 'power1.inOut' }, '<')
                        .from(btnNext, {opacity: 0, y: 20, duration: 0.5, ease: 'power1.inOut'}, '<');
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    useGSAP(() => {
        gsap.fromTo(
          ".radial",
          {
            x: -50,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current, 
              start: "top 80%", 
            },
          }
        );
      }, []);

    const goToSlide = i => {
        const st = ScrollTrigger.getById('solutions-slider-solutions-page');
        if (!st) return;
        const scrollY = st.start + (st.end - st.start) * (i / (products.length - 1));
        gsap.to(window, {
            scrollTo: scrollY,
            duration: 0.6,
            ease: 'power2.inOut'
        });
    };
    const handleSkip = () => {
        const next = document.getElementById("launch");
        if (next) next.scrollIntoView({ behavior: "smooth" });
      };

    return (
        <section data-theme = "white"
            ref={containerRef}
            className="bg-white-1 relative h-[800vh] max-md:hidden max-sm:hidden py-[5vw]"
            style={{ height: `${products.length * 100}vh` }}
        >
            <div className='sticky h-screen top-0 py-[5vw] overflow-hidden w-screen px-[4.5vw] '>
                {/* buttons + progress bar */}
                {/* <div className="flex justify-between mb-6">
                    {products.map((f, i) => (
                        <button
                            key={i}
                            className={`w-[10vw] first:text-left text-center last:text-right cursor-pointer font-body transition-all duration-300 text-content-18 ${i === activeSlide ? "text-white" : "text-gray-2"}`}
                            onClick={() => goToSlide(i)}
                        >
                            <DecryptedText text={f.title} speed={60} />
                        </button>
                    ))}
                </div> */}
                <div className='absolute left-[-17%] top-1/2 -translate-y-1/2 radial'>
                    <RadialSegmentedProgressBar
                        size={650}
                        progress={scrollProgress * 100}
                        labels={[
                            { text: '001', index: 2 },
                            { text: '002', index: 12 },
                            { text: '003', index: 24 },
                            { text: '004', index: 36 },
                            { text: '005', index: 48 },
                            { text: '006', index: 60 },
                            { text: '007', index: 72 },
                            { text: '008', index: 84 }, 
                            { text: '009', index: 96 },
                        ]}
                    />
                </div>


                {/* slides container */}
                <div className="relative h-full w-full">
                    {products.map((f, i) => (
                        <div
                            key={i}
                            className={`slide absolute inset-0 flex py-[8vw] z-0 pointer-events-none w-[60%] ml-auto ${i === activeSlide ? "z-10 pointer-events-auto" : ""}`}
                        >
                            <div className="w-full flex flex-col gap-[2.5vw]">
                                <div className="w-[18vw] h-[5vw] mb-[1vw] flex justify-start items-start">
                                    <Image
                                        src={f.img}
                                        alt={f.title}
                                        width={200}
                                        height={100}
                                        className="w-full h-full object-contain object-left"
                                    />
                                </div>
                                <div className='text-content-20 font-body text-black-1 space-y-[1.5vw] w-[80%]'>
                                    {f.description.map((item, index) => (
                                        <p key={index} className="splitLines">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                                <div className='w-fit btnFade'>
                                    <PrimaryButton text="Know More" href={f.href} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button  onClick={handleSkip} className="round absolute bottom-0 right-0 ml-[-1vw] flex items-center justify-center min-w-[9vw] h-[4.3vw] w-fit max-sm:h-[17vw] max-sm:min-w-[34vw] cursor-pointer">
                <div className="absolute inset-0 z-10">
                    <div className="w-[80%] mx-auto h-full text-black relative z-10 flex items-center gap-3 justify-center">
                        <span className="text-content-18">Skip</span>
                        <div className="-rotate-90 text-black flex items-center justify-center gap-0 w-[1vw] h-full max-sm:w-[3vw]">
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
    )
}