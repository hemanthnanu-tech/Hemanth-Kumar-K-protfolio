import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Animate counter 0 → 100 over ~2.8s with easing
    let frame = 0;
    const total = 120;
    const raf = setInterval(() => {
      frame++;
      const ease = 1 - Math.pow(1 - frame / total, 3);
      setCount(Math.min(100, Math.round(ease * 100)));
      if (frame >= total) {
        clearInterval(raf);
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 800);
        }, 300);
      }
    }, 1000 / 45);
    return () => clearInterval(raf);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.06 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: '#0B0B0F' }}
        >
          {/* Neon grid */}
          <div className="preloader-grid" />
          {/* Scanline */}
          <div className="preloader-scanline" />

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center gap-8 select-none">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'backOut' }}
              className="relative"
            >
              <div
                className="w-16 h-16 border-2 flex items-center justify-center"
                style={{ borderColor: '#00F2FE', transform: 'rotate(45deg)', boxShadow: '0 0 30px rgba(0,242,254,0.5), inset 0 0 30px rgba(0,242,254,0.1)' }}
              >
                <span
                  className="font-display font-bold text-xl"
                  style={{ transform: 'rotate(-45deg)', color: '#00F2FE', fontFamily: 'Syne, sans-serif' }}
                >
                  HK
                </span>
              </div>
              {/* Pulsing rings */}
              {[1, 2].map(i => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-none border"
                  style={{ borderColor: 'rgba(0,242,254,0.3)', transform: `rotate(45deg) scale(${1 + i * 0.3})` }}
                  animate={{ opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
                />
              ))}
            </motion.div>

            {/* Counter */}
            <div className="text-center">
              <motion.div
                className="font-mono"
                style={{ fontFamily: 'JetBrains Mono', fontSize: '4rem', fontWeight: 300, color: '#00F2FE', lineHeight: 1, letterSpacing: '-0.05em' }}
              >
                {String(count).padStart(3, '0')}
                <span style={{ fontSize: '1.5rem', color: 'rgba(0,242,254,0.5)' }}>%</span>
              </motion.div>
              <p style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', letterSpacing: '0.4em', color: 'rgba(0,242,254,0.5)', textTransform: 'uppercase', marginTop: '8px' }}>
                Initialising systems
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-48 h-[1px] relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
              <motion.div
                className="absolute left-0 top-0 h-full"
                style={{ background: 'linear-gradient(90deg, #00F2FE, #9B51E0)' }}
                animate={{ width: `${count}%` }}
                transition={{ ease: 'linear', duration: 0 }}
              />
              {/* Moving glow */}
              <motion.div
                className="absolute top-0 h-full w-8"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,242,254,0.8), transparent)' }}
                animate={{ left: ['0%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* Corner decorations */}
            {[
              { top: '-60px', left: '-80px' },
              { top: '-60px', right: '-80px' },
              { bottom: '-60px', left: '-80px' },
              { bottom: '-60px', right: '-80px' },
            ].map((pos, i) => (
              <div
                key={i}
                className="absolute w-6 h-6"
                style={{
                  ...pos,
                  borderTop: i < 2 ? '2px solid rgba(0,242,254,0.4)' : 'none',
                  borderBottom: i >= 2 ? '2px solid rgba(0,242,254,0.4)' : 'none',
                  borderLeft: (i % 2 === 0) ? '2px solid rgba(0,242,254,0.4)' : 'none',
                  borderRight: (i % 2 === 1) ? '2px solid rgba(0,242,254,0.4)' : 'none',
                }}
              />
            ))}
          </div>

          {/* Bottom signature */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center" style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(232,232,240,0.2)', textTransform: 'uppercase' }}>
            Hemanth Kumar K · Bangalore, India
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
