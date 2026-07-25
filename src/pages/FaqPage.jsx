import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import PageTransition from '../components/layout/PageTransition';
import SEO from '../components/seo/SEO';

const faqs = [
  {
    question: "How long does it take to design and build a website?",
    answer: "The timeline depends on the complexity of the project. A standard corporate website typically takes 4 to 6 weeks, while complex web applications or e-commerce platforms can take 3 to 4 months. We provide a detailed timeline during the discovery phase."
  },
  {
    question: "Do you offer SEO services after the website is launched?",
    answer: "Yes, we offer comprehensive SEO and marketing services. We build all our websites with technical SEO best practices, and we can partner with you post-launch to drive organic traffic, create content, and manage ongoing SEO campaigns."
  },
  {
    question: "What is your web design process?",
    answer: "Our process is highly collaborative. It starts with a Discovery phase where we learn about your business goals. This is followed by Strategy & UX Design, Visual UI Design, Development, Testing, and finally, Launch and post-launch support."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely. Mobile-first design is a core principle at MRA Digital Studio. Every website we build is fully responsive and optimized to perform flawlessly across all devices, from smartphones to large desktop monitors."
  },
  {
    question: "Do you provide hosting and maintenance?",
    answer: "Yes, we offer premium hosting, security updates, and maintenance packages to ensure your website remains fast, secure, and up-to-date long after the initial launch."
  }
];

const FaqPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    let ctx = gsap.context(() => {
      gsap.from('.faq-item', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  // Generate FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <PageTransition>
      <SEO 
        title="Frequently Asked Questions" 
        description="Find answers to common questions about our web design process, timelines, SEO services, and more at MRA Digital Studio."
        canonicalPath="/faq" 
        schemaMarkup={faqSchema}
      />
      <div ref={containerRef} className="min-h-screen pt-[120px] pb-[80px] w-full max-w-[800px] mx-auto px-[24px]">
        
        <div className="faq-item mb-[64px]">
          <span className="font-chrome font-bold text-[12px] uppercase tracking-wider text-[var(--color-clay)] mb-[16px] block">
            Information
          </span>
          <h1 className="font-chrome font-bold text-[48px] md:text-[64px] leading-[1.1] text-[var(--theme-slate-dark)] mb-[24px]">
            Frequently Asked Questions
          </h1>
          <p className="font-editorial text-[24px] text-[var(--theme-cloud-dark)]">
            Everything you need to know about partnering with MRA Digital Studio.
          </p>
        </div>

        <div className="flex flex-col gap-[32px]">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item border-b border-[var(--theme-stone)] border-opacity-30 pb-[32px]">
              <h3 className="font-chrome font-bold text-[24px] text-[var(--theme-slate-dark)] mb-[16px]">
                {faq.question}
              </h3>
              <p className="font-editorial text-[20px] leading-[1.5] text-[var(--theme-cloud-dark)]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </PageTransition>
  );
};

export default FaqPage;
