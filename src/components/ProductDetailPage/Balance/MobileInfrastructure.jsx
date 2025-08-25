"use client";
import Copy from "@/components/Animations/Copy";
import React, { useRef } from "react";

const MobileInfrastructure = () => {
  const sectionRef = useRef(null);
  const svgContainer = useRef(null);
  return (
    <section
      data-theme="orange"
      className="w-screen h-full max-md:h-fit max-md:mt-[-1px] max-md:block overflow-hidden bg-gradient relative hidden max-sm:block"
      ref={sectionRef}
    >
      <div className="px-[4vw] py-[7vw] flex flex-col items-center  gap-[10vw] max-sm:pb-[15%] max-sm:px-[5.5vw] max-sm:gap-[15vw]">
        <div className="w-[90%] max-sm:w-full">
          <Copy>
            <h2 className="text-head-100 font-display text-center max-sm:text-left max-md:text-left">
            All-in-One Wallet Infrastructure for Cards, Lending & Rewards
            </h2>
          </Copy>
        </div>
        <div className="w-screen overflow-x-scroll  flex flex-col items-center max-sm:items-start max-sm:px-[5vw] scrollbar-hidden">
          <div className="w-[85%] max-sm:w-[480%]  max-md:py-[5vw] translate-x-[60%] max-sm:translate-x-0 fadeupanim" ref={svgContainer}>
           
            <svg  className="max-md:scale-[1.5] max-sm:scale-[1.3]  max-md:pr-[15vw] max-sm:ml-[65vw]" width="1740" height="164" viewBox="0 0 1740 164" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="166.282" y1="75.209" x2="327.488" y2="75.209" stroke="white"/>
<line x1="477.813" y1="75.209" x2="639.019" y2="75.209" stroke="white"/>
<line x1="789.343" y1="75.209" x2="950.549" y2="75.209" stroke="white"/>
<line x1="1100.87" y1="75.209" x2="1262.08" y2="75.209" stroke="white"/>
<line x1="1412.4" y1="75.209" x2="1573.61" y2="75.209" stroke="white"/>
<g filter="url(#filter0_f_223_216)">
<path d="M38.1562 35.3015L54.6605 18.4593C55.8286 17.2674 57.4272 16.5957 59.096 16.5957L160.072 16.5957C163.502 16.5957 166.282 19.3761 166.282 22.8058V102.689C166.282 104.328 165.635 105.9 164.481 107.063L145.664 126.028L126.186 145.583C125.02 146.753 123.437 147.41 121.786 147.41H21.9629C18.5332 147.41 15.7528 144.63 15.7528 141.2L15.752 61.2158C15.752 59.6165 16.369 58.0788 17.4744 56.9231L38.1562 35.3015Z" fill="#FF5E01"/>
</g>
<path d="M59.0957 16.9062H160.072C163.33 16.9063 165.972 19.5475 165.972 22.8057V102.689C165.972 104.246 165.356 105.74 164.26 106.845L145.443 125.809L125.966 145.363C124.859 146.475 123.355 147.1 121.786 147.1H21.9629C18.7047 147.1 16.0635 144.458 16.0635 141.2L16.0625 61.2158C16.0625 59.6965 16.649 58.2356 17.6992 57.1377L38.3799 35.5156L54.8818 18.6768C55.9914 17.5445 57.5104 16.9063 59.0957 16.9062Z" fill="#FF5100" stroke="white" strokeWidth="0.621012"/>
<g filter="url(#filter1_f_223_216)">
<path d="M43.5893 40.1015L58.2095 25.182C59.3776 23.99 60.9762 23.3184 62.645 23.3184L152.336 23.3184C155.766 23.3184 158.546 26.0987 158.546 29.5285V100.3C158.546 101.939 157.899 103.511 156.745 104.674L140.047 121.503L122.758 138.86C121.593 140.03 120.009 140.687 118.358 140.687H29.6986C26.2689 140.687 23.4886 137.907 23.4885 134.477L23.4878 63.6084C23.4878 62.0091 24.1048 60.4714 25.2103 59.3157L43.5893 40.1015Z" fill="#FF833B"/>
</g>
<g filter="url(#filter2_d_223_216)">
<path d="M43.5895 40.1015L58.2098 25.182C59.3778 23.99 60.9764 23.3184 62.6453 23.3184L152.336 23.3184C155.766 23.3184 158.547 26.0987 158.547 29.5285V100.3C158.547 101.939 157.899 103.511 156.745 104.674L140.047 121.503L122.758 138.86C121.593 140.03 120.01 140.687 118.358 140.687H29.6989C26.2692 140.687 23.4888 137.907 23.4888 134.477L23.4881 63.6084C23.488 62.0091 24.105 60.4714 25.2105 59.3157L43.5895 40.1015Z" fill="#FF5100"/>
<path d="M62.6453 23.6289H152.337C155.595 23.629 158.236 26.2702 158.236 29.5283V100.3C158.236 101.856 157.621 103.35 156.524 104.455L139.827 121.284L122.538 138.641C121.431 139.752 119.927 140.377 118.358 140.377H29.699C26.4408 140.377 23.7997 137.736 23.7996 134.478L23.7986 63.6084C23.7986 62.0891 24.3851 60.6282 25.4353 59.5303L43.8132 40.3154L58.4314 25.3994C59.541 24.2671 61.0599 23.6289 62.6453 23.6289Z" stroke="white" strokeWidth="0.621012"/>
</g>
<g filter="url(#filter3_f_223_216)">
<path d="M349.687 35.3015L366.191 18.4593C367.359 17.2674 368.958 16.5957 370.627 16.5957L471.603 16.5957C475.033 16.5957 477.813 19.3761 477.813 22.8058V102.689C477.813 104.328 477.165 105.9 476.011 107.063L457.194 126.028L437.716 145.583C436.551 146.753 434.968 147.41 433.316 147.41H333.493C330.064 147.41 327.283 144.63 327.283 141.2L327.282 61.2158C327.282 59.6165 327.899 58.0788 329.005 56.9231L349.687 35.3015Z" fill="#FF5E01"/>
</g>
<path d="M370.626 16.9062H471.603C474.861 16.9063 477.502 19.5475 477.502 22.8057V102.689C477.502 104.246 476.887 105.74 475.79 106.845L456.974 125.809L437.496 145.363C436.389 146.475 434.885 147.1 433.317 147.1H333.493C330.235 147.1 327.594 144.458 327.594 141.2L327.593 61.2158C327.593 59.6965 328.18 58.2356 329.23 57.1377L349.91 35.5156L366.412 18.6768C367.522 17.5445 369.041 16.9063 370.626 16.9062Z" fill="#FF5100" stroke="white" strokeWidth="0.621012"/>
<g filter="url(#filter4_f_223_216)">
<path d="M355.12 40.1015L369.74 25.182C370.908 23.99 372.507 23.3184 374.176 23.3184L463.867 23.3184C467.296 23.3184 470.077 26.0987 470.077 29.5285V100.3C470.077 101.939 469.429 103.511 468.275 104.674L451.577 121.503L434.288 138.86C433.123 140.03 431.54 140.687 429.889 140.687H341.229C337.799 140.687 335.019 137.907 335.019 134.477L335.018 63.6084C335.018 62.0091 335.635 60.4714 336.741 59.3157L355.12 40.1015Z" fill="#FF833B"/>
</g>
<g filter="url(#filter5_d_223_216)">
<path d="M355.12 40.1015L369.74 25.182C370.908 23.99 372.507 23.3184 374.176 23.3184L463.867 23.3184C467.297 23.3184 470.077 26.0987 470.077 29.5285V100.3C470.077 101.939 469.429 103.511 468.275 104.674L451.578 121.503L434.289 138.86C433.123 140.03 431.54 140.687 429.889 140.687H341.229C337.8 140.687 335.019 137.907 335.019 134.477L335.019 63.6084C335.019 62.0091 335.636 60.4714 336.741 59.3157L355.12 40.1015Z" fill="#FF5100"/>
<path d="M374.176 23.6289H463.867C467.125 23.629 469.767 26.2702 469.767 29.5283V100.3C469.767 101.856 469.151 103.35 468.055 104.455L451.357 121.284L434.068 138.641C432.961 139.752 431.457 140.377 429.889 140.377H341.229C337.971 140.377 335.33 137.736 335.33 134.478L335.329 63.6084C335.329 62.0891 335.916 60.6282 336.966 59.5303L355.344 40.3154L369.962 25.3994C371.072 24.2671 372.59 23.6289 374.176 23.6289Z" stroke="white" strokeWidth="0.621012"/>
</g>
<g filter="url(#filter6_f_223_216)">
<path d="M661.217 35.3015L677.722 18.4593C678.89 17.2674 680.488 16.5957 682.157 16.5957L783.133 16.5957C786.563 16.5957 789.343 19.3761 789.343 22.8058V102.689C789.343 104.328 788.696 105.9 787.542 107.063L768.725 126.028L749.247 145.583C748.081 146.753 746.498 147.41 744.847 147.41H645.024C641.594 147.41 638.814 144.63 638.814 141.2L638.813 61.2158C638.813 59.6165 639.43 58.0788 640.535 56.9231L661.217 35.3015Z" fill="#FF5E01"/>
</g>
<path d="M682.157 16.9062H783.133C786.392 16.9063 789.033 19.5475 789.033 22.8057V102.689C789.033 104.246 788.417 105.74 787.321 106.845L768.504 125.809L749.027 145.363C747.92 146.475 746.416 147.1 744.847 147.1H645.024C641.766 147.1 639.125 144.458 639.125 141.2L639.124 61.2158C639.124 59.6965 639.71 58.2356 640.76 57.1377L661.441 35.5156L677.943 18.6768C679.052 17.5445 680.571 16.9063 682.157 16.9062Z" fill="#FF5100" stroke="white" strokeWidth="0.621012"/>
<g filter="url(#filter7_f_223_216)">
<path d="M666.65 40.1015L681.271 25.182C682.439 23.99 684.037 23.3184 685.706 23.3184L775.397 23.3184C778.827 23.3184 781.607 26.0987 781.607 29.5285V100.3C781.607 101.939 780.96 103.511 779.806 104.674L763.108 121.503L745.819 138.86C744.654 140.03 743.07 140.687 741.419 140.687H652.76C649.33 140.687 646.55 137.907 646.55 134.477L646.549 63.6084C646.549 62.0091 647.166 60.4714 648.271 59.3157L666.65 40.1015Z" fill="#FF833B"/>
</g>
<g filter="url(#filter8_d_223_216)">
<path d="M666.651 40.1015L681.271 25.182C682.439 23.99 684.037 23.3184 685.706 23.3184L775.397 23.3184C778.827 23.3184 781.608 26.0987 781.608 29.5285V100.3C781.608 101.939 780.96 103.511 779.806 104.674L763.108 121.503L745.819 138.86C744.654 140.03 743.071 140.687 741.419 140.687H652.76C649.33 140.687 646.55 137.907 646.55 134.477L646.549 63.6084C646.549 62.0091 647.166 60.4714 648.272 59.3157L666.651 40.1015Z" fill="#FF5100"/>
<path d="M685.706 23.6289H775.398C778.656 23.629 781.297 26.2702 781.297 29.5283V100.3C781.297 101.856 780.682 103.35 779.585 104.455L762.888 121.284L745.599 138.641C744.492 139.752 742.988 140.377 741.419 140.377H652.76C649.502 140.377 646.861 137.736 646.861 134.478L646.86 63.6084C646.86 62.0891 647.446 60.6282 648.496 59.5303L666.874 40.3154L681.492 25.3994C682.602 24.2671 684.121 23.6289 685.706 23.6289Z" stroke="white" strokeWidth="0.621012"/>
</g>
<g filter="url(#filter9_f_223_216)">
<path d="M972.748 35.3015L989.252 18.4593C990.42 17.2674 992.018 16.5957 993.687 16.5957L1094.66 16.5957C1098.09 16.5957 1100.87 19.3761 1100.87 22.8058V102.689C1100.87 104.328 1100.23 105.9 1099.07 107.063L1080.26 126.028L1060.78 145.583C1059.61 146.753 1058.03 147.41 1056.38 147.41H956.554C953.124 147.41 950.344 144.63 950.344 141.2L950.343 61.2158C950.343 59.6165 950.96 58.0788 952.066 56.9231L972.748 35.3015Z" fill="#FF5E01"/>
</g>
<path d="M993.687 16.9062H1094.66C1097.92 16.9063 1100.56 19.5475 1100.56 22.8057V102.689C1100.56 104.246 1099.95 105.74 1098.85 106.845L1080.03 125.809L1060.56 145.363C1059.45 146.475 1057.95 147.1 1056.38 147.1H956.554C953.296 147.1 950.655 144.458 950.655 141.2L950.654 61.2158C950.654 59.6965 951.24 58.2356 952.291 57.1377L972.971 35.5156L989.473 18.6768C990.583 17.5445 992.102 16.9063 993.687 16.9062Z" fill="#FF5100" stroke="white" strokeWidth="0.621012"/>
<g filter="url(#filter10_f_223_216)">
<path d="M978.181 40.1015L992.801 25.182C993.969 23.99 995.567 23.3184 997.236 23.3184L1086.93 23.3184C1090.36 23.3184 1093.14 26.0987 1093.14 29.5285V100.3C1093.14 101.939 1092.49 103.511 1091.34 104.674L1074.64 121.503L1057.35 138.86C1056.18 140.03 1054.6 140.687 1052.95 140.687H964.29C960.86 140.687 958.08 137.907 958.08 134.477L958.079 63.6084C958.079 62.0091 958.696 60.4714 959.802 59.3157L978.181 40.1015Z" fill="#FF833B"/>
</g>
<g filter="url(#filter11_d_223_216)">
<path d="M978.181 40.1015L992.801 25.182C993.969 23.99 995.568 23.3184 997.237 23.3184L1086.93 23.3184C1090.36 23.3184 1093.14 26.0987 1093.14 29.5285V100.3C1093.14 101.939 1092.49 103.511 1091.34 104.674L1074.64 121.503L1057.35 138.86C1056.18 140.03 1054.6 140.687 1052.95 140.687H964.29C960.86 140.687 958.08 137.907 958.08 134.477L958.079 63.6084C958.079 62.0091 958.696 60.4714 959.802 59.3157L978.181 40.1015Z" fill="#FF5100"/>
<path d="M997.237 23.6289H1086.93C1090.19 23.629 1092.83 26.2702 1092.83 29.5283V100.3C1092.83 101.856 1092.21 103.35 1091.12 104.455L1074.42 121.284L1057.13 138.641C1056.02 139.752 1054.52 140.377 1052.95 140.377H964.29C961.032 140.377 958.391 137.736 958.391 134.478L958.39 63.6084C958.39 62.0891 958.976 60.6282 960.027 59.5303L978.405 40.3154L993.023 25.3994C994.132 24.2671 995.651 23.6289 997.237 23.6289Z" stroke="white" strokeWidth="0.621012"/>
</g>
<g filter="url(#filter12_f_223_216)">
<path d="M1284.28 35.3015L1300.78 18.4593C1301.95 17.2674 1303.55 16.5957 1305.22 16.5957L1406.19 16.5957C1409.62 16.5957 1412.4 19.3761 1412.4 22.8058V102.689C1412.4 104.328 1411.76 105.9 1410.6 107.063L1391.79 126.028L1372.31 145.583C1371.14 146.753 1369.56 147.41 1367.91 147.41H1268.08C1264.65 147.41 1261.87 144.63 1261.87 141.2L1261.87 61.2158C1261.87 59.6165 1262.49 58.0788 1263.6 56.9231L1284.28 35.3015Z" fill="#FF5E01"/>
</g>
<path d="M1305.22 16.9062H1406.19C1409.45 16.9063 1412.09 19.5475 1412.09 22.8057V102.689C1412.09 104.246 1411.48 105.74 1410.38 106.845L1391.57 125.809L1372.09 145.363C1370.98 146.475 1369.48 147.1 1367.91 147.1H1268.08C1264.83 147.1 1262.19 144.458 1262.19 141.2L1262.18 61.2158C1262.18 59.6965 1262.77 58.2356 1263.82 57.1377L1284.5 35.5156L1301 18.6768C1302.11 17.5445 1303.63 16.9063 1305.22 16.9062Z" fill="#FF5100" stroke="white" strokeWidth="0.621012"/>
<g filter="url(#filter13_f_223_216)">
<path d="M1289.71 40.1015L1304.33 25.182C1305.5 23.99 1307.1 23.3184 1308.77 23.3184L1398.46 23.3184C1401.89 23.3184 1404.67 26.0987 1404.67 29.5285V100.3C1404.67 101.939 1404.02 103.511 1402.87 104.674L1386.17 121.503L1368.88 138.86C1367.71 140.03 1366.13 140.687 1364.48 140.687H1275.82C1272.39 140.687 1269.61 137.907 1269.61 134.477L1269.61 63.6084C1269.61 62.0091 1270.23 60.4714 1271.33 59.3157L1289.71 40.1015Z" fill="#FF833B"/>
</g>
<g filter="url(#filter14_d_223_216)">
<path d="M1289.71 40.1015L1304.33 25.182C1305.5 23.99 1307.1 23.3184 1308.77 23.3184L1398.46 23.3184C1401.89 23.3184 1404.67 26.0987 1404.67 29.5285V100.3C1404.67 101.939 1404.02 103.511 1402.87 104.674L1386.17 121.503L1368.88 138.86C1367.71 140.03 1366.13 140.687 1364.48 140.687H1275.82C1272.39 140.687 1269.61 137.907 1269.61 134.477L1269.61 63.6084C1269.61 62.0091 1270.23 60.4714 1271.33 59.3157L1289.71 40.1015Z" fill="#FF5100"/>
<path d="M1308.77 23.6289H1398.46C1401.72 23.629 1404.36 26.2702 1404.36 29.5283V100.3C1404.36 101.856 1403.74 103.35 1402.65 104.455L1385.95 121.284L1368.66 138.641C1367.55 139.752 1366.05 140.377 1364.48 140.377H1275.82C1272.56 140.377 1269.92 137.736 1269.92 134.478L1269.92 63.6084C1269.92 62.0891 1270.51 60.6282 1271.56 59.5303L1289.94 40.3154L1304.55 25.3994C1305.66 24.2671 1307.18 23.6289 1308.77 23.6289Z" stroke="white" strokeWidth="0.621012"/>
</g>
<g filter="url(#filter15_f_223_216)">
<path d="M1595.81 35.3015L1612.31 18.4593C1613.48 17.2674 1615.08 16.5957 1616.75 16.5957L1717.72 16.5957C1721.15 16.5957 1723.93 19.3761 1723.93 22.8058V102.689C1723.93 104.328 1723.29 105.9 1722.13 107.063L1703.32 126.028L1683.84 145.583C1682.67 146.753 1681.09 147.41 1679.44 147.41H1579.62C1576.19 147.41 1573.41 144.63 1573.41 141.2L1573.4 61.2158C1573.4 59.6165 1574.02 58.0788 1575.13 56.9231L1595.81 35.3015Z" fill="#FF5E01"/>
</g>
<path d="M1616.75 16.9062H1717.72C1720.98 16.9063 1723.62 19.5475 1723.62 22.8057V102.689C1723.62 104.246 1723.01 105.74 1721.91 106.845L1703.1 125.809L1683.62 145.363C1682.51 146.475 1681.01 147.1 1679.44 147.1H1579.62C1576.36 147.1 1573.72 144.458 1573.72 141.2L1573.71 61.2158C1573.71 59.6965 1574.3 58.2356 1575.35 57.1377L1596.03 35.5156L1612.53 18.6768C1613.64 17.5445 1615.16 16.9063 1616.75 16.9062Z" fill="#FF5100" stroke="white" strokeWidth="0.621012"/>
<g filter="url(#filter16_f_223_216)">
<path d="M1601.24 40.1015L1615.86 25.182C1617.03 23.99 1618.63 23.3184 1620.3 23.3184L1709.99 23.3184C1713.42 23.3184 1716.2 26.0987 1716.2 29.5285V100.3C1716.2 101.939 1715.55 103.511 1714.4 104.674L1697.7 121.503L1680.41 138.86C1679.24 140.03 1677.66 140.687 1676.01 140.687H1587.35C1583.92 140.687 1581.14 137.907 1581.14 134.477L1581.14 63.6084C1581.14 62.0091 1581.76 60.4714 1582.86 59.3157L1601.24 40.1015Z" fill="#FF833B"/>
</g>
<g filter="url(#filter17_d_223_216)">
<path d="M1601.24 40.1015L1615.86 25.182C1617.03 23.99 1618.63 23.3184 1620.3 23.3184L1709.99 23.3184C1713.42 23.3184 1716.2 26.0987 1716.2 29.5285V100.3C1716.2 101.939 1715.55 103.511 1714.4 104.674L1697.7 121.503L1680.41 138.86C1679.25 140.03 1677.66 140.687 1676.01 140.687H1587.35C1583.92 140.687 1581.14 137.907 1581.14 134.477L1581.14 63.6084C1581.14 62.0091 1581.76 60.4714 1582.86 59.3157L1601.24 40.1015Z" fill="#FF5100"/>
<path d="M1620.3 23.6289H1709.99C1713.25 23.629 1715.89 26.2702 1715.89 29.5283V100.3C1715.89 101.856 1715.27 103.35 1714.18 104.455L1697.48 121.284L1680.19 138.641C1679.08 139.752 1677.58 140.377 1676.01 140.377H1587.35C1584.09 140.377 1581.45 137.736 1581.45 134.478L1581.45 63.6084C1581.45 62.0891 1582.04 60.6282 1583.09 59.5303L1601.47 40.3154L1616.08 25.3994C1617.19 24.2671 1618.71 23.6289 1620.3 23.6289Z" stroke="white" strokeWidth="0.621012"/>
</g>
<defs>
<filter id="filter0_f_223_216" x="10.7839" y="11.6276" width="160.467" height="140.751" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.48405" result="effect1_foregroundBlur_223_216"/>
</filter>
<filter id="filter1_f_223_216" x="0.572441" y="0.403008" width="180.889" height="163.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="11.4577" result="effect1_foregroundBlur_223_216"/>
</filter>
<filter id="filter2_d_223_216" x="7.52802" y="7.97936" width="170.705" height="153.015" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1.86304" dy="2.48405"/>
<feGaussianBlur stdDeviation="8.91153"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_223_216"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_223_216" result="shape"/>
</filter>
<filter id="filter3_f_223_216" x="322.314" y="11.6276" width="160.467" height="140.751" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.48405" result="effect1_foregroundBlur_223_216"/>
</filter>
<filter id="filter4_f_223_216" x="312.103" y="0.403008" width="180.889" height="163.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="11.4577" result="effect1_foregroundBlur_223_216"/>
</filter>
<filter id="filter5_d_223_216" x="319.059" y="7.97936" width="170.705" height="153.015" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1.86304" dy="2.48405"/>
<feGaussianBlur stdDeviation="8.91153"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_223_216"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_223_216" result="shape"/>
</filter>
<filter id="filter6_f_223_216" x="633.845" y="11.6276" width="160.467" height="140.751" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.48405" result="effect1_foregroundBlur_223_216"/>
</filter>
<filter id="filter7_f_223_216" x="623.633" y="0.403008" width="180.889" height="163.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="11.4577" result="effect1_foregroundBlur_223_216"/>
</filter>
<filter id="filter8_d_223_216" x="630.589" y="7.97936" width="170.705" height="153.015" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1.86304" dy="2.48405"/>
<feGaussianBlur stdDeviation="8.91153"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_223_216"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_223_216" result="shape"/>
</filter>
<filter id="filter9_f_223_216" x="945.375" y="11.6276" width="160.467" height="140.751" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.48405" result="effect1_foregroundBlur_223_216"/>
</filter>
<filter id="filter10_f_223_216" x="935.164" y="0.403008" width="180.889" height="163.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="11.4577" result="effect1_foregroundBlur_223_216"/>
</filter>
<filter id="filter11_d_223_216" x="942.119" y="7.97936" width="170.705" height="153.015" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1.86304" dy="2.48405"/>
<feGaussianBlur stdDeviation="8.91153"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_223_216"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_223_216" result="shape"/>
</filter>
<filter id="filter12_f_223_216" x="1256.91" y="11.6276" width="160.467" height="140.751" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.48405" result="effect1_foregroundBlur_223_216"/>
</filter>
<filter id="filter13_f_223_216" x="1246.69" y="0.403008" width="180.889" height="163.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="11.4577" result="effect1_foregroundBlur_223_216"/>
</filter>
<filter id="filter14_d_223_216" x="1253.65" y="7.97936" width="170.705" height="153.015" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1.86304" dy="2.48405"/>
<feGaussianBlur stdDeviation="8.91153"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_223_216"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_223_216" result="shape"/>
</filter>
<filter id="filter15_f_223_216" x="1568.44" y="11.6276" width="160.467" height="140.751" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.48405" result="effect1_foregroundBlur_223_216"/>
</filter>
<filter id="filter16_f_223_216" x="1558.22" y="0.403008" width="180.889" height="163.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="11.4577" result="effect1_foregroundBlur_223_216"/>
</filter>
<filter id="filter17_d_223_216" x="1565.18" y="7.97936" width="170.705" height="153.015" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1.86304" dy="2.48405"/>
<feGaussianBlur stdDeviation="8.91153"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_223_216"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_223_216" result="shape"/>
</filter>
</defs>
</svg>


<div className="w-full flex items-start justify-between ">
  <div className="w-[5%] absolute top-[20%] left-[4%]">
    <p className="!font-medium text-content-24 font-body  text-center ">Digital Accounts</p>
  </div>
  <div className="w-[8%] absolute top-[20%] left-[24.5%]">
    <p className="!font-medium text-content-24 font-body  text-center ">Pre-paid Cards Accounts</p>
  </div>
  <div className="w-[8%] absolute top-[20%] left-[45.5%]">
    <p className="!font-medium text-content-24 font-body  text-center ">Credit Card Accounts</p>
  </div>
  <div className="w-[5%] absolute top-[20%] left-[68.5%]">
    <p className="!font-medium text-content-24 font-body  text-center ">Loan Accounts</p>
  </div>
  <div className="w-[5%] absolute top-[20%] left-[89.5%]">
    <p className="!font-medium text-content-24 font-body  text-center ">Reward Account</p>
  </div>
  <div className="w-[5%] absolute top-[20%] left-[111%]">
    <p className="!font-medium text-content-24 font-body  text-center ">Redemption Account</p>
  </div>

</div>

            <div className="w-full flex items-start justify-between py-[2vw] max-sm:px-[5vw] max-sm:pl-[10vw] max-sm:justify-between  max-sm:w-[130%] max-md:shrink-0 max-sm:gap-0 max-md:gap-[35vw]  max-md:translate-x-[-60%] max-sm:translate-x-0 max-md:mt-[5vw]">
              <div className=" w-[18%] max-md:w-[30%] ">
                <ul className="pl-[2vw] list-disc space-y-[0.8vw] font-medium text-content-24 font-body  max-md:w-full text-center text1 textanim  max-sm:text-content-20 max-sm:text-left max-md:text-left max-md:text-content-20">
                  <li  className="max-md:text-nowrap">Fund Transfers</li>
                  <li>Collect payments / Settlements</li>
                  <li className="max-md:text-nowrap">Digital Payments</li>
                </ul>
              </div>
              <div className=" w-[30%]  max-sm:w-[30%] max-sm:ml-[6vw]">
                  <ul className="pl-[2vw] list-disc space-y-[0.8vw] font-medium text-content-24 font-body max-md:w-full text-center text1 textanim  max-sm:text-content-20 max-sm:text-left max-md:text-left max-md:text-content-20">
                  <li className="max-md:text-nowrap">Load Money</li>
                  <li>Card Controls</li>
                  <li className="max-md:text-nowrap">Spends</li>
                  <li>Card Statements</li>
                </ul>
              </div>{" "}
              <div className=" w-[30%] max-sm:pl-[6vw] max-sm:w-[30%]">
                  <ul className="  list-disc space-y-[0.8vw] font-medium text-content-24 font-body max-md:w-full text-center text1 textanim  max-sm:text-content-20 max-sm:text-left max-md:text-left max-md:text-content-20">
                  <li className="max-md:text-nowrap">Card Statement</li>
                  <li>Card Controls</li>
                  <li className="max-md:text-nowrap">Limit Management</li>
                  <li>Spends</li>
                  <li>Collection of Delinquent Amounts</li>
                  <li>Repayments</li>
                </ul>
              </div>{" "}
              <div className=" w-[18%]  max-sm:w-[30%] max-sm:ml-[5vw]">
                  <ul className="pl-[2vw] list-disc space-y-[0.8vw] font-medium text-content-24 font-body max-md:w-full  text-center text1 textanim  max-sm:text-content-20 max-sm:text-left max-md:text-left max-md:text-content-20">
                  <li className="max-md:text-nowrap">Loan Repayments</li>
                  <li >Collection of Delinquent Amount</li>
                  <li  className="max-md:text-nowrap">Loan Disbursement</li>
                  <li>Loan Statements</li>
                </ul>
              </div>{" "}
              <div className=" w-[18%] max-sm:w-[30%] max-sm:ml-[5vw]">
                  <ul className="pl-[2vw] list-disc space-y-[0.8vw] font-medium text-content-24 font-body max-md:w-full  text-center text1 textanim  max-sm:text-content-20 max-sm:text-left max-md:text-left max-md:text-content-20">
                  <li className="max-md:text-nowrap">Reward Points account Statement</li>
                  <li>Earn Reward Points</li>
                  <li className="max-md:text-nowrap">Tailored Loyalty Program</li>
                </ul>
              </div>
              <div className=" w-[30%] max-sm:w-[30%] max-md:ml-[4vw] max-sm:ml-[5vw]">
                  <ul className="pl-[2vw] list-disc space-y-[0.8vw] font-medium text-content-24 font-body max-md:w-full  text-center text1 textanim  max-sm:text-content-20 max-sm:text-left max-md:text-left max-md:text-content-20">
                  <li className="max-md:text-nowrap">Usage of Redeemed Amount</li>
                  <li>Redeem Reward Points</li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
        <div className="w-full mx-auto h-full text-white relative z-10  items-center gap-5 justify-end hidden max-sm:flex max-md:flex max-sm:mt-[10vw]">
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
  );
};

export default MobileInfrastructure;
