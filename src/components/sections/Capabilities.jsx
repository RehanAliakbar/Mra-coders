import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from '../ui/Card';
import { servicesData } from '../../data/content';

gsap.registerPlugin(ScrollTrigger);

const Capabilities = ({ limit }) => {
  const sectionRef = useRef(null);
  const marqueeRef = useRef(null);

  const dataToShow = limit ? servicesData.slice(0, limit) : servicesData;

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.bento-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });

      // Infinite Marquee Animation
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="capabilities" ref={sectionRef} className="w-full mx-auto pt-[80px] md:pt-[120px] pb-[80px] md:pb-[120px] overflow-hidden">
      
      {/* Marquee Header */}
      <div className="mb-[64px] border-y border-[var(--theme-stone)] py-[24px] whitespace-nowrap flex overflow-hidden bg-[var(--theme-manilla)]">
        <div ref={marqueeRef} className="flex gap-[48px] font-chrome font-bold text-[40px] md:text-[100px] uppercase text-[var(--theme-slate-dark)]">
          <span>WHAT WE DO &bull; DIGITAL SOLUTIONS &bull; WHAT WE DO &bull; DIGITAL SOLUTIONS &bull; </span>
          <span>WHAT WE DO &bull; DIGITAL SOLUTIONS &bull; WHAT WE DO &bull; DIGITAL SOLUTIONS &bull; </span>
        </div>
      </div>

      <div className="max-w-[var(--page-max-width)] mx-auto px-[24px] md:px-[48px]">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[24px] auto-rows-[300px]">
          
          {dataToShow.map((service) => (
            <Link key={service.id} to={service.link} className={`bento-item ${service.colSpan} block h-full`}>
              <Card 
                surface={service.surface} 
                className="w-full h-full flex flex-col justify-end group overflow-hidden relative border-none"
              >
                <img 
                  src={service.image} 
                  alt={`${service.title} Showcase`} 
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover ${service.imageOpacity} group-hover:scale-105 transition-transform duration-700`} 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--theme-slate-dark)] via-[rgba(26,27,24,0.4)] to-transparent opacity-95 z-0 pointer-events-none"></div>
                
                <div className="relative z-10 p-[32px] transform group-hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="font-chrome font-bold text-[28px] md:text-[32px] mb-[16px] text-white">
                    {service.title}
                  </h3>
                  <ul className="flex flex-col gap-[8px] font-editorial text-[18px] text-[var(--theme-ivory-light)] opacity-90 mb-[24px]">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-[8px]">
                        <span className="w-1.5 h-1.5 bg-[var(--color-clay)] rounded-full"></span>{feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="font-chrome text-[12px] uppercase tracking-wider text-[var(--theme-ivory-light)] border-b border-[var(--color-clay)] pb-1 hover:text-[var(--color-clay)] transition-colors">
                      Learn More ↗
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Capabilities;
