"use client"
import React, { useRef } from 'react'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Copy from '../Animations/Copy';
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);


const Diagram1 = () => {
    const svgRef = useRef(null);
    const sectionRef = useRef(null);

    useGSAP(() => {
        const groups = ['svgFirst', 'svgSecond'];

        groups.forEach(groupName => {
            const groupElement = svgRef.current?.querySelector(`.${groupName}`);
            if (groupElement) {
                const lines = groupElement.querySelectorAll(".path-line");
                const lines1 = groupElement.querySelectorAll(".path-line1");
                const rects = groupElement.querySelectorAll(".rect");
                const centerGroup = groupElement.querySelectorAll(".center-group");

                gsap.set(lines, { opacity: 0, drawSVG: "0%" });
                gsap.set(lines1, { opacity: 0, drawSVG: "0%" });
                gsap.set(rects, { opacity: 0 });
                gsap.set(centerGroup, { opacity: 0, scale: 0.8 });
            }
        });
        const texts = sectionRef.current?.querySelectorAll(".textanim");
        if (texts) {
            gsap.set(texts, { y: 10, opacity: 0 });
        }

        groups.forEach((groupName, index) => {
            const groupElement = svgRef.current?.querySelector(`.${groupName}`);
            if (!groupElement) return;

            ScrollTrigger.create({
                trigger: groupElement,
                start: "top 70%",
                toggleActions: "play none none none",
                onEnter: () => {
                    const lines = groupElement.querySelectorAll(".path-line");
                    const lines1 = groupElement.querySelectorAll(".path-line1");
                    const rects = groupElement.querySelectorAll(".rect");
                    const centerGroup = groupElement.querySelectorAll(".center-group");
                    const correspondingTexts = sectionRef.current?.querySelectorAll(`.textanim.${groupName}`);

                    const tl = gsap.timeline();

                    tl.to(centerGroup, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: "power2.out"
                    })
                        .to(lines, {
                            drawSVG: "100%",
                            opacity: 1,
                            duration: 1.5,
                            stagger: 0.05,
                            ease: "power2.out"
                        }, "-=0.5")
                        .to(lines1, {
                            drawSVG: "-100%",
                            opacity: 1,
                            duration: 1.5,
                            stagger: 0.05,
                            ease: "power2.out"
                        }, "-=0.8")
                        .to(rects, {
                            opacity: 1,
                            duration: 1,
                            stagger: 0.08,
                            ease: "power2.out"
                        }, "-=0.8");

                    if (correspondingTexts && correspondingTexts.length > 0) {
                        tl.to(correspondingTexts, {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                            stagger: 0.1,
                            ease: "power2.out"
                        }, "-=0.95");
                    }
                }
            });
        });

    }, []);

    return (
        <section data-theme="orange" className='w-screen h-full bg-gradient relative overflow-x-hidden max-sm:visible max-md:block' ref={sectionRef}>
            <div className='px-[4vw] py-[7vw] flex flex-col items-center gap-[6vw]  max-sm:gap-[4vw]'>
                <div className='w-[80%] space-y-[7vw] flex flex-col items-center max-sm:w-full'>
                    <Copy>
                        <h2 className='text-head-100 font-display text-center capitalize'>
                            Simplified System Architecture: MoneyLink Integration
                        </h2>
                    </Copy>
                    <div className='mb-[10vw] max-sm:pb-[10vw]'>
                        <Copy>
                            <p className='text-head-60 font-display text-center font-light'>Frontend</p>
                        </Copy>
                        <div className='relative w-full flex items-center justify-center'>
                            <svg className='w-[80%] h-full max-sm:w-[100%]' width="432" height="169" viewBox="0 0 432 169" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_122_607)">
                                    <mask id="path-1-inside-1_122_607" fill="white">
                                        <path d="M380.643 45.1953C383.065 45.1953 385.029 47.1595 385.029 49.582V82.9028C385.029 85.6459 383.903 88.2685 381.913 90.1566L354.846 115.842C352.988 117.605 350.524 118.588 347.963 118.588H51.3555C48.9329 118.588 46.9688 116.624 46.9688 114.201V82.0533C46.9688 79.3102 48.0956 76.6876 50.0854 74.7994L78.3893 47.9414C80.2474 46.1782 82.7112 45.1953 85.2726 45.1953H380.643Z" />
                                    </mask>
                                    <path d="M380.643 45.1953C383.065 45.1953 385.029 47.1595 385.029 49.582V82.9028C385.029 85.6459 383.903 88.2685 381.913 90.1566L354.846 115.842C352.988 117.605 350.524 118.588 347.963 118.588H51.3555C48.9329 118.588 46.9688 116.624 46.9688 114.201V82.0533C46.9688 79.3102 48.0956 76.6876 50.0854 74.7994L78.3893 47.9414C80.2474 46.1782 82.7112 45.1953 85.2726 45.1953H380.643Z" fill="#FF5100" />
                                    <path d="M380.643 45.1953L380.643 44.1953H380.643V45.1953ZM51.3555 118.588L51.3555 119.588H51.3555V118.588ZM50.0854 74.7994L49.3971 74.074L50.0854 74.7994ZM354.846 115.842L355.534 116.567L354.846 115.842ZM381.913 90.1566L382.601 90.882L381.913 90.1566ZM380.643 45.1953L380.643 46.1953C382.513 46.1953 384.029 47.7118 384.029 49.582H385.029H386.029C386.029 46.6072 383.617 44.1953 380.643 44.1953L380.643 45.1953ZM385.029 49.582H384.029V82.9028H385.029H386.029V49.582H385.029ZM381.913 90.1566L381.224 89.4313L354.158 115.116L354.846 115.842L355.534 116.567L382.601 90.882L381.913 90.1566ZM347.963 118.588V117.588H51.3555V118.588V119.588H347.963V118.588ZM51.3555 118.588L51.3555 117.588C49.4852 117.588 47.9688 116.071 47.9688 114.201H46.9688H45.9688C45.9688 117.176 48.3806 119.588 51.3555 119.588L51.3555 118.588ZM46.9688 114.201H47.9688V82.0533H46.9688H45.9688V114.201H46.9688ZM50.0854 74.7994L50.7737 75.5248L79.0776 48.6668L78.3893 47.9414L77.701 47.216L49.3971 74.074L50.0854 74.7994ZM85.2726 45.1953V46.1953H380.643V45.1953V44.1953H85.2726V45.1953ZM46.9688 82.0533H47.9688C47.9688 79.5845 48.9829 77.2242 50.7737 75.5248L50.0854 74.7994L49.3971 74.074C47.2083 76.151 45.9688 79.0359 45.9688 82.0533H46.9688ZM354.846 115.842L354.158 115.116C352.485 116.703 350.268 117.588 347.963 117.588V118.588V119.588C350.78 119.588 353.491 118.507 355.534 116.567L354.846 115.842ZM78.3893 47.9414L79.0776 48.6668C80.7499 47.0799 82.9673 46.1953 85.2726 46.1953V45.1953V44.1953C82.455 44.1953 79.7448 45.2765 77.701 47.216L78.3893 47.9414ZM385.029 82.9028H384.029C384.029 85.3716 383.015 87.7319 381.224 89.4313L381.913 90.1566L382.601 90.882C384.79 88.805 386.029 85.9202 386.029 82.9028H385.029Z" fill="white" mask="url(#path-1-inside-1_122_607)" />
                                </g>
                                <foreignObject x="0.466213" y="0.934198" width="431.064" height="168.06"><div xmlns="http://www.w3.org/1999/xhtml"></div></foreignObject><g filter="url(#filter1_d_122_607)" data-figma-bg-blur-radius="15.3673">
                                    <mask id="path-3-outside-2_122_607" maskUnits="userSpaceOnUse" x="37.3477" y="34.7422" width="358" height="95" fill="black">
                                        <rect fill="white" x="37.3477" y="34.7422" width="358" height="95" />
                                        <path d="M389.04 35.7422C391.586 35.7424 393.649 37.8067 393.649 40.3525V88.9969C393.649 89.84 393.303 90.646 392.692 91.2263L354.786 127.196C354.215 127.738 353.458 128.04 352.67 128.04H42.958C40.412 128.04 38.3478 125.976 38.3477 123.43V76.8654C38.3477 76.0224 38.694 75.2163 39.3055 74.636L79.4035 36.5862C79.9746 36.0443 80.7319 35.7422 81.5191 35.7422H389.04Z" />
                                    </mask>
                                    <path d="M389.04 35.7422L389.04 34.7422H389.04V35.7422ZM393.649 40.3525L394.649 40.3525L394.649 40.3525L393.649 40.3525ZM38.3477 123.43L37.3477 123.43L37.3477 123.43L38.3477 123.43ZM39.3055 74.636L38.6172 73.9106L39.3055 74.636ZM354.786 127.196L355.474 127.921L354.786 127.196ZM79.4035 36.5862L78.7152 35.8608L79.4035 36.5862ZM392.692 91.2263L393.38 91.9517L392.692 91.2263ZM389.04 35.7422L389.04 36.7422C391.033 36.7424 392.649 38.3588 392.649 40.3526L393.649 40.3525L394.649 40.3525C394.649 37.2547 392.138 34.7425 389.04 34.7422L389.04 35.7422ZM393.649 40.3525H392.649V88.9969H393.649H394.649V40.3525H393.649ZM392.692 91.2263L392.003 90.5009L354.098 126.471L354.786 127.196L355.474 127.921L393.38 91.9517L392.692 91.2263ZM352.67 128.04V127.04H42.958V128.04V129.04H352.67V128.04ZM42.958 128.04V127.04C40.9643 127.04 39.3478 125.423 39.3477 123.43L38.3477 123.43L37.3477 123.43C37.3479 126.528 39.8596 129.04 42.958 129.04V128.04ZM38.3477 123.43H39.3477V76.8654H38.3477H37.3477V123.43H38.3477ZM39.3055 74.636L39.9939 75.3614L80.0919 37.3116L79.4035 36.5862L78.7152 35.8608L38.6172 73.9106L39.3055 74.636ZM81.5191 35.7422V36.7422H389.04V35.7422V34.7422H81.5191V35.7422ZM38.3477 76.8654H39.3477C39.3477 76.2967 39.5813 75.7529 39.9939 75.3614L39.3055 74.636L38.6172 73.9106C37.8067 74.6797 37.3477 75.748 37.3477 76.8654H38.3477ZM354.786 127.196L354.098 126.471C353.712 126.836 353.201 127.04 352.67 127.04V128.04V129.04C353.714 129.04 354.717 128.64 355.474 127.921L354.786 127.196ZM79.4035 36.5862L80.0919 37.3116C80.4771 36.946 80.988 36.7422 81.5191 36.7422V35.7422V34.7422C80.4757 34.7422 79.4721 35.1426 78.7152 35.8608L79.4035 36.5862ZM393.649 88.9969H392.649C392.649 89.5656 392.416 90.1094 392.003 90.5009L392.692 91.2263L393.38 91.9517C394.19 91.1826 394.649 90.1143 394.649 88.9969H393.649Z" fill="white" mask="url(#path-3-outside-2_122_607)" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_122_607" x="21.2687" y="20.4953" width="395.463" height="130.791" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dx="3" dy="4" />
                                        <feGaussianBlur stdDeviation="14.35" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_122_607" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_122_607" result="shape" />
                                    </filter>
                                    <filter id="filter1_d_122_607" x="0.466213" y="0.934198" width="431.064" height="168.06" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="3.07345" />
                                        <feGaussianBlur stdDeviation="18.4407" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.996078 0 0 0 0 0.431373 0 0 0 0 0 0 0 0 0.32 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_122_607" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_122_607" result="shape" />
                                    </filter>
                                    <clipPath id="bgblur_0_122_607_clip_path" transform="translate(-0.466213 -0.934198)"><path d="M389.04 35.7422C391.586 35.7424 393.649 37.8067 393.649 40.3525V88.9969C393.649 89.84 393.303 90.646 392.692 91.2263L354.786 127.196C354.215 127.738 353.458 128.04 352.67 128.04H42.958C40.412 128.04 38.3478 125.976 38.3477 123.43V76.8654C38.3477 76.0224 38.694 75.2163 39.3055 74.636L79.4035 36.5862C79.9746 36.0443 80.7319 35.7422 81.5191 35.7422H389.04Z" />
                                    </clipPath></defs>
                            </svg>
                            <div className='absolute top-[42%] left-[40%] max-md:left-[36%] max-sm:left-[32%] overflow-hidden'>
                                <Copy>
                                    <p className='text-content-20 max-sm:text-[4vw] max-md:text-[2.5vw] font-body text-center'>SDK Integration</p>
                                </Copy>
                            </div>
                        </div>
                        <Copy>
                            <p className='text-content-20 text-center font-body max-sm:mt-[-4vw]'>Interfaces with the backend systems to enable customer-facing services</p>
                        </Copy>
                    </div>
                    <Copy>
                        <p className='text-head-60 font-display text-center font-light'>Backend Infrastructure</p>
                    </Copy>
                </div>
                <div className='h-full w-full max-sm:hidden max-md:hidden'>
                    <div className="svg-section flex flex-col items-center justify-center w-[85%] mx-auto" >
                        <svg className='w-full h-full' ref={svgRef} width="1452" height="576" viewBox="0 0 1452 576" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g className='svgFirst'>
                                <g className='center-group'>
                                    <g filter="url(#filter0_f_125_783)">
                                        <path d="M500.464 148.25L527.04 121.13C528.921 119.21 531.495 118.129 534.183 118.129L696.782 118.129C702.305 118.129 706.782 122.606 706.782 128.129V256.763C706.782 259.402 705.739 261.933 703.881 263.806L673.58 294.345L642.215 325.833C640.339 327.717 637.789 328.776 635.13 328.776H474.388C468.865 328.776 464.388 324.299 464.388 318.776L464.387 189.979C464.387 187.404 465.38 184.928 467.16 183.067L500.464 148.25Z" fill="#FF5E01" />
                                    </g>
                                    <path d="M534.183 118.629H696.782C702.029 118.629 706.282 122.882 706.282 128.129V256.763C706.282 259.269 705.291 261.675 703.525 263.454L673.226 293.992L641.861 325.48C640.079 327.27 637.657 328.276 635.131 328.276H474.388C469.141 328.276 464.888 324.023 464.888 318.776L464.887 189.979C464.887 187.533 465.831 185.181 467.521 183.413L500.82 148.6L500.821 148.601L527.397 121.479C529.184 119.656 531.63 118.629 534.183 118.629Z" fill="#FF5100" stroke="white" />
                                    <g filter="url(#filter1_f_125_783)">
                                        <path d="M509.213 155.979L532.755 131.954C534.636 130.035 537.21 128.953 539.898 128.953L684.325 128.953C689.848 128.953 694.325 133.43 694.325 138.953V252.915C694.325 255.553 693.282 258.085 691.424 259.958L664.536 287.057L636.696 315.007C634.819 316.89 632.27 317.949 629.611 317.949H486.845C481.322 317.949 476.845 313.472 476.845 307.95L476.844 193.831C476.844 191.256 477.837 188.78 479.617 186.919L509.213 155.979Z" fill="#FF833B" />
                                    </g>
                                    <g filter="url(#filter2_d_125_783)">
                                        <path d="M509.213 155.979L532.755 131.954C534.636 130.035 537.21 128.953 539.898 128.953L684.325 128.953C689.848 128.953 694.325 133.43 694.325 138.953V252.915C694.325 255.553 693.282 258.085 691.424 259.958L664.536 287.057L636.696 315.007C634.819 316.89 632.27 317.949 629.611 317.949H486.845C481.322 317.949 476.845 313.472 476.845 307.95L476.844 193.831C476.844 191.256 477.837 188.78 479.617 186.919L509.213 155.979Z" fill="#FF5100" />
                                        <path d="M539.897 129.453H684.325C689.572 129.453 693.825 133.706 693.825 138.953V252.915C693.825 255.422 692.834 257.826 691.068 259.605L664.182 286.704L636.342 314.653C634.559 316.443 632.137 317.449 629.611 317.449H486.845C481.598 317.449 477.345 313.196 477.345 307.949L477.344 193.831C477.344 191.385 478.288 189.033 479.979 187.265L509.574 156.324L509.573 156.323L533.112 132.304C534.899 130.48 537.345 129.453 539.897 129.453Z" stroke="white" />
                                    </g>
                                </g>
                                <path d="M54.4609 0.265625H43.8489L61.8489 27.7266H72.4609L54.4609 0.265625Z" fill="white" className='rect' />
                                <path d="M40.1562 0.265625H29.5442L47.5442 27.7266H58.1562L40.1562 0.265625Z" fill="white" className='rect' />
                                <path d="M25.8477 0.265625H15.2356L33.2356 27.7266H43.8477L25.8477 0.265625Z" fill="white" className='rect' />
                                <path d="M11.543 0.265625H0.930916L18.9309 27.7266H29.543L11.543 0.265625Z" fill="white" className='rect' />
                                <path d="M65.3945 26.7266H242.229L487.285 142.522" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line1' />
                                <path d="M881.762 15.3906H892.374L874.374 42.8516H863.762L881.762 15.3906Z" fill="white" className='rect' />
                                <path d="M896.066 15.3906H906.678L888.678 42.8516H878.066L896.066 15.3906Z" fill="white" className='rect' />
                                <path d="M910.375 15.3906H920.987L902.987 42.8516H892.375L910.375 15.3906Z" fill="white" className='rect' />
                                <path d="M924.684 15.3906H935.296L917.296 42.8516H906.684L924.684 15.3906Z" fill="white" className='rect' />
                                <path d="M648.116 102.399C647.664 102.717 647.556 103.34 647.873 103.792C648.191 104.244 648.815 104.353 649.267 104.035L648.116 102.399ZM869.159 42.8594H870.159V40.8594H869.159V42.8594ZM648.691 103.217L649.267 104.035L735.477 43.4055L734.901 42.5875L734.326 41.7695L648.116 102.399L648.691 103.217ZM737.202 41.8594V42.8594H869.159V41.8594V40.8594H737.202V41.8594ZM734.901 42.5875L735.477 43.4055C735.982 43.0501 736.585 42.8594 737.202 42.8594V41.8594V40.8594C736.173 40.8594 735.168 41.1772 734.326 41.7695L734.901 42.5875Z" fill="white" className='path-line1' />
                                <path d="M75.2656 263.027H64.6536L82.6536 290.488H93.2656L75.2656 263.027Z" fill="white" className='rect' />
                                <path d="M60.9609 263.027H50.3489L68.3489 290.488H78.9609L60.9609 263.027Z" fill="white" className='rect' />
                                <path d="M46.6523 263.027H36.0403L54.0403 290.488H64.6523L46.6523 263.027Z" fill="white" className='rect' />
                                <path d="M32.3438 263.027H21.7317L39.7317 290.488H50.3438L32.3438 263.027Z" fill="white" className='rect' />
                                <path d="M86.3945 289.486L210.211 289.486L454.305 263.117" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line1' />
                                <path d="M1191.45 215.25H1202.06L1184.06 242.711H1173.45L1191.45 215.25Z" fill="white" className='rect' />
                                <path d="M1205.75 215.25H1216.36L1198.36 242.711H1187.75L1205.75 215.25Z" fill="white" className='rect' />
                                <path d="M1220.06 215.25H1230.67L1212.67 242.711H1202.06L1220.06 215.25Z" fill="white" className='rect' />
                                <path d="M1234.37 215.25H1244.98L1226.98 242.711H1216.37L1234.37 215.25Z" fill="white" className='rect' />
                                <path d="M724.43 204.348L814.349 241.717H1179.28" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                            </g>

                            <g className='svgSecond'>
                                <g className='center-group'>
                                    <g filter="url(#filter3_f_125_783)">
                                        <path d="M672.311 368.899L698.888 341.778C700.769 339.859 703.343 338.777 706.03 338.777L868.63 338.777C874.153 338.777 878.63 343.255 878.63 348.777V477.411C878.63 480.05 877.587 482.582 875.728 484.455L845.428 514.993L814.063 546.482C812.187 548.366 809.637 549.425 806.978 549.425H646.236C640.713 549.425 636.236 544.947 636.236 539.425L636.234 410.628C636.234 408.053 637.228 405.577 639.008 403.716L672.311 368.899Z" fill="#FF5E01" />
                                    </g>
                                    <path d="M706.03 339.277H868.63C873.877 339.277 878.13 343.531 878.13 348.777V477.411C878.13 479.918 877.139 482.323 875.373 484.103L845.073 514.641L813.709 546.129C811.926 547.918 809.504 548.925 806.979 548.925H646.235C640.989 548.925 636.735 544.671 636.735 539.425L636.734 410.628C636.734 408.182 637.678 405.829 639.369 404.062L672.668 369.248L672.669 369.249L699.245 342.128C701.032 340.305 703.477 339.277 706.03 339.277Z" fill="#FF5100" stroke="white" />
                                    <g filter="url(#filter4_f_125_783)">
                                        <path d="M681.06 376.627L704.603 352.602C706.484 350.683 709.058 349.602 711.745 349.602L856.173 349.602C861.696 349.602 866.173 354.079 866.173 359.602V473.563C866.173 476.202 865.13 478.733 863.271 480.606L836.384 507.706L808.544 535.655C806.667 537.539 804.118 538.598 801.459 538.598H658.693C653.17 538.598 648.693 534.121 648.693 528.598L648.691 414.48C648.691 411.904 649.685 409.428 651.465 407.567L681.06 376.627Z" fill="#FF833B" />
                                    </g>
                                    <g filter="url(#filter5_d_125_783)">
                                        <path d="M681.06 376.627L704.603 352.602C706.484 350.683 709.058 349.602 711.745 349.602L856.173 349.602C861.696 349.602 866.173 354.079 866.173 359.602V473.563C866.173 476.202 865.13 478.733 863.271 480.606L836.384 507.706L808.544 535.655C806.667 537.539 804.118 538.598 801.459 538.598H658.693C653.17 538.598 648.693 534.121 648.693 528.598L648.691 414.48C648.691 411.904 649.685 409.428 651.465 407.567L681.06 376.627Z" fill="#FF5100" />
                                        <path d="M711.745 350.102H856.173C861.419 350.102 865.673 354.355 865.673 359.602V473.563C865.673 476.07 864.681 478.475 862.916 480.254L836.029 507.353L808.189 535.302C806.407 537.091 803.985 538.098 801.459 538.098H658.692C653.446 538.098 649.192 533.844 649.192 528.598L649.191 414.479C649.191 412.033 650.135 409.681 651.826 407.913L681.422 376.973L681.421 376.972L704.96 352.952C706.747 351.129 709.192 350.102 711.745 350.102Z" stroke="white" />
                                    </g>
                                </g>
                                <path d="M1398.37 475.906H1408.98L1390.98 503.367H1380.37L1398.37 475.906Z" fill="white" className='rect' />
                                <path d="M1412.68 475.906H1423.29L1405.29 503.367H1394.68L1412.68 475.906Z" fill="white" className='rect' />
                                <path d="M1426.98 475.906H1437.6L1419.6 503.367H1408.98L1426.98 475.906Z" fill="white" className='rect' />
                                <path d="M1441.29 475.906H1451.91L1433.91 503.367H1423.29L1441.29 475.906Z" fill="white" className='rect' />
                                <path d="M896.43 432.164L1030.53 502.395H1384.98" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                            </g>
                            <defs>
                                <filter id="filter0_f_125_783" x="456.387" y="110.129" width="258.395" height="226.648" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_125_783" />
                                </filter>
                                <filter id="filter1_f_125_783" x="439.944" y="92.0531" width="291.28" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_125_783" />
                                </filter>
                                <filter id="filter2_d_125_783" x="451.144" y="104.253" width="274.88" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="3" dy="4" />
                                    <feGaussianBlur stdDeviation="14.35" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_125_783" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_125_783" result="shape" />
                                </filter>
                                <filter id="filter3_f_125_783" x="628.234" y="330.777" width="258.395" height="226.648" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_125_783" />
                                </filter>
                                <filter id="filter4_f_125_783" x="611.791" y="312.702" width="291.28" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_125_783" />
                                </filter>
                                <filter id="filter5_d_125_783" x="622.991" y="324.902" width="274.88" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="3" dy="4" />
                                    <feGaussianBlur stdDeviation="14.35" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_125_783" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_125_783" result="shape" />
                                </filter>
                            </defs>
                        </svg>

                    </div>
                    <div>
                        <div className='absolute top-[72.4%] left-[37.5%] w-[10%] overflow-hidden'>
                            <p className='font-medium text-content-20 font-body  text-center textanim svgFirst'>Main Instance (Managed by MonieLink)</p>
                        </div>
                        <div className='absolute top-[84%] left-[46.5%] w-[10%] overflow-hidden'>
                            <p className='font-medium text-content-20 font-body  text-center textanim svgSecond'>DR Instance (Managed by MonieLink)</p>
                        </div>


                    </div>
                    <div>
                        <div>
                            <div className='absolute top-[62%] left-[16%] overflow-hidden'>
                                <p className='text-content-18 font-body text-center textanim svgFirst'>Applications</p>
                            </div>
                            <div className='absolute top-[76%] left-[16%] overflow-hidden'>
                                <p className='text-content-18 font-body text-center textanim svgFirst'>Storage</p>
                            </div>
                            <div className='absolute top-[63%] left-[53%] overflow-hidden'>
                                <p className='text-content-18 font-body text-center textanim svgFirst'>Services</p>
                            </div>
                            <div className='absolute top-[73.5%] left-[58%] overflow-hidden'>
                                <p className='text-content-18 font-body text-center textanim svgFirst'>Security (Access Control + Firewall)</p>
                            </div>
                        </div>
                        <div>
                            <div className='absolute top-[87.4%] left-[68%] overflow-hidden w-[20%]'>
                                <p className='text-content-18 font-body textanim leading-[1.8] svgSecond'>Mirrors the main instance for high availability and fault tolerance</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='w-[100vw] hidden max-sm:block max-md:block overflow-visible max-sm:pt-[5vw]  max-sm:pb-[10vw]'>
                    <div className='max-sm:w-fit max-md:w-full  max-sm:overflow-x-scroll max-md:pl-[5vw] relative max-sm:pl-[30vw] scrollbar-hidden'>
                        <div className='max-sm:w-[160%] max-md:w-[90%] max-sm:py-[5vw] max-md:py-[1vw]'>

                            <svg className='max-sm:w-[50%] max-md:w-[100%] scale-[1.3] max-sm:scale-[1.4]' width="494" height="164" viewBox="0 0 494 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="166.53" y1="74.9404" x2="327.736" y2="74.9404" stroke="white" />
                                <g filter="url(#filter0_f_0_3)">
                                    <path d="M38.4044 35.0329L54.9087 18.1908C56.0767 16.9988 57.6753 16.3271 59.3442 16.3271L160.32 16.3272C163.75 16.3272 166.531 19.1075 166.531 22.5373V102.421C166.531 104.059 165.883 105.631 164.729 106.795L145.912 125.759L126.434 145.314C125.269 146.484 123.685 147.142 122.034 147.142H22.211C18.7813 147.142 16.0009 144.361 16.0009 140.932L16.0001 60.9472C16.0001 59.3479 16.6171 57.8103 17.7226 56.6546L38.4044 35.0329Z" fill="#FF5E01" />
                                </g>
                                <path d="M59.3438 16.6377H160.32C163.579 16.6377 166.22 19.2789 166.22 22.5371V102.421C166.22 103.977 165.604 105.471 164.508 106.576L145.691 125.54L126.214 145.095C125.107 146.206 123.603 146.831 122.034 146.831H22.211C18.9528 146.831 16.3117 144.19 16.3116 140.932L16.3106 60.9473C16.3106 59.4279 16.8972 57.9671 17.9474 56.8691L38.628 35.2471L55.13 18.4082C56.2395 17.2759 57.7586 16.6378 59.3438 16.6377Z" fill="#FF5100" stroke="white" strokeWidth="0.621012" />
                                <g filter="url(#filter1_f_0_3)">
                                    <path d="M43.8375 39.8331L58.4577 24.9136C59.6258 23.7217 61.2244 23.05 62.8932 23.05L152.584 23.05C156.014 23.05 158.794 25.8304 158.794 29.2601V100.032C158.794 101.67 158.147 103.242 156.993 104.406L140.295 121.234L123.006 138.591C121.841 139.761 120.258 140.419 118.606 140.419H29.9468C26.5171 140.419 23.7367 137.639 23.7367 134.209L23.736 63.34C23.736 61.7407 24.353 60.2031 25.4584 59.0474L43.8375 39.8331Z" fill="#FF833B" />
                                </g>
                                <g filter="url(#filter2_d_0_3)">
                                    <path d="M43.8376 39.8331L58.4579 24.9136C59.6259 23.7217 61.2245 23.05 62.8934 23.05L152.585 23.05C156.014 23.05 158.795 25.8304 158.795 29.2601V100.032C158.795 101.67 158.147 103.242 156.993 104.406L140.295 121.234L123.006 138.591C121.841 139.761 120.258 140.419 118.606 140.419H29.947C26.5172 140.419 23.7369 137.639 23.7369 134.209L23.7361 63.34C23.7361 61.7407 24.3531 60.2031 25.4586 59.0474L43.8376 39.8331Z" fill="#FF5100" />
                                    <path d="M62.8933 23.3605H152.585C155.843 23.3607 158.484 26.0018 158.484 29.2599V100.031C158.484 101.588 157.869 103.082 156.772 104.187L140.075 121.016L122.786 138.372C121.679 139.484 120.175 140.109 118.606 140.109H29.9471C26.6889 140.109 24.0478 137.467 24.0476 134.209L24.0467 63.34C24.0467 61.8207 24.6332 60.3598 25.6834 59.2619L44.0613 40.0471L58.6795 25.131C59.7891 23.9987 61.308 23.3605 62.8933 23.3605Z" stroke="white" strokeWidth="0.621012" />
                                </g>
                                <g filter="url(#filter3_f_0_3)">
                                    <path d="M349.935 35.0329L366.439 18.1908C367.607 16.9988 369.206 16.3271 370.875 16.3271L471.851 16.3272C475.281 16.3272 478.061 19.1075 478.061 22.5373V102.421C478.061 104.059 477.413 105.631 476.259 106.795L457.442 125.759L437.964 145.314C436.799 146.484 435.216 147.142 433.564 147.142H333.741C330.312 147.142 327.531 144.361 327.531 140.932L327.531 60.9472C327.531 59.3479 328.148 57.8103 329.253 56.6546L349.935 35.0329Z" fill="#FF5E01" />
                                </g>
                                <path d="M370.874 16.6377H471.851C475.109 16.6377 477.75 19.2789 477.75 22.5371V102.421C477.75 103.977 477.135 105.471 476.038 106.576L457.222 125.54L437.744 145.095C436.637 146.206 435.133 146.831 433.565 146.831H333.741C330.483 146.831 327.842 144.19 327.842 140.932L327.841 60.9473C327.841 59.4279 328.428 57.9671 329.478 56.8691L350.158 35.2471L366.66 18.4082C367.77 17.2759 369.289 16.6378 370.874 16.6377Z" fill="#FF5100" stroke="white" strokeWidth="0.621012" />
                                <g filter="url(#filter4_f_0_3)">
                                    <path d="M355.368 39.8331L369.988 24.9136C371.156 23.7217 372.755 23.05 374.424 23.05L464.115 23.05C467.545 23.05 470.325 25.8304 470.325 29.2601V100.032C470.325 101.67 469.677 103.242 468.523 104.406L451.826 121.234L434.537 138.591C433.371 139.761 431.788 140.419 430.137 140.419H341.477C338.048 140.419 335.267 137.639 335.267 134.209L335.266 63.34C335.266 61.7407 335.883 60.2031 336.989 59.0474L355.368 39.8331Z" fill="#FF833B" />
                                </g>
                                <g filter="url(#filter5_d_0_3)">
                                    <path d="M355.368 39.8331L369.988 24.9136C371.156 23.7217 372.755 23.05 374.424 23.05L464.115 23.05C467.545 23.05 470.325 25.8304 470.325 29.2601V100.032C470.325 101.67 469.677 103.242 468.523 104.406L451.826 121.234L434.537 138.591C433.371 139.761 431.788 140.419 430.137 140.419H341.477C338.048 140.419 335.267 137.639 335.267 134.209L335.267 63.34C335.267 61.7407 335.884 60.2031 336.989 59.0474L355.368 39.8331Z" fill="#FF5100" />
                                    <path d="M374.424 23.3605H464.115C467.373 23.3607 470.015 26.0018 470.015 29.2599V100.031C470.015 101.588 469.399 103.082 468.303 104.187L451.605 121.016L434.316 138.372C433.209 139.484 431.705 140.109 430.137 140.109H341.478C338.219 140.109 335.578 137.467 335.578 134.209L335.577 63.34C335.577 61.8207 336.164 60.3598 337.214 59.2619L355.592 40.0471L370.21 25.131C371.32 23.9987 372.838 23.3605 374.424 23.3605Z" stroke="white" strokeWidth="0.621012" />
                                </g>
                                <defs>
                                    <filter id="filter0_f_0_3" x="11.032" y="11.3591" width="160.467" height="140.751" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feGaussianBlur stdDeviation="2.48405" result="effect1_foregroundBlur_0_3" />
                                    </filter>
                                    <filter id="filter1_f_0_3" x="0.820642" y="0.134628" width="180.889" height="163.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feGaussianBlur stdDeviation="11.4577" result="effect1_foregroundBlur_0_3" />
                                    </filter>
                                    <filter id="filter2_d_0_3" x="7.77613" y="7.71098" width="170.705" height="153.015" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dx="1.86304" dy="2.48405" />
                                        <feGaussianBlur stdDeviation="8.91153" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_3" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_3" result="shape" />
                                    </filter>
                                    <filter id="filter3_f_0_3" x="322.562" y="11.3591" width="160.467" height="140.751" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feGaussianBlur stdDeviation="2.48405" result="effect1_foregroundBlur_0_3" />
                                    </filter>
                                    <filter id="filter4_f_0_3" x="312.351" y="0.134628" width="180.889" height="163.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feGaussianBlur stdDeviation="11.4577" result="effect1_foregroundBlur_0_3" />
                                    </filter>
                                    <filter id="filter5_d_0_3" x="319.307" y="7.71098" width="170.705" height="153.015" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dx="1.86304" dy="2.48405" />
                                        <feGaussianBlur stdDeviation="8.91153" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_3" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_3" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>

                        <div>

                            <div >
                                <div className='absolute max-md:w-[25%] max-md:top-[15%] max-sm:top-[19%] max-sm:left-[11.5%] max-md:left-[10%] max-sm:w-[20%] overflow-hidden'>
                                    <Copy>
                                        <p className="max-md:text-content-20 max-sm:text-[4vw] text-center">Main Instance (Managed by MonieLink)</p>
                                    </Copy>
                                </div>
                                <div className='absolute max-md:w-[20%] max-sm:w-[20%] max-sm:top-[19%] max-md:top-[17%] max-sm:right-[11.5%] max-md:right-[18%] w-[25%] overflow-hidden'>
                                    <p className='max-md:text-content-20 max-sm:text-[4vw] text-center'>DR Instance (Managed by MonieLink)</p>
                                </div>

                            </div>
                            <div className='flex justify-between max-sm:gap-[25vw] max-sm:px-0 max-md:px-[8vw] max-sm:pt-[5vw] max-md:pt-[5vw] w-full max-sm:w-[115%]'>
                                <div className="max-sm:ml-[-15vw] w-[18%] max-md:w-[30%] max-sm:w-[60vw]">
                                    <ul className="max-sm:pl-0 max-md:pl-0  list-disc space-y-[0.5vw] font-medium text-content-24 max-md:text-content-20 max-md:w-full font-body  text-center max-sm:text-[4vw]  max-sm:text-content-20 max-sm:text-left max-md:text-left">
                                        <li>Applications</li>
                                        <li>Services</li>
                                        <li>Storage</li>
                                        <li>Security (Access Control + Firewall)</li>
                                    </ul>
                                </div>
                                <div className=" w-[18%] max-md:w-[32%] max-sm:w-[80vw] overflow-visible">
                                    <ul className=" max-md:pl-[0vw] list-disc space-y-[0.5vw] font-medium text-content-24 w-full max-md:text-content-20 max-md:w-full font-body  text-center   max-sm:text-[4vw] max-sm:text-left max-md:text-left">
                                        <li>Mirrors the main instance for high availability and fault tolerance</li>
                                    </ul>
                                </div>
                            </div>



                        </div>


                    </div>

                </div>
                <div className="w-full mx-auto h-full text-white relative z-10  items-center gap-3 justify-end hidden max-sm:flex max-md:flex max-sm:mt-[10vw]">
                    <span className="text-content-18 max-md:text-content-20">Swipe</span>
                    <div className="rotate-180 text-white flex items-center justify-center gap-0 w-fit h-full">
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
        </section>
    )
}

export default Diagram1

