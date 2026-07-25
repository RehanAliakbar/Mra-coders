import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import PageTransition from '../components/layout/PageTransition';
import SEO from '../components/seo/SEO';

const PrivacyPolicyPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    let ctx = gsap.context(() => {
      gsap.from('.privacy-item', {
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
        title="Privacy Policy" 
        description="Read the Privacy Policy of MRA Digital Studio to understand how we collect, use, and protect your personal information."
        canonicalPath="/privacy" 
      />
      <div ref={containerRef} className="min-h-screen pt-[120px] pb-[80px] w-full max-w-[800px] mx-auto px-[24px]">
        
        <div className="privacy-item mb-[64px]">
          <span className="font-chrome font-bold text-[12px] uppercase tracking-wider text-[var(--color-clay)] mb-[16px] block">
            Legal
          </span>
          <h1 className="font-chrome font-bold text-[48px] md:text-[64px] leading-[1.1] text-[var(--theme-slate-dark)] mb-[24px]">
            Privacy Policy
          </h1>
          <p className="font-editorial text-[20px] text-[var(--theme-cloud-dark)]">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        <div className="flex flex-col gap-[48px] font-editorial text-[20px] leading-[1.6] text-[var(--theme-cloud-dark)]">
          <section className="privacy-item">
            <h2 className="font-chrome font-bold text-[28px] text-[var(--theme-slate-dark)] mb-[16px]">1. Introduction</h2>
            <p>
              Welcome to MRA Digital Studio. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.
            </p>
          </section>

          <section className="privacy-item">
            <h2 className="font-chrome font-bold text-[28px] text-[var(--theme-slate-dark)] mb-[16px]">2. Data We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-[24px] mt-[16px] flex flex-col gap-[8px]">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
            </ul>
          </section>

          <section className="privacy-item">
            <h2 className="font-chrome font-bold text-[28px] text-[var(--theme-slate-dark)] mb-[16px]">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-[24px] mt-[16px] flex flex-col gap-[8px]">
              <li>To provide and maintain our Service.</li>
              <li>To notify you about changes to our Service.</li>
              <li>To provide customer support.</li>
              <li>To gather analysis or valuable information so that we can improve our Service.</li>
            </ul>
          </section>

          <section className="privacy-item">
            <h2 className="font-chrome font-bold text-[28px] text-[var(--theme-slate-dark)] mb-[16px]">4. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p className="mt-[16px] font-bold text-[var(--theme-slate-dark)]">
              mracoders@gmail.com
            </p>
          </section>
        </div>

      </div>
    </PageTransition>
  );
};

export default PrivacyPolicyPage;
