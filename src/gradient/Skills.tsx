import React from 'react';
import { motion } from 'motion/react';
import { Layers, Cpu, Code2, Factory, Zap } from 'lucide-react';

// Using Devicons for colorful logos where available
const getLogo = (name: string) => {
  const map: Record<string, string> = {
    'C': 'c/c-original.svg',
    'C++': 'cplusplus/cplusplus-original.svg',
    'Python': 'python/python-original.svg',
    'JavaScript': 'javascript/javascript-original.svg',
    'TypeScript': 'typescript/typescript-original.svg',
    'React': 'react/react-original.svg',
    'Tailwind CSS': 'tailwindcss/tailwindcss-original.svg',
    'HTML5': 'html5/html5-original.svg',
    'Android Studio': 'androidstudio/androidstudio-original.svg',
    'Git': 'git/git-original.svg',
    'VS Code': 'vscode/vscode-original.svg',
    'Arduino': 'arduino/arduino-original.svg'
  };
  
  if (map[name]) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${map[name]}`;
  }
  return null;
};

const SKILLS = [
  { cat: 'Core Competencies', icon: <Layers size={24} />, items: ['System Architecture', 'Rapid Prototyping', 'UI/UX Conceptualization', 'Technical Ideation', 'AI-Assisted Workflows'] },
  { cat: 'Hardware & Embedded', icon: <Cpu size={24} />, items: ['PCB Design', 'Arduino', 'IoT Data Acquisition', 'Sensor Integration', 'Circuit Assembly'] },
  { cat: 'Programming', icon: <Code2 size={24} />, items: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'Verilog'] },
  { cat: 'Industrial Automation', icon: <Factory size={24} />, items: ['PLC Programming', 'SCADA Systems', 'HMI Interfaces', 'TIA Portal', 'Ladder Logic'] },
  { cat: 'Software & Tools', icon: <Zap size={24} />, items: ['React', 'Tailwind CSS', 'HTML5', 'Android Studio', 'Git', 'VS Code'] },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative py-32 px-6 md:px-12 lg:px-20 z-10">
      <div className="glow-bg-section" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-heading text-center mb-16"
        >
          Technical Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((s, idx) => (
            <motion.div 
              key={s.cat}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`glass-panel flex flex-col h-full ${idx === 0 || idx === 3 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[var(--btn-bg)] border border-[var(--panel-border)] flex items-center justify-center text-[var(--accent)]">
                  {s.icon}
                </div>
                <h3 className="text-xl font-medium text-[var(--text-main)]">
                  {s.cat}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                {s.items.map((item) => {
                  const logoUrl = getLogo(item);
                  return (
                    <div 
                      key={item} 
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[13px] bg-[var(--btn-bg)] border border-[var(--panel-border)] text-[var(--text-main)] hover:border-[var(--accent)] hover:shadow-[0_0_15px_var(--accent)] transition-all cursor-default"
                    >
                      {logoUrl ? (
                        <img src={logoUrl} alt={`${item} logo`} className="w-4 h-4 object-contain" />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                      )}
                      {item}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
