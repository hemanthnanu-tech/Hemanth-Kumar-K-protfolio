import React, { useEffect, useRef, useState } from 'react';

const NAME_PARTS = ['HEMANTH', 'KUMAR K'];
const ALL_LETTERS = 'HEMANTH KUMAR K'.split('');

interface IntroLoaderProps { onComplete: () => void; }

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [shown, setShown] = useState<boolean[]>(new Array(ALL_LETTERS.length).fill(false));
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [barVisible, setBarVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animId: number;
    let w = (canvas.width = window.innerWidth), h = (canvas.height = window.innerHeight);
    const resize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener('resize', resize);

    const pts = Array.from({ length: 45 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      hue: Math.random() > 0.5 ? 189 : 270,
    }));
    let t = 0;
    const loop = () => {
      ctx.fillStyle = '#050510'; ctx.fillRect(0, 0, w, h);
      t += 0.006;
      const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w * 0.5);
      g.addColorStop(0, 'rgba(0,212,255,0.07)'); g.addColorStop(0.5, 'rgba(139,92,246,0.04)'); g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
      for (const p of pts) {
        p.vx += Math.sin(t + p.y * 0.01) * 0.003; p.vy += Math.cos(t + p.x * 0.01) * 0.003;
        p.vx *= 0.99; p.vy *= 0.99; p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0; if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        for (const p2 of pts) {
          const dx = p.x - p2.x, dy = p.y - p2.y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130 && d > 0) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(${(p.hue + p2.hue) / 2},100%,60%,${(1 - d / 130) * 0.14})`;
            ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},100%,70%,0.35)`; ctx.fill();
      }
      animId = requestAnimationFrame(loop);
    };
    loop();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    ALL_LETTERS.forEach((_, i) => {
      timers.push(setTimeout(() => setShown(p => { const n = [...p]; n[i] = true; return n; }), 250 + i * 70));
    });
    const total = 250 + ALL_LETTERS.length * 70;
    timers.push(setTimeout(() => setSubtitleVisible(true), total + 100));
    timers.push(setTimeout(() => setBarVisible(true), total + 250));
    timers.push(setTimeout(() => { setFadeOut(true); setTimeout(onComplete, 950); }, 2800));
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  let li = 0;

  return (
    <div className={`intro-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-5 select-none px-8 text-center">
        {/* Accent line above name */}
        <div className="h-[1px] transition-all duration-700" style={{
          background: 'linear-gradient(90deg, transparent, #00d4ff, #8b5cf6, transparent)',
          width: subtitleVisible ? '140px' : '0',
        }} />

        {/* Name */}
        <div className="flex flex-col items-center gap-1">
          {NAME_PARTS.map((word, wi) => (
            <div key={wi} className="flex">
              {word.split('').map((_char) => {
                const idx = li++;
                return (
                  <span key={idx} className="intro-letter" style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(3rem,10vw,8rem)', fontWeight: 300,
                    lineHeight: 0.9, letterSpacing: '-0.02em',
                    color: wi === 1 ? '#00d4ff' : '#e2e8f0',
                    opacity: shown[idx] ? 1 : 0,
                    transform: shown[idx] ? 'translateY(0)' : 'translateY(32px)',
                    marginRight: '0.02em',
                  }}>
                    {_char}
                  </span>
                );
              })}
              {wi === 0 && (() => { li++; return null; })()}
            </div>
          ))}
        </div>

        {/* Subtitle */}
        <p style={{
          fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.1rem',
          background: 'linear-gradient(135deg,#00d4ff,#8b5cf6)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          letterSpacing: '0.05em',
          opacity: subtitleVisible ? 1 : 0, transform: subtitleVisible ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}>
          Electronics &amp; Automation Architect
        </p>

        {/* Progress bar */}
        <div className="w-[180px] h-[1px] overflow-hidden mt-2" style={{
          background: 'rgba(0,212,255,0.1)',
          opacity: barVisible ? 1 : 0, transition: 'opacity 0.4s ease',
        }}>
          <div className="intro-bar" />
        </div>
      </div>

      {/* Corner marks */}
      <div className="absolute top-8 left-8 flex items-center gap-2 opacity-20">
        <div className="w-5 h-5 border border-[#00d4ff] rounded-sm flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-[#00d4ff] rounded-sm" />
        </div>
        <span style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', letterSpacing: '0.35em', color: '#00d4ff', textTransform: 'uppercase' }}>HK</span>
      </div>
      <div className="absolute bottom-8 right-8 opacity-20" style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', letterSpacing: '0.3em', color: '#8b5cf6', textTransform: 'uppercase' }}>
        Bangalore · IN
      </div>
    </div>
  );
};
