import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const container = useRef();
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    let ctx = gsap.context(() => {
      gsap.from(container.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
      });
    }, container);
    
    return () => ctx.revert();
  }, [location.pathname]);

  return <div ref={container}>{children}</div>;
};

export default PageTransition;
