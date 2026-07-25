import React, { useEffect, useRef } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import gsap from 'gsap';
import PageTransition from '../components/layout/PageTransition';
import { servicesData, SITE_URL } from '../data/content';
import Button from '../components/ui/Button';
import SEO from '../components/seo/SEO';
import Breadcrumb from '../components/ui/Breadcrumb';

const ServicePage = () => {
  const { serviceId } = useParams();
  const pageRef = useRef(null);
  
  // Find the service by id
  const service = servicesData.find(s => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (service) {
      let ctx = gsap.context(() => {
        gsap.from('.sp-reveal', {
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
  }, [service]);

  // Handle 404
  if (!service) {
    return <Navigate to="/capabilities" replace />;
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "Organization",
      "name": "MRA Digital Studio",
      "url": SITE_URL
    },
    "description": service.longDescription || service.description,
    "url": `${SITE_URL}/services/${service.id}`
  };

  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Capabilities", link: "/capabilities" },
    { label: service.title }
  ];

  return (
    <PageTransition>
      <SEO 
        title={`${service.title} Services`} 
        description={service.longDescription || service.description} 
        canonicalPath={`/services/${service.id}`}
        ogImage={service.image}
        schemaMarkup={serviceSchema}
      />
      <div ref={pageRef} className="min-h-screen pt-[120px] pb-[80px] w-full max-w-[var(--page-max-width)] mx-auto px-[24px] md:px-[48px]">
        
        <Breadcrumb items={breadcrumbItems} />

        {/* Header Section */}
        <div className="mb-[64px] grid grid-cols-1 md:grid-cols-2 gap-[48px]">
          <div className="sp-reveal">
            <span className="font-chrome font-bold text-[12px] uppercase tracking-wider text-[var(--color-clay)] mb-[16px] block">
              Our Capability
            </span>
            <h1 className="font-chrome font-bold text-[48px] md:text-[64px] leading-[1.1] text-[var(--theme-slate-dark)] mb-[24px]">
              {service.title}
            </h1>
            <p className="font-editorial text-[24px] text-[var(--theme-cloud-dark)]">
              {service.longDescription}
            </p>
          </div>
          
          <div className="sp-reveal flex flex-col justify-end">
            <div className="flex gap-[48px] border-t border-[var(--theme-stone)] border-opacity-30 pt-[24px]">
              <div>
                <span className="font-chrome font-semibold text-[12px] uppercase tracking-wider block text-[var(--theme-cloud-dark)] mb-[8px]">Scope</span>
                <span className="font-editorial text-[18px] text-[var(--theme-slate-dark)]">End-to-End Service</span>
              </div>
              <div>
                <Link to="/contact">
                  <Button variant="clay-filled" className="hover:-translate-y-1 transform transition-transform duration-300">
                    Hire Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="sp-reveal w-full h-[300px] md:h-[600px] rounded-[24px] overflow-hidden mb-[80px] shadow-2xl relative bg-[var(--theme-oat-warm)]">
          <div className="absolute inset-0 bg-[var(--theme-manilla)] mix-blend-multiply opacity-20 z-10"></div>
          <img 
            src={service.image} 
            alt={service.altText || service.title} 
            loading="lazy"
            width="100%"
            height="100%"
            className="w-full h-full object-cover filter contrast-[1.1] opacity-90"
          />
        </div>

        {/* Challenge & Goal */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[48px] mb-[80px]">
          <div className="sp-reveal md:col-span-4">
            <h2 className="font-chrome font-bold text-[32px] text-[var(--theme-slate-dark)]">The Challenge</h2>
          </div>
          <div className="sp-reveal md:col-span-8">
            <p className="font-editorial text-[22px] leading-[1.5] text-[var(--theme-slate-dark)] mb-[48px]">
              {service.challenge}
            </p>
            
            <h3 className="font-chrome font-bold text-[24px] text-[var(--theme-slate-dark)] mb-[16px]">Our Goal</h3>
            <p className="font-editorial text-[20px] leading-[1.5] text-[var(--theme-cloud-dark)]">
              {service.goal}
            </p>
          </div>
        </div>

        {/* Execution & Features */}
        <div className="sp-reveal bg-[var(--theme-oat-warm)] rounded-[24px] p-[32px] md:p-[64px] mb-[80px]">
          <h2 className="font-chrome font-bold text-[32px] text-[var(--theme-slate-dark)] mb-[48px]">What We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
            {service.detailedFeatures.map((feature, idx) => (
              <div key={idx} className="flex flex-col gap-[8px]">
                <h4 className="font-chrome font-bold text-[20px] text-[var(--theme-slate-dark)]">{feature.title}</h4>
                <p className="font-editorial text-[18px] text-[var(--theme-cloud-dark)]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Tech Stack */}
        <div className="sp-reveal border-t border-[var(--theme-stone)] border-opacity-30 pt-[48px] flex flex-wrap gap-[32px] justify-between">
          <div>
            <h4 className="font-chrome font-bold text-[16px] uppercase tracking-wider text-[var(--theme-slate-dark)] mb-[16px]">Core Technologies</h4>
            <div className="flex gap-[16px] flex-wrap">
              {service.techStack.map((tech, idx) => (
                <span key={idx} className="font-editorial text-[18px] text-[var(--theme-cloud-dark)] px-4 py-2 bg-[var(--theme-ivory-light)] rounded-full border border-[var(--theme-stone)] border-opacity-30">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
};

export default ServicePage;
