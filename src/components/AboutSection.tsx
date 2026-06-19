import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Github, Briefcase, GraduationCap } from 'lucide-react';
import { portfolio } from '../data/portfolio';

const useReveal = (ref: React.RefObject<Element | null>) => {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) =>
            setTimeout(() => el.classList.add('in-view'), i * 120)
          );
        }
      }),
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
};

export const About: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section id="about" ref={ref} className="relative py-32 px-6 lg:px-20 overflow-hidden"
      style={{ background: '#0B0B0F', zIndex: 10 }}>

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,242,254,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(155,81,224,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="reveal mb-16">
          <div className="section-label mb-5">About Me</div>
          <h2 className="section-heading">
            Where <span className="gradient-text">Hardware</span><br />Meets Software
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Bio card */}
          <div className="lg:col-span-7 reveal glass rounded-2xl p-8" style={{ transitionDelay: '0.1s' }}>
            <p style={{ fontFamily: 'Space Grotesk', fontSize: '16px', lineHeight: 1.85, color: 'rgba(232,232,240,0.7)' }}>
              {portfolio.personal.summary}
            </p>

            <div className="mt-8 space-y-3">
              {[
                { icon: <MapPin size={14} />, text: portfolio.personal.location },
                { icon: <Mail size={14} />,   text: portfolio.personal.email, href: `mailto:${portfolio.personal.email}` },
                { icon: <Github size={14} />, text: portfolio.personal.githubLabel, href: portfolio.personal.github },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-3">
                  <span style={{ color: '#00F2FE', flexShrink: 0 }}>{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer"
                      style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: 'rgba(232,232,240,0.55)', letterSpacing: '0.05em', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#00F2FE')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(232,232,240,0.55)')}>
                      {item.text}
                    </a>
                  ) : (
                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: 'rgba(232,232,240,0.55)', letterSpacing: '0.05em' }}>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Education + Experience */}
          <div className="lg:col-span-5 space-y-5">
            {/* Education */}
            <div className="reveal glass rounded-2xl p-6" style={{ transitionDelay: '0.2s' }}>
              <div className="flex items-center gap-2 mb-5" style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', letterSpacing: '0.3em', color: '#00F2FE', textTransform: 'uppercase' }}>
                <GraduationCap size={14} /> Education
              </div>
              <div className="space-y-4">
                {portfolio.education.map((edu, i) => (
                  <div key={edu.id} className={`${i < portfolio.education.length - 1 ? 'pb-4 border-b border-white/5' : ''}`}>
                    <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: 'rgba(0,242,254,0.6)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '4px' }}>
                      {edu.period} · {edu.location}
                    </div>
                    <div style={{ fontFamily: 'Syne', fontWeight: 600, fontSize: '13px', color: '#E8E8F0', lineHeight: 1.3, marginBottom: '3px' }}>
                      {edu.institution}
                    </div>
                    <div style={{ fontFamily: 'Space Grotesk', fontSize: '12px', color: 'rgba(232,232,240,0.5)' }}>
                      {edu.degree}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience summary */}
            <div className="reveal glass glass-violet rounded-2xl p-6" style={{ transitionDelay: '0.35s' }}>
              <div className="flex items-center gap-2 mb-5" style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', letterSpacing: '0.3em', color: '#9B51E0', textTransform: 'uppercase' }}>
                <Briefcase size={14} /> Experience
              </div>
              <div className="space-y-4">
                {portfolio.experience.map((exp, i) => (
                  <div key={exp.id} className={`${i < portfolio.experience.length - 1 ? 'pb-4 border-b border-white/5' : ''}`}>
                    <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: 'rgba(155,81,224,0.7)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '4px' }}>
                      {exp.period}
                    </div>
                    <div style={{ fontFamily: 'Syne', fontWeight: 600, fontSize: '13px', color: '#E8E8F0', lineHeight: 1.3 }}>
                      {exp.role}
                    </div>
                    <div style={{ fontFamily: 'Space Grotesk', fontSize: '12px', color: 'rgba(232,232,240,0.5)' }}>
                      {exp.company}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
