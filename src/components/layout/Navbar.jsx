import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav className="w-full bg-[var(--theme-ivory-medium)] pt-[24px] pb-[24px] px-[24px] md:px-[48px] flex items-center justify-between z-[100] relative transition-colors duration-500">
        <Link to="/" className="font-chrome font-bold text-[12px] uppercase tracking-wider text-[var(--theme-slate-dark)]">
          MRA CODER
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-[32px]">
          <div className="flex items-center gap-[24px] font-chrome text-[12px]">
            <Link to="/studio" className="text-[var(--theme-cloud-medium)] hover:text-[var(--theme-slate-dark)] transition-colors">Studio</Link>
            <Link to="/capabilities" className="text-[var(--theme-cloud-medium)] hover:text-[var(--theme-slate-dark)] transition-colors">Capabilities</Link>
            <Link to="/work" className="text-[var(--theme-cloud-medium)] hover:text-[var(--theme-slate-dark)] transition-colors">Work</Link>
            <Link to="/contact" className="text-[var(--theme-cloud-medium)] hover:text-[var(--theme-slate-dark)] transition-colors">Contact</Link>
          </div>
          
          <button onClick={toggleDarkMode} aria-label="Toggle Dark Mode" className="text-[var(--theme-cloud-dark)] hover:text-[var(--theme-slate-dark)] transition-colors">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link to="/contact">
            <Button variant="filled-ivory" className="text-[12px]">
              Let's talk
            </Button>
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-[16px]">
          <button onClick={toggleDarkMode} aria-label="Toggle Dark Mode" className="text-[var(--theme-cloud-dark)]">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Mobile Menu" className="text-[var(--theme-slate-dark)]">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[var(--theme-ivory-medium)] z-[90] flex flex-col items-center justify-center gap-[24px] pt-[60px]">
          <Link to="/studio" className="font-chrome text-[20px] text-[var(--theme-slate-dark)]">Studio</Link>
          <Link to="/capabilities" className="font-chrome text-[20px] text-[var(--theme-slate-dark)]">Capabilities</Link>
          <Link to="/work" className="font-chrome text-[20px] text-[var(--theme-slate-dark)]">Work</Link>
          <Link to="/contact" className="font-chrome text-[20px] text-[var(--theme-slate-dark)]">Contact</Link>
          <Link to="/contact">
            <Button variant="clay-filled" className="mt-4 text-[14px]">Let's talk</Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
