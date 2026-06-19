import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const FONTS = [
  "Arial, sans-serif",
  "Georgia, serif",
  "'Courier New', monospace",
  "Impact, sans-serif",
  "'Times New Roman', serif",
  "'Trebuchet MS', sans-serif",
  "'Palatino Linotype', serif",
  "'Lucida Console', monospace",
  "'Garamond', serif",
  "'Courier', monospace",
  "'Outfit', sans-serif" // Final premium font
];

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer: number;
    let completeTimer: number;

    if (index < FONTS.length - 1) {
      // 180ms per font gives a perfectly smooth crossfade sequence
      timer = window.setTimeout(() => {
        setIndex((prev) => Math.min(prev + 1, FONTS.length - 1));
      }, 180);
    } else {
      completeTimer = window.setTimeout(() => {
        onComplete();
      }, 1000); // Hold the final font for 1s before revealing site
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [index, onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--bg-color)]"
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="relative w-full h-32 flex items-center justify-center">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="absolute text-4xl md:text-6xl text-[var(--text-main)] tracking-tight whitespace-nowrap"
            style={{ fontFamily: FONTS[index] }}
          >
            Hemanth Kumar K
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
