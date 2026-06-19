import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Mail } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About',       href: '#about' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Projects',    href: '#projects' },
  { label: 'Contact',     href: '#contact' },
];

export const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-glass' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div
            className="w-8 h-8 border-2 flex items-center justify-center transition-all duration-300 group-hover:border-[#00F2FE] group-hover:shadow-[0_0_20px_rgba(0,242,254,0.5)]"
            style={{ borderColor: 'rgba(0,242,254,0.5)', transform: 'rotate(45deg)' }}
          >
            <span style={{ transform: 'rotate(-45deg)', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '11px', color: '#00F2FE' }}>HK</span>
          </div>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '13px', color: 'rgba(232,232,240,0.7)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            HEMANTH
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="transition-all duration-200"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgba(232,232,240,0.55)', letterSpacing: '0.06em' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#00F2FE'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(232,232,240,0.55)'; }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/hemanthnanu-tech"
            target="_blank" rel="noreferrer"
            className="transition-all duration-300"
            style={{ color: 'rgba(232,232,240,0.4)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#00F2FE'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(232,232,240,0.4)'; }}
          >
            <Github size={18} />
          </a>
          <a href="#contact" className="btn-primary" style={{ padding: '10px 20px', fontSize: '11px' }}>
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden"
          style={{ color: 'rgba(232,232,240,0.7)' }}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden nav-glass"
          >
            <div className="px-6 py-4 space-y-4">
              {NAV_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 transition-colors"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '15px', color: 'rgba(232,232,240,0.7)' }}
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="btn-primary block text-center mt-4" style={{ padding: '12px 20px', fontSize: '12px' }}>
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
