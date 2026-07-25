import React, { useEffect, useRef } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import gsap from 'gsap';
import PageTransition from '../components/layout/PageTransition';
import { projectsData, SITE_URL } from '../data/content';
import SEO from '../components/seo/SEO';
import Breadcrumb from '../components/ui/Breadcrumb';

const CaseStudyPage = () => {
  const { projectId } = useParams();
  const pageRef = useRef(null);

  // Find the project dynamically
  const project = projectsData.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (project) {
      let ctx = gsap.context(() => {
        gsap.from('.cs-reveal', {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          delay: 0.2
        });
      }, pageRef);
      return () => ctx.revert();
    }
  }, [project]);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "creator": {
      "@type": "Organization",
      "name": "MRA Digital Studio",
      "url": SITE_URL
    },
    "about": project.description,
    "image": `${SITE_URL}${project.heroImage || project.image}`,
    "url": `${SITE_URL}/work/${project.id}`
  };

  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Our Work", link: "/work" },
    { label: project.title }
  ];

  return (
    <PageTransition>
      <SEO 
        title={`${project.title} Case Study`} 
        description={project.description} 
        canonicalPath={`/work/${project.id}`}
        ogImage={project.heroImage || project.image}
        schemaMarkup={caseStudySchema}
      />
      <div ref={pageRef} className="min-h-screen pt-[120px] pb-[80px] w-full max-w-[var(--page-max-width)] mx-auto px-[24px] md:px-[48px]">
        
        <Breadcrumb items={breadcrumbItems} />

        {/* Header Section */}
        <div className="mb-[64px] grid grid-cols-1 md:grid-cols-2 gap-[48px]">
          <div className="cs-reveal">
            <span className="font-chrome font-bold text-[12px] uppercase tracking-wider text-[var(--color-clay)] mb-[16px] block">
              {project.badge || "Case Study"}
            </span>
            <h1 className="font-chrome font-bold text-[48px] md:text-[64px] leading-[1.1] text-[var(--theme-slate-dark)] mb-[24px]">
              {project.title}
            </h1>
            <p className="font-editorial text-[24px] text-[var(--theme-cloud-dark)]">
              {project.description}
            </p>
          </div>
          
          <div className="cs-reveal flex flex-col justify-end">
            <div className="flex gap-[48px] border-t border-[var(--theme-stone)] border-opacity-30 pt-[24px]">
              <div>
                <span className="font-chrome font-semibold text-[12px] uppercase tracking-wider block text-[var(--theme-cloud-dark)] mb-[8px]">Client</span>
                <span className="font-editorial text-[18px] text-[var(--theme-slate-dark)]">{project.client}</span>
              </div>
              <div>
                <span className="font-chrome font-semibold text-[12px] uppercase tracking-wider block text-[var(--theme-cloud-dark)] mb-[8px]">Status</span>
                <span className="font-editorial text-[18px] text-[var(--theme-slate-dark)]">{project.status}</span>
              </div>
              {project.liveLink && (
                <div>
                  <span className="font-chrome font-semibold text-[12px] uppercase tracking-wider block text-[var(--theme-cloud-dark)] mb-[8px]">Live</span>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="font-editorial text-[18px] text-[var(--theme-slate-dark)] border-b border-[var(--color-clay)] hover:text-[var(--color-clay)] transition-colors pb-1">
                    View Site ↗
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hero Image / Video */}
        <div className="cs-reveal w-full h-[300px] md:h-[600px] rounded-[24px] overflow-hidden mb-[80px] shadow-2xl relative bg-[var(--theme-oat-warm)]">
          <div className="absolute inset-0 bg-[var(--theme-manilla)] mix-blend-multiply opacity-20 z-10"></div>
          <img 
            src={project.heroImage} 
            alt={project.heroAltText || project.title} 
            loading="lazy"
            width="100%"
            height="100%"
            className="w-full h-full object-cover filter contrast-[1.1] opacity-90"
          />
        </div>

        {/* Challenge & Goal */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[48px] mb-[80px]">
          <div className="cs-reveal md:col-span-4">
            <h2 className="font-chrome font-bold text-[32px] text-[var(--theme-slate-dark)]">The Challenge</h2>
          </div>
          <div className="cs-reveal md:col-span-8">
            <p className="font-editorial text-[22px] leading-[1.5] text-[var(--theme-slate-dark)] mb-[48px]">
              {project.challenge}
            </p>
            
            <h3 className="font-chrome font-bold text-[24px] text-[var(--theme-slate-dark)] mb-[16px]">The Goal</h3>
            <p className="font-editorial text-[20px] leading-[1.5] text-[var(--theme-cloud-dark)] mb-[48px]">
              {project.goal}
            </p>

            {project.progress && (
              <>
                <h3 className="font-chrome font-bold text-[24px] text-[var(--theme-slate-dark)] mb-[16px]">Current Progress</h3>
                <p className="font-editorial text-[20px] leading-[1.5] text-[var(--theme-cloud-dark)]">
                  {project.progress}
                </p>
              </>
            )}
          </div>
        </div>

        {/* Execution & Features */}
        <div className="cs-reveal bg-[var(--theme-oat-warm)] rounded-[24px] p-[32px] md:p-[64px] mb-[80px]">
          <h2 className="font-chrome font-bold text-[32px] text-[var(--theme-slate-dark)] mb-[48px]">Key Features Built</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex flex-col gap-[8px]">
                <h4 className="font-chrome font-bold text-[20px] text-[var(--theme-slate-dark)]">{feature.title}</h4>
                <p className="font-editorial text-[18px] text-[var(--theme-cloud-dark)]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Tech Stack */}
        <div className="cs-reveal border-t border-[var(--theme-stone)] border-opacity-30 pt-[48px] flex flex-wrap gap-[32px] justify-between">
          <div>
            <h4 className="font-chrome font-bold text-[16px] uppercase tracking-wider text-[var(--theme-slate-dark)] mb-[16px]">Technology Used</h4>
            <div className="flex gap-[16px] flex-wrap">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="font-editorial text-[18px] text-[var(--theme-cloud-dark)]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-chrome font-bold text-[16px] uppercase tracking-wider text-[var(--theme-slate-dark)] mb-[16px]">Services</h4>
            <div className="flex gap-[16px] flex-wrap">
              {project.services.map((svc, idx) => (
                <span key={idx} className="font-editorial text-[18px] text-[var(--theme-cloud-dark)]">
                  {svc}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
};

export default CaseStudyPage;
