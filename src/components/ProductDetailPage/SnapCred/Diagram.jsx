"use client"
import React, {useRef} from 'react'
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
                const rects = groupElement.querySelectorAll(".rect");
                const centerGroup = groupElement.querySelectorAll(".center-group");

                gsap.set(lines, { opacity: 0, drawSVG: "0%" });
                gsap.set(rects, { opacity: 0 });
                gsap.set(centerGroup, { opacity: 0, scale: 0.8 });
            }
        });
        groups.forEach((groupName) => {
            const groupElement = svgRef.current?.querySelector(`.${groupName}`);
            if (!groupElement) return;

            ScrollTrigger.create({
                trigger: groupElement,
                start: "top 70%",
                // markers: true,
                toggleActions: "play none none none",
                onEnter: () => {
                    const lines = groupElement.querySelectorAll(".path-line");
                    const rects = groupElement.querySelectorAll(".rect");
                    const centerGroup = groupElement.querySelectorAll(".center-group");
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
        const texts = sectionRef.current.querySelectorAll(".textanim");
        
        texts.forEach((text) => {
          gsap.from(text, {
            y: 10,
            opacity: 0,
            duration: 1,
            delay:1,
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
            <div className='px-[4vw] py-[7vw] flex flex-col items-center  gap-[10vw]'>
                <div className='w-[80%]'>
                    <Copy>
                        <h2 className='text-head-100 font-display text-center capitalize'>
                            All-in-One Wallet Infrastructure for Cards, Lending & Rewards
                        </h2>
                    </Copy>
                </div>
                <div className='h-full w-full'>
                    <div className="svg-section flex flex-col items-center justify-center w-[80%] mx-auto" >
                    <svg className='h-full w-full' ref={svgRef} width="1489" height="1430" viewBox="0 0 1489 1430" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <g className='svgFirst'>
                    <g className='center-group'>
<g filter="url(#filter0_f_87_367)">
<path d="M575.464 148.809L602.04 121.688C603.921 119.769 606.495 118.688 609.183 118.688L771.782 118.688C777.305 118.688 781.782 123.165 781.782 128.688V257.322C781.782 259.96 780.739 262.492 778.881 264.365L748.58 294.903L717.215 326.392C715.339 328.276 712.789 329.335 710.13 329.335H549.388C543.865 329.335 539.388 324.858 539.388 319.335L539.387 190.538C539.387 187.963 540.38 185.487 542.16 183.626L575.464 148.809Z" fill="#FF5E01"/>
</g>
<path d="M609.183 119.188H771.782C777.029 119.188 781.282 123.441 781.282 128.688V257.321C781.282 259.828 780.291 262.233 778.525 264.013L748.226 294.551L716.861 326.039C715.079 327.829 712.657 328.835 710.131 328.835H549.388C544.141 328.835 539.888 324.581 539.888 319.335L539.887 190.538C539.887 188.092 540.831 185.74 542.521 183.972L575.82 149.158L575.821 149.159L602.397 122.038C604.184 120.215 606.63 119.187 609.183 119.188Z" fill="#FF5100" stroke="white"/>
<g filter="url(#filter1_f_87_367)">
<path d="M584.213 156.539L607.755 132.515C609.636 130.595 612.21 129.514 614.898 129.514L759.325 129.514C764.848 129.514 769.325 133.991 769.325 139.514V253.475C769.325 256.114 768.282 258.646 766.424 260.519L739.536 287.618L711.696 315.567C709.819 317.451 707.27 318.51 704.611 318.51H561.845C556.322 318.51 551.845 314.033 551.845 308.51L551.844 194.392C551.844 191.816 552.837 189.34 554.617 187.479L584.213 156.539Z" fill="#FF833B"/>
</g> 
 <g filter="url(#filter2_d_87_367)">
<path d="M584.213 156.539L607.755 132.515C609.636 130.595 612.21 129.514 614.898 129.514L759.325 129.514C764.848 129.514 769.325 133.991 769.325 139.514V253.475C769.325 256.114 768.282 258.646 766.424 260.519L739.536 287.618L711.696 315.567C709.819 317.451 707.27 318.51 704.611 318.51H561.845C556.322 318.51 551.845 314.033 551.845 308.51L551.844 194.392C551.844 191.816 552.837 189.34 554.617 187.479L584.213 156.539Z" fill="#FF5100"/>
<path d="M614.897 130.014H759.325C764.572 130.014 768.825 134.267 768.825 139.514V253.476C768.825 255.982 767.834 258.387 766.068 260.166L739.182 287.265L711.342 315.214C709.559 317.003 707.137 318.01 704.611 318.01H561.845C556.598 318.01 552.345 313.756 552.345 308.51L552.344 194.392C552.344 191.945 553.288 189.593 554.979 187.825L584.574 156.885L584.573 156.884L608.112 132.864C609.899 131.041 612.345 130.014 614.897 130.014Z" stroke="white"/>
</g> 
</g>
<path d="M90.4902 0.828125H79.8782L97.8782 28.2891H108.49L90.4902 0.828125Z" fill="white" className='rect'/>
<path d="M76.1855 0.828125H65.5735L83.5735 28.2891H94.1855L76.1855 0.828125Z" fill="white" className='rect'/>
<path d="M61.877 0.828125H51.2649L69.2649 28.2891H79.877L61.877 0.828125Z" fill="white" className='rect'/>
<path d="M47.5723 0.828125H36.9602L54.9602 28.2891H65.5723L47.5723 0.828125Z" fill="white" className='rect'/>
<path d="M102.248 27.2539H452.249C453.309 27.2539 454.326 27.6752 455.077 28.425L568.715 142.029" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line'/>
<path d="M1190 66.0391H1200.61L1182.61 93.5001H1172L1190 66.0391Z" fill="white" className='rect'/>
<path d="M1204.3 66.0391H1214.91L1196.91 93.5001H1186.3L1204.3 66.0391Z" fill="white" className='rect'/>
<path d="M1218.61 66.0391H1229.22L1211.22 93.5001H1200.61L1218.61 66.0391Z" fill="white" className='rect'/>
<path d="M1232.92 66.0391H1243.53L1225.53 93.5001H1214.92L1232.92 66.0391Z" fill="white" className='rect'/>
<path d="M793.127 207.677L904.793 93.7161C905.546 92.9483 906.575 92.5156 907.65 92.5156H1178.8" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line'/>
<path d="M54.4082 301.881H43.7962L61.7961 329.342H72.4082L54.4082 301.881Z" fill="white" className='rect'/>
<path d="M40.1035 301.881H29.4915L47.4915 329.342H58.1035L40.1035 301.881Z" fill="white" className='rect'/>
<path d="M25.7949 301.881H15.1829L33.1829 329.342H43.7949L25.7949 301.881Z" fill="white" className='rect'/>
<path d="M11.4863 301.881H0.874275L18.8743 329.342H29.4863L11.4863 301.881Z" fill="white" className='rect'/>
<path d="M66.9395 328.349H378.526C379.036 328.349 379.541 328.251 380.014 328.062L528.873 268.441" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line'/>
</g>

<g className='svgSecond'>
<g className='center-group'>
<g filter="url(#filter3_f_87_367)">
<path d="M744.899 489.809L771.476 462.688C773.357 460.769 775.931 459.688 778.618 459.688L941.218 459.688C946.74 459.688 951.218 464.165 951.218 469.688V598.322C951.218 600.96 950.175 603.492 948.316 605.365L918.016 635.903L886.651 667.392C884.774 669.276 882.225 670.335 879.566 670.335H718.824C713.301 670.335 708.824 665.858 708.824 660.335L708.822 531.538C708.822 528.963 709.816 526.487 711.596 524.626L744.899 489.809Z" fill="#FF5E01"/>
</g>
<path d="M778.618 460.188H941.218C946.464 460.188 950.718 464.441 950.718 469.688V598.321C950.718 600.828 949.726 603.233 947.961 605.013L917.661 635.551L886.297 667.039C884.514 668.829 882.092 669.835 879.566 669.835H718.823C713.577 669.835 709.323 665.581 709.323 660.335L709.322 531.538C709.322 529.092 710.266 526.74 711.957 524.972L745.256 490.158L745.257 490.159L771.833 463.038C773.62 461.215 776.065 460.187 778.618 460.188Z" fill="#FF5100" stroke="white"/>
<g filter="url(#filter4_f_87_367)">
<path d="M753.648 497.539L777.191 473.515C779.072 471.595 781.646 470.514 784.333 470.514L928.761 470.514C934.283 470.514 938.761 474.991 938.761 480.514V594.475C938.761 597.114 937.718 599.646 935.859 601.519L908.972 628.618L881.132 656.567C879.255 658.451 876.706 659.51 874.047 659.51H731.28C725.758 659.51 721.281 655.033 721.28 649.51L721.279 535.392C721.279 532.816 722.273 530.34 724.053 528.479L753.648 497.539Z" fill="#FF833B"/>
</g>
<g filter="url(#filter5_d_87_367)">
<path d="M753.648 497.539L777.191 473.515C779.072 471.595 781.646 470.514 784.333 470.514L928.761 470.514C934.283 470.514 938.761 474.991 938.761 480.514V594.475C938.761 597.114 937.718 599.646 935.859 601.519L908.972 628.618L881.132 656.567C879.255 658.451 876.706 659.51 874.047 659.51H731.28C725.758 659.51 721.281 655.033 721.28 649.51L721.279 535.392C721.279 532.816 722.273 530.34 724.053 528.479L753.648 497.539Z" fill="#FF5100"/>
<path d="M784.333 471.014H928.761C934.007 471.014 938.261 475.267 938.261 480.514V594.476C938.261 596.982 937.269 599.387 935.504 601.166L908.617 628.265L880.777 656.214C878.995 658.003 876.573 659.01 874.047 659.01H731.28C726.034 659.01 721.78 654.756 721.78 649.51L721.779 535.392C721.779 532.945 722.723 530.593 724.414 528.825L754.01 497.885L754.009 497.884L777.548 473.864C779.335 472.041 781.78 471.014 784.333 471.014Z" stroke="white"/>
</g>
</g>
<path d="M104.797 434.799H94.1848L112.185 462.26H122.797L104.797 434.799Z" fill="white" className='rect'/>
<path d="M90.4922 434.799H79.8801L97.8801 462.26H108.492L90.4922 434.799Z" fill="white" className='rect'/>
<path d="M76.1836 434.799H65.5715L83.5715 462.26H94.1836L76.1836 434.799Z" fill="white" className='rect'/>
<path d="M61.8789 434.799H51.2669L69.2669 462.26H79.8789L61.8789 434.799Z" fill="white" className='rect'/>
<path d="M116.555 461.225H467.324C467.909 461.225 468.486 461.353 469.016 461.6L694.03 566.677" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line'/>
<path d="M1326.05 609.365H1336.66L1318.66 636.826H1308.05L1326.05 609.365Z" fill="white" className='rect'/>
<path d="M1340.36 609.365H1350.97L1332.97 636.826H1322.36L1340.36 609.365Z" fill="white" className='rect'/>
<path d="M1354.67 609.365H1365.28L1347.28 636.826H1336.67L1354.67 609.365Z" fill="white" className='rect'/>
<path d="M1368.97 609.365H1379.58L1361.58 636.826H1350.97L1368.97 609.365Z" fill="white" className='rect'/>
<path d="M1314.29 635.79H1070.29C1069.5 635.79 1068.74 635.559 1068.08 635.124L970.577 570.484" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line'/>
<path d="M1401.04 369.879H1411.66L1393.66 397.34H1383.04L1401.04 369.879Z" fill="white" className='rect'/>
<path d="M1415.35 369.879H1425.96L1407.96 397.34H1397.35L1415.35 369.879Z" fill="white" className='rect'/>
<path d="M1429.66 369.879H1440.27L1422.27 397.34H1411.66L1429.66 369.879Z" fill="white" className='rect'/>
<path d="M1443.96 369.879H1454.58L1436.58 397.34H1425.96L1443.96 369.879Z" fill="white" className='rect'/>
<path d="M978.172 511.517L1089.84 397.556C1090.59 396.788 1091.62 396.355 1092.7 396.355H1389.85" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line'/>
<path d="M219.564 642.873H208.952L226.952 670.334H237.564L219.564 642.873Z" fill="white" className='rect'/>
<path d="M205.26 642.873H194.648L212.648 670.334H223.26L205.26 642.873Z" fill="white" className='rect'/>
<path d="M190.951 642.873H180.339L198.339 670.334H208.951L190.951 642.873Z" fill="white" className='rect'/>
<path d="M176.643 642.873H166.031L184.031 670.334H194.643L176.643 642.873Z" fill="white" className='rect'/>
<path d="M232.098 669.341H463.39C463.73 669.341 464.069 669.298 464.398 669.212L694.031 609.434" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line'/>
</g>

<g className='svgThird'>
<g className='center-group'>
<g filter="url(#filter6_f_87_367)">
<path d="M576.868 830.461L603.445 803.341C605.325 801.421 607.9 800.34 610.587 800.34L773.186 800.34C778.709 800.34 783.186 804.817 783.186 810.34V938.974C783.186 941.613 782.143 944.144 780.285 946.017L749.985 976.556L718.62 1008.04C716.743 1009.93 714.194 1010.99 711.535 1010.99H550.792C545.27 1010.99 540.792 1006.51 540.792 1000.99L540.791 872.19C540.791 869.615 541.785 867.139 543.565 865.278L576.868 830.461Z" fill="#FF5E01"/>
</g>
<path d="M610.587 800.84H773.187C778.433 800.84 782.687 805.093 782.687 810.34V938.974C782.687 941.48 781.695 943.886 779.93 945.665L749.63 976.203L718.266 1007.69C716.483 1009.48 714.061 1010.49 711.535 1010.49H550.792C545.546 1010.49 541.292 1006.23 541.292 1000.99L541.291 872.19C541.291 869.744 542.235 867.392 543.926 865.624L577.225 830.811L577.226 830.812L603.802 803.69C605.589 801.867 608.034 800.84 610.587 800.84Z" fill="#FF5100" stroke="white"/>
<g filter="url(#filter7_f_87_367)">
<path d="M585.617 838.192L609.16 814.167C611.04 812.248 613.615 811.166 616.302 811.166L760.729 811.166C766.252 811.166 770.729 815.643 770.729 821.166V935.128C770.729 937.766 769.686 940.298 767.828 942.171L740.94 969.27L713.1 997.22C711.224 999.103 708.674 1000.16 706.015 1000.16H563.249C557.726 1000.16 553.249 995.685 553.249 990.162L553.248 876.044C553.248 873.469 554.242 870.993 556.022 869.132L585.617 838.192Z" fill="#FF833B"/>
</g>
<g filter="url(#filter8_d_87_367)">
<path d="M585.617 838.192L609.16 814.167C611.04 812.248 613.615 811.166 616.302 811.166L760.729 811.166C766.252 811.166 770.729 815.643 770.729 821.166V935.128C770.729 937.766 769.686 940.298 767.828 942.171L740.94 969.27L713.1 997.22C711.224 999.103 708.674 1000.16 706.015 1000.16H563.249C557.726 1000.16 553.249 995.685 553.249 990.162L553.248 876.044C553.248 873.469 554.242 870.993 556.022 869.132L585.617 838.192Z" fill="#FF5100"/>
<path d="M616.302 811.666H760.729C765.976 811.666 770.229 815.919 770.229 821.166V935.128C770.229 937.634 769.238 940.039 767.473 941.818L740.586 968.917L712.746 996.866C710.964 998.656 708.542 999.662 706.016 999.662H563.249C558.002 999.662 553.749 995.409 553.749 990.162L553.748 876.044C553.748 873.598 554.692 871.245 556.383 869.478L585.979 838.537L585.978 838.536L609.517 814.517C611.303 812.693 613.749 811.666 616.302 811.666Z" stroke="white"/>
</g>
</g>
<path d="M85.4023 823.027H74.7903L92.7903 850.488H103.402L85.4023 823.027Z" fill="white" className='rect'/>
<path d="M71.0977 823.027H60.4856L78.4856 850.488H89.0977L71.0977 823.027Z" fill="white" className='rect'/>
<path d="M56.7891 823.027H46.177L64.177 850.488H74.7891L56.7891 823.027Z" fill="white" className='rect'/>
<path d="M42.4844 823.027H31.8723L49.8723 850.488H60.4844L42.4844 823.027Z" fill="white" className='rect'/>
<path d="M97.1602 849.453H378.89C379.439 849.453 379.982 849.566 380.486 849.785L529.514 914.604" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line'/>
<path d="M1298.75 933.777H1309.36L1291.36 961.238H1280.75L1298.75 933.777Z" fill="white" className='rect'/>
<path d="M1313.05 933.777H1323.66L1305.66 961.238H1295.05L1313.05 933.777Z" fill="white" className='rect'/>
<path d="M1327.36 933.777H1337.97L1319.97 961.238H1309.36L1327.36 933.777Z" fill="white" className='rect'/>
<path d="M1341.66 933.777H1352.28L1334.28 961.238H1323.66L1341.66 933.777Z" fill="white" className='rect'/>
<path d="M1286.99 960.198H1042.19C1041.92 960.198 1041.64 960.17 1041.37 960.113L802.101 910.09" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line'/>
<path d="M1189.41 758.027H1200.03L1182.03 785.488H1171.41L1189.41 758.027Z" fill="white" className='rect'/>
<path d="M1203.72 758.027H1214.33L1196.33 785.488H1185.72L1203.72 758.027Z" fill="white" className='rect'/>
<path d="M1218.03 758.027H1228.64L1210.64 785.488H1200.03L1218.03 758.027Z" fill="white" className='rect'/>
<path d="M1232.34 758.027H1242.95L1224.95 785.488H1214.34L1232.34 758.027Z" fill="white" className='rect'/>
<path d="M803.135 862.783L968.576 784.885C969.109 784.634 969.691 784.504 970.28 784.504H1178.22" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line'/>
</g>

<g className='svgFourth'>
<g className='center-group'>
<g filter="url(#filter9_f_87_367)">
<path d="M744.114 1170.85L770.691 1143.73C772.571 1141.81 775.146 1140.73 777.833 1140.73L940.432 1140.73C945.955 1140.73 950.432 1145.21 950.432 1150.73V1279.37C950.432 1282.01 949.39 1284.54 947.531 1286.41L917.231 1316.95L885.866 1348.44C883.989 1350.32 881.44 1351.38 878.781 1351.38H718.038C712.516 1351.38 708.038 1346.9 708.038 1341.38L708.037 1212.58C708.037 1210.01 709.031 1207.53 710.811 1205.67L744.114 1170.85Z" fill="#FF5E01"/>
</g>
<path d="M777.833 1141.23H940.433C945.679 1141.23 949.933 1145.49 949.933 1150.73V1279.37C949.933 1281.87 948.941 1284.28 947.176 1286.06L916.876 1316.6L885.512 1348.08C883.729 1349.87 881.307 1350.88 878.781 1350.88H718.038C712.792 1350.88 708.538 1346.63 708.538 1341.38L708.537 1212.58C708.537 1210.14 709.481 1207.78 711.172 1206.02L744.471 1171.2L744.472 1171.2L771.048 1144.08C772.835 1142.26 775.28 1141.23 777.833 1141.23Z" fill="#FF5100" stroke="white"/>
<g filter="url(#filter10_f_87_367)">
<path d="M752.863 1178.58L776.406 1154.56C778.287 1152.64 780.861 1151.56 783.548 1151.56L927.975 1151.56C933.498 1151.56 937.975 1156.04 937.975 1161.56V1275.52C937.975 1278.16 936.933 1280.69 935.074 1282.56L908.186 1309.66L880.346 1337.61C878.47 1339.5 875.92 1340.55 873.261 1340.55H730.495C724.973 1340.55 720.495 1336.08 720.495 1330.56L720.494 1216.44C720.494 1213.86 721.488 1211.39 723.268 1209.52L752.863 1178.58Z" fill="#FF833B"/>
</g>
<g filter="url(#filter11_d_87_367)">
<path d="M752.863 1178.58L776.406 1154.56C778.287 1152.64 780.861 1151.56 783.548 1151.56L927.975 1151.56C933.498 1151.56 937.975 1156.04 937.975 1161.56V1275.52C937.975 1278.16 936.933 1280.69 935.074 1282.56L908.186 1309.66L880.346 1337.61C878.47 1339.5 875.92 1340.55 873.261 1340.55H730.495C724.973 1340.55 720.495 1336.08 720.495 1330.56L720.494 1216.44C720.494 1213.86 721.488 1211.39 723.268 1209.52L752.863 1178.58Z" fill="#FF5100"/>
<path d="M783.548 1152.06H927.976C933.222 1152.06 937.476 1156.31 937.476 1161.56V1275.52C937.475 1278.03 936.484 1280.43 934.719 1282.21L907.832 1309.31L879.992 1337.26C878.21 1339.05 875.788 1340.05 873.262 1340.05H730.495C725.249 1340.05 720.995 1335.8 720.995 1330.55L720.994 1216.44C720.994 1213.99 721.938 1211.64 723.629 1209.87L753.225 1178.93L753.224 1178.93L776.763 1154.91C778.549 1153.09 780.995 1152.06 783.548 1152.06Z" stroke="white"/>
</g>
</g>
<path d="M183.129 1150H172.517L190.517 1177.46H201.129L183.129 1150Z" fill="white" className='rect'/>
<path d="M168.824 1150H158.212L176.212 1177.46H186.824L168.824 1150Z" fill="white" className='rect'/>
<path d="M154.516 1150H143.904L161.904 1177.46H172.516L154.516 1150Z" fill="white" className='rect'/>
<path d="M140.211 1150H129.599L147.599 1177.46H158.211L140.211 1150Z" fill="white" className='rect'/>
<path d="M194.887 1176.43H577.485C578.23 1176.43 578.961 1176.64 579.594 1177.03L687.019 1243.72" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line'/>
<path d="M254.658 1402.53H244.046L262.046 1429.99H272.658L254.658 1402.53Z" fill="white" className='rect'/>
<path d="M240.354 1402.53H229.741L247.741 1429.99H258.354L240.354 1402.53Z" fill="white" className='rect'/>
<path d="M226.045 1402.53H215.433L233.433 1429.99H244.045L226.045 1402.53Z" fill="white" className='rect'/>
<path d="M211.74 1402.53H201.128L219.128 1429.99H229.74L211.74 1402.53Z" fill="white" className='rect'/>
<path d="M266.416 1428.95H603.825C604.875 1428.95 605.883 1428.54 606.632 1427.8L692.095 1343.65" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line'/>
<path d="M1434.62 1380.8H1445.23L1427.23 1408.26H1416.62L1434.62 1380.8Z" fill="white" className='rect'/>
<path d="M1448.93 1380.8H1459.54L1441.54 1408.26H1430.93L1448.93 1380.8Z" fill="white" className='rect'/>
<path d="M1463.23 1380.8H1473.85L1455.85 1408.26H1445.23L1463.23 1380.8Z" fill="white" className='rect'/>
<path d="M1477.54 1380.8H1488.15L1470.15 1408.26H1459.54L1477.54 1380.8Z" fill="white" className='rect'/>
<path d="M1422.86 1407.22H1117.52C1116.98 1407.22 1116.45 1407.11 1115.96 1406.9L933.349 1329.6" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line'/>
<path d="M1377.82 1139.92H1388.43L1370.43 1167.38H1359.82L1377.82 1139.92Z" fill="white" className='rect'/>
<path d="M1392.13 1139.92H1402.74L1384.74 1167.38H1374.13L1392.13 1139.92Z" fill="white" className='rect'/>
<path d="M1406.44 1139.92H1417.05L1399.05 1167.38H1388.44L1406.44 1139.92Z" fill="white" className='rect'/>
<path d="M1420.74 1139.92H1431.36L1413.36 1167.38H1402.74L1420.74 1139.92Z" fill="white" className='rect'/>
<path d="M971.402 1210.07L1037.77 1167.04C1038.42 1166.62 1039.18 1166.39 1039.95 1166.39H1366.62" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line'/>
</g>
<defs>
<filter id="filter0_f_87_367" x="531.387" y="110.688" width="258.395" height="226.646" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_87_367"/>
</filter>
<filter id="filter1_f_87_367" x="514.944" y="92.6137" width="291.28" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_87_367"/>
</filter>
<filter id="filter2_d_87_367" x="526.144" y="104.814" width="274.88" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="4"/>
<feGaussianBlur stdDeviation="14.35"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_367"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_367" result="shape"/>
</filter>
<filter id="filter3_f_87_367" x="700.822" y="451.688" width="258.395" height="226.646" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_87_367"/>
</filter>
<filter id="filter4_f_87_367" x="684.379" y="433.614" width="291.28" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_87_367"/>
</filter>
<filter id="filter5_d_87_367" x="695.579" y="445.814" width="274.88" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="4"/>
<feGaussianBlur stdDeviation="14.35"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_367"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_367" result="shape"/>
</filter>
<filter id="filter6_f_87_367" x="532.791" y="792.34" width="258.395" height="226.646" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_87_367"/>
</filter>
<filter id="filter7_f_87_367" x="516.348" y="774.266" width="291.28" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_87_367"/>
</filter>
<filter id="filter8_d_87_367" x="527.548" y="786.466" width="274.88" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="4"/>
<feGaussianBlur stdDeviation="14.35"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_367"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_367" result="shape"/>
</filter>
<filter id="filter9_f_87_367" x="700.037" y="1132.73" width="258.395" height="226.646" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_87_367"/>
</filter>
<filter id="filter10_f_87_367" x="683.594" y="1114.66" width="291.28" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_87_367"/>
</filter>
<filter id="filter11_d_87_367" x="694.794" y="1126.86" width="274.88" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="4"/>
<feGaussianBlur stdDeviation="14.35"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_367"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_367" result="shape"/>
</filter>
</defs>
</svg>


                    </div>
                    {/* <div>
                        <div className='absolute top-[22.5%] left-[38%] w-[7%] overflow-hidden'>
                            <p className='font-medium text-content-24 font-body  text-center textanim '>Digital Accounts</p>
                        </div>
                        <div className='absolute top-[36%] left-[47%] w-[8%] overflow-hidden'>
                            <p className='font-medium text-content-24 font-body  text-center textanim '>Redemption Account </p>
                        </div>
                        <div className='absolute top-[49.8%] left-[55%] w-[10%] overflow-hidden'>
                            <p className='font-medium text-content-24 font-body  text-center textanim '>Pre-paid Cards Accounts</p>
                        </div>
                        <div className='absolute top-[63.5%] left-[45.5%] w-[10%] overflow-hidden'>
                            <p className='font-medium text-content-24 font-body  text-center textanim '>Credit Card Accounts</p>
                        </div>
                        <div className='absolute top-[76.7%] left-[38%] w-[7%] overflow-hidden'>
                            <p className='font-medium text-content-24 font-body  text-center textanim '>Reward Account </p>
                        </div>
                        <div className='absolute top-[90.5%] left-[47.2%] w-[7%] overflow-hidden'>
                            <p className='font-medium text-content-24 font-body text-center textanim '>Loan Accounts </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='absolute top-[16.4%] left-[23%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim '>Fund Transfers</p>
                            </div>
                            <div className='absolute top-[25.3%] left-[18.2%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim '>Digital Payments</p>
                            </div>
                            <div className='absolute top-[18.2%] left-[56%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim '>Collect payments / Settlements</p>
                            </div>
                        </div>
                        <div>
                            <div className='absolute top-[35.5%] left-[22.5%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim '>Usage of Redeemed Amount</p>
                            </div>
                            <div className='absolute top-[31%] left-[65%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim '>Redeem Reward Points</p>
                            </div>
                        </div>
                        <div>
                            <div className='absolute top-[45.2%] left-[33%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim '>Load Money</p>
                            </div>
                            <div className='absolute top-[51.2%] left-[41%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim '>Spends</p>
                            </div>
                            <div className='absolute top-[42.5%] left-[74%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim '>Card Controls</p>
                            </div>
                            <div className='absolute top-[50%] left-[74%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim '>Card Statements</p>
                            </div>
                        </div>
                        <div>
                            <div className='absolute top-[57%] left-[31.5%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim '>Card Statement</p>
                            </div>
                            <div className='absolute top-[60.4%] left-[19%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim '>Limit Management</p>
                            </div>
                            <div className='absolute top-[66.5%] left-[17.5%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim '>Collection of Delinquent Amounts</p>
                            </div>
                            <div className='absolute top-[58.7%] left-[72%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim '>Card Controls</p>
                            </div>
                            <div className='absolute top-[63.3%] left-[65.5%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim '>Spends</p>
                            </div>
                            <div className='absolute top-[68.2%] left-[64%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim '>Repayments</p>
                            </div>
                        </div>
                        <div>
                            <div className='absolute top-[89.3%] left-[21%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim '>Loan Repayments</p>
                            </div>
                            <div className='absolute top-[95%] left-[25%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim '>Loan Disbursement</p>
                            </div>
                            <div className='absolute top-[85%] left-[65%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim '>Collection of Delinquent Amount</p>
                            </div>
                            <div className='absolute top-[94.5%] left-[62%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim '>Loan Statements</p>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>
        </section>
    )
}

export default Diagram

