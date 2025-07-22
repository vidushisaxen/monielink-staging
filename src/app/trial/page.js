'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import SplitText from 'gsap/dist/SplitText';
import ScrambleTextPlugin from 'gsap/dist/ScrambleTextPlugin';

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

const ScrambleText = ({}) => {
  const elRef = useRef(null);
  const [chars, setChars] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(elRef.current, { type: 'chars' });
      gsap.set(split.chars, { opacity: 0.7 });
      setChars(split.chars);
    }, elRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    if (isActive) return;

    setIsActive(true);
    const originalChars = chars.map(char => char.textContent);
    const tl = gsap.timeline();

    gsap.to(chars, {
      opacity: 1,
      duration: 0.4,
      stagger: 0.02,
    });

    chars.forEach((char, i) => {
      tl.to(char, {
        duration: 0.6,
        scrambleText: {
          text: originalChars[i],
          chars: "upperCase",
          speed: 0.2,
          revealDelay: 0.1,
        },
        delay: i * 0.07,
        ease: 'none',
      }, 0);
    });

    tl.to(chars, {
      opacity: 1,
      duration: 0.2,
      stagger: 0.01,
      // delay: -0.2,
      ease: 'power3.out',
    }, chars.length * 0.05 + 0.2);

    tl.to(chars, {
      opacity: 1,
      duration: 0.1,
      // delay: -0.4,
      stagger: 0.05,
      ease: 'power3.out',
      onComplete: () => {
        setIsActive(false);
      },
    });
  };

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
    <div onMouseEnter={handleMouseEnter} >
    <p
      ref={elRef}
      className="text-white w-full cursor-pointer text-[3vw] font-light !tracking-[.08em]"
      >
     CAREERS
    </p>
        </div>
        </div>
  );
};

export default ScrambleText;
