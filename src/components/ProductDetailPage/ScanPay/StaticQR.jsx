'use client'
import Copy from '@/components/Animations/Copy';
import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);


const StaticQR = () => {
    const sectionRef = useRef(null);
    const svgContainer = useRef(null);
    
    useGSAP(() => {
      const svgGroups = ['.svgFirst', '.svgSecond', '.svgThird', '.svgFourth', '.svgFifth'];
    
      // Initial states
      gsap.set(svgGroups, { opacity: 0 });
    
      svgGroups.forEach((group, index) => {
        gsap.set(`${group} .outer-paths`, { scale: 1, opacity: 0 });
        gsap.set(`${group} .center-group`, { scale: 1, opacity: 0 });
        gsap.set(`.line${index + 1}`, { drawSVG: '0%' });
        gsap.set(`.text${index + 1}`, { opacity: 0, y: 10 });
      });
    
      svgGroups.forEach((group, index) => {
        const outerPaths = `${group} .outer-paths`;
        const centerGroup = `${group} .center-group`;
        const lineSelector = `.line${index + 1}`;
        const textSelector = `.text${index + 1}`; // ← this is outside SVG
        const start = `${index * 30}% 80%`;
    
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: svgContainer.current,
            start: start,
            // markers: true,
          },
        });
    
        tl.to(group, {
          opacity: 1,
          duration: 0.1,
        })
          .to(outerPaths, {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
          })
          .to(centerGroup, {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            delay: -0.2,
          })
          // Animate external text here
          .to(textSelector, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            delay:-0.5
          })
          // Then draw the line
          .to(lineSelector, {
            drawSVG: '100%',
            duration: 0.6,
            ease: 'power2.out',
          });
      });
    }, []);
    
    return (
        <>
            <section data-theme="orange" className='w-screen h-full overflow-hidden bg-gradient max-md:mt-[-1px] relative max-sm:pb-[15%]' ref={sectionRef}>
                <div className='px-[4vw] py-[7vw] flex flex-col items-center  gap-[10vw] max-sm:px-[5.5vw]'>
                    <div className='w-[60%] max-md:w-[100%] max-sm:w-full'>
                        <Copy>
                            <h2 className='text-head-100 font-display text-center capitalize max-sm:text-left max-md:text-left'>
                                Instant Payments with Static QR Codes
                            </h2>
                        </Copy>
                    </div>
                    <div className='w-screen overflow-x-scroll flex flex-col items-center max-sm:items-start max-sm:pr-[5vw] max-md:pr-[2vw]'>
                    <div className='w-[85%] max-md:w-[150%] max-md:pr-[10vw] max-md:translate-x-[20%] max-sm:translate-x-0 max-sm:w-[250%] ' ref={svgContainer}>
                        <svg className='h-full w-full' width="1477" height="264" viewBox="0 0 1477 264" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_f_72_5626)">
                                <path d="M61.077 57.1214L87.6535 30.0009C89.5344 28.0816 92.1086 27 94.7958 27L257.395 27C262.918 27 267.395 31.4772 267.395 37V165.634C267.395 168.273 266.352 170.804 264.494 172.677L234.194 203.216L202.829 234.704C200.952 236.588 198.403 237.647 195.744 237.647H35.0013C29.4785 237.647 25.0014 233.17 25.0013 227.647L25 98.8506C25 96.2753 25.9935 93.7992 27.7737 91.9382L61.077 57.1214Z" fill="#FF5E01" />
                            </g>
                            <g className='svgFirst'>
                                <g className='outer-paths'>
                            <path d="M94.7959 27.5H257.396C262.642 27.5001 266.896 31.7534 266.896 37V165.634C266.896 168.14 265.904 170.546 264.139 172.325L233.839 202.863L202.475 234.352C200.692 236.141 198.27 237.147 195.744 237.147H35.001C29.7545 237.147 25.5011 232.894 25.501 227.647L25.5 98.8506C25.5 96.4042 26.4438 94.0521 28.1348 92.2842L61.4336 57.4707L61.4346 57.4717L88.0107 30.3506C89.7975 28.5273 92.2431 27.5 94.7959 27.5Z" fill="#FF5100" stroke="white" /> 
                             <g filter="url(#filter1_f_72_5626)">
                                <path d="M69.8259 64.8517L93.3686 40.8271C95.2494 38.9078 97.8236 37.8262 100.511 37.8262L244.938 37.8262C250.461 37.8262 254.938 42.3033 254.938 47.8262V161.788C254.938 164.426 253.895 166.958 252.037 168.831L225.149 195.93L197.309 223.88C195.433 225.764 192.883 226.822 190.224 226.822H47.4582C41.9354 226.822 37.4583 222.345 37.4582 216.823L37.4571 102.704C37.457 100.129 38.4506 97.6528 40.2307 95.7918L69.8259 64.8517Z" fill="#FF833B" />
                            </g> 
                             <g filter="url(#filter2_d_72_5626)">
                                <path d="M69.8259 64.8517L93.3686 40.8271C95.2494 38.9078 97.8236 37.8262 100.511 37.8262L244.938 37.8262C250.461 37.8262 254.938 42.3033 254.938 47.8262V161.788C254.938 164.426 253.895 166.958 252.037 168.831L225.149 195.93L197.309 223.88C195.433 225.764 192.883 226.822 190.224 226.822H47.4582C41.9354 226.822 37.4583 222.345 37.4582 216.823L37.4571 102.704C37.457 100.129 38.4506 97.6528 40.2307 95.7918L69.8259 64.8517Z" fill="#FF5100" />
                                <path d="M100.511 38.3262H244.938C250.185 38.3263 254.438 42.5795 254.438 47.8262V161.788C254.438 164.295 253.447 166.699 251.682 168.479L224.795 195.577L196.955 223.526C195.172 225.316 192.751 226.322 190.225 226.322H47.458C42.2114 226.322 37.9581 222.069 37.958 216.822L37.957 102.704C37.957 100.258 38.9008 97.9056 40.5918 96.1377L70.1875 65.1973L70.1865 65.1963L93.7256 41.1768C95.5123 39.3535 97.9579 38.3262 100.511 38.3262Z" stroke="white" />
                            </g> 
                            </g>
                            <g className='center-group'>
                             <path d="M107.904 128.392H142.318V93.9785H107.904V128.392ZM116.508 102.582H133.715V119.789H116.508V102.582ZM107.904 171.409H142.318V136.996H107.904V171.409ZM116.508 145.599H133.715V162.806H116.508V145.599ZM150.921 93.9785V128.392H185.335V93.9785H150.921ZM176.732 119.789H159.525V102.582H176.732V119.789ZM150.964 136.996H159.568V145.599H150.964V136.996ZM159.568 145.599H168.171V154.202H159.568V145.599ZM150.964 154.202H159.568V162.806H150.964V154.202ZM168.171 154.202H176.775V162.806H168.171V154.202ZM176.775 162.806H185.378V171.409H176.775V162.806ZM159.568 162.806H168.171V171.409H159.568V162.806ZM168.171 136.996H176.775V145.599H168.171V136.996ZM176.775 145.599H185.378V154.202H176.775V145.599Z" fill="white" /> 
                             </g>

                            </g>
                            <line x1="267" y1="143.5" x2="327" y2="143.5" stroke="white"  className='line1 path-line'/>

                            <g className='svgSecond'>
                                <g className='outer-paths'>
                            <path d="M396.796 27.5H559.396C564.642 27.5001 568.896 31.7534 568.896 37V165.634C568.896 168.14 567.904 170.546 566.139 172.325L535.839 202.863L504.475 234.352C502.692 236.141 500.27 237.147 497.744 237.147H337.001C331.755 237.147 327.501 232.894 327.501 227.647L327.5 98.8506C327.5 96.4042 328.444 94.0521 330.135 92.2842L363.434 57.4707L363.435 57.4717L390.011 30.3506C391.798 28.5273 394.243 27.5 396.796 27.5Z" stroke="#FFFFFF" />
                            <path d="M402.511 38.3262H546.938C552.185 38.3263 556.438 42.5795 556.438 47.8262V161.788C556.438 164.295 555.447 166.699 553.682 168.479L526.795 195.577L498.955 223.526C497.172 225.316 494.751 226.322 492.225 226.322H349.458C344.211 226.322 339.958 222.069 339.958 216.822L339.957 102.704C339.957 100.258 340.901 97.9056 342.592 96.1377L372.188 65.1973L372.187 65.1963L395.726 41.1768C397.512 39.3535 399.958 38.3262 402.511 38.3262Z" stroke="#FFFFFF" />
                            </g>
                            <g className='center-group'>
                            <path d="M461.017 94.2148H486.67V115.592H478.119V102.766H461.017V94.2148ZM435.364 94.2148V102.766H418.262V115.592H409.711V94.2148H435.364ZM461.017 171.174V162.623H478.119V149.796H486.67V171.174H461.017ZM435.364 171.174H409.711V149.796H418.262V162.623H435.364V171.174ZM409.711 128.419H486.67V136.97H409.711V128.419Z" fill="#FFFFFF" />
                            </g>
                            </g>
                            <line x1="569" y1="143.5" x2="629" y2="143.5" stroke="#FFFFFF" className='line2 path-line' />
                            <g className='svgThird'>
                                <g className='outer-paths'>
                            <path d="M699.19 27.5H861.79C867.037 27.5001 871.29 31.7534 871.29 37V165.634C871.29 168.14 870.299 170.546 868.533 172.325L838.233 202.863L806.869 234.352C805.087 236.141 802.665 237.147 800.139 237.147H639.396C634.149 237.147 629.896 232.894 629.896 227.647L629.895 98.8506C629.895 96.4042 630.838 94.0521 632.529 92.2842L665.828 57.4707L665.829 57.4717L692.405 30.3506C694.192 28.5273 696.638 27.5 699.19 27.5Z" stroke="#FFFFFF" />
                            <path d="M704.905 38.3262H849.333C854.58 38.3263 858.833 42.5795 858.833 47.8262V161.788C858.833 164.295 857.842 166.699 856.076 168.479L829.189 195.577L801.35 223.526C799.567 225.316 797.145 226.322 794.619 226.322H651.853C646.606 226.322 642.353 222.069 642.353 216.822L642.352 102.704C642.352 100.258 643.295 97.9056 644.986 96.1377L674.582 65.1973L674.581 65.1963L698.12 41.1768C699.907 39.3535 702.352 38.3262 704.905 38.3262Z" stroke="#FFFFFF" />
                            </g>
                            <g className='center-group'>
                            <path d="M718.309 165.343C716.064 165.343 714.143 164.544 712.546 162.947C710.949 161.35 710.149 159.428 710.146 157.181V108.207C710.146 105.963 710.946 104.042 712.546 102.445C714.146 100.848 716.067 100.048 718.309 100.045H783.607C785.851 100.045 787.774 100.845 789.373 102.445C790.973 104.044 791.772 105.965 791.769 108.207V157.181C791.769 159.425 790.97 161.347 789.373 162.947C787.776 164.547 785.854 165.346 783.607 165.343H718.309ZM728.512 144.937H733.205V120.451H729.532L722.39 125.552L724.839 129.225L728.512 126.572V144.937ZM741.163 144.937H757.079V140.856H747.489L747.285 140.652C748.713 139.292 749.887 138.135 750.807 137.183C751.726 136.231 752.457 135.483 752.998 134.939C754.223 133.714 755.141 132.49 755.753 131.266C756.365 130.041 756.671 128.749 756.671 127.388C756.671 125.416 755.923 123.766 754.427 122.438C752.93 121.11 751.026 120.448 748.713 120.451C746.945 120.451 745.346 120.961 743.918 121.981C742.489 123.001 741.503 124.328 740.959 125.96L745.04 127.593C745.38 126.708 745.874 126.01 746.522 125.499C747.169 124.987 747.9 124.733 748.713 124.736C749.733 124.736 750.567 125.008 751.215 125.552C751.862 126.096 752.185 126.776 752.182 127.593C752.182 128.341 752.046 129.039 751.774 129.686C751.502 130.334 750.89 131.132 749.937 132.082L746.673 135.347L741.163 140.856V144.937ZM771.363 144.937C773.812 144.937 775.785 144.257 777.281 142.897C778.777 141.536 779.526 139.768 779.526 137.591C779.526 136.367 779.185 135.279 778.505 134.326C777.825 133.374 776.873 132.626 775.649 132.082V131.878C776.601 131.334 777.349 130.636 777.893 129.784C778.437 128.932 778.709 127.93 778.709 126.776C778.709 124.94 777.995 123.426 776.567 122.234C775.138 121.042 773.336 120.448 771.159 120.451C769.459 120.451 767.878 120.944 766.417 121.932C764.956 122.92 764.02 124.126 763.609 125.552L767.69 127.184C767.962 126.368 768.405 125.722 769.017 125.246C769.629 124.77 770.343 124.532 771.159 124.532C772.044 124.532 772.775 124.787 773.355 125.299C773.934 125.81 774.223 126.439 774.22 127.184C774.22 128.137 773.88 128.885 773.2 129.429C772.52 129.973 771.635 130.245 770.547 130.245H768.711V134.326H770.751C772.112 134.326 773.166 134.598 773.914 135.143C774.662 135.687 775.036 136.435 775.036 137.387C775.036 138.271 774.662 139.037 773.914 139.685C773.166 140.332 772.316 140.655 771.363 140.652C770.207 140.652 769.323 140.398 768.711 139.889C768.098 139.38 767.554 138.478 767.078 137.183L762.997 138.816C763.473 140.788 764.443 142.302 765.907 143.358C767.371 144.414 769.189 144.94 771.363 144.937ZM718.309 157.181H783.607V108.207H718.309V157.181Z" fill="#FFFFFF" />
                            </g>
                            </g>
                            <line x1="872" y1="143.5" x2="932" y2="143.5" stroke="#FFFFFF" className='line3 path-line' />
                            <g className='svgFourth'>
                                <g className='outer-paths'>
                            <path d="M1001.8 27.5H1164.4C1169.64 27.5001 1173.9 31.7534 1173.9 37V165.634C1173.9 168.14 1172.9 170.546 1171.14 172.325L1140.84 202.863L1109.47 234.352C1107.69 236.141 1105.27 237.147 1102.74 237.147H942.001C936.755 237.147 932.501 232.894 932.501 227.647L932.5 98.8506C932.5 96.4042 933.444 94.0521 935.135 92.2842L968.434 57.4707L968.435 57.4717L995.011 30.3506C996.798 28.5273 999.243 27.5 1001.8 27.5Z" stroke="#FFFFFF" />
                            <path d="M1007.51 38.3262H1151.94C1157.19 38.3263 1161.44 42.5795 1161.44 47.8262V161.788C1161.44 164.295 1160.45 166.699 1158.68 168.479L1131.79 195.577L1103.96 223.526C1102.17 225.316 1099.75 226.322 1097.22 226.322H954.458C949.211 226.322 944.958 222.069 944.958 216.822L944.957 102.704C944.957 100.258 945.901 97.9056 947.592 96.1377L977.188 65.1973L977.187 65.1963L1000.73 41.1768C1002.51 39.3535 1004.96 38.3262 1007.51 38.3262Z" stroke="#FFFFFF" />
                            </g>
                            <g className='center-group'>
                            <circle cx="1053.52" cy="132.517" r="38.017" stroke="#FFFFFF" />
                            <path d="M1066.21 117.333C1065.59 116.986 1064.9 116.766 1064.19 116.684C1063.48 116.602 1062.77 116.661 1062.08 116.858C1061.39 117.054 1060.75 117.383 1060.19 117.828C1059.63 118.272 1059.17 118.822 1058.82 119.446L1048.72 137.616L1042.94 131.838C1042.44 131.318 1041.84 130.904 1041.18 130.619C1040.52 130.334 1039.8 130.184 1039.08 130.177C1038.36 130.171 1037.64 130.309 1036.97 130.582C1036.3 130.856 1035.7 131.26 1035.19 131.77C1034.68 132.281 1034.27 132.888 1034 133.556C1033.73 134.225 1033.59 134.941 1033.59 135.663C1033.6 136.385 1033.75 137.099 1034.04 137.762C1034.32 138.426 1034.73 139.026 1035.25 139.527L1046.13 150.404C1047.16 151.435 1048.55 152.001 1049.98 152.001L1050.73 151.946C1051.56 151.83 1052.36 151.521 1053.05 151.045C1053.75 150.569 1054.32 149.938 1054.73 149.202L1068.33 124.73C1068.67 124.105 1068.89 123.419 1068.97 122.709C1069.06 122 1069 121.281 1068.8 120.594C1068.61 119.908 1068.28 119.266 1067.83 118.707C1067.39 118.147 1066.84 117.68 1066.21 117.333Z" fill="#FFFFFF" />
                            </g>
                            </g>
                            <line x1="1175" y1="143.5" x2="1235" y2="143.5" stroke="#FFFFFF" className='line4 path-line' />
                             <g className='svgFifth'>
                                <g className='outer-paths'>
                            <path d="M1304.4 27.5H1467C1472.25 27.5001 1476.5 31.7534 1476.5 37V165.634C1476.5 168.14 1475.51 170.546 1473.74 172.325L1443.44 202.863L1412.08 234.352C1410.3 236.141 1407.88 237.147 1405.35 237.147H1244.61C1239.36 237.147 1235.11 232.894 1235.11 227.647L1235.11 98.8506C1235.11 96.4042 1236.05 94.0521 1237.74 92.2842L1271.04 57.4707L1271.04 57.4717L1297.62 30.3506C1299.4 28.5273 1301.85 27.5 1304.4 27.5Z" stroke="#FFFFFF" />
                            <path d="M1310.12 38.3262H1454.54C1459.79 38.3263 1464.04 42.5795 1464.04 47.8262V161.788C1464.04 164.295 1463.05 166.699 1461.29 168.479L1434.4 195.577L1406.56 223.526C1404.78 225.316 1402.36 226.322 1399.83 226.322H1257.06C1251.82 226.322 1247.56 222.069 1247.56 216.822L1247.56 102.704C1247.56 100.258 1248.51 97.9056 1250.2 96.1377L1279.79 65.1973L1279.79 65.1963L1303.33 41.1768C1305.12 39.3535 1307.56 38.3262 1310.12 38.3262Z" stroke="#FFFFFF" />
                            </g>
                            <g className='center-group'>
                            <circle cx="1355.52" cy="132.517" r="38.017" stroke="#FFFFFF" />
                            <path d="M1368.21 117.333C1367.59 116.986 1366.9 116.766 1366.19 116.684C1365.48 116.602 1364.77 116.661 1364.08 116.858C1363.39 117.054 1362.75 117.383 1362.19 117.828C1361.63 118.272 1361.17 118.822 1360.82 119.446L1350.72 137.616L1344.94 131.838C1344.44 131.318 1343.84 130.904 1343.18 130.619C1342.52 130.334 1341.8 130.184 1341.08 130.177C1340.36 130.171 1339.64 130.309 1338.97 130.582C1338.3 130.856 1337.7 131.26 1337.19 131.77C1336.68 132.281 1336.27 132.888 1336 133.556C1335.73 134.225 1335.59 134.941 1335.59 135.663C1335.6 136.385 1335.75 137.099 1336.04 137.762C1336.32 138.426 1336.73 139.026 1337.25 139.527L1348.13 150.404C1349.16 151.435 1350.55 152.001 1351.98 152.001L1352.73 151.946C1353.56 151.83 1354.36 151.521 1355.05 151.045C1355.75 150.569 1356.32 149.938 1356.73 149.202L1370.33 124.73C1370.67 124.105 1370.89 123.419 1370.97 122.709C1371.06 122 1371 121.281 1370.8 120.594C1370.61 119.908 1370.28 119.266 1369.83 118.707C1369.39 118.147 1368.84 117.68 1368.21 117.333Z" fill="#FFFFFF" />
                            </g>
                            </g>
                            <defs>
                                <filter id="filter0_f_72_5626" x="17" y="19" width="258.395" height="226.646" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_72_5626" />
                                </filter>
                                <filter id="filter1_f_72_5626" x="0.55703" y="0.92617" width="291.28" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_72_5626" />
                                </filter>
                                <filter id="filter2_d_72_5626" x="11.757" y="13.1262" width="274.88" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="3" dy="4" />
                                    <feGaussianBlur stdDeviation="14.35" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_72_5626" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_72_5626" result="shape" />
                                </filter>
                            </defs>
                        </svg>

                        <div className='w-full flex items-start justify-between py-[2vw] max-sm:px-[5vw] max-sm:justify-start max-sm:gap-[15vw]'>
                        <div className=' w-[18%] overflow-hidden max-sm:w-[18%]'>
                            <p className='font-medium text-content-24 font-body  text-center text1 textanim max-sm:text-content-20 max-md:text-content-20 max-sm:text-left '>Merchant presents a Static QR Code</p>
                        </div>
                        <div className=' w-[15%] overflow-hidden max-sm:w-[18%]'>
                            <p className='font-medium text-content-24 font-body  text-center text2 textanim max-sm:text-content-20 max-md:text-content-20 max-sm:text-left '>Customer Scans Static QR</p>
                        </div> <div className=' w-[25%] overflow-hidden max-sm:w-[18%]'>
                            <p className='font-medium text-content-24 font-body  text-center text3 textanim max-sm:text-content-20 max-md:text-content-20 max-sm:text-left'>Customer enters Payment Amount followed by PIN for authentication</p>
                        </div> <div className=' w-[18%] overflow-hidden'>
                            <p className='font-medium text-content-24 font-body  text-center text4 textanim max-sm:text-content-20 max-md:text-content-20 max-sm:text-left'>Payment  Successful</p>
                        </div> <div className=' w-[18%] overflow-hidden'>
                            <p className='font-medium text-content-24 font-body  text-center text5 textanim max-sm:text-content-20 max-md:text-content-20 max-sm:text-left'>Payment  Successful</p>
                        </div>
                        </div>

                    </div>

                    </div>
                     <div className="w-full mx-auto h-full text-white relative z-10  items-center gap-5 justify-end hidden max-md:flex max-sm:flex">
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
        </>
    )
}

export default StaticQR