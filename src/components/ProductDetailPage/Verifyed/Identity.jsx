"use client"
import React, { useRef } from 'react'
import Copy from '../../Animations/Copy'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Biometrics from './Biometrics';
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);


const Identity = () => {
    const svgRef = useRef(null);
    const sectionRef = useRef(null);

    useGSAP(() => {
        const groups = ['svgFirst', 'svgSecond', 'svgThird'];

        groups.forEach(groupName => {
            const groupElement = svgRef.current?.querySelector(`.${groupName}`);
            if (groupElement) {
                const lines = groupElement.querySelectorAll(".path-line");
                const rects = groupElement.querySelectorAll(".rect");
                const centerGroup = groupElement.querySelectorAll(".center-group");

                gsap.set(lines, { opacity: 0, drawSVG: "0%" });
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
                    .to(rects, {
                        opacity: 1,
                        duration: 1,
                        stagger: 0.08,
                        ease: "power2.out"
                    }, "-=0.8");
                    
                    // Text animations - only if corresponding texts exist
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
        <section data-theme="orange" className='w-screen h-full bg-gradient relative max-sm:hidden max-md:hidden' ref={sectionRef}>
            <div className='px-[4vw] pt-[7vw] flex flex-col items-center  gap-[10vw] '>
                <div className='w-[80%] space-y-[7vw]'>
                    <Copy>
                        <h2 className='text-head-100 font-display text-center capitalize'>
                        Verifyed: Instant Digital KYC & Customer Upgrade Solution
                        </h2>
                    </Copy>
                    <div className='space-y-[2vw] '>
                    <Copy>
                        <p className='text-head-60 font-display text-center font-light'>Step 1: Sign-up</p>
                    </Copy>
                    <Copy>
                        <p className='text-content-20 text-center font-body'>Customers start the onboarding process on Partner&apos;s Mobile App.</p>
                    </Copy>
                    </div>
                    <Copy>
                        <p className='text-head-60 font-display text-center font-light'>Step 2: Facial Biometrics & Liveness Detection</p>
                    </Copy>
                </div>
                <Biometrics/>
                <Copy>
                        <p className='text-head-60 font-display text-center font-light'>Step 3: Identity Capture & Matching (KYC Level 1 & 2)</p>
                    </Copy>
                <div className='h-full w-full '>
                    <div className="svg-section flex flex-col items-center justify-center w-[85%] mx-auto" >
                        <svg className='w-full h-full' ref={svgRef} width="1527" height="869" viewBox="0 0 1527 869" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g className='svgFirst'>
                                <g className='center-group'>
                                    <g filter="url(#filter0_f_92_553)">
                                        <path d="M661.462 148.25L688.038 121.13C689.919 119.21 692.493 118.129 695.181 118.129L857.78 118.129C863.303 118.129 867.78 122.606 867.78 128.129V256.763C867.78 259.402 866.737 261.933 864.879 263.806L834.578 294.345L803.213 325.833C801.337 327.717 798.787 328.776 796.128 328.776H635.386C629.863 328.776 625.386 324.299 625.386 318.776L625.385 189.979C625.385 187.404 626.378 184.928 628.158 183.067L661.462 148.25Z" fill="#FF5E01" />
                                    </g>
                                    <path d="M695.181 118.629H857.78C863.027 118.629 867.28 122.882 867.28 128.129V256.763C867.28 259.269 866.289 261.675 864.523 263.454L834.224 293.992L802.859 325.48C801.077 327.27 798.655 328.276 796.129 328.276H635.386C630.139 328.276 625.886 324.023 625.886 318.776L625.885 189.979C625.885 187.533 626.829 185.181 628.52 183.413L661.818 148.6L661.819 148.601L688.396 121.479C690.182 119.656 692.628 118.629 695.181 118.629Z" fill="#FF5100" stroke="white" />
                                    <g filter="url(#filter1_f_92_553)">
                                        <path d="M670.211 155.981L693.753 131.956C695.634 130.037 698.208 128.955 700.896 128.955L845.323 128.955C850.846 128.955 855.323 133.432 855.323 138.955V252.917C855.323 255.555 854.28 258.087 852.422 259.96L825.534 287.059L797.694 315.009C795.818 316.892 793.268 317.951 790.609 317.951H647.843C642.32 317.951 637.843 313.474 637.843 307.951L637.842 193.833C637.842 191.258 638.835 188.782 640.615 186.921L670.211 155.981Z" fill="#FF833B" />
                                    </g>
                                    <g filter="url(#filter2_d_92_553)">
                                        <path d="M670.211 155.979L693.753 131.954C695.634 130.035 698.208 128.953 700.896 128.953L845.323 128.953C850.846 128.953 855.323 133.43 855.323 138.953V252.915C855.323 255.553 854.28 258.085 852.422 259.958L825.534 287.057L797.694 315.007C795.818 316.89 793.268 317.949 790.609 317.949H647.843C642.32 317.949 637.843 313.472 637.843 307.95L637.842 193.831C637.842 191.256 638.835 188.78 640.615 186.919L670.211 155.979Z" fill="#FF5100" />
                                        <path d="M700.896 129.453H845.323C850.57 129.453 854.823 133.706 854.823 138.953V252.915C854.823 255.422 853.832 257.826 852.066 259.605L825.18 286.704L797.34 314.653C795.557 316.443 793.135 317.449 790.609 317.449H647.843C642.596 317.449 638.343 313.196 638.343 307.949L638.342 193.831C638.342 191.385 639.286 189.033 640.977 187.265L670.572 156.324L670.571 156.323L694.11 132.304C695.897 130.48 698.343 129.453 700.896 129.453Z" stroke="white" />
                                    </g>
                                </g>
                                <path d="M222.531 0.269531H211.919L229.919 27.7305H240.531L222.531 0.269531Z" fill="white" className='rect' />
                                <path d="M208.225 0.269531H197.613L215.613 27.7305H226.225L208.225 0.269531Z" fill="white" className='rect' />
                                <path d="M193.918 0.269531H183.306L201.306 27.7305H211.918L193.918 0.269531Z" fill="white" className='rect' />
                                <path d="M179.611 0.269531H168.999L186.999 27.7305H197.611L179.611 0.269531Z" fill="white" className='rect' />
                                <path d="M541.095 26.7168L541.808 26.0152L541.514 25.7168H541.095V26.7168ZM653.733 142.557C654.121 142.951 654.754 142.956 655.148 142.568C655.541 142.181 655.546 141.548 655.159 141.154L653.733 142.557ZM234.24 26.7168V27.7168H541.095V26.7168V25.7168H234.24V26.7168ZM541.095 26.7168L540.382 27.4183L653.733 142.557L654.446 141.856L655.159 141.154L541.808 26.0152L541.095 26.7168Z" fill="white" className='path-line' />
                                <path d="M1431.61 65.4805H1442.22L1424.22 92.9415H1413.61L1431.61 65.4805Z" fill="white" className='rect' />
                                <path d="M1445.91 65.4805H1456.52L1438.52 92.9415H1427.91L1445.91 65.4805Z" fill="white" className='rect' />
                                <path d="M1460.22 65.4805H1470.83L1452.83 92.9415H1442.22L1460.22 65.4805Z" fill="white" className='rect' />
                                <path d="M1474.53 65.4805H1485.14L1467.14 92.9415H1456.53L1474.53 65.4805Z" fill="white" className='rect' />
                                <path d="M879.74 206.635L990.786 91.9277H1419.11" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                                <path d="M53.5312 301.318H42.9192L60.9192 328.779H71.5312L53.5312 301.318Z" fill="white" className='rect' />
                                <path d="M39.2246 301.318H28.6126L46.6126 328.779H57.2246L39.2246 301.318Z" fill="white" className='rect' />
                                <path d="M24.918 301.318H14.3059L32.3059 328.779H42.918L24.918 301.318Z" fill="white" className='rect' />
                                <path d="M10.6113 301.318H-0.000724792L17.9993 328.779H28.6113L10.6113 301.318Z" fill="white" className='rect' />
                                <path d="M465.496 327.787V328.787H465.694L465.878 328.711L465.496 327.787ZM615.083 266.967C615.593 266.756 615.836 266.171 615.625 265.661C615.413 265.15 614.829 264.908 614.318 265.119L615.083 266.967ZM65.2422 327.787V328.787H465.496V327.787V326.787H65.2422V327.787ZM465.496 327.787L465.878 328.711L615.083 266.967L614.701 266.043L614.318 265.119L465.113 326.863L465.496 327.787Z" fill="white" className='path-line' />

                            </g>

                            <g className='svgSecond'>
                                <g className='center-group'>
                                    <g filter="url(#filter3_f_92_553)">
                                        <path d="M836.907 388.899L863.484 361.778C865.364 359.859 867.939 358.777 870.626 358.777L1033.23 358.777C1038.75 358.777 1043.23 363.255 1043.23 368.777V497.411C1043.23 500.05 1042.18 502.582 1040.32 504.455L1010.02 534.993L978.659 566.482C976.782 568.366 974.233 569.425 971.574 569.425H810.831C805.309 569.425 800.831 564.947 800.831 559.425L800.83 430.628C800.83 428.053 801.824 425.577 803.604 423.716L836.907 388.899Z" fill="#FF5E01" />
                                    </g>
                                    <path d="M870.626 359.277H1033.23C1038.47 359.277 1042.73 363.531 1042.73 368.777V497.411C1042.73 499.918 1041.73 502.323 1039.97 504.103L1009.67 534.641L978.305 566.129C976.522 567.918 974.1 568.925 971.574 568.925H810.831C805.585 568.925 801.331 564.671 801.331 559.425L801.33 430.628C801.33 428.182 802.274 425.829 803.965 424.062L837.264 389.248L837.265 389.249L863.841 362.128C865.628 360.305 868.073 359.277 870.626 359.277Z" fill="#FF5100" stroke="white" />
                                    <g filter="url(#filter4_f_92_553)">
                                        <path d="M845.656 396.629L869.199 372.604C871.08 370.685 873.654 369.604 876.341 369.604L1020.77 369.604C1026.29 369.604 1030.77 374.081 1030.77 379.604V493.565C1030.77 496.204 1029.73 498.735 1027.87 500.608L1000.98 527.707L973.139 555.657C971.263 557.541 968.713 558.6 966.054 558.6H823.288C817.765 558.6 813.288 554.123 813.288 548.6L813.287 434.482C813.287 431.906 814.281 429.43 816.061 427.569L845.656 396.629Z" fill="#FF833B" />
                                    </g>
                                    <g filter="url(#filter5_d_92_553)">
                                        <path d="M845.656 396.627L869.199 372.602C871.08 370.683 873.654 369.602 876.341 369.602L1020.77 369.602C1026.29 369.602 1030.77 374.079 1030.77 379.602V493.563C1030.77 496.202 1029.73 498.733 1027.87 500.606L1000.98 527.706L973.139 555.655C971.263 557.539 968.713 558.598 966.054 558.598H823.288C817.765 558.598 813.288 554.121 813.288 548.598L813.287 434.48C813.287 431.904 814.281 429.428 816.061 427.567L845.656 396.627Z" fill="#FF5100" />
                                        <path d="M876.341 370.102H1020.77C1026.02 370.102 1030.27 374.355 1030.27 379.602V493.563C1030.27 496.07 1029.28 498.475 1027.51 500.254L1000.62 527.353L972.785 555.302C971.003 557.091 968.581 558.098 966.055 558.098H823.288C818.042 558.098 813.788 553.844 813.788 548.598L813.787 434.479C813.787 432.033 814.731 429.681 816.422 427.913L846.018 396.973L846.017 396.972L869.556 372.952C871.342 371.129 873.788 370.102 876.341 370.102Z" stroke="white" />
                                    </g>
                                </g>
                                <path d="M1472.62 302.918H1483.23L1465.23 330.379H1454.62L1472.62 302.918Z" fill="white" className='rect' />
                                <path d="M1486.92 302.918H1497.53L1479.53 330.379H1468.92L1486.92 302.918Z" fill="white" className='rect' />
                                <path d="M1501.23 302.918H1511.84L1493.84 330.379H1483.23L1501.23 302.918Z" fill="white" className='rect' />
                                <path d="M1515.54 302.918H1526.15L1508.15 330.379H1497.54L1515.54 302.918Z" fill="white" className='rect' />
                                <path d="M1058.67 421.375L1182.32 329.381H1458.36" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                                <path d="M315.971 503.707H305.359L323.359 531.168H333.971L315.971 503.707Z" fill="white" className='rect' />
                                <path d="M301.664 503.707H291.052L309.052 531.168H319.664L301.664 503.707Z" fill="white" className='rect' />
                                <path d="M287.357 503.707H276.745L294.745 531.168H305.357L287.357 503.707Z" fill="white" className='rect' />
                                <path d="M273.051 503.707H262.439L280.439 531.168H291.051L273.051 503.707Z" fill="white" className='rect' />
                                <path d="M650.834 530.165V531.165H651.01L651.175 531.105L650.834 530.165ZM785.884 482.27C786.404 482.082 786.672 481.508 786.484 480.989C786.296 480.47 785.722 480.202 785.203 480.39L785.884 482.27ZM327.234 530.165V531.165H650.834V530.165V529.165H327.234V530.165ZM650.834 530.165L651.175 531.105L785.884 482.27L785.544 481.33L785.203 480.39L650.493 529.225L650.834 530.165Z" fill="white" className='path-line' />
                            </g>


                           
                            <defs>
                                <filter id="filter0_f_92_553" x="617.385" y="110.129" width="258.395" height="226.646" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_92_553" />
                                </filter>
                                <filter id="filter1_f_92_553" x="600.942" y="92.0551" width="291.28" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_92_553" />
                                </filter>
                                <filter id="filter2_d_92_553" x="612.142" y="104.253" width="274.88" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="3" dy="4" />
                                    <feGaussianBlur stdDeviation="14.35" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_92_553" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_92_553" result="shape" />
                                </filter>
                                <filter id="filter3_f_92_553" x="792.83" y="350.777" width="258.395" height="226.646" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_92_553" />
                                </filter>
                                <filter id="filter4_f_92_553" x="776.387" y="332.704" width="291.28" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_92_553" />
                                </filter>
                                <filter id="filter5_d_92_553" x="787.587" y="344.902" width="274.88" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="3" dy="4" />
                                    <feGaussianBlur stdDeviation="14.35" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_92_553" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_92_553" result="shape" />
                                </filter>
                                <filter id="filter6_f_92_553" x="614.082" y="624" width="258.395" height="226.646" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_92_553" />
                                </filter>
                                <filter id="filter7_f_92_553" x="597.639" y="605.926" width="291.28" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_92_553" />
                                </filter>
                                <filter id="filter8_d_92_553" x="608.839" y="618.124" width="274.88" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="3" dy="4" />
                                    <feGaussianBlur stdDeviation="14.35" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_92_553" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_92_553" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <div>
                        <div className='absolute top-[76.5%] left-[44%] w-[10%] overflow-hidden'>
                            <p className='font-medium text-content-20 font-body  text-center textanim svgFirst'>NIN Verification
                                (KYC Level 1)</p>
                        </div>
                        <div className='absolute top-[85%] left-[53%] w-[10%] overflow-hidden'>
                            <p className='font-medium text-content-20 font-body  text-center textanim svgSecond'>BVN Verification
                                (KYC Level 2)</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='absolute top-[69.2%] left-[24%] overflow-hidden'>
                                <p className='text-content-18 font-body text-center textanim svgFirst'>Customer scans or inputs NIN</p>
                            </div>
                            <div className='absolute top-[80%] left-[15.5%] overflow-hidden'>
                                <p className='text-content-18 font-body text-center textanim svgFirst'>Facial biometrics used to verify identity</p>
                            </div>
                            <div className='absolute top-[71.5%] left-[63%] overflow-hidden'>
                                <p className='text-content-18 font-body text-center textanim svgFirst'>OCR captures and matches data to NIMC</p>
                            </div>
                        </div>
                        <div>
                            <div className='absolute top-[87.2%] left-[29%] overflow-hidden w-[15%]'>
                                <p className='text-content-18 font-body textanim leading-[1.5] svgSecond'>Customer enters BVN; details fetched from NIBSS</p>
                            </div>
                            <div className='absolute top-[80.1%] left-[72%] overflow-hidden w-[13%]'>
                                <p className='text-content-18 font-body textanim leading-[1.5] svgSecond'>Facial biometrics matched with BVN profile</p>
                            </div>
                      </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Identity

