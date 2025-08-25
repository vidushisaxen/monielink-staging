"use client";
import Copy from "@/components/Animations/Copy";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);

const Videos = () => {
  const sectionRef = useRef(null);
  const svgContainer = useRef(null);

  useGSAP(() => {
    const svgGroups = [".svg-First"];

    // Initial states
    gsap.set(svgGroups, { opacity: 0 });

    svgGroups.forEach((group, index) => {
      gsap.set(`${group} .outer-Paths`, { scale: 1, opacity: 0 });
      gsap.set(`${group} .center-Group`, { scale: 1, opacity: 0 });
      gsap.set(`.text-${index + 1}`, { opacity: 0, y: 10 });

    });

    svgGroups.forEach((group, index) => {
      const outerPaths = `${group} .outer-Paths`;
      const centerGroup = `${group} .center-Group`;
      const textSelector = `.text-${index + 1}`; 
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
    });
  }, []);

  return (
    <>
      <section
        data-theme="orange"
        className="w-screen h-full overflow-hidden bg-gradient relative max-md:mt-[-1px] max-sm:pb-[15%]"
        ref={sectionRef}
      >
        <div className="px-[4vw] pb-[7vw] flex flex-col items-center  gap-[5vw] max-sm:px-[5.5vw]">
          <div className="w-[90%] max-md:w-[100%] max-sm:w-full">
            
            <Copy>
              <p className="text-head-60 font-display text-center">
              Help Videos
              </p>
            </Copy>
          </div>
          <div className='w-screen overflow-x-scroll flex flex-col items-center max-sm:items-start max-sm:pr-[5vw] max-md:pr-[2vw] scrollbar-hidden'>
          <div className="w-[18%] max-md:w-[150%] max-md:pr-[10vw] max-md:translate-x-[20%] max-sm:translate-x-1/2 max-sm:w-[55%]" ref={svgContainer}>
           
            <svg className="h-full w-full" width="292" height="263" viewBox="0 0 292 263" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g className="svg-First">
                <g className="outer-Paths">
<g filter="url(#filter0_f_2188_810)">
<path d="M60.8973 55.8866L87.4738 28.7661C89.3547 26.8467 91.9289 25.7651 94.6162 25.7651L257.216 25.7652C262.738 25.7652 267.216 30.2423 267.216 35.7652V164.399C267.216 167.038 266.173 169.57 264.314 171.443L234.014 201.981L202.649 233.47C200.772 235.353 198.223 236.412 195.564 236.412H34.8216C29.2988 236.412 24.8217 231.935 24.8216 226.412L24.8204 97.6157C24.8203 95.0404 25.8138 92.5644 27.594 90.7033L60.8973 55.8866Z" fill="#FF5E01"/>
</g>
<path d="M94.2959 26.2651H256.896C262.142 26.2652 266.396 30.5185 266.396 35.7651V164.399C266.396 166.906 265.404 169.311 263.639 171.09L233.339 201.628L201.975 233.117C200.192 234.906 197.77 235.912 195.244 235.913H34.501C29.2545 235.912 25.0011 231.659 25.001 226.413L25 97.6157C25 95.1693 25.9438 92.8172 27.6348 91.0493L60.9336 56.2358L60.9346 56.2368L87.5107 29.1157C89.2975 27.2925 91.7431 26.2651 94.2959 26.2651Z" stroke="white"/>
<g filter="url(#filter1_f_2188_810)">
<path d="M69.5408 64.045L93.0834 40.0205C94.9643 38.1011 97.5385 37.0195 100.226 37.0195L244.653 37.0195C250.176 37.0195 254.653 41.4967 254.653 47.0195V160.981C254.653 163.62 253.61 166.151 251.752 168.024L224.864 195.123L197.024 223.073C195.148 224.957 192.598 226.016 189.939 226.016H47.1731C41.6503 226.016 37.1731 221.539 37.1731 216.016L37.1719 101.898C37.1719 99.3222 38.1654 96.8462 39.9455 94.9852L69.5408 64.045Z" fill="#FF833B"/>
</g>


<g filter="url(#filter2_d_2188_810)">
<path d="M69.3259 63.6163L92.8686 39.5918C94.7494 37.6724 97.3236 36.5908 100.011 36.5908L244.438 36.5908C249.961 36.5908 254.438 41.068 254.438 46.5908V160.552C254.438 163.191 253.395 165.723 251.537 167.596L224.649 194.695L196.809 222.644C194.933 224.528 192.383 225.587 189.724 225.587H46.9582C41.4354 225.587 36.9583 221.11 36.9582 215.587L36.9571 101.469C36.957 98.8935 37.9506 96.4175 39.7307 94.5565L69.3259 63.6163Z" fill="#FF5100"/>
<path d="M100.011 37.0908H244.438C249.685 37.0909 253.938 41.3442 253.938 46.5908V160.553C253.938 163.059 252.947 165.464 251.182 167.243L224.295 194.342L196.455 222.291C194.672 224.081 192.251 225.087 189.725 225.087H46.958C41.7114 225.087 37.4581 220.834 37.458 215.587L37.457 101.469C37.457 99.0224 38.4008 96.6703 40.0918 94.9023L69.6875 63.9619L69.6865 63.9609L93.2256 39.9414C95.0123 38.1181 97.4579 37.0909 100.011 37.0908Z" stroke="white"/>
</g>
</g>
<g className="center-Group">
<path d="M120.784 107.089H148.95C156.222 107.089 162.117 112.984 162.117 120.256V141.922C162.117 149.194 156.222 155.089 148.95 155.089H120.784C113.512 155.089 107.617 149.194 107.617 141.922V120.256C107.617 112.984 113.512 107.089 120.784 107.089Z" stroke="white" strokeWidth="4"/>
<path d="M181.558 115.174C181.955 115.192 182.341 115.311 182.679 115.521C183.016 115.73 183.296 116.021 183.489 116.368C183.683 116.715 183.784 117.107 183.784 117.504V144.666C183.784 145.064 183.683 145.455 183.489 145.803C183.296 146.15 183.016 146.443 182.678 146.652C182.34 146.861 181.953 146.98 181.556 146.998C181.158 147.016 180.763 146.933 180.407 146.755L180.406 146.754L166.117 139.623V122.533L180.409 115.416H180.41C180.766 115.239 181.161 115.156 181.558 115.174Z" stroke="white" strokeWidth="4"/>
</g>
</g>
<defs>
<filter id="filter0_f_2188_810" x="16.8203" y="17.7651" width="258.395" height="226.647" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_2188_810"/>
</filter>
<filter id="filter1_f_2188_810" x="0.271873" y="0.11953" width="291.28" height="262.796" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="18.45" result="effect1_foregroundBlur_2188_810"/>
</filter>
<filter id="filter2_d_2188_810" x="11.257" y="11.8908" width="274.88" height="246.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="4"/>
<feGaussianBlur stdDeviation="14.35"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2188_810"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2188_810" result="shape"/>
</filter>
</defs>
</svg>


            <div className="w-full flex items-start justify-between py-[2vw] max-sm:justify-start max-sm:gap-[18vw]">
              <div className=" w-full max-md:w-[30%] overflow-hidden max-sm:w-full">
                <p className=" text-content-24 font-body max-md:text-content-20 text-center text-1  ">
                Users can watch help videos to learn how to use products or services offered through the Monielink super SDK

                </p>
              </div>
            </div>
            </div>
            </div>
          
        </div>
      </section>
    </>
  );
};

export default Videos;
