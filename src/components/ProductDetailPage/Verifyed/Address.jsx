"use client"
import React, { useRef } from 'react'
import Copy from '../../Animations/Copy'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);


const Address = () => {
    const svgRef = useRef(null);
    const sectionRef = useRef(null);

    useGSAP(() => {
        const groups = ['svg-first', 'svg-second','svg-third'];

        groups.forEach(groupName => {
            const groupElement = svgRef.current?.querySelector(`.${groupName}`);
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
            const groupElement = svgRef.current?.querySelector(`.${groupName}`);
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
        <section data-theme="orange" className='w-screen h-full bg-gradient relative max-sm:hidden max-md:hidden' ref={sectionRef}>
            <div className='px-[4vw] pb-[7vw] flex flex-col items-center  gap-[10vw] '>
                <div className='w-[80%]'>
                    <Copy>
                        <h2 className='text-head-60 font-display text-center capitalize'>
                            Step 4: Full ID & Address Verification (KYC Level 3)
                        </h2>
                    </Copy>
                </div>
                <div className='h-full w-full'>
                    <div className="svg-section flex flex-col items-center justify-center w-[85%] mx-auto" >
                        <svg className='w-full h-full' width="1593" height="806" viewBox="0 0 1593 806" fill="none" xmlns="http://www.w3.org/2000/svg" ref={svgRef}>
                        <g className='svg-first'>
                            <g className='centerGroup'>
                            <g filter="url(#filter0_f_196_280)">
                                <path d="M661.179 75.4925L687.755 48.372C689.636 46.4527 692.21 45.3711 694.897 45.3711L857.497 45.3711C863.02 45.3711 867.497 49.8483 867.497 55.3711V184.005C867.497 186.644 866.454 189.176 864.596 191.049L834.295 221.587L802.93 253.075C801.054 254.959 798.504 256.018 795.845 256.018H635.103C629.58 256.018 625.103 251.541 625.103 246.018L625.102 117.222C625.102 114.646 626.095 112.17 627.875 110.309L661.179 75.4925Z" fill="#FF5E01" />
                            </g>
                            <path d="M694.897 45.8711H857.497C862.744 45.8712 866.997 50.1245 866.997 55.3711V184.005C866.997 186.512 866.006 188.917 864.24 190.696L833.94 221.234L802.576 252.723C800.794 254.512 798.372 255.518 795.846 255.519H635.103C629.856 255.518 625.603 251.265 625.603 246.019L625.602 117.222C625.602 114.775 626.545 112.423 628.236 110.655L661.535 75.8418L661.536 75.8428L688.112 48.7217C689.899 46.8984 692.345 45.8711 694.897 45.8711Z" fill="#FF5100" stroke="white" />
                            <g filter="url(#filter1_f_196_280)">
                                <path d="M669.928 83.2228L693.47 59.1982C695.351 57.2788 697.925 56.1973 700.612 56.1973L845.04 56.1973C850.563 56.1973 855.04 60.6744 855.04 66.1973V180.159C855.04 182.797 853.997 185.329 852.139 187.202L825.251 214.301L797.411 242.251C795.534 244.135 792.985 245.194 790.326 245.194H647.56C642.037 245.194 637.56 240.716 637.56 235.194L637.559 121.075C637.559 118.5 638.552 116.024 640.332 114.163L669.928 83.2228Z" fill="#FF833B" />
                            </g>
                            <g filter="url(#filter2_d_196_280)">
                                <path d="M669.928 83.2208L693.47 59.1962C695.351 57.2769 697.925 56.1953 700.612 56.1953L845.04 56.1953C850.563 56.1953 855.04 60.6725 855.04 66.1953V180.157C855.04 182.795 853.997 185.327 852.139 187.2L825.251 214.299L797.411 242.249C795.534 244.133 792.985 245.192 790.326 245.192H647.56C642.037 245.192 637.56 240.715 637.56 235.192L637.559 121.073C637.559 118.498 638.552 116.022 640.332 114.161L669.928 83.2208Z" fill="#FF5100" />
                                <path d="M700.612 56.6953H845.04C850.287 56.6954 854.54 60.9487 854.54 66.1953V180.157C854.54 182.664 853.549 185.068 851.783 186.848L824.896 213.946L797.057 241.896C795.274 243.685 792.852 244.691 790.326 244.691H647.56C642.313 244.691 638.06 240.438 638.06 235.191L638.059 121.073C638.059 118.627 639.002 116.275 640.693 114.507L670.289 83.5664L670.288 83.5654L693.827 59.5459C695.614 57.7226 698.059 56.6954 700.612 56.6953Z" stroke="white" />
                            </g>
                            </g>
                            <path d="M1442.87 -0.0078125H1453.48L1435.48 27.4532H1424.87L1442.87 -0.0078125Z" fill="white" className='rects' />
                            <path d="M1457.18 -0.0078125H1467.79L1449.79 27.4532H1439.18L1457.18 -0.0078125Z" fill="white" className='rects' />
                            <path d="M1471.48 -0.0078125H1482.1L1464.1 27.4532H1453.48L1471.48 -0.0078125Z" fill="white" className='rects' />
                            <path d="M1485.79 -0.0078125H1496.41L1478.41 27.4532H1467.79L1485.79 -0.0078125Z" fill="white"className='rects'  />
                            <path d="M879.457 122.418L1056.99 26.4512H1428.97" stroke="white" strokeWidth="2" strokeLinecap="round" className='pathLine' />
                            <path d="M54.2343 215.279H43.6223L61.6223 242.74H72.2343L54.2343 215.279Z" fill="white" className='rects' />
                            <path d="M39.9257 215.279H29.3137L47.3137 242.74H57.9257L39.9257 215.279Z" fill="white" className='rects' />
                            <path d="M25.621 215.279H15.009L33.009 242.74H43.621L25.621 215.279Z" fill="white" className='rects' />
                            <path d="M11.3163 215.279H0.704292L18.7043 242.74H29.3163L11.3163 215.279Z" fill="white" className='rects' />
                            <path d="M470.577 241.743V242.743H470.753L470.919 242.682L470.577 241.743ZM603.935 194.225C604.454 194.036 604.722 193.462 604.533 192.943C604.344 192.424 603.77 192.157 603.251 192.346L603.593 193.285L603.935 194.225ZM66.164 241.743V242.743H470.577V241.743V240.743H66.164V241.743ZM470.577 241.743L470.919 242.682L603.935 194.225L603.593 193.285L603.251 192.346L470.234 240.803L470.577 241.743Z" fill="white" className='pathLine' />
                            </g>
                            <g className='svg-second'>
                                <g className='centerGroup'>
                            <g filter="url(#filter3_f_196_280)">
                                <path d="M836.628 316.141L863.204 289.02C865.085 287.101 867.659 286.02 870.347 286.02L1032.95 286.02C1038.47 286.02 1042.95 290.497 1042.95 296.02V424.654C1042.95 427.292 1041.9 429.824 1040.04 431.697L1009.74 462.235L978.38 493.724C976.503 495.608 973.954 496.667 971.295 496.667H810.552C805.029 496.667 800.552 492.19 800.552 486.667L800.551 357.87C800.551 355.295 801.544 352.819 803.325 350.958L836.628 316.141Z" fill="#FF5E01" />
                            </g>
                            <path d="M870.347 286.52H1032.95C1038.19 286.52 1042.45 290.773 1042.45 296.02V424.653C1042.45 427.16 1041.46 429.565 1039.69 431.345L1009.39 461.883L978.026 493.371C976.243 495.161 973.821 496.167 971.295 496.167H810.552C805.305 496.167 801.052 491.913 801.052 486.667L801.051 357.87C801.051 355.424 801.995 353.072 803.686 351.304L836.984 316.49L836.985 316.491L863.562 289.37C865.348 287.547 867.794 286.52 870.347 286.52Z" fill="#FF5100" stroke="white" />
                            <g filter="url(#filter4_f_196_280)">
                                <path d="M845.377 323.871L868.919 299.847C870.8 297.927 873.375 296.846 876.062 296.846L1020.49 296.846C1026.01 296.846 1030.49 301.323 1030.49 306.846V420.807C1030.49 423.446 1029.45 425.978 1027.59 427.851L1000.7 454.95L972.86 482.899C970.984 484.783 968.434 485.842 965.775 485.842H823.009C817.486 485.842 813.009 481.365 813.009 475.842L813.008 361.724C813.008 359.148 814.001 356.672 815.782 354.811L845.377 323.871Z" fill="#FF833B" />
                            </g>
                            <g filter="url(#filter5_d_196_280)">
                                <path d="M845.377 323.869L868.919 299.845C870.8 297.925 873.375 296.844 876.062 296.844L1020.49 296.844C1026.01 296.844 1030.49 301.321 1030.49 306.844V420.805C1030.49 423.444 1029.45 425.976 1027.59 427.849L1000.7 454.948L972.86 482.897C970.984 484.781 968.434 485.84 965.775 485.84H823.009C817.486 485.84 813.009 481.363 813.009 475.84L813.008 361.722C813.008 359.146 814.001 356.67 815.782 354.809L845.377 323.869Z" fill="#FF5100" />
                                <path d="M876.062 297.344H1020.49C1025.74 297.344 1029.99 301.597 1029.99 306.844V420.806C1029.99 423.312 1029 425.717 1027.23 427.496L1000.35 454.595L972.506 482.544C970.723 484.334 968.301 485.34 965.776 485.34H823.009C817.762 485.34 813.509 481.086 813.509 475.84L813.508 361.722C813.508 359.275 814.452 356.923 816.143 355.155L845.738 324.215L845.737 324.214L869.276 300.194C871.063 298.371 873.509 297.344 876.062 297.344Z" stroke="white" />
                            </g>
                            </g>
                            <path d="M1491.47 230.16H1502.08L1484.08 257.621H1473.47L1491.47 230.16Z" fill="white" className='rects' />
                            <path d="M1505.78 230.16H1516.39L1498.39 257.621H1487.78L1505.78 230.16Z" fill="white" className='rects' />
                            <path d="M1520.09 230.16H1530.7L1512.7 257.621H1502.09L1520.09 230.16Z" fill="white" className='rects' />
                            <path d="M1534.39 230.16H1545.01L1527.01 257.621H1516.39L1534.39 230.16Z" fill="white" className='rects' />
                            <path d="M1052.78 345.182L1164.91 256.623L1477.22 256.624" stroke="white" strokeWidth="2" strokeLinecap="round" className='pathLine' />
                            <path d="M315.688 402.994H305.076L323.076 430.455H333.688L315.688 402.994Z" fill="white" className='rects' />
                            <path d="M301.383 402.994H290.771L308.771 430.455H319.383L301.383 402.994Z" fill="white" className='rects' />
                            <path d="M287.074 402.994H276.462L294.462 430.455H305.074L287.074 402.994Z" fill="white" className='rects' />
                            <path d="M272.766 402.994H262.154L280.154 430.455H290.766L272.766 402.994Z" fill="white" className='rects' />
                            <path d="M650.549 429.452V430.452H650.725L650.89 430.392L650.549 429.452ZM785.599 381.557C786.119 381.369 786.387 380.796 786.199 380.276C786.01 379.757 785.437 379.489 784.918 379.677L785.259 380.617L785.599 381.557ZM326.949 429.452V430.452H650.549V429.452V428.452H326.949V429.452ZM650.549 429.452L650.89 430.392L785.599 381.557L785.259 380.617L784.918 379.677L650.208 428.512L650.549 429.452Z" fill="white" className='pathLine' />
                            <path d="M1538.93 437.846H1549.54L1531.54 465.307H1520.93L1538.93 437.846Z" fill="white" className='rects' />
                            <path d="M1553.23 437.846H1563.84L1545.84 465.307H1535.23L1553.23 437.846Z" fill="white" className='rects' />
                            <path d="M1567.54 437.846H1578.15L1560.15 465.307H1549.54L1567.54 437.846Z" fill="white" className='rects' />
                            <path d="M1581.85 437.846H1592.46L1574.46 465.307H1563.85L1581.85 437.846Z" fill="white" className='rects' />
                            <path d="M1062.33 395.754C1061.87 395.451 1061.25 395.58 1060.95 396.041C1060.65 396.503 1060.77 397.123 1061.24 397.426L1061.79 396.59L1062.33 395.754ZM1525.82 465.319L1526.82 465.319L1526.82 463.319L1525.82 463.319L1525.82 464.319L1525.82 465.319ZM1164.06 463.664L1163.51 464.5L1164.06 463.664ZM1166.26 464.319L1166.26 463.319L1166.26 464.319ZM1061.79 396.59L1061.24 397.426L1163.51 464.5L1164.06 463.664L1164.61 462.827L1062.33 395.754L1061.79 396.59ZM1166.26 464.319L1166.26 465.319L1525.82 465.319L1525.82 464.319L1525.82 463.319L1166.26 463.319L1166.26 464.319ZM1164.06 463.664L1163.51 464.5C1164.33 465.034 1165.28 465.319 1166.26 465.319L1166.26 464.319L1166.26 463.319C1165.67 463.319 1165.1 463.148 1164.61 462.827L1164.06 463.664Z" fill="white" className='pathLine' />
                            </g>
                            <g className='svg-third'>
                                <g className='centerGroup'>
                            <g filter="url(#filter6_f_196_280)">
                                <path d="M657.882 589.364L684.458 562.243C686.339 560.324 688.913 559.242 691.601 559.242L854.2 559.242C859.723 559.242 864.2 563.719 864.2 569.242V697.876C864.2 700.515 863.157 703.047 861.299 704.92L830.999 735.458L799.633 766.947C797.757 768.83 795.208 769.889 792.549 769.889H631.806C626.283 769.889 621.806 765.412 621.806 759.889L621.805 631.093C621.805 628.517 622.798 626.041 624.578 624.18L657.882 589.364Z" fill="#FF5E01" />
                            </g>
                            <path d="M691.601 559.742H854.2C859.447 559.742 863.7 563.996 863.7 569.242V697.876C863.7 700.383 862.709 702.788 860.943 704.567L830.644 735.105L799.279 766.594C797.497 768.383 795.075 769.39 792.549 769.39H631.806C626.559 769.389 622.306 765.136 622.306 759.89L622.305 631.093C622.305 628.646 623.249 626.294 624.94 624.526L658.238 589.713L658.239 589.714L684.816 562.593C686.602 560.77 689.048 559.742 691.601 559.742Z" fill="#FF5100" stroke="white" />
                            <g filter="url(#filter7_f_196_280)">
                                <path d="M666.631 597.094L690.173 573.069C692.054 571.15 694.628 570.068 697.316 570.068L841.743 570.068C847.266 570.068 851.743 574.546 851.743 580.068V694.03C851.743 696.669 850.7 699.2 848.842 701.073L821.954 728.172L794.114 756.122C792.238 758.006 789.688 759.065 787.029 759.065H644.263C638.74 759.065 634.263 754.588 634.263 749.065L634.262 634.946C634.262 632.371 635.255 629.895 637.035 628.034L666.631 597.094Z" fill="#FF833B" />
                            </g>
                            <g filter="url(#filter8_d_196_280)">
                                <path d="M666.631 597.092L690.173 573.067C692.054 571.148 694.628 570.066 697.316 570.066L841.743 570.066C847.266 570.066 851.743 574.544 851.743 580.066V694.028C851.743 696.667 850.7 699.198 848.842 701.071L821.954 728.17L794.114 756.12C792.238 758.004 789.688 759.063 787.029 759.063H644.263C638.74 759.063 634.263 754.586 634.263 749.063L634.262 634.944C634.262 632.369 635.255 629.893 637.035 628.032L666.631 597.092Z" fill="#FF5100" />
                                <path d="M697.316 570.566H841.743C846.99 570.567 851.243 574.82 851.243 580.066V694.028C851.243 696.535 850.252 698.939 848.486 700.719L821.6 727.817L793.76 755.767C791.977 757.556 789.555 758.562 787.029 758.562H644.263C639.016 758.562 634.763 754.309 634.763 749.062L634.762 634.944C634.762 632.498 635.706 630.146 637.397 628.378L666.992 597.438L666.991 597.437L690.53 573.417C692.317 571.594 694.763 570.566 697.316 570.566Z" stroke="white" />
                            </g>
                            </g>
                            <path d="M1434.24 559.242H1444.85L1426.85 586.703H1416.24L1434.24 559.242Z" fill="white" className='rects' />
                            <path d="M1448.55 559.242H1459.16L1441.16 586.703H1430.55L1448.55 559.242Z" fill="white" className='rects' />
                            <path d="M1462.86 559.242H1473.47L1455.47 586.703H1444.86L1462.86 559.242Z" fill="white" className='rects' />
                            <path d="M1477.16 559.242H1487.78L1469.78 586.703H1459.16L1477.16 559.242Z" fill="white" className='rects' />
                            <path d="M870.828 681.668L1048.36 585.701H1420.34" stroke="white" strokeWidth="2" strokeLinecap="round" className='pathLine' />
                            <path d="M59.0312 710.621H48.4191L66.4191 738.082H77.0312L59.0312 710.621Z" fill="white" className='rects' />
                            <path d="M44.7226 710.621H34.1105L52.1105 738.082H62.7226L44.7226 710.621Z" fill="white" className='rects' />
                            <path d="M30.4179 710.621H19.8059L37.8059 738.082H48.4179L30.4179 710.621Z" fill="white" className='rects' />
                            <path d="M16.1132 710.621H5.50117L23.5012 738.082H34.1132L16.1132 710.621Z" fill="white" className='rects' />
                            <path d="M427.291 737.084V738.084H427.423L427.55 738.05L427.291 737.084ZM608.648 689.593C609.182 689.45 609.499 688.902 609.356 688.368C609.213 687.835 608.665 687.518 608.131 687.661L608.39 688.627L608.648 689.593ZM70.9609 737.084V738.084H427.291V737.084V736.084H70.9609V737.084ZM427.291 737.084L427.55 738.05L608.648 689.593L608.39 688.627L608.131 687.661L427.033 736.118L427.291 737.084Z" fill="white" className='pathLine' />
                            <path d="M1267.89 778.34H1278.5L1260.5 805.801H1249.89L1267.89 778.34Z" fill="white" className='rects' />
                            <path d="M1282.19 778.34H1292.8L1274.8 805.801H1264.19L1282.19 778.34Z" fill="white" className='rects' />
                            <path d="M1296.5 778.34H1307.11L1289.11 805.801H1278.5L1296.5 778.34Z" fill="white" className='rects' />
                            <path d="M1310.81 778.34H1321.42L1303.42 805.801H1292.81L1310.81 778.34Z" fill="white" className='rects' />
                            <path d="M852.294 736.248C851.833 735.945 851.213 736.074 850.91 736.536C850.607 736.997 850.736 737.617 851.198 737.92L851.746 737.084L852.294 736.248ZM1254.79 805.813L1255.79 805.813L1255.79 803.813L1254.79 803.813L1254.79 804.813L1254.79 805.813ZM954.023 804.158L953.475 804.994L954.023 804.158ZM956.217 804.813L956.217 803.813L956.217 804.813ZM851.746 737.084L851.198 737.92L953.475 804.994L954.023 804.158L954.572 803.322L852.294 736.248L851.746 737.084ZM956.217 804.813L956.217 805.813L1254.79 805.813L1254.79 804.813L1254.79 803.813L956.217 803.813L956.217 804.813ZM954.023 804.158L953.475 804.994C954.29 805.528 955.243 805.813 956.217 805.813L956.217 804.813L956.217 803.813C955.632 803.813 955.06 803.642 954.572 803.322L954.023 804.158Z" fill="white" className='pathLine' />
                            </g>
                            <defs>
                                <filter id="filter0_f_196_280" x="617.102" y="37.3711" width="258.395" height="226.647" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_196_280" />
                                </filter>
                                <filter id="filter1_f_196_280" x="600.659" y="19.2973" width="291.281" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_196_280" />
                                </filter>
                                <filter id="filter2_d_196_280" x="611.859" y="31.4953" width="274.881" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="3" dy="4" />
                                    <feGaussianBlur stdDeviation="14.35" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_196_280" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_196_280" result="shape" />
                                </filter>
                                <filter id="filter3_f_196_280" x="792.551" y="278.02" width="258.395" height="226.647" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_196_280" />
                                </filter>
                                <filter id="filter4_f_196_280" x="776.108" y="259.946" width="291.281" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_196_280" />
                                </filter>
                                <filter id="filter5_d_196_280" x="787.308" y="272.144" width="274.881" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="3" dy="4" />
                                    <feGaussianBlur stdDeviation="14.35" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_196_280" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_196_280" result="shape" />
                                </filter>
                                <filter id="filter6_f_196_280" x="613.805" y="551.242" width="258.395" height="226.647" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_196_280" />
                                </filter>
                                <filter id="filter7_f_196_280" x="597.362" y="533.168" width="291.281" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_196_280" />
                                </filter>
                                <filter id="filter8_d_196_280" x="608.562" y="545.366" width="274.881" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="3" dy="4" />
                                    <feGaussianBlur stdDeviation="14.35" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_196_280" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_196_280" result="shape" />
                                </filter>
                            </defs>
                        </svg>


                    </div>
                    <div>
                        <div className='absolute top-[25%] left-[42.3%] w-[10%] overflow-hidden'>
                            <p className='font-medium text-content-20 font-body  text-center text-anim svg-first'>ID Document Verification (KYC Level 3)</p>
                        </div>
                        <div className='absolute top-[41%] left-[51%] w-[10%] overflow-hidden'>
                            <p className='font-medium text-content-20 font-body  text-center text-anim svg-second'>Residence Verification</p>
                        </div>
                         <div className='absolute top-[58%] left-[42.5%] w-[10%] overflow-hidden'>
                            <p className='font-medium text-content-20 font-body  text-center text-anim svg-second'>Business Verification</p>
                        </div>
                        

                    </div>
                    <div>
                        <div>
                            <div className='absolute top-[31%] left-[13.5%] overflow-hidden w-[20%]'>
                                <p className='text-content-18 font-body text-center text-anim leading-[1.5] svg-first'>OCR reads ID; facial biometrics matched</p>
                            </div>
                            <div className='absolute top-[18%] left-[64%] overflow-hidden w-[18%]'>
                                <p className='text-content-18 font-body  text-anim svg-first leading-[1.2]'>Customer scans acceptable ID (e.g., driver’s license, voter’s card)</p>
                            </div>
                            
                        </div>
                        <div>
                            <div className='absolute top-[43%] left-[27.3%] overflow-hidden'>
                                <p className='text-content-18 font-body text-anim svg-second'>OCR captures and matches data</p>
                            </div>
                            <div className='absolute top-[32.5%] left-[69%] overflow-hidden w-[18%]'>
                                <p className='text-content-18 font-body text-anim svg-second'>Customer uploads utility bill or acceptable proof of address</p>
                            </div>
                            <div className='absolute top-[45%] left-[69%] overflow-hidden '>
                                <p className='text-content-18 font-body text-anim svg-second'>Customer selects residence on map</p>
                            </div>
                        </div>

                        <div>
                            <div className='absolute top-[62.5%] left-[15.3%] overflow-hidden'>
                                <p className='text-content-18 font-body text-anim svg-second'>CAC or other document is verified</p>
                            </div>
                            <div className='absolute top-[52.5%] left-[63%] overflow-hidden w-[18%]'>
                                <p className='text-content-18 font-body text-anim svg-second'>Customer enters registration details</p>
                            </div>
                            <div className='absolute top-[66.5%] left-[59%] overflow-hidden '>
                                <p className='text-content-18 font-body text-anim svg-second'>Location is selected on map</p>
                            </div>
                        </div>
                       
                    </div>
                </div>

                 <div className='w-full h-full'>
                 <div className='space-y-[2vw] '>
                                <Copy>
                                    <p className='text-head-60 font-display text-center font-light'>Step 5: Verification Done</p>
                                </Copy>
                                <Copy>
                                    <p className='text-content-20 text-center font-body'>Upon passing all checks, customer’s profile gets approved and fully verified.</p>
                                </Copy>
                                </div>

            </div>

            </div>
           
        </section>
    )
}

export default Address

