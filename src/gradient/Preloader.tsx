import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show preloader for 2.2 seconds before starting the exit animation
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--bg-color)]"
        >
          <div className="flex flex-col items-center">
            {/* Signature Font Animation */}
            <motion.h1 
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="font-signature text-[clamp(3.5rem,10vw,6rem)] text-[var(--text-main)] tracking-wide mb-2"
              style={{ textShadow: '0 0 30px var(--accent)' }}
            >
              Hemanth Kumar K
            </motion.h1>
            
            {/* Elegant Line expanding */}
            <motion.div 
              initial={{ width: '0%', opacity: 0 }}
              animate={{ width: '100%', opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: 'circOut' }}
              className="h-[2px] w-full max-w-[300px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
