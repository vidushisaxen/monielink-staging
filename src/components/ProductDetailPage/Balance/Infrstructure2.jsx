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
                       <svg className='h-full w-full' width="1441" height="2609" viewBox="0 0 1441 2609" fill="none" xmlns="http://www.w3.org/2000/svg" ref={svgRef}>
                       <g className='svgFirst'>
                        <g className='center-group'>
<g filter="url(#filter0_f_191_208)">
<path d="M435.147 147.647L461.724 120.526C463.605 118.607 466.179 117.525 468.866 117.525L631.466 117.525C636.989 117.525 641.466 122.003 641.466 127.525V256.16C641.466 258.798 640.423 261.33 638.564 263.203L608.264 293.741L576.899 325.23C575.023 327.114 572.473 328.173 569.814 328.173H409.072C403.549 328.173 399.072 323.696 399.072 318.173L399.07 189.376C399.07 186.801 400.064 184.325 401.844 182.464L435.147 147.647Z" fill="#FF5E01"/>
</g>
<path d="M468.866 118.025H631.466C636.713 118.025 640.966 122.279 640.966 127.525V256.159C640.966 258.666 639.975 261.071 638.209 262.851L607.909 293.389L576.545 324.877C574.762 326.667 572.34 327.673 569.815 327.673H409.071C403.825 327.673 399.572 323.419 399.571 318.173L399.57 189.376C399.57 186.93 400.514 184.578 402.205 182.81L435.504 147.996L435.505 147.997L462.081 120.876C463.868 119.053 466.313 118.025 468.866 118.025Z" fill="#FF5100" stroke="white"/>
<g filter="url(#filter1_f_191_208)">
<path d="M443.896 155.377L467.439 131.352C469.32 129.433 471.894 128.351 474.581 128.351L619.009 128.351C624.531 128.351 629.009 132.828 629.009 138.351V252.313C629.009 254.951 627.966 257.483 626.107 259.356L599.219 286.455L571.38 314.405C569.503 316.288 566.954 317.347 564.295 317.347H421.528C416.006 317.347 411.529 312.87 411.528 307.347L411.527 193.229C411.527 190.654 412.521 188.178 414.301 186.317L443.896 155.377Z" fill="#FF833B"/>
</g>
<g filter="url(#filter2_d_191_208)">
<path d="M443.896 155.376L467.439 131.352C469.32 129.432 471.894 128.351 474.581 128.351L619.009 128.351C624.532 128.351 629.009 132.828 629.009 138.351V252.312C629.009 254.951 627.966 257.482 626.107 259.355L599.22 286.455L571.38 314.404C569.503 316.288 566.954 317.347 564.295 317.347H421.529C416.006 317.347 411.529 312.87 411.529 307.347L411.527 193.229C411.527 190.653 412.521 188.177 414.301 186.316L443.896 155.376Z" fill="#FF5100"/>
<path d="M474.581 128.851H619.009C624.255 128.851 628.509 133.104 628.509 138.351V252.312C628.509 254.819 627.517 257.224 625.752 259.003L598.865 286.102L571.025 314.051C569.243 315.84 566.821 316.847 564.295 316.847H421.528C416.282 316.847 412.028 312.593 412.028 307.347L412.027 193.229C412.027 190.782 412.971 188.43 414.662 186.662L444.258 155.722L444.257 155.721L467.796 131.701C469.583 129.878 472.028 128.851 474.581 128.851Z" stroke="white"/>
</g>
</g>
<path d="M140.07 0.396484H129.458L147.458 27.8575H158.07L140.07 0.396484Z" fill="white" className='rect'/>
<path d="M125.764 0.396484H115.152L133.152 27.8575H143.764L125.764 0.396484Z" fill="white"  className='rect'/>
<path d="M111.457 0.396484H100.845L118.845 27.8575H129.457L111.457 0.396484Z" fill="white"  className='rect'/>
<path d="M97.1504 0.396484H86.5383L104.538 27.8575H115.15L97.1504 0.396484Z" fill="white"  className='rect'/>
<path d="M428.039 141.896L316.716 28.0993C315.963 27.3301 314.933 26.8965 313.856 26.8965H153.039" stroke="white" strokeWidth="2" strokeLinecap="round"  className='path-line'/>
<path d="M1105.54 64.3965H1116.15L1098.15 91.8575H1087.54L1105.54 64.3965Z" fill="white"  className='rect'/>
<path d="M1119.85 64.3965H1130.46L1112.46 91.8575H1101.85L1119.85 64.3965Z" fill="white"  className='rect'/>
<path d="M1134.15 64.3965H1144.76L1126.76 91.8575H1116.15L1134.15 64.3965Z" fill="white"  className='rect'/>
<path d="M1148.46 64.3965H1159.07L1141.07 91.8575H1130.46L1148.46 64.3965Z" fill="white"  className='rect'/>
<path d="M652.039 205.875L764.865 92.0585C765.617 91.3007 766.639 90.8745 767.706 90.8745H1094.04" stroke="white" strokeWidth="2" strokeLinecap="round"  className='path-line'/>
<path d="M54.0703 300.396H43.4583L61.4583 327.857H72.0703L54.0703 300.396Z" fill="white"  className='rect'/>
<path d="M39.7637 300.396H29.1516L47.1516 327.857H57.7637L39.7637 300.396Z" fill="white"  className='rect'/>
<path d="M25.457 300.396H14.845L32.845 327.857H43.457L25.457 300.396Z" fill="white"  className='rect'/>
<path d="M11.1504 300.396H0.538338L18.5383 327.857H29.1504L11.1504 300.396Z" fill="white"  className='rect'/>
<path d="M389.039 268.359L239.74 326.586C239.277 326.766 238.784 326.859 238.287 326.859H67.5391" stroke="white" strokeWidth="2" strokeLinecap="round"  className='path-line'/>
</g>
<g className='svgSecond'>
    <g className='center-group'>
<g filter="url(#filter3_f_191_208)">
<path d="M586.147 598.595L612.724 571.475C614.605 569.555 617.179 568.474 619.866 568.474L782.466 568.474C787.989 568.474 792.466 572.951 792.466 578.474V707.108C792.466 709.746 791.423 712.278 789.564 714.151L759.264 744.69L727.899 776.178C726.023 778.062 723.473 779.121 720.814 779.121H560.072C554.549 779.121 550.072 774.644 550.072 769.121L550.07 640.324C550.07 637.749 551.064 635.273 552.844 633.412L586.147 598.595Z" fill="#FF5E01"/>
</g>
<path d="M619.866 568.974H782.466C787.713 568.974 791.966 573.227 791.966 578.474V707.107C791.966 709.614 790.975 712.019 789.209 713.799L758.909 744.337L727.545 775.825C725.762 777.615 723.34 778.621 720.815 778.621H560.071C554.825 778.621 550.571 774.368 550.571 769.121L550.57 640.324C550.57 637.878 551.514 635.526 553.205 633.758L586.504 598.944L586.505 598.945L613.081 571.824C614.868 570.001 617.313 568.974 619.866 568.974Z" fill="#FF5100" stroke="white"/>
<g filter="url(#filter4_f_191_208)">
<path d="M594.896 606.325L618.439 582.3C620.32 580.381 622.894 579.299 625.581 579.299L770.008 579.299C775.531 579.299 780.008 583.776 780.008 589.299V703.261C780.008 705.899 778.966 708.431 777.107 710.304L750.219 737.403L722.379 765.353C720.503 767.237 717.953 768.296 715.295 768.296H572.528C567.006 768.296 562.528 763.819 562.528 758.296L562.527 644.177C562.527 641.602 563.521 639.126 565.301 637.265L594.896 606.325Z" fill="#FF833B"/>
</g>
<g filter="url(#filter5_d_191_208)">
<path d="M594.896 606.324L618.439 582.3C620.32 580.38 622.894 579.299 625.581 579.299L770.009 579.299C775.532 579.299 780.009 583.776 780.009 589.299V703.26C780.009 705.899 778.966 708.431 777.107 710.304L750.22 737.403L722.38 765.352C720.503 767.236 717.954 768.295 715.295 768.295H572.529C567.006 768.295 562.529 763.818 562.529 758.295L562.527 644.177C562.527 641.602 563.521 639.125 565.301 637.264L594.896 606.324Z" fill="#FF5100"/>
<path d="M625.581 579.799H770.009C775.255 579.799 779.509 584.052 779.509 589.299V703.261C779.509 705.767 778.517 708.172 776.752 709.951L749.865 737.05L722.025 764.999C720.243 766.789 717.821 767.795 715.295 767.795H572.528C567.282 767.795 563.028 763.542 563.028 758.295L563.027 644.177C563.027 641.73 563.971 639.378 565.662 637.61L595.258 606.67L595.257 606.669L618.796 582.649C620.583 580.826 623.028 579.799 625.581 579.799Z" stroke="white"/>
</g>
</g>
<path d="M1121.08 697.19H1131.69L1113.69 724.651H1103.08L1121.08 697.19Z" fill="white"  className='rect'/>
<path d="M1135.39 697.19H1146L1128 724.651H1117.39L1135.39 697.19Z" fill="white"  className='rect'/>
<path d="M1149.7 697.19H1160.31L1142.31 724.651H1131.7L1149.7 697.19Z" fill="white"  className='rect'/>
<path d="M1164 697.19H1174.61L1156.61 724.651H1146L1164 697.19Z" fill="white"  className='rect'/>
<path d="M809.615 679.916L921.919 723.377C922.379 723.555 922.869 723.646 923.362 723.646H1108.21" stroke="white" strokeWidth="2" strokeLinecap="round"  className='path-line'/>
<path d="M1089.87 445.96H1100.48L1082.48 473.421H1071.87L1089.87 445.96Z" fill="white"  className='rect'/>
<path d="M1104.17 445.96H1114.78L1096.78 473.421H1086.17L1104.17 445.96Z" fill="white"  className='rect'/>
<path d="M1118.48 445.96H1129.09L1111.09 473.421H1100.48L1118.48 445.96Z" fill="white"  className='rect'/>
<path d="M1132.79 445.96H1143.4L1125.4 473.421H1114.79L1132.79 445.96Z" fill="white"  className='rect'/>
<path d="M803.115 581.128L909.441 473.605C910.192 472.846 911.217 472.418 912.285 472.418H1078.62" stroke="white" strokeWidth="2" strokeLinecap="round"  className='path-line'/>
<path d="M288.145 737.008H277.532L295.532 764.469H306.145L288.145 737.008Z" fill="white"  className='rect'/>
<path d="M273.838 737.008H263.226L281.226 764.469H291.838L273.838 737.008Z" fill="white"  className='rect'/>
<path d="M259.531 737.008H248.919L266.919 764.469H277.531L259.531 737.008Z" fill="white"  className='rect'/>
<path d="M245.225 737.008H234.613L252.613 764.469H263.225L245.225 737.008Z" fill="white"  className='rect'/>
<path d="M537.613 709.991L399.307 763.224C398.848 763.4 398.361 763.491 397.87 763.491H301.613" stroke="white" strokeWidth="2" strokeLinecap="round"  className='path-line'/>
<path d="M141.145 537.008H130.533L148.533 564.469H159.145L141.145 537.008Z" fill="white"  className='rect'/>
<path d="M126.838 537.008H116.226L134.226 564.469H144.838L126.838 537.008Z" fill="white"  className='rect'/>
<path d="M112.531 537.008H101.919L119.919 564.469H130.531L112.531 537.008Z" fill="white"  className='rect'/>
<path d="M98.2246 537.008H87.6126L105.613 564.469H116.225L98.2246 537.008Z" fill="white"  className='rect'/>
<path d="M539.018 661.405L294.828 563.763C294.356 563.574 293.852 563.477 293.343 563.477H154.613" stroke="white" strokeWidth="2" strokeLinecap="round"  className='path-line'/>
</g>
<g className='svgThird'>
    <g className='center-group'>
<g filter="url(#filter6_f_191_208)">
<path d="M751.515 1049.54L778.091 1022.42C779.972 1020.5 782.546 1019.42 785.233 1019.42L947.833 1019.42C953.356 1019.42 957.833 1023.9 957.833 1029.42V1158.06C957.833 1160.69 956.79 1163.23 954.932 1165.1L924.631 1195.64L893.266 1227.13C891.39 1229.01 888.84 1230.07 886.181 1230.07H725.439C719.916 1230.07 715.439 1225.59 715.439 1220.07L715.438 1091.27C715.438 1088.7 716.431 1086.22 718.211 1084.36L751.515 1049.54Z" fill="#FF5E01"/>
</g>
<path d="M785.233 1019.92H947.833C953.08 1019.92 957.333 1024.18 957.333 1029.42V1158.06C957.333 1160.56 956.342 1162.97 954.576 1164.75L924.276 1195.29L892.912 1226.77C891.13 1228.56 888.708 1229.57 886.182 1229.57H725.439C720.192 1229.57 715.939 1225.32 715.939 1220.07L715.938 1091.27C715.938 1088.83 716.881 1086.47 718.572 1084.71L751.871 1049.89L751.872 1049.89L778.448 1022.77C780.235 1020.95 782.681 1019.92 785.233 1019.92Z" fill="#FF5100" stroke="white"/>
<g filter="url(#filter7_f_191_208)">
<path d="M760.263 1057.27L783.806 1033.25C785.687 1031.33 788.261 1030.25 790.948 1030.25L935.376 1030.25C940.899 1030.25 945.376 1034.72 945.376 1040.25V1154.21C945.376 1156.85 944.333 1159.38 942.474 1161.25L915.587 1188.35L887.747 1216.3C885.87 1218.18 883.321 1219.24 880.662 1219.24H737.896C732.373 1219.24 727.896 1214.77 727.896 1209.24L727.894 1095.13C727.894 1092.55 728.888 1090.07 730.668 1088.21L760.263 1057.27Z" fill="#FF833B"/>
</g>
<g filter="url(#filter8_d_191_208)">
<path d="M760.264 1057.27L783.806 1033.25C785.687 1031.33 788.261 1030.25 790.948 1030.25L935.376 1030.25C940.899 1030.25 945.376 1034.72 945.376 1040.25V1154.21C945.376 1156.85 944.333 1159.38 942.475 1161.25L915.587 1188.35L887.747 1216.3C885.87 1218.18 883.321 1219.24 880.662 1219.24H737.896C732.373 1219.24 727.896 1214.77 727.896 1209.24L727.895 1095.13C727.895 1092.55 728.888 1090.07 730.668 1088.21L760.264 1057.27Z" fill="#FF5100"/>
<path d="M790.948 1030.75H935.376C940.623 1030.75 944.876 1035 944.876 1040.25V1154.21C944.876 1156.72 943.885 1159.12 942.119 1160.9L915.232 1188L887.393 1215.95C885.61 1217.74 883.188 1218.74 880.662 1218.74H737.896C732.649 1218.74 728.396 1214.49 728.396 1209.24L728.395 1095.12C728.395 1092.68 729.338 1090.33 731.029 1088.56L760.625 1057.62L760.624 1057.62L784.163 1033.6C785.95 1031.77 788.395 1030.75 790.948 1030.75Z" stroke="white"/>
</g>
</g>
<path d="M1232.91 1251.53H1243.52L1225.52 1278.99H1214.91L1232.91 1251.53Z" fill="white"  className='rect'/>
<path d="M1247.22 1251.53H1257.83L1239.83 1278.99H1229.22L1247.22 1251.53Z" fill="white"  className='rect'/>
<path d="M1261.53 1251.53H1272.14L1254.14 1278.99H1243.53L1261.53 1251.53Z" fill="white"  className='rect'/>
<path d="M1275.83 1251.53H1286.44L1268.44 1278.99H1257.83L1275.83 1251.53Z" fill="white"  className='rect'/>
<path d="M920.463 1220.16L1067.24 1277.71C1067.7 1277.9 1068.2 1277.99 1068.7 1277.99H1220.04" stroke="white" strokeWidth="2" strokeLinecap="round"  className='path-line'/>
<path d="M1387.19 939.299H1397.81L1379.81 966.76H1369.19L1387.19 939.299Z" fill="white"  className='rect'/>
<path d="M1401.5 939.299H1412.11L1394.11 966.76H1383.5L1401.5 939.299Z" fill="white"  className='rect'/>
<path d="M1415.81 939.299H1426.42L1408.42 966.76H1397.81L1415.81 939.299Z" fill="white"  className='rect'/>
<path d="M1430.11 939.299H1440.73L1422.73 966.76H1412.11L1430.11 939.299Z" fill="white"  className='rect'/>
<path d="M984.443 1073.49L1207.12 966.176C1207.66 965.915 1208.26 965.779 1208.86 965.779H1375.94" stroke="white" strokeWidth="2" strokeLinecap="round"  className='path-line'/>
<path d="M187.977 1196.35H177.365L195.365 1223.81H205.977L187.977 1196.35Z" fill="white"  className='rect'/>
<path d="M173.67 1196.35H163.058L181.058 1223.81H191.67L173.67 1196.35Z" fill="white"  className='rect'/>
<path d="M159.363 1196.35H148.751L166.751 1223.81H177.363L159.363 1196.35Z" fill="white"  className='rect'/>
<path d="M145.057 1196.35H134.445L152.445 1223.81H163.057L145.057 1196.35Z" fill="white"  className='rect'/>
<path d="M699.943 1164.8L549.134 1222.54C548.677 1222.71 548.193 1222.8 547.704 1222.8H201.443" stroke="white" strokeWidth="2" strokeLinecap="round"  className='path-line'/>
<path d="M1205.41 1090.3H1216.02L1198.02 1117.76H1187.41L1205.41 1090.3Z" fill="white"  className='rect'/>
<path d="M1219.72 1090.3H1230.33L1212.33 1117.76H1201.72L1219.72 1090.3Z" fill="white"  className='rect'/>
<path d="M1234.02 1090.3H1244.64L1226.64 1117.76H1216.02L1234.02 1090.3Z" fill="white"  className='rect'/>
<path d="M1248.33 1090.3H1258.94L1240.94 1117.76H1230.33L1248.33 1090.3Z" fill="white"  className='rect'/>
<path d="M975.443 1161.76L1094.26 1117.02C1094.71 1116.85 1095.19 1116.76 1095.67 1116.76H1191.94" stroke="white" strokeWidth="2" strokeLinecap="round"  className='path-line'/>
<path d="M214.977 996.347H204.365L222.365 1023.81H232.977L214.977 996.347Z" fill="white"  className='rect'/>
<path d="M200.67 996.347H190.058L208.058 1023.81H218.67L200.67 996.347Z" fill="white"  className='rect'/>
<path d="M186.363 996.347H175.751L193.751 1023.81H204.363L186.363 996.347Z" fill="white"  className='rect'/>
<path d="M172.057 996.347H161.445L179.445 1023.81H190.057L172.057 996.347Z" fill="white"  className='rect'/>
<path d="M696.446 1109.33L429.546 1023.03C429.148 1022.9 428.733 1022.83 428.315 1022.83H228.445" stroke="white" strokeWidth="2" strokeLinecap="round"  className='path-line'/>
<path d="M453.977 881.299H443.365L461.365 908.76H471.977L453.977 881.299Z" fill="white"  className='rect'/>
<path d="M439.67 881.299H429.058L447.058 908.76H457.67L439.67 881.299Z" fill="white"  className='rect'/>
<path d="M425.363 881.299H414.751L432.751 908.76H443.363L425.363 881.299Z" fill="white"  className='rect'/>
<path d="M411.057 881.299H400.445L418.445 908.76H429.057L411.057 881.299Z" fill="white"  className='rect'/>
<path d="M745.054 1016.3L640.529 908.976C639.776 908.203 638.743 907.767 637.664 907.767H466.852" stroke="white" strokeWidth="2" strokeLinecap="round"  className='path-line'/>
</g>
<g className='svgFourth'>
    <g className='center-group'>
<g filter="url(#filter9_f_191_208)">
<path d="M586.147 1500.49L612.724 1473.37C614.605 1471.45 617.179 1470.37 619.866 1470.37L782.466 1470.37C787.989 1470.37 792.466 1474.85 792.466 1480.37V1609C792.466 1611.64 791.423 1614.17 789.564 1616.05L759.264 1646.59L727.899 1678.07C726.023 1679.96 723.473 1681.02 720.814 1681.02H560.072C554.549 1681.02 550.072 1676.54 550.072 1671.02L550.07 1542.22C550.07 1539.65 551.064 1537.17 552.844 1535.31L586.147 1500.49Z" fill="#FF5E01"/>
</g>
<path d="M619.866 1470.87H782.466C787.713 1470.87 791.966 1475.12 791.966 1480.37V1609C791.966 1611.51 790.975 1613.92 789.209 1615.7L758.909 1646.23L727.545 1677.72C725.762 1679.51 723.34 1680.52 720.815 1680.52H560.071C554.825 1680.52 550.571 1676.26 550.571 1671.02L550.57 1542.22C550.57 1539.77 551.514 1537.42 553.205 1535.65L586.504 1500.84L586.505 1500.84L613.081 1473.72C614.868 1471.9 617.313 1470.87 619.866 1470.87Z" fill="#FF5100" stroke="white"/>
<g filter="url(#filter10_f_191_208)">
<path d="M594.896 1508.22L618.439 1484.2C620.32 1482.28 622.894 1481.2 625.581 1481.2L770.008 1481.2C775.531 1481.2 780.008 1485.67 780.008 1491.2V1605.16C780.008 1607.8 778.966 1610.33 777.107 1612.2L750.219 1639.3L722.379 1667.25C720.503 1669.13 717.953 1670.19 715.295 1670.19H572.528C567.006 1670.19 562.528 1665.72 562.528 1660.19L562.527 1546.07C562.527 1543.5 563.521 1541.02 565.301 1539.16L594.896 1508.22Z" fill="#FF833B"/>
</g>
<g filter="url(#filter11_d_191_208)">
<path d="M594.896 1508.22L618.439 1484.2C620.32 1482.28 622.894 1481.2 625.581 1481.2L770.009 1481.2C775.532 1481.2 780.009 1485.67 780.009 1491.2V1605.16C780.009 1607.8 778.966 1610.33 777.107 1612.2L750.22 1639.3L722.38 1667.25C720.503 1669.13 717.954 1670.19 715.295 1670.19H572.529C567.006 1670.19 562.529 1665.71 562.529 1660.19L562.527 1546.07C562.527 1543.5 563.521 1541.02 565.301 1539.16L594.896 1508.22Z" fill="#FF5100"/>
<path d="M625.581 1481.7H770.009C775.255 1481.7 779.509 1485.95 779.509 1491.2V1605.16C779.509 1607.66 778.517 1610.07 776.752 1611.85L749.865 1638.95L722.025 1666.9C720.243 1668.69 717.821 1669.69 715.295 1669.69H572.528C567.282 1669.69 563.028 1665.44 563.028 1660.19L563.027 1546.07C563.027 1543.63 563.971 1541.27 565.662 1539.51L595.258 1508.57L595.257 1508.57L618.796 1484.55C620.583 1482.72 623.028 1481.7 625.581 1481.7Z" stroke="white"/>
</g>
</g>
<path d="M1064.95 1692.85H1075.56L1057.56 1720.31H1046.95L1064.95 1692.85Z" fill="white"  className='rect'/>
<path d="M1079.26 1692.85H1089.87L1071.87 1720.31H1061.26L1079.26 1692.85Z" fill="white"  className='rect'/>
<path d="M1093.56 1692.85H1104.17L1086.17 1720.31H1075.56L1093.56 1692.85Z" fill="white"  className='rect'/>
<path d="M1107.87 1692.85H1118.48L1100.48 1720.31H1089.87L1107.87 1692.85Z" fill="white"  className='rect'/>
<path d="M752.947 1675.58L865.251 1719.04C865.711 1719.22 866.201 1719.31 866.694 1719.31H1051.54" stroke="white" strokeWidth="2" strokeLinecap="round"  className='path-line'/>
<path d="M1264.7 1376.12H1275.31L1257.31 1403.58H1246.7L1264.7 1376.12Z" fill="white"  className='rect'/>
<path d="M1279 1376.12H1289.62L1271.62 1403.58H1261L1279 1376.12Z" fill="white"  className='rect'/>
<path d="M1293.31 1376.12H1303.92L1285.92 1403.58H1275.31L1293.31 1376.12Z" fill="white"  className='rect'/>
<path d="M1307.62 1376.12H1318.23L1300.23 1403.58H1289.62L1307.62 1376.12Z" fill="white"  className='rect'/>
<path d="M805.947 1511.28L912.273 1403.76C913.024 1403 914.049 1402.57 915.117 1402.57H1253.45" stroke="white" strokeWidth="2" strokeLinecap="round"  className='path-line'/>
<path d="M161.48 1705.16H150.868L168.868 1732.62H179.48L161.48 1705.16Z" fill="white"  className='rect'/>
<path d="M147.174 1705.16H136.562L154.562 1732.62H165.174L147.174 1705.16Z" fill="white"  className='rect'/>
<path d="M132.867 1705.16H122.255L140.255 1732.62H150.867L132.867 1705.16Z" fill="white"  className='rect'/>
<path d="M118.561 1705.16H107.948L125.948 1732.62H136.561L118.561 1705.16Z" fill="white"  className='rect'/>
<path d="M535.446 1651.62L382.814 1731.17C382.243 1731.47 381.609 1731.62 380.966 1731.62H174.945" stroke="white" strokeWidth="2" strokeLinecap="round"  className='path-line'/>
<path d="M85.4805 1521.11H74.8684L92.8684 1548.57H103.48L85.4805 1521.11Z" fill="white"  className='rect'/>
<path d="M71.1738 1521.11H60.5618L78.5618 1548.57H89.1738L71.1738 1521.11Z" fill="white"  className='rect'/>
<path d="M56.8672 1521.11H46.2551L64.2551 1548.57H74.8672L56.8672 1521.11Z" fill="white"  className='rect'/>
<path d="M42.5605 1521.11H31.9485L49.9485 1548.57H60.5605L42.5605 1521.11Z" fill="white"  className='rect'/>
<path d="M534.973 1610.13L289.959 1547.7C289.636 1547.62 289.304 1547.58 288.971 1547.58H98.9748" stroke="white" strokeWidth="2" strokeLinecap="round"  className='path-line'/>
</g>
<g className='svgFifth'>
    <g className='center-group'>
    <g filter="url(#filter12_f_194_7)">
<path d="M488.821 1951.44L515.398 1924.32C517.279 1922.4 519.853 1921.32 522.54 1921.32L685.139 1921.32C690.662 1921.32 695.139 1925.8 695.139 1931.32V2059.95C695.139 2062.59 694.097 2065.12 692.238 2067L661.938 2097.53L630.573 2129.02C628.696 2130.91 626.147 2131.97 623.488 2131.97H462.745C457.223 2131.97 452.746 2127.49 452.745 2121.97L452.744 1993.17C452.744 1990.59 453.738 1988.12 455.518 1986.26L488.821 1951.44Z" fill="#FF5E01"/>
</g>
<path d="M522.54 1921.82H685.14C690.386 1921.82 694.64 1926.07 694.64 1931.32V2059.95C694.64 2062.46 693.648 2064.86 691.883 2066.64L661.583 2097.18L630.219 2128.67C628.436 2130.46 626.014 2131.47 623.488 2131.47H462.745C457.499 2131.47 453.245 2127.21 453.245 2121.97L453.244 1993.17C453.244 1990.72 454.188 1988.37 455.879 1986.6L489.178 1951.79L489.179 1951.79L515.755 1924.67C517.542 1922.85 519.987 1921.82 522.54 1921.82Z" fill="#FF5100" stroke="white"/>
<g filter="url(#filter13_f_194_7)">
<path d="M497.57 1959.17L521.113 1935.14C522.994 1933.23 525.568 1932.14 528.255 1932.14L672.682 1932.14C678.205 1932.14 682.682 1936.62 682.682 1942.14V2056.11C682.682 2058.74 681.64 2061.28 679.781 2063.15L652.893 2090.25L625.053 2118.2C623.177 2120.08 620.627 2121.14 617.968 2121.14H475.202C469.68 2121.14 465.202 2116.66 465.202 2111.14L465.201 1997.02C465.201 1994.45 466.195 1991.97 467.975 1990.11L497.57 1959.17Z" fill="#FF833B"/>
</g>
<g filter="url(#filter14_d_194_7)">
<path d="M497.57 1959.17L521.113 1935.14C522.994 1933.23 525.568 1932.14 528.255 1932.14L672.682 1932.14C678.205 1932.14 682.682 1936.62 682.682 1942.14V2056.11C682.682 2058.74 681.64 2061.28 679.781 2063.15L652.893 2090.25L625.053 2118.2C623.177 2120.08 620.627 2121.14 617.968 2121.14H475.202C469.68 2121.14 465.202 2116.66 465.202 2111.14L465.201 1997.02C465.201 1994.45 466.195 1991.97 467.975 1990.11L497.57 1959.17Z" fill="#FF5100"/>
<path d="M528.255 1932.64H672.683C677.929 1932.64 682.183 1936.9 682.183 1942.14V2056.11C682.183 2058.61 681.191 2061.02 679.426 2062.8L652.539 2089.89L624.699 2117.84C622.917 2119.63 620.495 2120.64 617.969 2120.64H475.202C469.956 2120.64 465.702 2116.39 465.702 2111.14L465.701 1997.02C465.701 1994.58 466.645 1992.22 468.336 1990.46L497.932 1959.51L497.931 1959.51L521.47 1935.49C523.256 1933.67 525.702 1932.64 528.255 1932.64Z" stroke="white"/>
</g>
</g>
<path d="M127.332 1908.63H116.72L134.72 1936.09H145.332L127.332 1908.63Z" fill="white" className='rect'/>
<path d="M113.025 1908.63H102.413L120.413 1936.09H131.025L113.025 1908.63Z" fill="white" className='rect'/>
<path d="M98.7188 1908.63H88.1067L106.107 1936.09H116.719L98.7188 1908.63Z" fill="white" className='rect'/>
<path d="M84.4121 1908.63H73.8001L91.8001 1936.09H102.412L84.4121 1908.63Z" fill="white" className='rect'/>
<path d="M442.632 2002.26L355.468 1935.94C354.772 1935.41 353.921 1935.13 353.046 1935.13H140.301" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line'/>
<path d="M1043.76 1975.45H1054.37L1036.37 2002.91H1025.76L1043.76 1975.45Z" fill="white" className='rect'/>
<path d="M1058.06 1975.45H1068.68L1050.68 2002.91H1040.06L1058.06 1975.45Z" fill="white" className='rect'/>
<path d="M1072.37 1975.45H1082.98L1064.98 2002.91H1054.37L1072.37 1975.45Z" fill="white" className='rect'/>
<path d="M1086.68 1975.45H1097.29L1079.29 2002.91H1068.68L1086.68 1975.45Z" fill="white" className='rect'/>
<path d="M706.972 2040.48L823.649 2002.13C824.053 2002 824.474 2001.93 824.899 2001.93H1032.26" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line'/>
<path d="M53.6816 2134.25H43.0696L61.0696 2161.71H71.6816L53.6816 2134.25Z" fill="white" className='rect'/>
<path d="M39.375 2134.25H28.7629L46.7629 2161.71H57.375L39.375 2134.25Z" fill="white" className='rect'/>
<path d="M25.0684 2134.25H14.4563L32.4563 2161.71H43.0684L25.0684 2134.25Z" fill="white" className='rect'/>
<path d="M10.7617 2134.25H0.149666L18.1497 2161.71H28.7617L10.7617 2134.25Z" fill="white" className='rect'/>
<path d="M439.002 2095.21L313.514 2160.27C312.946 2160.56 312.314 2160.72 311.673 2160.72H67.1504" stroke="white" strokeWidth="2" strokeLinecap="round" className='path-line'/>
</g>
<g className='svgSixth'>
    <g className='center-group'>
<g filter="url(#filter15_f_191_208)">
<path d="M586.147 2402.39L612.724 2375.27C614.605 2373.35 617.179 2372.27 619.866 2372.27L782.466 2372.27C787.989 2372.27 792.466 2376.74 792.466 2382.27V2510.9C792.466 2513.54 791.423 2516.07 789.564 2517.94L759.264 2548.48L727.899 2579.97C726.023 2581.85 723.473 2582.91 720.814 2582.91H560.072C554.549 2582.91 550.072 2578.44 550.072 2572.91L550.07 2444.12C550.07 2441.54 551.064 2439.07 552.844 2437.2L586.147 2402.39Z" fill="#FF5E01"/>
</g>
<path d="M619.866 2372.77H782.466C787.713 2372.77 791.966 2377.02 791.966 2382.27V2510.9C791.966 2513.41 790.975 2515.81 789.209 2517.59L758.909 2548.13L727.545 2579.62C725.762 2581.41 723.34 2582.41 720.815 2582.41H560.071C554.825 2582.41 550.571 2578.16 550.571 2572.91L550.57 2444.12C550.57 2441.67 551.514 2439.32 553.205 2437.55L586.504 2402.74L586.505 2402.74L613.081 2375.62C614.868 2373.79 617.313 2372.77 619.866 2372.77Z" fill="#FF5100" stroke="white"/>
<g filter="url(#filter16_f_191_208)">
<path d="M594.896 2410.12L618.439 2386.09C620.32 2384.17 622.894 2383.09 625.581 2383.09L770.008 2383.09C775.531 2383.09 780.008 2387.57 780.008 2393.09V2507.05C780.008 2509.69 778.966 2512.22 777.107 2514.1L750.219 2541.2L722.379 2569.15C720.503 2571.03 717.953 2572.09 715.295 2572.09H572.528C567.006 2572.09 562.528 2567.61 562.528 2562.09L562.527 2447.97C562.527 2445.39 563.521 2442.92 565.301 2441.06L594.896 2410.12Z" fill="#FF833B"/>
</g>
<g filter="url(#filter17_d_191_208)">
<path d="M594.896 2410.12L618.439 2386.09C620.32 2384.17 622.894 2383.09 625.581 2383.09L770.009 2383.09C775.532 2383.09 780.009 2387.57 780.009 2393.09V2507.05C780.009 2509.69 778.966 2512.22 777.107 2514.1L750.22 2541.2L722.38 2569.15C720.503 2571.03 717.954 2572.09 715.295 2572.09H572.529C567.006 2572.09 562.529 2567.61 562.529 2562.09L562.527 2447.97C562.527 2445.39 563.521 2442.92 565.301 2441.06L594.896 2410.12Z" fill="#FF5100"/>
<path d="M625.581 2383.59H770.009C775.255 2383.59 779.509 2387.85 779.509 2393.09V2507.05C779.509 2509.56 778.517 2511.96 776.752 2513.74L749.865 2540.84L722.025 2568.79C720.243 2570.58 717.821 2571.59 715.295 2571.59H572.528C567.282 2571.59 563.028 2567.33 563.028 2562.09L563.027 2447.97C563.027 2445.52 563.971 2443.17 565.662 2441.4L595.258 2410.46L595.257 2410.46L618.796 2386.44C620.583 2384.62 623.028 2383.59 625.581 2383.59Z" stroke="white"/>
</g>
</g>
<path d="M125.863 2440.41H115.251L133.251 2467.87H143.863L125.863 2440.41Z" fill="white"  className='rect'/>
<path d="M111.557 2440.41H100.945L118.945 2467.87H129.557L111.557 2440.41Z" fill="white"  className='rect'/>
<path d="M97.25 2440.41H86.6379L104.638 2467.87H115.25L97.25 2440.41Z" fill="white"  className='rect'/>
<path d="M82.9434 2440.41H72.3313L90.3313 2467.87H100.943L82.9434 2440.41Z" fill="white"  className='rect'/>
<path d="M540.332 2516.87L425.592 2467.2C425.091 2466.99 424.55 2466.87 424.003 2466.87H138.738" stroke="white" strokeWidth="2" strokeLinecap="round"  className='path-line'/>
<path d="M1170.58 2290.41H1181.19L1163.19 2317.87H1152.58L1170.58 2290.41Z" fill="white"  className='rect'/>
<path d="M1184.89 2290.41H1195.5L1177.5 2317.87H1166.89L1184.89 2290.41Z" fill="white"  className='rect'/>
<path d="M1199.2 2290.41H1209.81L1191.81 2317.87H1181.2L1199.2 2290.41Z" fill="white"  className='rect'/>
<path d="M1213.5 2290.41H1224.11L1206.11 2317.87H1195.5L1213.5 2290.41Z" fill="white"  className='rect'/>
<path d="M807.332 2431.88L920.158 2318.06C920.91 2317.3 921.932 2316.88 922.999 2316.88H1159.33" stroke="white" strokeWidth="2" strokeLinecap="round"  className='path-line'/>
</g>
<defs>
<filter id="filter0_f_191_208" x="391.07" y="109.525" width="258.395" height="226.647" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_191_208"/>
</filter>
<filter id="filter1_f_191_208" x="374.627" y="91.4511" width="291.281" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_191_208"/>
</filter>
<filter id="filter2_d_191_208" x="385.827" y="103.651" width="274.881" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="4"/>
<feGaussianBlur stdDeviation="14.35"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_191_208"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_191_208" result="shape"/>
</filter>
<filter id="filter3_f_191_208" x="542.07" y="560.474" width="258.395" height="226.647" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_191_208"/>
</filter>
<filter id="filter4_f_191_208" x="525.627" y="542.399" width="291.281" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_191_208"/>
</filter>
<filter id="filter5_d_191_208" x="536.827" y="554.599" width="274.881" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="4"/>
<feGaussianBlur stdDeviation="14.35"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_191_208"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_191_208" result="shape"/>
</filter>
<filter id="filter6_f_191_208" x="707.438" y="1011.42" width="258.395" height="226.647" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_191_208"/>
</filter>
<filter id="filter7_f_191_208" x="690.994" y="993.348" width="291.281" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_191_208"/>
</filter>
<filter id="filter8_d_191_208" x="702.195" y="1005.55" width="274.881" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="4"/>
<feGaussianBlur stdDeviation="14.35"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_191_208"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_191_208" result="shape"/>
</filter>
<filter id="filter9_f_191_208" x="542.07" y="1462.37" width="258.395" height="226.647" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_191_208"/>
</filter>
<filter id="filter10_f_191_208" x="525.627" y="1444.3" width="291.281" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_191_208"/>
</filter>
<filter id="filter11_d_191_208" x="536.827" y="1456.5" width="274.881" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="4"/>
<feGaussianBlur stdDeviation="14.35"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_191_208"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_191_208" result="shape"/>
</filter>
<filter id="filter12_f_191_208" x="392.744" y="1913.32" width="258.395" height="226.647" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_191_208"/>
</filter>
<filter id="filter13_f_191_208" x="376.301" y="1895.24" width="291.281" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_191_208"/>
</filter>
<filter id="filter14_d_191_208" x="387.501" y="1907.44" width="274.881" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="4"/>
<feGaussianBlur stdDeviation="14.35"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_191_208"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_191_208" result="shape"/>
</filter>
<filter id="filter15_f_191_208" x="542.07" y="2364.27" width="258.395" height="226.647" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_191_208"/>
</filter>
<filter id="filter16_f_191_208" x="525.627" y="2346.19" width="291.281" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_191_208"/>
</filter>
<filter id="filter17_d_191_208" x="536.827" y="2358.39" width="274.881" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="4"/>
<feGaussianBlur stdDeviation="14.35"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_191_208"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_191_208" result="shape"/>
</filter>
</defs>
</svg>


                    </div>
                    <div>
                        <div className='absolute top-[23.2%] left-[36%] w-[7%] overflow-hidden'>
                            <p className='font-medium text-content-24 font-body  text-center textanim svgFirst'>Digital Accounts</p>
                        </div>
                        <div className='absolute top-[37%] left-[42.5%] w-[10%] overflow-hidden'>
                            <p className='font-medium text-content-24 font-body  text-center textanim svgSecond'>Pre-paid Cards Accounts  </p>
                        </div>
                        <div className='absolute top-[50.5%] left-[51%] w-[10%] overflow-hidden'>
                            <p className='font-medium text-content-24 font-body  text-center textanim svgThird'>Credit Card Accounts</p>
                        </div>
                        <div className='absolute top-[64%] left-[43.5%] w-[8%] overflow-hidden'>
                            <p className='font-medium text-content-24 font-body  text-center textanim svgFourth'>Loan Accounts</p>
                        </div>
                        <div className='absolute top-[77.3%] left-[39%] w-[7%] overflow-hidden'>
                            <p className='font-medium text-content-24 font-body  text-center textanim svgFifth'>Reward Account </p>
                        </div>
                        <div className='absolute top-[91.2%] left-[43.5%] w-[8%] overflow-hidden'>
                            <p className='font-medium text-content-24 font-body text-center textanim svgSixth'>Redemption Account </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='absolute top-[17.5%] left-[22%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgFirst'>Fund Transfers</p>
                            </div>
                            <div className='absolute top-[26.3%] left-[16.8%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgFirst'>Digital Payments</p>
                            </div>
                            <div className='absolute top-[19.2%] left-[53%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgFirst'>Collect payments / Settlements</p>
                            </div>
                        </div>
                        <div>
                            <div className='absolute top-[33.5%] left-[21.5%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgSecond'>Load Money</p>
                            </div>
                            <div className='absolute top-[39.5%] left-[29%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgSecond'>Spends</p>
                            </div>
                            <div className='absolute top-[30.8%] left-[60.5%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgSecond'>Card Controls</p>
                            </div>
                            <div className='absolute top-[38.3%] left-[61%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgSecond'>Card Statements</p>
                            </div>
                        </div>
                          <div>
                            <div className='absolute top-[43.8%] left-[37.5%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgThird'>Card Statement</p>
                            </div>
                            <div className='absolute top-[47.2%] left-[25%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgThird'>Limit Management</p>
                            </div>
                            <div className='absolute top-[53.3%] left-[23.5%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgThird'>Collection of Delinquent Amounts</p>
                            </div>
                            <div className='absolute top-[45.5%] left-[76%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgThird'>Card Controls</p>
                            </div>
                            <div className='absolute top-[50%] left-[69.5%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgThird'>Spends</p>
                            </div>
                            <div className='absolute top-[55%] left-[69%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgThird'>Repayments</p>
                            </div>
                        </div>
                         <div>
                            <div className='absolute top-[63%] left-[18.5%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgFourth'>Loan Repayments</p>
                            </div>
                            <div className='absolute top-[68.5%] left-[23%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgFourth'>Loan Disbursement</p>
                            </div>
                            <div className='absolute top-[58.5%] left-[60%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgFourth'>Collection of Delinquent Amount</p>
                            </div>
                            <div className='absolute top-[68%] left-[58%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgFourth'>Loan Statements</p>
                            </div>
                        </div>
                        <div>
                            <div className='absolute top-[74.65%] left-[21%] overflow-hidden w-[10%]'>
                                <p className='text-content-20 font-body text-left textanim svgFifth leading-[1.5]'>Reward Points account Statement</p>
                            </div>
                            <div className='absolute top-[81.3%] left-[16.8%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgFifth'>Tailored Loyalty Program</p>
                            </div>
                            <div className='absolute top-[76.7%] left-[56%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgFifth'>Earn Reward Points</p>
                            </div>
                        </div>
                        <div>
                            <div className='absolute top-[90.5%] left-[20.5%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgSixth'>Usage of Redeemed Amount</p>
                            </div>
                            <div className='absolute top-[86%] left-[60.5%] overflow-hidden'>
                                <p className='text-content-20 font-body text-center textanim svgSixth'>Redeem Reward Points</p>
                            </div>
                        </div>
                        
                      
                       
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Infrastructure2

