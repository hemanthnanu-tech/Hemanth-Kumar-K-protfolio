import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

const SOFTWARE_PROJECTS = [
  {
    id: 's1', title: '1fs-studio-website',
    desc: 'A premium digital storefront for 1FS Photography, bridging top-tier camera and gimbal rentals with professional photoshoot packages.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    colSpan: 'md:col-span-2 lg:col-span-2',
    link: 'https://hemanthnanu-tech.github.io/1fs-studio-website/'
  },
  {
    id: 's2', title: 'EvGrama',
    desc: 'EV-Grama is an innovative Android application designed to crowdsource and discover electric vehicle (EV) charging spots in rural settings.',
    tags: ['Kotlin', 'Android', 'Crowdsourcing'],
    colSpan: 'md:col-span-1 lg:col-span-1',
    link: 'https://github.com/hemanthnanu-tech/EvGrama'
  },
  {
    id: 's3', title: 'Jan-Aushadhi-Finder',
    desc: 'A specialized Android application designed to make healthcare more accessible and affordable. Allows users to quickly search for generic alternatives.',
    tags: ['Kotlin', 'Android', 'Healthcare'],
    colSpan: 'md:col-span-1 lg:col-span-1',
    link: 'https://github.com/hemanthnanu-tech/Jan-Aushadhi-Finder'
  },
  {
    id: 's4', title: 'FinTrack Elite v3.0',
    desc: 'A sleek, modern, and completely self-contained personal finance tracking application. Designed with a premium glassmorphism aesthetic.',
    tags: ['HTML', 'JavaScript', 'Finance'],
    colSpan: 'md:col-span-2 lg:col-span-2',
    link: 'https://hemanthnanu-tech.github.io/FinTrack/'
  },
  {
    id: 's5', title: 'HemiToolkit',
    desc: 'HemiToolkit Utilities. Perfected. Professional, client-side tools. Zero server uploads. All tools in one place.',
    tags: ['TypeScript', 'Utilities', 'Client-Side'],
    colSpan: 'md:col-span-2 lg:col-span-2',
    link: 'https://hemanthnanu-tech.github.io/HemiToolkit/'
  },
  {
    id: 's6', title: 'HemiTyping',
    desc: 'A futuristic typing engine packed with fluid animations, hyper-smooth effects, electric UI, and dynamic challenges.',
    tags: ['JavaScript', 'Typing Engine'],
    colSpan: 'md:col-span-1 lg:col-span-1',
    link: 'https://hemanthnanu-tech.github.io/HemiTyping/'
  },
];

const HARDWARE_PROJECTS = [
  {
    id: 'h1', title: 'Offline AI Assistant',
    desc: 'Engineered a completely offline, locally-executed AI assistant emphasizing zero cloud dependency and maximum user data privacy.',
    tags: ['AI/ML', 'Privacy', 'Local Execution'],
    colSpan: 'md:col-span-2 lg:col-span-2',
    link: '#'
  },
  {
    id: 'h2', title: 'IoT Weather & Air Quality',
    desc: 'Designed hardware architecture for a cloud-connected microcontroller system dynamically tracking real-time environmental metrics.',
    tags: ['Hardware', 'IoT', 'Sensors'],
    colSpan: 'md:col-span-1 lg:col-span-1',
    link: '#'
  },
  {
    id: 'h3', title: 'Gesture Wheelchair',
    desc: 'Developed hardware logic for Arduino-based prototypes, including IR-sensor traffic optimizers and embedded wheelchair navigation.',
    tags: ['Arduino', 'Embedded', 'IR Sensors'],
    colSpan: 'md:col-span-3 lg:col-span-3',
    link: '#'
  },
];

const ProjectCard = ({ proj, index }: { proj: any, index: number }) => (
  <motion.a 
    href={proj.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0.95, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={`group glass-panel flex flex-col h-full relative overflow-hidden cursor-pointer ${proj.colSpan}`}
  >
    <div className="flex justify-between items-start mb-10">
      <div className="text-[50px] font-light text-[var(--text-main)] opacity-10 leading-none group-hover:opacity-20 transition-opacity font-display">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="w-12 h-12 rounded-full bg-[var(--btn-bg)] border border-[var(--panel-border)] flex items-center justify-center text-[var(--text-main)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all cursor-pointer z-10">
        <ArrowUpRight size={20} />
      </div>
    </div>

    <h3 className="text-2xl font-medium text-[var(--text-main)] mb-4 tracking-tight z-10 font-display">{proj.title}</h3>
    <p className="text-[var(--text-muted)] text-[15px] leading-relaxed mb-8 flex-grow z-10 max-w-lg">
      {proj.desc}
    </p>

    <div className="flex flex-wrap gap-2 mt-auto z-10">
      {proj.tags.map((t: string) => (
        <span key={t} className="px-3 py-1 text-[12px] font-mono tracking-wider text-[var(--accent)] border border-[var(--panel-border)] bg-[var(--btn-bg)] rounded-md">
          {t}
        </span>
      ))}
    </div>
  </motion.a>
);

export const Projects = () => {
  return (
    <section id="portfolio" className="relative py-32 px-6 md:px-12 lg:px-20 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section 1: Software Projects */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-heading text-center mb-16"
        >
          GitHub & Software Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {SOFTWARE_PROJECTS.map((proj, i) => (
            <ProjectCard key={proj.id} proj={proj} index={i} />
          ))}
        </div>

        {/* Section 2: Hardware Projects */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-heading text-center mb-16"
        >
          Academic & Hardware Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HARDWARE_PROJECTS.map((proj, i) => (
            <ProjectCard key={proj.id} proj={proj} index={i} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 flex justify-center"
        >
           <a href="https://github.com/hemanthnanu-tech" target="_blank" rel="noopener noreferrer" className="btn-hero-outline">View All Projects</a>
        </motion.div>
      </div>
    </section>
  );
};
