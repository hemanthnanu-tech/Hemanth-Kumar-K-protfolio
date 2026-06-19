import React, { useEffect, useRef } from 'react';

export const HeroOrb: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const SZ = 520;
    canvas.width = SZ; canvas.height = SZ;
    const CX = SZ / 2, CY = SZ / 2, R = 195;
    const LATS = [-80, -65, -48, -30, -15, 0, 15, 30, 48, 65, 80];
    const LON_COUNT = 14, SEGS = 90;
    let animId: number, t = 0;

    const proj = (x: number, y: number, z: number, rx: number, ry: number) => {
      const x1 = x * Math.cos(ry) - z * Math.sin(ry);
      const z1 = x * Math.sin(ry) + z * Math.cos(ry);
      const y2 = y * Math.cos(rx) - z1 * Math.sin(rx);
      const z2 = y * Math.sin(rx) + z1 * Math.cos(rx);
      const f = 750, sc = f / (f + z2 + 300);
      return { sx: x1 * sc, sy: y2 * sc, depth: z2 };
    };

    const draw = () => {
      ctx.clearRect(0, 0, SZ, SZ);
      t += 0.005;

      const rotY = t + mouseRef.current.x * 0.35;
      const rotX = 0.32 + mouseRef.current.y * 0.22;

      // Outer ambient glow — cyan + purple
      const ambG = ctx.createRadialGradient(CX, CY, 0, CX, CY, R * 1.4);
      ambG.addColorStop(0, 'rgba(0,212,255,0.12)');
      ambG.addColorStop(0.5, 'rgba(139,92,246,0.06)');
      ambG.addColorStop(1, 'rgba(5,5,16,0)');
      ctx.fillStyle = ambG; ctx.fillRect(0, 0, SZ, SZ);

      // Latitude rings (cyan)
      for (const lat of LATS) {
        const lr = (lat * Math.PI) / 180;
        const ringR = R * Math.cos(lr), ringY = R * Math.sin(lr);
        let avgD = 0;
        for (let k = 0; k < 4; k++) {
          const lon = (k / 4) * Math.PI * 2;
          avgD += proj(ringR * Math.cos(lon), ringY, ringR * Math.sin(lon), rotX, rotY).depth;
        }
        avgD /= 4;
        const br = (avgD / R + 1) / 2;
        const a = 0.05 + br * 0.3;

        ctx.beginPath();
        for (let s = 0; s <= SEGS; s++) {
          const lon = (s / SEGS) * Math.PI * 2;
          const { sx, sy } = proj(ringR * Math.cos(lon), ringY, ringR * Math.sin(lon), rotX, rotY);
          if (s === 0) ctx.moveTo(CX + sx, CY + sy); else ctx.lineTo(CX + sx, CY + sy);
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(0,212,255,${a})`; ctx.lineWidth = 0.9; ctx.stroke();
      }

      // Longitude meridians (purple tint)
      for (let l = 0; l < LON_COUNT; l++) {
        const lonRad = (l / LON_COUNT) * Math.PI * 2;
        ctx.beginPath();
        for (let s = 0; s <= SEGS; s++) {
          const latRad = (s / SEGS) * Math.PI * 2;
          const px = R * Math.cos(latRad) * Math.cos(lonRad);
          const py = R * Math.sin(latRad);
          const pz = R * Math.cos(latRad) * Math.sin(lonRad);
          const { sx, sy } = proj(px, py, pz, rotX, rotY);
          if (s === 0) ctx.moveTo(CX + sx, CY + sy); else ctx.lineTo(CX + sx, CY + sy);
        }
        ctx.strokeStyle = 'rgba(139,92,246,0.15)'; ctx.lineWidth = 0.7; ctx.stroke();
      }

      // Intersection nodes — cyan glow dots
      for (const lat of LATS) {
        for (let l = 0; l < LON_COUNT; l++) {
          const latR = (lat * Math.PI) / 180;
          const lonR = (l / LON_COUNT) * Math.PI * 2;
          const px = R * Math.cos(latR) * Math.cos(lonR);
          const py = R * Math.sin(latR);
          const pz = R * Math.cos(latR) * Math.sin(lonR);
          const { sx, sy, depth } = proj(px, py, pz, rotX, rotY);
          const br = (depth / R + 1) / 2;
          if (br > 0.28) {
            const nr = 1.2 + br * 2.4;
            const ng = ctx.createRadialGradient(CX + sx, CY + sy, 0, CX + sx, CY + sy, nr * 3.5);
            ng.addColorStop(0, `rgba(0,212,255,${br * 0.9})`);
            ng.addColorStop(0.5, `rgba(139,92,246,${br * 0.3})`);
            ng.addColorStop(1, 'rgba(0,212,255,0)');
            ctx.beginPath(); ctx.arc(CX + sx, CY + sy, nr * 3.5, 0, Math.PI * 2);
            ctx.fillStyle = ng; ctx.fill();
            ctx.beginPath(); ctx.arc(CX + sx, CY + sy, nr * 0.65, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(180,240,255,${br})`; ctx.fill();
          }
        }
      }

      // Equator ring — brighter cyan
      ctx.beginPath();
      for (let s = 0; s <= SEGS; s++) {
        const lon = (s / SEGS) * Math.PI * 2;
        const { sx, sy } = proj(R * Math.cos(lon), 0, R * Math.sin(lon), rotX, rotY);
        if (s === 0) ctx.moveTo(CX + sx, CY + sy); else ctx.lineTo(CX + sx, CY + sy);
      }
      ctx.closePath(); ctx.strokeStyle = 'rgba(0,212,255,0.4)'; ctx.lineWidth = 1.3; ctx.stroke();

      // Core glow — purple/cyan blend
      const cG = ctx.createRadialGradient(CX, CY, 0, CX, CY, 90);
      cG.addColorStop(0, 'rgba(0,212,255,0.15)');
      cG.addColorStop(0.5, 'rgba(139,92,246,0.08)');
      cG.addColorStop(1, 'rgba(5,5,16,0)');
      ctx.fillStyle = cG; ctx.fillRect(0, 0, SZ, SZ);

      animId = requestAnimationFrame(draw);
    };
    draw();

    const onMouse = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouse);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('mousemove', onMouse); };
  }, []);

  return (
    <canvas ref={canvasRef} style={{ width: '100%', maxWidth: '520px', height: 'auto', display: 'block' }} />
  );
};
