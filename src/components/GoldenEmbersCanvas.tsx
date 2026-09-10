import { useEffect, useRef, useState } from "react";

interface GoldenEmbersCanvasProps {
  mousePos: { x: number; y: number; active: boolean };
}

export function GoldenEmbersCanvas({ mousePos }: GoldenEmbersCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef(mousePos);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    mouseRef.current = mousePos;
  }, [mousePos]);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;

    let w = canvas.parentElement?.clientWidth || (typeof window !== "undefined" ? window.innerWidth : 1200);
    let h = canvas.parentElement?.clientHeight || (typeof window !== "undefined" ? window.innerHeight : 800);

    const onResize = () => {
      if (!canvas) return;
      w = canvas.parentElement?.clientWidth || (typeof window !== "undefined" ? window.innerWidth : 1200);
      h = canvas.parentElement?.clientHeight || (typeof window !== "undefined" ? window.innerHeight : 800);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };
    onResize();
    window.addEventListener("resize", onResize);

    // Warm Bokeh Light Orbs
    const bokehOrbs = Array.from({ length: 14 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 45 + 25,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: -Math.random() * 0.25 - 0.1,
      alpha: Math.random() * 0.18 + 0.08,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.015 + 0.008,
    }));

    // Tandoor Fire Embers
    const embers = Array.from({ length: 65 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 2.6 + 0.8,
      speedY: Math.random() * 0.75 + 0.35,
      speedX: (Math.random() - 0.5) * 0.35,
      wobbleSpeed: Math.random() * 0.035 + 0.015,
      wobbleRadius: Math.random() * 1.5 + 0.5,
      angle: Math.random() * Math.PI * 2,
      alpha: Math.random() * 0.75 + 0.25,
      baseAlpha: Math.random() * 0.75 + 0.25,
      color:
        Math.random() > 0.65
          ? "#FFE082"
          : Math.random() > 0.35
            ? "#FFD54F"
            : "#B79A5B",
    }));

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      // Render Bokeh
      for (let i = 0; i < bokehOrbs.length; i++) {
        const b = bokehOrbs[i];
        b.pulse += b.pulseSpeed;
        b.x += b.speedX;
        b.y += b.speedY;

        if (b.y < -b.radius * 2) {
          b.y = h + b.radius;
          b.x = Math.random() * w;
        }
        if (b.x < -b.radius * 2) b.x = w + b.radius;
        if (b.x > w + b.radius * 2) b.x = -b.radius;

        const alpha = Math.max(0.04, b.alpha + Math.sin(b.pulse) * 0.06);
        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
        grad.addColorStop(0, `rgba(212, 175, 55, ${alpha * 1.3})`);
        grad.addColorStop(0.5, `rgba(183, 154, 91, ${alpha * 0.7})`);
        grad.addColorStop(1, "rgba(32, 37, 28, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render Embers with Mouse Physics
      const m = mouseRef.current;
      for (let i = 0; i < embers.length; i++) {
        const p = embers[i];
        p.angle += p.wobbleSpeed;
        p.alpha = p.baseAlpha + Math.sin(p.angle) * 0.3;
        p.y -= p.speedY;
        p.x += Math.sin(p.angle) * p.wobbleRadius + p.speedX;

        if (m.active) {
          const dx = p.x - m.x;
          const dy = p.y - m.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130 && dist > 0) {
            const force = (130 - dist) / 130;
            p.x += (dx / dist) * force * 3;
            p.y += (dy / dist) * force * 3;
            p.alpha = Math.min(1, p.alpha + force * 0.4);
          }
        }

        if (p.y < -20) {
          p.y = h + 15;
          p.x = Math.random() * w;
        }
        if (p.x < -20) p.x = w + 15;
        if (p.x > w + 20) p.x = -15;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, p.alpha));
        ctx.shadowBlur = 14;
        ctx.shadowColor = "#FFD54F";
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 size-full pointer-events-none z-10 opacity-90"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export default GoldenEmbersCanvas;
