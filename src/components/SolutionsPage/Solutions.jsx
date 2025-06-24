// 'use client'
// import { useRef } from "react"
// import SegmentedProgressBar from "./SegmntedProgressBar";
// import Image from "next/image";
// import PrimaryButton from "../Buttons/PrimaryButton";

// export default function Solutions() {
//     const containerRef = useRef();

//     return (
//         <section ref={containerRef} className="bg-black-1 px-[4.5vw] py-[5vw]">
//             <div className="flex w-full flex-col">   
//                 <div className="space-y-5">
//                     <div className="flex w-full justify-between items-center">
//                         {buttons.map(({text, id}) => (
//                             <button key={id} className="cursor-pointer font-body text-gray-1">{text}</button>
//                         ))}
//                     </div>
//                     <div className="w-full">
//                         <SegmentedProgressBar percent={100} segments={80} />
//                     </div>
//                 </div>

//                 <div>
//                     <Slide />
//                 </div>
//             </div>
//         </section>
//     )
// }

// const buttons = [
//     { id: 1, text: "Digital Account" },
//     { id: 2, text: "Loyalty" },
//     { id: 3, text: "Merchant Acquiring" },
//     { id: 4, text: "Digital Lending" },
//     { id: 5, text: "Card Issuing" },
//     { id: 6, text: "KYC" },
// ]

// const Slide = () => {
//     return (
//         <div className="w-full flex items-center justify-between gap-[3vw] py-[8vw]">
//             <div className="w-1/2 flex justify-center">
//                 <Image src={"/assets/images/solutions/slide-1.svg"} alt="slide 1" width={500} height={500} />
//             </div>
//             <div className="w-1/2 flex flex-col gap-[2.5vw]">
//                 <div className="flex gap-3 items-center"><span className="block h-[2.2vw] w-[0.5vw] mt-2 -ml-5 bg-primary-2"></span><h3 className="text-head-60 font-display font-light">Digital Account</h3></div>
//                 <p className="text-content-20 text-gray-2 w-9/10">Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.</p>
//                 <PrimaryButton text={"Know More"} href="#" />
//             </div>
//         </div>
//     )
// }

// const FeatureData = [
//     {
//         id: 1,
//         title: "Digital Account",
//         description: "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
//         img: "/assets/images/solutions/slide-1.svg"
//     },
//     {
//         id: 2,
//         title: "Loyalty",
//         description: "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
//         img: "/assets/images/solutions/slide-1.svg"
//     },
//     {
//         id: 3,
//         title: "Merchant Acquiring",
//         description: "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
//         img: "/assets/images/solutions/slide-1.svg"
//     },
//     {
//         id: 4,
//         title: "Digital Lending",
//         description: "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
//         img: "/assets/images/solutions/slide-1.svg"
//     },
//     {
//         id: 5,
//         title: "Card Issuing",
//         description: "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
//         img: "/assets/images/solutions/slide-1.svg"
//     },
//     {
//         id: 6,
//         title: "KYC",
//         description: "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
//         img: "/assets/images/solutions/slide-1.svg"
//     },
// ]

'use client'
import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import Image from 'next/image'
import SegmentedProgressBar from './SegmntedProgressBar'
import PrimaryButton from '../Buttons/PrimaryButton'

// register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText)

const features = [
    {
        id: 1,
        title: "Digital Account",
        description: "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
        img: "/assets/images/solutions/slide-1.svg"
    },
    {
        id: 2,
        title: "Loyalty",
        description: "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
        img: "/assets/images/solutions/slide-1.svg"
    },
    {
        id: 3,
        title: "Merchant Acquiring",
        description: "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
        img: "/assets/images/solutions/slide-1.svg"
    },
    {
        id: 4,
        title: "Digital Lending",
        description: "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
        img: "/assets/images/solutions/slide-1.svg"
    },
    {
        id: 5,
        title: "Card Issuing",
        description: "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
        img: "/assets/images/solutions/slide-1.svg"
    },
    {
        id: 6,
        title: "KYC",
        description: "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
        img: "/assets/images/solutions/slide-1.svg"
    },
]

export default function Solutions() {
    const containerRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const slides = gsap.utils.toArray(".slide")
            const totalSlides = slides.length

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: () => `+=${totalSlides * window.innerHeight}`,
                    scrub: true,
                    pin: true,
                    snap: {
                        snapTo: 1 / (totalSlides - 1),
                        duration: { min: 0.2, max: 0.4 },
                        ease: "power1.out",
                    },
                    onUpdate: self => {
                        const idx = Math.min(
                            totalSlides - 1,
                            Math.floor(self.progress * totalSlides)
                        )
                        setActiveSlide(idx)
                    },
                },
            })

            slides.forEach((slide, i) => {
                // grab the DOM nodes
                const content = slide.querySelectorAll(".splitLines")
                const heading = slide.querySelectorAll(".titleFade")
                const para = slide.querySelectorAll(".paraFade")
                const img = slide.querySelector("img")

                // split current slide text into lines
                const splitCurr = new SplitText(content, {
                    type: "lines",
                    mask: 'lines',
                    linesClass: "line",
                    lineThreshold: 0.1,
                })

                if (i < totalSlides - 1) {
                    // animate current slide out
                    tl.to(
                        splitCurr.lines,
                        {
                            yPercent: -100,
                            stagger: 0.05,
                            duration: 0.5,
                            ease: "power1.inOut",
                        },
                        i
                    )
                    // .to(
                    //     para.lines, {
                    //         yPercent: -100,
                    //         stagger: 0.05,
                    //         duration: 0.5,
                    //         ease: "power1.inOut",
                    //     },
                    //     i
                    // )
                        .to(
                            img,
                            { scale: 0.8, opacity: 0, duration: 0.5, ease: "power1.inOut" },
                            `<`
                        )
                        .set(splitCurr.lines, { yPercent: 100 })

                    // prepare next slide
                    const next = slides[i + 1]

                    const nextContent = next.querySelectorAll(".splitLines")
                    const nextHeading = next.querySelectorAll(".titleFade")
                    const nextPara = next.querySelectorAll(".paraFade")
                    const nextImg = next.querySelector("img")

                    // const splitNext = new SplitText(nextContent, {
                    //     type: "lines",
                    //     mask: 'lines',
                    //     linesClass: "line",
                    //     lineThreshold: 0.1,
                    // });

                    // animate next slide in
                    tl.from(
                        nextHeading.lines,
                        {
                            yPercent: 100,
                            stagger: 0.05,
                            duration: 0.5,
                            ease: "power1.inOut",
                        },
                        `>`
                    )
                    // .from(
                    //         nextPara.lines,
                    //         {
                    //             yPercent: 100,
                    //             stagger: 0.05,
                    //             duration: 0.5,
                    //             ease: "power1.inOut",
                    //         },
                    //         `>`
                    //     )
                    .from(
                        nextImg,
                        { scale: 0.8, opacity: 0, duration: 0.5, ease: "power1.inOut" },
                        `<`
                    )
                }
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={containerRef}
            className="bg-black-1 px-[4.5vw] py-[5vw] overflow-hidden"
        >
            {/* buttons + progress bar */}
            <div className="flex justify-between mb-6">
                {features.map((f, i) => (
                    <button
                        key={i}
                        className={`font-body ${i === activeSlide ? "text-white" : "text-gray-500"
                            }`}
                    >
                        {f.title}
                    </button>
                ))}
            </div>
            <SegmentedProgressBar
                percent={(activeSlide / (features.length - 1)) * 100}
                segments={features.length}
            />

            {/* slides container */}
            <div className="relative h-[80vh] mt-10">
                {features.map((f, i) => (
                    <div
                        key={i}
                        className="slide absolute inset-0 flex items-center justify-between gap-[3vw] py-[8vw]"
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
                            <div className="flex gap-3 items-center splitLines titleFade">
                                <span className="block h-[2.2vw] w-[0.5vw] bg-primary-2"></span>
                                <h3 className="text-head-60 font-display font-light">
                                    {f.title}
                                </h3>
                            </div>
                            <p className="text-content-20 text-gray-2 w-9/10 paraFade splitLines">
                                {f.description}
                            </p>
                            <div className='w-fit btnFade'>
                                <PrimaryButton text="Know More" href="#" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
