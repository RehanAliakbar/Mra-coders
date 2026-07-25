import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import Preloader from './components/ui/Preloader';
import ContactBadge from './components/ui/ContactBadge';
import SmoothScroll from './components/layout/SmoothScroll';
import Home from './pages/Home';
import StudioPage from './pages/StudioPage';
import CapabilitiesPage from './pages/CapabilitiesPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
import CaseStudyPage from './pages/CaseStudyPage';
import ServicePage from './pages/ServicePage';
import FaqPage from './pages/FaqPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import SitemapPage from './pages/SitemapPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <ContactBadge />
          <div className="min-h-screen bg-[var(--theme-ivory-medium)] text-[var(--theme-slate-dark)] font-editorial selection:bg-[var(--theme-manilla)] transition-colors duration-500">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/studio" element={<StudioPage />} />
                <Route path="/capabilities" element={<CapabilitiesPage />} />
                <Route path="/services/:serviceId" element={<ServicePage />} />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/work/:projectId" element={<CaseStudyPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/sitemap" element={<SitemapPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </SmoothScroll>
      </Router>
    </HelmetProvider>
  );
}

export default App;
