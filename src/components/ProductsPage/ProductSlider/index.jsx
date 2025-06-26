'use client'
import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import SplitText from 'gsap/SplitText'
import Image from 'next/image'
import PrimaryButton from '@/components/Buttons/PrimaryButton'
import DecryptedText from '@/components/DecryptedText'
import RadialSegmentedProgressBar from './RadialSegmentedProgressBar';

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollToPlugin);

const products = [
    {
        id: 1,
        title: "Balance",
        description: [
            "Merchants can instantly self-onboard to start accepting digital and card payments into their own settlement accounts. Each merchant receives an open-loop, interoperable QR code that works with any bank — enabling seamless, universal payment acceptance.",
            "Merchants receive instant notifications for every payment received via ScanPay.",
            "Merchants can instantly view received payments on the dashboard and account statement—seamlessly accessible via our SDK within the partner's mobile app."
        ],
        img: "/assets/images/products/product-balance.svg",
        href: '#'
    },
        {
        id: 2,
        title: "ScanPay",
        description: [
            "Merchants can instantly self-onboard to start accepting digital and card payments into their own settlement accounts. Each merchant receives an open-loop, interoperable QR code that works with any bank — enabling seamless, universal payment acceptance.",
            "Merchants receive instant notifications for every payment received via ScanPay.",
            "Merchants can instantly view received payments on the dashboard and account statement—seamlessly accessible via our SDK within the partner's mobile app."
        ],
        img: "/assets/images/products/product-scanpay.svg",
        href: '#'
    },
    {
        id: 3,
        title: "TapPay",
        description: [
            "Merchants can instantly self-onboard to start accepting digital and card payments into their own settlement accounts. Each merchant receives an open-loop, interoperable QR code that works with any bank — enabling seamless, universal payment acceptance.",
            "Merchants receive instant notifications for every payment received via ScanPay.",
            "Merchants can instantly view received payments on the dashboard and account statement—seamlessly accessible via our SDK within the partner's mobile app."
        ],
        img: "/assets/images/products/product-tappay.svg",
        href: '#'
    },
    {
        id: 4,
        title: "Instacard",
        description: [
            "Merchants can instantly self-onboard to start accepting digital and card payments into their own settlement accounts. Each merchant receives an open-loop, interoperable QR code that works with any bank — enabling seamless, universal payment acceptance.",
            "Merchants receive instant notifications for every payment received via ScanPay.",
            "Merchants can instantly view received payments on the dashboard and account statement—seamlessly accessible via our SDK within the partner's mobile app."
        ],
        img: "/assets/images/products/product-instacard.svg",
        href: '#'
    },
    {
        id: 5,
        title: "Verifyed",
        description: [
            "Merchants can instantly self-onboard to start accepting digital and card payments into their own settlement accounts. Each merchant receives an open-loop, interoperable QR code that works with any bank — enabling seamless, universal payment acceptance.",
            "Merchants receive instant notifications for every payment received via ScanPay.",
            "Merchants can instantly view received payments on the dashboard and account statement—seamlessly accessible via our SDK within the partner's mobile app."
        ],
        img: "/assets/images/products/product-verifyed.svg",
        href: '#'
    },
    {
        id: 6,
        title: "SnapCred",
        description: [
            "Merchants can instantly self-onboard to start accepting digital and card payments into their own settlement accounts. Each merchant receives an open-loop, interoperable QR code that works with any bank — enabling seamless, universal payment acceptance.",
            "Merchants receive instant notifications for every payment received via ScanPay.",
            "Merchants can instantly view received payments on the dashboard and account statement—seamlessly accessible via our SDK within the partner's mobile app."
        ],
        img: "/assets/images/products/product-snapcred.svg",
        href: '#'
    },
    {
        id: 7,
        title: "Reward",
        description: [
            "Merchants can instantly self-onboard to start accepting digital and card payments into their own settlement accounts. Each merchant receives an open-loop, interoperable QR code that works with any bank — enabling seamless, universal payment acceptance.",
            "Merchants receive instant notifications for every payment received via ScanPay.",
            "Merchants can instantly view received payments on the dashboard and account statement—seamlessly accessible via our SDK within the partner's mobile app."
        ],
        img: "/assets/images/products/product-reward.svg",
        href: '#'
    },
    {
        id: 8,
        title: "ChatBox",
        description: [
            "Merchants can instantly self-onboard to start accepting digital and card payments into their own settlement accounts. Each merchant receives an open-loop, interoperable QR code that works with any bank — enabling seamless, universal payment acceptance.",
            "Merchants receive instant notifications for every payment received via ScanPay.",
            "Merchants can instantly view received payments on the dashboard and account statement—seamlessly accessible via our SDK within the partner's mobile app."
        ],
        img: "/assets/images/products/product-chatbox.svg",
        href: '#'
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
                    // animate current slide out
                    tl.to(imgCurr, {opacity: 0, y: -20, duration: 0.5, ease: 'power1.inOut', delay: 0.5 }, i)
                        .to(currSplit.lines, { yPercent: -100, duration: 0.5, ease: 'power1.inOut' }, '<')
                        .to(btnCurr, {opacity: 0, y: -20, duration: 0.5, ease: 'power1.inOut'}, '<')
                        .set(currSplit.lines, { yPercent: 100 });

                    // animate next slide in
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

    return (
        <section data-theme = "white"
            ref={containerRef}
            className="bg-white-1 relative h-[800vh]"
            style={{ height: `${products.length * 100}vh` }}
        >
            <div className='sticky h-screen top-0 py-[5vw] overflow-hidden w-screen px-[4.5vw]'>
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
                <div className='absolute left-[-17%] top-1/2 -translate-y-1/2 fadeupanim'>
                    <RadialSegmentedProgressBar
                        size={650}
                        progress={scrollProgress * 100}
                        labels={[
                            { text: '001', index: 2 },
                            { text: '002', index: 13 },
                            { text: '003', index: 26 },
                            { text: '004', index: 39 },
                            { text: '005', index: 52 },
                            { text: '006', index: 65 },
                            { text: '007', index: 82 },
                            { text: '008', index: 96 },
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
            </div>
        </section>
    )
}