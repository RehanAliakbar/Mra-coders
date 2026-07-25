import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageTransition from '../components/layout/PageTransition';
import Hero from '../components/sections/Hero';
import Studio from '../components/sections/Studio';
import Capabilities from '../components/sections/Capabilities';
import Work from '../components/sections/Work';
import SEO from '../components/seo/SEO';
import { SITE_URL } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "MRA Digital Studio",
        "url": SITE_URL,
        "logo": `${SITE_URL}/assets/logo.webp`,
        "email": "mracoders@gmail.com",
        "telephone": "+91-8709920086",
        "founder": {
          "@type": "Person",
          "name": "Md Rehan Ali Akbar"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dhanbad",
          "addressRegion": "Jharkhand",
          "addressCountry": "IN"
        },
        "areaServed": "Worldwide",
        "sameAs": [
          "https://twitter.com/mradigital",
          "https://linkedin.com/company/mradigital",
          "https://www.instagram.com/mra_digital_studio/"
        ]
      },
      {
        "@type": "WebSite",
        "url": "https://mradigital.studio",
        "name": "MRA Digital Studio"
      }
    ]
  };

  return (
    <PageTransition>
      <SEO 
        title="Premium Web Design & Digital Agency" 
        description="MRA Digital Studio crafts award-winning web experiences, custom frontend development, and modern UI/UX design. Elevate your brand today. View our portfolio."
        canonicalPath="/" 
        schemaMarkup={homeSchema}
      />
      <div className="w-full">
        <Hero />
        <Studio />
        <Capabilities limit={3} />
        <Work limit={2} />
      </div>
    </PageTransition>
  );
};

export default Home;
