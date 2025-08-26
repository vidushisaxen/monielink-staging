'use client'
import Copy from '@/components/Animations/Copy';
import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);


const data = [
    {
        svg: "/assets/icons/diagrams/online-banking.svg",
        title: "Online Banking",
    },
    {
        svg: "/assets/icons/diagrams/mobile-banking.svg",
        title: "Mobile Banking"
    },
    {
        svg: "/assets/icons/diagrams/atm.svg",
        title: "ATM"
    },
    {
        svg: "/assets/icons/diagrams/contact-centre.svg",
        title: "Contact Centre"
    },
    {
        svg: "/assets/icons/diagrams/transaction-authentication.svg",
        title: "Transaction Authentication"
    },
    {
        svg: "/assets/icons/diagrams/2FA.svg",
        title: "2FA for Platform Sign-in"
    },
    {
        svg: "/assets/icons/diagrams/forgot-password.svg",
        title: "Forgot Password / PIN"
    },
    {
        svg: "/assets/icons/diagrams/web-payments.svg",
        title: "3DS – Web Payments"
    },
]

const SelfToken = () => {
    const sectionRef = useRef(null);
    const svgContainer = useRef(null);
    return (
        <>
            <section data-theme="orange" className='w-screen h-full overflow-hidden bg-gradient max-md:mt-[-1px] relative max-sm:py-[10vw]' ref={sectionRef}>
                <div className='px-[4vw] py-[7vw] flex flex-col items-center  gap-[7vw]'>
                    <div className='w-[95%] space-y-[9vw] max-sm:w-full'>
                        <Copy>
                            <h2 className='text-head-100 font-display text-center  max-sm:text-left'>
                                Soft-Token verifications (Use-cases)
                            </h2>
                        </Copy>
                    </div>

                    
                        <div className='w-[70%] fadeupanim flex items-center justify-center max-sm:flex-wrap max-sm:w-full max-sm:gap-[5vw] max-sm:gap-y-[10vw]' ref={svgContainer}>
                            {data.slice(0, 4).map((item, index) => (
                                <div key={index} className='max-sm:w-[40vw] max-sm:h-auto'>
                                    <div className='max-sm:h-[42vw] max-sm:w-[42vw]'>
                                    <Image
                                        src={item.svg}
                                        height={210}
                                        width={242}
                                        alt={item.title}
                                    />
                                    </div>
                                    <p className="text-content-24 font-body mx-[1vw] max-sm:w-[80%] max-sm:text-content-20 max-sm:ml-[5vw]">{item.title}</p>
                                </div>
                            ))}


                        
                    </div>

                   
                        <div className='w-[75%] fadeupanim  flex items-center justify-center max-sm:flex-wrap max-sm:w-full max-sm:gap-[5vw] max-sm:gap-y-[10vw]' ref={svgContainer}>

                            {data.slice(4, 8).map((item, index) => (
                                <div key={index} className='max-sm:w-[40vw] max-sm:h-auto'>
                                    <div className='max-sm:h-[42vw] max-sm:w-[42vw]'>
                                    <Image
                                        src={item.svg}
                                        height={210}
                                        width={242}
                                        alt={item.title}
                                    />
                                    </div>
                                    <p className="text-content-24 font-body mx-[1vw] max-sm:w-[80%] max-sm:text-content-20 max-sm:ml-[5vw]">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
            </section>
        </>
    )
}

export default SelfToken