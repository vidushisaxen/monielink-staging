"use client";
import Copy from "@/components/Animations/Copy";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);

const Diagram = () => {
  const sectionRef = useRef(null);
  const svgContainer = useRef(null);

  useGSAP(() => {
    const svgGroups = [
      ".svgFirst",
      ".svgSecond",
      ".svgThird",
      ".svgFourth",
      ".svgFifth",
    ];

    // Initial states
    gsap.set(svgGroups, { opacity: 0 });

    svgGroups.forEach((group, index) => {
      gsap.set(`${group} .outer-paths`, { scale: 1, opacity: 0 });
      gsap.set(`${group} .center-group`, { scale: 1, opacity: 0 });
      gsap.set(`.line${index + 1}`, { drawSVG: "0%" });
      gsap.set(`.text${index + 1}`, { opacity: 0, y: 10 });
    });

    svgGroups.forEach((group, index) => {
      const outerPaths = `${group} .outer-paths`;
      const centerGroup = `${group} .center-group`;
      const lineSelector = `.line${index + 1}`;
      const textSelector = `.text${index + 1}`; 
      const start = `${index * 20 + 10}% 75%`; 
      const end = `${index * 20 + 30}% center`;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: svgContainer.current,
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
  }, []);
  

  return (
    <>
      <section
        data-theme="orange"
        className="w-screen h-full overflow-hidden bg-gradient relative"
        ref={sectionRef}
      >
        <div className="px-[4vw] py-[7vw] flex flex-col items-center  gap-[10vw] max-sm:pb-[15%] max-sm:px-[5.5vw]">
          <div className="w-[90%] max-md:w-[95%] max-sm:w-full">
            <Copy>
              <h2 className="text-head-100 font-display text-center capitalize max-sm:text-left ">
                Turn Any NFC-Enabled Phone into a Contactless Payment Terminal
              </h2>
            </Copy>
          </div>
            <div className='w-screen  overflow-x-scroll flex flex-col items-center max-sm:items-start  max-sm:pr-[5vw] scrollbar-hidden'>

          <div className="w-[85%] max-md:w-[150%] max-md:pr-[10vw] max-md:translate-x-[20%] max-sm:translate-x-[0%] max-sm:w-[250%]" ref={svgContainer}>
           
            <svg className="h-full w-full" width="1502" height="264" viewBox="0 0 1502 264" fill="none" xmlns="http://www.w3.org/2000/svg">
<g className="svgFirst">
<g className="outer-paths">
<g filter="url(#filter0_f_151_148)">
<path d="M61.077 57.1214L87.6535 30.0009C89.5344 28.0816 92.1086 27 94.7958 27L257.395 27C262.918 27 267.395 31.4772 267.395 37V165.634C267.395 168.273 266.352 170.804 264.494 172.677L234.194 203.216L202.829 234.704C200.952 236.588 198.403 237.647 195.744 237.647H35.0013C29.4785 237.647 25.0014 233.17 25.0013 227.647L25 98.8506C25 96.2753 25.9935 93.7992 27.7737 91.9382L61.077 57.1214Z" fill="#FF5E01"/>
</g>
<path d="M94.7959 27.5H257.396C262.642 27.5001 266.896 31.7534 266.896 37V165.634C266.896 168.14 265.904 170.546 264.139 172.325L233.839 202.863L202.475 234.352C200.692 236.141 198.27 237.147 195.744 237.147H35.001C29.7545 237.147 25.5011 232.894 25.501 227.647L25.5 98.8506C25.5 96.4042 26.4438 94.0521 28.1348 92.2842L61.4336 57.4707L61.4346 57.4717L88.0107 30.3506C89.7975 28.5273 92.2431 27.5 94.7959 27.5Z" fill="#FF5100" stroke="white"/>
<g filter="url(#filter1_f_151_148)">
<path d="M69.822 64.8497L93.3647 40.8252C95.2455 38.9058 97.8197 37.8242 100.507 37.8242L244.934 37.8242C250.457 37.8242 254.934 42.3014 254.934 47.8242V161.786C254.934 164.424 253.892 166.956 252.033 168.829L225.145 195.928L197.305 223.878C195.429 225.762 192.879 226.821 190.22 226.821H47.4543C41.9315 226.821 37.4544 222.343 37.4543 216.821L37.4532 102.702C37.4531 100.127 38.4467 97.6509 40.2268 95.7899L69.822 64.8497Z" fill="#FF833B"/>
</g>
<g filter="url(#filter2_d_151_148)">
<path d="M69.822 64.8497L93.3647 40.8252C95.2455 38.9058 97.8197 37.8242 100.507 37.8242L244.934 37.8242C250.457 37.8242 254.934 42.3014 254.934 47.8242V161.786C254.934 164.424 253.892 166.956 252.033 168.829L225.145 195.928L197.305 223.878C195.429 225.762 192.879 226.821 190.22 226.821H47.4543C41.9315 226.821 37.4544 222.343 37.4543 216.821L37.4532 102.702C37.4531 100.127 38.4467 97.6509 40.2268 95.7899L69.822 64.8497Z" fill="#FF5100"/>
<path d="M100.507 38.3242H244.935C250.181 38.3243 254.435 42.5776 254.435 47.8242V161.786C254.434 164.293 253.443 166.697 251.678 168.477L224.791 195.575L196.951 223.524C195.169 225.314 192.747 226.32 190.221 226.32H47.4541C42.2075 226.32 37.9542 222.067 37.9541 216.82L37.9531 102.702C37.9531 100.256 38.8969 97.9037 40.5879 96.1357L70.1836 65.1953L70.1826 65.1943L93.7217 41.1748C95.5084 39.3515 97.954 38.3243 100.507 38.3242Z" stroke="white"/>
</g>
</g>
<g className="center-group">
<path d="M107.906 128.394H142.32V93.9805H107.906V128.394ZM116.51 102.584H133.716V119.791H116.51V102.584ZM107.906 171.411H142.32V136.997H107.906V171.411ZM116.51 145.601H133.716V162.808H116.51V145.601ZM150.923 93.9805V128.394H185.337V93.9805H150.923ZM176.733 119.791H159.527V102.584H176.733V119.791ZM150.966 136.997H159.57V145.601H150.966V136.997ZM159.57 145.601H168.173V154.204H159.57V145.601ZM150.966 154.204H159.57V162.808H150.966V154.204ZM168.173 154.204H176.776V162.808H168.173V154.204ZM176.776 162.808H185.38V171.411H176.776V162.808ZM159.57 162.808H168.173V171.411H159.57V162.808ZM168.173 136.997H176.776V145.601H168.173V136.997ZM176.776 145.601H185.38V154.204H176.776V145.601Z" fill="white"/>
</g>
</g>
<line x1="267" y1="143.5" x2="327" y2="143.5" stroke="white" className="line1"/>

<g className="svgSecond">
<g className="outer-paths">
<g filter="url(#filter3_f_151_148)">
<path d="M363.077 57.1214L389.654 30.0009C391.534 28.0816 394.109 27 396.796 27L559.395 27C564.918 27 569.395 31.4772 569.395 37V165.634C569.395 168.273 568.352 170.804 566.494 172.677L536.194 203.216L504.829 234.704C502.952 236.588 500.403 237.647 497.744 237.647H337.001C331.479 237.647 327.001 233.17 327.001 227.647L327 98.8506C327 96.2753 327.994 93.7992 329.774 91.9382L363.077 57.1214Z" fill="#FF5E01"/>
</g>
<path d="M396.796 27.5H559.396C564.642 27.5001 568.896 31.7534 568.896 37V165.634C568.896 168.14 567.904 170.546 566.139 172.325L535.839 202.863L504.475 234.352C502.692 236.141 500.27 237.147 497.744 237.147H337.001C331.755 237.147 327.501 232.894 327.501 227.647L327.5 98.8506C327.5 96.4042 328.444 94.0521 330.135 92.2842L363.434 57.4707L363.435 57.4717L390.011 30.3506C391.798 28.5273 394.243 27.5 396.796 27.5Z" stroke="white"/>
<g filter="url(#filter4_f_151_148)">
<path d="M371.822 64.8497L395.365 40.8252C397.246 38.9058 399.82 37.8242 402.507 37.8242L546.934 37.8242C552.457 37.8242 556.934 42.3014 556.934 47.8242V161.786C556.934 164.424 555.892 166.956 554.033 168.829L527.145 195.928L499.305 223.878C497.429 225.762 494.879 226.821 492.22 226.821H349.454C343.932 226.821 339.454 222.343 339.454 216.821L339.453 102.702C339.453 100.127 340.447 97.6509 342.227 95.7899L371.822 64.8497Z" fill="#FF833B"/>
</g>
<g filter="url(#filter5_d_151_148)">
<path d="M371.822 64.8497L395.365 40.8252C397.246 38.9058 399.82 37.8242 402.507 37.8242L546.934 37.8242C552.457 37.8242 556.934 42.3014 556.934 47.8242V161.786C556.934 164.424 555.892 166.956 554.033 168.829L527.145 195.928L499.305 223.878C497.429 225.762 494.879 226.821 492.22 226.821H349.454C343.932 226.821 339.454 222.343 339.454 216.821L339.453 102.702C339.453 100.127 340.447 97.6509 342.227 95.7899L371.822 64.8497Z" fill="#FF5100"/>
<path d="M402.507 38.3242H546.935C552.181 38.3243 556.435 42.5776 556.435 47.8242V161.786C556.434 164.293 555.443 166.697 553.678 168.477L526.791 195.575L498.951 223.524C497.169 225.314 494.747 226.32 492.221 226.32H349.454C344.208 226.32 339.954 222.067 339.954 216.82L339.953 102.702C339.953 100.256 340.897 97.9037 342.588 96.1357L372.184 65.1953L372.183 65.1943L395.722 41.1748C397.508 39.3515 399.954 38.3243 402.507 38.3242Z" stroke="white"/>
</g>
</g>
<g className="center-group">
<path d="M461.017 94.2148H486.67V115.592H478.119V102.766H461.017V94.2148ZM435.364 94.2148V102.766H418.262V115.592H409.711V94.2148H435.364ZM461.017 171.174V162.623H478.119V149.796H486.67V171.174H461.017ZM435.364 171.174H409.711V149.796H418.262V162.623H435.364V171.174ZM409.711 128.419H486.67V136.97H409.711V128.419Z" fill="white"/>
</g>
</g>
<line x1="569" y1="143.5" x2="629" y2="143.5" stroke="white" className="line2"/>

<g className="svgThird">
<g className="outer-paths">
<g filter="url(#filter6_f_151_148)">
<path d="M665.077 57.1214L691.654 30.0009C693.534 28.0816 696.109 27 698.796 27L861.395 27C866.918 27 871.395 31.4772 871.395 37V165.634C871.395 168.273 870.352 170.804 868.494 172.677L838.194 203.216L806.829 234.704C804.952 236.588 802.403 237.647 799.744 237.647H639.001C633.479 237.647 629.001 233.17 629.001 227.647L629 98.8506C629 96.2753 629.994 93.7992 631.774 91.9382L665.077 57.1214Z" fill="#FF5E01"/>
</g>
<path d="M699.187 27.5H861.786C867.033 27.5001 871.286 31.7534 871.286 37V165.634C871.286 168.14 870.295 170.546 868.529 172.325L838.229 202.863L806.865 234.352C805.083 236.141 802.661 237.147 800.135 237.147H639.392C634.145 237.147 629.892 232.894 629.892 227.647L629.891 98.8506C629.891 96.4042 630.834 94.0521 632.525 92.2842L665.824 57.4707L665.825 57.4717L692.401 30.3506C694.188 28.5273 696.634 27.5 699.187 27.5Z" stroke="white"/>
<g filter="url(#filter7_f_151_148)">
<path d="M673.822 64.8497L697.365 40.8252C699.246 38.9058 701.82 37.8242 704.507 37.8242L848.934 37.8242C854.457 37.8242 858.934 42.3014 858.934 47.8242V161.786C858.934 164.424 857.892 166.956 856.033 168.829L829.145 195.928L801.305 223.878C799.429 225.762 796.879 226.821 794.22 226.821H651.454C645.932 226.821 641.454 222.343 641.454 216.821L641.453 102.702C641.453 100.127 642.447 97.6509 644.227 95.7899L673.822 64.8497Z" fill="#FF833B"/>
</g>
<g filter="url(#filter8_d_151_148)">
<path d="M674.22 64.8497L697.763 40.8252C699.644 38.9058 702.218 37.8242 704.905 37.8242L849.333 37.8242C854.856 37.8242 859.333 42.3014 859.333 47.8242V161.786C859.333 164.424 858.29 166.956 856.432 168.829L829.544 195.928L801.704 223.878C799.827 225.762 797.278 226.821 794.619 226.821H651.853C646.33 226.821 641.853 222.343 641.853 216.821L641.852 102.702C641.852 100.127 642.845 97.6509 644.625 95.7899L674.22 64.8497Z" fill="#FF5100"/>
<path d="M704.905 38.3242H849.333C854.58 38.3243 858.833 42.5776 858.833 47.8242V161.786C858.833 164.293 857.842 166.697 856.076 168.477L829.189 195.575L801.35 223.524C799.567 225.314 797.145 226.32 794.619 226.32H651.853C646.606 226.32 642.353 222.067 642.353 216.82L642.352 102.702C642.352 100.256 643.295 97.9037 644.986 96.1357L674.582 65.1953L674.581 65.1943L698.12 41.1748C699.907 39.3515 702.352 38.3243 704.905 38.3242Z" stroke="white"/>
</g>
</g>
<g className="center-group">
<path d="M718.303 165.341C716.058 165.341 714.137 164.542 712.54 162.945C710.943 161.348 710.143 159.426 710.141 157.179V108.205C710.141 105.961 710.941 104.04 712.54 102.443C714.14 100.846 716.061 100.046 718.303 100.043H783.601C785.845 100.043 787.768 100.843 789.367 102.443C790.967 104.042 791.766 105.963 791.763 108.205V157.179C791.763 159.423 790.965 161.346 789.367 162.945C787.77 164.545 785.848 165.344 783.601 165.341H718.303ZM728.506 144.935H733.199V120.449H729.526L722.384 125.55L724.833 129.223L728.506 126.57V144.935ZM741.157 144.935H757.074V140.854H747.483L747.279 140.65C748.707 139.29 749.881 138.133 750.801 137.181C751.72 136.229 752.451 135.481 752.992 134.937C754.217 133.712 755.135 132.488 755.747 131.264C756.359 130.039 756.665 128.747 756.665 127.386C756.665 125.414 755.917 123.764 754.421 122.436C752.924 121.108 751.02 120.446 748.707 120.449C746.939 120.449 745.34 120.959 743.912 121.979C742.484 122.999 741.497 124.326 740.953 125.958L745.034 127.591C745.374 126.706 745.868 126.008 746.516 125.497C747.163 124.985 747.894 124.731 748.707 124.734C749.728 124.734 750.561 125.006 751.209 125.55C751.857 126.094 752.179 126.774 752.176 127.591C752.176 128.339 752.04 129.037 751.768 129.684C751.496 130.332 750.884 131.13 749.932 132.08L746.667 135.345L741.157 140.854V144.935ZM771.357 144.935C773.806 144.935 775.779 144.255 777.275 142.895C778.772 141.534 779.52 139.766 779.52 137.589C779.52 136.365 779.18 135.277 778.499 134.324C777.819 133.372 776.867 132.624 775.643 132.08V131.876C776.595 131.332 777.343 130.634 777.887 129.782C778.431 128.931 778.704 127.928 778.704 126.774C778.704 124.938 777.989 123.424 776.561 122.232C775.133 121.04 773.33 120.446 771.153 120.449C769.453 120.449 767.872 120.942 766.411 121.93C764.95 122.918 764.014 124.124 763.603 125.55L767.684 127.182C767.957 126.366 768.399 125.72 769.011 125.244C769.623 124.768 770.337 124.53 771.153 124.53C772.038 124.53 772.77 124.785 773.349 125.297C773.929 125.808 774.217 126.437 774.214 127.182C774.214 128.135 773.874 128.883 773.194 129.427C772.514 129.971 771.63 130.243 770.541 130.243H768.705V134.324H770.745C772.106 134.324 773.16 134.596 773.908 135.141C774.656 135.685 775.03 136.433 775.03 137.385C775.03 138.269 774.656 139.035 773.908 139.683C773.16 140.33 772.31 140.653 771.357 140.65C770.201 140.65 769.317 140.396 768.705 139.887C768.093 139.378 767.548 138.476 767.072 137.181L762.991 138.814C763.467 140.786 764.437 142.3 765.901 143.356C767.365 144.412 769.184 144.938 771.357 144.935ZM718.303 157.179H783.601V108.205H718.303V157.179Z" fill="white"/>
</g>
</g>
<line x1="872" y1="143.5" x2="932" y2="143.5" stroke="white" className="line3"/>

<g className="svgFourth">
<g className="outer-paths">
<g filter="url(#filter9_f_151_148)">
<path d="M968.077 57.1214L994.654 30.0009C996.534 28.0816 999.109 27 1001.8 27L1164.4 27C1169.92 27 1174.4 31.4772 1174.4 37V165.634C1174.4 168.273 1173.35 170.804 1171.49 172.677L1141.19 203.216L1109.83 234.704C1107.95 236.588 1105.4 237.647 1102.74 237.647H942.001C936.479 237.647 932.001 233.17 932.001 227.647L932 98.8506C932 96.2753 932.994 93.7992 934.774 91.9382L968.077 57.1214Z" fill="#FF5E01"/>
</g>
<path d="M1001.8 27.5H1164.4C1169.64 27.5001 1173.9 31.7534 1173.9 37V165.634C1173.9 168.14 1172.9 170.546 1171.14 172.325L1140.84 202.863L1109.47 234.352C1107.69 236.141 1105.27 237.147 1102.74 237.147H942.001C936.755 237.147 932.501 232.894 932.501 227.647L932.5 98.8506C932.5 96.4042 933.444 94.0521 935.135 92.2842L968.434 57.4707L968.435 57.4717L995.011 30.3506C996.798 28.5273 999.243 27.5 1001.8 27.5Z" stroke="white"/>
<g filter="url(#filter10_f_151_148)">
<path d="M976.822 64.8497L1000.36 40.8252C1002.25 38.9058 1004.82 37.8242 1007.51 37.8242L1151.93 37.8242C1157.46 37.8242 1161.93 42.3014 1161.93 47.8242V161.786C1161.93 164.424 1160.89 166.956 1159.03 168.829L1132.15 195.928L1104.31 223.878C1102.43 225.762 1099.88 226.821 1097.22 226.821H954.454C948.932 226.821 944.454 222.343 944.454 216.821L944.453 102.702C944.453 100.127 945.447 97.6509 947.227 95.7899L976.822 64.8497Z" fill="#FF833B"/>
</g>
<g filter="url(#filter11_d_151_148)">
<path d="M976.822 64.8497L1000.36 40.8252C1002.25 38.9058 1004.82 37.8242 1007.51 37.8242L1151.93 37.8242C1157.46 37.8242 1161.93 42.3014 1161.93 47.8242V161.786C1161.93 164.424 1160.89 166.956 1159.03 168.829L1132.15 195.928L1104.31 223.878C1102.43 225.762 1099.88 226.821 1097.22 226.821H954.454C948.932 226.821 944.454 222.343 944.454 216.821L944.453 102.702C944.453 100.127 945.447 97.6509 947.227 95.7899L976.822 64.8497Z" fill="#FF5100"/>
<path d="M1007.51 38.3242H1151.93C1157.18 38.3243 1161.43 42.5776 1161.43 47.8242V161.786C1161.43 164.293 1160.44 166.697 1158.68 168.477L1131.79 195.575L1103.95 223.524C1102.17 225.314 1099.75 226.32 1097.22 226.32H954.454C949.208 226.32 944.954 222.067 944.954 216.82L944.953 102.702C944.953 100.256 945.897 97.9037 947.588 96.1357L977.184 65.1953L977.183 65.1943L1000.72 41.1748C1002.51 39.3515 1004.95 38.3243 1007.51 38.3242Z" stroke="white"/>
</g>
</g>
<g className="center-group">
<path d="M1020.3 165.341C1018.06 165.341 1016.14 164.542 1014.54 162.945C1012.94 161.348 1012.14 159.426 1012.14 157.179V108.205C1012.14 105.961 1012.94 104.04 1014.54 102.443C1016.14 100.846 1018.06 100.046 1020.3 100.043H1085.6C1087.85 100.043 1089.77 100.843 1091.37 102.443C1092.97 104.042 1093.77 105.963 1093.76 108.205V157.179C1093.76 159.423 1092.96 161.346 1091.37 162.945C1089.77 164.545 1087.85 165.344 1085.6 165.341H1020.3ZM1030.51 144.935H1035.2V120.449H1031.53L1024.38 125.55L1026.83 129.223L1030.51 126.57V144.935ZM1043.16 144.935H1059.07V140.854H1049.48L1049.28 140.65C1050.71 139.29 1051.88 138.133 1052.8 137.181C1053.72 136.229 1054.45 135.481 1054.99 134.937C1056.22 133.712 1057.14 132.488 1057.75 131.264C1058.36 130.039 1058.67 128.747 1058.67 127.386C1058.67 125.414 1057.92 123.764 1056.42 122.436C1054.92 121.108 1053.02 120.446 1050.71 120.449C1048.94 120.449 1047.34 120.959 1045.91 121.979C1044.48 122.999 1043.5 124.326 1042.95 125.958L1047.03 127.591C1047.37 126.706 1047.87 126.008 1048.52 125.497C1049.16 124.985 1049.89 124.731 1050.71 124.734C1051.73 124.734 1052.56 125.006 1053.21 125.55C1053.86 126.094 1054.18 126.774 1054.18 127.591C1054.18 128.339 1054.04 129.037 1053.77 129.684C1053.5 130.332 1052.88 131.13 1051.93 132.08L1048.67 135.345L1043.16 140.854V144.935ZM1073.36 144.935C1075.81 144.935 1077.78 144.255 1079.28 142.895C1080.77 141.534 1081.52 139.766 1081.52 137.589C1081.52 136.365 1081.18 135.277 1080.5 134.324C1079.82 133.372 1078.87 132.624 1077.64 132.08V131.876C1078.59 131.332 1079.34 130.634 1079.89 129.782C1080.43 128.931 1080.7 127.928 1080.7 126.774C1080.7 124.938 1079.99 123.424 1078.56 122.232C1077.13 121.04 1075.33 120.446 1073.15 120.449C1071.45 120.449 1069.87 120.942 1068.41 121.93C1066.95 122.918 1066.01 124.124 1065.6 125.55L1069.68 127.182C1069.96 126.366 1070.4 125.72 1071.01 125.244C1071.62 124.768 1072.34 124.53 1073.15 124.53C1074.04 124.53 1074.77 124.785 1075.35 125.297C1075.93 125.808 1076.22 126.437 1076.21 127.182C1076.21 128.135 1075.87 128.883 1075.19 129.427C1074.51 129.971 1073.63 130.243 1072.54 130.243H1070.7V134.324H1072.75C1074.11 134.324 1075.16 134.596 1075.91 135.141C1076.66 135.685 1077.03 136.433 1077.03 137.385C1077.03 138.269 1076.66 139.035 1075.91 139.683C1075.16 140.33 1074.31 140.653 1073.36 140.65C1072.2 140.65 1071.32 140.396 1070.7 139.887C1070.09 139.378 1069.55 138.476 1069.07 137.181L1064.99 138.814C1065.47 140.786 1066.44 142.3 1067.9 143.356C1069.36 144.412 1071.18 144.938 1073.36 144.935ZM1020.3 157.179H1085.6V108.205H1020.3V157.179Z" fill="white"/>
</g>
</g>
<line x1="1175" y1="143.5" x2="1235" y2="143.5" stroke="white" className="line4"/>

<g className="svgFifth">
<g className="outer-paths">
<g filter="url(#filter12_f_151_148)">
<path d="M1271.08 57.1214L1297.65 30.0009C1299.53 28.0816 1302.11 27 1304.8 27L1467.4 27C1472.92 27 1477.4 31.4772 1477.4 37V165.634C1477.4 168.273 1476.35 170.804 1474.49 172.677L1444.19 203.216L1412.83 234.704C1410.95 236.588 1408.4 237.647 1405.74 237.647H1245C1239.48 237.647 1235 233.17 1235 227.647L1235 98.8506C1235 96.2753 1235.99 93.7992 1237.77 91.9382L1271.08 57.1214Z" fill="#FF5E01"/>
</g>
<path d="M1304.41 27.5H1467C1472.25 27.5001 1476.5 31.7534 1476.5 37V165.634C1476.5 168.14 1475.51 170.546 1473.75 172.325L1443.45 202.863L1412.08 234.352C1410.3 236.141 1407.88 237.147 1405.35 237.147H1244.61C1239.36 237.147 1235.11 232.894 1235.11 227.647L1235.11 98.8506C1235.11 96.4042 1236.05 94.0521 1237.74 92.2842L1271.04 57.4707L1271.04 57.4717L1297.62 30.3506C1299.41 28.5273 1301.85 27.5 1304.41 27.5Z" stroke="white"/>
<g filter="url(#filter13_f_151_148)">
<path d="M1279.83 64.8497L1303.37 40.8252C1305.25 38.9058 1307.83 37.8242 1310.51 37.8242L1454.94 37.8242C1460.47 37.8242 1464.94 42.3014 1464.94 47.8242V161.786C1464.94 164.424 1463.9 166.956 1462.04 168.829L1435.15 195.928L1407.31 223.878C1405.44 225.762 1402.89 226.821 1400.23 226.821H1257.46C1251.94 226.821 1247.46 222.343 1247.46 216.821L1247.46 102.702C1247.46 100.127 1248.45 97.6509 1250.23 95.7899L1279.83 64.8497Z" fill="#FF833B"/>
</g>
<g filter="url(#filter14_d_151_148)">
<path d="M1279.43 64.8497L1302.97 40.8252C1304.85 38.9058 1307.43 37.8242 1310.12 37.8242L1454.54 37.8242C1460.07 37.8242 1464.54 42.3014 1464.54 47.8242V161.786C1464.54 164.424 1463.5 166.956 1461.64 168.829L1434.75 195.928L1406.91 223.878C1405.04 225.762 1402.49 226.821 1399.83 226.821H1257.06C1251.54 226.821 1247.06 222.343 1247.06 216.821L1247.06 102.702C1247.06 100.127 1248.06 97.6509 1249.84 95.7899L1279.43 64.8497Z" fill="#FF5100"/>
<path d="M1310.12 38.3242H1454.54C1459.79 38.3243 1464.04 42.5776 1464.04 47.8242V161.786C1464.04 164.293 1463.05 166.697 1461.29 168.477L1434.4 195.575L1406.56 223.524C1404.78 225.314 1402.36 226.32 1399.83 226.32H1257.06C1251.82 226.32 1247.56 222.067 1247.56 216.82L1247.56 102.702C1247.56 100.256 1248.51 97.9037 1250.2 96.1357L1279.79 65.1953L1279.79 65.1943L1303.33 41.1748C1305.12 39.3515 1307.56 38.3243 1310.12 38.3242Z" stroke="white"/>
</g>
</g>
<g className="center-group">
<circle cx="1355.52" cy="132.517" r="38.017" stroke="white"/>
<path d="M1368.21 117.333C1367.59 116.986 1366.9 116.766 1366.19 116.684C1365.48 116.602 1364.77 116.661 1364.08 116.858C1363.39 117.054 1362.75 117.383 1362.19 117.828C1361.63 118.272 1361.17 118.822 1360.82 119.446L1350.72 137.616L1344.94 131.838C1344.44 131.318 1343.84 130.904 1343.18 130.619C1342.52 130.334 1341.8 130.184 1341.08 130.177C1340.36 130.171 1339.64 130.309 1338.97 130.582C1338.3 130.856 1337.7 131.26 1337.19 131.77C1336.68 132.281 1336.27 132.888 1336 133.556C1335.73 134.225 1335.59 134.941 1335.59 135.663C1335.6 136.385 1335.75 137.099 1336.04 137.762C1336.32 138.426 1336.73 139.026 1337.25 139.527L1348.13 150.404C1349.16 151.435 1350.55 152.001 1351.98 152.001L1352.73 151.946C1353.56 151.83 1354.36 151.521 1355.05 151.045C1355.75 150.569 1356.32 149.938 1356.73 149.202L1370.33 124.73C1370.67 124.105 1370.89 123.419 1370.97 122.709C1371.06 122 1371 121.281 1370.8 120.594C1370.61 119.908 1370.28 119.266 1369.83 118.707C1369.39 118.147 1368.84 117.68 1368.21 117.333Z" fill="white"/>
</g>
</g>
<defs>
<filter id="filter0_f_151_148" x="17" y="19" width="258.398" height="226.648" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_151_148"/>
</filter>
<filter id="filter1_f_151_148" x="0.553123" y="0.924217" width="291.284" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_151_148"/>
</filter>
<filter id="filter2_d_151_148" x="11.7531" y="13.1242" width="274.884" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="4"/>
<feGaussianBlur stdDeviation="14.35"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_151_148"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_151_148" result="shape"/>
</filter>
<filter id="filter3_f_151_148" x="319" y="19" width="258.398" height="226.648" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_151_148"/>
</filter>
<filter id="filter4_f_151_148" x="302.553" y="0.924217" width="291.284" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_151_148"/>
</filter>
<filter id="filter5_d_151_148" x="313.753" y="13.1242" width="274.884" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="4"/>
<feGaussianBlur stdDeviation="14.35"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_151_148"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_151_148" result="shape"/>
</filter>
<filter id="filter6_f_151_148" x="621" y="19" width="258.398" height="226.648" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_151_148"/>
</filter>
<filter id="filter7_f_151_148" x="604.553" y="0.924217" width="291.284" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_151_148"/>
</filter>
<filter id="filter8_d_151_148" x="616.152" y="13.1242" width="274.884" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="4"/>
<feGaussianBlur stdDeviation="14.35"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_151_148"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_151_148" result="shape"/>
</filter>
<filter id="filter9_f_151_148" x="924" y="19" width="258.398" height="226.648" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_151_148"/>
</filter>
<filter id="filter10_f_151_148" x="907.553" y="0.924217" width="291.284" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_151_148"/>
</filter>
<filter id="filter11_d_151_148" x="918.753" y="13.1242" width="274.884" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="4"/>
<feGaussianBlur stdDeviation="14.35"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_151_148"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_151_148" result="shape"/>
</filter>
<filter id="filter12_f_151_148" x="1227" y="19" width="258.398" height="226.648" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_151_148"/>
</filter>
<filter id="filter13_f_151_148" x="1210.56" y="0.924217" width="291.284" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_151_148"/>
</filter>
<filter id="filter14_d_151_148" x="1221.36" y="13.1242" width="274.884" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="4"/>
<feGaussianBlur stdDeviation="14.35"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_151_148"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_151_148" result="shape"/>
</filter>
</defs>
</svg>

            <div className="w-full flex items-start justify-between py-[2vw] max-sm:px-[5vw] max-sm:justify-start max-sm:gap-[15vw]">
              <div className=" w-[18%] overflow-hidden max-sm:w-[18%]">
                <p className="font-medium text-content-24 font-body  text-center text1 textanim max-md:text-content-20  max-sm:text-content-20 max-sm:text-left">
                  Open the Mobile App
                </p>
              </div>
              <div className=" w-[15%] overflow-hidden max-sm:w-[18%]">
                <p className="font-medium text-content-24 font-body  text-center text2 textanim max-md:text-content-20  max-sm:text-content-20 max-sm:text-left ">
                  Enter Payment Amount
                </p>
              </div>{" "}
              <div className=" w-[15%] overflow-hidden max-sm:w-[18%]">
                <p className="font-medium text-content-24 font-body  text-center text3 textanim max-md:text-content-20  max-sm:text-content-20 max-sm:text-left ">
                  Offer Phone to Customer to Tap
                </p>
              </div>{" "}
              <div className=" w-[18%] overflow-hidden max-sm:w-[18%]">
                <p className="font-medium text-content-24 font-body  text-center text4 textanim max-md:text-content-20  max-sm:text-content-20 max-sm:text-left ">
                  Enter Pin
                </p>
              </div>{" "}
              <div className=" w-[18%] overflow-hidden max-sm:w-[18%]">
                <p className="font-medium text-content-24 font-body  text-center text5 textanim max-md:text-content-20  max-sm:text-content-20 max-sm:text-left ">
                  Transaction Completed
                </p>
              </div>
            </div>
          </div>
        </div>
          <div className="w-full mx-auto max-md:flex h-full text-white relative z-10  items-center gap-5 justify-end hidden max-sm:flex">
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
  );
};

export default Diagram;
