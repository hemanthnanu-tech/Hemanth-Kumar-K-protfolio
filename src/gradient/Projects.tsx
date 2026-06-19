import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

const PROJECTS = [
  {
    id: 'p1', title: 'Offline AI Assistant',
    desc: 'Engineered a completely offline, locally-executed AI assistant emphasizing zero cloud dependency and maximum user data privacy.',
    tags: ['AI/ML', 'Privacy', 'Local Execution'],
    colSpan: 'md:col-span-2 lg:col-span-2',
  },
  {
    id: 'p2', title: 'IoT Weather & Air Quality',
    desc: 'Designed hardware architecture for a cloud-connected microcontroller system dynamically tracking real-time environmental metrics.',
    tags: ['Hardware', 'IoT', 'Sensors'],
    colSpan: 'md:col-span-1 lg:col-span-1',
  },
  {
    id: 'p3', title: 'Gesture Wheelchair',
    desc: 'Developed hardware logic for Arduino-based prototypes, including IR-sensor traffic optimizers and embedded wheelchair navigation.',
    tags: ['Arduino', 'Embedded', 'IR Sensors'],
    colSpan: 'md:col-span-1 lg:col-span-1',
  },
  {
    id: 'p4', title: 'Jan-Aushadhi App',
    desc: 'Architected and rapidly prototyped a mobile application mapping generic medicine alternatives with real-time price comparisons.',
    tags: ['Android', 'Prototyping'],
    colSpan: 'md:col-span-2 lg:col-span-2',
  },
  {
    id: 'p5', title: 'EV-Grama Vision',
    desc: 'Designed the system architecture for a community-driven EV charging locator featuring map-based discovery and AI surge pricing.',
    tags: ['System Architecture', 'AI Pricing'],
    colSpan: 'md:col-span-2 lg:col-span-1',
  },
  {
    id: 'p6', title: 'FinTrack Elite',
    desc: 'Conceptualized a responsive financial dashboard utilizing AI-assisted workflows to build dynamic modules for net worth and loans.',
    tags: ['FinTech', 'Dashboard'],
    colSpan: 'md:col-span-2 lg:col-span-2',
  },
  {
    id: 'p7', title: '1FS Studio Storefront',
    desc: 'Developed a premium, responsive digital storefront bridging top-tier camera rentals with fluid UI animations.',
    tags: ['React', 'UI Animations'],
    colSpan: 'md:col-span-1 lg:col-span-1',
  },
  {
    id: 'p8', title: 'HemiToolkit Utilities',
    desc: 'Architected a suite of client-side utility tools featuring a strict zero-server-upload architecture for absolute data security.',
    tags: ['Zero-Server', 'Data Security'],
    colSpan: 'md:col-span-2 lg:col-span-2',
  },
];

export const Projects = () => {
  return (
    <section id="portfolio" className="relative py-32 px-6 md:px-12 lg:px-20 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-heading text-center mb-20"
        >
          Selected Work
        </motion.h2>

        {/* Dynamic Masonry-ish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((proj, i) => (
            <motion.div 
              key={proj.id} 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group glass-panel flex flex-col h-full relative overflow-hidden ${proj.colSpan}`}
            >
              
              <div className="flex justify-between items-start mb-10">
                <div className="text-[50px] font-light text-[var(--text-main)] opacity-10 leading-none group-hover:opacity-20 transition-opacity">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="w-12 h-12 rounded-full bg-[var(--btn-bg)] border border-[var(--panel-border)] flex items-center justify-center text-[var(--text-main)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all cursor-pointer z-10">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <h3 className="text-2xl font-medium text-[var(--text-main)] mb-4 tracking-tight z-10">{proj.title}</h3>
              <p className="text-[var(--text-muted)] text-[15px] leading-relaxed mb-8 flex-grow z-10 max-w-lg">
                {proj.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto z-10">
                {proj.tags.map(t => (
                  <span key={t} className="px-3 py-1 text-[12px] font-mono tracking-wider text-[var(--accent)] border border-[var(--panel-border)] bg-[var(--btn-bg)] rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
           <a href="#" className="btn-hero-outline">View All Projects</a>
        </motion.div>
      </div>
    </section>
  );
};
