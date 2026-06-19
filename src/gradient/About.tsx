import React from 'react';
import { MapPin, Mail, Phone, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

const EDUCATION = [
  { id: 'e1', inst: 'JSS Academy of Technical Education', degree: 'B.E. — Electronics & Communication', period: '2023–2026', loc: 'Bangalore' },
  { id: 'e2', inst: 'PVP Polytechnic, Dr. AIT Campus', degree: 'Diploma — Electronics & Communication', period: '2020-2023', loc: 'Bengaluru' },
  { id: 'e3', inst: 'Stella Marys High School', degree: 'SSLC', period: '2020', loc: 'Bangalore' },
];

export const About = () => {
  return (
    <section id="about" className="relative py-32 px-6 md:px-12 lg:px-20 z-10">
      <div className="max-w-6xl mx-auto">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
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
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-panel"
          >
            <h3 className="text-2xl font-medium mb-6 text-[var(--text-main)] tracking-tight">The Bridge Between Silicon & Software</h3>
            <p className="text-[var(--text-muted)] leading-relaxed mb-8">
              Innovative Electronics and Communication Engineering student bridging hands-on hardware expertise with modern software development. Strong foundation in system architecture, technical ideation, and UI/UX conceptualization. 
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed mb-10">
              Adept at leveraging AI-assisted workflows to rapidly prototype and deploy complex applications, ensuring seamless integration between physical sensors and cloud logic.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="btn-nav px-4 py-2 text-[13px] text-[var(--text-muted)] hover:text-[var(--text-main)] cursor-default">
                <MapPin size={14} /> Bangalore, India
              </div>
              <a href="mailto:hemanth2678nanu@gmail.com" className="btn-nav px-4 py-2 text-[13px] text-[var(--text-muted)] hover:text-[var(--text-main)]">
                <Mail size={14} /> Email Me
              </a>
              <a href="tel:+919538520031" className="btn-nav px-4 py-2 text-[13px] text-[var(--text-muted)] hover:text-[var(--text-main)]">
                <Phone size={14} /> +91 95385 20031
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel"
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-[var(--accent)]" size={24} />
              <h3 className="text-2xl font-medium text-[var(--text-main)] tracking-tight">Education & Certifications</h3>
            </div>
            
            <div className="space-y-6 relative z-10">
              <div className="relative pl-6 border-l border-[var(--panel-border)]">
                <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-[var(--accent)]" />
                <div className="text-[12px] text-[var(--text-muted)] font-mono tracking-wider mb-1 uppercase">2023–2026 • Bangalore</div>
                <h4 className="text-[16px] font-medium text-[var(--text-main)] mb-0.5">JSS Academy of Technical Education</h4>
                <p className="text-[13px] text-[var(--text-muted)]">Bachelor of Engineering (B.E.) in Electronics and Communication</p>
              </div>

              <div className="relative pl-6 border-l border-[var(--panel-border)]">
                <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-[var(--accent)]" />
                <div className="text-[12px] text-[var(--text-muted)] font-mono tracking-wider mb-1 uppercase">2023 • Bengaluru</div>
                <h4 className="text-[16px] font-medium text-[var(--text-main)] mb-0.5">PVP Polytechnic, Dr. AIT Campus</h4>
                <p className="text-[13px] text-[var(--text-muted)]">Diploma in Electronics and Communication Engineering</p>
              </div>

              <div className="relative pl-6 border-l border-[var(--panel-border)]">
                <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-[var(--accent)]" />
                <div className="text-[12px] text-[var(--text-muted)] font-mono tracking-wider mb-1 uppercase">2020 • Bangalore</div>
                <h4 className="text-[16px] font-medium text-[var(--text-main)] mb-0.5">Vikas Central School</h4>
                <p className="text-[13px] text-[var(--text-muted)]">Secondary School Leaving Certificate (SSLC)</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
