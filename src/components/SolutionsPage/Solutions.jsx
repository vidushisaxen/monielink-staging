'use client'
import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import SplitText from 'gsap/SplitText'
import Image from 'next/image'
import SegmentedProgressBar from './SegmntedProgressBar'
import PrimaryButton from '../Buttons/PrimaryButton'
import DecryptedText from '../DecryptedText'

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollToPlugin)

const features = [
    {
        id: 1,
        title: "Digital Account",
        description: "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
        img: "/assets/images/solutions/slide-1.svg",
        href: '/digital-account'
    },
    {
        id: 2,
        title: "Loyalty",
        description: "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
        img: "/assets/images/solutions/slide-1.svg",
        href: '/loyalty'
    },
    {
        id: 3,
        title: "Merchant Acquiring",
        description: "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
        img: "/assets/images/solutions/slide-1.svg",
        href: '/merchant-acquiring'
    },
    {
        id: 4,
        title: "Digital Lending",
        description: "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
        img: "/assets/images/solutions/slide-1.svg",
        href: '/digital-lending'
    },
    {
        id: 5,
        title: "Card Issuing",
        description: "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
        img: "/assets/images/solutions/slide-1.svg",
        href: '/card-issuing'
    },
    {
        id: 6,
        title: "KYC",
        description: "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
        img: "/assets/images/solutions/slide-1.svg",
        href: '/kyc'
    },
]

export default function Solutions() {
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
                    tl.to(currSplit.lines, { yPercent: -100, duration: 0.5, ease: 'power1.inOut' }, i)
                        .to([imgCurr, btnCurr], {
                            scale: 0.8,
                            opacity: 0,
                            y: (el) => el === btnCurr ? -20 : 0,
                            duration: 0.5,
                            ease: 'power1.inOut'
                        }, '<')
                        .set(currSplit.lines, { yPercent: 100 });

                    // animate next slide in
                    const nextSplit = splits[i + 1];
                    const imgNext = slides[i + 1].querySelector('img');
                    const btnNext = slides[i + 1].querySelector('.btnFade');

                    tl.from(nextSplit.lines, {
                        yPercent: 100,
                        stagger: 0.05,
                        duration: 0.5,
                        ease: 'power1.inOut'
                    }, '>')
                        .from([imgNext, btnNext], {
                            scale: 0.8,
                            opacity: 0,
                            y: (el) => el === btnNext ? 20 : 0,
                            duration: 0.5,
                            ease: 'power1.inOut'
                        }, '<');
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const goToSlide = i => {
        const st = ScrollTrigger.getById('solutions-slider-solutions-page');
        if (!st) return;
        const scrollY = st.start + (st.end - st.start) * (i / (features.length - 1));
        gsap.to(window, {
            scrollTo: scrollY,
            duration: 0.6,
            ease: 'power2.inOut'
        });
    };

    return (
        <section
            ref={containerRef}
            className="bg-black-1 px-[4.5vw] relative h-[600vh]"
            style={{ height: `${features.length * 100}vh` }}
        >
            <div className='sticky h-screen top-0 py-[5vw]'>
                {/* buttons + progress bar */}
                <div className="flex justify-between mb-6">
                    {features.map((f, i) => (
                        <button
                            key={i}
                            className={`w-[10vw] first:text-left text-center last:text-right cursor-pointer font-body transition-all duration-300 text-content-18 ${i === activeSlide ? "text-white" : "text-gray-2"}`}
                            onClick={() => goToSlide(i)}
                        >
                            <DecryptedText text={f.title} speed={60} />
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
                            className={`slide absolute inset-0 flex items-center justify-between gap-[3vw] py-[8vw] transition-all duration-300 z-0 pointer-events-none ${i === activeSlide ? "z-10 pointer-events-auto" : ""}`}
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