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
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

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

    // 1. Warm Bokeh Light Orbs (Background layer)
    const bokehOrbs = Array.from({ length: isMobile ? 8 : 16 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 45 + 25,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: -Math.random() * 0.25 - 0.08,
      alpha: Math.random() * 0.18 + 0.08,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.015 + 0.008,
    }));

    // 2. Floating Golden Wheat Particles (Midground layer)
    const wheatSpecks = Array.from({ length: isMobile ? 12 : 28 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      length: Math.random() * 6 + 4,
      width: Math.random() * 2 + 1,
      angle: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.02,
      speedY: -Math.random() * 0.45 - 0.15,
      speedX: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    // 3. Tandoor Fire Embers (Foreground layer)
    const embers = Array.from({ length: isMobile ? 35 : 75 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 2.4 + 0.8,
      speedY: Math.random() * 0.75 + 0.35,
      speedX: (Math.random() - 0.5) * 0.35,
      wobbleSpeed: Math.random() * 0.035 + 0.015,
      wobbleRadius: Math.random() * 1.5 + 0.5,
      angle: Math.random() * Math.PI * 2,
      alpha: Math.random() * 0.75 + 0.25,
      color:
        Math.random() > 0.65
          ? "#FAE8B4"
          : Math.random() > 0.35
            ? "#CBBD93"
            : "#80775C",
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
        grad.addColorStop(0, `rgba(250, 232, 180, ${alpha * 1.2})`);
        grad.addColorStop(0.5, `rgba(203, 189, 147, ${alpha * 0.6})`);
        grad.addColorStop(1, "rgba(42, 36, 24, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render Floating Wheat Specks
      for (let i = 0; i < wheatSpecks.length; i++) {
        const p = wheatSpecks[i];
        p.angle += p.rotSpeed;
        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y < -15) {
          p.y = h + 15;
          p.x = Math.random() * w;
        }
        if (p.x < -15) p.x = w + 15;
        if (p.x > w + 15) p.x = -15;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.fillStyle = `rgba(203, 189, 147, ${p.alpha})`;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.length, p.width, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Render Embers with Mouse Interaction
      const m = mouseRef.current;
      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        e.angle += e.wobbleSpeed;
        e.y -= e.speedY;
        e.x += e.speedX + Math.sin(e.angle) * 0.4;

        // Subtle mouse deflection
        if (m.active) {
          const dx = e.x - m.x;
          const dy = e.y - m.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160 && dist > 0) {
            const force = (160 - dist) / 160;
            e.x += (dx / dist) * force * 2.2;
            e.y += (dy / dist) * force * 1.5;
          }
        }

        if (e.y < -10) {
          e.y = h + 10;
          e.x = Math.random() * w;
        }
        if (e.x < -10) e.x = w + 10;
        if (e.x > w + 10) e.x = -10;

        ctx.fillStyle = e.color;
        ctx.globalAlpha = e.alpha;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, [mounted]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 size-full z-[8]"
      style={{ opacity: 0.95 }}
      aria-hidden="true"
    />
  );
}

export default GoldenEmbersCanvas;
