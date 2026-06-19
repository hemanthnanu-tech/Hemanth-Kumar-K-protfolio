import React from 'react';
import { motion } from 'motion/react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const Hero = () => {
  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center pt-10 z-10">
      
      <div className="bg-gradient-container">
        <div className="glow-main" />
      </div>
      
      <motion.div 
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        
        {/* Top Badge */}
        <motion.div variants={fadeIn} className="flex justify-center mb-8">
          <div className="badge-hero">
            <div className="w-6 h-6 rounded-full overflow-hidden border border-[var(--panel-border)] mr-2 flex items-center justify-center bg-[var(--panel-bg)] text-[12px]">
              🚀
            </div>
            Hemanth Kumar K
          </div>
        </motion.div>
        
        {/* Main Title */}
        <motion.h1 variants={fadeIn} className="font-display text-[clamp(2.5rem,7vw,6.5rem)] leading-[1.0] font-semibold tracking-[-0.03em] mb-6 text-[var(--text-main)] drop-shadow-sm">
          Architecting<br />
          Next-Generation<br />
          Embedded Solutions
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p variants={fadeIn} className="text-[var(--text-muted)] text-[15px] md:text-[17px] max-w-[680px] leading-[1.8] mb-12">
          Combining an engineering mindset with a product-focused approach. Strong foundation in system architecture, rapid prototyping, and UI/UX conceptualization.
        </motion.p>
        
        {/* Buttons */}
        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a href="#portfolio" className="btn-hero text-[14px]">
            View Portfolio
          </a>
          <a href="#project" className="btn-hero-outline text-[14px]">
            Start A Project
          </a>
        </motion.div>
        
      </motion.div>
    </div>
  );
};
