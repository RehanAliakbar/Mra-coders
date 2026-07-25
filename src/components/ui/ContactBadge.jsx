import React from 'react';
import { Link } from 'react-router-dom';
import Magnetic from './Magnetic';

const ContactBadge = () => {
  return (
    <div className="fixed bottom-[32px] right-[32px] z-50">
      <Magnetic>
        <Link to="/contact">
          <div className="flex items-center p-[6px] bg-white rounded-full shadow-2xl cursor-pointer group transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden w-[64px] hover:w-[160px] border border-[var(--theme-stone)] border-opacity-20">
            
            {/* Avatar */}
            <div className="w-[50px] h-[50px] rounded-full overflow-hidden shrink-0 bg-[var(--theme-ivory-light)]">
              <img 
                src="/assets/contact_avatar.webp" 
                alt="Contact" 
                className="w-full h-full object-cover scale-[1.2] translate-y-[2px]" 
              />
            </div>
            
            {/* Text that reveals on hover */}
            <div className="whitespace-nowrap px-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              <span className="font-chrome font-bold text-[14px] uppercase tracking-wider text-[var(--theme-slate-dark)]">
                Let's Talk
              </span>
            </div>

          </div>
        </Link>
      </Magnetic>
    </div>
  );
};

export default ContactBadge;
