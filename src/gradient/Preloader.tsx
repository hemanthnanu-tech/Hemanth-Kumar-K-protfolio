import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const FONTS = [
  "'Inter', sans-serif",
  "font-serif",
  "'Space Grotesk', sans-serif",
  "font-mono",
  "'Playfair Display', serif",
  "'Syne', sans-serif",
  "'Cormorant', serif",
  "'Bebas Neue', sans-serif",
  "'Garamond', serif",
  "'Times New Roman', serif",
  "'Outfit', sans-serif" // Final premium font
];

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer: number;
    let completeTimer: number;

    if (index < FONTS.length - 1) {
      // 300ms gives enough time for a smooth crossfade without being too slow
      timer = window.setTimeout(() => {
        setIndex((prev) => Math.min(prev + 1, FONTS.length - 1));
      }, 300);
    } else {
      completeTimer = window.setTimeout(() => {
        onComplete();
      }, 1200); // Hold the final font for 1.2s before revealing site
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [index, onComplete]);

  const currentFont = FONTS[index] || "'Outfit', sans-serif";
  const isTailwind = typeof currentFont === 'string' && currentFont.startsWith('font-');

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--bg-color)]"
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="relative w-full h-32 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFont}
            initial={{ opacity: 0, filter: "blur(8px)", scale: 0.95 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            exit={{ opacity: 0, filter: "blur(4px)", scale: 1.05 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`absolute text-3xl md:text-5xl lg:text-6xl text-[var(--text-main)] tracking-tight whitespace-nowrap ${isTailwind ? currentFont : ''}`}
            style={!isTailwind ? { fontFamily: currentFont } : {}}
          >
            Hemanth Kumar K
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
