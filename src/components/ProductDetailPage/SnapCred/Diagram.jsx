"use client"
import React, { useRef } from 'react'
import Copy from '../../Animations/Copy'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);


const Diagram = () => {
    const svgRef = useRef(null);
    const sectionRef = useRef(null);

    useGSAP(() => {
        const groups = ['svgFirst', 'svgSecond', 'svgThird', 'svgFourth'];

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
                        }, "-=1.1")
                        .to(rects, {
                            opacity: 1,
                            duration: 1,
                            stagger: 0.01,
                            ease: "power2.out"
                        }, "-=1");

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
        <section data-theme="orange" className='w-screen h-full bg-gradient relative max-sm:hidden' ref={sectionRef}>
            <div className='px-[4vw] py-[7vw] flex flex-col items-center  gap-[10vw]'>
                <div className=''>
                    <Copy>
                        <h2 className='text-head-100 font-display text-center capitalize'>
                            Power High-Performing Credit Portfolios with Seamless Loan Management
                        </h2>
                    </Copy>
                </div>
                <div className='h-full w-full'>
                    <div className="svg-section flex flex-col items-center justify-center w-[80%] mx-auto" >
                        <svg className='h-full w-full' ref={svgRef} width="1489" height="1430" viewBox="0 0 1489 1430" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g className='svgFirst'>
                                <g className='center-group'>
                                    <g filter="url(#filter0_f_106_1085)">
                                        <path d="M575.464 148.809L602.04 121.688C603.921 119.769 606.495 118.688 609.183 118.688L771.782 118.688C777.305 118.688 781.782 123.165 781.782 128.688V257.322C781.782 259.96 780.739 262.492 778.881 264.365L748.58 294.903L717.215 326.392C715.339 328.276 712.789 329.335 710.13 329.335H549.388C543.865 329.335 539.388 324.858 539.388 319.335L539.387 190.538C539.387 187.963 540.38 185.487 542.16 183.626L575.464 148.809Z" fill="#FF5E01" />
                                    </g>
                                    <path d="M609.183 119.188H771.782C777.029 119.188 781.282 123.441 781.282 128.688V257.321C781.282 259.828 780.291 262.233 778.525 264.013L748.226 294.551L716.861 326.039C715.079 327.829 712.657 328.835 710.131 328.835H549.388C544.141 328.835 539.888 324.581 539.888 319.335L539.887 190.538C539.887 188.092 540.831 185.74 542.521 183.972L575.82 149.158L575.821 149.159L602.397 122.038C604.184 120.215 606.63 119.187 609.183 119.188Z" fill="#FF5100" stroke="white" />
                                    <g filter="url(#filter1_f_106_1085)">
                                        <path d="M584.213 156.537L607.755 132.513C609.636 130.593 612.21 129.512 614.898 129.512L759.325 129.512C764.848 129.512 769.325 133.989 769.325 139.512V253.473C769.325 256.112 768.282 258.644 766.424 260.517L739.536 287.616L711.696 315.565C709.819 317.449 707.27 318.508 704.611 318.508H561.845C556.322 318.508 551.845 314.031 551.845 308.508L551.844 194.39C551.844 191.814 552.837 189.338 554.617 187.477L584.213 156.537Z" fill="#FF833B" />
                                    </g>
                                    <g filter="url(#filter2_d_106_1085)">
                                        <path d="M584.213 156.537L607.755 132.513C609.636 130.593 612.21 129.512 614.898 129.512L759.325 129.512C764.848 129.512 769.325 133.989 769.325 139.512V253.473C769.325 256.112 768.282 258.644 766.424 260.517L739.536 287.616L711.696 315.565C709.819 317.449 707.27 318.508 704.611 318.508H561.845C556.322 318.508 551.845 314.031 551.845 308.508L551.844 194.39C551.844 191.814 552.837 189.338 554.617 187.477L584.213 156.537Z" fill="#FF5100" />
                                        <path d="M614.897 130.012H759.325C764.572 130.012 768.825 134.265 768.825 139.512V253.474C768.825 255.98 767.834 258.385 766.068 260.164L739.182 287.263L711.342 315.212C709.559 317.002 707.137 318.008 704.611 318.008H561.845C556.598 318.008 552.345 313.754 552.345 308.508L552.344 194.39C552.344 191.943 553.288 189.591 554.979 187.823L584.574 156.883L584.573 156.882L608.112 132.862C609.899 131.039 612.345 130.012 614.897 130.012Z" stroke="white" />
                                    </g>
                                </g>
                                <path d="M90.4902 0.828125H79.8782L97.8782 28.2891H108.49L90.4902 0.828125Z" fill="white" className='rect' />
                                <path d="M76.1855 0.828125H65.5735L83.5735 28.2891H94.1855L76.1855 0.828125Z" fill="white" className='rect' />
                                <path d="M61.877 0.828125H51.2649L69.2649 28.2891H79.877L61.877 0.828125Z" fill="white" className='rect' />
                                <path d="M47.5723 0.828125H36.9602L54.9602 28.2891H65.5723L47.5723 0.828125Z" fill="white" className='rect' />
                                <path d="M102.24 27.3047H453.094L569.3 142.952" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line1' />
                                <path d="M1190 66.0391H1200.61L1182.61 93.5001H1172L1190 66.0391Z" fill="white" className='rect' />
                                <path d="M1204.3 66.0391H1214.91L1196.91 93.5001H1186.3L1204.3 66.0391Z" fill="white" className='rect' />
                                <path d="M1218.61 66.0391H1229.22L1211.22 93.5001H1200.61L1218.61 66.0391Z" fill="white" className='rect' />
                                <path d="M1232.92 66.0391H1243.53L1225.53 93.5001H1214.92L1232.92 66.0391Z" fill="white" className='rect' />
                                <path d="M793.127 207.677L904.793 93.7161C905.546 92.9483 906.575 92.5156 907.65 92.5156H1178.8" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                                <path d="M54.4082 301.879H43.7962L61.7961 329.34H72.4082L54.4082 301.879Z" fill="white" className='rect' />
                                <path d="M40.1035 301.879H29.4915L47.4915 329.34H58.1035L40.1035 301.879Z" fill="white" className='rect' />
                                <path d="M25.7949 301.879H15.1829L33.1829 329.34H43.7949L25.7949 301.879Z" fill="white" className='rect' />
                                <path d="M11.4863 301.879H0.874275L18.8743 329.34H29.4863L11.4863 301.879Z" fill="white" className='rect' />
                                <path d="M66.2402 328.303H380.345L529.591 268.563" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line1' />
                            </g>

                            <g className='svgSecond'>
                                <g className='center-group'>
                                    <g filter="url(#filter3_f_106_1085)">
                                        <path d="M744.899 489.809L771.476 462.688C773.357 460.769 775.931 459.688 778.618 459.688L941.218 459.688C946.74 459.688 951.218 464.165 951.218 469.688V598.322C951.218 600.96 950.175 603.492 948.316 605.365L918.016 635.903L886.651 667.392C884.774 669.276 882.225 670.335 879.566 670.335H718.824C713.301 670.335 708.824 665.858 708.824 660.335L708.822 531.538C708.822 528.963 709.816 526.487 711.596 524.626L744.899 489.809Z" fill="#FF5E01" />
                                    </g>
                                    <path d="M778.618 460.188H941.218C946.464 460.188 950.718 464.441 950.718 469.688V598.321C950.718 600.828 949.726 603.233 947.961 605.013L917.661 635.551L886.297 667.039C884.514 668.829 882.092 669.835 879.566 669.835H718.823C713.577 669.835 709.323 665.581 709.323 660.335L709.322 531.538C709.322 529.092 710.266 526.74 711.957 524.972L745.256 490.158L745.257 490.159L771.833 463.038C773.62 461.215 776.065 460.187 778.618 460.188Z" fill="#FF5100" stroke="white" />
                                    <g filter="url(#filter4_f_106_1085)">
                                        <path d="M753.648 497.537L777.191 473.513C779.072 471.593 781.646 470.512 784.333 470.512L928.761 470.512C934.283 470.512 938.761 474.989 938.761 480.512V594.473C938.761 597.112 937.718 599.644 935.859 601.517L908.972 628.616L881.132 656.565C879.255 658.449 876.706 659.508 874.047 659.508H731.28C725.758 659.508 721.281 655.031 721.28 649.508L721.279 535.39C721.279 532.814 722.273 530.338 724.053 528.477L753.648 497.537Z" fill="#FF833B" />
                                    </g>
                                    <g filter="url(#filter5_d_106_1085)">
                                        <path d="M753.648 497.537L777.191 473.513C779.072 471.593 781.646 470.512 784.333 470.512L928.761 470.512C934.283 470.512 938.761 474.989 938.761 480.512V594.473C938.761 597.112 937.718 599.644 935.859 601.517L908.972 628.616L881.132 656.565C879.255 658.449 876.706 659.508 874.047 659.508H731.28C725.758 659.508 721.281 655.031 721.28 649.508L721.279 535.39C721.279 532.814 722.273 530.338 724.053 528.477L753.648 497.537Z" fill="#FF5100" />
                                        <path d="M784.333 471.012H928.761C934.007 471.012 938.261 475.265 938.261 480.512V594.474C938.261 596.98 937.269 599.385 935.504 601.164L908.617 628.263L880.777 656.212C878.995 658.002 876.573 659.008 874.047 659.008H731.28C726.034 659.008 721.78 654.754 721.78 649.508L721.779 535.39C721.779 532.943 722.723 530.591 724.414 528.823L754.01 497.883L754.009 497.882L777.548 473.862C779.335 472.039 781.78 471.012 784.333 471.012Z" stroke="white" />
                                    </g>
                                </g>
                                <path d="M104.797 434.797H94.1848L112.185 462.258H122.797L104.797 434.797Z" fill="white" className='rect' />
                                <path d="M90.4922 434.797H79.8801L97.8801 462.258H108.492L90.4922 434.797Z" fill="white" className='rect' />
                                <path d="M76.1836 434.797H65.5715L83.5715 462.258H94.1836L76.1836 434.797Z" fill="white" className='rect' />
                                <path d="M61.8789 434.797H51.2669L69.2669 462.258H79.8789L61.8789 434.797Z" fill="white" className='rect' />
                                <path d="M116.24 461.277H467.094L693.635 565.984" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line1' />
                                <path d="M1326.05 609.367H1336.66L1318.66 636.828H1308.05L1326.05 609.367Z" fill="white" className='rect' />
                                <path d="M1340.36 609.367H1350.97L1332.97 636.828H1322.36L1340.36 609.367Z" fill="white" className='rect' />
                                <path d="M1354.67 609.367H1365.28L1347.28 636.828H1336.67L1354.67 609.367Z" fill="white" className='rect' />
                                <path d="M1368.97 609.367H1379.58L1361.58 636.828H1350.97L1368.97 609.367Z" fill="white" className='rect' />
                                <path d="M970.605 570.805L1069.95 635.829H1314.99" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                                <path d="M1401.04 369.879H1411.66L1393.66 397.34H1383.04L1401.04 369.879Z" fill="white" className='rect' />
                                <path d="M1415.35 369.879H1425.96L1407.96 397.34H1397.35L1415.35 369.879Z" fill="white" className='rect' />
                                <path d="M1429.66 369.879H1440.27L1422.27 397.34H1411.66L1429.66 369.879Z" fill="white" className='rect' />
                                <path d="M1443.96 369.879H1454.58L1436.58 397.34H1425.96L1443.96 369.879Z" fill="white" className='rect' />
                                <path d="M978.172 511.517L1089.84 397.556C1090.59 396.788 1091.62 396.355 1092.7 396.355H1389.85" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                                <path d="M219.566 642.875H208.954L226.954 670.336H237.566L219.566 642.875Z" fill="white" className='rect' />
                                <path d="M205.262 642.875H194.65L212.65 670.336H223.262L205.262 642.875Z" fill="white" className='rect' />
                                <path d="M190.953 642.875H180.341L198.341 670.336H208.953L190.953 642.875Z" fill="white" className='rect' />
                                <path d="M176.645 642.875H166.032L184.032 670.336H194.645L176.645 642.875Z" fill="white" className='rect' />
                                <path d="M231.242 669.338L465.653 669.338L694.286 608.754" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line1' /></g>

                            <g className='svgThird'>
                                <g className='center-group'>
                                    <g filter="url(#filter6_f_106_1085)">
                                        <path d="M576.87 830.461L603.446 803.341C605.327 801.421 607.902 800.34 610.589 800.34L773.188 800.34C778.711 800.34 783.188 804.817 783.188 810.34V938.974C783.188 941.613 782.145 944.144 780.287 946.017L749.987 976.556L718.622 1008.04C716.745 1009.93 714.196 1010.99 711.537 1010.99H550.794C545.271 1010.99 540.794 1006.51 540.794 1000.99L540.793 872.19C540.793 869.615 541.787 867.139 543.567 865.278L576.87 830.461Z" fill="#FF5E01" />
                                    </g>
                                    <path d="M610.589 800.84H773.188C778.435 800.84 782.688 805.093 782.688 810.34V938.974C782.688 941.48 781.697 943.886 779.932 945.665L749.632 976.203L718.268 1007.69C716.485 1009.48 714.063 1010.49 711.537 1010.49H550.794C545.547 1010.49 541.294 1006.23 541.294 1000.99L541.293 872.19C541.293 869.744 542.237 867.392 543.928 865.624L577.227 830.811L577.228 830.812L603.804 803.69C605.591 801.867 608.036 800.84 610.589 800.84Z" fill="#FF5100" stroke="white" />
                                    <g filter="url(#filter7_f_106_1085)">
                                        <path d="M585.619 838.19L609.162 814.165C611.042 812.246 613.617 811.164 616.304 811.164L760.731 811.164C766.254 811.164 770.731 815.641 770.731 821.164V935.126C770.731 937.764 769.688 940.296 767.83 942.169L740.942 969.268L713.102 997.218C711.226 999.101 708.676 1000.16 706.017 1000.16H563.251C557.728 1000.16 553.251 995.683 553.251 990.16L553.25 876.042C553.25 873.467 554.244 870.991 556.024 869.13L585.619 838.19Z" fill="#FF833B" />
                                    </g>
                                    <g filter="url(#filter8_d_106_1085)">
                                        <path d="M585.619 838.19L609.162 814.165C611.042 812.246 613.617 811.164 616.304 811.164L760.731 811.164C766.254 811.164 770.731 815.641 770.731 821.164V935.126C770.731 937.764 769.688 940.296 767.83 942.169L740.942 969.268L713.102 997.218C711.226 999.101 708.676 1000.16 706.017 1000.16H563.251C557.728 1000.16 553.251 995.683 553.251 990.16L553.25 876.042C553.25 873.467 554.244 870.991 556.024 869.13L585.619 838.19Z" fill="#FF5100" />
                                        <path d="M616.304 811.664H760.731C765.978 811.664 770.231 815.917 770.231 821.164V935.126C770.231 937.633 769.24 940.037 767.475 941.816L740.588 968.915L712.748 996.864C710.965 998.654 708.543 999.66 706.018 999.66H563.251C558.004 999.66 553.751 995.407 553.751 990.16L553.75 876.042C553.75 873.596 554.694 871.244 556.385 869.476L585.98 838.535L585.979 838.534L609.519 814.515C611.305 812.691 613.751 811.664 616.304 811.664Z" stroke="white" />
                                    </g>
                                </g>
                                <path d="M85.4023 823.027H74.7903L92.7903 850.488H103.402L85.4023 823.027Z" fill="white" className='rect' />
                                <path d="M71.0977 823.027H60.4856L78.4856 850.488H89.0977L71.0977 823.027Z" fill="white" className='rect' />
                                <path d="M56.7891 823.027H46.177L64.177 850.488H74.7891L56.7891 823.027Z" fill="white" className='rect' />
                                <path d="M42.4844 823.027H31.8723L49.8723 850.488H60.4844L42.4844 823.027Z" fill="white" className='rect' />
                                <path d="M97.2402 849.488H380.04L530.427 914.837" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line1' />
                                <path d="M1298.75 933.777H1309.36L1291.36 961.238H1280.75L1298.75 933.777Z" fill="white" className='rect' />
                                <path d="M1313.05 933.777H1323.66L1305.66 961.238H1295.05L1313.05 933.777Z" fill="white" className='rect' />
                                <path d="M1327.36 933.777H1337.97L1319.97 961.238H1309.36L1327.36 933.777Z" fill="white" className='rect' />
                                <path d="M1341.67 933.777H1352.28L1334.28 961.238H1323.67L1341.67 933.777Z" fill="white" className='rect' />
                                <path d="M801.605 910.289L1042.96 960.248H1286.44" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                                <path d="M1189.42 758.027H1200.03L1182.03 785.488H1171.42L1189.42 758.027Z" fill="white" className='rect' />
                                <path d="M1203.72 758.027H1214.33L1196.33 785.488H1185.72L1203.72 758.027Z" fill="white" className='rect' />
                                <path d="M1218.03 758.027H1228.64L1210.64 785.488H1200.03L1218.03 758.027Z" fill="white" className='rect' />
                                <path d="M1232.34 758.027H1242.95L1224.95 785.488H1214.34L1232.34 758.027Z" fill="white" className='rect' />
                                <path d="M803.137 862.783L968.578 784.885C969.111 784.634 969.693 784.504 970.282 784.504H1178.22" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                            </g>

                            <g className='svgFourth'>
                                <g className='center-group'>
                                    <g filter="url(#filter9_f_106_1085)">
                                        <path d="M744.114 1170.86L770.691 1143.74C772.571 1141.82 775.146 1140.73 777.833 1140.73L940.432 1140.73C945.955 1140.73 950.432 1145.21 950.432 1150.73V1279.37C950.432 1282.01 949.39 1284.54 947.531 1286.41L917.231 1316.95L885.866 1348.44C883.989 1350.32 881.44 1351.38 878.781 1351.38H718.038C712.516 1351.38 708.038 1346.9 708.038 1341.38L708.037 1212.58C708.037 1210.01 709.031 1207.53 710.811 1205.67L744.114 1170.86Z" fill="#FF5E01" />
                                    </g>
                                    <path d="M777.833 1141.23H940.433C945.679 1141.23 949.933 1145.49 949.933 1150.73V1279.37C949.933 1281.87 948.941 1284.28 947.176 1286.06L916.876 1316.6L885.512 1348.09C883.729 1349.88 881.307 1350.88 878.781 1350.88H718.038C712.792 1350.88 708.538 1346.63 708.538 1341.38L708.537 1212.58C708.537 1210.14 709.481 1207.79 711.172 1206.02L744.471 1171.21L744.472 1171.21L771.048 1144.08C772.835 1142.26 775.28 1141.23 777.833 1141.23Z" fill="#FF5100" stroke="white" />
                                    <g filter="url(#filter10_f_106_1085)">
                                        <path d="M752.863 1178.58L776.406 1154.56C778.287 1152.64 780.861 1151.56 783.548 1151.56L927.975 1151.56C933.498 1151.56 937.975 1156.04 937.975 1161.56V1275.52C937.975 1278.16 936.933 1280.69 935.074 1282.56L908.186 1309.66L880.346 1337.61C878.47 1339.5 875.92 1340.55 873.261 1340.55H730.495C724.973 1340.55 720.495 1336.08 720.495 1330.56L720.494 1216.44C720.494 1213.86 721.488 1211.39 723.268 1209.52L752.863 1178.58Z" fill="#FF833B" />
                                    </g>
                                    <g filter="url(#filter11_d_106_1085)">
                                        <path d="M752.863 1178.58L776.406 1154.56C778.287 1152.64 780.861 1151.56 783.548 1151.56L927.975 1151.56C933.498 1151.56 937.975 1156.04 937.975 1161.56V1275.52C937.975 1278.16 936.933 1280.69 935.074 1282.56L908.186 1309.66L880.346 1337.61C878.47 1339.5 875.92 1340.55 873.261 1340.55H730.495C724.973 1340.55 720.495 1336.08 720.495 1330.56L720.494 1216.44C720.494 1213.86 721.488 1211.39 723.268 1209.52L752.863 1178.58Z" fill="#FF5100" />
                                        <path d="M783.548 1152.06H927.976C933.222 1152.06 937.476 1156.31 937.476 1161.56V1275.52C937.475 1278.03 936.484 1280.43 934.719 1282.21L907.832 1309.31L879.992 1337.26C878.21 1339.05 875.788 1340.05 873.262 1340.05H730.495C725.249 1340.05 720.995 1335.8 720.995 1330.55L720.994 1216.44C720.994 1213.99 721.938 1211.64 723.629 1209.87L753.225 1178.93L753.224 1178.93L776.763 1154.91C778.549 1153.09 780.995 1152.06 783.548 1152.06Z" stroke="white" />
                                    </g>
                                </g>
                                <path d="M183.127 1150H172.515L190.515 1177.46H201.127L183.127 1150Z" fill="white" className='rect' />
                                <path d="M168.822 1150H158.21L176.21 1177.46H186.822L168.822 1150Z" fill="white" className='rect' />
                                <path d="M154.514 1150H143.902L161.902 1177.46H172.514L154.514 1150Z" fill="white" className='rect' />
                                <path d="M140.209 1150H129.597L147.597 1177.46H158.209L140.209 1150Z" fill="white" className='rect' />
                                <path d="M194.24 1176.46H577.921L687.27 1244.28" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line1' />
                                <path d="M254.658 1402.53H244.046L262.046 1429.99H272.658L254.658 1402.53Z" fill="white" className='rect' />
                                <path d="M240.354 1402.53H229.741L247.741 1429.99H258.354L240.354 1402.53Z" fill="white" className='rect' />
                                <path d="M226.045 1402.53H215.433L233.433 1429.99H244.045L226.045 1402.53Z" fill="white" className='rect' />
                                <path d="M211.74 1402.53H201.128L219.128 1429.99H229.74L211.74 1402.53Z" fill="white" className='rect' />
                                <path d="M266.24 1428.99H603.607L692.853 1344.16" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line1' />
                                <path d="M1434.62 1380.8H1445.23L1427.23 1408.26H1416.62L1434.62 1380.8Z" fill="white" className='rect' />
                                <path d="M1448.92 1380.8H1459.54L1441.54 1408.26H1430.92L1448.92 1380.8Z" fill="white" className='rect' />
                                <path d="M1463.23 1380.8H1473.84L1455.84 1408.26H1445.23L1463.23 1380.8Z" fill="white" className='rect' />
                                <path d="M1477.54 1380.8H1488.15L1470.15 1408.26H1459.54L1477.54 1380.8Z" fill="white" className='rect' />
                                <path d="M933.605 1329.59L1116.28 1407.27H1424.08" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                                <path d="M1377.82 1139.92H1388.43L1370.43 1167.38H1359.82L1377.82 1139.92Z" fill="white" className='rect' />
                                <path d="M1392.13 1139.92H1402.74L1384.74 1167.38H1374.13L1392.13 1139.92Z" fill="white" className='rect' />
                                <path d="M1406.44 1139.92H1417.05L1399.05 1167.38H1388.44L1406.44 1139.92Z" fill="white" className='rect' />
                                <path d="M1420.74 1139.92H1431.36L1413.36 1167.38H1402.74L1420.74 1139.92Z" fill="white" className='rect' />
                                <path d="M971.402 1210.07L1037.77 1167.04C1038.42 1166.62 1039.18 1166.39 1039.95 1166.39H1366.62" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                            </g>
                            <defs>
                                <filter id="filter0_f_106_1085" x="531.387" y="110.688" width="258.395" height="226.648" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_106_1085" />
                                </filter>
                                <filter id="filter1_f_106_1085" x="514.944" y="92.6117" width="291.28" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_106_1085" />
                                </filter>
                                <filter id="filter2_d_106_1085" x="526.144" y="104.812" width="274.88" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="3" dy="4" />
                                    <feGaussianBlur stdDeviation="14.35" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_1085" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_1085" result="shape" />
                                </filter>
                                <filter id="filter3_f_106_1085" x="700.822" y="451.688" width="258.395" height="226.648" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_106_1085" />
                                </filter>
                                <filter id="filter4_f_106_1085" x="684.379" y="433.612" width="291.28" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_106_1085" />
                                </filter>
                                <filter id="filter5_d_106_1085" x="695.579" y="445.812" width="274.88" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="3" dy="4" />
                                    <feGaussianBlur stdDeviation="14.35" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_1085" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_1085" result="shape" />
                                </filter>
                                <filter id="filter6_f_106_1085" x="532.793" y="792.34" width="258.395" height="226.648" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_106_1085" />
                                </filter>
                                <filter id="filter7_f_106_1085" x="516.35" y="774.264" width="291.28" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_106_1085" />
                                </filter>
                                <filter id="filter8_d_106_1085" x="527.55" y="786.464" width="274.88" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="3" dy="4" />
                                    <feGaussianBlur stdDeviation="14.35" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_1085" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_1085" result="shape" />
                                </filter>
                                <filter id="filter9_f_106_1085" x="700.037" y="1132.73" width="258.395" height="226.648" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_106_1085" />
                                </filter>
                                <filter id="filter10_f_106_1085" x="683.594" y="1114.66" width="291.28" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_106_1085" />
                                </filter>
                                <filter id="filter11_d_106_1085" x="694.794" y="1126.86" width="274.88" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="3" dy="4" />
                                    <feGaussianBlur stdDeviation="14.35" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_1085" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_1085" result="shape" />
                                </filter>
                            </defs>
                        </svg>



                    </div>
                    <div>
                        <div className='absolute top-[37%] left-[42.5%] w-[7%] overflow-hidden'>
                            <p className='font-medium text-content-24 font-body  text-center textanim svgFirst'>Origination</p>
                        </div>
                        <div className='absolute top-[52%] left-[50.2%] w-[8%] overflow-hidden'>
                            <p className='font-medium text-content-24 font-body  text-center textanim svgSecond'>Rule Engine
                                (Web Portal)</p>
                        </div>
                        <div className='absolute top-[67.8%] left-[41%] w-[10%] overflow-hidden'>
                            <p className='font-medium text-content-24 font-body  text-center textanim svgThird'>Loan
                                Management</p>
                        </div>
                        <div className='absolute top-[84.3%] left-[49.2%] w-[10%] overflow-hidden'>
                            <p className='font-medium text-content-24 font-body  text-center textanim svgFourth'>Collections</p>
                        </div>

                    </div>
                    <div>
                        <div>
                            <div className='absolute top-[27%] left-[19%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgFirst'>Loan/Credit Card Eligibility Check</p>
                            </div>
                            <div className='absolute top-[41%] left-[17%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim  svgFirst'>Existing Loan Exposure Review</p>
                            </div>
                            <div className='absolute top-[30.2%] left-[58%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgFirst'>Credit Bureau Verification</p>
                            </div>
                        </div>
                        <div>
                            <div className='absolute top-[47.2%] left-[19.5%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgSecond'>Loan Management Configuration</p>
                            </div>
                            <div className='absolute top-[44.2%] left-[67.2%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgSecond'>Underwriting & Pricing Rules</p>
                            </div>
                            <div className='absolute top-[56.8%] left-[25%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgSecond'>Product Master Setup</p>
                            </div>
                            <div className='absolute top-[55.5%] left-[67%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgSecond'>Reports & Dashboards</p>
                            </div>
                        </div>
                        <div>
                            <div className='absolute top-[65%] left-[19%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgThird'>Repayments & Statements</p>
                            </div>
                            <div className='absolute top-[62%] left-[61.5%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgThird'>Loan Disbursement</p>
                            </div>
                            <div className='absolute top-[70%] left-[65%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgThird'>Ongoing Loan Tracking</p>
                            </div>
                        </div>
                        <div>
                            <div className='absolute top-[80%] left-[23%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgFourth'>Credit Appraisal & Limit Management</p>
                            </div>
                            <div className='absolute top-[91.5%] left-[27%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgFourth'>Settlement of Collected Funds</p>
                            </div>
                            <div className='absolute top-[79.5%] left-[65%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgFourth'>Delinquency & Dues Collection</p>
                            </div>
                            <div className='absolute top-[90.5%] left-[69%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgFourth'>GSI Collection (from NIBSS)</p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Diagram

