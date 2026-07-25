import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.2;
    
    const xSet = gsap.quickSetter(cursor, "x", "px");
    const ySet = gsap.quickSetter(cursor, "y", "px");
    const rotationSet = gsap.quickSetter(cursor, "rotation", "deg");
    const scaleXSet = gsap.quickSetter(cursor, "scaleX");
    const scaleYSet = gsap.quickSetter(cursor, "scaleY");

    let isHovering = false;

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      
      const vel = { x: mouse.x - pos.x, y: mouse.y - pos.y };
      const angle = Math.atan2(vel.y, vel.x) * (180 / Math.PI);
      
      // Calculate stretch based on velocity
      const velocity = Math.sqrt(vel.x * vel.x + vel.y * vel.y);
      const stretch = isHovering ? 1 : Math.min(velocity * 0.015, 1.2);
      
      xSet(pos.x);
      ySet(pos.y);
      
      if (!isHovering) {
        rotationSet(angle);
        scaleXSet(1 + stretch);
        scaleYSet(1 - stretch * 0.2);
      }
    });

    const addHoverEffect = () => {
      isHovering = true;
      gsap.to(cursor, { scaleX: 2.5, scaleY: 2.5, backgroundColor: 'transparent', border: '1px solid #ffffff', duration: 0.3 });
    };

    const removeHoverEffect = () => {
      isHovering = false;
      gsap.to(cursor, { scaleX: 1, scaleY: 1, backgroundColor: '#ffffff', border: 'none', duration: 0.3 });
    };

    window.addEventListener('mousemove', onMouseMove);

    const checkHoverElements = () => {
      const links = document.querySelectorAll('a, button, input, textarea');
      links.forEach(link => {
        link.removeEventListener('mouseenter', addHoverEffect);
        link.removeEventListener('mouseleave', removeHoverEffect);
        link.addEventListener('mouseenter', addHoverEffect);
        link.addEventListener('mouseleave', removeHoverEffect);
      });
    };
    
    // Check initially and set up a mutation observer in case links are added later
    checkHoverElements();
    const observer = new MutationObserver(checkHoverElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      style={{ transformOrigin: 'center center' }}
      className="fixed top-0 left-0 w-[12px] h-[12px] bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
    />
  );
};

export default CustomCursor;
