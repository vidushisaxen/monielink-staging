'use client';
import React, { useEffect, useRef } from 'react';

const ScrambleText = () => {
  const elRef = useRef(null);
  const charsRef = useRef([]);
  const animatingRef = useRef(false);
  const intervalsRef = useRef([]); // Store active intervals
  const originalTextsRef = useRef([]); // Store original texts
  const opacityTimeoutsRef = useRef([]); // Store opacity animation timeouts
  const isMouseOverRef = useRef(false); // Track mouse state

  useEffect(() => {
    const text = elRef.current.textContent;
    elRef.current.innerHTML = '';
    
    // Store original texts
    originalTextsRef.current = text.split('');
    
    text.split('').forEach(char => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.cssText = `
        display: inline-block;
        opacity: 0.5;
        color: #ffffff;
        min-width: ${char === ' ' ? '0.3em' : '1ch'};
        transition: all 0.3s ease;
      `;
      charsRef.current.push(span);
      elRef.current.appendChild(span);
    });
  }, []);

  const animate = (chars, props, delay = 0, stagger = 0) => {
    chars.forEach((char, i) => {
      setTimeout(() => {
        Object.assign(char.style, props);
      }, delay + i * stagger);
    });
  };

  const clearAllIntervals = () => {
    intervalsRef.current.forEach(interval => clearInterval(interval));
    intervalsRef.current = [];
  };

  const clearOpacityTimeouts = () => {
    opacityTimeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    opacityTimeoutsRef.current = [];
  };

  const scramble = (chars) => {
    const originalTexts = originalTextsRef.current;
    const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    chars.forEach((char, i) => {
      if (originalTexts[i] === ' ') return;
      
      const timeout = setTimeout(() => {
        let iterations = 0;
        const interval = setInterval(() => {
          char.textContent = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          iterations++;
          
          if (iterations >= 6) {
            char.textContent = originalTexts[i];
            clearInterval(interval);
            const index = intervalsRef.current.indexOf(interval);
            if (index > -1) {
              intervalsRef.current.splice(index, 1);
            }
          }
        }, 80);
        intervalsRef.current.push(interval);
      }, i * 50);
    });
  };

  const handleMouseEnter = () => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    isMouseOverRef.current = true;
    clearAllIntervals();
    clearOpacityTimeouts();
  
    const chars = charsRef.current;
  
    // Start glow animation immediately
    animate(chars, { opacity: '1', color: '#ffffff' }, 0, 100);
  
    const timeout1 = setTimeout(() => {
      if (isMouseOverRef.current) {
        animate(chars, { opacity: '0.5' }, 0, 100);
      }
    }, 100);
  
    const timeout2 = setTimeout(() => {
      if (isMouseOverRef.current) {
        animate(chars, { opacity: '0.7' }, 0, 100);
      }
    }, 200);
  
    const timeout3 = setTimeout(() => {
      if (isMouseOverRef.current) {
        animate(chars, { opacity: '1' }, 0, 100);
      }
    }, 400);
  
    opacityTimeoutsRef.current.push(timeout1, timeout2, timeout3);
  
    // 🔥 Start scramble just 200ms later
    const scrambleDelay = 100;
    setTimeout(() => {
      scramble(chars);
    }, scrambleDelay);
  
    const scrambleDuration = chars.length * 50 + 6 * 80;
    setTimeout(() => {
      animatingRef.current = false;
    }, scrambleDelay + scrambleDuration + 100);
  };
  
  const handleMouseLeave = () => {
    isMouseOverRef.current = false;
    clearOpacityTimeouts();
    animate(charsRef.current, { opacity: '0.5', color: '#ffffff' }, 0, 50);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <h1 
          ref={elRef}
          className="text-[2vw] font-light cursor-pointer select-none"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          CAREERS
        </h1>
      </div>
    </div>
  );
};

export default ScrambleText;