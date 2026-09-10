import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  Coffee,
  Compass,
  Flame,
  Heart,
  Instagram,
  MapPin,
  Maximize2,
  MessageCircle,
  Phone,
  Quote,
  Sparkles,
  Star,
  UtensilsCrossed,
  Wheat,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

// New Logo Component
import { Logo } from "@/components/Logo";

// Authentic Restaurant Real Photos from Babri
import grandHallImage from "@/assets/interior/grand-dining-hall.jpg";
import emeraldArtImage from "@/assets/interior/emerald-booths-art.jpg";
import royalPeacockImage from "@/assets/interior/royal-peacock-lounge.jpg";

// Real Exterior & Kulhad Chai Photos
import {
  nightPanorama,
  kulhadChaiCafe,
  grandArchDay,
  courtyardDay,
} from "@/assets/exterior/photos";

// Food Assets
import heroImage from "@/assets/punjabi-hero.jpg";
import paneerImage from "@/assets/paneer-naan.jpg";
import thaliImage from "@/assets/punjabi-thali.jpg";
import parathaImage from "@/assets/aloo-paratha.jpg";
import chanaImage from "@/assets/chana-raita.jpg";

// Components
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Preloader } from "@/components/Preloader";
import { CardTilt } from "@/components/CardTilt";

const googleMapsUrl = "https://maps.app.goo.gl/Q7B2fNupLPSVFJJz5";
const phoneUrl = "tel:+919465078750";
const baseWhatsappUrl = "https://wa.me/919465078750";
const whatsappUrl =
  "https://wa.me/919465078750?text=Hello%20New%20Punjabi%20Tadka%2C%20I%20would%20like%20to%20reserve%20a%20table%20or%20inquire%20about%20your%20menu.";
const instagramUrl = "https://www.instagram.com/punjabi_tadka_restaurant06/";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Chai Bar", href: "#chaibar" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "New Punjabi Tadka Restaurant | Authentic Punjabi Cuisine & Chai Bar | Babri, Gurdaspur",
      },
      {
        name: "description",
        content:
          "Experience the authentic taste of Punjab at New Punjabi Tadka Restaurant and Chai Bar in Babri, Gurdaspur. Royal Punjabi Haveli hospitality, traditional clay tandoor cooking, pure desi ghee curries, and garden Kulhad Chai.",
      },
      {
        property: "og:title",
        content: "New Punjabi Tadka Restaurant - Modern Punjabi Fine Dining",
      },
      {
        property: "og:description",
        content:
          "Luxury Punjabi dining and authentic Chai Bar in Babri, Punjab. Authentic tandoor recipes, pure ghee handi, and warm hospitality.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: IndexPage,
});

/* ─────────────────────────────────────────────────────────────
   SCROLL PROGRESS BAR (Sand & Bronze)
   ───────────────────────────────────────────────────────────── */
function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#574A24] via-[#CBBD93] to-[#574A24] transition-all duration-150 shadow-[0_0_8px_#CBBD93]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   1. ABOUT / STORY (Editorial Storytelling with Real Photo)
   ───────────────────────────────────────────────────────────── */
function BrandStorySection() {
  return (
    <section
      id="about"
      className="relative border-t border-[#CBBD93]/30 bg-[#F7F1DF] px-6 py-24 sm:px-10 lg:py-32 overflow-hidden"
    >
      <div className="haveli-pattern absolute inset-0 opacity-40 pointer-events-none" />

      {/* Decorative Watermark Typography */}
      <div className="pointer-events-none absolute -right-12 top-1/2 -translate-y-1/2 select-none opacity-[0.03] font-display text-[180px] lg:text-[280px] font-extrabold uppercase text-[#574A24] leading-none">
        HAVELI
      </div>

      <div className="mx-auto max-w-[1440px] relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Large Real Restaurant Dining Hall Photo */}
          <div className="relative lg:col-span-6">
            <CardTilt maxTilt={6} scale={1.02}>
              <div className="relative overflow-hidden rounded-3xl border border-[#CBBD93]/60 bg-[#FFFFFF] shadow-xl">
                <img
                  src={grandHallImage}
                  alt="New Punjabi Tadka Grand Dining Hall and Celebration Banquet in Babri"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2418]/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-[#FFFFFF]">
                  <span className="inline-block rounded-md border border-[#CBBD93]/60 bg-[#2A2418]/85 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#FAE8B4] backdrop-blur-md">
                    Highway Landmark
                  </span>
                  <p className="mt-2 font-display text-2xl font-bold sm:text-3xl text-[#FFFFFF]">
                    Warm Hospitality &amp; Grand Lounges
                  </p>
                </div>
              </div>
            </CardTilt>

            {/* Overlapping Badge */}
            <div className="absolute -bottom-6 -right-4 hidden sm:block rounded-2xl border border-[#CBBD93] bg-[#FFFFFF] p-4 shadow-xl z-20 transition-transform duration-300 hover:scale-105">
              <div className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-xl bg-[#F7F1DF] text-[#574A24]">
                  <Flame className="size-6 text-[#574A24]" />
                </div>
                <div>
                  <span className="block font-display text-base font-bold text-[#574A24]">
                    Clay Tandoor
                  </span>
                  <span className="text-xs font-semibold text-[#80775C]">
                    Charcoal Simmered Handi
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Editorial Story */}
          <div className="lg:col-span-6">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-px w-6 bg-[#CBBD93]" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#80775C]">
                Our Heritage &amp; Craft
              </p>
              <span className="h-px w-6 bg-[#CBBD93]" />
            </div>

            <h2 className="font-display text-3xl font-extrabold leading-tight text-[#2A2418] sm:text-5xl lg:text-6xl">
              A TASTE OF PUNJAB, <br />
              <span className="text-[#574A24]">SERVED WITH LOVE.</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#574A24]">
              Born from a heartfelt reverence for Punjab’s agrarian soul and
              generational village recipes, New Punjabi Tadka brings time-honoured
              tandoor techniques to life. Every handi is seasoned with freshly
              stone-ground spices, simmered patiently over glowing charcoal embers,
              and enriched with pure dairy.
            </p>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#80775C]">
              Whether you are travelling along the Gurdaspur–Batala Highway or
              gathering with loved ones in our spacious banquet hall, our doors open
              with unconditional warmth, handcrafted breads, and memories meant to be
              cherished.
            </p>

            {/* 4 Pillars Highlight Grid */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 border-t border-[#CBBD93]/30 pt-6">
              <div className="rounded-2xl border border-[#CBBD93]/40 bg-[#FFFFFF] p-4 shadow-sm">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#80775C]">Purity</span>
                <h4 className="mt-1 font-display text-base font-bold text-[#574A24]">100% PURE DESI GHEE</h4>
              </div>
              <div className="rounded-2xl border border-[#CBBD93]/40 bg-[#FFFFFF] p-4 shadow-sm">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#80775C]">Technique</span>
                <h4 className="mt-1 font-display text-base font-bold text-[#574A24]">CLAY TANDOOR COOKING</h4>
              </div>
              <div className="rounded-2xl border border-[#CBBD93]/40 bg-[#FFFFFF] p-4 shadow-sm">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#80775C]">Flavor</span>
                <h4 className="mt-1 font-display text-base font-bold text-[#574A24]">STONE-GROUND SPICES</h4>
              </div>
              <div className="rounded-2xl border border-[#CBBD93]/40 bg-[#FFFFFF] p-4 shadow-sm">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#80775C]">Culture</span>
                <h4 className="mt-1 font-display text-base font-bold text-[#574A24]">WARM HOSPITALITY</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   2. SIGNATURE DISHES (Asymmetric Editorial Layout)
   ───────────────────────────────────────────────────────────── */
function SignatureDishesSection() {
  return (
    <section
      id="signatures"
      className="relative border-t border-[#CBBD93]/30 bg-[#FFFFFF] px-6 py-24 sm:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#CBBD93]" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#80775C]">
              Culinary Centerpieces
            </p>
            <span className="h-px w-8 bg-[#CBBD93]" />
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#2A2418] sm:text-5xl lg:text-6xl">
            SIGNATURE PUNJABI FLAVOURS
          </h2>
          <p className="mt-3 text-base text-[#80775C]">
            Crafted slowly over clay ovens and simmered to perfection.
          </p>
        </div>

        {/* Asymmetrical Grid: Large Feature Dish (Left) + 3 Companions (Right) */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12 items-stretch">
          {/* Left: Grand Feature Dish */}
          <div className="lg:col-span-6 flex flex-col">
            <CardTilt maxTilt={6} scale={1.02} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#CBBD93]/50 bg-[#F7F1DF] shadow-xl transition-all duration-400 hover:border-[#574A24] hover:shadow-2xl">
                <div className="relative aspect-[16/11] overflow-hidden bg-[#2A2418]">
                  <img
                    src={paneerImage}
                    alt="Royal Butter Gravy Special"
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A2418]/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-lg bg-[#574A24] px-3 py-1 font-sans text-xs font-bold uppercase tracking-wider text-[#FAE8B4] shadow-md">
                    Chef&apos;s Signature
                  </span>
                  <span className="absolute bottom-4 right-4 rounded-xl border border-[#CBBD93]/60 bg-[#2A2418]/90 px-3.5 py-1.5 font-display text-xl font-bold text-[#FAE8B4] shadow-md backdrop-blur-md">
                    ₹280
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#80775C]">
                    Slow Simmered Handi
                  </span>
                  <h3 className="mt-2 font-display text-3xl font-bold text-[#2A2418] group-hover:text-[#574A24] transition-colors">
                    Royal Butter Gravy Special
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#574A24]">
                    Tender cottage cheese cubes simmered in a velvety tomato-cashew-butter
                    gravy infused with hand-pounded fenugreek and saffron. Served with
                    freshly churned white butter.
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#CBBD93]/30 pt-4">
                    <a
                      href={`${baseWhatsappUrl}?text=Hello%20New%20Punjabi%20Tadka%2C%20I%20would%20like%20to%20order%20Royal%20Butter%20Gravy%20Special%20(₹280)`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#574A24] hover:text-[#80775C] transition-colors"
                    >
                      <span>ORDER NOW</span>
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5 text-[#CBBD93]" />
                    </a>

                    <span className="text-xs font-semibold text-[#80775C]">Served with Garlic Naan</span>
                  </div>
                </div>
              </article>
            </CardTilt>
          </div>

          {/* Right: 3 Stacked Editorial Dishes */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Dish 1: Dal Makhani */}
            <CardTilt maxTilt={5} scale={1.01}>
              <div className="group flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-[#CBBD93]/40 bg-[#F7F1DF] p-4 gap-5 shadow-sm transition-all hover:border-[#574A24] hover:shadow-md">
                <div className="relative aspect-square sm:size-32 shrink-0 overflow-hidden rounded-xl bg-[#2A2418]">
                  <img
                    src={thaliImage}
                    alt="Dal Makhani Handi Tadka"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#80775C]">
                        12-Hour Slow Cooked
                      </span>
                      <span className="font-display text-lg font-bold text-[#574A24]">₹240</span>
                    </div>
                    <h4 className="mt-1 font-display text-xl font-bold text-[#2A2418] group-hover:text-[#574A24]">
                      Dal Makhani Handi Tadka
                    </h4>
                    <p className="mt-1 text-xs text-[#574A24] line-clamp-2">
                      Whole black lentils slow-cooked overnight over clay tandoor embers and tempered with pure desi ghee.
                    </p>
                  </div>
                  <a
                    href={`${baseWhatsappUrl}?text=Hello%20New%20Punjabi%20Tadka%2C%20I%20would%20like%20to%20order%20Dal%20Makhani%20Handi%20Tadka%20(₹240)`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#574A24] hover:underline"
                  >
                    <span>Order Now</span>
                    <ArrowRight className="size-3 text-[#CBBD93]" />
                  </a>
                </div>
              </div>
            </CardTilt>

            {/* Dish 2: Amritsari Kulcha */}
            <CardTilt maxTilt={5} scale={1.01}>
              <div className="group flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-[#CBBD93]/40 bg-[#F7F1DF] p-4 gap-5 shadow-sm transition-all hover:border-[#574A24] hover:shadow-md">
                <div className="relative aspect-square sm:size-32 shrink-0 overflow-hidden rounded-xl bg-[#2A2418]">
                  <img
                    src={parathaImage}
                    alt="Amritsari Kulcha & Chana"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#80775C]">
                        Tandoor Specialty
                      </span>
                      <span className="font-display text-lg font-bold text-[#574A24]">₹180</span>
                    </div>
                    <h4 className="mt-1 font-display text-xl font-bold text-[#2A2418] group-hover:text-[#574A24]">
                      Amritsari Kulcha &amp; Chana
                    </h4>
                    <p className="mt-1 text-xs text-[#574A24] line-clamp-2">
                      Crispy, multi-layered tandoori kulcha stuffed with spiced potatoes, served with robust Amritsari chole.
                    </p>
                  </div>
                  <a
                    href={`${baseWhatsappUrl}?text=Hello%20New%20Punjabi%20Tadka%2C%20I%20would%20like%20to%20order%20Amritsari%20Kulcha%20and%20Chana%20(₹180)`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#574A24] hover:underline"
                  >
                    <span>Order Now</span>
                    <ArrowRight className="size-3 text-[#CBBD93]" />
                  </a>
                </div>
              </div>
            </CardTilt>

            {/* Dish 3: Tandoori Paneer Tikka */}
            <CardTilt maxTilt={5} scale={1.01}>
              <div className="group flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-[#CBBD93]/40 bg-[#F7F1DF] p-4 gap-5 shadow-sm transition-all hover:border-[#574A24] hover:shadow-md">
                <div className="relative aspect-square sm:size-32 shrink-0 overflow-hidden rounded-xl bg-[#2A2418]">
                  <img
                    src={heroImage}
                    alt="Tandoori Paneer Tikka"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#80775C]">
                        Clay Oven Charred
                      </span>
                      <span className="font-display text-lg font-bold text-[#574A24]">₹220</span>
                    </div>
                    <h4 className="mt-1 font-display text-xl font-bold text-[#2A2418] group-hover:text-[#574A24]">
                      Tandoori Paneer Tikka
                    </h4>
                    <p className="mt-1 text-xs text-[#574A24] line-clamp-2">
                      Fresh cottage cheese cubes marinated in spiced hung yoghurt and roasted to smoky tenderness over charcoal embers.
                    </p>
                  </div>
                  <a
                    href={`${baseWhatsappUrl}?text=Hello%20New%20Punjabi%20Tadka%2C%20I%20would%20like%20to%20order%20Tandoori%20Paneer%20Tikka%20(₹220)`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#574A24] hover:underline"
                  >
                    <span>Order Now</span>
                    <ArrowRight className="size-3 text-[#CBBD93]" />
                  </a>
                </div>
              </div>
            </CardTilt>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   3. OUR MENU (Horizontal Pill Navigation & Staggered Cards)
   ───────────────────────────────────────────────────────────── */
const menuCategories = [
  "Starters",
  "Tandoor",
  "Punjabi Specials",
  "Main Course",
  "Breads",
  "Rice",
  "Drinks",
  "Desserts",
] as const;

type MenuCategory = (typeof menuCategories)[number];

const menuItemsData: Record<
  MenuCategory,
  Array<{
    name: string;
    description: string;
    price: string;
    image: string;
    isVeg: boolean;
    badge?: string;
  }>
> = {
  Starters: [
    {
      name: "Paneer Tikka Shashlik",
      description:
        "Tender paneer cubes marinated in spiced hung yoghurt and roasted with bell peppers and onions.",
      price: "₹220",
      image: paneerImage,
      isVeg: true,
      badge: "Clay Tandoor",
    },
    {
      name: "Crispy Golden Corn",
      description:
        "Sweet corn kernels tossed with crunchy bell peppers, cracked pepper, and fresh lemon juice.",
      price: "₹180",
      image: heroImage,
      isVeg: true,
    },
    {
      name: "Dahi Ke Kebab",
      description:
        "Melt-in-mouth kebabs crafted from hung spiced curd and fresh herbs with a crisp golden crust.",
      price: "₹210",
      image: thaliImage,
      isVeg: true,
      badge: "Chef Choice",
    },
    {
      name: "Punjabi Samosa Chaat",
      description:
        "Crushed crisp samosas topped with spiced chole, sweet tamarind, and cool mint chutney.",
      price: "₹110",
      image: parathaImage,
      isVeg: true,
    },
  ],
  Tandoor: [
    {
      name: "Tandoori Malai Chaap",
      description:
        "Soya chaap marinated in rich cashew cream, cardamom, and gentle spices roasted to perfection.",
      price: "₹230",
      image: heroImage,
      isVeg: true,
      badge: "Must Try",
    },
    {
      name: "Bharwan Tandoori Aloo",
      description:
        "Scooped potato shells stuffed with spiced paneer, dry fruits, and roasted over charcoal.",
      price: "₹190",
      image: parathaImage,
      isVeg: true,
    },
    {
      name: "Mushroom Tikka Duet",
      description:
        "Fresh button mushrooms stuffed with spiced cottage cheese and charred in the clay oven.",
      price: "₹220",
      image: paneerImage,
      isVeg: true,
    },
    {
      name: "Tandoori Achari Chaap",
      description:
        "Zesty pickle-spiced soya chaap charred over blazing tandoor charcoal embers.",
      price: "₹220",
      image: chanaImage,
      isVeg: true,
    },
  ],
  "Punjabi Specials": [
    {
      name: "Special Punjabi Royal Thali",
      description:
        "Grand royal feast: Shahi paneer, dal makhani, seasonal sabzi, raita, jeera rice, tandoori rotis, salad and gulab jamun.",
      price: "₹320",
      image: thaliImage,
      isVeg: true,
      badge: "Royal Thali",
    },
    {
      name: "Dal Makhani Handi Tadka",
      description:
        "Black lentils slow simmered overnight with pure butter, cream, and special Punjabi tadka.",
      price: "₹240",
      image: paneerImage,
      isVeg: true,
      badge: "Signature",
    },
    {
      name: "Amritsari Aloo Kulcha Thali",
      description:
        "Two crisp stuffed kulchas served with pindi chana, tamarind onions, and fresh white butter.",
      price: "₹200",
      image: parathaImage,
      isVeg: true,
    },
    {
      name: "Paneer Lababdar Special",
      description:
        "Grated and cubed cottage cheese simmered in spicy tomato gravy with chopped onions.",
      price: "₹250",
      image: heroImage,
      isVeg: true,
    },
  ],
  "Main Course": [
    {
      name: "Shahi Paneer Royal",
      description:
        "Soft paneer cubes in a rich tomato, cashew, and melon seed cream gravy with saffron aroma.",
      price: "₹240",
      image: paneerImage,
      isVeg: true,
      badge: "Bestseller",
    },
    {
      name: "Kadhai Paneer Punjabi Style",
      description:
        "Cottage cheese and bell peppers wok-tossed with freshly crushed coriander and cumin.",
      price: "₹230",
      image: heroImage,
      isVeg: true,
    },
    {
      name: "Robust Chana Masala",
      description:
        "Chickpeas cooked in dark roasted onion gravy with dried pomegranate and ginger juliennes.",
      price: "₹180",
      image: chanaImage,
      isVeg: true,
    },
    {
      name: "Malai Kofta Dilbahar",
      description:
        "Cottage cheese and potato dumplings simmered in a velvety cashew and saffron sauce.",
      price: "₹240",
      image: thaliImage,
      isVeg: true,
    },
  ],
  Breads: [
    {
      name: "Butter Garlic Naan",
      description:
        "Refined flour bread baked in the tandoor and brushed generously with roasted garlic butter.",
      price: "₹60",
      image: heroImage,
      isVeg: true,
      badge: "Hot Favourite",
    },
    {
      name: "Amritsari Aloo Pyaaz Kulcha",
      description:
        "Crispy flaky layered tandoori bread filled with spiced potato and onion mix.",
      price: "₹80",
      image: parathaImage,
      isVeg: true,
    },
    {
      name: "Lachha Paratha Desi Ghee",
      description:
        "Multi-layered whole wheat flatbread brushed with pure desi ghee.",
      price: "₹50",
      image: thaliImage,
      isVeg: true,
    },
    {
      name: "Tandoori Roti Plain & Butter",
      description:
        "Traditional clay oven baked whole wheat rotis served piping hot.",
      price: "₹20–₹25",
      image: paneerImage,
      isVeg: true,
    },
  ],
  Rice: [
    {
      name: "Royal Veg Dum Biryani",
      description:
        "Layered basmati rice with marinated seasonal vegetables, saffron milk, and fried onions.",
      price: "₹220",
      image: heroImage,
      isVeg: true,
      badge: "Aromatic",
    },
    {
      name: "Fragrant Jeera Rice",
      description:
        "Long-grain basmati rice tempered with royal cumin seeds and pure desi ghee.",
      price: "₹130",
      image: thaliImage,
      isVeg: true,
    },
    {
      name: "Kashmiri Sweet Pulao",
      description:
        "Mildly sweet basmati rice tossed with dry fruits, saffron, and fresh fruit bits.",
      price: "₹210",
      image: paneerImage,
      isVeg: true,
    },
    {
      name: "Steamed Basmati Rice",
      description: "Fluffy steamed long-grain Dehraduni basmati rice.",
      price: "₹110",
      image: chanaImage,
      isVeg: true,
    },
  ],
  Drinks: [
    {
      name: "Authentic Tandoori Kulhad Chai",
      description:
        "Freshly brewed cardamom and ginger tea poured hot into red-hot terracotta cups for an earthy aroma.",
      price: "₹40",
      image: kulhadChaiCafe,
      isVeg: true,
      badge: "Signature",
    },
    {
      name: "Punjabi Sweet Lassi (Makkhan Wali)",
      description:
        "Chilled creamy curd whisked with sugar, saffron, and topped with a dollop of fresh white butter.",
      price: "₹80",
      image: thaliImage,
      isVeg: true,
      badge: "Must Try",
    },
    {
      name: "Salted Masala Chaas",
      description:
        "Refreshing spiced buttermilk with roasted cumin, mint, and black rock salt.",
      price: "₹50",
      image: chanaImage,
      isVeg: true,
    },
    {
      name: "Fresh Nimbu Soda Sweet & Salt",
      description:
        "Sparkling thirst-quencher with freshly squeezed lemon juice and roasted spices.",
      price: "₹60",
      image: heroImage,
      isVeg: true,
    },
  ],
  Desserts: [
    {
      name: "Hot Gulab Jamun with Rabri",
      description:
        "Warm khoya dumplings soaked in rose cardamom syrup topped with thickened rabri.",
      price: "₹90",
      image: thaliImage,
      isVeg: true,
      badge: "Sweet Indulgence",
    },
    {
      name: "Kesar Pista Rasmalai",
      description:
        "Soft flattened cottage cheese cakes soaked in saffron-cardamom flavoured milk.",
      price: "₹100",
      image: paneerImage,
      isVeg: true,
    },
    {
      name: "Desi Ghee Moong Dal Halwa",
      description:
        "Rich roasted yellow lentil pudding simmered with pure ghee and dry fruits.",
      price: "₹120",
      image: heroImage,
      isVeg: true,
    },
    {
      name: "Matka Kulfi Special",
      description:
        "Traditional dense Indian ice cream infused with pistachios, almonds and saffron.",
      price: "₹80",
      image: parathaImage,
      isVeg: true,
    },
  ],
};

function MenuSection() {
  const [activeCategory, setActiveCategory] =
    useState<MenuCategory>("Punjabi Specials");
  const [animating, setAnimating] = useState(false);

  const handleCategoryChange = (cat: MenuCategory) => {
    if (cat === activeCategory) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveCategory(cat);
      setAnimating(false);
    }, 180);
  };

  return (
    <section
      id="menu"
      className="relative border-t border-[#CBBD93]/30 bg-[#F7F1DF] px-6 py-24 sm:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-[#CBBD93]" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#80775C]">
                Culinary Repertoire
              </p>
              <span className="h-px w-8 bg-[#CBBD93]" />
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#2A2418] sm:text-5xl lg:text-6xl">
              OUR MENU
            </h2>
            <p className="mt-3 max-w-xl text-base text-[#80775C]">
              From the tandoor to the table. Click any dish to order on WhatsApp.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="bronze-gradient-btn font-bold uppercase tracking-wider shadow-md"
          >
            <a href={phoneUrl}>
              <Phone className="mr-2 size-4 text-[#FAE8B4]" /> Direct Call: 094650 78750
            </a>
          </Button>
        </div>

        {/* Horizontal Category Navigation Tabs */}
        <div
          className="mt-12 flex gap-3 overflow-x-auto pb-4 scrollbar-none"
          role="tablist"
          aria-label="Menu Categories"
        >
          {menuCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`group relative whitespace-nowrap rounded-2xl px-6 py-3.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? "bg-[#574A24] text-[#FAE8B4] shadow-lg scale-[1.02]"
                    : "border border-[#CBBD93]/60 bg-[#FFFFFF] text-[#574A24] hover:bg-[#E7D8B2]/40"
                }`}
              >
                <span>{cat}</span>
                {isActive && (
                  <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#CBBD93] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Menu Cards Container with Staggered Transition */}
        <div
          className={`mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-300 ${
            animating
              ? "opacity-40 scale-[0.98] blur-[1px]"
              : "opacity-100 scale-100 blur-0"
          }`}
        >
          {menuItemsData[activeCategory].map((item, index) => (
            <CardTilt key={item.name} maxTilt={8} scale={1.03}>
              <div
                style={{ animationDelay: `${index * 50}ms` }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#CBBD93]/40 bg-[#FFFFFF] shadow-md transition-all duration-400 ease-out hover:border-[#574A24] hover:shadow-xl"
              >
                {/* Image with Smooth Zoom */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F7F1DF]">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A2418]/50 via-transparent to-transparent opacity-60" />

                  {item.badge && (
                    <Badge className="absolute left-3 top-3 border border-[#CBBD93]/60 bg-[#2A2418]/90 text-[0.62rem] font-bold uppercase tracking-wider text-[#FAE8B4] shadow-sm backdrop-blur-sm">
                      {item.badge}
                    </Badge>
                  )}

                  <span className="absolute bottom-3 right-3 rounded-lg border border-[#CBBD93]/40 bg-[#2A2418]/90 px-3 py-1 font-display text-base font-bold text-[#FAE8B4] shadow-md backdrop-blur-sm">
                    {item.price}
                  </span>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2">
                    <span className="flex size-3.5 items-center justify-center rounded-sm border border-[#574A24]/40 bg-[#FFFFFF]">
                      <span className="size-2 rounded-full bg-[#574A24]" />
                    </span>
                    <span className="text-[0.65rem] font-bold uppercase tracking-wider text-[#80775C]">
                      Vegetarian
                    </span>
                  </div>

                  <h3 className="mt-2 font-display text-xl font-bold leading-tight text-[#2A2418] transition-colors group-hover:text-[#574A24]">
                    {item.name}
                  </h3>

                  <p className="mt-2 flex-1 text-xs leading-relaxed text-[#80775C]">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-[#CBBD93]/30 pt-3.5">
                    <a
                      href={`${baseWhatsappUrl}?text=Hello%20New%20Punjabi%20Tadka%2C%20I%20would%20like%20to%20order%20${encodeURIComponent(item.name)}%20(${item.price})`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#574A24] transition-colors hover:text-[#80775C]"
                    >
                      <span>ORDER NOW</span>
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1 text-[#CBBD93]" />
                    </a>

                    <a
                      href={`${baseWhatsappUrl}?text=Hello%20New%20Punjabi%20Tadka%2C%20I%20would%20like%20to%20order%20${encodeURIComponent(item.name)}%20(${item.price})`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#80775C] hover:text-[#574A24]"
                    >
                      <MessageCircle className="size-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </CardTilt>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   4. CHAI BAR SECTION (Dedicated Luxury Mini-Brand Experience)
   Dark Bronze Mood: #2A2418 / #574A24 / #FAE8B4 / #CBBD93
   ───────────────────────────────────────────────────────────── */
const chaiMenuData = [
  {
    name: "Tandoori Kulhad Chai",
    subtitle: "Clay Terracotta Baked",
    description: "Poured hot into red-hot terracotta kulhads for an intoxicating mineral earth fragrance.",
    price: "₹40",
    image: kulhadChaiCafe,
  },
  {
    name: "Royal Kesar Chai",
    subtitle: "Kashmiri Saffron Infused",
    description: "Slow-brewed rich whole milk tea steeped with Kashmiri saffron threads and green cardamom.",
    price: "₹50",
    image: grandArchDay,
  },
  {
    name: "Adrak Masala Chai",
    subtitle: "Fresh Crushed Ginger",
    description: "Freshly crushed ginger root and robust hand-ground whole spices simmered to a spicy warmth.",
    price: "₹35",
    image: heroImage,
  },
  {
    name: "Shahi Elaichi Chai",
    subtitle: "Fragrant Cardamom Pods",
    description: "Elegantly aromatic tea perfumed with crushed green cardamom seeds and creamy dairy.",
    price: "₹35",
    image: chanaImage,
  },
  {
    name: "Desi Highway Kadak Chai",
    subtitle: "Robust Morning Brew",
    description: "Bold dark-leaf Assam tea brewed strong and sweetened to wake up tired highway travellers.",
    price: "₹30",
    image: parathaImage,
  },
  {
    name: "Cold Coffee & Iced Chai",
    subtitle: "Chilled Garden Refresher",
    description: "Thick velvety blended cold coffee or iced spiced tea served cold in the courtyard garden.",
    price: "₹70",
    image: courtyardDay,
  },
];

function ChaiBarSection() {
  return (
    <section
      id="chaibar"
      className="relative border-t border-[#CBBD93]/30 bg-[#2A2418] px-6 py-24 sm:px-10 lg:py-32 text-[#FAE8B4] overflow-hidden"
    >
      <div className="linen-texture absolute inset-0 opacity-15 pointer-events-none" />

      <div className="mx-auto max-w-[1440px] relative z-10">
        {/* Section Title & Subheading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#CBBD93]/25 pb-10">
          <div>
            <div className="mb-3 inline-flex items-center gap-2">
              <Coffee className="size-4 text-[#CBBD93]" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#CBBD93]">
                The Bond of Love • Kulhad Chai Garden
              </p>
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-[#FFFFFF] sm:text-6xl lg:text-7xl">
              CHAI BAR
            </h2>
            <p className="mt-2 font-display text-xl sm:text-2xl italic text-[#FAE8B4]">
              Slow sips. Warm moments. Where every cup feels like home.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              asChild
              size="lg"
              className="bronze-gradient-btn font-bold uppercase tracking-widest text-[#FAE8B4] shadow-xl"
            >
              <a
                href={`${baseWhatsappUrl}?text=Hello%20New%20Punjabi%20Tadka%2C%20I%20would%20like%20to%20order%20from%20the%20Chai%20Bar.`}
                target="_blank"
                rel="noreferrer"
              >
                <span>Order at Chai Bar</span>
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Chai Showcase: Large Garden Photo Banner (Left) + 6 Chai Cards (Right) */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 items-center">
          {/* Real Photo of Kulhad Chai Cafe Garden Lounge */}
          <div className="lg:col-span-5 relative">
            <CardTilt maxTilt={6} scale={1.02}>
              <div className="relative overflow-hidden rounded-3xl border-2 border-[#CBBD93]/50 bg-[#342C1D] shadow-2xl">
                <img
                  src={kulhadChaiCafe}
                  alt="Kulhad Chai cafe storefront and garden lounge in Babri"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2418] via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-[#FAE8B4]">
                  <Badge className="border border-[#CBBD93]/60 bg-[#2A2418]/90 text-xs font-bold uppercase tracking-widest text-[#FAE8B4] backdrop-blur-md">
                    Open-Air Garden Patio
                  </Badge>
                  <h3 className="mt-2 font-display text-2xl font-bold text-[#FFFFFF]">
                    Tandoori Kulhad Chai &amp; Lawn Swings
                  </h3>
                  <p className="mt-1 text-xs text-[#CBBD93]">
                    Steaming terracotta cups served under open blue skies and starry evenings.
                  </p>
                </div>
              </div>
            </CardTilt>
          </div>

          {/* 6 Specialty Chai Cards Grid */}
          <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
            {chaiMenuData.map((chai) => (
              <CardTilt key={chai.name} maxTilt={6} scale={1.02}>
                <div className="group relative flex flex-col justify-between rounded-2xl border border-[#CBBD93]/30 bg-[#342C1D]/80 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-[#CBBD93] hover:bg-[#342C1D]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#CBBD93]">
                        {chai.subtitle}
                      </span>
                      <span className="font-display text-lg font-bold text-[#FAE8B4]">
                        {chai.price}
                      </span>
                    </div>

                    <h4 className="mt-1 font-display text-xl font-bold text-[#FFFFFF] group-hover:text-[#FAE8B4] transition-colors">
                      {chai.name}
                    </h4>

                    <p className="mt-2 text-xs leading-relaxed text-[#FAE8B4]/80">
                      {chai.description}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-[#CBBD93]/20 pt-3">
                    <a
                      href={`${baseWhatsappUrl}?text=Hello%20New%20Punjabi%20Tadka%2C%20I%20would%20like%20to%20order%20${encodeURIComponent(chai.name)}%20(${chai.price})`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#CBBD93] hover:text-[#FAE8B4] transition-colors"
                    >
                      <span>Order</span>
                      <ArrowRight className="size-3 text-[#CBBD93]" />
                    </a>

                    <div className="flex items-center gap-1 text-[10px] font-semibold text-[#FAE8B4]/60">
                      <Coffee className="size-3 text-[#CBBD93]" />
                      <span>Fresh Brew</span>
                    </div>
                  </div>
                </div>
              </CardTilt>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   5. FROM OUR TANDOOR ("FIRE. CLAY. FLAVOUR.")
   ───────────────────────────────────────────────────────────── */
function EditorialTandoorSection() {
  return (
    <section className="relative border-t border-[#CBBD93]/30 bg-[#F7F1DF] px-6 py-24 sm:px-10 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Full-width Photography with Steam */}
          <div className="relative lg:col-span-7">
            <CardTilt maxTilt={5} scale={1.02}>
              <div className="relative overflow-hidden rounded-3xl border-2 border-[#CBBD93]/50 shadow-2xl">
                <img
                  src={paneerImage}
                  alt="Freshly slapped naan and bubbling gravy from our clay tandoor"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2418]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-[#FFFFFF]">
                  <span className="inline-block rounded-md border border-[#CBBD93]/60 bg-[#574A24] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FAE8B4]">
                    Clay Oven Mastery
                  </span>
                  <p className="mt-2 font-display text-2xl font-bold text-[#FFFFFF]">
                    Piping Hot Garlic Naan &amp; Charcoal Simmered Gravy
                  </p>
                </div>
              </div>
            </CardTilt>
          </div>

          {/* Editorial Text */}
          <div className="lg:col-span-5">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-px w-6 bg-[#CBBD93]" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#80775C]">
                Tandoori Craft
              </p>
              <span className="h-px w-6 bg-[#CBBD93]" />
            </div>

            <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-[#2A2418] sm:text-6xl">
              FIRE. <br />
              CLAY. <br />
              <span className="text-[#574A24]">FLAVOUR.</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#574A24]">
              Hand-stretched breads, smoky tandoori flavours and traditional cooking
              over glowing embers. Watch our master ustaads slap freshly stretched
              naans against the searing terracotta walls of the tandoor.
            </p>

            <div className="mt-8">
              <a
                href="#menu"
                className="group inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-widest text-[#574A24] hover:text-[#80775C] transition-colors"
              >
                <span>Discover the Flavour</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-2 text-[#CBBD93]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   6. PUNJABI HERITAGE ("ROOTED IN PUNJAB")
   ───────────────────────────────────────────────────────────── */
function PunjabiHeritageSection() {
  return (
    <section
      id="heritage"
      className="relative overflow-hidden border-t border-[#CBBD93]/30 bg-[#F7F1DF] px-6 py-24 sm:px-10 lg:py-32"
    >
      <div className="haveli-pattern absolute inset-0 opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#CBBD93]" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#80775C]">
              Soil, Tradition &amp; Culture
            </p>
            <span className="h-px w-8 bg-[#CBBD93]" />
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#2A2418] sm:text-5xl lg:text-6xl">
            ROOTED IN <span className="text-[#574A24]">PUNJAB</span>
          </h2>
          <p className="mt-4 text-base text-[#80775C]">
            The golden glow of wheat fields, the ancient rhythm of the Dhol, the
            fragrance of smoking earthenware, and the warmth of the Punjabi hearth.
          </p>
        </div>

        {/* 3 Heritage Cultural Detail Pillars */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          <CardTilt maxTilt={6} scale={1.02}>
            <div className="h-full rounded-3xl border border-[#CBBD93]/50 bg-[#FFFFFF] p-8 shadow-sm transition-all hover:border-[#574A24] hover:shadow-xl">
              <div className="grid size-14 place-items-center rounded-2xl bg-[#F7F1DF] text-[#574A24]">
                <Wheat className="size-7 text-[#574A24]" />
              </div>
              <h4 className="mt-6 font-display text-2xl font-bold text-[#2A2418]">
                Golden Wheat &amp; Farms
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-[#80775C]">
                We honour Punjab&apos;s agrarian soul by sourcing stone-ground flours
                and unadulterated farm dairy from local growers.
              </p>
            </div>
          </CardTilt>

          <CardTilt maxTilt={6} scale={1.02}>
            <div className="h-full rounded-3xl border border-[#CBBD93]/50 bg-[#FFFFFF] p-8 shadow-sm transition-all hover:border-[#574A24] hover:shadow-xl">
              <div className="grid size-14 place-items-center rounded-2xl bg-[#F7F1DF] text-[#574A24]">
                <Flame className="size-7 text-[#574A24]" />
              </div>
              <h4 className="mt-6 font-display text-2xl font-bold text-[#2A2418]">
                Clay Tandoor Pottery
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-[#80775C]">
                Natural earthenware terracotta imparts the mineral fragrance (ਸੁਆਦ ਖੁਸ਼ਬੂ)
                cherished across authentic Punjabi cooking.
              </p>
            </div>
          </CardTilt>

          <CardTilt maxTilt={6} scale={1.02}>
            <div className="h-full rounded-3xl border border-[#CBBD93]/50 bg-[#FFFFFF] p-8 shadow-sm transition-all hover:border-[#574A24] hover:shadow-xl">
              <div className="grid size-14 place-items-center rounded-xl bg-[#F7F1DF] text-[#574A24]">
                <Heart className="size-7 text-[#574A24]" />
              </div>
              <h4 className="mt-6 font-display text-2xl font-bold text-[#2A2418]">
                Maan Satkaar
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-[#80775C]">
                Guests are treated with regal respect. In Punjab, a meal is served
                with generosity, warmth, and genuine smiles.
              </p>
            </div>
          </CardTilt>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   7. GALLERY (Editorial Masonry with Category Filters)
   ───────────────────────────────────────────────────────────── */
type GalleryCategory = "ALL" | "FOOD" | "INTERIOR" | "CHAI BAR" | "OUTDOOR" | "BANQUET";

const galleryCategories: GalleryCategory[] = [
  "ALL",
  "FOOD",
  "INTERIOR",
  "CHAI BAR",
  "OUTDOOR",
  "BANQUET",
];

const galleryPhotos = [
  {
    src: grandArchDay,
    title: "Grand Arched Entrance & Jali Work",
    subtitle: "Mughal & Punjabi Heritage Gateway",
    category: "OUTDOOR" as GalleryCategory,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: emeraldArtImage,
    title: "Emerald Velvet VIP Lounges",
    subtitle: "Cultural Mirror Artwork & Booths",
    category: "INTERIOR" as GalleryCategory,
    span: "md:col-span-1 md:row-span-2",
  },
  {
    src: kulhadChaiCafe,
    title: "Kulhad Chai Cafe & Garden Lawn",
    subtitle: "Open Air Dining Patio",
    category: "CHAI BAR" as GalleryCategory,
    span: "md:col-span-1",
  },
  {
    src: nightPanorama,
    title: "Night Panorama & Fairylights",
    subtitle: "Warm Evening Illumination",
    category: "OUTDOOR" as GalleryCategory,
    span: "md:col-span-2",
  },
  {
    src: grandHallImage,
    title: "Celebration Hall & Stage",
    subtitle: "100+ Seater Party Banquet",
    category: "BANQUET" as GalleryCategory,
    span: "md:col-span-1",
  },
  {
    src: thaliImage,
    title: "Royal Punjabi Thali Spread",
    subtitle: "Multi-Course Traditional Dawat",
    category: "FOOD" as GalleryCategory,
    span: "md:col-span-1",
  },
  {
    src: courtyardDay,
    title: "Spacious Courtyard Plaza",
    subtitle: "Paved Highway Parking Plaza",
    category: "OUTDOOR" as GalleryCategory,
    span: "md:col-span-2",
  },
  {
    src: royalPeacockImage,
    title: "Royal Peacock Glass Lounge",
    subtitle: "Rose Velvet Tufted Booths",
    category: "INTERIOR" as GalleryCategory,
    span: "md:col-span-1",
  },
];

function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("ALL");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeCategory === "ALL"
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === activeCategory);

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  }, [lightboxIndex, filteredPhotos.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length
      );
    }
  }, [lightboxIndex, filteredPhotos.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  return (
    <section
      id="gallery"
      className="relative border-t border-[#CBBD93]/30 bg-[#FFFFFF] px-6 py-24 sm:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#CBBD93]" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#80775C]">
              Visual Chronicle
            </p>
            <span className="h-px w-8 bg-[#CBBD93]" />
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#2A2418] sm:text-5xl lg:text-6xl">
            RESTAURANT GALLERY
          </h2>
          <p className="mt-3 text-base text-[#80775C]">
            Explore real photography of our Babri restaurant, Kulhad Chai garden,
            emerald dining lounges, and celebration banquet.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all ${
                  isActive
                    ? "bg-[#574A24] text-[#FAE8B4] shadow-md"
                    : "border border-[#CBBD93]/50 bg-[#F7F1DF] text-[#574A24] hover:bg-[#E7D8B2]/50"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Masonry Grid */}
        <div className="mt-12 grid auto-rows-[220px] gap-5 sm:auto-rows-[260px] md:grid-cols-3 lg:grid-cols-4">
          {filteredPhotos.map((item, index) => (
            <button
              key={`${item.title}-${index}`}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className={`group relative overflow-hidden rounded-3xl border border-[#CBBD93]/50 text-left shadow-md transition-all duration-400 hover:border-[#574A24] hover:shadow-2xl focus:outline-none ${item.span}`}
              aria-label={`View photo: ${item.title}`}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-108"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2418]/90 via-[#2A2418]/30 to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-95" />

              <div className="absolute inset-x-0 bottom-0 p-5 text-[#FAE8B4]">
                <span className="inline-block rounded-md border border-[#CBBD93]/40 bg-[#2A2418]/85 px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-widest text-[#CBBD93] backdrop-blur-sm">
                  {item.category}
                </span>
                <h3 className="mt-1.5 font-display text-xl font-bold leading-tight text-[#FFFFFF] transition-colors group-hover:text-[#FAE8B4]">
                  {item.title}
                </h3>
                <p className="mt-0.5 line-clamp-1 text-xs text-[#CBBD93]">
                  {item.subtitle}
                </p>
              </div>

              <div className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-[#CBBD93]/60 bg-[#2A2418]/85 text-[#CBBD93] opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                <Maximize2 className="size-4" />
              </div>
            </button>
          ))}
        </div>

        {/* Fullscreen Lightbox */}
        <Dialog
          open={lightboxIndex !== null}
          onOpenChange={(open) => !open && setLightboxIndex(null)}
        >
          <DialogContent className="max-w-5xl border-2 border-[#CBBD93]/70 bg-[#2A2418] p-3 text-[#FAE8B4] sm:p-5 backdrop-blur-2xl">
            <DialogTitle className="sr-only">
              {lightboxIndex !== null
                ? filteredPhotos[lightboxIndex]?.title
                : "Gallery Image"}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Authentic photo from New Punjabi Tadka Restaurant in Babri
            </DialogDescription>

            {lightboxIndex !== null && (
              <div className="relative flex flex-col">
                <div className="relative flex max-h-[75vh] items-center justify-center overflow-hidden rounded-2xl bg-black/70">
                  <img
                    src={filteredPhotos[lightboxIndex]?.src}
                    alt={filteredPhotos[lightboxIndex]?.title}
                    className="max-h-[75vh] w-full object-contain animate-in fade-in zoom-in-95 duration-300"
                  />

                  <Button
                    size="icon"
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 size-12 -translate-y-1/2 rounded-full border border-[#CBBD93] bg-[#2A2418]/85 text-[#FAE8B4] hover:bg-[#574A24]"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="size-6" />
                  </Button>

                  <Button
                    size="icon"
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 size-12 -translate-y-1/2 rounded-full border border-[#CBBD93] bg-[#2A2418]/85 text-[#FAE8B4] hover:bg-[#574A24]"
                    aria-label="Next image"
                  >
                    <ChevronRight className="size-6" />
                  </Button>
                </div>

                <div className="mt-4 flex items-center justify-between px-2 text-sm">
                  <div>
                    <h4 className="font-display text-2xl font-bold text-[#FAE8B4]">
                      {filteredPhotos[lightboxIndex]?.title}
                    </h4>
                    <p className="text-xs text-[#CBBD93]">
                      {filteredPhotos[lightboxIndex]?.subtitle}
                    </p>
                  </div>
                  <span className="rounded-md border border-[#CBBD93]/40 px-3 py-1 text-xs font-bold text-[#FAE8B4]">
                    {lightboxIndex + 1} / {filteredPhotos.length}
                  </span>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   8. REVIEWS (Luxury Testimonial Carousel)
   ───────────────────────────────────────────────────────────── */
const reviewsData = [
  {
    name: "Harpreet Singh Bajwa",
    date: "February 2026",
    rating: 5,
    text: "The best authentic Punjabi food on Gurdaspur–Batala Road! The Dal Makhani and Paneer Butter Masala are extraordinary. The new emerald lounges and grand arch give a luxury 5-star hotel feel at honest prices.",
    avatar: "H",
  },
  {
    name: "Jasleen Kaur Sandhu",
    date: "January 2026",
    rating: 5,
    text: "We celebrated my parents' 25th anniversary in their celebration banquet hall. The staff decorated the stage beautifully and the food was piping hot and delicious. Highly recommended for family events!",
    avatar: "J",
  },
  {
    name: "Gurdev Sharma",
    date: "February 2026",
    rating: 5,
    text: "Their Kulhad Chai in the open garden area is simply unbeatable after a long drive. Fresh clay cup aroma, clean seating with swings, and polite service. A true landmark of Babri.",
    avatar: "G",
  },
  {
    name: "Amanpreet Dhillon",
    date: "December 2025",
    rating: 5,
    text: "Crispy Amritsari Kulcha with rich chana and pure white butter. Everything smells and tastes like authentic Punjab. Outstanding cleanliness and family atmosphere.",
    avatar: "A",
  },
];

function CustomerReviewsSection() {
  const [reviewIdx, setReviewIdx] = useState(0);

  const nextReview = () => {
    setReviewIdx((prev) => (prev + 1) % reviewsData.length);
  };

  const prevReview = () => {
    setReviewIdx((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  const current = reviewsData[reviewIdx];

  return (
    <section
      id="reviews"
      className="relative border-t border-[#CBBD93]/30 bg-[#F7F1DF] px-6 py-24 sm:px-10 lg:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#CBBD93]" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#80775C]">
              Guest Testimonials
            </p>
            <span className="h-px w-8 bg-[#CBBD93]" />
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#2A2418] sm:text-5xl lg:text-6xl">
            WHAT OUR GUESTS SAY
          </h2>
        </div>

        {/* Carousel Card */}
        <CardTilt maxTilt={5} scale={1.01} className="mt-14">
          <div className="relative rounded-3xl border border-[#CBBD93]/50 bg-[#FFFFFF] p-8 shadow-xl sm:p-14">
            <div className="flex items-center justify-between">
              <Quote className="size-12 text-[#CBBD93]/60" />
              {/* 5 Stars */}
              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 fill-[#574A24] text-[#574A24]"
                  />
                ))}
              </div>
            </div>

            <p className="mt-8 font-display text-xl font-medium italic leading-relaxed text-[#2A2418] sm:text-2xl">
              &ldquo;{current.text}&rdquo;
            </p>

            <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[#CBBD93]/30 pt-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3.5">
                <div className="grid size-12 place-items-center rounded-full border border-[#CBBD93] bg-[#574A24] font-display text-lg font-bold text-[#FAE8B4]">
                  {current.avatar}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-[#2A2418]">
                    {current.name}
                  </h3>
                  <p className="text-xs font-medium text-[#80775C]">
                    Verified Diner • {current.date}
                  </p>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevReview}
                  className="size-11 rounded-full border border-[#CBBD93] bg-[#FFFFFF] text-[#574A24] hover:bg-[#574A24] hover:text-[#FAE8B4]"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="size-5" />
                </Button>
                <span className="text-xs font-bold text-[#80775C]">
                  {reviewIdx + 1} / {reviewsData.length}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextReview}
                  className="size-11 rounded-full border border-[#CBBD93] bg-[#FFFFFF] text-[#574A24] hover:bg-[#574A24] hover:text-[#FAE8B4]"
                  aria-label="Next review"
                >
                  <ChevronRight className="size-5" />
                </Button>
              </div>
            </div>

            {/* Progress indicator */}
            <div className="mt-6 h-1 w-full rounded-full bg-[#CBBD93]/25 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#574A24] to-[#CBBD93] transition-all duration-300"
                style={{ width: `${((reviewIdx + 1) / reviewsData.length) * 100}%` }}
              />
            </div>
          </div>
        </CardTilt>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   9. LOCATION & FINAL STATEMENT ("COME HUNGRY. LEAVE HAPPY.")
   ───────────────────────────────────────────────────────────── */
function LocationAndContactSection() {
  return (
    <section
      id="contact"
      className="relative border-t border-[#CBBD93]/30 bg-[#FFFFFF] px-6 py-24 sm:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Final Statement Banner */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full border border-[#CBBD93] bg-[#F7F1DF] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[#574A24]">
            Punjab’s Highway Landmark
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold uppercase tracking-tight text-[#2A2418] sm:text-6xl md:text-7xl">
            COME HUNGRY. <br />
            <span className="text-[#574A24]">LEAVE HAPPY.</span>
          </h2>
          <p className="mt-3 text-base text-[#80775C]">
            We look forward to welcoming you and your family in Babri.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-4">
            {/* Address */}
            <div className="flex items-start gap-4 rounded-2xl border border-[#CBBD93]/40 bg-[#F7F1DF] p-5 shadow-sm">
              <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#FFFFFF] text-[#574A24]">
                <MapPin className="size-6 text-[#574A24]" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#2A2418]">
                  Restaurant Address
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#574A24]">
                  Gurdaspur to Batala Road, Opposite Mahindra Car Showroom,
                  Babri, Punjab 143520
                </p>
              </div>
            </div>

            {/* Timings */}
            <div className="flex items-start gap-4 rounded-2xl border border-[#CBBD93]/40 bg-[#F7F1DF] p-5 shadow-sm">
              <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#FFFFFF] text-[#574A24]">
                <Clock className="size-6 text-[#574A24]" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#2A2418]">
                  Opening Hours
                </h3>
                <p className="mt-1 text-sm font-semibold text-[#2A2418]">
                  Open 7 Days a Week: 10:00 AM – 11:30 PM
                </p>
                <p className="text-xs text-[#80775C]">
                  Breakfast, Lunch, Evening Chai Bar &amp; Late-Night Dining
                </p>
              </div>
            </div>

            {/* Phone & Dine-in Mode */}
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={phoneUrl}
                className="flex items-center gap-3.5 rounded-2xl border border-[#CBBD93]/40 bg-[#F7F1DF] p-4 transition-all hover:border-[#574A24]"
              >
                <div className="grid size-10 place-items-center rounded-xl bg-[#FFFFFF] text-[#574A24]">
                  <Phone className="size-5 text-[#574A24]" />
                </div>
                <div>
                  <span className="block text-[0.62rem] font-bold uppercase tracking-wider text-[#80775C]">
                    Call Us Directly
                  </span>
                  <span className="font-display text-base font-bold text-[#2A2418]">
                    094650 78750
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3.5 rounded-2xl border border-[#CBBD93]/40 bg-[#F7F1DF] p-4">
                <div className="grid size-10 place-items-center rounded-xl bg-[#FFFFFF] text-[#574A24]">
                  <UtensilsCrossed className="size-5 text-[#574A24]" />
                </div>
                <div>
                  <span className="block text-[0.62rem] font-bold uppercase tracking-wider text-[#80775C]">
                    Dining Service
                  </span>
                  <span className="font-display text-base font-bold text-[#2A2418]">
                    Dine-in &amp; Takeaway
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Button asChild className="bronze-gradient-btn">
                <a href={phoneUrl}>
                  <Phone className="mr-2 size-4" /> CALL NOW
                </a>
              </Button>
              <Button asChild variant="outline" className="border-[#CBBD93] text-[#574A24] hover:bg-[#F7F1DF]">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 size-4 text-[#25D366]" /> WHATSAPP
                </a>
              </Button>
              <Button asChild variant="outline" className="border-[#CBBD93] text-[#574A24] hover:bg-[#F7F1DF]">
                <a href={instagramUrl} target="_blank" rel="noreferrer">
                  <Instagram className="mr-2 size-4 text-[#574A24]" /> INSTAGRAM
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Map Card with Courtyard Photo */}
          <div className="lg:col-span-6">
            <CardTilt maxTilt={5} scale={1.01}>
              <div className="relative overflow-hidden rounded-3xl border border-[#CBBD93]/50 bg-[#F7F1DF] p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#80775C]">
                      Babri Highway Destination
                    </span>
                    <h3 className="font-display text-2xl font-bold text-[#2A2418]">
                      New Punjabi Tadka &amp; Chai Bar
                    </h3>
                  </div>
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#574A24] text-[#FAE8B4] shadow-md">
                    <MapPin className="size-6 text-[#FAE8B4]" />
                  </div>
                </div>

                <div className="relative mt-6 overflow-hidden rounded-2xl border border-[#CBBD93]/40">
                  <img
                    src={courtyardDay}
                    alt="Spacious courtyard and parking at New Punjabi Tadka Babri"
                    className="aspect-[16/9] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A2418]/65 via-transparent to-transparent" />

                  {/* Route Indicator Ribbon */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl bg-[#2A2418]/90 p-3 text-xs text-[#FFFFFF] backdrop-blur-md border border-[#CBBD93]/40">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-[#CBBD93] animate-ping" />
                      <span className="font-bold text-[#FAE8B4]">Gurdaspur – Batala Highway</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#CBBD93]">Opposite Mahindra</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="flex-1 bronze-gradient-btn font-bold uppercase text-[#FAE8B4] shadow-md"
                  >
                    <a href={googleMapsUrl} target="_blank" rel="noreferrer">
                      <Compass className="mr-2 size-4 text-[#FAE8B4]" /> GET DIRECTIONS
                    </a>
                  </Button>
                </div>
              </div>
            </CardTilt>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   10. FOOTER (Minimal Luxury in Deep Bronze)
   ───────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="relative border-t border-[#CBBD93]/30 bg-[#2A2418] px-6 py-16 text-[#FAE8B4] sm:px-10 lg:px-12">
      <div className="linen-texture absolute inset-0 opacity-10 pointer-events-none" />

      <div className="relative mx-auto grid max-w-[1440px] gap-12 border-b border-[#CBBD93]/20 pb-12 md:grid-cols-12">
        {/* Brand & Logo Column */}
        <div className="md:col-span-5">
          <Logo variant="horizontal" theme="dark" />

          <p className="mt-5 max-w-md text-sm leading-relaxed text-[#CBBD93]">
            Babri’s destination for royal Punjabi handi curries, fresh tandoor
            breads, open-air Kulhad Chai garden, and spacious celebration hall.
            Experience the real taste of Punjab.
          </p>

          <div className="mt-4 flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#CBBD93]">
            <span>Authentic</span>
            <span>•</span>
            <span>Pure Vegetarian</span>
            <span>•</span>
            <span>Highway Landmark</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3">
          <h4 className="font-display text-lg font-bold text-[#FAE8B4]">
            Navigation
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-[#CBBD93]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-[#FAE8B4]"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Hours */}
        <div className="md:col-span-4">
          <h4 className="font-display text-lg font-bold text-[#FAE8B4]">
            Contact &amp; Location
          </h4>
          <div className="mt-4 space-y-3 text-sm text-[#CBBD93]">
            <a
              href={phoneUrl}
              className="flex items-center gap-2 font-semibold text-[#FAE8B4] transition-colors hover:text-[#CBBD93]"
            >
              <Phone className="size-4 text-[#CBBD93]" /> 094650 78750
            </a>
            <p className="flex items-start gap-2">
              <MapPin className="mt-1 size-4 shrink-0 text-[#CBBD93]" />
              <span>
                Opposite Mahindra Car Showroom, Babri, Gurdaspur–Batala Road,
                Punjab 143520
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Clock className="size-4 text-[#CBBD93]" />
              <span>Open Daily: 10:00 AM – 11:30 PM</span>
            </p>

            <div className="pt-2">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#CBBD93] hover:text-[#FAE8B4]"
              >
                <Instagram className="size-4" /> @punjabi_tadka_restaurant06
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-8 flex max-w-[1440px] flex-col items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest text-[#CBBD93]/80 sm:flex-row">
        <p>© NEW PUNJABI TADKA RESTAURANT. ALL RIGHTS RESERVED.</p>
        <p className="font-gurmukhi font-semibold text-[#FAE8B4]">
          ਪਿੰਡਾਂ ਦਾ ਸਵਾਦ ਹੁਣ ਸ਼ਹਿਰ ਵਿੱਚ • ਬਾਬਰੀ (ਗੁਰਦਾਸਪੁਰ)
        </p>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────
   FLOATING ACTION BUTTONS (WhatsApp & Call)
   ───────────────────────────────────────────────────────────── */
function FloatingActionButtons() {
  return (
    <aside
      aria-label="Quick Communication"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
    >
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-2 rounded-full border border-[#CBBD93]/50 bg-[#25D366] px-4 py-3 text-xs font-bold text-white shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp with New Punjabi Tadka"
      >
        <MessageCircle className="size-5" />
        <span className="hidden sm:inline font-bold">WhatsApp Us</span>
      </a>

      {/* Call Button */}
      <a
        href={phoneUrl}
        className="group flex items-center gap-2 rounded-full border border-[#CBBD93]/70 bg-[#2A2418] px-4 py-3 text-xs font-bold text-[#FAE8B4] shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#574A24]"
        aria-label="Call New Punjabi Tadka Restaurant"
      >
        <Phone className="size-5 text-[#CBBD93]" />
        <span className="hidden sm:inline font-bold">094650 78750</span>
      </a>
    </aside>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN PAGE WRAPPER
   ───────────────────────────────────────────────────────────── */
function IndexPage() {
  return (
    <div className="min-h-screen bg-[#F7F1DF] font-sans text-[#2A2418] selection:bg-[#574A24] selection:text-[#FAE8B4]">
      <Preloader />
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <BrandStorySection />
      <SignatureDishesSection />
      <MenuSection />
      <ChaiBarSection />
      <EditorialTandoorSection />
      <PunjabiHeritageSection />
      <GallerySection />
      <CustomerReviewsSection />
      <LocationAndContactSection />
      <Footer />
      <FloatingActionButtons />
    </div>
  );
}
