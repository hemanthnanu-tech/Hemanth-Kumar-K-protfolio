import React from 'react';
import { MapPin, Mail, Phone, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about" className="relative py-32 px-6 md:px-12 lg:px-20 z-10">
      <div className="max-w-6xl mx-auto">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-heading text-center mb-20"
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
          
          {/* Education Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel"
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-[var(--accent)]" size={24} />
              <h3 className="section-heading !text-2xl !mb-0 tracking-tight">Education</h3>
            </div>
            
            <div className="space-y-6 relative z-10">
              <div className="relative pl-6 border-l border-[var(--panel-border)] block group">
                <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-[var(--accent)]" />
                <div className="text-[12px] text-[var(--text-muted)] font-mono tracking-wider mb-1 uppercase">2023–2026 • Bangalore</div>
                <h4 className="text-[16px] font-medium text-[var(--text-main)] mb-0.5">JSS Academy of Technical Education</h4>
                <p className="text-[13px] text-[var(--text-muted)]">Bachelor of Engineering (B.E.) in Electronics and Communication</p>
              </div>

              <a href="https://drive.google.com/file/d/1VIYSpFv9SPHlXp0I8akWh-GJlpo3X7GW/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="relative pl-6 border-l border-[var(--panel-border)] block group cursor-pointer">
                <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-[var(--accent)] group-hover:scale-150 transition-transform" />
                <div className="text-[12px] text-[var(--text-muted)] font-mono tracking-wider mb-1 uppercase">2023 • Bengaluru</div>
                <h4 className="text-[16px] font-medium text-[var(--text-main)] mb-0.5 group-hover:text-[var(--accent)] transition-colors">PVP Polytechnic, Dr. AIT Campus</h4>
                <p className="text-[13px] text-[var(--text-muted)]">Diploma in Electronics and Communication Engineering</p>
              </a>

              <a href="https://drive.google.com/file/d/1LRT9r32hIIDarA_PAnANrA9mjY3UPsbH/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="relative pl-6 border-l border-[var(--panel-border)] block group cursor-pointer">
                <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-[var(--accent)] group-hover:scale-150 transition-transform" />
                <div className="text-[12px] text-[var(--text-muted)] font-mono tracking-wider mb-1 uppercase">2020 • Bangalore</div>
                <h4 className="text-[16px] font-medium text-[var(--text-main)] mb-0.5 group-hover:text-[var(--accent)] transition-colors">Vikas Central School</h4>
                <p className="text-[13px] text-[var(--text-muted)]">Secondary School Leaving Certificate (SSLC)</p>
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
