import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

interface Point {
  x: number;
  y: number;
  age: number;
}

export const MouseTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme, trailEnabled } = useTheme();
  
  useEffect(() => {
    if (!trailEnabled) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let points: Point[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      points.push({ x: e.clientX, y: e.clientY, age: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const isLight = theme === 'light';
      // Black for light mode, soft purplish-white for dark mode
      const rgb = isLight ? '0, 0, 0' : '200, 190, 220'; 

      // 40 frames is approx 0.6 seconds at 60fps (just a tail, no scribble)
      const maxAge = 40;
      
      for (let i = 0; i < points.length; i++) {
        points[i].age += 1;
      }
      points = points.filter(p => p.age < maxAge);

      if (points.length > 1) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        
        for (let i = 1; i < points.length - 1; i++) {
          const xc = (points[i].x + points[i + 1].x) / 2;
          const yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }
        
        for (let i = 1; i < points.length; i++) {
          const p1 = points[i - 1];
          const p2 = points[i];
          const opacity = Math.max(0, 1 - (p2.age / maxAge));
          
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(${rgb}, ${opacity * (isLight ? 0.9 : 0.6)})`;
          // 3mm bold black thick tail in light mode
          ctx.lineWidth = (isLight ? 8 : 3) * opacity;
          ctx.lineCap = 'round';
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, trailEnabled]);

  if (!trailEnabled) return null;

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
};
