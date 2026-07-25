import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import PageTransition from '../components/layout/PageTransition';
import Button from '../components/ui/Button';
import SEO from '../components/seo/SEO';

const ContactPage = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.contact-item', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      });
    }, formRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus(null), 5000);
      } else {
        console.error("Error", data);
        setStatus('error');
      }
    } catch (error) {
      console.error("Submit Error:", error);
      setStatus('error');
    }
  };

  return (
    <PageTransition>
      <SEO 
        title="Contact Our Web Design Agency" 
        description="Ready to start a project? Get in touch with MRA Digital Studio. Let's collaborate to create extraordinary digital experiences for your brand."
        canonicalPath="/contact" 
      />
      <div className="min-h-screen pt-[120px] pb-[80px] w-full max-w-[800px] mx-auto px-[24px]">
        <h1 className="contact-item font-chrome font-bold text-[48px] leading-[1.1] text-[var(--theme-slate-dark)] mb-[16px]">
          Let's talk about your project.
        </h1>
        <p className="contact-item font-editorial text-[20px] text-[var(--theme-cloud-dark)] mb-[24px]">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>

        <div className="contact-item flex flex-col md:flex-row gap-[16px] md:gap-[32px] mb-[64px] pb-[32px] border-b border-[var(--theme-stone)] border-opacity-30">
          <div>
            <span className="font-chrome font-bold text-[12px] uppercase tracking-wider text-[var(--theme-slate-dark)] block mb-[4px]">Email Us</span>
            <a href="mailto:mracoders@gmail.com" className="font-editorial text-[18px] text-[var(--theme-cloud-dark)] hover:text-[var(--color-clay)] transition-colors">mracoders@gmail.com</a>
          </div>
          <div>
            <span className="font-chrome font-bold text-[12px] uppercase tracking-wider text-[var(--theme-slate-dark)] block mb-[4px]">Call Us</span>
            <a href="tel:+918709920086" className="font-editorial text-[18px] text-[var(--theme-cloud-dark)] hover:text-[var(--color-clay)] transition-colors">+91 87099 20086</a>
          </div>
          <div>
            <span className="font-chrome font-bold text-[12px] uppercase tracking-wider text-[var(--theme-slate-dark)] block mb-[4px]">Location</span>
            <span className="font-editorial text-[18px] text-[var(--theme-cloud-dark)]">Dhanbad, Jharkhand (Serving Worldwide)</span>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-[24px]">
          {/* Using Environment Variable for Security */}
          <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />
          
          <div className="contact-item flex flex-col gap-[8px]">
            <label htmlFor="name" className="font-chrome font-semibold text-[14px] text-[var(--theme-slate-dark)] uppercase tracking-wider">Name</label>
            <input id="name" name="name" type="text" required className="bg-transparent border-b border-[var(--theme-stone)] focus:border-[var(--color-clay)] outline-none py-[12px] font-editorial text-[18px] text-[var(--theme-slate-dark)] transition-colors" placeholder="John Doe" />
          </div>
          
          <div className="contact-item flex flex-col gap-[8px]">
            <label htmlFor="email" className="font-chrome font-semibold text-[14px] text-[var(--theme-slate-dark)] uppercase tracking-wider">Email</label>
            <input id="email" name="email" type="email" required className="bg-transparent border-b border-[var(--theme-stone)] focus:border-[var(--color-clay)] outline-none py-[12px] font-editorial text-[18px] text-[var(--theme-slate-dark)] transition-colors" placeholder="john@example.com" />
          </div>
          
          <div className="contact-item flex flex-col gap-[8px]">
            <label htmlFor="details" className="font-chrome font-semibold text-[14px] text-[var(--theme-slate-dark)] uppercase tracking-wider">Project Details</label>
            <textarea id="details" name="message" required className="bg-transparent border-b border-[var(--theme-stone)] focus:border-[var(--color-clay)] outline-none py-[12px] font-editorial text-[18px] text-[var(--theme-slate-dark)] min-h-[120px] resize-none transition-colors" placeholder="Tell us about your challenges..."></textarea>
          </div>

          <div className="contact-item mt-[24px]">
            <Button variant="clay-filled" type="submit">
              {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
            </Button>
          </div>
        </form>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
