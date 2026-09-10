import { useState, useEffect } from "react";
import { ArrowRight, Compass, Menu, MessageCircle, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import officialLogo from "@/assets/logo";

const googleMapsUrl = "https://maps.app.goo.gl/Q7B2fNupLPSVFJJz5";
const phoneUrl = "tel:+919465078750";
const whatsappUrl =
  "https://wa.me/919465078750?text=Hello%20New%20Punjabi%20Tadka%2C%20I%20would%20like%20to%20reserve%20a%20table%20or%20inquire%20about%20your%20menu.";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 transition-all duration-300">
      {/* 1. Top Royal Marquee / Announcement Ribbon */}
      <div className="border-b border-[#B79A5B]/30 bg-[#161B13]/95 py-1.5 px-4 text-center text-[10px] font-bold tracking-[0.2em] text-[#B79A5B] backdrop-blur-md hidden sm:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="inline-block size-1.5 rounded-full bg-[#D4AF37] animate-ping" />
            <span className="text-[#FFFDF7]">BABRI, GURDASPUR (PUNJAB)</span>
            <span className="text-[#B79A5B]/50">•</span>
            <span className="text-[#EBE5D8]/80">HIGHWAY LANDMARK</span>
          </div>

          <div className="flex items-center gap-2">
            <Sparkles className="size-3 text-[#D4AF37]" />
            <span className="text-[#F3D079]">100% PURE DESI GHEE &amp; TRADITIONAL CLAY TANDOOR</span>
            <Sparkles className="size-3 text-[#D4AF37]" />
          </div>

          <div className="flex items-center gap-4 text-[#FFFDF7]">
            <a href={phoneUrl} className="flex items-center gap-1.5 transition-colors hover:text-[#D4AF37]">
              <Phone className="size-3 text-[#D4AF37]" />
              <span>094650 78750</span>
            </a>
            <span className="text-[#B79A5B]/50">•</span>
            <span className="text-[#D4AF37]">OPEN DAILY 10 AM - 11:30 PM</span>
          </div>
        </div>
      </div>

      {/* 2. Main Luxury Floating Navbar */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "luxury-glass-nav py-3"
            : "bg-[#181E15]/90 backdrop-blur-2xl border-b border-[#B79A5B]/35 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 sm:px-10 lg:px-12">
          {/* Left: Official Restaurant Logo */}
          <a
            href="#home"
            className="group flex items-center gap-3.5 transition-transform duration-300 hover:scale-[1.02]"
            aria-label="New Punjabi Tadka Restaurant Home"
          >
            <div className="relative h-13 w-22 sm:h-14 sm:w-26 overflow-hidden rounded-xl border border-[#B79A5B]/60 bg-[#20251C] p-1.5 shadow-[0_4px_15px_rgba(0,0,0,0.6)] transition-all group-hover:border-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              <img
                src={officialLogo}
                alt="New Punjabi Tadka Restaurant Logo"
                className="size-full object-contain"
              />
            </div>
            <div>
              <span className="block font-display text-xl font-extrabold tracking-wider text-[#FFFDF7] group-hover:text-[#F3D079] transition-colors lg:text-2xl drop-shadow">
                NEW PUNJABI TADKA
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-px w-3 bg-[#B79A5B]" />
                <span className="block text-[0.65rem] font-extrabold uppercase tracking-[0.25em] text-[#D4AF37]">
                  RESTAURANT • BABRI (PUNJAB)
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-7 md:flex lg:gap-8"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative px-2 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#F5F0E4] transition-colors hover:text-[#F3D079]"
              >
                <span>{link.name}</span>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-[#B79A5B] to-[#F3D079] transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Controls: Call & View Menu */}
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href={phoneUrl}
              className="flex items-center gap-2 rounded-xl border border-[#B79A5B]/50 bg-[#283023]/70 px-3.5 py-2 text-xs font-bold tracking-wider text-[#FFFDF7] shadow-sm backdrop-blur-md transition-all hover:border-[#D4AF37] hover:bg-[#3F4A32] hover:text-[#F3D079]"
            >
              <Phone className="size-3.5 text-[#D4AF37]" />
              <span>094650 78750</span>
            </a>

            <Button
              asChild
              size="sm"
              className="gold-gradient-btn px-6 py-2.5 text-xs tracking-wider uppercase"
            >
              <a href="#menu" className="flex items-center gap-1.5">
                <span>VIEW MENU</span>
                <ArrowRight className="size-3.5" />
              </a>
            </Button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              asChild
              size="sm"
              className="gold-gradient-btn h-9 px-3.5 text-xs font-extrabold"
            >
              <a href="#menu">Menu</a>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="size-10 border-[#B79A5B]/60 bg-[#283023] text-[#FFFDF7] hover:border-[#D4AF37] hover:bg-[#3F4A32]"
                  aria-label="Open Navigation Menu"
                >
                  <Menu className="size-5 text-[#D4AF37]" />
                </Button>
              </SheetTrigger>
              <SheetContent className="border-l border-[#B79A5B]/40 bg-[#1A1F16] text-[#F5F0E4]">
                <div className="flex items-center gap-3">
                  <img
                    src={officialLogo}
                    alt="New Punjabi Tadka Logo"
                    className="h-12 w-20 rounded-xl border border-[#B79A5B]/50 bg-[#283023] object-contain p-1"
                  />
                  <div>
                    <SheetTitle className="font-display text-lg font-bold text-[#FFFDF7]">
                      New Punjabi Tadka
                    </SheetTitle>
                    <SheetDescription className="text-xs font-medium text-[#D4AF37]">
                      The Real Taste of Punjab • Babri
                    </SheetDescription>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-1 border-y border-[#B79A5B]/25 py-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                      <a
                        href={link.href}
                        className="rounded-xl px-3.5 py-3 font-display text-lg font-bold text-[#FFFDF7] transition-colors hover:bg-[#283023] hover:text-[#D4AF37]"
                      >
                        {link.name}
                      </a>
                    </SheetClose>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <Button
                    asChild
                    className="gold-gradient-btn w-full font-bold uppercase py-6"
                  >
                    <a href="#menu">Explore Menu</a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[#B79A5B]/60 bg-[#283023] text-[#FFFDF7] hover:bg-[#3F4A32]"
                  >
                    <a href={googleMapsUrl} target="_blank" rel="noreferrer">
                      <Compass className="mr-2 size-4 text-[#D4AF37]" /> Get Directions
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
                  >
                    <a href={whatsappUrl} target="_blank" rel="noreferrer">
                      <MessageCircle className="mr-2 size-4" /> WhatsApp Us
                    </a>
                  </Button>
                </div>

                <div className="mt-8 rounded-2xl border border-[#B79A5B]/30 bg-[#283023] p-4 text-xs text-[#EBE5D8]">
                  <p className="font-bold text-[#FFFDF7]">Location:</p>
                  <p className="mt-1 leading-relaxed">
                    Gurdaspur to Batala Road, Opposite Mahindra Car Showroom,
                    Babri, Punjab 143520
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
