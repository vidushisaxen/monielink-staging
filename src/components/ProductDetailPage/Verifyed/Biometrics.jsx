"use client";
import Copy from "@/components/Animations/Copy";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);

const Biometrics = () => {
  const sectionRef = useRef(null);
  const svgContainer = useRef(null);

  useGSAP(() => {
if(globalThis.innerWidth>1024){


    const svgGroups = [".svg-First", ".svg-Second", ".svg-Third"];

    // Initial states
    gsap.set(svgGroups, { opacity: 0 });

    svgGroups.forEach((group, index) => {
      gsap.set(`${group} .outer-paths`, { scale: 1, opacity: 0 });
      gsap.set(`${group} .center-Group`, { scale: 1, opacity: 0 });
      gsap.set(`.line${index + 1}`, { drawSVG: "0%" });
      gsap.set(`.text${index + 1}`, { opacity: 0, y: 10 });
    });

    svgGroups.forEach((group, index) => {
      const outerPaths = `${group} .outer-paths`;
      const centerGroup = `${group} .center-Group`;
      const lineSelector = `.line${index + 1}`;
      const textSelector = `.text${index + 1}`;
      const start = `${index * 10 + 10}% 75%`; 
      const end = `${index * 20 + 20}% center`;
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
  }
  }, []);

  return (
    <>
      <section
        data-theme="orange"
        className="w-screen h-full max-md:mt-[-1px] overflow-hidden bg-gradient relative"
        ref={sectionRef}
      >
        <div className="px-[4vw] flex flex-col items-center  gap-[7vw] max-sm:px-[0vw] max-sm:items-start max-sm:pb-[20%] max-md:px-[5vw] max-sm:gap-[15vw]">
            <div className='w-screen max-sm:overflow-x-scroll flex flex-col items-center max-sm:items-start max-sm:pr-[5vw] max-sm:pl-[10vw] scrollbar-hidden'>

          <div className="w-[50%] max-md:w-[80%] max-sm:w-[180%]" ref={svgContainer}>
           
            <svg className="w-full h-full max-sm:scale-[1.1]" width="884" height="264" viewBox="0 0 884 264" fill="none" xmlns="http://www.w3.org/2000/svg">

<g className="svg-First">
<g className="outer-paths">
<g filter="url(#filter0_f_154_327)">
<path d="M61.077 57.1214L87.6535 30.0009C89.5344 28.0816 92.1086 27 94.7958 27L257.395 27C262.918 27 267.395 31.4772 267.395 37V165.634C267.395 168.273 266.352 170.804 264.494 172.677L234.194 203.216L202.829 234.704C200.952 236.588 198.403 237.647 195.744 237.647H35.0013C29.4785 237.647 25.0014 233.17 25.0013 227.647L25 98.8506C25 96.2753 25.9935 93.7992 27.7737 91.9382L61.077 57.1214Z" fill="#FF5E01"/>
</g>
<path d="M94.7959 27.5H257.396C262.642 27.5001 266.896 31.7534 266.896 37V165.634C266.896 168.14 265.904 170.546 264.139 172.325L233.839 202.863L202.475 234.352C200.692 236.141 198.27 237.147 195.744 237.147H35.001C29.7545 237.147 25.5011 232.894 25.501 227.647L25.5 98.8506C25.5 96.4042 26.4438 94.0521 28.1348 92.2842L61.4336 57.4707L61.4346 57.4717L88.0107 30.3506C89.7975 28.5273 92.2431 27.5 94.7959 27.5Z" fill="#FF5100" stroke="white"/>
<g filter="url(#filter1_f_154_327)">
<path d="M69.822 64.8497L93.3647 40.8252C95.2455 38.9058 97.8197 37.8242 100.507 37.8242L244.934 37.8242C250.457 37.8242 254.934 42.3014 254.934 47.8242V161.786C254.934 164.424 253.892 166.956 252.033 168.829L225.145 195.928L197.305 223.878C195.429 225.762 192.879 226.821 190.22 226.821H47.4543C41.9315 226.821 37.4544 222.343 37.4543 216.821L37.4532 102.702C37.4531 100.127 38.4467 97.6509 40.2268 95.7899L69.822 64.8497Z" fill="#FF833B"/>
</g>
<g filter="url(#filter2_d_154_327)">
<path d="M69.822 64.8497L93.3647 40.8252C95.2455 38.9058 97.8197 37.8242 100.507 37.8242L244.934 37.8242C250.457 37.8242 254.934 42.3014 254.934 47.8242V161.786C254.934 164.424 253.892 166.956 252.033 168.829L225.145 195.928L197.305 223.878C195.429 225.762 192.879 226.821 190.22 226.821H47.4543C41.9315 226.821 37.4544 222.343 37.4543 216.821L37.4532 102.702C37.4531 100.127 38.4467 97.6509 40.2268 95.7899L69.822 64.8497Z" fill="#FF5100"/>
<path d="M100.507 38.3242H244.935C250.181 38.3243 254.435 42.5776 254.435 47.8242V161.786C254.434 164.293 253.443 166.697 251.678 168.477L224.791 195.575L196.951 223.524C195.169 225.314 192.747 226.32 190.221 226.32H47.4541C42.2075 226.32 37.9542 222.067 37.9541 216.82L37.9531 102.702C37.9531 100.256 38.8969 97.9037 40.5879 96.1357L70.1836 65.1953L70.1826 65.1943L93.7217 41.1748C95.5084 39.3515 97.954 38.3243 100.507 38.3242Z" stroke="white"/>
</g>
</g>
<g className="center-Group">
<g filter="url(#filter2_d_239_669)">
<path d="M70.1267 64.8731L93.6694 40.8486C95.5502 38.9292 98.1244 37.8477 100.812 37.8477L245.239 37.8477C250.762 37.8477 255.239 42.3248 255.239 47.8477V161.809C255.239 164.448 254.196 166.979 252.338 168.853L225.45 195.952L197.61 223.901C195.734 225.785 193.184 226.844 190.525 226.844H47.759C42.2362 226.844 37.759 222.367 37.759 216.844L37.7579 102.726C37.7578 100.15 38.7513 97.6743 40.5315 95.8133L70.1267 64.8731Z" fill="#FF5100"/>
<path d="M100.812 38.3477H245.239C250.486 38.3478 254.739 42.601 254.739 47.8477V161.81C254.739 164.316 253.748 166.721 251.982 168.5L225.096 195.599L197.256 223.548C195.473 225.337 193.051 226.344 190.525 226.344H47.7588C42.5122 226.344 38.2588 222.09 38.2588 216.844L38.2578 102.726C38.2578 100.279 39.2016 97.9271 40.8926 96.1592L70.4883 65.2188L70.4873 65.2178L94.0264 41.1982C95.8131 39.375 98.2587 38.3477 100.812 38.3477Z" stroke="white"/>
</g>
<g clipPath="url(#clip0_239_669)">
<mask id="mask0_239_669" maskUnits="userSpaceOnUse" x="117" y="89" width="58" height="75">
<path d="M174.998 89.5967H118V163.17H174.998V89.5967Z" fill="white"/>
</mask>
<g mask="url(#mask0_239_669)">
<path d="M167.682 145.717L165.564 141.482C165.104 140.666 165.069 138.117 165.048 137.232L164.784 125.856L164.612 119.063C164.574 117.547 162.914 116.334 160.88 116.334C159.85 116.334 158.917 116.645 158.241 117.148C157.566 117.652 157.148 118.347 157.148 119.115V129.578" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M150.304 151.073C149.428 150.42 148.851 150.446 148.851 150.446L145.058 149.352C143.953 148.773 142.874 147.852 140.748 144.508" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M133.623 144.359H151.74C154.641 144.359 156.992 141.875 156.992 138.809V101.762C156.992 98.6967 154.641 96.2119 151.74 96.2119H133.623C130.723 96.2119 128.372 98.6967 128.372 101.762V138.809C128.372 141.875 130.723 144.359 133.623 144.359Z" stroke="white" strokeWidth="1.80546" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M125.549 122.058H128.212V116.467H125.549C123.478 116.467 122.198 117.719 122.198 119.262C122.198 120.806 123.478 122.058 125.549 122.058Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M125.549 127.647H128.212V122.057H125.549C123.478 122.057 122.198 123.308 122.198 124.852C122.198 126.396 123.478 127.647 125.549 127.647Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M125.549 133.238H128.212V127.648H125.549C123.478 127.648 122.198 128.899 122.198 130.443C122.198 131.987 123.478 133.238 125.549 133.238Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M125.549 138.829H128.212V133.238H125.549C123.478 133.238 122.198 134.49 122.198 136.034C122.198 137.578 123.478 138.829 125.549 138.829Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M148.289 160.786L147.414 154.045C147.204 152.815 147.166 152 148.289 151.668L167.922 145.86C169.045 145.527 170.473 146.053 171.112 147.034L171.113 160.786" stroke="white" strokeWidth="1.80546" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<g clipPath="url(#clip1_239_669)">
<path d="M142.777 120.743C145.041 120.743 146.876 118.908 146.876 116.644C146.876 114.38 145.041 112.545 142.777 112.545C140.513 112.545 138.678 114.38 138.678 116.644C138.68 118.907 140.514 120.741 142.777 120.743ZM142.777 113.321C144.612 113.321 146.1 114.809 146.1 116.644C146.1 118.48 144.612 119.968 142.777 119.968C140.941 119.968 139.453 118.48 139.453 116.644C139.456 114.809 140.942 113.323 142.777 113.321Z" fill="white"/>
<path d="M142.777 122.289C146.163 122.289 148.908 125.035 148.908 128.421V128.452H136.645V128.421C136.645 125.034 139.39 122.289 142.777 122.289Z" stroke="white" strokeWidth="1.1576"/>
</g>
<path d="M136.333 97.1377C136.333 99.3468 138.124 101.138 140.333 101.138H145.88C148.09 101.138 149.88 99.3468 149.88 97.1377V96.2358H136.333V97.1377Z" stroke="white" strokeWidth="1.80546" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M133.157 114.098L133.158 110.053L137.203 110.053" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M133.157 130.052L133.158 134.098L137.203 134.098" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M152.204 114.098L152.203 110.053L148.158 110.053" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M152.204 130.052L152.203 134.098L148.158 134.098" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

</g>
</g>
</g>
<line x1="267" y1="143.5" x2="327" y2="143.5" stroke="white" className="line1"/>

<g className="svg-Second">
<g className="outer-paths">
<g filter="url(#filter3_f_154_327)">
<path d="M363.077 57.1214L389.654 30.0009C391.534 28.0816 394.109 27 396.796 27L559.395 27C564.918 27 569.395 31.4772 569.395 37V165.634C569.395 168.273 568.352 170.804 566.494 172.677L536.194 203.216L504.829 234.704C502.952 236.588 500.403 237.647 497.744 237.647H337.001C331.479 237.647 327.001 233.17 327.001 227.647L327 98.8506C327 96.2753 327.994 93.7992 329.774 91.9382L363.077 57.1214Z" fill="#FF5E01"/>
</g>
<path d="M396.796 27.5H559.396C564.642 27.5001 568.896 31.7534 568.896 37V165.634C568.896 168.14 567.904 170.546 566.139 172.325L535.839 202.863L504.475 234.352C502.692 236.141 500.27 237.147 497.744 237.147H337.001C331.755 237.147 327.501 232.894 327.501 227.647L327.5 98.8506C327.5 96.4042 328.444 94.0521 330.135 92.2842L363.434 57.4707L363.435 57.4717L390.011 30.3506C391.798 28.5273 394.243 27.5 396.796 27.5Z" stroke="white"/>
<g filter="url(#filter4_f_154_327)">
<path d="M371.822 64.8497L395.365 40.8252C397.246 38.9058 399.82 37.8242 402.507 37.8242L546.934 37.8242C552.457 37.8242 556.934 42.3014 556.934 47.8242V161.786C556.934 164.424 555.892 166.956 554.033 168.829L527.145 195.928L499.305 223.878C497.429 225.762 494.879 226.821 492.22 226.821H349.454C343.932 226.821 339.454 222.343 339.454 216.821L339.453 102.702C339.453 100.127 340.447 97.6509 342.227 95.7899L371.822 64.8497Z" fill="#FF833B"/>
</g>
<g filter="url(#filter5_d_154_327)">
<path d="M371.822 64.8497L395.365 40.8252C397.246 38.9058 399.82 37.8242 402.507 37.8242L546.934 37.8242C552.457 37.8242 556.934 42.3014 556.934 47.8242V161.786C556.934 164.424 555.892 166.956 554.033 168.829L527.145 195.928L499.305 223.878C497.429 225.762 494.879 226.821 492.22 226.821H349.454C343.932 226.821 339.454 222.343 339.454 216.821L339.453 102.702C339.453 100.127 340.447 97.6509 342.227 95.7899L371.822 64.8497Z" fill="#FF5100"/>
<path d="M402.507 38.3242H546.935C552.181 38.3243 556.435 42.5776 556.435 47.8242V161.786C556.434 164.293 555.443 166.697 553.678 168.477L526.791 195.575L498.951 223.524C497.169 225.314 494.747 226.32 492.221 226.32H349.454C344.208 226.32 339.954 222.067 339.954 216.82L339.953 102.702C339.953 100.256 340.897 97.9037 342.588 96.1357L372.184 65.1953L372.183 65.1943L395.722 41.1748C397.508 39.3515 399.954 38.3243 402.507 38.3242Z" stroke="white"/>
</g>
</g>
<g className="center-Group">
<g clipPath="url(#clip0_154_327)">
<mask id="mask0_154_327"  maskUnits="userSpaceOnUse" x="407" y="102" width="83" height="62">
<path d="M407 102.001H489.053V163.148H407V102.001Z" fill="white"/>
</mask>
<g mask="url(#mask0_154_327)">
<path d="M437.062 141.938L438.272 139.79C438.732 138.974 438.979 138.1 439 137.215L439.264 125.839L439.436 119.046C439.474 117.53 441.135 116.317 443.168 116.317C444.199 116.317 445.132 116.628 445.808 117.131C446.483 117.635 446.901 118.33 446.901 119.098V129.561" stroke="white" strokeWidth="1.80546" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M453.109 153.887L454.93 152.53C455.807 151.877 456.97 151.484 458.206 151.424L461.581 151.259C467.884 150.951 473.53 148.307 476.648 144.252" stroke="white" strokeWidth="1.80546" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M475.425 144.34H453.309C449.769 144.34 446.898 142.201 446.898 139.563V107.675C446.898 105.037 449.769 102.898 453.309 102.898H475.425C478.965 102.898 481.835 105.037 481.835 107.675V139.563C481.835 142.201 478.965 144.34 475.425 144.34Z" stroke="white" strokeWidth="1.80546" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M477.032 119.824V108.269C477.032 107.28 475.956 106.478 474.628 106.478H470.213C469.505 106.478 468.931 106.906 468.931 107.433C468.931 108.325 467.961 109.048 466.765 109.048H461.978C460.782 109.048 459.812 108.325 459.812 107.433C459.812 106.906 459.237 106.478 458.529 106.478H454.115C452.787 106.478 451.711 107.28 451.711 108.269V138.962C451.711 139.952 452.787 140.754 454.115 140.754H474.628C475.956 140.754 477.032 139.952 477.032 138.962V120.027" stroke="white" strokeWidth="1.80546" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M468.178 126.267C470.144 126.727 471.902 127.536 473.323 128.594C475.615 130.299 477.032 132.655 477.032 135.258V138.962C477.032 139.951 475.955 140.754 474.628 140.754H454.115C452.788 140.754 451.711 139.951 451.711 138.962V135.258C451.711 131.041 455.432 127.47 460.565 126.267" stroke="white" strokeWidth="1.80546" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M464.377 127.145H464.37C460.64 127.145 457.617 124.892 457.617 122.112V115.98C457.617 114.351 459.389 113.03 461.576 113.03H467.171C469.357 113.03 471.129 114.351 471.129 115.98V122.112C471.129 124.892 468.106 127.145 464.377 127.145Z" stroke="white" strokeWidth="1.80546" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M457.617 119.727L463.342 118.322C465.454 117.805 467.768 118.042 469.612 118.966L471.129 119.727" stroke="white" strokeWidth="1.80546" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M465.576 105.975C465.576 106.47 465.038 106.871 464.374 106.871C463.71 106.871 463.172 106.47 463.172 105.975C463.172 105.481 463.71 105.08 464.374 105.08C465.038 105.08 465.576 105.481 465.576 105.975Z" fill="white"/>
<path d="M484.507 122.039H481.844V116.448H484.507C486.579 116.448 487.858 117.7 487.858 119.244C487.858 120.788 486.579 122.039 484.507 122.039Z" stroke="white" strokeWidth="1.80546" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M484.507 127.629H481.844V122.038H484.507C486.579 122.038 487.858 123.29 487.858 124.834C487.858 126.377 486.579 127.629 484.507 127.629Z" stroke="white" strokeWidth="1.80546" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M484.507 133.219H481.844V127.628H484.507C486.579 127.628 487.858 128.88 487.858 130.423C487.858 131.967 486.579 133.219 484.507 133.219Z" stroke="white" strokeWidth="1.80546" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M484.507 138.809H481.844V133.218H484.507C486.579 133.218 487.858 134.469 487.858 136.013C487.858 137.557 486.579 138.809 484.507 138.809Z" stroke="white" strokeWidth="1.80546" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M427.134 146.341L408.203 160.523" stroke="white" strokeWidth="1.80546" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M445.376 162.254L453.155 156.457C454.094 155.757 454.094 154.623 453.155 153.924L436.738 141.69C435.799 140.99 434.277 140.99 433.338 141.69L427.25 146.252" stroke="white" strokeWidth="1.80546" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</g>
</g>
</g>
<path d="M569 143.5L617 143.5" stroke="white" className="line2"/>

<g className="svg-Third">
<g className="outer-paths">
<g filter="url(#filter6_f_154_327)">
<path d="M653.077 57.1214L679.654 30.0009C681.534 28.0816 684.109 27 686.796 27L849.395 27C854.918 27 859.395 31.4772 859.395 37V165.634C859.395 168.273 858.352 170.804 856.494 172.677L826.194 203.216L794.829 234.704C792.952 236.588 790.403 237.647 787.744 237.647H627.001C621.479 237.647 617.001 233.17 617.001 227.647L617 98.8506C617 96.2753 617.994 93.7992 619.774 91.9382L653.077 57.1214Z" fill="#FF5E01"/>
</g>
<path d="M686.796 27.5H849.396C854.642 27.5001 858.896 31.7534 858.896 37V165.634C858.896 168.14 857.904 170.546 856.139 172.325L825.839 202.863L794.475 234.352C792.692 236.141 790.27 237.147 787.744 237.147H627.001C621.755 237.147 617.501 232.894 617.501 227.647L617.5 98.8506C617.5 96.4042 618.444 94.0521 620.135 92.2842L653.434 57.4707L653.435 57.4717L680.011 30.3506C681.798 28.5273 684.243 27.5 686.796 27.5Z" stroke="white"/>
<g filter="url(#filter7_f_154_327)">
<path d="M661.822 64.8497L685.365 40.8252C687.246 38.9058 689.82 37.8242 692.507 37.8242L836.934 37.8242C842.457 37.8242 846.934 42.3014 846.934 47.8242V161.786C846.934 164.424 845.892 166.956 844.033 168.829L817.145 195.928L789.305 223.878C787.429 225.762 784.879 226.821 782.22 226.821H639.454C633.932 226.821 629.454 222.343 629.454 216.821L629.453 102.702C629.453 100.127 630.447 97.6509 632.227 95.7899L661.822 64.8497Z" fill="#FF833B"/>
</g>
<g filter="url(#filter8_d_154_327)">
<path d="M661.822 64.8497L685.365 40.8252C687.246 38.9058 689.82 37.8242 692.507 37.8242L836.934 37.8242C842.457 37.8242 846.934 42.3014 846.934 47.8242V161.786C846.934 164.424 845.892 166.956 844.033 168.829L817.145 195.928L789.305 223.878C787.429 225.762 784.879 226.821 782.22 226.821H639.454C633.932 226.821 629.454 222.343 629.454 216.821L629.453 102.702C629.453 100.127 630.447 97.6509 632.227 95.7899L661.822 64.8497Z" fill="#FF5100"/>
<path d="M692.507 38.3242H836.935C842.181 38.3243 846.435 42.5776 846.435 47.8242V161.786C846.434 164.293 845.443 166.697 843.678 168.477L816.791 195.575L788.951 223.524C787.169 225.314 784.747 226.32 782.221 226.32H639.454C634.208 226.32 629.954 222.067 629.954 216.82L629.953 102.702C629.953 100.256 630.897 97.9037 632.588 96.1357L662.184 65.1953L662.183 65.1943L685.722 41.1748C687.508 39.3515 689.954 38.3243 692.507 38.3242Z" stroke="white"/>
</g>
</g>
<g className="center-Group">
<path d="M751.526 134.468C748.045 134.456 744.714 135.89 742.331 138.428C738.903 135.693 734.643 134.21 730.258 134.227H730.223C724.952 134.238 720.061 136.287 716.436 140.015C712.753 143.779 710.739 148.923 710.75 154.505C710.752 154.811 710.872 155.103 711.084 155.322C711.3 155.539 711.595 155.659 711.901 155.656L742.112 155.599C742.181 155.679 742.25 155.748 742.319 155.829C746.286 160.027 752.591 161.008 757.646 158.216C762.701 155.423 765.227 149.564 763.786 143.972C762.344 138.379 757.302 134.47 751.526 134.468ZM713.086 153.343C713.328 148.82 715.078 144.688 718.081 141.616C721.27 138.336 725.585 136.529 730.223 136.529H730.258C734.129 136.513 737.889 137.821 740.915 140.234C738.365 144.173 738.197 149.197 740.478 153.297L713.086 153.343ZM751.526 157.486C745.806 157.486 741.169 152.849 741.169 147.128C741.169 141.408 745.806 136.77 751.526 136.77C757.247 136.77 761.884 141.408 761.884 147.128C761.884 152.849 757.247 157.486 751.526 157.486Z" fill="white"/>
<path d="M730.235 131.486C736.954 131.486 742.4 126.04 742.4 119.322C742.4 112.603 736.954 107.156 730.235 107.156C723.517 107.156 718.07 112.603 718.07 119.322C718.077 126.037 723.519 131.48 730.235 131.486ZM730.235 109.458C735.683 109.458 740.098 113.874 740.098 119.322C740.098 124.768 735.683 129.185 730.235 129.185C724.788 129.185 720.372 124.768 720.372 119.322C720.379 113.877 724.791 109.465 730.235 109.458Z" fill="white"/>
<path d="M755.403 143.618L749.844 148.141L747.807 145.759C747.393 145.276 746.667 145.219 746.184 145.632C745.701 146.045 745.644 146.772 746.058 147.255L748.82 150.489C749.039 150.744 749.358 150.891 749.695 150.892C749.958 150.894 750.214 150.805 750.419 150.639L756.853 145.402C757.339 145 757.41 144.281 757.012 143.792C756.614 143.302 755.896 143.225 755.403 143.618Z" fill="white"/>
</g>
</g>
<defs>
<filter id="filter0_f_154_327" x="17" y="19" width="258.398" height="226.648" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_154_327"/>
</filter>
<filter id="filter1_f_154_327" x="0.553123" y="0.924217" width="291.284" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_154_327"/>
</filter>
<filter id="filter2_d_154_327" x="11.7531" y="13.1242" width="274.884" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="4"/>
<feGaussianBlur stdDeviation="14.35"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_154_327"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_154_327" result="shape"/>
</filter>
<filter id="filter3_f_154_327" x="319" y="19" width="258.398" height="226.648" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_154_327"/>
</filter>
<filter id="filter4_f_154_327" x="302.553" y="0.924217" width="291.284" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_154_327"/>
</filter>
<filter id="filter5_d_154_327" x="313.753" y="13.1242" width="274.884" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="4"/>
<feGaussianBlur stdDeviation="14.35"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_154_327"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_154_327" result="shape"/>
</filter>
<filter id="filter6_f_154_327" x="609" y="19" width="258.398" height="226.648" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_154_327"/>
</filter>
<filter id="filter7_f_154_327" x="592.553" y="0.924217" width="291.284" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_154_327"/>
</filter>
<filter id="filter8_d_154_327" x="603.753" y="13.1242" width="274.884" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="4"/>
<feGaussianBlur stdDeviation="14.35"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_154_327"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_154_327" result="shape"/>
</filter>
<clipPath id="clip0_154_327">
<rect width="82.0526" height="61.1473" fill="white" transform="translate(407 102)"/>
</clipPath>
</defs>
</svg>


            <div className="w-full flex items-start gap-[5vw] justify-between py-[2vw] pl-[2vw] max-sm:px-[5vw] max-sm:justify-start max-md:gap-[5vw]  max-sm:translate-x-[-7%] max-sm:w-[115%]">
              <div className="w-[20%] max-md:pl-[2vw]  overflow-hidden max-sm:w-[35%] max-md:w-[20%]">
                <p className=" text-content-24  font-body  text1   max-sm:text-content-20 max-md:text-content-20  max-sm:text-left ">
                  Customers submit a selfie
                </p>
              </div>
              <div className=" w-[30%] overflow-hidden max-sm:w-[30%] max-md:w-[35%]">
                <p className=" text-content-24  font-body   text2  max-sm:text-content-20 max-md:text-content-20  max-sm:text-left  ">
                  System detects liveness and matches with profile image{" "}
                </p>
              </div>{" "}
              <div className=" w-[25%] overflow-hidden max-sm:w-[30%] max-md:w-[25%]  ">
                <p className=" text-content-24  font-body  text3  max-sm:text-content-20 max-md:text-content-20  max-sm:text-left ">
                  Used across NIN, BVN, and ID steps
                </p>
              </div>
            </div>
          </div>

            </div>
  <div className="w-full mx-auto h-full text-white relative z-10  items-center gap-5 justify-end hidden max-sm:flex max-sm:pr-[5.5vw]">
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
  );
};

export default Biometrics;
