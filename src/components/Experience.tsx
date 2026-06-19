import React, { useEffect, useRef } from 'react';
import { resumeData } from '../data';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) e.target.querySelectorAll('.reveal').forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 130));
    }), { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const C = { text: '#e2e8f0', muted: 'rgba(226,232,240,0.5)', faint: 'rgba(226,232,240,0.3)' };

  return (
    <section id="experience" ref={ref} className="section-b relative py-32 px-6 lg:px-20 overflow-hidden">
      <div className="section-divider mb-0" />
      <div className="absolute bottom-0 right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', filter: 'blur(70px)' }} />

      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-20">
          <div className="eyebrow mb-5">Experience</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="section-heading">Professional <em>Milestones</em></h2>
            <p style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '14px', color: 'rgba(226,232,240,0.42)', maxWidth: '380px', lineHeight: 1.7 }}>
              Industrial residencies in PLC automation, embedded development, and hardware manufacturing.
            </p>
          </div>
        </div>

        {/* All experiences directly visible — no sidebar */}
        <div className="space-y-6">
          {resumeData.experience.map((exp, index) => (
            <div key={exp.id} className="reveal card-dark p-7 md:p-10 relative overflow-hidden" style={{ transitionDelay: `${index * 0.12}s` }}>
              {/* Large bg number */}
              <div className="absolute top-4 right-6 pointer-events-none select-none"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '7rem', fontWeight: 300, color: 'rgba(0,212,255,0.05)', lineHeight: 1 }}>
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Top info */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5 mb-8 relative z-10">
                <div>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#00d4ff', marginBottom: '10px' }}>
                    {String(index + 1).padStart(2, '0')} / Internship
                  </div>
                  <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 'clamp(1.1rem,2vw,1.35rem)', color: C.text, lineHeight: 1.25, marginBottom: '6px' }}>
                    {exp.company}
                  </h3>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.05rem', color: '#00d4ff' }}>
                    {exp.role}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                  {[
                    { icon: <Calendar size={12} />, text: exp.period },
                    { icon: <MapPin size={12} />, text: exp.location },
                  ].map(m => (
                    <div key={m.text} className="flex items-center gap-2 px-4 py-2 rounded-full"
                      style={{ background: 'rgba(0,212,255,0.06)', border: '1px solid rgba(0,212,255,0.15)' }}>
                      <span style={{ color: '#00d4ff' }}>{m.icon}</span>
                      <span style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: C.muted, letterSpacing: '0.1em' }}>{m.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bullets */}
              <div className="space-y-3 mb-8 relative z-10">
                {exp.bullets.map((bullet, bi) => (
                  <div key={bi} className="flex items-start gap-4 p-4 rounded-xl"
                    style={{ background: 'rgba(0,212,255,0.04)', border: '1px solid rgba(0,212,255,0.08)' }}>
                    <CheckCircle2 size={16} style={{ color: '#00d4ff', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '14px', color: C.muted, lineHeight: 1.65 }}>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {exp.highlights.map(tag => (
                  <span key={tag} className="skill-chip" style={{ fontSize: '10px' }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
