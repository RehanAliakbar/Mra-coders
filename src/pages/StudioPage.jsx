import React from 'react';
import PageTransition from '../components/layout/PageTransition';
import Studio from '../components/sections/Studio';
import SEO from '../components/seo/SEO';

const StudioPage = () => {
  return (
    <PageTransition>
      <SEO 
        title="Our Creative Digital Studio" 
        description="Discover the creative process and digital craftsmanship behind our award-winning agency. We build bespoke web solutions for ambitious brands. Learn more."
        canonicalPath="/studio" 
      />
      <div className="pt-[120px] pb-[80px] min-h-screen">
        <div className="max-w-[var(--page-max-width)] mx-auto px-[24px] md:px-[48px]">
          <h1 className="font-chrome font-bold text-[48px] md:text-[80px] leading-[1] text-[var(--theme-slate-dark)] mb-[24px]">
            Our Digital Design Studio
          </h1>
          <p className="font-editorial text-[24px] text-[var(--theme-cloud-dark)] max-w-[600px] mb-[64px]">
            Where ideas transform into digital reality through careful planning, precise design, and robust development.
          </p>
        </div>
        <Studio />
      </div>
    </PageTransition>
  );
};

export default StudioPage;
