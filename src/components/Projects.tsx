import React, { useEffect, useRef } from 'react';
import { resumeData } from '../data';
import { Cpu, Wind, FolderGit2, Workflow, Compass } from 'lucide-react';

const ICONS: Record<string, React.ReactNode> = {
  'proj-1': <Cpu      size={22} />,
  'proj-2': <Wind     size={22} />,
  'proj-3': <FolderGit2 size={22} />,
  'proj-4': <Workflow size={22} />,
  'proj-5': <Compass  size={22} />,
};

// Cyan → purple gradient top bars per project
const BARS = [
  'linear-gradient(90deg, #00d4ff, #38bdf8, transparent)',
  'linear-gradient(90deg, #8b5cf6, #a78bfa, transparent)',
  'linear-gradient(90deg, #00d4ff, #8b5cf6, transparent)',
  'linear-gradient(90deg, #10b981, #00d4ff, transparent)',
  'linear-gradient(90deg, #8b5cf6, #00d4ff, transparent)',
];

export const Projects: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) e.target.querySelectorAll('.reveal').forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 80));
    }), { threshold: 0.06 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="section-a relative py-32 px-6 lg:px-20 overflow-hidden">
      <div className="absolute top-[30%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-20">
          <div className="eyebrow mb-5">Projects</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="section-heading">Systems <em>Portfolio</em></h2>
            <p style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '14px', color: 'rgba(226,232,240,0.42)', maxWidth: '380px', lineHeight: 1.7 }}>
              Embedded hardware projects — AI assistants, IoT telemetry pipelines, and PLC automation systems.
            </p>
          </div>
        </div>

        {/* Bento grid — all visible, no expand */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {resumeData.projects.map((proj, idx) => {
            const isWide = idx === 2;
            return (
              <div
                key={proj.id}
                className={`reveal card-dark flex flex-col relative overflow-hidden ${isWide ? 'md:col-span-2 lg:col-span-3' : ''}`}
                style={{ transitionDelay: `${idx * 0.07}s` }}
              >
                {/* Gradient top bar */}
                <div style={{ height: '3px', background: BARS[idx % BARS.length] }} />

                <div className={`p-7 flex flex-col gap-5 flex-1 ${isWide ? 'md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8' : ''}`}>
                  {/* Header */}
                  <div className={`flex flex-col gap-4 ${isWide ? 'col-span-1' : ''}`}>
                    <div className="flex items-start justify-between">
                      <div className="p-3 rounded-xl" style={{ background: 'rgba(0,212,255,0.1)', color: '#00d4ff' }}>
                        {ICONS[proj.id]}
                      </div>
                      <span style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: 'rgba(0,212,255,0.35)', letterSpacing: '0.15em' }}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: '15px', color: '#e2e8f0', lineHeight: 1.35 }}>
                      {proj.title}
                    </h3>
                  </div>

                  {/* Description + tags + bar */}
                  <div className={isWide ? 'col-span-1 lg:col-span-2' : ''}>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '15px', color: 'rgba(226,232,240,0.55)', lineHeight: 1.75, marginBottom: '16px' }}>
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {proj.tags.map(t => (
                        <span key={t} className="skill-chip" style={{ fontSize: '9px' }}>{t}</span>
                      ))}
                    </div>
                    {/* Complexity bar */}
                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <span style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: 'rgba(226,232,240,0.28)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Complexity</span>
                        <span style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: '#00d4ff' }}>{proj.complexity}%</span>
                      </div>
                      <div style={{ width: '100%', height: '3px', background: 'rgba(255,255,255,0.06)', borderRadius: '99px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', borderRadius: '99px', width: `${proj.complexity}%`, background: 'linear-gradient(90deg, #00d4ff, #8b5cf6)' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
