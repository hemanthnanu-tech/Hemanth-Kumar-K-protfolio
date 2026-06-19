import React, { useEffect, useRef } from 'react';
import { resumeData } from '../data';
import { MapPin, Calendar } from 'lucide-react';

export const Summary: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) e.target.querySelectorAll('.reveal').forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 120));
    }), { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const C = { card: 'rgba(255,255,255,0.03)', cardBorder: 'rgba(0,212,255,0.12)', text: '#e2e8f0', muted: 'rgba(226,232,240,0.45)', faint: 'rgba(226,232,240,0.25)' };

  return (
    <section id="summary" ref={ref} className="section-b relative py-32 px-6 lg:px-20 overflow-hidden">
      <div className="section-divider mb-0" />
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-16">
          <div className="eyebrow mb-5">About</div>
          <h2 className="section-heading">A Philosophy of <em>Precision</em></h2>
        </div>

        {/* Large quote */}
        <div className="reveal mb-20" style={{ transitionDelay: '0.1s' }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.2rem, 2.4vw, 1.85rem)', fontStyle: 'italic', fontWeight: 300,
            lineHeight: 1.65, color: 'rgba(226,232,240,0.65)', maxWidth: '860px',
            borderLeft: '2px solid rgba(0,212,255,0.4)', paddingLeft: '2rem',
          }}>
            "{resumeData.profile.summary}"
          </div>
        </div>

        {/* Quick facts */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-5 mb-20" style={{ transitionDelay: '0.2s' }}>
          {[
            { label: 'Location',   value: 'Bangalore, Karnataka, IN' },
            { label: 'Degree',     value: 'B.E. Electronics & Communication' },
            { label: 'Core Stack', value: 'C · C++ · TIA Portal · Python' },
          ].map(f => (
            <div key={f.label} className="card-dark p-5">
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#00d4ff', marginBottom: '8px' }}>
                {f.label}
              </div>
              <div style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '14px', fontWeight: 600, color: C.text }}>{f.value}</div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="reveal" style={{ transitionDelay: '0.3s' }}>
          <div className="flex items-center gap-3 mb-8" style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#00d4ff' }}>
            <div style={{ width: '20px', height: '1px', background: 'linear-gradient(90deg, #00d4ff, #8b5cf6)' }} />
            Education
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {resumeData.education.map((edu, i) => (
              <div key={edu.id} className="card-dark p-6 flex flex-col gap-3 relative">
                <div className="absolute top-5 right-5" style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: 'rgba(0,212,255,0.35)' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="flex items-center gap-1.5" style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: '#00d4ff', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  <Calendar size={10} /> {edu.period}
                </div>
                <h5 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: '13px', color: C.text, lineHeight: 1.35, paddingRight: '24px' }}>
                  {edu.institution}
                </h5>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '13px', color: C.muted, lineHeight: 1.5 }}>
                  {edu.degree}
                </p>
                <div className="flex items-center gap-1.5 mt-auto pt-3 border-t border-white/5" style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '11px', color: C.faint }}>
                  <MapPin size={10} style={{ color: '#00d4ff' }} /> {edu.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
