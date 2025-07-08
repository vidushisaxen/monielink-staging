"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import Copy from "../Animations/Copy";
import { useGSAP } from "@gsap/react";
import { fadeUpAnim } from "../Animations/gsapAnimations";
import HeroBackground from "../Hero/HeroBackground";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

export default function Hero() {
    fadeUpAnim();
    const btnContainer = useRef();

    useGSAP(() => {
        const tl = gsap.timeline();
        gsap.to('#loader', {
            duration: 0.5,
            opacity: 0,
            delay: 1.5,
        })
        tl.fromTo(btnContainer.current, {
            y: 50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 2,
        })
    });

    return (
        <section className="w-screen relative h-screen  max-sm:pb-0 bg-background overflow-hidden">
            <div className="fixed pointer-events-none z-[999] w-screen h-screen max-sm:h-fit bg-black" id="loader" />
            <div className="relative h-screen space-y-[7vw] max-sm:h-[80vh] max-sm:pt-[15vh] w-full flex flex-col items-center justify-center max-sm:items-start max-sm:px-[2vw]">
                <HeroBackground />
                <div
                    className={`h-fit pointer-events-none w-full !pt-[15vw] flex-col flex items-center justify-center z-10 text-foreground max-sm:items-start text-center max-sm:text-left max-sm:pl-[5vw] max-sm:pt-[0vw]`}
                >
                    <Copy delay={1.8}>
                        <h1 className={`text-head-150 font-display w-[80%] headingText  text-gray-1 max-sm:w-[90%]`}>
                            Get in Touch
                        </h1>
                    </Copy>
                    <div
                        className={`w-[50%] max-md:w-[60%] pt-5 max-md:pt-[5vw] text-content-20 max-sm:text-left text-gray-2 max-sm:w-full max-sm:pt-[10vw]`}>
                        <Copy delay={2}>
                            <p className="descriptionText max-sm:text-left max-sm:text-content-20 max-sm:leading-[1.5]">
                                We&apos;re here to help you launch, scale, and grow in the digital finance economy. Whether you're a bank, fintech, merchant, or partner — let&apos;s connect and build the future of finance together.
                            </p>
                        </Copy>
                    </div>

                </div>

                <div className="flex items-center max-sm:hidden max-md:flex-wrap  justify-center gap-[3vw] z-[99]">
                    <div className="relative w-[18vw] max-md:w-[45%] max-md:h-[28vw] h-[18vw] z-[99] max-sm:w-[80vw] max-sm:h-[60vw] backdrop-blur-md pointer-events-none rounded-[1vw] fadeupanim">
                        <Image
                            src="/assets/icons/contact/card-frame.svg"
                            alt="card-frame"
                            fill
                            className="object-contain "
                        />

                        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center p-4 space-y-[3vw]">
                            <div className="h-[5vw] w-[5vw] max-sm:w-[10vw] max-sm:h-[10vw] max-md:w-[10vw] max-md:h-[10vw]">
                                <Image
                                    src="/assets/icons/contact/location.svg"
                                    height={40}
                                    width={40}
                                    alt="location"
                                    className="w-full h-full"
                                />
                            </div>
                            <Copy>
                                <p className="text-content-20 text-gray-2">
                                    23 Adeola Odeku Street, <br /> Victoria Island, Lagos, Nigeria
                                </p>
                            </Copy>
                        </div>
                    </div>
                    <div className="relative max-md:w-[45%] max-md:h-[28vw] w-[18vw] h-[18vw] z-[99] backdrop-blur-md pointer-events-none rounded-[1vw] fadeupanim">

                        <Image
                            src="/assets/icons/contact/card-frame.svg"
                            alt="card-frame"
                            fill
                            className="object-contain"
                        />

                        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center p-4 space-y-[3vw]">
                            <div className="h-[5vw] w-[5vw] max-md:w-[10vw] max-md:h-[10vw]">
                                <Image
                                    src="/assets/icons/contact/mail.svg"
                                    height={40}
                                    width={40}
                                    alt="location"
                                    className="w-full h-full"
                                />
                            </div>
                            <Copy>
                                <p className="text-content-20 text-gray-2">
                                    contact@monielink.io
                                </p>
                            </Copy>
                        </div>
                    </div>
                    <div className="relative max-md:w-[45%] max-md:h-[28vw] w-[18vw] h-[18vw] z-[99] backdrop-blur-md pointer-events-none rounded-[1vw] fadeupanim">

                        <Image
                            src="/assets/icons/contact/card-frame.svg"
                            alt="card-frame"
                            fill
                            className="object-contain"
                        />

                        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center p-4 space-y-[3vw]">
                            <div className="h-[5vw] w-[5vw] max-md:w-[10vw] max-md:h-[10vw]">
                                <Image
                                    src="/assets/icons/contact/phone.svg"
                                    height={40}
                                    width={40}
                                    alt="location"
                                    className="w-full h-full"
                                />
                            </div>
                            <Copy>
                                <p className="text-content-20 text-gray-2">
                                    +2348023970955
                                </p>
                            </Copy>
                        </div>
                    </div>
                </div>

                <div className="max-sm:flex max-sm:items-start hidden  justify-center gap-[3vw] z-[99] max-sm:flex-col max-sm:w-full max-sm:px-[5.5vw]">
                    <div className="relative w-[18vw] h-[18vw] z-[99] max-sm:w-[70vw] max-sm:h-[35vw] backdrop-blur-lg fadeupanim">
                        <Image
                            src="/assets/icons/contact/card-frame-mobile.svg"
                            alt="card-frame"
                            fill
                            className="object-contain"
                        />

                        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center p-4 space-y-[3vw]">
                            <div className="h-[5vw] w-[5vw] max-sm:w-[12vw] max-sm:h-[12vw]">
                                <Image
                                    src="/assets/icons/contact/location.svg"
                                    height={40}
                                    width={40}
                                    alt="location"
                                    className="w-full h-full"
                                />
                            </div>
                            <Copy>
                                <p className="text-content-20 text-gray-2">
                                    23 Adeola Odeku Street, <br /> Victoria Island, Lagos, Nigeria
                                </p>
                            </Copy>
                        </div>
                    </div>
                    <div className="relative w-[18vw] h-[18vw] z-[99] max-sm:w-[70vw] max-sm:h-[35vw] backdrop-blur-lg fadeupanim">
                        <Image
                            src="/assets/icons/contact/card-frame-mobile.svg"
                            alt="card-frame"
                            fill
                            className="object-contain"
                        />

                        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center p-4 space-y-[3vw]">
                            <div className="h-[5vw] w-[5vw] max-sm:w-[12vw] max-sm:h-[12vw]">
                                <Image
                                    src="/assets/icons/contact/mail.svg"
                                    height={40}
                                    width={40}
                                    alt="location"
                                    className="w-full h-full"
                                />
                            </div>
                            <Copy>
                                <p className="text-content-20 text-gray-2">
                                contact@monielink.io
                                </p>
                            </Copy>
                        </div>
                    </div>
                    <div className="relative w-[18vw] h-[18vw] z-[99] max-sm:w-[70vw] max-sm:h-[35vw] backdrop-blur-lg fadeupanim">
                        <Image
                            src="/assets/icons/contact/card-frame-mobile.svg"
                            alt="card-frame"
                            fill
                            className="object-contain"
                        />

                        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center p-4 space-y-[3vw]">
                            <div className="h-[5vw] w-[5vw] max-sm:w-[12vw] max-sm:h-[12vw]">
                                <Image
                                    src="/assets/icons/contact/phone.svg"
                                    height={40}
                                    width={40}
                                    alt="location"
                                    className="w-full h-full"
                                />
                            </div>
                            <Copy>
                                <p className="text-content-20 text-gray-2">
                                +2348023970955
                                </p>
                            </Copy>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}