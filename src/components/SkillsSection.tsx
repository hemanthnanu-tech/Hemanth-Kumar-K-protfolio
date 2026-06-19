import React, { useRef, useEffect, useCallback } from 'react';
import { portfolio } from '../data/portfolio';
import { Brain, Code2, Layers, Cog, Cpu } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Brain:  <Brain  size={20} />,
  Code2:  <Code2  size={20} />,
  Layers: <Layers size={20} />,
  Cog:    <Cog    size={20} />,
  Cpu:    <Cpu    size={20} />,
};

const useReveal = (ref: React.RefObject<Element | null>) => {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal').forEach((el, i) =>
            setTimeout(() => el.classList.add('in-view'), i * 90)
          );
      }),
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
};

const SkillCard: React.FC<{ category: (typeof portfolio.skills)[0]; delay: number }> = ({ category, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateX(${-y * 14}deg) rotateY(${x * 14}deg) translateZ(8px)`;
    card.style.borderColor = x > 0 ? 'rgba(0,242,254,0.5)' : 'rgba(155,81,224,0.5)';
    card.style.boxShadow = x > 0
      ? '0 0 30px rgba(0,242,254,0.12), 0 20px 50px rgba(0,0,0,0.6)'
      : '0 0 30px rgba(155,81,224,0.12), 0 20px 50px rgba(0,0,0,0.6)';
  }, []);

  const onMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = '';
    card.style.borderColor = '';
    card.style.boxShadow = '';
  }, []);

  return (
    <div
      ref={cardRef}
      className="reveal tilt-card glass rounded-xl p-6 select-none"
      style={{ transitionDelay: `${delay}s`, cursor: 'default' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-lg" style={{ background: 'rgba(0,242,254,0.1)', color: '#00F2FE' }}>
          {ICON_MAP[category.icon]}
        </div>
        <h4 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '14px', color: '#E8E8F0', lineHeight: 1.2 }}>
          {category.category}
        </h4>
      </div>

      {/* Skill chips */}
      <div className="flex flex-wrap gap-2">
        {category.items.map((item, i) => (
          <span key={item} className={`tag ${i % 2 === 0 ? 'tag-cyan' : 'tag-violet'}`}>
            {item}
          </span>
        ))}
      </div>

      {/* Inner glow layer (tilt-card-inner) */}
      <div className="tilt-card-inner absolute inset-0 rounded-xl pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0,242,254,0.04), transparent 60%)' }} />
    </div>
  );
};

export const SkillsSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section id="skills" ref={ref} className="relative py-32 px-6 lg:px-20 overflow-hidden"
      style={{ background: '#111118', zIndex: 10 }}>
      <div className="divider absolute top-0 left-0 right-0" />

      {/* Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(155,81,224,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal mb-16">
          <div className="section-label mb-5">Technical Skills</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="section-heading">
              Core <span className="gradient-text">Expertise</span>
            </h2>
            <p style={{ fontFamily: 'Space Grotesk', fontSize: '14px', color: 'rgba(232,232,240,0.45)', maxWidth: '380px', lineHeight: 1.7 }}>
              Hover over any card to see it tilt and illuminate with a neon edge glow.
            </p>
          </div>
        </div>

        {/* Grid — glassmorphic tilt cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolio.skills.map((cat, i) => (
            <SkillCard key={cat.category} category={cat} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
};
