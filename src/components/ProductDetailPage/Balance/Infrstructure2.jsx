"use client"
import React, {useRef} from 'react'
import Copy from '../../Animations/Copy'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);


const Infrastructure2 = () => {
    const svgRef = useRef(null);
    const sectionRef = useRef(null);

    useGSAP(() => {
        const groups = ['svgFirst', 'svgSecond', 'svgThird', 'svgFourth', 'svgFifth', 'svgSixth'];
    
        // Initial setup for SVG elements
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
    
        // Initial setup for text elements
        const texts = sectionRef.current?.querySelectorAll(".textanim");
        if (texts) {
            gsap.set(texts, { y: 10, opacity: 0 });
        }
    
        // Individual triggers for each SVG group with corresponding text
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
        <section data-theme="orange" className='w-screen  h-full bg-gradient relative max-md:hidden max-sm:hidden' ref={sectionRef}>
            <div className='px-[4vw] py-[7vw] flex flex-col items-center  gap-[10vw]'>
                <div className='w-[80%]'>
                    <Copy>
                        <h2 className='text-head-100 font-display text-center '>
                        All-in-One Wallet Infrastructure for Cards, Lending & Rewards
                        </h2>
                    </Copy>
                </div>
                <div className='h-full w-full'>
                    <div className="svg-section flex flex-col items-center justify-center w-[80%] mx-auto" >
                        <svg className='h-full w-full' ref={svgRef} width="1382" height="2647" viewBox="0 0 1382 2647" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g className='svgFirst'>
                                <g className='center-group'>
                                    <g filter="url(#filter0_f_70_5385)">
                                        <path d="M451.155 147.491L477.732 120.37C479.612 118.451 482.187 117.369 484.874 117.369L647.473 117.369C652.996 117.369 657.473 121.846 657.473 127.369V256.003C657.473 258.642 656.431 261.174 654.572 263.047L624.272 293.585L592.907 325.074C591.03 326.957 588.481 328.016 585.822 328.016H425.079C419.557 328.016 415.08 323.539 415.079 318.016L415.078 189.22C415.078 186.644 416.072 184.168 417.852 182.307L451.155 147.491Z" fill="#FF5E01" />
                                    </g>
                                    <path d="M484.874 117.869H647.474C652.72 117.869 656.974 122.122 656.974 127.369V256.003C656.974 258.51 655.982 260.915 654.217 262.694L623.917 293.232L592.553 324.721C590.77 326.51 588.348 327.516 585.822 327.517H425.079C419.833 327.516 415.579 323.263 415.579 318.017L415.578 189.22C415.578 186.773 416.522 184.421 418.213 182.653L451.512 147.84L451.513 147.841L478.089 120.72C479.876 118.896 482.321 117.869 484.874 117.869Z" fill="#FF5100" stroke="white" />
                                    <g filter="url(#filter1_f_70_5385)">
                                        <path d="M459.904 155.221L483.447 131.196C485.328 129.277 487.902 128.195 490.589 128.195L635.016 128.195C640.539 128.195 645.016 132.672 645.016 138.195V252.157C645.016 254.795 643.974 257.327 642.115 259.2L615.227 286.299L587.387 314.249C585.511 316.133 582.961 317.192 580.302 317.192H437.536C432.014 317.192 427.536 312.715 427.536 307.192L427.535 193.073C427.535 190.498 428.529 188.022 430.309 186.161L459.904 155.221Z" fill="#FF833B" />
                                    </g>
                                    <g filter="url(#filter2_d_70_5385)">
                                        <path d="M459.904 155.221L483.447 131.196C485.328 129.277 487.902 128.195 490.589 128.195L635.016 128.195C640.539 128.195 645.016 132.672 645.016 138.195V252.157C645.016 254.795 643.974 257.327 642.115 259.2L615.227 286.299L587.387 314.249C585.511 316.133 582.961 317.192 580.302 317.192H437.536C432.014 317.192 427.536 312.715 427.536 307.192L427.535 193.073C427.535 190.498 428.529 188.022 430.309 186.161L459.904 155.221Z" fill="#FF5100" />
                                        <path d="M490.589 128.695H635.017C640.263 128.695 644.517 132.949 644.517 138.195V252.157C644.517 254.664 643.525 257.068 641.76 258.848L614.873 285.946L587.033 313.896C585.251 315.685 582.829 316.691 580.303 316.691H437.536C432.29 316.691 428.036 312.438 428.036 307.191L428.035 193.073C428.035 190.627 428.979 188.275 430.67 186.507L460.266 155.566L460.265 155.565L483.804 131.546C485.59 129.723 488.036 128.695 490.589 128.695Z" stroke="white" />
                                    </g>
                                </g>
                                <path d="M156.078 0.240234H145.466L163.466 27.7012H174.078L156.078 0.240234Z" fill="white" className='rect' />
                                <path d="M141.771 0.240234H131.159L149.159 27.7012H159.771L141.771 0.240234Z" fill="white" className='rect' />
                                <path d="M127.465 0.240234H116.853L134.853 27.7012H145.465L127.465 0.240234Z" fill="white" className='rect' />
                                <path d="M113.158 0.240234H102.546L120.546 27.7012H131.158L113.158 0.240234Z" fill="white" className='rect' />
                                <path d="M444.047 141.74L332.724 27.9431C331.971 27.1738 330.94 26.7402 329.864 26.7402H169.047" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                                <path d="M1121.55 64.2402H1132.16L1114.16 91.7012H1103.55L1121.55 64.2402Z" fill="white" className='rect' />
                                <path d="M1135.85 64.2402H1146.47L1128.47 91.7012H1117.85L1135.85 64.2402Z" fill="white" className='rect' />
                                <path d="M1150.16 64.2402H1160.77L1142.77 91.7012H1132.16L1150.16 64.2402Z" fill="white" className='rect' />
                                <path d="M1164.47 64.2402H1175.08L1157.08 91.7012H1146.47L1164.47 64.2402Z" fill="white" className='rect' />
                                <path d="M668.047 205.719L780.873 91.9027C781.624 91.145 782.647 90.7188 783.714 90.7188H1110.05" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                                <path d="M70.0781 300.24H59.4661L77.4661 327.701H88.0781L70.0781 300.24Z" fill="white" className='rect' />
                                <path d="M55.7715 300.24H45.1594L63.1594 327.701H73.7715L55.7715 300.24Z" fill="white" className='rect' />
                                <path d="M41.4648 300.24H30.8528L48.8528 327.701H59.4648L41.4648 300.24Z" fill="white" className='rect' />
                                <path d="M27.1582 300.24H16.5462L34.5461 327.701H45.1582L27.1582 300.24Z" fill="white" className='rect' />
                                <path d="M405.047 268.203L255.748 326.43C255.285 326.61 254.792 326.703 254.294 326.703H83.5469" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                            </g>
                            <g className='svgSecond'>
                                <g className='center-group'>
                                    <g filter="url(#filter3_f_70_5385)">
                                        <path d="M618.155 601.307L644.732 574.186C646.612 572.267 649.187 571.186 651.874 571.186L814.473 571.186C819.996 571.186 824.473 575.663 824.473 581.186V709.82C824.473 712.458 823.431 714.99 821.572 716.863L791.272 747.401L759.907 778.89C758.03 780.774 755.481 781.833 752.822 781.833H592.079C586.557 781.833 582.08 777.356 582.079 771.833L582.078 643.036C582.078 640.461 583.072 637.985 584.852 636.124L618.155 601.307Z" fill="#FF5E01" />
                                    </g>
                                    <path d="M651.874 571.686H814.474C819.72 571.686 823.974 575.939 823.974 581.186V709.819C823.974 712.326 822.982 714.731 821.217 716.511L790.917 747.049L759.553 778.537C757.77 780.327 755.348 781.333 752.822 781.333H592.079C586.833 781.333 582.579 777.079 582.579 771.833L582.578 643.036C582.578 640.59 583.522 638.238 585.213 636.47L618.512 601.656L618.513 601.657L645.089 574.536C646.876 572.713 649.321 571.686 651.874 571.686Z" fill="#FF5100" stroke="white" />
                                    <g filter="url(#filter4_f_70_5385)">
                                        <path d="M626.904 609.037L650.447 585.013C652.328 583.093 654.902 582.012 657.589 582.012L802.016 582.012C807.539 582.012 812.016 586.489 812.016 592.012V705.973C812.016 708.612 810.974 711.144 809.115 713.017L782.227 740.116L754.387 768.065C752.511 769.949 749.961 771.008 747.302 771.008H604.536C599.014 771.008 594.536 766.531 594.536 761.008L594.535 646.89C594.535 644.314 595.529 641.838 597.309 639.977L626.904 609.037Z" fill="#FF833B" />
                                    </g>
                                    <g filter="url(#filter5_d_70_5385)">
                                        <path d="M626.904 609.037L650.447 585.013C652.328 583.093 654.902 582.012 657.589 582.012L802.016 582.012C807.539 582.012 812.016 586.489 812.016 592.012V705.973C812.016 708.612 810.974 711.144 809.115 713.017L782.227 740.116L754.387 768.065C752.511 769.949 749.961 771.008 747.302 771.008H604.536C599.014 771.008 594.536 766.531 594.536 761.008L594.535 646.89C594.535 644.314 595.529 641.838 597.309 639.977L626.904 609.037Z" fill="#FF5100" />
                                        <path d="M657.589 582.512H802.017C807.263 582.512 811.517 586.765 811.517 592.012V705.974C811.517 708.48 810.525 710.885 808.76 712.664L781.873 739.763L754.033 767.712C752.251 769.502 749.829 770.508 747.303 770.508H604.536C599.29 770.508 595.036 766.254 595.036 761.008L595.035 646.89C595.035 644.443 595.979 642.091 597.67 640.323L627.266 609.383L627.265 609.382L650.804 585.362C652.59 583.539 655.036 582.512 657.589 582.512Z" stroke="white" />
                                    </g>
                                </g>
                                <path d="M156.078 639.326H145.466L163.466 666.787H174.078L156.078 639.326Z" fill="white" className='rect' />
                                <path d="M141.771 639.326H131.159L149.159 666.787H159.771L141.771 639.326Z" fill="white" className='rect' />
                                <path d="M127.465 639.326H116.853L134.853 666.787H145.465L127.465 639.326Z" fill="white" className='rect' />
                                <path d="M113.158 639.326H102.546L120.546 666.787H131.158L113.158 639.326Z" fill="white" className='rect' />
                                <path d="M570.547 715.791L455.807 666.12C455.306 665.903 454.765 665.791 454.218 665.791H168.953" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                                <path d="M1200.8 489.326H1211.41L1193.41 516.787H1182.8L1200.8 489.326Z" fill="white" className='path-line' />
                                <path d="M1215.1 489.326H1225.72L1207.72 516.787H1197.1L1215.1 489.326Z" fill="white" className='path-line' />
                                <path d="M1229.41 489.326H1240.02L1222.02 516.787H1211.41L1229.41 489.326Z" fill="white" className='path-line' />
                                <path d="M1243.72 489.326H1254.33L1236.33 516.787H1225.72L1243.72 489.326Z" fill="white" className='path-line' />
                                <path d="M837.547 630.797L950.373 516.981C951.124 516.223 952.147 515.797 953.214 515.797H1189.55" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                            </g>
                            <g className='svgThird'>
                                <g className='center-group'>
                                    <g filter="url(#filter6_f_70_5385)">
                                        <path d="M793.655 1055.12L820.232 1028C822.112 1026.08 824.687 1025 827.374 1025L989.973 1025C995.496 1025 999.973 1029.48 999.973 1035V1163.64C999.973 1166.27 998.931 1168.81 997.072 1170.68L966.772 1201.22L935.407 1232.71C933.53 1234.59 930.981 1235.65 928.322 1235.65H767.579C762.057 1235.65 757.58 1231.17 757.579 1225.65L757.578 1096.85C757.578 1094.28 758.572 1091.8 760.352 1089.94L793.655 1055.12Z" fill="#FF5E01" />
                                    </g>
                                    <path d="M827.374 1025.5H989.974C995.22 1025.5 999.474 1029.76 999.474 1035V1163.64C999.474 1166.14 998.482 1168.55 996.717 1170.33L966.417 1200.87L935.053 1232.35C933.27 1234.14 930.848 1235.15 928.322 1235.15H767.579C762.333 1235.15 758.079 1230.9 758.079 1225.65L758.078 1096.85C758.078 1094.41 759.022 1092.05 760.713 1090.29L794.012 1055.47L794.013 1055.47L820.589 1028.35C822.376 1026.53 824.821 1025.5 827.374 1025.5Z" fill="#FF5100" stroke="white" />
                                    <g filter="url(#filter7_f_70_5385)">
                                        <path d="M802.404 1062.85L825.947 1038.83C827.828 1036.91 830.402 1035.83 833.089 1035.83L977.516 1035.83C983.039 1035.83 987.516 1040.31 987.516 1045.83V1159.79C987.516 1162.43 986.474 1164.96 984.615 1166.83L957.727 1193.93L929.887 1221.88C928.011 1223.77 925.461 1224.82 922.802 1224.82H780.036C774.514 1224.82 770.036 1220.35 770.036 1214.82L770.035 1100.71C770.035 1098.13 771.029 1095.65 772.809 1093.79L802.404 1062.85Z" fill="#FF833B" />
                                    </g>
                                    <g filter="url(#filter8_d_70_5385)">
                                        <path d="M802.404 1062.85L825.947 1038.83C827.828 1036.91 830.402 1035.83 833.089 1035.83L977.516 1035.83C983.039 1035.83 987.516 1040.31 987.516 1045.83V1159.79C987.516 1162.43 986.474 1164.96 984.615 1166.83L957.727 1193.93L929.887 1221.88C928.011 1223.77 925.461 1224.82 922.802 1224.82H780.036C774.514 1224.82 770.036 1220.35 770.036 1214.82L770.035 1100.71C770.035 1098.13 771.029 1095.65 772.809 1093.79L802.404 1062.85Z" fill="#FF5100" />
                                        <path d="M833.089 1036.33H977.517C982.763 1036.33 987.017 1040.58 987.017 1045.83V1159.79C987.017 1162.3 986.025 1164.7 984.26 1166.48L957.373 1193.58L929.533 1221.53C927.751 1223.32 925.329 1224.32 922.803 1224.32H780.036C774.79 1224.32 770.536 1220.07 770.536 1214.82L770.535 1100.71C770.535 1098.26 771.479 1095.91 773.17 1094.14L802.766 1063.2L802.765 1063.2L826.304 1039.18C828.09 1037.36 830.536 1036.33 833.089 1036.33Z" stroke="white" />
                                    </g>
                                </g>
                                <path d="M1327.51 1122.37H1338.12L1320.12 1149.83H1309.51L1327.51 1122.37Z" fill="white" className='rect' />
                                <path d="M1341.82 1122.37H1352.43L1334.43 1149.83H1323.82L1341.82 1122.37Z" fill="white" className='rect' />
                                <path d="M1356.12 1122.37H1366.74L1348.74 1149.83H1338.12L1356.12 1122.37Z" fill="white" className='rect' />
                                <path d="M1370.43 1122.37H1381.04L1363.04 1149.83H1352.43L1370.43 1122.37Z" fill="white" className='rect' />
                                <path d="M1016.04 1105.1L1128.35 1148.56C1128.81 1148.74 1129.3 1148.83 1129.79 1148.83H1314.64" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                                <path d="M1296.29 871.143H1306.91L1288.91 898.604H1278.29L1296.29 871.143Z" fill="white" className='rect' />
                                <path d="M1310.6 871.143H1321.21L1303.21 898.604H1292.6L1310.6 871.143Z" fill="white" className='rect' />
                                <path d="M1324.91 871.143H1335.52L1317.52 898.604H1306.91L1324.91 871.143Z" fill="white" className='rect' />
                                <path d="M1339.21 871.143H1349.83L1331.83 898.604H1321.21L1339.21 871.143Z" fill="white" className='rect' />
                                <path d="M1009.54 1006.31L1115.87 898.789C1116.62 898.029 1117.65 897.602 1118.71 897.602H1285.04" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                                <path d="M494.578 1162.19H483.966L501.966 1189.65H512.578L494.578 1162.19Z" fill="white" className='rect' />
                                <path d="M480.271 1162.19H469.659L487.659 1189.65H498.271L480.271 1162.19Z" fill="white" className='rect' />
                                <path d="M465.965 1162.19H455.353L473.353 1189.65H483.965L465.965 1162.19Z" fill="white" className='rect' />
                                <path d="M451.658 1162.19H441.046L459.046 1189.65H469.658L451.658 1162.19Z" fill="white" className='rect' />
                                <path d="M744.045 1135.17L605.739 1188.41C605.28 1188.58 604.793 1188.67 604.302 1188.67H508.045" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                                <path d="M347.578 962.189H336.966L354.966 989.65H365.578L347.578 962.189Z" fill="white" className='rect' />
                                <path d="M333.271 962.189H322.659L340.659 989.65H351.271L333.271 962.189Z" fill="white" className='rect' />
                                <path d="M318.965 962.189H308.353L326.353 989.65H336.965L318.965 962.189Z" fill="white" className='rect' />
                                <path d="M304.658 962.189H294.046L312.046 989.65H322.658L304.658 962.189Z" fill="white" className='rect' />
                                <path d="M745.45 1086.59L501.26 988.944C500.788 988.755 500.284 988.658 499.775 988.658H361.045" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                            </g>
                            <g className='svgFourth'>
                                <g className='center-group'>
                                    <g filter="url(#filter9_f_70_5385)">
                                        <path d="M619.561 1508.94L646.138 1481.82C648.019 1479.9 650.593 1478.82 653.28 1478.82L815.88 1478.82C821.403 1478.82 825.88 1483.3 825.88 1488.82V1617.45C825.88 1620.09 824.837 1622.62 822.978 1624.5L792.678 1655.03L761.313 1686.52C759.437 1688.41 756.887 1689.47 754.228 1689.47H593.486C587.963 1689.47 583.486 1684.99 583.486 1679.47L583.484 1550.67C583.484 1548.09 584.478 1545.62 586.258 1543.76L619.561 1508.94Z" fill="#FF5E01" />
                                    </g>
                                    <path d="M653.28 1479.32H815.88C821.127 1479.32 825.38 1483.57 825.38 1488.82V1617.45C825.38 1619.96 824.389 1622.36 822.623 1624.14L792.323 1654.68L760.959 1686.17C759.176 1687.96 756.754 1688.97 754.229 1688.97H593.485C588.239 1688.97 583.985 1684.71 583.985 1679.47L583.984 1550.67C583.984 1548.22 584.928 1545.87 586.619 1544.1L619.918 1509.29L619.919 1509.29L646.495 1482.17C648.282 1480.35 650.727 1479.32 653.28 1479.32Z" fill="#FF5100" stroke="white" />
                                    <g filter="url(#filter10_f_70_5385)">
                                        <path d="M628.31 1516.67L651.853 1492.65C653.734 1490.73 656.308 1489.64 658.995 1489.64L803.423 1489.64C808.946 1489.64 813.423 1494.12 813.423 1499.64V1613.61C813.423 1616.24 812.38 1618.78 810.521 1620.65L783.634 1647.75L755.794 1675.7C753.917 1677.58 751.368 1678.64 748.709 1678.64H605.943C600.42 1678.64 595.943 1674.16 595.943 1668.64L595.941 1554.52C595.941 1551.95 596.935 1549.47 598.715 1547.61L628.31 1516.67Z" fill="#FF833B" />
                                    </g>
                                    <g filter="url(#filter11_d_70_5385)">
                                        <path d="M628.31 1516.67L651.853 1492.65C653.734 1490.73 656.308 1489.64 658.995 1489.64L803.423 1489.64C808.946 1489.64 813.423 1494.12 813.423 1499.64V1613.61C813.423 1616.24 812.38 1618.78 810.521 1620.65L783.634 1647.75L755.794 1675.7C753.917 1677.58 751.368 1678.64 748.709 1678.64H605.943C600.42 1678.64 595.943 1674.16 595.943 1668.64L595.941 1554.52C595.941 1551.95 596.935 1549.47 598.715 1547.61L628.31 1516.67Z" fill="#FF5100" />
                                        <path d="M658.995 1490.14H803.423C808.669 1490.14 812.923 1494.4 812.923 1499.64V1613.61C812.923 1616.11 811.931 1618.52 810.166 1620.3L783.279 1647.4L755.439 1675.34C753.657 1677.13 751.235 1678.14 748.709 1678.14H605.942C600.696 1678.14 596.442 1673.89 596.442 1668.64L596.441 1554.52C596.441 1552.08 597.385 1549.72 599.076 1547.96L628.672 1517.02L628.671 1517.01L652.21 1493C653.997 1491.17 656.442 1490.14 658.995 1490.14Z" stroke="white" />
                                    </g>
                                </g>
                                <path d="M1099.42 1726.19H1110.03L1092.03 1753.65H1081.42L1099.42 1726.19Z" fill="white" className='rect' />
                                <path d="M1113.73 1726.19H1124.34L1106.34 1753.65H1095.73L1113.73 1726.19Z" fill="white" className='rect' />
                                <path d="M1128.04 1726.19H1138.65L1120.65 1753.65H1110.04L1128.04 1726.19Z" fill="white" className='rect' />
                                <path d="M1142.34 1726.19H1152.95L1134.95 1753.65H1124.34L1142.34 1726.19Z" fill="white" className='rect' />
                                <path d="M786.973 1694.82L933.749 1752.37C934.214 1752.56 934.71 1752.65 935.209 1752.65H1086.55" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                                <path d="M1253.7 1413.96H1264.32L1246.32 1441.42H1235.7L1253.7 1413.96Z" fill="white" className='rect' />
                                <path d="M1268.01 1413.96H1278.62L1260.62 1441.42H1250.01L1268.01 1413.96Z" fill="white" className='rect' />
                                <path d="M1282.32 1413.96H1292.93L1274.93 1441.42H1264.32L1282.32 1413.96Z" fill="white" className='rect' />
                                <path d="M1296.62 1413.96H1307.24L1289.24 1441.42H1278.62L1296.62 1413.96Z" fill="white" className='rect' />
                                <path d="M850.953 1548.15L1073.63 1440.84C1074.17 1440.58 1074.77 1440.44 1075.37 1440.44H1242.45" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                                <path d="M54.4844 1671.01H43.8723L61.8723 1698.47H72.4844L54.4844 1671.01Z" fill="white" className='rect' />
                                <path d="M40.1777 1671.01H29.5657L47.5657 1698.47H58.1777L40.1777 1671.01Z" fill="white" className='rect' />
                                <path d="M25.8711 1671.01H15.259L33.259 1698.47H43.8711L25.8711 1671.01Z" fill="white" className='rect' />
                                <path d="M11.5645 1671.01H0.9524L18.9524 1698.47H29.5645L11.5645 1671.01Z" fill="white" className='rect' />
                                <path d="M566.453 1639.46L415.644 1697.2C415.187 1697.37 414.702 1697.46 414.214 1697.46H67.9531" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                                <path d="M1071.92 1564.96H1082.53L1064.53 1592.42H1053.92L1071.92 1564.96Z" fill="white" className='rect' />
                                <path d="M1086.23 1564.96H1096.84L1078.84 1592.42H1068.23L1086.23 1564.96Z" fill="white" className='rect' />
                                <path d="M1100.54 1564.96H1111.15L1093.15 1592.42H1082.54L1100.54 1564.96Z" fill="white" className='rect' />
                                <path d="M1114.84 1564.96H1125.45L1107.45 1592.42H1096.84L1114.84 1564.96Z" fill="white" className='rect' />
                                <path d="M841.953 1636.42L960.772 1591.68C961.222 1591.51 961.7 1591.42 962.181 1591.42H1058.45" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                                <path d="M81.4844 1471.01H70.8723L88.8723 1498.47H99.4844L81.4844 1471.01Z" fill="white" className='rect' />
                                <path d="M67.1777 1471.01H56.5657L74.5657 1498.47H85.1777L67.1777 1471.01Z" fill="white" className='rect' />
                                <path d="M52.8711 1471.01H42.259L60.259 1498.47H70.8711L52.8711 1471.01Z" fill="white" className='rect' />
                                <path d="M38.5645 1471.01H27.9524L45.9524 1498.47H56.5645L38.5645 1471.01Z" fill="white" className='rect' />
                                <path d="M562.954 1583.99L296.054 1497.68C295.656 1497.56 295.241 1497.49 294.823 1497.49H94.9531" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                                <path d="M320.486 1355.96H309.874L327.874 1383.42H338.486L320.486 1355.96Z" fill="white" className='rect' />
                                <path d="M306.18 1355.96H295.568L313.568 1383.42H324.18L306.18 1355.96Z" fill="white" className='rect' />
                                <path d="M291.873 1355.96H281.261L299.261 1383.42H309.873L291.873 1355.96Z" fill="white" className='rect' />
                                <path d="M277.566 1355.96H266.954L284.954 1383.42H295.566L277.566 1355.96Z" fill="white" className='rect' />
                                <path d="M611.561 1490.96L507.037 1383.64C506.284 1382.86 505.251 1382.43 504.172 1382.43H333.359" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                            </g>
                            <g className='svgFifth'>
                                <g className='center-group'>
                                    <g filter="url(#filter15_f_70_5385)">
                                        <path d="M452.829 1959.14L479.405 1932.02C481.286 1930.11 483.861 1929.02 486.548 1929.02L649.147 1929.02C654.67 1929.02 659.147 1933.5 659.147 1939.02V2067.66C659.147 2070.3 658.104 2072.83 656.246 2074.7L625.946 2105.24L594.581 2136.73C592.704 2138.61 590.155 2139.67 587.496 2139.67H426.753C421.23 2139.67 416.753 2135.19 416.753 2129.67L416.752 2000.87C416.752 1998.3 417.745 1995.82 419.526 1993.96L452.829 1959.14Z" fill="#FF5E01" />
                                    </g>
                                    <path d="M486.548 1929.52H649.147C654.394 1929.52 658.647 1933.78 658.647 1939.02V2067.66C658.647 2070.16 657.656 2072.57 655.891 2074.35L625.591 2104.89L594.227 2136.38C592.444 2138.16 590.022 2139.17 587.496 2139.17H426.753C421.506 2139.17 417.253 2134.92 417.253 2129.67L417.252 2000.87C417.252 1998.43 418.196 1996.08 419.887 1994.31L453.186 1959.49L453.187 1959.5L479.763 1932.37C481.549 1930.55 483.995 1929.52 486.548 1929.52Z" fill="#FF5100" stroke="white" />
                                    <g filter="url(#filter16_f_70_5385)">
                                        <path d="M461.578 1966.88L485.121 1942.85C487.001 1940.93 489.576 1939.85 492.263 1939.85L636.69 1939.85C642.213 1939.85 646.69 1944.33 646.69 1949.85V2063.81C646.69 2066.45 645.647 2068.98 643.789 2070.85L616.901 2097.95L589.061 2125.9C587.185 2127.79 584.635 2128.85 581.976 2128.85H439.21C433.687 2128.85 429.21 2124.37 429.21 2118.85L429.209 2004.73C429.209 2002.15 430.203 1999.68 431.983 1997.82L461.578 1966.88Z" fill="#FF833B" />
                                    </g>
                                    <g filter="url(#filter17_d_70_5385)">
                                        <path d="M461.578 1966.88L485.121 1942.85C487.001 1940.93 489.576 1939.85 492.263 1939.85L636.69 1939.85C642.213 1939.85 646.69 1944.33 646.69 1949.85V2063.81C646.69 2066.45 645.647 2068.98 643.789 2070.85L616.901 2097.95L589.061 2125.9C587.185 2127.79 584.635 2128.85 581.976 2128.85H439.21C433.687 2128.85 429.21 2124.37 429.21 2118.85L429.209 2004.73C429.209 2002.15 430.203 1999.68 431.983 1997.82L461.578 1966.88Z" fill="#FF5100" />
                                        <path d="M492.263 1940.35H636.69C641.937 1940.35 646.19 1944.6 646.19 1949.85V2063.81C646.19 2066.32 645.199 2068.72 643.434 2070.5L616.547 2097.6L588.707 2125.55C586.924 2127.34 584.502 2128.35 581.977 2128.35H439.21C433.963 2128.35 429.71 2124.09 429.71 2118.85L429.709 2004.73C429.709 2002.28 430.653 1999.93 432.344 1998.16L461.939 1967.22L461.938 1967.22L485.478 1943.2C487.264 1941.38 489.71 1940.35 492.263 1940.35Z" stroke="white" />
                                    </g>
                                </g>
                            </g>
                            <g className='svgSixth'>
                                <g className='center-group'>
                                    <g filter="url(#filter12_f_70_5385)">
                                        <path d="M622.942 2409.23L649.519 2382.11C651.4 2380.19 653.974 2379.11 656.661 2379.11L819.261 2379.11C824.783 2379.11 829.261 2383.59 829.261 2389.11V2517.75C829.261 2520.38 828.218 2522.92 826.359 2524.79L796.059 2555.33L764.694 2586.82C762.817 2588.7 760.268 2589.76 757.609 2589.76H596.867C591.344 2589.76 586.867 2585.28 586.867 2579.76L586.865 2450.96C586.865 2448.39 587.859 2445.91 589.639 2444.05L622.942 2409.23Z" fill="#FF5E01" />
                                    </g>
                                    <path d="M656.661 2379.61H819.261C824.507 2379.61 828.761 2383.86 828.761 2389.11V2517.75C828.761 2520.25 827.769 2522.66 826.004 2524.44L795.704 2554.97L764.34 2586.46C762.557 2588.25 760.135 2589.26 757.609 2589.26H596.866C591.62 2589.26 587.366 2585.01 587.366 2579.76L587.365 2450.96C587.365 2448.52 588.309 2446.16 590 2444.4L623.299 2409.58L623.3 2409.58L649.876 2382.46C651.663 2380.64 654.108 2379.61 656.661 2379.61Z" fill="#FF5100" stroke="white" />
                                    <g filter="url(#filter13_f_70_5385)">
                                        <path d="M631.691 2416.96L655.234 2392.94C657.115 2391.02 659.689 2389.94 662.376 2389.94L806.804 2389.94C812.326 2389.94 816.804 2394.41 816.804 2399.94V2513.9C816.804 2516.54 815.761 2519.07 813.902 2520.94L787.014 2548.04L759.174 2575.99C757.298 2577.87 754.749 2578.93 752.09 2578.93H609.323C603.801 2578.93 599.323 2574.46 599.323 2568.93L599.322 2454.82C599.322 2452.24 600.316 2449.76 602.096 2447.9L631.691 2416.96Z" fill="#FF833B" />
                                    </g>
                                    <g filter="url(#filter14_d_70_5385)">
                                        <path d="M631.691 2416.96L655.234 2392.94C657.115 2391.02 659.689 2389.94 662.376 2389.94L806.804 2389.94C812.326 2389.94 816.804 2394.41 816.804 2399.94V2513.9C816.804 2516.54 815.761 2519.07 813.902 2520.94L787.014 2548.04L759.174 2575.99C757.298 2577.87 754.749 2578.93 752.09 2578.93H609.323C603.801 2578.93 599.323 2574.46 599.323 2568.93L599.322 2454.82C599.322 2452.24 600.316 2449.76 602.096 2447.9L631.691 2416.96Z" fill="#FF5100" />
                                        <path d="M662.376 2390.44H806.804C812.05 2390.44 816.304 2394.69 816.304 2399.94V2513.9C816.304 2516.41 815.312 2518.81 813.547 2520.59L786.66 2547.69L758.82 2575.64C757.038 2577.43 754.616 2578.43 752.09 2578.43H609.323C604.077 2578.43 599.823 2574.18 599.823 2568.93L599.822 2454.82C599.822 2452.37 600.766 2450.02 602.457 2448.25L632.053 2417.31L632.052 2417.31L655.591 2393.29C657.378 2391.46 659.823 2390.44 662.376 2390.44Z" stroke="white" />
                                    </g>
                                </g>
                                <path d="M1101.34 2606.98H1111.95L1093.95 2634.44H1083.34L1101.34 2606.98Z" fill="white" className='rect' />
                                <path d="M1115.64 2606.98H1126.25L1108.25 2634.44H1097.64L1115.64 2606.98Z" fill="white" className='rect' />
                                <path d="M1129.95 2606.98H1140.56L1122.56 2634.44H1111.95L1129.95 2606.98Z" fill="white" className='rect' />
                                <path d="M1144.26 2606.98H1154.87L1136.87 2634.44H1126.26L1144.26 2606.98Z" fill="white" className='rect' />
                                <path d="M789.334 2589.72L901.637 2633.18C902.098 2633.36 902.587 2633.45 903.081 2633.45H1087.93" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                                <path d="M1301.08 2290.25H1311.7L1293.7 2317.71H1283.08L1301.08 2290.25Z" fill="white" className='rect' />
                                <path d="M1315.39 2290.25H1326L1308 2317.71H1297.39L1315.39 2290.25Z" fill="white" className='rect' />
                                <path d="M1329.7 2290.25H1340.31L1322.31 2317.71H1311.7L1329.7 2290.25Z" fill="white" className='rect' />
                                <path d="M1344 2290.25H1354.62L1336.62 2317.71H1326L1344 2290.25Z" fill="white" className='rect' />
                                <path d="M842.334 2425.42L948.66 2317.9C949.411 2317.14 950.435 2316.71 951.504 2316.71H1289.83" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                                <path d="M197.867 2619.3H187.255L205.255 2646.76H215.867L197.867 2619.3Z" fill="white" className='rect' />
                                <path d="M183.561 2619.3H172.948L190.948 2646.76H201.561L183.561 2619.3Z" fill="white" className='rect' />
                                <path d="M169.254 2619.3H158.642L176.642 2646.76H187.254L169.254 2619.3Z" fill="white" className='rect' />
                                <path d="M154.947 2619.3H144.335L162.335 2646.76H172.947L154.947 2619.3Z" fill="white" className='rect' />
                                <path d="M571.835 2565.76L419.203 2645.31C418.632 2645.6 417.998 2645.76 417.354 2645.76H211.334" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                                <path d="M121.867 2435.25H111.255L129.255 2462.71H139.867L121.867 2435.25Z" fill="white" className='rect' />
                                <path d="M107.561 2435.25H96.9485L114.948 2462.71H125.561L107.561 2435.25Z" fill="white" className='rect' />
                                <path d="M93.2539 2435.25H82.6419L100.642 2462.71H111.254L93.2539 2435.25Z" fill="white" className='rect' />
                                <path d="M78.9473 2435.25H68.3352L86.3352 2462.71H96.9473L78.9473 2435.25Z" fill="white" className='rect' />
                                <path d="M571.359 2524.27L326.345 2461.84C326.023 2461.76 325.691 2461.72 325.358 2461.72H135.361" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line' />
                            </g>

                            <defs>
                                <filter id="filter0_f_70_5385" x="407.078" y="109.369" width="258.395" height="226.646" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_70_5385" />
                                </filter>
                                <filter id="filter1_f_70_5385" x="390.635" y="91.2953" width="291.28" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_70_5385" />
                                </filter>
                                <filter id="filter2_d_70_5385" x="401.835" y="103.495" width="274.88" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="3" dy="4" />
                                    <feGaussianBlur stdDeviation="14.35" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_70_5385" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_70_5385" result="shape" />
                                </filter>
                                <filter id="filter3_f_70_5385" x="574.078" y="563.186" width="258.395" height="226.646" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_70_5385" />
                                </filter>
                                <filter id="filter4_f_70_5385" x="557.635" y="545.112" width="291.28" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_70_5385" />
                                </filter>
                                <filter id="filter5_d_70_5385" x="568.835" y="557.312" width="274.88" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="3" dy="4" />
                                    <feGaussianBlur stdDeviation="14.35" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_70_5385" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_70_5385" result="shape" />
                                </filter>
                                <filter id="filter6_f_70_5385" x="749.578" y="1017" width="258.395" height="226.646" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_70_5385" />
                                </filter>
                                <filter id="filter7_f_70_5385" x="733.135" y="998.928" width="291.28" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_70_5385" />
                                </filter>
                                <filter id="filter8_d_70_5385" x="744.335" y="1011.13" width="274.88" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="3" dy="4" />
                                    <feGaussianBlur stdDeviation="14.35" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_70_5385" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_70_5385" result="shape" />
                                </filter>
                                <filter id="filter9_f_70_5385" x="575.484" y="1470.82" width="258.395" height="226.646" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_70_5385" />
                                </filter>
                                <filter id="filter10_f_70_5385" x="559.041" y="1452.74" width="291.28" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_70_5385" />
                                </filter>
                                <filter id="filter11_d_70_5385" x="570.241" y="1464.94" width="274.88" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="3" dy="4" />
                                    <feGaussianBlur stdDeviation="14.35" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_70_5385" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_70_5385" result="shape" />
                                </filter>
                                <filter id="filter12_f_70_5385" x="578.865" y="2371.11" width="258.395" height="226.646" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_70_5385" />
                                </filter>
                                <filter id="filter13_f_70_5385" x="562.422" y="2353.04" width="291.28" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_70_5385" />
                                </filter>
                                <filter id="filter14_d_70_5385" x="573.622" y="2365.24" width="274.88" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="3" dy="4" />
                                    <feGaussianBlur stdDeviation="14.35" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_70_5385" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_70_5385" result="shape" />
                                </filter>
                                <filter id="filter15_f_70_5385" x="408.752" y="1921.02" width="258.395" height="226.646" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_70_5385" />
                                </filter>
                                <filter id="filter16_f_70_5385" x="392.309" y="1902.95" width="291.28" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_70_5385" />
                                </filter>
                                <filter id="filter17_d_70_5385" x="403.509" y="1915.15" width="274.88" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="3" dy="4" />
                                    <feGaussianBlur stdDeviation="14.35" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_70_5385" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_70_5385" result="shape" />
                                </filter>
                            </defs>
                        </svg>

                    </div>
                    <div>
                        <div className='absolute top-[22.5%] left-[38%] w-[7%] overflow-hidden'>
                            <p className='font-medium text-content-24 font-body  text-center textanim svgFirst'>Digital Accounts</p>
                        </div>
                        <div className='absolute top-[36.2%] left-[46.5%] w-[8%] overflow-hidden'>
                            <p className='font-medium text-content-24 font-body  text-center textanim svgSecond'>Redemption Account </p>
                        </div>
                        <div className='absolute top-[49.8%] left-[55%] w-[10%] overflow-hidden'>
                            <p className='font-medium text-content-24 font-body  text-center textanim svgThird'>Pre-paid Cards Accounts</p>
                        </div>
                        <div className='absolute top-[63.5%] left-[45.5%] w-[10%] overflow-hidden'>
                            <p className='font-medium text-content-24 font-body  text-center textanim svgFourth'>Credit Card Accounts</p>
                        </div>
                        <div className='absolute top-[76.7%] left-[38%] w-[7%] overflow-hidden'>
                            <p className='font-medium text-content-24 font-body  text-center textanim svgFifth'>Reward Account </p>
                        </div>
                        <div className='absolute top-[90.2%] left-[47.2%] w-[7%] overflow-hidden'>
                            <p className='font-medium text-content-24 font-body text-center textanim svgSixth'>Loan Accounts </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='absolute top-[16.7%] left-[23%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgFirst'>Fund Transfers</p>
                            </div>
                            <div className='absolute top-[25.6%] left-[18.2%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgFirst'>Digital Payments</p>
                            </div>
                            <div className='absolute top-[18.5%] left-[56%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgFirst'>Collect payments / Settlements</p>
                            </div>
                        </div>
                        <div>
                            <div className='absolute top-[35.8%] left-[22.5%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgSecond'>Usage of Redeemed Amount</p>
                            </div>
                            <div className='absolute top-[31.3%] left-[65%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgSecond'>Redeem Reward Points</p>
                            </div>
                        </div>
                        <div>
                            <div className='absolute top-[45.5%] left-[33%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgThird'>Load Money</p>
                            </div>
                            <div className='absolute top-[51.5%] left-[41%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgThird'>Spends</p>
                            </div>
                            <div className='absolute top-[42.8%] left-[74%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgThird'>Card Controls</p>
                            </div>
                            <div className='absolute top-[50.3%] left-[74%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgThird'>Card Statements</p>
                            </div>
                        </div>
                        <div>
                            <div className='absolute top-[57.3%] left-[31.5%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgFourth'>Card Statement</p>
                            </div>
                            <div className='absolute top-[60.7%] left-[19%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgFourth'>Limit Management</p>
                            </div>
                            <div className='absolute top-[66.8%] left-[17.5%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgFourth'>Collection of Delinquent Amounts</p>
                            </div>
                            <div className='absolute top-[59%] left-[72%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgFourth'>Card Controls</p>
                            </div>
                            <div className='absolute top-[63.6%] left-[65.5%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgFourth'>Spends</p>
                            </div>
                            <div className='absolute top-[68.3%] left-[64%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgFourth'>Repayments</p>
                            </div>
                        </div>
                        <div>
                            <div className='absolute top-[89.6%] left-[21%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgSixth'>Loan Repayments</p>
                            </div>
                            <div className='absolute top-[95.1%] left-[25%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgSixth'>Loan Disbursement</p>
                            </div>
                            <div className='absolute top-[85.2%] left-[65%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgSixth'>Collection of Delinquent Amount</p>
                            </div>
                            <div className='absolute top-[94.8%] left-[62%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgSixth'>Loan Statements</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Infrastructure2

