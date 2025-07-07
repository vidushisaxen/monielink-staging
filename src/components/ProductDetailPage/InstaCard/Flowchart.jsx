"use client"
import React, {useRef} from 'react'
import Copy from '../../Animations/Copy'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);


const Flowchart = () => {
    return (
        <section data-theme="orange" className='w-screen h-full bg-gradient relative' >
            <div className='px-[4vw] py-[7vw] flex flex-col items-center  gap-[10vw] max-sm:px-[5.5vw] max-sm:gap-[15vw] max-sm:py-[20%]'>
                <div className='w-[95%] max-sm:w-full'>
                    <Copy>
                        <h2 className='text-head-100 font-display text-center capitalize max-sm:text-left'>
                        Turn Any NFC-Enabled Phone into a Contactless Payment Terminal
                        </h2>
                    </Copy>
                </div>
                <div className='h-full w-full'>
                    <div className="svg-section flex flex-col items-center justify-center w-[80%] mx-auto" >
                   <Image src={"/assets/icons/diagrams/instacard.svg"} className='h-full w-full' height={100} width={100} alt='instacard'/>
                    </div>
                    <div className='w-full h-auto hidden max-sm:block'>
                        <Image src={"/assets/shapes/instacard/instacard-flowchart-mobile.svg"} alt='' width={500} height={1080} className='w-full h-full'/>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Flowchart

