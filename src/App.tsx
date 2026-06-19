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

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col font-sans transition-colors duration-500">
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
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      {/* Hide the scrollbar and prevent interaction while loading */}
      <div className={loading ? "fixed inset-0 overflow-hidden" : ""}>
        <AppContent />
      </div>
    </ThemeProvider>
  );
}
