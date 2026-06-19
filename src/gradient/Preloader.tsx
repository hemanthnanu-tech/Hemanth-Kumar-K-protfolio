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
  "'Outfit', sans-serif",
];

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer: number;
    let completeTimer: number;

    if (index < FONTS.length - 1) {
      timer = window.setTimeout(() => {
        setIndex((prev) => Math.min(prev + 1, FONTS.length - 1));
      }, 100);
    } else {
      completeTimer = window.setTimeout(() => {
        onComplete();
      }, 800);
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
      exit={{ y: "-100%", transition: { duration: 0.8, ease: "easeInOut" } }}
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
