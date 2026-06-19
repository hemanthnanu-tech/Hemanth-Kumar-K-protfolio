import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { HeroOrb } from './HeroOrb';

const STATS = [
  { num: '5+', label: 'Projects Built' },
  { num: '2',  label: 'Internships' },
  { num: '3',  label: 'Certifications' },
];

export const Hero: React.FC = () => {
  const leftRef  = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      leftRef.current?.classList.add('visible');
      setTimeout(() => rightRef.current?.classList.add('visible'), 220);
    }, 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="section-a relative min-h-screen flex items-center px-6 lg:px-20 pt-24 pb-16 overflow-hidden"
    >
      {/* BG glow orbs */}
      <div className="absolute top-[-15%] left-[-8%] w-[650px] h-[650px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', filter: 'blur(100px)' }} />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-8 xl:gap-16 items-center">

          {/* LEFT */}
          <div ref={leftRef} className="reveal space-y-9">
            <div className="eyebrow">Electronics &amp; Automation Engineer</div>

            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(4.5rem, 11vw, 9.5rem)',
              fontWeight: 300, lineHeight: 0.88, letterSpacing: '-0.025em',
              color: '#e2e8f0',
            }}>
              HEMANTH<br />
              <span style={{ fontStyle: 'italic', color: '#00d4ff' }}>KUMAR K</span>
            </h1>

            <p style={{
              fontFamily: 'Plus Jakarta Sans', fontSize: '15px', fontWeight: 300,
              color: 'rgba(226,232,240,0.5)', maxWidth: '480px', lineHeight: 1.78,
            }}>
              Results-driven ECE student specialising in embedded systems, IoT architecture, and
              industrial automation. Building hardware that thinks — from bare-metal firmware to
              real-time PLC control systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#summary" className="btn-gold">View Profile</a>
              <a href="#projects" className="btn-ghost">See Projects</a>
            </div>

            {/* Stats strip */}
            <div className="flex items-center gap-8 pt-7 border-t border-white/5">
              {STATS.map((s, i) => (
                <React.Fragment key={s.label}>
                  <div>
                    <div style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '2.2rem', fontWeight: 300,
                      background: 'linear-gradient(135deg, #00d4ff, #8b5cf6)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                      lineHeight: 1,
                    }}>
                      {s.num}
                    </div>
                    <div style={{
                      fontFamily: 'JetBrains Mono', fontSize: '9px',
                      letterSpacing: '0.2em', color: 'rgba(226,232,240,0.3)',
                      textTransform: 'uppercase', marginTop: '4px',
                    }}>
                      {s.label}
                    </div>
                  </div>
                  {i < STATS.length - 1 && <div style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.07)' }} />}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* RIGHT — 3D Sphere */}
          <div ref={rightRef} className="reveal flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[480px]">
              <div className="absolute inset-[-10%] rounded-full border border-[#00d4ff]/8 pointer-events-none"
                style={{ animation: 'spinSlow 40s linear infinite' }} />
              <div className="absolute inset-[-20%] rounded-full border border-[#8b5cf6]/6 pointer-events-none"
                style={{ animation: 'spinSlow 65s linear infinite reverse' }} />
              <HeroOrb />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-40 hover:opacity-80 transition-opacity"
        onClick={() => document.getElementById('summary')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, transparent, #00d4ff)' }} />
        <ArrowDown size={13} style={{ color: '#00d4ff' }} className="animate-bounce" />
      </div>
    </section>
  );
};
