import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import PageTransition from '../components/layout/PageTransition';
import SEO from '../components/seo/SEO';
import { servicesData, projectsData } from '../data/content';

const SitemapPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    let ctx = gsap.context(() => {
      gsap.from('.sitemap-item', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <PageTransition>
      <SEO 
        title="HTML Sitemap" 
        description="Navigate through all the pages, services, and case studies of MRA Digital Studio."
        canonicalPath="/sitemap" 
      />
      <div ref={containerRef} className="min-h-screen pt-[120px] pb-[80px] w-full max-w-[800px] mx-auto px-[24px]">
        
        <div className="sitemap-item mb-[64px]">
          <span className="font-chrome font-bold text-[12px] uppercase tracking-wider text-[var(--color-clay)] mb-[16px] block">
            Navigation
          </span>
          <h1 className="font-chrome font-bold text-[48px] md:text-[64px] leading-[1.1] text-[var(--theme-slate-dark)] mb-[24px]">
            Sitemap
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-[64px]">
          <div className="flex-1 flex flex-col gap-[32px]">
            <div className="sitemap-item">
              <h2 className="font-chrome font-bold text-[24px] text-[var(--theme-slate-dark)] mb-[16px]">Main Pages</h2>
              <ul className="flex flex-col gap-[12px] font-editorial text-[20px] text-[var(--theme-cloud-dark)]">
                <li><Link to="/" className="hover:text-[var(--color-clay)] transition-colors">Home</Link></li>
                <li><Link to="/studio" className="hover:text-[var(--color-clay)] transition-colors">Studio</Link></li>
                <li><Link to="/capabilities" className="hover:text-[var(--color-clay)] transition-colors">Capabilities</Link></li>
                <li><Link to="/work" className="hover:text-[var(--color-clay)] transition-colors">Our Work</Link></li>
                <li><Link to="/contact" className="hover:text-[var(--color-clay)] transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div className="sitemap-item">
              <h2 className="font-chrome font-bold text-[24px] text-[var(--theme-slate-dark)] mb-[16px]">Support & Legal</h2>
              <ul className="flex flex-col gap-[12px] font-editorial text-[20px] text-[var(--theme-cloud-dark)]">
                <li><Link to="/faq" className="hover:text-[var(--color-clay)] transition-colors">FAQ</Link></li>
                <li><Link to="/privacy" className="hover:text-[var(--color-clay)] transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-[var(--color-clay)] transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-[32px]">
            <div className="sitemap-item">
              <h2 className="font-chrome font-bold text-[24px] text-[var(--theme-slate-dark)] mb-[16px]">Services</h2>
              <ul className="flex flex-col gap-[12px] font-editorial text-[20px] text-[var(--theme-cloud-dark)]">
                {servicesData.map((service) => (
                  <li key={service.id}>
                    <Link to={`/services/${service.id}`} className="hover:text-[var(--color-clay)] transition-colors">{service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sitemap-item">
              <h2 className="font-chrome font-bold text-[24px] text-[var(--theme-slate-dark)] mb-[16px]">Case Studies</h2>
              <ul className="flex flex-col gap-[12px] font-editorial text-[20px] text-[var(--theme-cloud-dark)]">
                {projectsData.map((project) => (
                  <li key={project.id}>
                    <Link to={`/work/${project.id}`} className="hover:text-[var(--color-clay)] transition-colors">{project.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
};

export default SitemapPage;
