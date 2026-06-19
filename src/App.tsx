import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './gradient/ThemeProvider';
import { MouseTrail } from './gradient/MouseTrail';
import { Nav } from './gradient/Nav';
import { Hero } from './gradient/Hero';
import { About } from './gradient/About';
import { Skills } from './gradient/Skills';
import { Experience } from './gradient/Experience';
import { Projects } from './gradient/Projects';
import { Certifications } from './gradient/Certifications';
import { Contact } from './gradient/Contact';
import { Footer } from './gradient/Footer';
import { Preloader } from './gradient/Preloader';

const AppContent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.closest && target.closest('a, button, .glass-panel, .group, .cursor-pointer')) {
        document.documentElement.classList.add('glow-away');
      } else {
        document.documentElement.classList.remove('glow-away');
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col transition-colors duration-500">
      <Preloader loading={loading} onComplete={() => setLoading(false)} />

      <div className={loading ? "opacity-0 h-screen overflow-hidden" : "opacity-100 transition-opacity duration-1000"}>
        <MouseTrail />
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
