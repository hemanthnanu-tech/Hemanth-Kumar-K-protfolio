import React, { useEffect, useRef } from 'react';

export const Interactive3DCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener('resize', onResize);
    const onMouse = (e: MouseEvent) => { mouseRef.current.x = e.clientX; mouseRef.current.y = e.clientY; };
    window.addEventListener('mousemove', onMouse);

    const N = 70;
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.32, vy: (Math.random() - 0.5) * 0.32,
      r: Math.random() * 1.8 + 0.5,
      hue: Math.random() > 0.6 ? 189 : 270, // cyan (189) or purple (270)
      pulse: Math.random() * Math.PI * 2,
    }));

    let t = 0;
    const CONN = 145;

    const draw = () => {
      ctx.fillStyle = '#050510';
      ctx.fillRect(0, 0, w, h);
      t += 0.008;

      const mx = mouseRef.current.x || w / 2;
      const my = mouseRef.current.y || h / 2;

      // Cyan cursor spotlight
      const spot = ctx.createRadialGradient(mx, my, 0, mx, my, 350);
      spot.addColorStop(0, 'rgba(0,212,255,0.07)');
      spot.addColorStop(0.5, 'rgba(139,92,246,0.03)');
      spot.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = spot; ctx.fillRect(0, 0, w, h);

      // Ambient top glow
      const amb = ctx.createRadialGradient(w * 0.3, 0, 0, w * 0.3, 0, w * 0.6);
      amb.addColorStop(0, 'rgba(0,212,255,0.04)');
      amb.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = amb; ctx.fillRect(0, 0, w, h);

      for (const p of pts) {
        p.pulse += 0.011;
        p.vx += Math.sin(t + p.y * 0.007) * 0.004;
        p.vy += Math.cos(t + p.x * 0.007) * 0.004;
        p.vx *= 0.984; p.vy *= 0.984;

        const dx = p.x - mx, dy = p.y - my;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 110 && d > 0) {
          const f = (110 - d) / 110;
          p.vx += (dx / d) * f * 0.38;
          p.vy += (dy / d) * f * 0.38;
        }

        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
      }

      // Connections
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONN) {
            const a = (1 - dist / CONN) * 0.22;
            const blendH = (pts[i].hue + pts[j].hue) / 2;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `hsla(${blendH},100%,60%,${a})`;
            ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      }

      // Nodes
      for (const p of pts) {
        const a = 0.25 + Math.sin(p.pulse) * 0.1;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        g.addColorStop(0, `hsla(${p.hue},100%,65%,${a})`);
        g.addColorStop(1, `hsla(${p.hue},100%,65%,0)`);
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = g; ctx.fill();
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},100%,75%,${a + 0.1})`; ctx.fill();
      }

      // Bottom vignette
      const vign = ctx.createLinearGradient(0, h * 0.5, 0, h);
      vign.addColorStop(0, 'rgba(5,5,16,0)');
      vign.addColorStop(1, 'rgba(5,5,16,0.75)');
      ctx.fillStyle = vign; ctx.fillRect(0, 0, w, h);

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize); window.removeEventListener('mousemove', onMouse); };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none bg-[#050510]">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};
