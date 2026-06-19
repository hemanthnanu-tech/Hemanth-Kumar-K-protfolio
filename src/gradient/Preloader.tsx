import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

const FONTS = [
  "Impact, sans-serif",
  "Georgia, serif",
  "'Courier New', monospace",
  "'Comic Sans MS', cursive",
  "'Trebuchet MS', sans-serif",
  "'Palatino Linotype', serif",
  "'Lucida Console', monospace",
  "Arial, sans-serif",
  "'Garamond', serif",
  "Tahoma, sans-serif",
  "'Courier', monospace",
  "Verdana, sans-serif",
  "'Times New Roman', serif",
  "'Arial Black', sans-serif",
  "'Brush Script MT', cursive",
  "'Great Vibes', cursive" // Final signature font
];

export const Preloader = ({ loading, onComplete }: { loading: boolean, onComplete: () => void }) => {
  const [index, setIndex] = useState(0);
  const onCompleteRef = useRef(onComplete);

  // Keep the ref up to date so we don't need it in dependency arrays
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (!loading) return;

    let timer: number;
    let completeTimer: number;

    if (index < FONTS.length - 1) {
      // 120ms for a rapid, hard-cut typography glitch effect
      timer = window.setTimeout(() => {
        setIndex((prev) => Math.min(prev + 1, FONTS.length - 1));
      }, 120);
    } else {
      completeTimer = window.setTimeout(() => {
        onCompleteRef.current();
      }, 800);
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [index, loading]);

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--bg-color)] pointer-events-none"
      initial={{ y: 0 }}
      animate={{ y: loading ? 0 : "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="relative w-full h-32 flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-4xl md:text-6xl text-[var(--text-main)] tracking-tight whitespace-nowrap"
          style={{ fontFamily: FONTS[index] }}
        >
          Hemanth Kumar K
        </motion.div>
      </div>
    </motion.div>
  );
};
