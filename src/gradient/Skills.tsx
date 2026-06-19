import React from 'react';
import { motion } from 'motion/react';
import { Code2 } from 'lucide-react';

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

const ROW_1 = ['C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'Verilog', 'System Architecture', 'Rapid Prototyping'];
const ROW_2 = ['PCB Design', 'Arduino', 'IoT Data Acquisition', 'Sensor Integration', 'Circuit Assembly', 'UI/UX Conceptualization', 'Technical Ideation'];
const ROW_3 = ['PLC Programming', 'SCADA Systems', 'HMI Interfaces', 'TIA Portal', 'Ladder Logic', 'React', 'Tailwind CSS', 'HTML5', 'Android Studio', 'Git', 'VS Code'];

const MarqueeRow = ({ items, reverse = false, speed = 40 }: { items: string[], reverse?: boolean, speed?: number }) => {
  return (
    <div className="flex w-full overflow-hidden relative py-4 group">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--bg-color)] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--bg-color)] to-transparent z-10 pointer-events-none" />
      
      <div 
        className="flex min-w-full shrink-0 items-center justify-around gap-6 px-3"
        style={{
          animation: `marquee-${reverse ? 'right' : 'left'} ${speed}s linear infinite`,
        }}
      >
        {items.map((item, idx) => {
          const logo = getLogo(item);
          return (
            <div key={`${item}-${idx}`} className="flex items-center gap-4 px-6 py-4 glass-panel hover:border-[var(--accent)] hover:shadow-lg transition-all duration-300 rounded-2xl whitespace-nowrap">
              {logo ? (
                <img src={logo} alt={item} className="w-8 h-8 object-contain drop-shadow-sm group-hover:scale-110 transition-transform" />
              ) : (
                <div className="w-8 h-8 flex items-center justify-center text-[var(--accent)] group-hover:scale-110 transition-transform">
                  <Code2 size={24} />
                </div>
              )}
              <span className="font-display font-medium text-lg tracking-tight text-[var(--text-main)]">{item}</span>
            </div>
          );
        })}
      </div>

      {/* Duplicate for seamless looping */}
      <div 
        className="flex min-w-full shrink-0 items-center justify-around gap-6 px-3"
        style={{
          animation: `marquee-${reverse ? 'right' : 'left'} ${speed}s linear infinite`,
        }}
      >
        {items.map((item, idx) => {
          const logo = getLogo(item);
          return (
            <div key={`${item}-${idx}-dup`} className="flex items-center gap-4 px-6 py-4 glass-panel hover:border-[var(--accent)] hover:shadow-lg transition-all duration-300 rounded-2xl whitespace-nowrap">
              {logo ? (
                <img src={logo} alt={item} className="w-8 h-8 object-contain drop-shadow-sm group-hover:scale-110 transition-transform" />
              ) : (
                <div className="w-8 h-8 flex items-center justify-center text-[var(--accent)] group-hover:scale-110 transition-transform">
                  <Code2 size={24} />
                </div>
              )}
              <span className="font-display font-medium text-lg tracking-tight text-[var(--text-main)]">{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="relative py-32 overflow-hidden z-10">
      <div className="glow-bg-section" />

      <style>
        {`
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>

      <div className="max-w-[100vw] mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-heading text-center mb-20 px-6"
        >
          Technical Arsenal
        </motion.h2>

        <div className="flex flex-col gap-6 -rotate-2 scale-105">
          <MarqueeRow items={ROW_1} speed={45} />
          <MarqueeRow items={ROW_2} reverse={true} speed={55} />
          <MarqueeRow items={ROW_3} speed={40} />
        </div>
      </div>
    </section>
  );
};
