import React from 'react';
import PageTransition from '../components/layout/PageTransition';
import Work from '../components/sections/Work';
import SEO from '../components/seo/SEO';

const WorkPage = () => {
  return (
    <PageTransition>
      <SEO 
        title="Our Web Design Portfolio & Case Studies" 
        description="View our curated portfolio of award-winning digital experiences, high-performance web development projects, and successful marketing campaigns."
        canonicalPath="/work" 
      />
      <div className="pt-[120px] pb-[80px] min-h-screen">
        <div className="max-w-[var(--page-max-width)] mx-auto px-[24px] md:px-[48px]">
          <h1 className="font-chrome font-bold text-[48px] md:text-[80px] leading-[1] text-[var(--theme-slate-dark)] mb-[24px]">
            Selected Work.
          </h1>
          <p className="font-editorial text-[24px] text-[var(--theme-cloud-dark)] max-w-[600px] mb-[64px]">
            A showcase of digital problems we've solved for our clients across various industries.
          </p>
        </div>
        <Work />
      </div>
    </PageTransition>
  );
};

export default WorkPage;
