import React from 'react';
import PageTransition from '../components/layout/PageTransition';
import Capabilities from '../components/sections/Capabilities';
import SEO from '../components/seo/SEO';

const CapabilitiesPage = () => {
  return (
    <PageTransition>
      <SEO 
        title="Web Development, Design & SEO Services" 
        description="Explore our full-stack capabilities, from pixel-perfect UI/UX design to robust backend architecture and data-driven SEO marketing. Start your project with us."
        canonicalPath="/capabilities" 
      />
      <div className="pt-[120px] pb-[80px] min-h-screen">
        <div className="max-w-[var(--page-max-width)] mx-auto px-[24px] md:px-[48px]">
          <h1 className="font-chrome font-bold text-[48px] md:text-[80px] leading-[1] text-[var(--theme-slate-dark)] mb-[24px]">
            Web Design & Development Capabilities
          </h1>
          <p className="font-editorial text-[24px] text-[var(--theme-cloud-dark)] max-w-[600px] mb-[64px]">
            Comprehensive digital solutions tailored to solve complex business problems and drive measurable growth.
          </p>
        </div>
        <Capabilities />
      </div>
    </PageTransition>
  );
};

export default CapabilitiesPage;
