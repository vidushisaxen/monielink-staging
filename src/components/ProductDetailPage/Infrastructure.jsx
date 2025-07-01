"use client"
import React, { useEffect, useRef, useState } from 'react'
import Copy from '../Animations/Copy'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Balance1, Balance2, Balance3, Balance4, Balance5, Balance6 } from '../Icons';
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);


const Infrastructure = () => {
 const svgRefs = [useRef(null), useRef(null), useRef(null),useRef(null),useRef(null),useRef(null)];

 const data =[
  {
    svgElement:<Balance1/>,
    svg:svgRefs[0],

  },
  {
    svgElement:<Balance2/>,
    svg:svgRefs[1],
    classes:"ml-[10vw] mt-[-5vw]"

  },
  {
    svgElement:<Balance3/>,
    svg:svgRefs[2],
     classes:"ml-[28vw] mt-[-8vw]"
  },
  {
    svgElement:<Balance4/>,
    svg:svgRefs[3],
    classes:"ml-[5vw] mt-[-7vw]"

  },
  {
    svgElement:<Balance5/>,
    svg:svgRefs[4],
    classes:"ml-[50vw] mt-[0.5vw]"

  },
  {
    svgElement:<Balance6/>,
    svg:svgRefs[5],
    classes:"ml-[14vw] mt-[-10vw]"

  }
]

// useGSAP(() => {
//   svgRefs.forEach((ref) => {
//     const el = ref.current;

//     const centerGroup = el?.querySelectorAll(".center-group");
//     const lines = el?.querySelectorAll(".path-line");
//     const rects = el?.querySelectorAll(".rect");

//     if (centerGroup.length > 0) {
//       gsap.set(centerGroup, { scale: 0.5, opacity: 0, transformOrigin: "center" });
//     }

//     lines.forEach(line => {
//       const length = line.getTotalLength();
//       gsap.set(line, {
//         strokeDasharray: length,
//         strokeDashoffset: length,
//         opacity: 1
//       });
//     });

//     if (rects.length > 0) {
//       gsap.set(rects, { opacity: 0, scale: 0, transformOrigin: "center" });
//     }


//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: el,
//         start: "top 80%",
//         end: "bottom 20%",
//         scrub: false,
//         toggleActions: "play reverse play reverse",
//         onLeave: () => {
//           gsap.to(lines, {
//             opacity: 0,
//             duration: 0.1,
//             ease: "none"
//           });
        
//           gsap.to(rects, {
//             opacity: 0,
//             duration: 0.1,
//             ease: "none"
//           });
        
//           gsap.to(centerGroup, {
//             opacity: 0.5,
//             duration: 0.1,
//             ease: "none"
//           });
//         },
        
//         onEnterBack: () => {
//           gsap.to(lines, {
//             opacity: 1,
//             duration: 0.1,
//             ease: "none"
//           });
        
//           gsap.to(rects, {
//             opacity: 1,
//             duration: 0.1,
//             ease: "none"
//           });
        
//           gsap.to(centerGroup, {
//             opacity: 1,
//             duration: 0.1,
//             ease: "none"
//           });
//         },
        
//       }
//     });

//     if (centerGroup.length > 0) {
//       tl.to(centerGroup, {
//         scale: 1,
//         opacity: 1,
//         duration: 1,
//         ease: "power3.out",
//       });
//     }

//     tl.to(lines, {
//       strokeDashoffset: 0,
//       duration: 1.2,
//       stagger: 0.2,
//       ease: "power2.out",
//     }, "<0.3");

//     if (rects.length > 0) {
//       tl.to(rects, {
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         stagger: 0.1,
//         ease: "power2.out",
//       }, "<0.5");
//     }
//   });

//   return () => {
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//   };
// }, []);

// useGSAP(() => {
//   const ANIMATION_DURATION = 2; 
//   let currentStep = 0;
//   let isAnimating = false;
  
//   svgRefs.forEach((ref, index) => {
//     const el = ref.current;
//     if (!el) return;

//     const centerGroup = el.querySelectorAll(".center-group");
//     const lines = el.querySelectorAll(".path-line");
//     const rects = el.querySelectorAll(".rect");
   
//     if (index === 0) {
//       gsap.set(centerGroup, { opacity: 1, scale: 1 });
//       gsap.set(lines, { opacity: 1, drawSVG: "100%" });
//       gsap.set(rects, { opacity: 1, scale: 1 });
//     } else {
//       gsap.set(centerGroup, { opacity: 0.5, scale: 1 });
//       gsap.set(lines, { opacity: 0, drawSVG: "0%" });
//       gsap.set(rects, { opacity: 0, scale: 0.5 });
//     }
//   });

//   const animateToStep = (stepIndex) => {
//     if (isAnimating || stepIndex < 0 || stepIndex >= svgRefs.length) return;
    
//     isAnimating = true;
//     currentStep = stepIndex;
    
//     document.body.style.overflow = 'hidden';
    
//     const currentRef = svgRefs[stepIndex];
//     if (!currentRef.current) return;
    
//     const centerGroup = currentRef.current.querySelectorAll(".center-group");
//     const lines = currentRef.current.querySelectorAll(".path-line");
//     const rects = currentRef.current.querySelectorAll(".rect");
    
//     const tl = gsap.timeline({
//       onComplete: () => {
//         isAnimating = false;
//         document.body.style.overflow = 'auto';
//       }
//     });
   
//     tl.to(centerGroup, { 
//       opacity: 1, 
//       scale: 1, 
//       duration: 0.8, 
//       ease: "back.out(1.2)" 
//     }, 0)
//     .to(lines, { 
//       opacity: 1, 
//       drawSVG: "100%", 
//       duration: 1.2, 
//       ease: "power2.out"
//     }, 0.2)
//     .to(rects, { 
//       opacity: 1, 
//       scale: 1, 
//       duration: 0.8, 
//       ease: "back.out(1.1)"
//     }, 0.4);
    
//     svgRefs.forEach((otherRef, otherIndex) => {
//       if (otherIndex !== stepIndex && otherRef.current) {
//         const otherEl = otherRef.current;
//         const otherCenterGroup = otherEl.querySelectorAll(".center-group");
//         const otherLines = otherEl.querySelectorAll(".path-line");
//         const otherRects = otherEl.querySelectorAll(".rect");
        
//         tl.to(otherCenterGroup, { 
//           opacity: 0.5, 
//           scale: 1, 
//           duration: 0.6, 
//           ease: "power2.out" 
//         }, 0)
//         .to(otherLines, { 
//           opacity: 0, 
//           drawSVG: "0%", 
//           duration: 0.5, 
//           ease: "power2.out" 
//         }, 0)
//         .to(otherRects, { 
//           opacity: 0, 
//           scale: 0.5, 
//           duration: 0.5, 
//           ease: "power2.out" 
//         }, 0);
//       }
//     });
//   };

//   let scrollTimeout;
//   const handleScroll = (e) => {
//     if (isAnimating) {
//       e.preventDefault();
//       return false;
//     }
    
//     clearTimeout(scrollTimeout);
//     scrollTimeout = setTimeout(() => {
//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const documentHeight = document.documentElement.scrollHeight;
//       const scrollProgress = scrollY / (documentHeight - windowHeight);
//       const targetStep = Math.floor(scrollProgress * svgRefs.length);
//       const clampedStep = Math.max(0, Math.min(svgRefs.length - 1, targetStep));
     
//       if (clampedStep !== currentStep) {
//         animateToStep(clampedStep);
//       }
//     }, 50); 
//   };

//   svgRefs.forEach((ref, index) => {
//     const el = ref.current;
//     if (!el) return;

//     ScrollTrigger.create({
//       trigger: el,
//       start: "top center",
//       end: "bottom center",
//       onEnter: () => {
//         if (currentStep !== index && !isAnimating) {
//           animateToStep(index);
//         }
//       },
//       onEnterBack: () => {
//         if (currentStep !== index && !isAnimating) {
//           animateToStep(index);
//         }
//       }
//     });
//   });

//   window.addEventListener('scroll', handleScroll, { passive: false });
  
  
//   return () => {
//     window.removeEventListener('scroll', handleScroll);
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     document.body.style.overflow = 'auto'; 
//   };
// }, []);
const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const isAnimating = useRef(false);
  const wrappers = useRef([]);
  const pendingDirection = useRef(0);

  useEffect(() => {
    wrappers.current = gsap.utils.toArray(".svg-wrapper");

    wrappers.current.forEach((wrapper) => {
      const svg = wrapper.querySelector("svg");
      gsap.set(svg.querySelectorAll(".path-line"), {
        drawSVG: "0% 0%",
        opacity: 0,
      });
      gsap.set(svg.querySelectorAll(".rect"), {
        scale: 0.5,
        opacity: 0,
        transformOrigin: "center",
      });
    });

    animateSVGAtIndex(index);

    // Use ScrollTrigger to activate only when section is in view
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "20% 60%",
      markers:true,
      // end: "bottom center",
      onEnter: () => {
        // Attach scroll listener when section enters view
        sectionRef.current.addEventListener("wheel", handleWheel, {
          passive: false,
        });
      },
      onLeave: () => {
        // Detach when leaving view
        sectionRef.current.removeEventListener("wheel", handleWheel);
      },
      onLeaveBack: () => {
        sectionRef.current.removeEventListener("wheel", handleWheel);
      },
    });

    return () => {
      sectionRef.current?.removeEventListener("wheel", handleWheel);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [index]);

  const handleWheel = (e) => {
    e.preventDefault();
    const direction = e.deltaY > 0 ? 1 : -1;
    const nextIndex = index + direction;

    if (isAnimating.current) {
      pendingDirection.current = direction;
      return;
    }

    if (nextIndex >= 0 && nextIndex < wrappers.current.length) {
      isAnimating.current = true;
      pendingDirection.current = 0;
      setIndex(nextIndex);
    }
  };

  const animateSVGAtIndex = (i) => {
    wrappers.current.forEach((wrapper, idx) => {
      const svg = wrapper.querySelector("svg");
      const lines = svg.querySelectorAll(".path-line");
      const rects = svg.querySelectorAll(".rect");

      if (idx === i) {
        const tl = gsap.timeline({
          onComplete: () => {
            isAnimating.current = false;

            if (pendingDirection.current !== 0) {
              const newIndex = index + pendingDirection.current;
              if (
                newIndex >= 0 &&
                newIndex < wrappers.current.length
              ) {
                isAnimating.current = true;
                setIndex(newIndex);
              }
              pendingDirection.current = 0;
            }
          },
        });

        tl.to(lines, {
          drawSVG: "0% 100%",
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
        });

        tl.to(
          rects,
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "<"
        );
      } else {
        gsap.to(lines, {
          drawSVG: "0% 0%",
          opacity: 0,
          duration: 0.3,
        });
        gsap.to(rects, {
          scale: 0.5,
          opacity: 0,
          duration: 0.3,
        });
      }
    });
  };
  return (
   <section data-theme="orange" className='w-screen h-full bg-gradient' ref={sectionRef}>
<div className='px-[4vw] py-[7vw] flex flex-col items-center  gap-[10vw]'>
    <div className='w-[80%]'>
        <Copy>
            <h2 className='text-head-100 font-display text-center capitalize'>
            All-in-One Wallet Infrastructure for Cards, Lending & Rewards
            </h2>
        </Copy>
    </div>
    <div className='h-full w-full'>
      <div className="svg-section flex flex-col items-center justify-center w-full" ref={containerRef}>
        {data.map(({svg,svgElement,classes}, index)=>(
        <div className={`svg-wrapper h-auto w-[60vw] ${classes}`}  key={index}>
      <svg className="infrastructure-svg state-1 h-full w-full "  ref={svg} width="1160" height="364" viewBox="0 0 1160 364" fill="none" xmlns="http://www.w3.org/2000/svg">
      {svgElement}    
</svg>
</div>
 ))}
      </div>

    </div>

</div>
   </section>
  )
}

export default Infrastructure

