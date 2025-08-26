"use client"
import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Copy from '../Animations/Copy';
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);


const Diagram2 = () => {
    const svgref = useRef(null);
    const sectionRef = useRef(null);

    useGSAP(() => {
        const groups = ['svg-first', 'svg-second'];

        groups.forEach(groupName => {
            const groupElement = svgref.current?.querySelector(`.${groupName}`);
            if (groupElement) {
                const lines = groupElement.querySelectorAll(".pathLine");
                const rects = groupElement.querySelectorAll(".rects");
                const centerGroup = groupElement.querySelectorAll(".centerGroup");

                gsap.set(lines, { opacity: 0, drawSVG: "0%" });
                gsap.set(rects, { opacity: 0 });
                gsap.set(centerGroup, { opacity: 0, scale: 0.8 });
            }
        });
        const texts = sectionRef.current?.querySelectorAll(".text-anim");
        if (texts) {
            gsap.set(texts, { y: 10, opacity: 0 });
        }
        groups.forEach((groupName, index) => {
            const groupElement = svgref.current?.querySelector(`.${groupName}`);
            if (!groupElement) return;
    
            ScrollTrigger.create({
                trigger: groupElement,
                start: "top 70%",
                toggleActions: "play none none none",
                onEnter: () => {
                    const lines = groupElement.querySelectorAll(".pathLine");
                    const rects = groupElement.querySelectorAll(".rects");
                    const centerGroup = groupElement.querySelectorAll(".centerGroup");
                    const correspondingTexts = sectionRef.current?.querySelectorAll(`.text-anim.${groupName}`);
                    
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
        <section data-theme="orange" className='w-screen overflow-hidden h-full bg-gradient relative max-sm:block max-md:block ' ref={sectionRef}>
            <div className='px-[4vw] py-[7vw] max-sm:py-[15vw] max-md:py-[10vw] flex flex-col items-center gap-[7vw] max-sm:gap-[4vw] '>
                <div className='w-[80%] max-sm:w-[80%] max-md:w-[60%]'>
                    <Copy>
                        <h2 className='text-head-60 font-display text-center capitalize'>
                        Partner Integration (On-Premise)
                        </h2>
                    </Copy>
                </div>
                <div className='h-full w-full max-md:hidden max-sm:hidden'>
                    <div className="svg-section flex flex-col items-center justify-center w-[85%] mx-auto" >
                    <svg className='w-full h-full' ref={svgref} width="1399" height="608" viewBox="0 0 1399 608" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g className='svg-first'>
                    <g className='centerGroup'>
<g filter="url(#filter0_f_94_554)">
<path d="M492.46 148.25L519.036 121.13C520.917 119.21 523.491 118.129 526.179 118.129L688.778 118.129C694.301 118.129 698.778 122.606 698.778 128.129V256.763C698.778 259.402 697.735 261.933 695.877 263.806L665.577 294.345L634.211 325.833C632.335 327.717 629.786 328.776 627.127 328.776H466.384C460.861 328.776 456.384 324.299 456.384 318.776L456.383 189.979C456.383 187.404 457.376 184.928 459.156 183.067L492.46 148.25Z" fill="#FF5E01"/>
</g>
<path d="M526.179 118.629H688.778C694.025 118.629 698.278 122.882 698.278 128.129V256.763C698.278 259.269 697.287 261.675 695.521 263.454L665.222 293.992L633.857 325.48C632.075 327.27 629.653 328.276 627.127 328.276H466.384C461.137 328.276 456.884 324.023 456.884 318.776L456.883 189.979C456.883 187.533 457.827 185.181 459.518 183.413L492.816 148.6L492.817 148.601L519.394 121.479C521.18 119.656 523.626 118.629 526.179 118.629Z" fill="#FF5100" stroke="white"/>
<g filter="url(#filter1_f_94_554)">
<path d="M501.209 155.981L524.751 131.956C526.632 130.037 529.206 128.955 531.894 128.955L676.321 128.955C681.844 128.955 686.321 133.432 686.321 138.955V252.917C686.321 255.555 685.278 258.087 683.42 259.96L656.532 287.059L628.692 315.009C626.816 316.892 624.266 317.951 621.607 317.951H478.841C473.318 317.951 468.841 313.474 468.841 307.951L468.84 193.833C468.84 191.258 469.833 188.782 471.614 186.921L501.209 155.981Z" fill="#FF833B"/>
</g>
<g filter="url(#filter2_d_94_554)">
<path d="M501.209 155.979L524.751 131.954C526.632 130.035 529.206 128.953 531.894 128.953L676.321 128.953C681.844 128.953 686.321 133.43 686.321 138.953V252.915C686.321 255.553 685.278 258.085 683.42 259.958L656.532 287.057L628.692 315.007C626.816 316.89 624.266 317.949 621.607 317.949H478.841C473.318 317.949 468.841 313.472 468.841 307.95L468.84 193.831C468.84 191.256 469.833 188.78 471.614 186.919L501.209 155.979Z" fill="#FF5100"/>
<path d="M531.894 129.453H676.321C681.568 129.453 685.821 133.706 685.821 138.953V252.915C685.821 255.422 684.83 257.826 683.064 259.605L656.178 286.704L628.338 314.653C626.555 316.443 624.133 317.449 621.607 317.449H478.841C473.594 317.449 469.341 313.196 469.341 307.949L469.34 193.831C469.34 191.385 470.284 189.033 471.975 187.265L501.57 156.324L501.569 156.323L525.108 132.304C526.895 130.48 529.341 129.453 531.894 129.453Z" stroke="white"/>
</g>
</g>
<path d="M53.5293 0.269531H42.9172L60.9172 27.7305H71.5293L53.5293 0.269531Z" fill="white" className='rects'/>
<path d="M39.2227 0.269531H28.6106L46.6106 27.7305H57.2227L39.2227 0.269531Z" fill="white" className='rects'/>
<path d="M24.916 0.269531H14.304L32.304 27.7305H42.916L24.916 0.269531Z" fill="white" className='rects'/>
<path d="M10.6094 0.269531H-0.00267792L17.9973 27.7305H28.6094L10.6094 0.269531Z" fill="white" className='rects'/>
<path d="M372.093 26.7324L372.806 26.0309L372.512 25.7324H372.093V26.7324ZM484.731 142.573C485.119 142.966 485.752 142.971 486.146 142.584C486.539 142.196 486.544 141.563 486.157 141.17L484.731 142.573ZM65.2383 26.7324V27.7324H372.093V26.7324V25.7324H65.2383V26.7324ZM372.093 26.7324L371.38 27.434L484.731 142.573L485.444 141.871L486.157 141.17L372.806 26.0309L372.093 26.7324Z" fill="white" className='pathLine'/>
<path d="M1212.6 65.4805H1223.21L1205.21 92.9415H1194.6L1212.6 65.4805Z" fill="white" className='rects'/>
<path d="M1226.91 65.4805H1237.52L1219.52 92.9415H1208.91L1226.91 65.4805Z" fill="white" className='rects'/>
<path d="M1241.21 65.4805H1251.83L1233.83 92.9415H1223.21L1241.21 65.4805Z" fill="white" className='rects'/>
<path d="M1255.52 65.4805H1266.14L1248.14 92.9415H1237.52L1255.52 65.4805Z" fill="white" className='rects'/>
<path d="M710.738 206.645L821.784 91.9375H1200.6" stroke="white" strokeWidth="2" strokeLinecap="round" className='pathLine'/>
</g>


<g className='svg-second'>
<g className='centerGroup'>
<g filter="url(#filter3_f_94_554)">
<path d="M661.268 391.86L687.845 364.739C689.726 362.82 692.3 361.738 694.987 361.738L857.587 361.738C863.11 361.738 867.587 366.215 867.587 371.738V500.372C867.587 503.011 866.544 505.543 864.685 507.416L834.385 537.954L803.02 569.443C801.144 571.327 798.594 572.385 795.935 572.385H635.193C629.67 572.385 625.193 567.908 625.193 562.386L625.191 433.589C625.191 431.014 626.185 428.538 627.965 426.676L661.268 391.86Z" fill="#FF5E01"/>
</g>
<path d="M694.987 362.238H857.587C862.834 362.238 867.087 366.492 867.087 371.738V500.372C867.087 502.879 866.096 505.284 864.33 507.063L834.03 537.602L802.666 569.09C800.883 570.879 798.461 571.886 795.936 571.886H635.192C629.946 571.886 625.693 567.632 625.692 562.386L625.691 433.589C625.691 431.142 626.635 428.79 628.326 427.022L661.625 392.209L661.626 392.21L688.202 365.089C689.989 363.266 692.434 362.238 694.987 362.238Z" fill="#FF5100" stroke="white"/>
<g filter="url(#filter4_f_94_554)">
<path d="M670.017 399.59L693.56 375.565C695.441 373.646 698.015 372.564 700.702 372.564L845.13 372.564C850.653 372.564 855.13 377.042 855.13 382.564V496.526C855.13 499.165 854.087 501.696 852.228 503.569L825.341 530.668L797.501 558.618C795.624 560.502 793.075 561.561 790.416 561.561H647.65C642.127 561.561 637.65 557.084 637.65 551.561L637.648 437.442C637.648 434.867 638.642 432.391 640.422 430.53L670.017 399.59Z" fill="#FF833B"/>
</g>
<g filter="url(#filter5_d_94_554)">
<path d="M670.017 399.588L693.56 375.563C695.441 373.644 698.015 372.563 700.702 372.563L845.13 372.563C850.653 372.563 855.13 377.04 855.13 382.563V496.524C855.13 499.163 854.087 501.694 852.228 503.567L825.341 530.666L797.501 558.616C795.624 560.5 793.075 561.559 790.416 561.559H647.65C642.127 561.559 637.65 557.082 637.65 551.559L637.648 437.441C637.648 434.865 638.642 432.389 640.422 430.528L670.017 399.588Z" fill="#FF5100"/>
<path d="M700.702 373.062H845.13C850.377 373.063 854.63 377.316 854.63 382.562V496.524C854.63 499.031 853.639 501.436 851.873 503.215L824.986 530.313L797.146 558.263C795.364 560.052 792.942 561.059 790.416 561.059H647.649C642.403 561.058 638.149 556.805 638.149 551.559L638.148 437.44C638.148 434.994 639.092 432.642 640.783 430.874L670.379 399.934L670.378 399.933L693.917 375.913C695.704 374.09 698.149 373.063 700.702 373.062Z" stroke="white"/>
</g>
</g>
<path d="M76.1875 417.398H65.5754L83.5754 444.859H94.1875L76.1875 417.398Z" fill="white" className='rects'/>
<path d="M61.8809 417.398H51.2688L69.2688 444.859H79.8809L61.8809 417.398Z" fill="white" className='rects'/>
<path d="M47.5742 417.398H36.9622L54.9622 444.859H65.5742L47.5742 417.398Z" fill="white" className='rects'/>
<path d="M33.2676 417.398H22.6555L40.6555 444.859H51.2676L33.2676 417.398Z" fill="white" className='rects'/>
<path d="M461.376 443.863L461.737 442.931L461.563 442.863H461.376V443.863ZM614.705 504.219C615.22 504.418 615.799 504.162 615.998 503.647C616.197 503.132 615.941 502.553 615.426 502.354L614.705 504.219ZM88.2402 443.863V444.863H461.376V443.863V442.863H88.2402V443.863ZM461.376 443.863L461.015 444.796L614.705 504.219L615.065 503.286L615.426 502.354L461.737 442.931L461.376 443.863Z" fill="white" className='pathLine'/>
</g>
<defs>
<filter id="filter0_f_94_554" x="448.383" y="110.129" width="258.395" height="226.646" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_94_554"/>
</filter>
<filter id="filter1_f_94_554" x="431.94" y="92.0551" width="291.28" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_94_554"/>
</filter>
<filter id="filter2_d_94_554" x="443.14" y="104.253" width="274.88" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="4"/>
<feGaussianBlur stdDeviation="14.35"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_94_554"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_94_554" result="shape"/>
</filter>
<filter id="filter3_f_94_554" x="617.191" y="353.738" width="258.395" height="226.646" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_94_554"/>
</filter>
<filter id="filter4_f_94_554" x="600.748" y="335.664" width="291.28" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_94_554"/>
</filter>
<filter id="filter5_d_94_554" x="611.948" y="347.862" width="274.88" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="4"/>
<feGaussianBlur stdDeviation="14.35"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_94_554"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_94_554" result="shape"/>
</filter>
</defs>
</svg>

                    </div>
                    <div>
                        <div className='absolute top-[48.5%] left-[38%] w-[10%] overflow-hidden'>
                            <p className='font-medium text-content-24 font-body  text-center text-anim svg-first '>Partner Infrastructure</p>
                        </div>
                        <div className='absolute top-[72.4%] left-[47.5%] w-[10%] overflow-hidden'>
                            <p className='font-medium text-content-24 font-body  text-center text-anim svg-second'>Secure VPN Tunnel</p>
                        </div>
                        

                    </div>
                    <div>
                        <div>
                            <div className='absolute top-[30%] left-[15%] overflow-hidden w-[15%]'>
                                <p className='text-content-18 font-body text-center text-anim leading-[1.5] svg-first'>Core Banking System</p>
                            </div>
                            <div className='absolute top-[36.5%] left-[58%] overflow-hidden'>
                                <p className='text-content-18 font-body text-center text-anim svg-first'>On-Premise Applications (Apps + Storage)</p>
                            </div>
                            
                        </div>
                        <div>
                            <div className='absolute top-[69.5%] left-[17%] w-[20%] overflow-hidden'>
                                <p className='text-content-18 font-body text-anim svg-second leading-[1.8]'>Connects Partner Infra with MonieLink Backend for data exchange and operations</p>
                            </div>
                           
                        </div>
                       
                    </div>
                </div>

                 <div className='w-[100vw] hidden max-sm:block max-md:block overflow-visible max-sm:pt-[5vw]  max-sm:pb-[10vw]'>
                                <div className='max-sm:w-fit max-md:w-full  max-sm:overflow-x-scroll max-md:pl-[5vw] relative max-sm:pl-[30vw] scrollbar-hidden'>
                                    <div className='max-sm:w-[160%] max-md:w-[90%] max-sm:py-[5vw] max-md:py-[1vw]'>
                
                                    <svg className='max-sm:w-[50%] max-md:w-[100%] scale-[1.3] max-sm:scale-[1.4]' width="494" height="164" viewBox="0 0 494 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="166.53" y1="74.9404" x2="327.736" y2="74.9404" stroke="white"/>
                <g filter="url(#filter0_f_0_3)">
                <path d="M38.4044 35.0329L54.9087 18.1908C56.0767 16.9988 57.6753 16.3271 59.3442 16.3271L160.32 16.3272C163.75 16.3272 166.531 19.1075 166.531 22.5373V102.421C166.531 104.059 165.883 105.631 164.729 106.795L145.912 125.759L126.434 145.314C125.269 146.484 123.685 147.142 122.034 147.142H22.211C18.7813 147.142 16.0009 144.361 16.0009 140.932L16.0001 60.9472C16.0001 59.3479 16.6171 57.8103 17.7226 56.6546L38.4044 35.0329Z" fill="#FF5E01"/>
                </g>
                <path d="M59.3438 16.6377H160.32C163.579 16.6377 166.22 19.2789 166.22 22.5371V102.421C166.22 103.977 165.604 105.471 164.508 106.576L145.691 125.54L126.214 145.095C125.107 146.206 123.603 146.831 122.034 146.831H22.211C18.9528 146.831 16.3117 144.19 16.3116 140.932L16.3106 60.9473C16.3106 59.4279 16.8972 57.9671 17.9474 56.8691L38.628 35.2471L55.13 18.4082C56.2395 17.2759 57.7586 16.6378 59.3438 16.6377Z" fill="#FF5100" stroke="white" strokeWidth="0.621012"/>
                <g filter="url(#filter1_f_0_3)">
                <path d="M43.8375 39.8331L58.4577 24.9136C59.6258 23.7217 61.2244 23.05 62.8932 23.05L152.584 23.05C156.014 23.05 158.794 25.8304 158.794 29.2601V100.032C158.794 101.67 158.147 103.242 156.993 104.406L140.295 121.234L123.006 138.591C121.841 139.761 120.258 140.419 118.606 140.419H29.9468C26.5171 140.419 23.7367 137.639 23.7367 134.209L23.736 63.34C23.736 61.7407 24.353 60.2031 25.4584 59.0474L43.8375 39.8331Z" fill="#FF833B"/>
                </g>
                <g filter="url(#filter2_d_0_3)">
                <path d="M43.8376 39.8331L58.4579 24.9136C59.6259 23.7217 61.2245 23.05 62.8934 23.05L152.585 23.05C156.014 23.05 158.795 25.8304 158.795 29.2601V100.032C158.795 101.67 158.147 103.242 156.993 104.406L140.295 121.234L123.006 138.591C121.841 139.761 120.258 140.419 118.606 140.419H29.947C26.5172 140.419 23.7369 137.639 23.7369 134.209L23.7361 63.34C23.7361 61.7407 24.3531 60.2031 25.4586 59.0474L43.8376 39.8331Z" fill="#FF5100"/>
                <path d="M62.8933 23.3605H152.585C155.843 23.3607 158.484 26.0018 158.484 29.2599V100.031C158.484 101.588 157.869 103.082 156.772 104.187L140.075 121.016L122.786 138.372C121.679 139.484 120.175 140.109 118.606 140.109H29.9471C26.6889 140.109 24.0478 137.467 24.0476 134.209L24.0467 63.34C24.0467 61.8207 24.6332 60.3598 25.6834 59.2619L44.0613 40.0471L58.6795 25.131C59.7891 23.9987 61.308 23.3605 62.8933 23.3605Z" stroke="white" strokeWidth="0.621012"/>
                </g>
                <g filter="url(#filter3_f_0_3)">
                <path d="M349.935 35.0329L366.439 18.1908C367.607 16.9988 369.206 16.3271 370.875 16.3271L471.851 16.3272C475.281 16.3272 478.061 19.1075 478.061 22.5373V102.421C478.061 104.059 477.413 105.631 476.259 106.795L457.442 125.759L437.964 145.314C436.799 146.484 435.216 147.142 433.564 147.142H333.741C330.312 147.142 327.531 144.361 327.531 140.932L327.531 60.9472C327.531 59.3479 328.148 57.8103 329.253 56.6546L349.935 35.0329Z" fill="#FF5E01"/>
                </g>
                <path d="M370.874 16.6377H471.851C475.109 16.6377 477.75 19.2789 477.75 22.5371V102.421C477.75 103.977 477.135 105.471 476.038 106.576L457.222 125.54L437.744 145.095C436.637 146.206 435.133 146.831 433.565 146.831H333.741C330.483 146.831 327.842 144.19 327.842 140.932L327.841 60.9473C327.841 59.4279 328.428 57.9671 329.478 56.8691L350.158 35.2471L366.66 18.4082C367.77 17.2759 369.289 16.6378 370.874 16.6377Z" fill="#FF5100" stroke="white" strokeWidth="0.621012"/>
                <g filter="url(#filter4_f_0_3)">
                <path d="M355.368 39.8331L369.988 24.9136C371.156 23.7217 372.755 23.05 374.424 23.05L464.115 23.05C467.545 23.05 470.325 25.8304 470.325 29.2601V100.032C470.325 101.67 469.677 103.242 468.523 104.406L451.826 121.234L434.537 138.591C433.371 139.761 431.788 140.419 430.137 140.419H341.477C338.048 140.419 335.267 137.639 335.267 134.209L335.266 63.34C335.266 61.7407 335.883 60.2031 336.989 59.0474L355.368 39.8331Z" fill="#FF833B"/>
                </g>
                <g filter="url(#filter5_d_0_3)">
                <path d="M355.368 39.8331L369.988 24.9136C371.156 23.7217 372.755 23.05 374.424 23.05L464.115 23.05C467.545 23.05 470.325 25.8304 470.325 29.2601V100.032C470.325 101.67 469.677 103.242 468.523 104.406L451.826 121.234L434.537 138.591C433.371 139.761 431.788 140.419 430.137 140.419H341.477C338.048 140.419 335.267 137.639 335.267 134.209L335.267 63.34C335.267 61.7407 335.884 60.2031 336.989 59.0474L355.368 39.8331Z" fill="#FF5100"/>
                <path d="M374.424 23.3605H464.115C467.373 23.3607 470.015 26.0018 470.015 29.2599V100.031C470.015 101.588 469.399 103.082 468.303 104.187L451.605 121.016L434.316 138.372C433.209 139.484 431.705 140.109 430.137 140.109H341.478C338.219 140.109 335.578 137.467 335.578 134.209L335.577 63.34C335.577 61.8207 336.164 60.3598 337.214 59.2619L355.592 40.0471L370.21 25.131C371.32 23.9987 372.838 23.3605 374.424 23.3605Z" stroke="white" strokeWidth="0.621012"/>
                </g>
                <defs>
                <filter id="filter0_f_0_3" x="11.032" y="11.3591" width="160.467" height="140.751" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="2.48405" result="effect1_foregroundBlur_0_3"/>
                </filter>
                <filter id="filter1_f_0_3" x="0.820642" y="0.134628" width="180.889" height="163.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="11.4577" result="effect1_foregroundBlur_0_3"/>
                </filter>
                <filter id="filter2_d_0_3" x="7.77613" y="7.71098" width="170.705" height="153.015" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="1.86304" dy="2.48405"/>
                <feGaussianBlur stdDeviation="8.91153"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_3"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_3" result="shape"/>
                </filter>
                <filter id="filter3_f_0_3" x="322.562" y="11.3591" width="160.467" height="140.751" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="2.48405" result="effect1_foregroundBlur_0_3"/>
                </filter>
                <filter id="filter4_f_0_3" x="312.351" y="0.134628" width="180.889" height="163.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="11.4577" result="effect1_foregroundBlur_0_3"/>
                </filter>
                <filter id="filter5_d_0_3" x="319.307" y="7.71098" width="170.705" height="153.015" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="1.86304" dy="2.48405"/>
                <feGaussianBlur stdDeviation="8.91153"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_3"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_3" result="shape"/>
                </filter>
                </defs>
                                </svg>
                            </div>
                
                            <div>
                
                                <div >
                                        <div className='absolute max-md:w-[15%] max-md:top-[20%] max-sm:top-[28%] max-sm:left-[11%] max-md:left-[15%] max-sm:w-[20%] overflow-hidden'>
                                            <Copy>
                                                        <p className="max-md:text-content-20 max-sm:text-[4vw] text-center">Partner Infrastructure</p>
                                                        </Copy>
                                        </div>
                                        <div className='absolute max-md:w-[15%] max-sm:w-[15%] max-sm:top-[26%] max-md:top-[20%] max-sm:right-[14%] max-md:right-[20%] w-[25%] overflow-hidden'>
                                            <p className='max-md:text-content-20 max-sm:text-[4vw] text-center'>Secure VPN Tunnel</p>
                                        </div>
                                        
                                    </div>
                                    <div className='flex justify-between max-sm:gap-[25vw] max-sm:px-0 max-md:px-[8vw] max-sm:pt-[5vw] max-md:pt-[5vw] w-full max-sm:w-[115%]'>
                                         <div className="max-sm:ml-[-15vw] w-[18%] max-md:w-[30%] max-sm:w-[60vw]">
                                  <ul className="max-sm:pl-0 max-md:pl-0  list-disc space-y-[0.5vw] font-medium text-content-24 max-md:text-content-20 max-md:w-full font-body  text-center max-sm:text-[4vw]  max-sm:text-content-20 max-sm:text-left max-md:text-left">
                                    <li>Core Banking System</li>
                                    <li>On-Premise Applications (Apps + Storage)</li>
                                  </ul>
                                </div>
                                <div className=" w-[18%] max-md:w-[32%] max-sm:w-[70vw] overflow-visible">
                                  <ul className=" max-md:pl-[0vw] list-disc space-y-[0.5vw] font-medium text-content-24 w-full max-md:text-content-20 max-md:w-full font-body  text-center   max-sm:text-[4vw] max-sm:text-left max-md:text-left">
                                    <li>Connects Partner Infra with MonieLink Backend for data exchange and operations</li>
                                  </ul>
                                </div>
                                    </div>
                
                
                                
                            </div>
                
                
                                </div>
                                
                                </div>
                                <div className="w-full mx-auto h-full text-white relative z-10  items-center gap-3 justify-end hidden max-sm:flex max-md:hidden max-sm:mt-[10vw]">
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

export default Diagram2

