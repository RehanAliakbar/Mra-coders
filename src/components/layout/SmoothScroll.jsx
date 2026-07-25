import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05, // Lower lerp means heavier, more noticeable momentum
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false, // Usually false on touch devices to respect native swipe
    });

    // Sync ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame (raf) to GSAP's ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable GSAP lag smoothing as recommended by Lenis
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
