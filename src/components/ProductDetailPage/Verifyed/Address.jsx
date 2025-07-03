"use client"
import React, { useRef } from 'react'
import Copy from '../../Animations/Copy'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);


const Address = () => {
    const svgref = useRef(null);
    const sectionRef = useRef(null);

    useGSAP(() => {
        const groups = ['svg-first', 'svg-second', 'svg-third'];

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
        groups.forEach((groupName) => {
            const groupElement = svgref.current?.querySelector(`.${groupName}`);
            if (!groupElement) return;

            ScrollTrigger.create({
                trigger: groupElement,
                start: "top 70%",
                // markers: true,
                toggleActions: "play none none none",
                onEnter: () => {
                    const lines = groupElement.querySelectorAll(".pathLine");
                    const rects = groupElement.querySelectorAll(".rects");
                    const centerGroup = groupElement.querySelectorAll(".centerGroup");
                    const tl = gsap.timeline();
                    tl.to(centerGroup, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        //   transformOrigin:"center",
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
                            stagger: 0.01,
                            ease: "power2.out"
                        }, "-=1");
                }
            });
        });

    }, []);

    useGSAP(() => {
        const texts = sectionRef.current.querySelectorAll(".text-anim");

        texts.forEach((text) => {
            gsap.from(text, {
                y: 10,
                opacity: 0,
                duration: 1,
                delay: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: text,
                    start: "top 80%",
                },
            });
        });
    }, []);

    return (
        <section data-theme="orange" className='w-screen h-full bg-gradient relative' ref={sectionRef}>
            <div className='px-[4vw] py-[7vw] flex flex-col items-center  gap-[10vw] '>
                <div className='w-[80%]'>
                    <Copy>
                        <h2 className='text-head-60 font-display text-center capitalize'>
                        Step 3: Address & Location Verification
                        </h2>
                    </Copy>
                </div>
                <div className='h-full w-full'>
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
<path d="M1344.81 268.156H1355.42L1337.42 295.617H1326.81L1344.81 268.156Z" fill="white" className='rects'/>
<path d="M1359.12 268.156H1369.73L1351.73 295.617H1341.12L1359.12 268.156Z" fill="white" className='rects'/>
<path d="M1373.42 268.156H1384.04L1366.04 295.617H1355.42L1373.42 268.156Z" fill="white" className='rects'/>
<path d="M1387.73 268.156H1398.34L1380.34 295.617H1369.73L1387.73 268.156Z" fill="white" className='rects'/>
<path d="M878.695 403.923L989.738 295.764C990.484 295.036 991.486 294.629 992.529 294.629H1331.71" stroke="white" strokeWidth="2" strokeLinecap="round" className='pathLine'/>
<path d="M1278.18 579.654H1288.79L1270.79 607.115H1260.18L1278.18 579.654Z" fill="white" className='rects'/>
<path d="M1292.48 579.654H1303.09L1285.09 607.115H1274.48L1292.48 579.654Z" fill="white" className='rects'/>
<path d="M1306.79 579.654H1317.4L1299.4 607.115H1288.79L1306.79 579.654Z" fill="white" className='rects'/>
<path d="M1321.1 579.654H1331.71L1313.71 607.115H1303.1L1321.1 579.654Z" fill="white" className='rects'/>
<path d="M862.582 537.562C862.12 537.259 861.5 537.388 861.197 537.85C860.894 538.312 861.023 538.932 861.485 539.235L862.582 537.562ZM1265.07 607.127L1266.07 607.127L1266.07 605.127L1265.07 605.127L1265.07 607.127ZM964.31 605.472L963.762 606.308L964.31 605.472ZM966.504 606.127L966.504 605.127L966.504 606.127ZM862.033 538.398L861.485 539.235L963.762 606.308L964.31 605.472L964.859 604.636L862.582 537.562L862.033 538.398ZM966.504 606.127L966.504 607.127L1265.07 607.127L1265.07 606.127L1265.07 605.127L966.504 605.127L966.504 606.127ZM964.31 605.472L963.762 606.308C964.577 606.843 965.53 607.127 966.504 607.127L966.504 606.127L966.504 605.127C965.919 605.127 965.348 604.957 964.859 604.636L964.31 605.472Z" fill="white" className='pathLine'/>

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
                        <div className='absolute top-[52%] left-[38%] w-[10%] overflow-hidden'>
                            <p className='font-medium text-content-20 font-body  text-center text-anim '>Residence Verification</p>
                        </div>
                        <div className='absolute top-[73.5%] left-[47.5%] w-[10%] overflow-hidden'>
                            <p className='font-medium text-content-20 font-body  text-center text-anim '>Business Verification</p>
                        </div>
                        

                    </div>
                    <div>
                        <div>
                            <div className='absolute top-[34%] left-[15%] overflow-hidden w-[15%]'>
                                <p className='text-content-18 font-body text-center text-anim leading-[1.5]'>Customer uploads utility bill or acceptable proof of address</p>
                            </div>
                            <div className='absolute top-[39%] left-[58%] overflow-hidden'>
                                <p className='text-content-18 font-body text-center text-anim '>Customer selects residence on map</p>
                            </div>
                            
                        </div>
                        <div>
                            <div className='absolute top-[71%] left-[17%] overflow-hidden'>
                                <p className='text-content-18 font-body text-anim '>Customer enters registration details</p>
                            </div>
                            <div className='absolute top-[58%] left-[67%] overflow-hidden '>
                                <p className='text-content-18 font-body text-anim '>CAC or other document is verified</p>
                            </div>
                            <div className='absolute top-[86%] left-[66%] overflow-hidden '>
                                <p className='text-content-18 font-body text-anim '>Location is selected on map</p>
                            </div>
                        </div>
                       
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Address

