import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import Preloader from './components/ui/Preloader';
import ContactBadge from './components/ui/ContactBadge';
import SmoothScroll from './components/layout/SmoothScroll';

// Lazy loaded pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const StudioPage = lazy(() => import('./pages/StudioPage'));
const CapabilitiesPage = lazy(() => import('./pages/CapabilitiesPage'));
const WorkPage = lazy(() => import('./pages/WorkPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const SitemapPage = lazy(() => import('./pages/SitemapPage'));

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
              <Suspense fallback={null}>
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
              </Suspense>
            </main>
            <Footer />
          </div>
        </SmoothScroll>
      </Router>
    </HelmetProvider>
  );
}

export default App;
