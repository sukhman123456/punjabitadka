import { useState } from "react";
import { ArrowRight, Compass, Flame, Sparkles, Star, Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";
import officialLogo from "@/assets/logo";
import heroImage from "@/assets/punjabi-hero.jpg";
import { GoldenEmbersCanvas } from "@/components/GoldenEmbersCanvas";

const googleMapsUrl = "https://maps.app.goo.gl/Q7B2fNupLPSVFJJz5";

function RoyalHeritageMandala() {
  return (
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[6] select-none opacity-30">
      {/* Outer Rotating Sunburst / Wheat Petal Ring */}
      <svg
        className="size-[540px] sm:size-[720px] md:size-[880px] animate-spin-slow text-[#B79A5B]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="200"
          cy="200"
          r="190"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="4 6"
          opacity="0.45"
        />
        <circle
          cx="200"
          cy="200"
          r="170"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.35"
        />
        {/* 24 Rays of Sunburst / Royal Court Phulkari Rays */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          return (
            <g key={i} transform={`rotate(${angle} 200 200)`}>
              <line
                x1="200"
                y1="30"
                x2="200"
                y2="48"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="200" cy="24" r="2.5" fill="currentColor" opacity="0.75" />
              <polygon
                points="197,55 200,48 203,55 200,62"
                fill="currentColor"
                opacity="0.4"
              />
            </g>
          );
        })}
      </svg>

      {/* Inner Counter-Rotating Sacred Phulkari Geometric Ring */}
      <svg
        className="absolute inset-0 size-full animate-spin-slow-reverse text-[#D4AF37]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="200"
          cy="200"
          r="135"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeDasharray="6 8"
          opacity="0.5"
        />
        <circle
          cx="200"
          cy="200"
          r="105"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.35"
        />
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16;
          return (
            <g key={i} transform={`rotate(${angle} 200 200)`}>
              <path
                d="M 190 95 Q 200 80 210 95"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
                opacity="0.55"
              />
              <circle cx="200" cy="74" r="2" fill="currentColor" opacity="0.85" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [mouseCanvasPos, setMouseCanvasPos] = useState({
    x: 0,
    y: 0,
    active: false,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
    setMouseCanvasPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setMouseCanvasPos((prev) => ({ ...prev, active: false }));
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#20251C] pt-32 pb-20 sm:pt-36 sm:pb-24"
    >
      {/* 1. Cinematic Slow Ken Burns Background Movement */}
      <img
        src={heroImage}
        alt="Authentic Punjabi Food and Clay Tandoor Cooking"
        width={1920}
        height={1200}
        className="absolute inset-0 size-full object-cover object-center opacity-45 brightness-[0.75] contrast-[1.18] animate-ken-burns pointer-events-none"
      />

      {/* 2. Rich Dark Olive & Warm Amber Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#20251C] via-[#20251C]/75 to-[#20251C]/40 pointer-events-none" />
      <div className="punjabi-phulkari-pattern absolute inset-0 opacity-20 pointer-events-none" />

      {/* 3. Sweeping Volumetric Golden Sunbeam / Light Ray */}
      <div className="absolute -top-1/2 -left-1/4 w-[180%] h-[200%] pointer-events-none z-[4] animate-light-sweep bg-gradient-to-r from-transparent via-[#B79A5B]/12 to-transparent blur-3xl transform-gpu" />

      {/* 4. Royal Punjabi Heritage Rotating Sacred Geometry */}
      <RoyalHeritageMandala />

      {/* 5. Expanding Heartbeat Acoustic Aura Rings Behind Logo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[5]">
        <div className="size-72 sm:size-96 rounded-full border border-[#B79A5B]/40 animate-pulse-ring-1" />
        <div className="size-72 sm:size-96 rounded-full border border-[#D4AF37]/35 animate-pulse-ring-2" />
        <div className="size-72 sm:size-96 rounded-full border border-[#B79A5B]/30 animate-pulse-ring-3" />
      </div>

      {/* 6. Dual Pulsing Warm Lantern Light Orbs */}
      <div className="absolute top-1/4 left-4 sm:left-24 size-80 sm:size-96 rounded-full bg-[#B79A5B]/25 blur-[110px] animate-lantern-pulse pointer-events-none" />
      <div className="absolute top-1/4 right-4 sm:right-24 size-80 sm:size-96 rounded-full bg-[#D4AF37]/25 blur-[110px] animate-lantern-pulse [animation-delay:2.5s] pointer-events-none" />

      {/* 7. Center Breathing Amber & Gold Halo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[420px] rounded-full bg-[#B79A5B]/30 blur-[130px] animate-lantern-pulse pointer-events-none" />

      {/* 8. Realistic Multi-Layer Tandoor Aroma Steam Clouds */}
      <div className="absolute bottom-16 left-1/4 w-[520px] h-48 rounded-full bg-gradient-to-t from-[#B79A5B]/15 via-[#F5F0E4]/10 to-transparent blur-3xl animate-steam-1 pointer-events-none" />
      <div className="absolute bottom-24 right-1/4 w-[460px] h-40 rounded-full bg-gradient-to-t from-[#D4AF37]/12 via-[#F5F0E4]/8 to-transparent blur-2xl animate-steam-2 pointer-events-none" />

      {/* 9. Floating Golden Tandoor Embers & Interactive Canvas */}
      <GoldenEmbersCanvas mousePos={mouseCanvasPos} />

      {/* 10. Interactive Cursor Spotlight Glow (Desktop) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 hidden md:block z-[9]"
        style={{
          background: `radial-gradient(circle 500px at ${mousePos.x}% ${mousePos.y}%, rgba(212, 175, 55, 0.18), transparent 80%)`,
        }}
      />

      {/* 11. Floating Luxury Heritage Badges (Left & Right) */}
      <div className="hidden xl:flex absolute left-8 2xl:left-16 top-1/2 -translate-y-1/2 flex-col gap-1.5 rounded-2xl border border-[#B79A5B]/50 bg-[#20251C]/85 px-5 py-4 shadow-[0_15px_35px_rgba(0,0,0,0.5)] backdrop-blur-xl animate-float-badge-left z-20 transition-transform duration-300 hover:scale-105">
        <div className="flex items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-lg bg-[#3F4A32] border border-[#B79A5B]/40">
            <Flame className="size-4 text-[#FFD54F] animate-pulse" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#B79A5B]">
            Authentic Tandoor
          </span>
        </div>
        <p className="text-sm font-bold text-[#FFFDF7]">100% Charcoal Fired</p>
        <p className="text-[11px] text-[#EBE5D8]/75">Slow-roasted royal flavors</p>
      </div>

      <div className="hidden xl:flex absolute right-8 2xl:right-16 top-1/2 -translate-y-1/2 flex-col gap-1.5 rounded-2xl border border-[#B79A5B]/50 bg-[#20251C]/85 px-5 py-4 shadow-[0_15px_35px_rgba(0,0,0,0.5)] backdrop-blur-xl animate-float-badge-right z-20 transition-transform duration-300 hover:scale-105">
        <div className="flex items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-lg bg-[#3F4A32] border border-[#B79A5B]/40">
            <Sparkles className="size-4 text-[#FFD54F]" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#B79A5B]">
            Pure Heritage
          </span>
        </div>
        <p className="text-sm font-bold text-[#FFFDF7]">Pure Desi Ghee</p>
        <p className="text-[11px] text-[#EBE5D8]/75">Handground secret spices</p>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center">
        {/* Royal Crest / Award Tag */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B79A5B]/70 bg-[#20251C]/90 px-5 py-2 shadow-2xl backdrop-blur-xl">
          <Sparkles className="size-3.5 text-[#D4AF37] animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
            Punjab’s Royal Highway Dining Destination
          </span>
          <Sparkles className="size-3.5 text-[#D4AF37] animate-pulse" />
        </div>

        {/* Official Brand Identity Emblem with Ambient Lantern Glow */}
        <div className="relative mb-6 max-w-md transition-transform duration-700 hover:scale-105">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#3F4A32]/70 via-[#D4AF37]/50 to-[#3F4A32]/70 blur-2xl opacity-95 animate-lantern-pulse" />
          <div className="relative overflow-hidden rounded-2xl border-2 border-[#B79A5B]/80 bg-[#1D2219]/95 p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md">
            <img
              src={officialLogo}
              alt="New Punjabi Tadka Restaurant Brand Logo"
              className="w-full max-h-52 object-contain sm:max-h-60 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Gurmukhi Heritage Line with Golden Wheat Icons */}
        <div className="inline-flex items-center gap-3 drop-shadow-[0_2px_15px_rgba(212,175,55,0.45)]">
          <Wheat className="size-4 text-[#D4AF37]" />
          <p className="font-gurmukhi text-base font-bold tracking-widest text-[#F3D079] sm:text-lg">
            ਪਿੰਡਾਂ ਦਾ ਸਵਾਦ ਹੁਣ ਸ਼ਹਿਰ ਵਿੱਚ • ਸੁਆਦ ਪੰਜਾਬ ਦਾ
          </p>
          <Wheat className="size-4 text-[#D4AF37]" />
        </div>

        {/* Main Heading with 3D Chrome Shimmer & Ambient Glow */}
        <h1 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight text-[#FFFDF7] sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-2xl animate-text-glow">
          THE REAL TASTE <br />
          <span className="gold-shimmer-text">OF PUNJAB</span>
        </h1>

        {/* Supporting Text */}
        <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-[#F5F0E4] sm:text-xl drop-shadow">
          Authentic Punjabi flavours, traditional clay tandoor cooking and unforgettable hospitality.
        </p>

        {/* 4 Pillars of Royal Hospitality Ribbon */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-3xl">
          <div className="flex items-center gap-2 rounded-xl border border-[#B79A5B]/40 bg-[#1A1F16]/85 px-3.5 py-2 shadow-md backdrop-blur-md">
            <Flame className="size-4 text-[#FFD54F]" />
            <span className="text-xs font-bold text-[#FFFDF7]">Clay Tandoor Fired</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-[#B79A5B]/40 bg-[#1A1F16]/85 px-3.5 py-2 shadow-md backdrop-blur-md">
            <Sparkles className="size-4 text-[#FFD54F]" />
            <span className="text-xs font-bold text-[#FFFDF7]">Shuddh Desi Ghee</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-[#B79A5B]/40 bg-[#1A1F16]/85 px-3.5 py-2 shadow-md backdrop-blur-md">
            <Wheat className="size-4 text-[#FFD54F]" />
            <span className="text-xs font-bold text-[#FFFDF7]">Stone-Ground Spices</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-[#B79A5B]/40 bg-[#1A1F16]/85 px-3.5 py-2 shadow-md backdrop-blur-md">
            <Star className="size-4 text-[#FFD54F] fill-[#FFD54F]" />
            <span className="text-xs font-bold text-[#FFFDF7]">4.9★ Rated Landmark</span>
          </div>
        </div>

        {/* Buttons: Gilded Gold Foil + Luxury Glass Directions */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row w-full sm:w-auto">
          <Button
            asChild
            size="lg"
            className="gold-gradient-btn w-full sm:w-auto px-9 py-6 text-sm font-extrabold uppercase tracking-widest shadow-[0_10px_30px_rgba(183,154,91,0.4)]"
          >
            <a href="#menu" className="flex items-center gap-2.5">
              <span>EXPLORE MENU</span>
              <ArrowRight className="size-4" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-2 border-[#B79A5B]/70 bg-[#283023]/70 px-8 py-6 text-sm font-bold uppercase tracking-widest text-[#FFFDF7] shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#FFFDF7] hover:text-[#20251C]"
          >
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <Compass className="size-4 text-[#D4AF37]" />
              <span>GET DIRECTIONS</span>
            </a>
          </Button>
        </div>

        {/* Subtle Scroll Indicator */}
        <a
          href="#about"
          className="mt-12 inline-flex flex-col items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B79A5B] transition-colors hover:text-[#FFFDF7]"
          aria-label="Scroll to discover story"
        >
          <span>Scroll to Discover</span>
          <div className="h-6 w-[1.5px] bg-gradient-to-b from-[#B79A5B] to-transparent animate-pulse" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
