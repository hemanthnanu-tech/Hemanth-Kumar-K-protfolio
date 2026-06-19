import React from 'react';
import { ArrowRight, Sun, Moon, PenLine, PenOff } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from './ThemeProvider';

export const Nav = () => {
  const { theme, toggleTheme, trailEnabled, toggleTrail } = useTheme();

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-20 flex items-center justify-between px-6 md:px-12 lg:px-20 py-8"
    >
      <div className="text-2xl font-semibold tracking-tight text-[var(--text-main)] flex items-center">
        Hemanth<sup className="text-sm font-normal ml-0.5">®</sup>
      </div>
      
      <div className="hidden md:flex items-center gap-10 text-[13px] font-medium text-[var(--text-muted)]">
        <a href="#portfolio" className="nav-link">Portfolio</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#experience" className="nav-link">Experience</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
      
      <div className="flex items-center gap-4">
        <button onClick={toggleTrail} className="btn-nav p-2! rounded-full w-10 h-10 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-main)]" title="Toggle Mouse Trail">
          {trailEnabled ? <PenLine size={16} /> : <PenOff size={16} />}
        </button>
        <button onClick={toggleTheme} className="btn-nav p-2! rounded-full w-10 h-10 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-main)]" title="Toggle Light/Dark Mode">
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <a href="#contact" className="btn-nav hidden sm:inline-flex">
          Hire Me <ArrowRight size={14} />
        </a>
      </div>
    </motion.nav>
  );
};
