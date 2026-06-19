import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about" className="relative py-32 px-6 md:px-12 lg:px-20 z-10">
      <div className="max-w-4xl mx-auto">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-heading text-center mb-20"
        >
          About Me
        </motion.h2>
        
        {/* Bio Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-panel"
        >
          <h3 className="text-2xl font-medium mb-6 text-[var(--text-main)] tracking-tight">The Bridge Between Silicon & Software</h3>
          <p className="text-[var(--text-muted)] text-[16px] leading-[1.8] mb-8">
            Innovative Electronics and Communication Engineering student bridging hands-on hardware expertise with modern software development. Strong foundation in system architecture, technical ideation, and UI/UX conceptualization. 
          </p>
          <p className="text-[var(--text-muted)] text-[16px] leading-[1.8] mb-10">
            Adept at leveraging AI-assisted workflows to rapidly prototype and deploy complex applications, ensuring seamless integration between physical sensors and cloud logic.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <div className="btn-nav px-5 py-3 text-[14px] text-[var(--text-muted)] hover:text-[var(--text-main)] cursor-default">
              <MapPin size={16} /> Bangalore, India
            </div>
            <a href="mailto:hemanth2678nanu@gmail.com" className="btn-nav px-5 py-3 text-[14px] text-[var(--text-muted)] hover:text-[var(--text-main)]">
              <Mail size={16} /> Email Me
            </a>
            <a href="tel:+919538520031" className="btn-nav px-5 py-3 text-[14px] text-[var(--text-muted)] hover:text-[var(--text-main)]">
              <Phone size={16} /> +91 95385 20031
            </a>
          </div>
        </motion.div>
          
      </div>
    </section>
  );
};
