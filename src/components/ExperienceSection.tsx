import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { portfolio } from '../data/portfolio';

const useReveal = (ref: React.RefObject<Element | null>) => {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal').forEach((el, i) =>
            setTimeout(() => el.classList.add('in-view'), i * 110)
          );
      }),
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
};

export const ExperienceSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section id="experience" ref={ref} className="relative py-32 px-6 lg:px-20 overflow-hidden"
      style={{ background: '#0B0B0F', zIndex: 10 }}>
      <div className="divider absolute top-0 left-0 right-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,242,254,0.06) 0%, transparent 70%)', filter: 'blur(70px)' }} />

      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-16">
          <div className="section-label mb-5">Experience</div>
          <h2 className="section-heading">Professional <span className="gradient-text">Milestones</span></h2>
        </div>

        <div className="space-y-6">
          {portfolio.experience.map((exp, idx) => (
            <div
              key={exp.id}
              className="reveal glass rounded-2xl p-8 md:p-10 relative overflow-hidden"
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              {/* Big bg number */}
              <div className="absolute top-6 right-8 pointer-events-none select-none"
                style={{ fontFamily: 'Syne', fontSize: '7rem', fontWeight: 800, color: 'rgba(0,242,254,0.04)', lineHeight: 1 }}>
                {String(idx + 1).padStart(2, '0')}
              </div>

              <div className="relative z-10">
                {/* Role + company */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5 mb-7">
                  <div>
                    <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', letterSpacing: '0.3em', color: '#00F2FE', textTransform: 'uppercase', marginBottom: '10px' }}>
                      {String(idx + 1).padStart(2, '0')} / Internship
                    </div>
                    <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: '#E8E8F0', lineHeight: 1.2, marginBottom: '6px' }}>
                      {exp.company}
                    </h3>
                    <p style={{ fontFamily: 'Space Grotesk', fontSize: '1rem', color: '#00F2FE', fontStyle: 'italic' }}>
                      {exp.role}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 shrink-0">
                    {[
                      { icon: <Calendar size={12} />, text: exp.period },
                      { icon: <MapPin size={12} />,   text: exp.location },
                    ].map(m => (
                      <div key={m.text} className="flex items-center gap-2 px-4 py-2 rounded-full"
                        style={{ background: 'rgba(0,242,254,0.07)', border: '1px solid rgba(0,242,254,0.18)' }}>
                        <span style={{ color: '#00F2FE' }}>{m.icon}</span>
                        <span style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: 'rgba(232,232,240,0.55)', letterSpacing: '0.08em' }}>{m.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-3 mb-7">
                  {exp.bullets.map((bullet, bi) => (
                    <div key={bi} className="flex items-start gap-3 p-4 rounded-xl"
                      style={{ background: 'rgba(0,242,254,0.04)', border: '1px solid rgba(0,242,254,0.08)' }}>
                      <CheckCircle2 size={16} style={{ color: '#00F2FE', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontFamily: 'Space Grotesk', fontSize: '14px', color: 'rgba(232,232,240,0.6)', lineHeight: 1.7 }}>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((t, i) => (
                    <span key={t} className={`tag ${i % 2 === 0 ? 'tag-cyan' : 'tag-violet'}`}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
