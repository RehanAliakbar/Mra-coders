import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Studio = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.reveal-text-studio', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: '100%',
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out'
      });
      
      gsap.from('.studio-media', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="studio" ref={sectionRef} className="w-full bg-[var(--theme-ivory-medium)] py-[80px] md:py-[120px] border-t border-[var(--theme-stone)] border-opacity-30">
      <div className="max-w-[var(--page-max-width)] mx-auto px-[24px] md:px-[48px] grid grid-cols-1 md:grid-cols-2 gap-[64px] items-center">
        
        <div className="flex flex-col gap-[24px] text-left">
          <div className="overflow-hidden">
            <h2 className="reveal-text-studio font-chrome font-bold text-[12px] uppercase tracking-wider text-[var(--theme-cloud-dark)] mb-[16px]">
              Studio
            </h2>
          </div>
          
          <div className="overflow-hidden">
            <p className="reveal-text-studio font-editorial text-[24px] md:text-[32px] leading-[1.4] text-[var(--theme-slate-dark)]">
              MRA CODER was born from a simple observation – great businesses were struggling to build a strong digital presence. Either the solutions were too expensive or they didn't understand the real problems.
            </p>
          </div>
          
          <div className="overflow-hidden">
            <p className="reveal-text-studio font-editorial text-[20px] leading-[1.4] text-[var(--theme-cloud-dark)]">
              We started as a small team of developers who believed in one thing: technology should solve problems. Today we are a growing digital studio building scalable, practical, and beautiful digital products.
            </p>
          </div>
          
          <div className="overflow-hidden">
            <p className="reveal-text-studio font-editorial text-[20px] leading-[1.4] text-[var(--theme-slate-dark)] font-semibold mt-4">
              We don't just write the code. We understand your business, think about your challenges, and deliver solutions that work.
            </p>
          </div>
        </div>

        <div className="studio-media relative h-[400px] md:h-[500px] flex justify-center items-center rounded-[24px] overflow-hidden bg-[var(--theme-oat-warm)] shadow-2xl">
          <div className="absolute inset-0 bg-black bg-opacity-20 z-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
          <video 
            src="https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4" 
            autoPlay={true} 
            loop={true} 
            muted={true} 
            playsInline={true}
            className="w-full h-full object-cover filter contrast-[1.2] grayscale-[0.3]"
          />
        </div>

      </div>
    </section>
  );
};

export default Studio;
