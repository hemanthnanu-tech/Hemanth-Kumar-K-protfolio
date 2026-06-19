import React, { useEffect, useRef } from 'react';
import { resumeData } from '../data';
import * as Icons from 'lucide-react';

export const Skills: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) e.target.querySelectorAll('.reveal').forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 100));
    }), { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const renderIcon = (name: string) => {
    const I = (Icons as any)[name];
    return I ? <I size={16} /> : <Icons.Cpu size={16} />;
  };

  return (
    <section id="skills" ref={ref} className="section-a relative py-32 px-6 lg:px-20 overflow-hidden dot-grid">
      <div className="absolute top-[20%] left-[-5%] w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="reveal mb-20">
          <div className="eyebrow mb-5">Skills</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="section-heading">Professional <em>Expertise</em></h2>
            <p style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '14px', color: 'rgba(226,232,240,0.42)', maxWidth: '360px', lineHeight: 1.7 }}>
              Technical competencies spanning embedded hardware, firmware, and industrial automation.
            </p>
          </div>
        </div>

        {/* All categories — no tabs, all visible */}
        <div className="space-y-4">
          {resumeData.skills.map((cat, ci) => (
            <div key={cat.category} className="reveal card-dark p-6 md:p-8" style={{ transitionDelay: `${ci * 0.08}s` }}>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Category label */}
                <div className="md:w-56 shrink-0 flex items-start gap-3">
                  <div className="p-2 rounded-lg shrink-0" style={{ background: 'rgba(0,212,255,0.1)', color: '#00d4ff' }}>
                    {renderIcon(cat.icon)}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: '12px', color: '#e2e8f0', letterSpacing: '0.05em', lineHeight: 1.3, marginBottom: '4px' }}>
                      {cat.category}
                    </div>
                    <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: 'rgba(0,212,255,0.45)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                      {cat.skills.length} skills
                    </div>
                  </div>
                </div>
                {/* Vertical divider */}
                <div className="hidden md:block" style={{ width: '1px', background: 'rgba(0,212,255,0.1)', alignSelf: 'stretch', margin: '0 8px' }} />
                <div className="md:hidden h-[1px]" style={{ background: 'rgba(0,212,255,0.08)' }} />
                {/* Skills */}
                <div className="flex flex-wrap gap-2.5 flex-1">
                  {cat.skills.map(skill => (
                    <span key={skill} className="skill-chip">{skill}</span>
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
