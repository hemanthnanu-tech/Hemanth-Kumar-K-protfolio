import React, { useEffect, useRef } from 'react';
import { resumeData } from '../data';
import { BadgeCheck, Landmark } from 'lucide-react';

export const Certifications: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) e.target.querySelectorAll('.reveal').forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 110));
    }), { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="certifications" ref={ref} className="section-b relative py-32 px-6 lg:px-20 overflow-hidden">
      <div className="section-divider mb-0" />
      <div className="absolute top-0 left-[-5%] w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)', filter: 'blur(70px)' }} />

      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-16">
          <div className="eyebrow mb-5">Certifications</div>
          <h2 className="section-heading">Accredited <em>Credentials</em></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {resumeData.certifications.map((cert, i) => (
            <div key={cert.id} className="reveal card-dark p-8 flex flex-col gap-5 relative" style={{ transitionDelay: `${i * 0.1}s` }}>
              {/* Icon + number */}
              <div className="flex items-start justify-between">
                <div className="p-3.5 rounded-xl" style={{ background: 'rgba(0,212,255,0.1)', color: '#00d4ff' }}>
                  <BadgeCheck size={22} />
                </div>
                <span style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: 'rgba(0,212,255,0.35)', letterSpacing: '0.2em' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Title */}
              <h4 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: '14px', color: '#e2e8f0', lineHeight: 1.4, flex: 1 }}>
                {cert.title}
              </h4>

              {/* Org + period */}
              <div className="pt-5 border-t border-white/5 space-y-3">
                <div className="flex items-center gap-2">
                  <Landmark size={12} style={{ color: '#8b5cf6', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '12px', color: 'rgba(226,232,240,0.55)', fontWeight: 500 }}>
                    {cert.organization}
                  </span>
                </div>
                <div className="inline-block px-3 py-1 rounded-full"
                  style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', letterSpacing: '0.15em', color: '#00d4ff', background: 'rgba(0,212,255,0.07)', border: '1px solid rgba(0,212,255,0.2)' }}>
                  {cert.period}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
