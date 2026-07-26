import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Only show preloader once per session if desired, but we'll show it on every fresh load for now
    
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsVisible(false);
          if(onComplete) onComplete();
        }
      });

      tl.from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out'
      })
      .to(textRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.4,
        ease: 'power3.in',
        delay: 0.2
      })
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.5,
        ease: 'power4.inOut'
      }, "-=0.1");

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[9999] bg-[var(--theme-slate-dark)] flex items-center justify-center pointer-events-none"
    >
      <div className="overflow-hidden">
        <h1 
          ref={textRef} 
          className="font-chrome font-bold text-[32px] md:text-[64px] text-[var(--theme-manilla)] tracking-widest uppercase"
        >
          MRA STUDIO
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
