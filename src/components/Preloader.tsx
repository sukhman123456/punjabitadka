import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast luxury sequence (~1.2s)
    const startTime = performance.now();
    const duration = 1200;

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const nextProgress = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(nextProgress);

      if (elapsed >= duration) {
        clearInterval(interval);
        setExiting(true);
        setTimeout(() => {
          setVisible(false);
          onComplete?.();
        }, 400);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      onClick={() => {
        setExiting(true);
        setTimeout(() => setVisible(false), 200);
      }}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#2A2418] transition-all duration-500 cursor-pointer ${
        exiting
          ? "opacity-0 pointer-events-none -translate-y-4 scale-[1.02]"
          : "opacity-100"
      }`}
      aria-label="New Punjabi Tadka Loading Screen"
      role="status"
    >
      {/* Ambient Pulsing Warm Bronze Orbs */}
      <div className="absolute size-96 rounded-full bg-[#574A24]/35 blur-[120px] animate-bronze-pulse pointer-events-none" />
      <div className="linen-texture absolute inset-0 opacity-20 pointer-events-none" />

      {/* Rotating Sacred Heritage Arch Motif */}
      <div className="absolute pointer-events-none size-80 sm:size-96 opacity-20">
        <svg
          className="size-full animate-spin-slow text-[#CBBD93]"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle
            cx="200"
            cy="200"
            r="180"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Center Brand Emblem */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <div className="relative mb-6 transition-transform duration-700 animate-float-subtle">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#574A24]/40 via-[#CBBD93]/30 to-[#574A24]/40 blur-xl opacity-80" />
          <div className="relative overflow-hidden rounded-2xl border border-[#CBBD93]/50 bg-[#2A2418]/95 p-5 shadow-2xl">
            <Logo variant="circular" theme="dark" size="lg" />
          </div>
        </div>

        <h2 className="font-display text-2xl font-bold tracking-wider text-[#FAE8B4]">
          NEW PUNJABI TADKA
        </h2>

        <p className="mt-1 font-gurmukhi text-sm font-semibold tracking-widest text-[#CBBD93]">
          ਪਿੰਡਾਂ ਦਾ ਸਵਾਦ ਹੁਣ ਸ਼ਹਿਰ ਵਿੱਚ
        </p>

        {/* Expanding Sand & Cream Hairline Progress Bar */}
        <div className="mt-8 w-48 sm:w-64 overflow-hidden rounded-full bg-[#574A24]/60 p-[1px] border border-[#CBBD93]/40">
          <div
            className="h-1 rounded-full bg-gradient-to-r from-[#CBBD93] via-[#FAE8B4] to-[#CBBD93] transition-all duration-75 ease-out shadow-[0_0_10px_#CBBD93]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#CBBD93]/80">
          Royal Punjabi Hospitality
        </span>
      </div>
    </div>
  );
}

export default Preloader;
