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
import { AnimatePresence } from 'motion/react';

const AppContent = () => {
  const [loading, setLoading] = useState(true);
  const [preloaderMounted, setPreloaderMounted] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handlePreloaderComplete = () => {
    setLoading(false);
    setTimeout(() => {
      setPreloaderMounted(false);
    }, 1000); // Unmount strictly after animation
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col transition-colors duration-500">
      <AnimatePresence>
        {loading && <Preloader key="preloader" onComplete={handlePreloaderComplete} />}
      </AnimatePresence>

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
