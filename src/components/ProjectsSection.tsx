import React, { useRef, useEffect, useCallback, useState } from 'react';
import { motion } from 'motion/react';
import { portfolio } from '../data/portfolio';

const useReveal = (ref: React.RefObject<Element | null>) => {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal').forEach((el, i) =>
            setTimeout(() => el.classList.add('in-view'), i * 80)
          );
      }),
      { threshold: 0.06 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
};

const CARD_W = 380;

const ProjectCard: React.FC<{ project: (typeof portfolio.projects)[0]; index: number }> = ({ project, index }) => {
  return (
    <div
      className="project-card glass rounded-2xl overflow-hidden flex-shrink-0 flex flex-col"
      style={{ width: CARD_W, minHeight: '480px' }}
      data-cursor="hover"
    >
      {/* Visual area — coloured gradient top */}
      <div
        className="relative h-52 flex-shrink-0 flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.color}18 0%, rgba(0,0,0,0.6) 100%)`,
          borderBottom: `1px solid ${project.color}22`,
        }}
      >
        {/* Index watermark */}
        <div className="absolute top-4 right-6 select-none"
          style={{ fontFamily: 'Syne', fontSize: '5rem', fontWeight: 800, color: `${project.color}12`, lineHeight: 1 }}>
          {String(index + 1).padStart(2, '0')}
        </div>
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="tag" style={{ color: project.color, background: `${project.color}15`, borderColor: `${project.color}35` }}>
            {project.category}
          </span>
        </div>
        {/* Glowing hex centre */}
        <div className="w-20 h-20 border-2 flex items-center justify-center"
          style={{ borderColor: project.color, transform: 'rotate(45deg)', boxShadow: `0 0 30px ${project.color}50, inset 0 0 30px ${project.color}10` }}>
          <div style={{ transform: 'rotate(-45deg)', fontFamily: 'Syne', fontSize: '11px', fontWeight: 800, color: project.color, letterSpacing: '0.1em' }}>
            {project.tags[0]?.slice(0, 3).toUpperCase()}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7">
        <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '17px', color: '#E8E8F0', lineHeight: 1.25, marginBottom: '10px' }}>
          {project.title}
        </h3>
        <p style={{ fontFamily: 'Space Grotesk', fontSize: '13px', color: 'rgba(232,232,240,0.55)', lineHeight: 1.75, marginBottom: '16px', flex: 1 }}>
          {project.shortDesc}
        </p>
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map((t, i) => (
            <span key={t} className={`tag ${i % 2 === 0 ? 'tag-cyan' : 'tag-violet'}`}>{t}</span>
          ))}
        </div>
      </div>

      {/* Hover glow — bottom shadow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 rounded-b-2xl"
        style={{ background: `linear-gradient(to top, ${project.color}18, transparent)` }} />
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);
  useReveal(sectionRef);

  // Drag-to-scroll
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollL = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    isDown.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollL.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = 'grabbing';
  };
  const onMouseLeave = () => {
    isDown.current = false;
    if (trackRef.current) trackRef.current.style.cursor = 'grab';
  };
  const onMouseUp = () => {
    isDown.current = false;
    if (trackRef.current) trackRef.current.style.cursor = 'grab';
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.4;
    trackRef.current.scrollLeft = scrollL.current - walk;
  };

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 overflow-hidden"
      style={{ background: '#111118', zIndex: 10 }}>
      <div className="divider absolute top-0 left-0 right-0" />

      {/* Header */}
      <div className="px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="reveal mb-14">
            <div className="section-label mb-5">Projects</div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
              <h2 className="section-heading">
                Systems <span className="gradient-text">Portfolio</span>
              </h2>
              <p style={{ fontFamily: 'Space Grotesk', fontSize: '13px', color: 'rgba(232,232,240,0.4)', maxWidth: '300px', lineHeight: 1.7 }}>
                Drag to scroll → {portfolio.projects.length} projects across hardware, software, and IoT domains.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal scroll gallery */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to right, #111118, transparent)' }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to left, #111118, transparent)' }} />

        <div
          ref={trackRef}
          className="h-scroll-track overflow-x-auto"
          style={{ paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))', paddingRight: '80px', scrollbarWidth: 'none' }}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {portfolio.projects.map((proj, i) => (
            <div key={proj.id} className="reveal relative" style={{ transitionDelay: `${i * 0.04}s` }}>
              <ProjectCard project={proj} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
