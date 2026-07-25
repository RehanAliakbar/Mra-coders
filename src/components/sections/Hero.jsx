import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../ui/Button';
import Magnetic from '../ui/Magnetic';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const mediaRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Intro Mask Reveal
      gsap.from('.reveal-text-inner', {
        y: '100%',
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out',
        delay: 0.2
      });
      
      gsap.from('.hero-media', {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
        delay: 0.4
      });

      // Parallax scroll effect
      gsap.to(mediaRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        },
        y: 100,
        ease: 'none'
      });
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="w-full max-w-[var(--page-max-width)] mx-auto px-[24px] md:px-[48px] pt-[60px] md:pt-[60px] pb-[80px] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-[48px] md:gap-[24px] items-center">
        
        <div className="md:col-span-7 flex flex-col justify-center relative z-10">
          <h1 className="font-chrome font-bold text-[48px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-[var(--theme-slate-dark)] mb-[32px] relative z-20">
            <span className="overflow-hidden inline-block align-top pb-2 -mb-2"><span className="reveal-text-inner inline-block">Where digital </span></span>{' '}
            <span className="overflow-hidden inline-block align-top pb-2 -mb-2"><span className="reveal-text-inner inline-block">problem find </span></span>{' '}
            <span className="overflow-hidden inline-block align-top pb-2 -mb-2"><span className="reveal-text-inner inline-block"><Link to="/work" className="border-b-2 border-[var(--theme-slate-dark)] hover:text-[var(--color-clay)] hover:border-[var(--color-clay)] transition-colors pb-1">solution</Link>.</span></span>
          </h1>
          <div className="overflow-hidden mb-[32px] max-w-[500px] pb-2 -mb-2">
            <p className="reveal-text-inner font-editorial text-[20px] md:text-[24px] leading-[1.4] text-[var(--theme-slate-dark)] opacity-90">
              We help startups, creators, and small businesses to build powerful digital products with practical solutions and clean development.
            </p>
          </div>
          <div className="overflow-hidden pb-2 -mb-2">
            <div className="reveal-text-inner inline-block">
              <Magnetic>
                <div className="inline-block">
                  <Link to="/contact">
                    <Button variant="clay-filled" className="hover:-translate-y-1 transform transition-transform duration-300">
                      Let's talk about your project
                    </Button>
                  </Link>
                </div>
              </Magnetic>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 relative h-[300px] md:h-[450px] flex justify-center items-center">
          <div className="absolute inset-0 bg-[var(--theme-manilla)] rounded-[24px] opacity-30 mix-blend-multiply dark:mix-blend-screen -rotate-2"></div>
          <div className="hero-media relative z-10 w-full h-full rounded-[24px] overflow-hidden shadow-2xl">
            <video 
              ref={mediaRef}
              src="https://videos.pexels.com/video-files/3255275/3255275-hd_1920_1080_25fps.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover filter contrast-[1.1] grayscale-[0.2]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
