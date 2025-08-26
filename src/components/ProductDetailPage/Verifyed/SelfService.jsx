'use client'
import Copy from '@/components/Animations/Copy';
import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);


const SelfService = () => {
  const sectionRef = useRef(null);
  const svgContainerRef = useRef(null);

  useGSAP(() => {
    if(globalThis.innerWidth>1024){
    const svgGroups = ['.svgFirst', '.svgSecond', '.svgThird', '.svgFourth'];

    // Initial states
    gsap.set(svgGroups, { opacity: 0 });

    svgGroups.forEach((group, index) => {
      gsap.set(`${group} .outer-paths`, { scale: 1, opacity: 0 });
      gsap.set(`${group} .center-group`, { scale: 1, opacity: 0 });
      gsap.set(`.line-${index + 1}`, { drawSVG: '0%' });
      gsap.set(`.text-${index + 1}`, { opacity: 0, y: 10 });
    });

    svgGroups.forEach((group, index) => {
      const outerPaths = `${group} .outer-paths`;
      const centerGroup = `${group} .center-group`;
      const lineSelector = `.line-${index + 1}`;
      const textSelector = `.text-${index + 1}`; 
      const start = `${index * 10 + 10}% 75%`; 
          const end = `${index * 20 + 20}% center`;
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: svgContainerRef.current,
              start: start,
              end: end,
            //   scrub: 1.5, 
            //   once: true, 
              // markers: true,
            },
          });
      
          tl.to(group, {
            opacity: 1,
            duration: 0.1,
          })
            .to(outerPaths, {
              opacity: 1,
              duration: 0.6,
              ease: 'power2.out',
            })
            .to(centerGroup, {
              opacity: 1,
              duration: 0.6,
              ease: 'power2.out',
            }, '-=0.3') 
            .to(textSelector, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
            }, '-=0.3')
            .to(lineSelector, {
              drawSVG: '100%',
              duration: 0.6,
              ease: 'power2.out',
            }, '-=1');
        });
      }
      }, []);

  return (
    <>
      <section data-theme="orange" className='w-screen h-full overflow-hidden bg-gradient max-md:mt-[-1px] relative  max-sm:py-[5vw]' ref={sectionRef}>
        <div className='px-[4vw] py-[7vw] flex flex-col items-center  gap-[10vw]'>
          <div className='w-[65%] space-y-[9vw] max-sm:w-full'>
            <Copy>
              <h2 className='text-head-100 font-display text-center  max-sm:text-left'>
            Self-Service Soft-Token Account Setup
              </h2>
            </Copy>
          </div>
            <div className='w-screen max-sm:overflow-x-scroll flex flex-col items-center max-sm:items-start max-sm:pr-[5vw] max-sm:pl-[10vw] scrollbar-hidden max-md:overflow-x-scroll '>

          <div className='w-[75%] max-sm:w-[250%] max-md:w-[150%] max-sm:translate-x-0 max-md:translate-x-[20%]' ref={svgContainerRef}>


          <svg className='h-full w-full' width="1200" height="264" viewBox="0 0 1200 264" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="266.803" y1="143.5" x2="326.803" y2="143.5" stroke="white" className='line-1'/>
<line x1="569.803" y1="143.5" x2="629.803" y2="143.5" stroke="white" className='line-2'/>
<line x1="872.803" y1="143.5" x2="932.803" y2="143.5" stroke="white" className='line-3'/>

<g className='svgFirst'>
    <g className='outer-paths'>
<g filter="url(#filter0_f_200_489)">
<path d="M60.8797 57.1214L87.4562 30.0009C89.3371 28.0816 91.9113 27 94.5986 27L257.198 27C262.721 27 267.198 31.4772 267.198 37V165.634C267.198 168.273 266.155 170.804 264.297 172.677L233.996 203.216L202.631 234.704C200.755 236.588 198.205 237.647 195.546 237.647H34.804C29.2812 237.647 24.8041 233.17 24.8041 227.647L24.8028 98.8506C24.8027 96.2753 25.7963 93.7992 27.5764 91.9382L60.8797 57.1214Z" fill="#FF5E01"/>
</g>
<path d="M94.5986 27.5H257.198C262.445 27.5001 266.698 31.7534 266.698 37V165.634C266.698 168.14 265.707 170.546 263.941 172.325L233.642 202.863L202.277 234.352C200.495 236.141 198.073 237.147 195.547 237.147H34.8037C29.5572 237.147 25.3038 232.894 25.3037 227.647L25.3027 98.8506C25.3027 96.4042 26.2466 94.0521 27.9375 92.2842L61.2363 57.4707L61.2373 57.4717L87.8135 30.3506C89.6003 28.5273 92.0458 27.5 94.5986 27.5Z" fill="#FF5100" stroke="white"/>
<g filter="url(#filter1_f_200_489)">
<path d="M69.6287 64.8507L93.1713 40.8261C95.0522 38.9068 97.6264 37.8252 100.314 37.8252L244.741 37.8252C250.264 37.8252 254.741 42.3024 254.741 47.8252V161.787C254.741 164.425 253.698 166.957 251.84 168.83L224.952 195.929L197.112 223.879C195.236 225.763 192.686 226.822 190.027 226.822H47.261C41.7381 226.822 37.261 222.344 37.2609 216.822L37.2598 102.703C37.2598 100.128 38.2533 97.6519 40.0334 95.7908L69.6287 64.8507Z" fill="#FF833B"/>
</g>
<g filter="url(#filter2_d_200_489)">
<path d="M69.6287 64.8512L93.1713 40.8266C95.0522 38.9073 97.6264 37.8257 100.314 37.8257L244.741 37.8257C250.264 37.8257 254.741 42.3028 254.741 47.8257V161.787C254.741 164.426 253.698 166.958 251.84 168.831L224.952 195.93L197.112 223.879C195.236 225.763 192.686 226.822 190.027 226.822H47.261C41.7381 226.822 37.261 222.345 37.2609 216.822L37.2598 102.704C37.2598 100.128 38.2533 97.6523 40.0334 95.7913L69.6287 64.8512Z" fill="#FF5100"/>
<path d="M100.313 38.3257H244.741C249.988 38.3258 254.241 42.579 254.241 47.8257V161.788C254.241 164.294 253.25 166.699 251.484 168.478L224.598 195.577L196.758 223.526C194.975 225.315 192.553 226.322 190.027 226.322H47.2607C42.0142 226.322 37.7608 222.068 37.7607 216.822L37.7598 102.704C37.7598 100.257 38.7036 97.9051 40.3945 96.1372L69.9902 65.1968L69.9893 65.1958L93.5283 41.1763C95.3151 39.353 97.7607 38.3257 100.313 38.3257Z" stroke="white"/>
</g>
</g>
<g className='center-group'>
<g clipPath="url(#clip0_200_489)">
<rect x="124.286" y="133.907" width="43.0391" height="35.8311" rx="17.9155" stroke="white" strokeWidth="2"/>
<circle cx="146.341" cy="121.229" r="12.7268" stroke="white" strokeWidth="2"/>
<circle cx="146.002" cy="132.311" r="36.517" stroke="white" strokeWidth="4"/>
</g>
</g>
</g>
<g className='svgSecond'>
<g className='outer-paths'>
<g filter="url(#filter3_f_200_489)">
<path d="M362.88 57.1214L389.456 30.0009C391.337 28.0816 393.911 27 396.599 27L559.198 27C564.721 27 569.198 31.4772 569.198 37V165.634C569.198 168.273 568.155 170.804 566.297 172.677L535.996 203.216L504.631 234.704C502.755 236.588 500.205 237.647 497.546 237.647H336.804C331.281 237.647 326.804 233.17 326.804 227.647L326.803 98.8506C326.803 96.2753 327.796 93.7992 329.576 91.9382L362.88 57.1214Z" fill="#FF5E01"/>
</g>
<path d="M396.993 27.5H559.593C564.839 27.5001 569.093 31.7534 569.093 37V165.634C569.093 168.14 568.101 170.546 566.336 172.325L536.036 202.863L504.672 234.352C502.889 236.141 500.467 237.147 497.941 237.147H337.198C331.952 237.147 327.698 232.894 327.698 227.647L327.697 98.8506C327.697 96.4042 328.641 94.0521 330.332 92.2842L363.631 57.4707L363.632 57.4717L390.208 30.3506C391.995 28.5273 394.44 27.5 396.993 27.5Z" fill="#FF5100" stroke="white"/>
<g filter="url(#filter4_f_200_489)">
<path d="M371.629 64.8507L395.171 40.8261C397.052 38.9068 399.626 37.8252 402.314 37.8252L546.741 37.8252C552.264 37.8252 556.741 42.3024 556.741 47.8252V161.787C556.741 164.425 555.698 166.957 553.84 168.83L526.952 195.929L499.112 223.879C497.236 225.763 494.686 226.822 492.027 226.822H349.261C343.738 226.822 339.261 222.344 339.261 216.822L339.26 102.703C339.26 100.128 340.253 97.6519 342.033 95.7908L371.629 64.8507Z" fill="#FF833B"/>
</g>
<g filter="url(#filter5_d_200_489)">
<path d="M372.023 64.8512L395.566 40.8266C397.447 38.9073 400.021 37.8257 402.708 37.8257L547.136 37.8257C552.658 37.8257 557.136 42.3028 557.136 47.8257V161.787C557.136 164.426 556.093 166.958 554.234 168.831L527.347 195.93L499.507 223.879C497.63 225.763 495.081 226.822 492.422 226.822H349.655C344.133 226.822 339.656 222.345 339.655 216.822L339.654 102.704C339.654 100.128 340.648 97.6523 342.428 95.7913L372.023 64.8512Z" fill="#FF5100"/>
<path d="M402.708 38.3257H547.136C552.382 38.3258 556.636 42.579 556.636 47.8257V161.788C556.636 164.294 555.644 166.699 553.879 168.478L526.992 195.577L499.152 223.526C497.37 225.315 494.948 226.322 492.422 226.322H349.655C344.409 226.322 340.155 222.068 340.155 216.822L340.154 102.704C340.154 100.257 341.098 97.9051 342.789 96.1372L372.385 65.1968L372.384 65.1958L395.923 41.1763C397.71 39.353 400.155 38.3257 402.708 38.3257Z" stroke="white"/>
</g>
</g>
<g className='center-group'>
<path d="M410.043 128.392H444.457V93.978H410.043V128.392ZM418.646 102.581H435.853V119.788H418.646V102.581ZM410.043 171.409H444.457V136.995H410.043V171.409ZM418.646 145.598H435.853V162.805H418.646V145.598ZM453.06 93.978V128.392H487.474V93.978H453.06ZM478.87 119.788H461.663V102.581H478.87V119.788ZM453.103 136.995H461.706V145.598H453.103V136.995ZM461.706 145.598H470.31V154.202H461.706V145.598ZM453.103 154.202H461.706V162.805H453.103V154.202ZM470.31 154.202H478.913V162.805H470.31V154.202ZM478.913 162.805H487.517V171.409H478.913V162.805ZM461.706 162.805H470.31V171.409H461.706V162.805ZM470.31 136.995H478.913V145.598H470.31V136.995ZM478.913 145.598H487.517V154.202H478.913V145.598Z" fill="white"/>
</g>
</g>

<g className='svgThird'>
<g className='outer-paths'>
<g filter="url(#filter6_f_200_489)">
<path d="M665.88 57.1214L692.456 30.0009C694.337 28.0816 696.911 27 699.599 27L862.198 27C867.721 27 872.198 31.4772 872.198 37V165.634C872.198 168.273 871.155 170.804 869.297 172.677L838.996 203.216L807.631 234.704C805.755 236.588 803.205 237.647 800.546 237.647H639.804C634.281 237.647 629.804 233.17 629.804 227.647L629.803 98.8506C629.803 96.2753 630.796 93.7992 632.576 91.9382L665.88 57.1214Z" fill="#FF5E01"/>
</g>
<path d="M699.599 27.5H862.198C867.445 27.5001 871.698 31.7534 871.698 37V165.634C871.698 168.14 870.707 170.546 868.941 172.325L838.642 202.863L807.277 234.352C805.495 236.141 803.073 237.147 800.547 237.147H639.804C634.557 237.147 630.304 232.894 630.304 227.647L630.303 98.8506C630.303 96.4042 631.247 94.0521 632.938 92.2842L666.236 57.4707L666.237 57.4717L692.813 30.3506C694.6 28.5273 697.046 27.5 699.599 27.5Z" fill="#FF5100" stroke="white"/>
<g filter="url(#filter7_f_200_489)">
<path d="M674.629 64.8507L698.171 40.8261C700.052 38.9068 702.626 37.8252 705.314 37.8252L849.741 37.8252C855.264 37.8252 859.741 42.3024 859.741 47.8252V161.787C859.741 164.425 858.698 166.957 856.84 168.83L829.952 195.929L802.112 223.879C800.236 225.763 797.686 226.822 795.027 226.822H652.261C646.738 226.822 642.261 222.344 642.261 216.822L642.26 102.703C642.26 100.128 643.253 97.6519 645.033 95.7908L674.629 64.8507Z" fill="#FF833B"/>
</g>
<g filter="url(#filter8_d_200_489)">
<path d="M674.629 64.8512L698.171 40.8266C700.052 38.9073 702.626 37.8257 705.314 37.8257L849.741 37.8257C855.264 37.8257 859.741 42.3028 859.741 47.8257V161.787C859.741 164.426 858.698 166.958 856.84 168.831L829.952 195.93L802.112 223.879C800.236 225.763 797.686 226.822 795.027 226.822H652.261C646.738 226.822 642.261 222.345 642.261 216.822L642.26 102.704C642.26 100.128 643.253 97.6523 645.033 95.7913L674.629 64.8512Z" fill="#FF5100"/>
<path d="M705.313 38.3257H849.741C854.988 38.3258 859.241 42.579 859.241 47.8257V161.788C859.241 164.294 858.25 166.699 856.484 168.478L829.598 195.577L801.758 223.526C799.975 225.315 797.553 226.322 795.027 226.322H652.261C647.014 226.322 642.761 222.068 642.761 216.822L642.76 102.704C642.76 100.257 643.704 97.9051 645.395 96.1372L674.99 65.1968L674.989 65.1958L698.528 41.1763C700.315 39.353 702.761 38.3257 705.313 38.3257Z" stroke="white"/>
</g>
</g>
<g className='center-group'>
<circle cx="751.32" cy="132.517" r="38.017" stroke="white"/>
<path d="M764.018 117.333C763.393 116.986 762.707 116.766 761.997 116.684C761.287 116.602 760.569 116.661 759.882 116.858C759.195 117.054 758.554 117.383 757.994 117.828C757.435 118.272 756.968 118.822 756.621 119.446L746.525 137.616L740.747 131.838C740.245 131.318 739.645 130.904 738.981 130.619C738.318 130.334 737.604 130.184 736.882 130.177C736.16 130.171 735.444 130.309 734.776 130.582C734.107 130.856 733.5 131.26 732.989 131.77C732.479 132.281 732.075 132.888 731.801 133.556C731.528 134.225 731.39 134.941 731.397 135.663C731.403 136.385 731.553 137.099 731.838 137.762C732.123 138.426 732.537 139.026 733.057 139.527L743.934 150.404C744.961 151.435 746.348 152.001 747.779 152.001L748.532 151.946C749.365 151.83 750.161 151.521 750.855 151.045C751.549 150.569 752.123 149.938 752.532 149.202L766.128 124.73C766.475 124.105 766.696 123.419 766.778 122.709C766.859 122 766.801 121.281 766.605 120.594C766.409 119.908 766.079 119.266 765.636 118.707C765.192 118.147 764.642 117.68 764.018 117.333Z" fill="white"/>
</g>
</g>

<g className='svgFourth'>
<g className='outer-paths'>
<g filter="url(#filter9_f_200_489)">
<path d="M968.88 57.1214L995.456 30.0009C997.337 28.0816 999.911 27 1002.6 27L1165.2 27C1170.72 27 1175.2 31.4772 1175.2 37V165.634C1175.2 168.273 1174.16 170.804 1172.3 172.677L1142 203.216L1110.63 234.704C1108.75 236.588 1106.21 237.647 1103.55 237.647H942.804C937.281 237.647 932.804 233.17 932.804 227.647L932.803 98.8506C932.803 96.2753 933.796 93.7992 935.576 91.9382L968.88 57.1214Z" fill="#FF5E01"/>
</g>
<path d="M1002.2 27.5H1164.8C1170.05 27.5001 1174.3 31.7534 1174.3 37V165.634C1174.3 168.14 1173.31 170.546 1171.55 172.325L1141.25 202.863L1109.88 234.352C1108.1 236.141 1105.68 237.147 1103.15 237.147H942.409C937.163 237.147 932.909 232.894 932.909 227.647L932.908 98.8506C932.908 96.4042 933.852 94.0521 935.543 92.2842L968.842 57.4707L968.843 57.4717L995.419 30.3506C997.206 28.5273 999.651 27.5 1002.2 27.5Z" fill="#FF5100" stroke="white"/>
<g filter="url(#filter10_f_200_489)">
<path d="M977.629 64.8507L1001.17 40.8261C1003.05 38.9068 1005.63 37.8252 1008.31 37.8252L1152.74 37.8252C1158.26 37.8252 1162.74 42.3024 1162.74 47.8252V161.787C1162.74 164.425 1161.7 166.957 1159.84 168.83L1132.95 195.929L1105.11 223.879C1103.24 225.763 1100.69 226.822 1098.03 226.822H955.261C949.738 226.822 945.261 222.344 945.261 216.822L945.26 102.703C945.26 100.128 946.253 97.6519 948.033 95.7908L977.629 64.8507Z" fill="#FF833B"/>
</g>
<g filter="url(#filter11_d_200_489)">
<path d="M977.234 64.8512L1000.78 40.8266C1002.66 38.9073 1005.23 37.8257 1007.92 37.8257L1152.35 37.8257C1157.87 37.8257 1162.35 42.3028 1162.35 47.8257V161.787C1162.35 164.426 1161.3 166.958 1159.45 168.831L1132.56 195.93L1104.72 223.879C1102.84 225.763 1100.29 226.822 1097.63 226.822H954.866C949.344 226.822 944.866 222.345 944.866 216.822L944.865 102.704C944.865 100.128 945.859 97.6523 947.639 95.7913L977.234 64.8512Z" fill="#FF5100"/>
<path d="M1007.92 38.3257H1152.35C1157.59 38.3258 1161.85 42.579 1161.85 47.8257V161.788C1161.85 164.294 1160.86 166.699 1159.09 168.478L1132.2 195.577L1104.36 223.526C1102.58 225.315 1100.16 226.322 1097.63 226.322H954.866C949.62 226.322 945.366 222.068 945.366 216.822L945.365 102.704C945.365 100.257 946.309 97.9051 948 96.1372L977.596 65.1968L977.595 65.1958L1001.13 41.1763C1002.92 39.353 1005.37 38.3257 1007.92 38.3257Z" stroke="white"/>
</g>
</g>
<g className='center-group'>
<g clipPath="url(#clip1_200_489)">
<rect x="1032.29" y="134.083" width="43.0391" height="35.8311" rx="17.9155" stroke="white" strokeWidth="2"/>
<circle cx="1054.34" cy="121.405" r="12.7268" stroke="white" strokeWidth="2"/>
<circle cx="1054" cy="132.488" r="38.017" stroke="white"/>
<path d="M1086.62 145.009C1086 144.662 1085.31 144.441 1084.6 144.36C1083.89 144.278 1083.17 144.337 1082.49 144.533C1081.8 144.73 1081.16 145.059 1080.6 145.503C1080.04 145.947 1079.57 146.497 1079.23 147.122L1069.13 165.292L1063.35 159.513C1062.85 158.994 1062.25 158.58 1061.59 158.295C1060.92 158.01 1060.21 157.86 1059.49 157.853C1058.77 157.847 1058.05 157.985 1057.38 158.258C1056.71 158.531 1056.1 158.935 1055.59 159.446C1055.08 159.957 1054.68 160.564 1054.41 161.232C1054.13 161.901 1054 162.617 1054 163.339C1054.01 164.061 1054.16 164.774 1054.44 165.438C1054.73 166.101 1055.14 166.702 1055.66 167.203L1066.54 178.08C1067.57 179.111 1068.95 179.676 1070.38 179.676L1071.14 179.622C1071.97 179.505 1072.77 179.197 1073.46 178.721C1074.15 178.245 1074.73 177.614 1075.14 176.878L1088.73 152.405C1089.08 151.781 1089.3 151.095 1089.38 150.385C1089.46 149.676 1089.41 148.957 1089.21 148.27C1089.01 147.583 1088.68 146.942 1088.24 146.382C1087.8 145.823 1087.25 145.356 1086.62 145.009Z" fill="white"/>
</g>
</g>
</g>
<defs>
<filter id="filter0_f_200_489" x="16.8027" y="19" width="258.396" height="226.647" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_200_489"/>
</filter>
<filter id="filter1_f_200_489" x="0.359764" y="0.925194" width="291.281" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_200_489"/>
</filter>
<filter id="filter2_d_200_489" x="11.5598" y="13.1257" width="274.881" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="4"/>
<feGaussianBlur stdDeviation="14.35"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_489"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_489" result="shape"/>
</filter>
<filter id="filter3_f_200_489" x="318.803" y="19" width="258.396" height="226.647" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_200_489"/>
</filter>
<filter id="filter4_f_200_489" x="302.36" y="0.925194" width="291.281" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_200_489"/>
</filter>
<filter id="filter5_d_200_489" x="313.954" y="13.1257" width="274.881" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="4"/>
<feGaussianBlur stdDeviation="14.35"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_489"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_489" result="shape"/>
</filter>
<filter id="filter6_f_200_489" x="621.803" y="19" width="258.396" height="226.647" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_200_489"/>
</filter>
<filter id="filter7_f_200_489" x="605.36" y="0.925194" width="291.281" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_200_489"/>
</filter>
<filter id="filter8_d_200_489" x="616.56" y="13.1257" width="274.881" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="4"/>
<feGaussianBlur stdDeviation="14.35"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_489"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_489" result="shape"/>
</filter>
<filter id="filter9_f_200_489" x="924.803" y="19" width="258.396" height="226.647" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_200_489"/>
</filter>
<filter id="filter10_f_200_489" x="908.36" y="0.925194" width="291.281" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_200_489"/>
</filter>
<filter id="filter11_d_200_489" x="919.165" y="13.1257" width="274.881" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="4"/>
<feGaussianBlur stdDeviation="14.35"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_489"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_489" result="shape"/>
</filter>
<clipPath id="clip0_200_489">
<rect width="78" height="79" fill="white" transform="translate(107 92.8237)"/>
</clipPath>
<clipPath id="clip1_200_489">
<rect width="94.7055" height="94.7055" fill="white" transform="translate(1006.45 84.9707)"/>
</clipPath>
</defs>
</svg>
            <div className='w-full flex items-start justify-between gap-[4vw] py-[2vw]'>
              <div className=' w-[20%] overflow-hidden'>
                <p className=' text-content-24 font-body  text-1  max-md:text-content-20'>Customer signs up on partner’s mobile app</p>
              </div>
              <div className=' w-[20%] overflow-hidden'>
                <p className=' text-content-24 font-body  text-2  max-md:text-content-20'>SDK generates a QR code to be scanned using VERIFYED App </p>
              </div>
              <div className=' w-[20%] overflow-hidden'>
                <p className=' text-content-24 font-body  text-3  max-md:text-content-20'>Self-assisted process of verifying customer </p>
              </div>
              <div className=' w-[20%] overflow-hidden'>
                <p className=' text-content-24 font-body  text-4  max-md:text-content-20'>Soft-Token account is ready for use</p>
              </div>
            </div>

          </div>
          </div>
          <div className="w-full mx-auto h-full text-white relative z-10  items-center gap-5 justify-end hidden max-sm:flex max-sm:pr-[5.5vw] max-md:flex">
                        <span className="text-content-18">Swipe</span>
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

export default SelfService