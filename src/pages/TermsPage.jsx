import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import PageTransition from '../components/layout/PageTransition';
import SEO from '../components/seo/SEO';

const TermsPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    let ctx = gsap.context(() => {
      gsap.from('.terms-item', {
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
        title="Terms & Conditions" 
        description="Read the Terms and Conditions for using MRA Digital Studio services."
        canonicalPath="/terms" 
      />
      <div ref={containerRef} className="min-h-screen pt-[120px] pb-[80px] w-full max-w-[800px] mx-auto px-[24px]">
        
        <div className="terms-item mb-[64px]">
          <span className="font-chrome font-bold text-[12px] uppercase tracking-wider text-[var(--color-clay)] mb-[16px] block">
            Legal
          </span>
          <h1 className="font-chrome font-bold text-[48px] md:text-[64px] leading-[1.1] text-[var(--theme-slate-dark)] mb-[24px]">
            Terms & Conditions
          </h1>
          <p className="font-editorial text-[20px] text-[var(--theme-cloud-dark)]">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        <div className="flex flex-col gap-[48px] font-editorial text-[20px] leading-[1.6] text-[var(--theme-cloud-dark)]">
          <section className="terms-item">
            <h2 className="font-chrome font-bold text-[28px] text-[var(--theme-slate-dark)] mb-[16px]">1. Introduction</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section className="terms-item">
            <h2 className="font-chrome font-bold text-[28px] text-[var(--theme-slate-dark)] mb-[16px]">2. Intellectual Property Rights</h2>
            <p>
              Other than the content you own, under these Terms, MRA Digital Studio and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.
            </p>
          </section>

          <section className="terms-item">
            <h2 className="font-chrome font-bold text-[28px] text-[var(--theme-slate-dark)] mb-[16px]">3. Restrictions</h2>
            <p>
              You are specifically restricted from all of the following:
            </p>
            <ul className="list-disc pl-[24px] mt-[16px] flex flex-col gap-[8px]">
              <li>publishing any Website material in any other media;</li>
              <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
              <li>using this Website in any way that is or may be damaging to this Website;</li>
              <li>using this Website contrary to applicable laws and regulations.</li>
            </ul>
          </section>
        </div>

      </div>
    </PageTransition>
  );
};

export default TermsPage;
