import { useState, useCallback } from "react";
import { ArrowRight, Compass, Flame, Sparkles, Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoldenEmbersCanvas } from "@/components/GoldenEmbersCanvas";
import { CardTilt } from "@/components/CardTilt";

// Real Restaurant Photos from Babri
import { nightPanorama, grandArchDay } from "@/assets/exterior/photos";
import thaliImage from "@/assets/punjabi-thali.jpg";

const googleMapsUrl = "https://maps.app.goo.gl/Q7B2fNupLPSVFJJz5";

export function Hero() {
  const [mouseCanvasPos, setMouseCanvasPos] = useState({
    x: 0,
    y: 0,
    active: false,
  });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseCanvasPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMouseCanvasPos((prev) => ({ ...prev, active: false }));
  }, []);

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-[92svh] lg:min-h-screen items-center justify-center overflow-hidden bg-[#2A2418] pt-32 pb-20 sm:pt-36 sm:pb-24"
    >
      {/* 1. Real Restaurant Night Panorama Background */}
      <div className="absolute inset-0 size-full overflow-hidden">
        <img
          src={nightPanorama}
          alt="New Punjabi Tadka Restaurant and Courtyard in Babri at night"
          width={1920}
          height={1080}
          className="size-full object-cover object-center brightness-[0.72] contrast-[1.12] animate-ken-burns pointer-events-none"
        />
      </div>

      {/* 2. Deep Bronze Gradient Overlay (Rich, Atmospheric, No Green) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2A2418]/96 via-[#2A2418]/86 to-[#2A2418]/45 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2A2418] via-transparent to-[#2A2418]/50 pointer-events-none" />
      <div className="linen-texture absolute inset-0 opacity-15 pointer-events-none" />

      {/* 3. Subtle Floating Wheat Particles & Golden Embers */}
      <GoldenEmbersCanvas mousePos={mouseCanvasPos} />

      {/* 4. Subtle Volumetric Sunbeam / Bronze Light Sweep */}
      <div className="absolute -top-1/2 -left-1/4 w-[160%] h-[180%] pointer-events-none z-[4] animate-light-sweep bg-gradient-to-r from-transparent via-[#CBBD93]/10 to-transparent blur-3xl transform-gpu" />

      {/* Main Content Grid: Left Editorial Text / Right Restaurant Layered Showcase */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT: Eyebrow + Large Editorial Typography + Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#CBBD93]/40 bg-[#342C1D]/80 px-4 py-1.5 shadow-md backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-[#CBBD93] animate-ping" />
              <span className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#FAE8B4]">
                AUTHENTIC PUNJABI CUISINE
              </span>
            </div>

            {/* Large Editorial Heading */}
            <h1 className="mt-5 font-display text-fluid-hero font-extrabold uppercase tracking-tight text-[#FFFFFF] drop-shadow-2xl">
              THE REAL <br />
              TASTE OF <br />
              <span className="cream-shimmer-text">PUNJAB</span>
            </h1>

            {/* Gurmukhi Heritage Ribbon */}
            <div className="mt-3 inline-flex items-center gap-2 text-[#CBBD93]">
              <Wheat className="size-4" />
              <p className="font-gurmukhi text-sm sm:text-base font-semibold tracking-wider">
                ਪਿੰਡਾਂ ਦਾ ਸਵਾਦ ਹੁਣ ਸ਼ਹਿਰ ਵਿੱਚ • ਬਾਬਰੀ (ਗੁਰਦਾਸਪੁਰ)
              </p>
            </div>

            {/* Small Supporting Text */}
            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-[#FAE8B4]/90 drop-shadow">
              Traditional flavours, clay tandoor cooking, warm hospitality and the
              soul of Punjab on the Gurdaspur–Batala Highway.
            </p>

            {/* 4 Pillars of Excellence Ribbon */}
            <div className="mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="flex items-center gap-1.5 rounded-xl border border-[#CBBD93]/30 bg-[#342C1D]/75 px-3 py-1.5 text-xs font-semibold text-[#FAE8B4] backdrop-blur-md">
                <Flame className="size-3.5 text-[#CBBD93]" />
                <span>Clay Tandoor</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-xl border border-[#CBBD93]/30 bg-[#342C1D]/75 px-3 py-1.5 text-xs font-semibold text-[#FAE8B4] backdrop-blur-md">
                <Sparkles className="size-3.5 text-[#CBBD93]" />
                <span>100% Desi Ghee</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-xl border border-[#CBBD93]/30 bg-[#342C1D]/75 px-3 py-1.5 text-xs font-semibold text-[#FAE8B4] backdrop-blur-md">
                <Wheat className="size-3.5 text-[#CBBD93]" />
                <span>Stone-Ground Spices</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="bronze-gradient-btn w-full sm:w-auto px-9 py-6 text-sm font-extrabold uppercase tracking-widest shadow-xl"
              >
                <a href="#menu" className="flex items-center gap-2.5">
                  <span>EXPLORE MENU</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-1.5 border-[#CBBD93]/70 bg-[#342C1D]/60 px-8 py-6 text-sm font-bold uppercase tracking-widest text-[#FAE8B4] hover:bg-[#FAE8B4] hover:text-[#2A2418] hover:border-[#FAE8B4] transition-all backdrop-blur-md"
              >
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <Compass className="size-4 text-[#CBBD93]" />
                  <span>GET DIRECTIONS</span>
                </a>
              </Button>
            </div>
          </div>

          {/* RIGHT: Asymmetrical Layered Real Photography Showcase */}
          <div className="hidden lg:block lg:col-span-5 relative">
            {/* Main Featured Photo (Authentic Grand Arched Facade) */}
            <CardTilt maxTilt={7} scale={1.02}>
              <div className="relative overflow-hidden rounded-3xl border-2 border-[#CBBD93]/40 bg-[#342C1D] shadow-2xl">
                <img
                  src={grandArchDay}
                  alt="New Punjabi Tadka Grand Arched Facade in Babri"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2418] via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-[#FAE8B4]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#CBBD93]">
                    Babri Landmark
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#FFFFFF]">
                    Grand Arched Facade &amp; Courtyard
                  </h3>
                </div>
              </div>
            </CardTilt>

            {/* Overlapping Secondary Card (Authentic Royal Thali Feast) */}
            <div className="absolute -bottom-8 -left-8 w-60 z-20">
              <CardTilt maxTilt={8} scale={1.04}>
                <div className="overflow-hidden rounded-2xl border border-[#CBBD93]/60 bg-[#2A2418] p-2 shadow-2xl backdrop-blur-md">
                  <div className="relative aspect-square overflow-hidden rounded-xl">
                    <img
                      src={thaliImage}
                      alt="Authentic Punjabi Royal Thali"
                      className="size-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 right-2 rounded-lg bg-[#2A2418]/90 px-2.5 py-1 text-center border border-[#CBBD93]/40">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#FAE8B4]">
                        Royal Punjabi Dawat
                      </span>
                    </div>
                  </div>
                </div>
              </CardTilt>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
