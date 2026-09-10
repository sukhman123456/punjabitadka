import { useState, useEffect } from "react";
import { ArrowRight, Calendar, Menu, MessageCircle, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/Logo";

const googleMapsUrl = "https://maps.app.goo.gl/Q7B2fNupLPSVFJJz5";
const phoneUrl = "tel:+919465078750";
const whatsappUrl =
  "https://wa.me/919465078750?text=Hello%20New%20Punjabi%20Tadka%2C%20I%20would%20like%20to%20reserve%20a%20table%20or%20inquire%20about%20your%20menu.";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Chai Bar", href: "#chaibar" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);

      const sections = ["home", "about", "menu", "chaibar", "gallery", "reviews", "contact"];
      const scrollPos = window.scrollY + 180;

      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 transition-all duration-300">
      {/* 1. Top Ribbon in Warm Bronze & Sand */}
      <div className="border-b border-[#CBBD93]/30 bg-[#2A2418] py-1.5 px-4 text-center text-[10px] font-bold tracking-[0.2em] text-[#FAE8B4] backdrop-blur-md hidden sm:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="inline-block size-1.5 rounded-full bg-[#CBBD93] animate-ping" />
            <span className="text-[#FAE8B4]">BABRI, GURDASPUR (PUNJAB)</span>
            <span className="text-[#CBBD93]/50">•</span>
            <span className="text-[#CBBD93]">HIGHWAY FINE DINING &amp; CHAI BAR</span>
          </div>

          <div className="flex items-center gap-2">
            <Sparkles className="size-3 text-[#CBBD93]" />
            <span className="text-[#FAE8B4]">100% PURE DESI GHEE &amp; CLAY TANDOOR</span>
            <Sparkles className="size-3 text-[#CBBD93]" />
          </div>

          <div className="flex items-center gap-4 text-[#FAE8B4]">
            <a href={phoneUrl} className="flex items-center gap-1.5 transition-colors hover:text-[#CBBD93]">
              <Phone className="size-3 text-[#CBBD93]" />
              <span>094650 78750</span>
            </a>
            <span className="text-[#CBBD93]/50">•</span>
            <span className="text-[#CBBD93]">OPEN DAILY 10 AM - 11:30 PM</span>
          </div>
        </div>
      </div>

      {/* 2. Main Luxury Floating Navbar */}
      <div
        className={`transition-all duration-400 ${
          scrolled
            ? "bg-[#F7F1DF]/95 backdrop-blur-2xl border-b border-[#CBBD93]/40 py-2.5 shadow-[0_12px_36px_rgba(42,36,24,0.09)]"
            : "bg-[#F7F1DF]/85 backdrop-blur-xl border-b border-[#CBBD93]/30 py-4"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 sm:px-10 lg:px-12">
          {/* Left: New Bespoke Logo Treatment */}
          <a
            href="#home"
            className="transition-transform duration-300 hover:scale-[1.01]"
            aria-label="New Punjabi Tadka Restaurant Home"
          >
            <Logo variant="horizontal" theme="light" />
          </a>

          {/* Center: Desktop Nav Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`group relative px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300 ${
                    isActive
                      ? "text-[#574A24]"
                      : "text-[#80775C] hover:text-[#574A24]"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#574A24] rounded-full shadow-[0_1px_4px_rgba(87,74,36,0.3)]" />
                  )}
                  <span className="absolute inset-0 rounded-lg bg-[#CBBD93]/0 transition-colors duration-300 group-hover:bg-[#CBBD93]/20" />
                </a>
              );
            })}
          </nav>

          {/* Right: Book a Table CTA */}
          <div className="hidden items-center gap-3.5 md:flex">
            <a
              href={phoneUrl}
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#574A24] transition-colors hover:text-[#80775C]"
            >
              <Phone className="size-3.5 text-[#80775C]" />
              <span>Call Us</span>
            </a>

            <Button
              asChild
              size="sm"
              className="bronze-gradient-btn px-5 py-2.5 text-xs font-bold uppercase tracking-widest shadow-md"
            >
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <Calendar className="size-3.5" />
                <span>BOOK A TABLE</span>
              </a>
            </Button>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label="Open Navigation Menu"
                  className="flex size-11 items-center justify-center rounded-xl border border-[#CBBD93] bg-[#FFFFFF] text-[#574A24] shadow-sm transition-colors hover:bg-[#F7F1DF]"
                >
                  <Menu className="size-6" />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[310px] border-l border-[#CBBD93]/40 bg-[#F7F1DF] p-6 text-[#2A2418]"
              >
                <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Navigation links for New Punjabi Tadka Restaurant
                </SheetDescription>

                {/* Mobile Drawer Header */}
                <div className="flex items-center gap-3 border-b border-[#CBBD93]/35 pb-5">
                  <Logo variant="circular" theme="light" size="sm" />
                  <div>
                    <span className="block font-display text-base font-bold text-[#574A24]">
                      NEW PUNJABI TADKA
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#80775C]">
                      BABRI (GURDASPUR)
                    </span>
                  </div>
                </div>

                {/* Mobile Links */}
                <nav className="mt-6 flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href.replace("#", "");
                    return (
                      <SheetClose asChild key={link.name}>
                        <a
                          href={link.href}
                          className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-wider transition-all ${
                            isActive
                              ? "bg-[#574A24] text-[#FAE8B4]"
                              : "text-[#574A24] hover:bg-[#E7D8B2]/50"
                          }`}
                        >
                          <span>{link.name}</span>
                          <ArrowRight className="size-4 text-[#CBBD93]" />
                        </a>
                      </SheetClose>
                    );
                  })}
                </nav>

                {/* Mobile Drawer Quick Contacts */}
                <div className="mt-8 border-t border-[#CBBD93]/35 pt-6 space-y-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2.5 rounded-xl bg-[#574A24] p-3 text-sm font-bold uppercase tracking-wider text-[#FAE8B4] shadow-md"
                  >
                    <Calendar className="size-4 text-[#CBBD93]" />
                    <span>Book a Table</span>
                  </a>

                  <a
                    href={phoneUrl}
                    className="flex items-center gap-3 rounded-xl border border-[#CBBD93] bg-[#FFFFFF] p-3 text-sm font-bold text-[#574A24]"
                  >
                    <Phone className="size-4 text-[#80775C]" />
                    <span>094650 78750</span>
                  </a>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-[#CBBD93] bg-[#FFFFFF] p-3 text-sm font-bold text-[#574A24]"
                  >
                    <span>Get Directions</span>
                  </a>
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
