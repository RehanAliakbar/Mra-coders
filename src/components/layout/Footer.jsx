import React from 'react';
import { Link } from 'react-router-dom';
import Magnetic from '../ui/Magnetic';
import { footerServices, footerCompany, socialLinks } from '../../data/content';

const Icons = {
  twitter: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  ),
  linkedin: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  ),
  instagram: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  )
};

const Footer = () => {
  return (
    <footer className="w-full bg-[var(--color-slate-dark)] dark:bg-[var(--color-ivory-light)] text-[var(--color-ivory-light)] dark:text-[var(--color-slate-dark)] py-[80px] px-[24px] md:px-[48px] mt-[120px]">
      <div className="max-w-[var(--page-max-width)] mx-auto grid grid-cols-1 md:grid-cols-4 gap-[48px]">
        <div className="col-span-1 md:col-span-2">
          <div className="font-chrome font-bold text-[12px] uppercase tracking-wider mb-[24px]">
            MRA CODER
          </div>
          <p className="font-editorial text-[20px] max-w-[400px] mb-[24px]">
            Result Beyond Imagination. We help businesses build a strong digital presence and solve digital challenges through practical solutions.
          </p>
          <div className="font-editorial text-[18px] text-[var(--color-cloud-medium)] flex flex-col gap-[8px]">
            <a href="mailto:mracoders@gmail.com" className="hover:text-[var(--color-clay)] transition-colors">mracoders@gmail.com</a>
            <a href="tel:+918709920086" className="hover:text-[var(--color-clay)] transition-colors">+91 87099 20086</a>
            <p>Dhanbad, Jharkhand, India (Serving Worldwide)</p>
          </div>
        </div>
        
        <div>
          <h4 className="font-chrome font-semibold text-[12px] mb-[16px]">Services</h4>
          <ul className="flex flex-col gap-[8px] font-chrome text-[12px] text-[var(--color-cloud-medium)]">
            {footerServices.map((item, index) => (
              <li key={index}><Link to={item.link} className="hover:text-[var(--color-clay)] transition-colors">{item.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-chrome font-semibold text-[12px] mb-[16px]">Company</h4>
          <ul className="flex flex-col gap-[8px] font-chrome text-[12px] text-[var(--color-cloud-medium)]">
            {footerCompany.map((item, index) => (
              <li key={index}><Link to={item.link} className="hover:text-[var(--color-clay)] transition-colors">{item.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="max-w-[var(--page-max-width)] mx-auto mt-[80px] pt-[24px] border-t border-[var(--color-slate-medium)] flex flex-col md:flex-row justify-between items-center gap-4 font-chrome text-[12px] text-[var(--color-cloud-medium)]">
        <p>&copy; {new Date().getFullYear()} MRA Digital Studio. All rights reserved.</p>
        <div className="flex gap-[16px]">
          {socialLinks.map((social) => {
            const IconComponent = Icons[social.id];
            return (
              <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="hover:text-[var(--color-clay)] transition-colors">
                <IconComponent />
              </a>
            );
          })}
        </div>
        <p>Built with precision.</p>
      </div>
    </footer>
  );
};

export default Footer;
