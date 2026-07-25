import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Magnetic from '../ui/Magnetic';
import { projectsData } from '../../data/content';

gsap.registerPlugin(ScrollTrigger);

const Work = ({ limit }) => {
  const sectionRef = useRef(null);

  const dataToShow = limit ? projectsData.slice(0, limit) : projectsData;

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.work-reveal', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="w-full max-w-[var(--page-max-width)] mx-auto px-[24px] md:px-[48px] py-[80px] md:py-[120px]">
      <div className="mb-[64px]">
        <h2 className="work-reveal font-chrome font-bold text-[12px] uppercase tracking-wider text-[var(--theme-cloud-dark)] mb-[16px]">
          Our Recent Work
        </h2>
        <h3 className="work-reveal font-editorial text-[32px] md:text-[40px] leading-[1.2] text-[var(--theme-slate-dark)] max-w-[600px]">
          We partner with ambitious brands to create digital products that stand out.
        </h3>
      </div>

      <div className="flex flex-col gap-[64px]">
        {dataToShow.map((project) => (
          <div key={project.id} className="work-reveal">
            <Card surface="feature" className="border-none shadow-none p-[32px] md:p-[64px] relative overflow-hidden group">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] relative z-10">
                <div className="pointer-events-none">
                  <Badge className="mb-[24px]">{project.badge}</Badge>
                  <h4 className="font-chrome font-bold text-[40px] md:text-[48px] leading-[1.1] text-[var(--theme-slate-dark)] mb-[24px]">
                    {project.title}
                  </h4>
                  <p className="font-editorial text-[20px] leading-[1.4] text-[var(--theme-slate-dark)] mb-[32px]">
                    {project.description}
                  </p>
                  
                  <div className="pointer-events-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <Magnetic>
                      <div className="inline-block">
                        <Link to={project.link}>
                          <Button variant="clay-filled" className="hover:-translate-y-1 transform transition-transform duration-300">
                            Read {project.title} Case Study
                          </Button>
                        </Link>
                      </div>
                    </Magnetic>
                    {project.liveLink && (
                      <Magnetic>
                        <div className="inline-block">
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <Button variant="outlined-clay" className="hover:-translate-y-1 transform transition-transform duration-300">
                              View {project.title} Live Site ↗
                            </Button>
                          </a>
                        </div>
                      </Magnetic>
                    )}
                  </div>
                </div>

                {/* Image Column */}
                <div className="rounded-[16px] overflow-hidden shadow-xl relative h-[300px] md:h-auto">
                  <img 
                    src={project.image} 
                    alt={project.altText || project.title} 
                    loading="lazy"
                    width="100%"
                    height="100%"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.1]"
                  />
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
