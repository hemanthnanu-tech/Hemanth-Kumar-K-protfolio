import React, { useState } from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

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
    link: 'https://drive.google.com/file/d/1Q5TDuBkT7LNS2r0ASyzBillgVxxVnRzA/view?usp=sharing'
  },
  {
    id: 'exp2',
    company: 'Diploma in Mechatronics',
    role: 'Student',
    period: '2023 – 2026',
    location: 'Bangalore',
    bullets: [
      'Focused on the integration of mechanical, electronic, and software engineering systems.',
      'Developed hands-on technical skills in robotics, automation, and industrial control systems.',
    ],
    tags: ['Mechatronics', 'Robotics', 'Control Systems'],
    link: 'https://drive.google.com/file/d/1VIYSpFv9SPHlXp0I8akWh-GJlpo3X7GW/view?usp=sharing'
  },
  {
    id: 'exp3',
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
    link: null
  },
  {
    id: 'exp4',
    company: 'Vikas Central School',
    role: 'High School Education',
    period: 'Completed 2023',
    location: 'Bangalore',
    bullets: [
      'Built a strong foundational knowledge with an emphasis on science, mathematics, and analytical problem solving.',
    ],
    tags: ['Science', 'Mathematics', 'Foundation'],
    link: 'https://drive.google.com/file/d/1LRT9r32hIIDarA_PAnANrA9mjY3UPsbH/view?usp=sharing'
  }
];

export const Experience = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="experience" className="relative py-32 px-6 md:px-12 lg:px-20 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-heading mb-20"
        >
          Experience & Education
        </motion.h2>

        <div className="border-t border-[var(--panel-border)]">
          {EXPERIENCE.map((exp, idx) => {
            const isActive = activeIdx === idx;
            
            return (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveIdx(isActive ? null : idx)}
                className="group relative flex flex-col md:flex-row items-start md:items-center py-10 md:py-16 border-b border-[var(--panel-border)] transition-colors hover:bg-[var(--btn-bg)] -mx-6 px-6 md:-mx-12 md:px-12 cursor-pointer"
              >
                
                {/* Massive Company Name */}
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                  <div className="text-[13px] font-mono text-[var(--text-muted)] mb-2 uppercase tracking-widest">
                    {exp.period}
                  </div>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[var(--text-main)] group-hover:translate-x-4 transition-transform duration-500 ease-out">
                    {exp.company}
                  </h3>
                </div>

                {/* Details & Bullets */}
                <div className="w-full md:w-1/2 flex flex-col relative">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-xl md:text-2xl font-medium text-[#D946EF] mb-2">{exp.role}</h4>
                      <div className="flex items-center gap-1 text-[14px] text-[var(--text-muted)]">
                        <MapPin size={14} /> {exp.location}
                      </div>
                    </div>
                    {exp.link && (
                      <a 
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-12 h-12 rounded-full border border-[var(--panel-border)] flex items-center justify-center text-[var(--text-muted)] group-hover:bg-[#7B3FE4] group-hover:text-white group-hover:border-[#7B3FE4] transition-all duration-300 transform group-hover:rotate-45"
                        aria-label="View Certificate"
                      >
                        <ArrowUpRight size={20} />
                      </a>
                    )}
                  </div>

                  {/* Animated Bullets (CSS height transition for flawless mobile support) */}
                  <div 
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                  >
                    <div className="space-y-3 mb-6 pt-4 border-t border-[var(--panel-border)] mt-4">
                      {exp.bullets.map((b, i) => (
                        <div key={i} className="text-[15px] text-[var(--text-muted)] leading-relaxed">
                          • {b}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 pb-2">
                      {exp.tags.map(t => (
                        <span key={t} className="px-3 py-1 text-[11px] font-mono tracking-wider text-[#7B3FE4] uppercase bg-[var(--btn-bg)] border border-[var(--panel-border)] rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
