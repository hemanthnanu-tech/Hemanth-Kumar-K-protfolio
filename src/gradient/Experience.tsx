import React, { useState } from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const EXPERIENCE = [
  {
    id: 'exp1',
    company: 'GTTC',
    role: 'Industrial Automation Intern',
    period: 'Feb 2026 – May 2026',
    location: 'Bangalore',
    bullets: [
      'Engineered PLC programs and ladder logic for complex industrial automation processes utilizing TIA Portal.',
      'Designed and deployed SCADA systems and HMI interfaces to streamline machine control.',
      'Architected Python-based IoT logic seamlessly integrated with PLC hardware.',
    ],
    tags: ['TIA Portal', 'PLC', 'SCADA', 'Python', 'IoT'],
  },
  {
    id: 'exp2',
    company: 'Semi-Pro Tech',
    role: 'PCB Assembly Intern',
    period: 'Mar 2024 – Jun 2024',
    location: 'Bangalore',
    bullets: [
      'Executed precise PCB fabrication, assembly, and soldering to strict industry standards.',
      'Spearheaded component-level testing and troubleshooting of electronic circuits.',
      'Conducted quality assurance inspections ensuring high reliability.',
    ],
    tags: ['PCB Design', 'Soldering', 'Circuit Testing'],
  },
];

export const Experience = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="experience" className="relative py-32 px-6 md:px-12 lg:px-20 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-heading mb-20"
        >
          Experience
        </motion.h2>

        <div className="border-t border-[var(--panel-border)]">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative flex flex-col md:flex-row items-start md:items-center py-10 md:py-16 border-b border-[var(--panel-border)] transition-colors hover:bg-[var(--btn-bg)] -mx-6 px-6 md:-mx-12 md:px-12 cursor-crosshair"
            >
              
              {/* Massive Company Name */}
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <div className="text-[13px] font-mono text-[var(--text-muted)] mb-2 uppercase tracking-widest">
                  {exp.period}
                </div>
                <h3 className="text-4xl md:text-6xl font-medium tracking-tight text-[var(--text-main)] group-hover:translate-x-4 transition-transform duration-500 ease-out">
                  {exp.company}
                </h3>
              </div>

              {/* Details & Bullets */}
              <div className="w-full md:w-1/2 flex flex-col relative">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-xl md:text-2xl font-medium text-[var(--accent)] mb-2">{exp.role}</h4>
                    <div className="flex items-center gap-1 text-[14px] text-[var(--text-muted)]">
                      <MapPin size={14} /> {exp.location}
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-[var(--panel-border)] flex items-center justify-center text-[var(--text-muted)] group-hover:bg-[var(--accent)] group-hover:text-[var(--bg-color)] group-hover:border-[var(--accent)] transition-all duration-300 transform group-hover:rotate-45">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* Animated Bullets */}
                <AnimatePresence>
                  {hoveredIdx === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3 mb-6 pt-4 border-t border-[var(--panel-border)]">
                        {exp.bullets.map((b, i) => (
                          <div key={i} className="text-[15px] text-[var(--text-muted)] leading-relaxed">
                            • {b}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 pb-2">
                        {exp.tags.map(t => (
                          <span key={t} className="px-3 py-1 text-[11px] font-mono tracking-wider text-[var(--accent)] uppercase bg-[var(--btn-bg)] border border-[var(--panel-border)] rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
