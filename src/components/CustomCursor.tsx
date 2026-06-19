import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring } from 'motion/react';
import { mouseState } from '../state/world';

export const CustomCursor: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const dotX = useSpring(0, { stiffness: 3000, damping: 100 });
  const dotY = useSpring(0, { stiffness: 3000, damping: 100 });
  const ringX = useSpring(0, { stiffness: 200, damping: 30 });
  const ringY = useSpring(0, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      mouseState.rawX = e.clientX;
      mouseState.rawY = e.clientY;
      mouseState.x = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouseState.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const onEnter = (e: MouseEvent) => {
      const el = e.target as Element;
      if (el.closest('a, button, [data-cursor="hover"]')) setHovered(true);
    };
    const onLeave = (e: MouseEvent) => {
      const el = e.target as Element;
      if (el.closest('a, button, [data-cursor="hover"]')) setHovered(false);
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
    };
  }, [dotX, dotY, ringX, ringY]);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="cursor-dot"
        style={{ x: dotX, y: dotY }}
      />
      {/* Ring */}
      <motion.div
        className={`cursor-ring ${hovered ? 'hovered' : ''}`}
        style={{ x: ringX, y: ringY }}
      />
    </>
  );
};
