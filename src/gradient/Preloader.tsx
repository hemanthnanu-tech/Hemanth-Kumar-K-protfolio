import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const FONTS = [
  "'Inter', sans-serif",
  "'Playfair Display', serif",
  "font-mono",
  "'Space Grotesk', sans-serif",
  "Georgia, serif",
  "'Syne', sans-serif",
  "Impact, sans-serif",
  "'Cormorant', serif",
  "'Courier New', monospace",
  "'Bebas Neue', sans-serif",
  "'Times New Roman', serif",
  "'Abril Fatface', cursive",
  "'Trebuchet MS', sans-serif",
  "font-serif",
  "'Palatino Linotype', serif",
  "'Lucida Sans Unicode', sans-serif",
  "'Garamond', serif",
  "Arial, sans-serif",
  "'Outfit', sans-serif",
  "'Outfit', sans-serif", // Hold on final premium font
];

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < FONTS.length - 1) {
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, 100); // 100ms rapid rapid change
      return () => clearTimeout(timer);
    } else {
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 800); // Hold the final font for 0.8s
      return () => clearTimeout(completeTimer);
    }
  }, [index, onComplete]);

  const currentFont = FONTS[index];
  const isTailwind = currentFont.startsWith('font-');

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg-color)]"
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div 
        className={`text-4xl md:text-6xl text-[var(--text-main)] tracking-tight ${isTailwind ? currentFont : ''}`}
        style={!isTailwind ? { fontFamily: currentFont } : {}}
      >
        Hemanth Kumar K
      </div>
    </motion.div>
  );
};
