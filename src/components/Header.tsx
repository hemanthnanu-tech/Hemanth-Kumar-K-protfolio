import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps { currentSection: string; }

const NAV = [
  { label: 'About',          href: '#summary' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
];

export const Header: React.FC<HeaderProps> = ({ currentSection }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-5 px-6 pointer-events-none">
      <div className={`pointer-events-auto flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-500 ${scrolled ? 'glass-nav' : 'bg-transparent'}`}>

        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center justify-center w-8 h-8 rounded-full mr-2 transition-all duration-300 hover:bg-[#00d4ff]/10"
          style={{ border: '1px solid rgba(0,212,255,0.3)' }}
        >
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '14px', color: '#00d4ff', fontWeight: 500 }}>H</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map(item => {
            const active = currentSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 rounded-full transition-all duration-300"
                style={{
                  fontFamily: 'Plus Jakarta Sans', fontSize: '10px',
                  fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  background: active ? '#00d4ff' : 'transparent',
                  color: active ? '#050510' : 'rgba(226,232,240,0.55)',
                }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.color = '#e2e8f0'; }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.color = 'rgba(226,232,240,0.55)'; }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile */}
        <button
          type="button"
          id="btn-mobile-nav"
          onClick={() => setOpen(!open)}
          className="md:hidden ml-1 p-2 rounded-full transition-all"
          style={{ color: 'rgba(226,232,240,0.6)' }}
          aria-label="Toggle menu"
        >
          {open ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="pointer-events-auto absolute top-20 left-4 right-4 glass-nav rounded-2xl p-5 md:hidden">
          {NAV.map(item => {
            const active = currentSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl mb-1 transition-all duration-300"
                style={{
                  fontFamily: 'Plus Jakarta Sans', fontSize: '13px', fontWeight: 600,
                  background: active ? '#00d4ff' : 'transparent',
                  color: active ? '#050510' : 'rgba(226,232,240,0.7)',
                }}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
