import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Download } from 'lucide-react';
import { portfolio } from '../data/portfolio';

const TYPING_SPEED = 60;
const ERASE_SPEED  = 35;
const PAUSE        = 2000;

export const HeroSection: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed]   = useState('');
  const [phase, setPhase]           = useState<'type' | 'pause' | 'erase'>('type');

  useEffect(() => {
    const full = portfolio.personal.titles[titleIndex];
    if (phase === 'type') {
      if (displayed.length < full.length) {
        const t = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), TYPING_SPEED);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase('erase'), PAUSE);
        return () => clearTimeout(t);
      }
    }
    if (phase === 'erase') {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), ERASE_SPEED);
        return () => clearTimeout(t);
      } else {
        setTitleIndex(i => (i + 1) % portfolio.personal.titles.length);
        setPhase('type');
      }
    }
  }, [phase, displayed, titleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 lg:px-20 pt-20 overflow-hidden"
    >
      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0B0B0F)' }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl space-y-8">

          {/* Eyebrow */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="flex items-center gap-3">
              <div style={{ width: '32px', height: '1px', background: '#00F2FE' }} />
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', letterSpacing: '0.35em', color: '#00F2FE', textTransform: 'uppercase' }}>
                Portfolio · 2026
              </span>
            </div>
          </motion.div>

          {/* Giant name */}
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          >
            HEMANTH<br />
            <span style={{ color: '#00F2FE', fontStyle: 'italic', textShadow: '0 0 60px rgba(0,242,254,0.6)' }}>
              KUMAR K
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="hero-title flex items-center gap-2">
            <span>{displayed}</span>
            <span className="animate-pulse" style={{ width: '2px', height: '1.1em', background: '#00F2FE', display: 'inline-block', boxShadow: '0 0 8px rgba(0,242,254,0.9)' }} />
          </motion.div>

          {/* Tagline */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
            style={{ fontFamily: 'Space Grotesk', fontSize: '15px', fontWeight: 300, color: 'rgba(232,232,240,0.55)', lineHeight: 1.8 }}>
            {portfolio.personal.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowDown size={16} />
            </a>
            <a href="#contact" className="btn-ghost">Get In Touch</a>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap items-center gap-6 pt-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {portfolio.personal.stats.map((s, i) => (
              <React.Fragment key={s.label}>
                <div>
                  <div style={{ fontFamily: 'Syne', fontSize: '1.7rem', fontWeight: 800, background: 'linear-gradient(135deg, #00F2FE, #9B51E0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>
                    {s.value}
                  </div>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(232,232,240,0.3)', textTransform: 'uppercase', marginTop: '3px' }}>
                    {s.label}
                  </div>
                </div>
                {i < portfolio.personal.stats.length - 1 && (
                  <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.07)' }} />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ duration: 1, delay: 1.5 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer hover:opacity-100 transition-opacity"
        type="button"
      >
        <span style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', letterSpacing: '0.4em', color: '#00F2FE', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={14} style={{ color: '#00F2FE' }} />
        </motion.div>
      </motion.button>
    </section>
  );
};
