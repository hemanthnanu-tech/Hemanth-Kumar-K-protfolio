import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

// To add your real certificates:
// 1. Create a folder named "certificates" inside your "public" folder.
// 2. Put your PDFs or JPEGs inside "public/certificates/".
// 3. Update the 'link' property below to match your exact file name.
const CERTIFICATIONS = [
  { title: 'Industrial Automation (PLC, SCADA, IoT, Mechatronics)', issuer: 'Government Tool Room and Training Centre (GTTC)', period: 'Feb 2026 – May 2026', link: 'https://drive.google.com/file/d/1Q5TDuBkT7LNS2r0ASyzBillgVxxVnRzA/view?usp=sharing' },
  { title: 'PCB Assembly and Testing', issuer: 'Semi-Pro Technology', period: 'Mar 2023 – Jun 2023', link: '#' },
  { title: 'Introduction to Robotic Process Automation (RPA)', issuer: 'Infosys Springboard', period: 'Jan 2023', link: 'https://drive.google.com/file/d/1BOrWhMl6tEQeqvrnxrrqdPlFWyEUdA4c/view?usp=sharing' },
  { title: 'Appium - Mobile Automation Overview', issuer: 'Infosys Springboard', period: 'Jan 2023', link: 'https://drive.google.com/file/d/1qMe0LbWhJMiCz8vCkQcvdXTG-hqUPzR4/view?usp=sharing' },
  { title: 'PCB Designing and Fabrication', issuer: 'Indian Tech Keys', period: 'Jul 2022', link: '#' },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="relative py-32 px-6 md:px-12 lg:px-20 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-heading text-center mb-16"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.a 
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel group flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--btn-bg)] border border-[var(--panel-border)] flex items-center justify-center text-[var(--accent)] group-hover:scale-110 transition-transform">
                    <Award size={18} />
                  </div>
                  <ExternalLink size={16} className="text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-medium text-[var(--text-main)] leading-snug mb-3">
                  {cert.title}
                </h3>
                <p className="text-[14px] text-[var(--text-muted)]">
                  {cert.issuer}
                </p>
              </div>
              <div className="mt-8 text-[12px] font-mono tracking-wider text-[var(--text-muted)] uppercase border-t border-[var(--panel-border)] pt-4">
                {cert.period}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
