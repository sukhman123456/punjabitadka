import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
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

// Official Provided Logo/Branding Artwork in Deep Olive Green
import officialLogo from "@/assets/logo";

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

// Extracted Clean Components
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

const googleMapsUrl = "https://maps.app.goo.gl/Q7B2fNupLPSVFJJz5";
const phoneUrl = "tel:+919465078750";
const whatsappUrl =
  "https://wa.me/919465078750?text=Hello%20New%20Punjabi%20Tadka%2C%20I%20would%20like%20to%20reserve%20a%20table%20or%20inquire%20about%20your%20menu.";
const instagramUrl = "https://www.instagram.com/punjabi_tadka_restaurant06/";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "New Punjabi Tadka Restaurant | The Real Taste of Punjab | Babri, Gurdaspur",
      },
      {
        name: "description",
        content:
          "Experience the real taste of Punjab at New Punjabi Tadka Restaurant. Warm cream, deep olive green, and antique gold aesthetic. Authentic flavours, clay tandoor cooking, and warm hospitality.",
      },
      {
        property: "og:title",
        content: "New Punjabi Tadka Restaurant - The Real Taste of Punjab",
      },
      {
        property: "og:description",
        content:
          "Modern luxury Punjabi dining in Babri, Punjab. Authentic tandoor recipes, pure ghee handi, and warm hospitality.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: IndexPage,
});

/* ─────────────────────────────────────────────────────────────
   SCROLL PROGRESS BAR (Antique Gold)
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
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#B79A5B] via-[#D4AF37] to-[#8E743A] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   4. INTRO / BRAND STORY
   Premium cream-colored section (#F5F0E4 / #FFFDF7).
   Small label: OUR STORY
   Heading: A Taste of Punjab, Served With Love
   Split layout:
   Left: Large premium food image.
   Right: Elegant restaurant story.
   Decorative olive/gold Punjabi-inspired pattern.
   ───────────────────────────────────────────────────────────── */
function BrandStorySection() {
  return (
    <section
      id="about"
      className="relative border-t border-[#596344]/20 bg-[#F5F0E4] px-6 py-24 sm:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Large Premium Food Image */}
          <div className="relative lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border-2 border-[#596344]/30 bg-[#FFFDF7] shadow-xl">
              <img
                src={grandHallImage}
                alt="New Punjabi Tadka Restaurant Dining Hall and Feast"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20251C]/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-[#FFFDF7]">
                <Badge className="border border-[#B79A5B] bg-[#3F4A32] text-xs font-bold uppercase tracking-widest text-[#F5F0E4]">
                  Babri Highway Landmark
                </Badge>
                <p className="mt-2 font-display text-2xl font-bold sm:text-3xl text-[#FFFDF7]">
                  Warm Hospitality &amp; Grand Lounges
                </p>
              </div>
            </div>

            {/* Overlapping Decorative Badge */}
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-[#B79A5B]/60 bg-[#FFFDF7] p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-xl bg-[#F5F0E4] text-[#3F4A32]">
                  <Flame className="size-6 text-[#B79A5B]" />
                </div>
                <div>
                  <span className="block font-display text-base font-bold text-[#20251C]">
                    Clay Tandoor
                  </span>
                  <span className="text-xs font-semibold text-[#596344]">
                    Charcoal Simmered Handi
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Elegant Restaurant Story */}
          <div className="lg:col-span-6">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-px w-6 bg-[#B79A5B]" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#596344]">
                Our Story
              </p>
              <span className="h-px w-6 bg-[#B79A5B]" />
            </div>

            <h2 className="font-display text-3xl font-extrabold leading-tight text-[#20251C] sm:text-5xl lg:text-6xl">
              A Taste of Punjab, <br />
              <span className="text-[#3F4A32]">Served With Love</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-[#3F4A32] sm:text-lg">
              Born from a heartfelt reverence for Punjab’s agricultural roots and
              generational village recipes, New Punjabi Tadka brings time-honoured
              tandoor techniques to life. Every handi is seasoned with freshly
              stone-ground spices, simmered patiently over glowing charcoal embers,
              and enriched with pure dairy.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-[#596344] sm:text-base">
              Whether you are travelling along the Gurdaspur–Batala Highway or
              gathering with loved ones in our spacious banquet hall, our doors open
              with unconditional warmth, handcrafted breads, and memories meant to be
              cherished.
            </p>

            {/* Decorative Olive/Gold Phulkari Accent Line */}
            <div className="mt-8 flex items-center gap-3 border-t border-[#596344]/20 pt-6">
              <Wheat className="size-5 text-[#B79A5B]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#3F4A32]">
                100% Pure Desi Ghee • Fresh Daily Farm Dairy • Authentic Tandoor
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   5. RESTAURANT HIGHLIGHTS
   4 elegant feature cards:
   - Authentic Flavours
   - Fresh Ingredients
   - Warm Hospitality
   - Dine-In & Takeaway
   Ivory cards (#FFFDF7), olive text (#20251C), antique-gold icons (#B79A5B).
   Hover: Card moves upward 5–8px, gold accent line appears, icon scales.
   ───────────────────────────────────────────────────────────── */
const highlightsData = [
  {
    title: "Authentic Flavours",
    detail: "Traditional Punjabi recipes and rich flavours.",
    icon: Sparkles,
  },
  {
    title: "Fresh Ingredients",
    detail: "Quality ingredients prepared fresh.",
    icon: Wheat,
  },
  {
    title: "Warm Hospitality",
    detail: "A welcoming experience for every guest.",
    icon: Heart,
  },
  {
    title: "Dine-In & Takeaway",
    detail: "Enjoy your favourite Punjabi dishes your way.",
    icon: UtensilsCrossed,
  },
];

function RestaurantHighlightsSection() {
  return (
    <section className="relative border-t border-[#596344]/20 bg-[#F5F0E4] px-6 pb-24 sm:px-10 lg:pb-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlightsData.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#596344]/20 bg-[#FFFDF7] p-7 shadow-sm transition-all duration-400 ease-out hover:-translate-y-2 hover:border-[#B79A5B] hover:shadow-xl"
              >
                <div>
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#F5F0E4] text-[#B79A5B] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#3F4A32]">
                    <IconComp className="size-6 text-[#B79A5B]" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-[#20251C] transition-colors group-hover:text-[#3F4A32]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#596344]">
                    {item.detail}
                  </p>
                </div>

                {/* Animated Gold Accent Line Appearing on Hover */}
                <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-[#B79A5B] to-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   6. SIGNATURE DISHES
   Premium olive-green section (#20251C / #2A3324).
   Heading: SIGNATURE PUNJABI FLAVOURS
   Subheading: Traditional favourites made for unforgettable moments.
   4 large food cards: Butter Chicken, Amritsari Kulcha, Paneer Tikka, Dal Makhani.
   Hover (350–450ms): Image zooms to 1.05, card moves up, soft gold border,
   description more visible, arrow slides right.
   ───────────────────────────────────────────────────────────── */
const signatureDishes = [
  {
    name: "Royal Butter Gravy Special",
    category: "Slow Simmered",
    description:
      "Melt-in-mouth cottage cheese or tender bites simmered in a velvety tomato-cashew-butter gravy infused with fragrant fenugreek and saffron.",
    price: "₹280",
    image: paneerImage,
  },
  {
    name: "Amritsari Kulcha & Chana",
    category: "Tandoor Specialty",
    description:
      "Crispy, flaky tandoori kulcha stuffed with spiced potatoes and pomegranate seeds, served with robust Amritsari chole and cool curd.",
    price: "₹180",
    image: parathaImage,
  },
  {
    name: "Tandoori Paneer Tikka",
    category: "Clay Oven Charred",
    description:
      "Fresh cottage cheese cubes marinated in hung yoghurt, mustard oil, and hand-ground spices, roasted over charcoal embers.",
    price: "₹220",
    image: heroImage,
  },
  {
    name: "Dal Makhani Handi Tadka",
    category: "12-Hr Slow Cooked",
    description:
      "Whole black lentils slow-cooked overnight over tandoor embers, tempered with pure desi ghee, ginger, garlic, and special Punjabi tadka.",
    price: "₹240",
    image: thaliImage,
  },
];

function SignatureDishesSection() {
  return (
    <section
      id="signatures"
      className="relative border-t border-[#B79A5B]/20 bg-[#20251C] px-6 py-24 sm:px-10 lg:py-32 text-[#F5F0E4]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#B79A5B]" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B79A5B]">
              Masterpieces of Our Kitchen
            </p>
            <span className="h-px w-8 bg-[#B79A5B]" />
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#FFFDF7] sm:text-5xl lg:text-6xl">
            SIGNATURE PUNJABI FLAVOURS
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#EBE5D8]">
            Traditional favourites made for unforgettable moments.
          </p>
        </div>

        {/* 4 Large Food Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {signatureDishes.map((dish) => (
            <article
              key={dish.name}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#596344]/40 bg-[#283023] shadow-lg transition-all duration-400 ease-out hover:-translate-y-2 hover:border-[#B79A5B] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.7)]"
            >
              {/* Food Image with 1.05 Zoom */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#20251C]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#283023] via-[#283023]/25 to-transparent opacity-75 transition-opacity duration-400 group-hover:opacity-90" />

                <span className="absolute bottom-3.5 right-3.5 rounded-lg border border-[#B79A5B]/40 bg-[#20251C]/90 px-3 py-1 font-display text-base font-bold text-[#F5F0E4] shadow-md backdrop-blur-sm">
                  {dish.price}
                </span>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#B79A5B]">
                  {dish.category}
                </span>
                <h3 className="mt-1.5 font-display text-2xl font-bold leading-tight text-[#FFFDF7] transition-colors group-hover:text-[#B79A5B]">
                  {dish.name}
                </h3>
                <p className="mt-2.5 flex-1 text-xs leading-relaxed text-[#EBE5D8]">
                  {dish.description}
                </p>

                {/* Small Arrow Icon Sliding Right */}
                <div className="mt-6 flex items-center justify-between border-t border-[#596344]/30 pt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B79A5B]">
                    View Dish
                  </span>
                  <div className="grid size-8 place-items-center rounded-full border border-[#B79A5B]/40 text-[#B79A5B] transition-transform duration-300 group-hover:translate-x-1.5 group-hover:bg-[#B79A5B] group-hover:text-[#20251C]">
                    <ArrowRight className="size-4" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   7 & 8. MENU SECTION & CARD INTERACTION
   Warm cream background (#F5F0E4).
   Heading: EXPLORE OUR MENU
   Subheading: From the tandoor to the table.
   8 Categories: Starters, Tandoor, Punjabi Specials, Main Course,
   Breads, Rice, Drinks, Desserts.
   Category buttons: Olive green and cream.
   Active: Olive background, cream text, gold accent.
   Inactive: Transparent, olive text, subtle border.
   Card background: Soft ivory (#FFFDF7).
   Hover effect: Image zooms, card lifts, olive overlay, gold border,
   price emphasized, arrow moves horizontally.
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

  return (
    <section
      id="menu"
      className="relative border-t border-[#596344]/20 bg-[#F5F0E4] px-6 py-24 sm:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-[#B79A5B]" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#596344]">
                Culinary Repertoire
              </p>
              <span className="h-px w-8 bg-[#B79A5B]" />
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#20251C] sm:text-5xl lg:text-6xl">
              EXPLORE OUR MENU
            </h2>
            <p className="mt-3 max-w-xl text-base text-[#596344]">
              From the tandoor to the table.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="border border-[#B79A5B] bg-[#3F4A32] font-bold uppercase tracking-wider text-[#F5F0E4] shadow-md hover:bg-[#20251C]"
          >
            <a href={phoneUrl}>
              <Phone className="mr-2 size-4 text-[#B79A5B]" /> Order: 094650 78750
            </a>
          </Button>
        </div>

        {/* Category Navigation Buttons: Olive green & Cream */}
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
                onClick={() => setActiveCategory(cat)}
                className={`group relative whitespace-nowrap rounded-2xl px-6 py-3.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? "bg-[#3F4A32] text-[#F5F0E4] shadow-md"
                    : "border border-[#596344]/30 bg-transparent text-[#3F4A32] hover:border-[#3F4A32] hover:bg-[#FFFDF7]"
                }`}
              >
                <span>{cat}</span>
                {isActive && (
                  <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#B79A5B]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Menu Cards in Soft Ivory (#FFFDF7) */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {menuItemsData[activeCategory].map((item) => (
            <div
              key={item.name}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#596344]/20 bg-[#FFFDF7] shadow-sm transition-all duration-400 ease-out hover:-translate-y-2 hover:border-[#B79A5B] hover:shadow-xl"
            >
              {/* Image with Smooth Zoom */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F0E4]">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#20251C]/15 opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                {item.badge && (
                  <Badge className="absolute left-3 top-3 border border-[#B79A5B]/40 bg-[#FFFDF7]/95 text-[0.62rem] font-bold uppercase tracking-wider text-[#3F4A32] shadow-sm">
                    {item.badge}
                  </Badge>
                )}

                <span className="absolute bottom-3 right-3 rounded-md border border-[#B79A5B]/30 bg-[#20251C] px-2.5 py-1 font-display text-sm font-bold text-[#F5F0E4] shadow-md">
                  {item.price}
                </span>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-[#10B981]" />
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider text-[#10B981]">
                    Pure Veg
                  </span>
                </div>

                <h3 className="mt-1 font-display text-xl font-bold leading-tight text-[#20251C] transition-colors group-hover:text-[#3F4A32]">
                  {item.name}
                </h3>

                <p className="mt-2 flex-1 text-xs leading-relaxed text-[#596344]">
                  {item.description}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-[#596344]/15 pt-3">
                  <a
                    href={phoneUrl}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#3F4A32] transition-colors hover:text-[#B79A5B]"
                  >
                    <span>Order Now</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-[#596344] hover:text-[#3F4A32]"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   9. PUNJABI HERITAGE SECTION
   Visually unique full-width section.
   Background: Deep olive green (#20251C).
   Heading: ROOTED IN PUNJAB
   Wheat, fields, tandoor, clay pots, phulkari, dhol, village textures.
   Cream typography with antique-gold highlights.
   ───────────────────────────────────────────────────────────── */
function PunjabiHeritageSection() {
  return (
    <section
      id="heritage"
      className="relative overflow-hidden border-t border-[#B79A5B]/25 bg-[#20251C] px-6 py-24 sm:px-10 lg:py-32 text-[#F5F0E4]"
    >
      <div className="punjabi-phulkari-pattern absolute inset-0 opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#B79A5B]" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B79A5B]">
              Soil, Tradition &amp; Culture
            </p>
            <span className="h-px w-8 bg-[#B79A5B]" />
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#FFFDF7] sm:text-5xl lg:text-6xl">
            ROOTED IN <span className="text-[#B79A5B]">PUNJAB</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#EBE5D8]">
            The golden glow of wheat fields, the ancient rhythm of the Dhol, the
            fragrance of smoking earthenware, and the warmth of the Punjabi hearth.
          </p>
        </div>

        {/* Horizontal Parallax Banner */}
        <div className="relative mt-14 overflow-hidden rounded-3xl border border-[#B79A5B]/35 shadow-2xl">
          <img
            src={nightPanorama}
            alt="New Punjabi Tadka Restaurant and Kulhad Chai illuminated at night"
            className="aspect-[21/9] w-full min-h-[340px] object-cover brightness-[0.75] transition-transform duration-1000 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#20251C] via-[#20251C]/40 to-transparent" />

          {/* Cultural Overlay Story Box */}
          <div className="absolute bottom-6 left-6 right-6 max-w-2xl rounded-2xl border border-[#B79A5B]/40 bg-[#20251C]/90 p-6 shadow-2xl backdrop-blur-md sm:bottom-10 sm:left-10">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#B79A5B]">
              Cultural Chronicle
            </span>
            <h3 className="mt-1 font-display text-xl font-bold text-[#FFFDF7] sm:text-2xl">
              From Rural Hearth to Highway Grandeur
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#EBE5D8] sm:text-sm">
              In Punjab, preparing a meal is an expression of deep affection and
              hospitality. When rotis are baked against glowing clay walls and
              gravies simmer with freshly churned butter, dining transcends mere
              nourishment. New Punjabi Tadka honours this heritage on the Babri
              Highway, welcoming every guest with warmth and abundance.
            </p>
          </div>
        </div>

        {/* 3 Modern Cultural Detail Pillars */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#596344]/40 bg-[#283023] p-6 shadow-md">
            <div className="grid size-12 place-items-center rounded-xl bg-[#20251C] text-[#B79A5B]">
              <Wheat className="size-6 text-[#B79A5B]" />
            </div>
            <h4 className="mt-4 font-display text-xl font-bold text-[#FFFDF7]">
              Golden Wheat &amp; Farms
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-[#EBE5D8]">
              We honour Punjab&apos;s agrarian soul by using whole stone-ground flours
              and unadulterated farm dairy.
            </p>
          </div>

          <div className="rounded-2xl border border-[#596344]/40 bg-[#283023] p-6 shadow-md">
            <div className="grid size-12 place-items-center rounded-xl bg-[#20251C] text-[#B79A5B]">
              <Flame className="size-6 text-[#B79A5B]" />
            </div>
            <h4 className="mt-4 font-display text-xl font-bold text-[#FFFDF7]">
              Clay Tandoor Pottery
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-[#EBE5D8]">
              Natural earthenware imparts the authentic mineral aroma (ਸੁਆਦ ਖੁਸ਼ਬੂ)
              cherished across Punjabi heritage.
            </p>
          </div>

          <div className="rounded-2xl border border-[#596344]/40 bg-[#283023] p-6 shadow-md">
            <div className="grid size-12 place-items-center rounded-xl bg-[#20251C] text-[#B79A5B]">
              <Heart className="size-6 text-[#B79A5B]" />
            </div>
            <h4 className="mt-4 font-display text-xl font-bold text-[#FFFDF7]">
              Maan Satkaar
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-[#EBE5D8]">
              Guests are treated with royal respect. Every meal is served with
              generosity and genuine smiles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   10. FEATURED FOOD / EDITORIAL SECTION
   Large editorial-style section.
   Large food image covering ~60% of layout.
   Other side (~40%):
   FROM OUR TANDOOR
   Short description + "Discover the Flavour →"
   ───────────────────────────────────────────────────────────── */
function EditorialTandoorSection() {
  return (
    <section className="relative border-t border-[#596344]/20 bg-[#F5F0E4] px-6 py-24 sm:px-10 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Large Food Image (~60%) */}
          <div className="relative lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border-2 border-[#596344]/30 shadow-2xl">
              <img
                src={paneerImage}
                alt="From Our Tandoor - Freshly Slapped Naan and Sizzling Gravies"
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20251C]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-[#FFFDF7]">
                <Badge className="border border-[#B79A5B] bg-[#3F4A32] text-xs font-bold uppercase tracking-wider text-[#F5F0E4]">
                  Clay Oven Masterpiece
                </Badge>
                <p className="mt-1 font-display text-2xl font-bold text-[#FFFDF7]">
                  Piping Hot Garlic Naan &amp; Paneer Gravy
                </p>
              </div>
            </div>
          </div>

          {/* Other Side (~40%) */}
          <div className="lg:col-span-5">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-px w-6 bg-[#B79A5B]" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#596344]">
                Tandoori Craft
              </p>
              <span className="h-px w-6 bg-[#B79A5B]" />
            </div>

            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-[#20251C] sm:text-5xl">
              FROM OUR <br />
              <span className="text-[#3F4A32]">TANDOOR</span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-[#3F4A32]">
              Watch as our ustaads hand-stretch the dough and slap it directly
              against the scorching terracotta lining of the tandoor. Smoked over
              glowing embers, every naan and kulcha comes out blistered, crisp,
              and brushed with melted butter.
            </p>

            <div className="mt-8">
              <a
                href="#menu"
                className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#3F4A32] transition-colors hover:text-[#B79A5B]"
              >
                <span>Discover the Flavour</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-2 text-[#B79A5B]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   11. GALLERY
   Asymmetric gallery with mixture of large, small, vertical, horizontal.
   Real Babri photos: grand arch, emerald lounges, kulhad chai, banquet.
   Hover: image zoom, olive overlay, gold border, view icon.
   Lightbox: fullscreen, dark olive backdrop, close button, prev/next.
   ───────────────────────────────────────────────────────────── */
const galleryPhotos = [
  {
    src: grandArchDay,
    title: "Grand Arched Entrance & Jali Work",
    subtitle: "Mughal & Punjabi Heritage Gateway",
    category: "Architecture",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: emeraldArtImage,
    title: "Emerald Velvet VIP Lounges",
    subtitle: "Cultural Mirror Artwork & Booths",
    category: "Interior",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    src: kulhadChaiCafe,
    title: "Kulhad Chai Cafe & Garden Lawn",
    subtitle: "Open Air Dining Patio",
    category: "Cafe",
    span: "md:col-span-1",
  },
  {
    src: nightPanorama,
    title: "Night Panorama & Fairylights",
    subtitle: "Warm Evening Illumination",
    category: "Exterior",
    span: "md:col-span-2",
  },
  {
    src: grandHallImage,
    title: "Celebration Hall & Stage",
    subtitle: "100+ Seater Party Banquet",
    category: "Banquet",
    span: "md:col-span-1",
  },
  {
    src: thaliImage,
    title: "Royal Punjabi Thali Spread",
    subtitle: "Multi-Course Traditional Dawat",
    category: "Food",
    span: "md:col-span-1",
  },
  {
    src: courtyardDay,
    title: "Spacious Courtyard Plaza",
    subtitle: "Paved Highway Parking Plaza",
    category: "Architecture",
    span: "md:col-span-2",
  },
  {
    src: royalPeacockImage,
    title: "Royal Peacock Glass Lounge",
    subtitle: "Rose Velvet Tufted Booths",
    category: "Interior",
    span: "md:col-span-1",
  },
];

function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryPhotos.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + galleryPhotos.length) % galleryPhotos.length
      );
    }
  };

  return (
    <section
      id="gallery"
      className="relative border-t border-[#596344]/20 bg-[#F5F0E4] px-6 py-24 sm:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#B79A5B]" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#596344]">
              Visual Showcase
            </p>
            <span className="h-px w-8 bg-[#B79A5B]" />
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#20251C] sm:text-5xl lg:text-6xl">
            OUR RESTAURANT GALLERY
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#596344]">
            Discover real photos of our Babri restaurant, Kulhad Chai garden,
            emerald velvet booths, and authentic dishes.
          </p>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="mt-14 grid auto-rows-[220px] gap-5 sm:auto-rows-[260px] md:grid-cols-3 lg:grid-cols-4">
          {galleryPhotos.map((item, index) => (
            <button
              key={`${item.title}-${index}`}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className={`group relative overflow-hidden rounded-3xl border border-[#596344]/30 text-left shadow-md transition-all duration-400 hover:border-[#B79A5B] focus:outline-none focus:ring-2 focus:ring-[#3F4A32] ${item.span}`}
              aria-label={`View photo: ${item.title}`}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Olive Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#20251C]/90 via-[#20251C]/35 to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-95" />

              <div className="absolute inset-x-0 bottom-0 p-5 text-[#FFFDF7]">
                <span className="inline-block rounded-md border border-[#B79A5B]/50 bg-[#20251C]/80 px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-widest text-[#B79A5B] backdrop-blur-sm">
                  {item.category}
                </span>
                <h3 className="mt-1.5 font-display text-xl font-bold leading-tight text-[#FFFDF7] transition-colors group-hover:text-[#B79A5B]">
                  {item.title}
                </h3>
                <p className="mt-0.5 line-clamp-1 text-xs text-[#EBE5D8]">
                  {item.subtitle}
                </p>
              </div>

              {/* View Icon Fade In */}
              <div className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-[#B79A5B] bg-[#20251C]/80 text-[#B79A5B] opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                <Maximize2 className="size-4" />
              </div>
            </button>
          ))}
        </div>

        {/* Fullscreen Lightbox with Dark Olive Backdrop */}
        <Dialog
          open={lightboxIndex !== null}
          onOpenChange={(open) => !open && setLightboxIndex(null)}
        >
          <DialogContent className="max-w-5xl border-2 border-[#B79A5B]/70 bg-[#20251C] p-3 text-[#FFFDF7] sm:p-5">
            <DialogTitle className="sr-only">
              {lightboxIndex !== null
                ? galleryPhotos[lightboxIndex]?.title
                : "Gallery Image"}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Real photo from New Punjabi Tadka Restaurant Babri
            </DialogDescription>

            {lightboxIndex !== null && (
              <div className="relative flex flex-col">
                <div className="relative flex max-h-[75vh] items-center justify-center overflow-hidden rounded-2xl bg-black/60">
                  <img
                    src={galleryPhotos[lightboxIndex]?.src}
                    alt={galleryPhotos[lightboxIndex]?.title}
                    className="max-h-[75vh] w-full object-contain"
                  />

                  {/* Previous / Next Controls */}
                  <Button
                    size="icon"
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 size-12 -translate-y-1/2 rounded-full border border-[#B79A5B] bg-[#20251C]/80 text-[#B79A5B] hover:bg-[#3F4A32] hover:text-[#F5F0E4]"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="size-6" />
                  </Button>

                  <Button
                    size="icon"
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 size-12 -translate-y-1/2 rounded-full border border-[#B79A5B] bg-[#20251C]/80 text-[#B79A5B] hover:bg-[#3F4A32] hover:text-[#F5F0E4]"
                    aria-label="Next image"
                  >
                    <ChevronRight className="size-6" />
                  </Button>
                </div>

                <div className="mt-4 flex items-center justify-between px-2 text-sm">
                  <div>
                    <h4 className="font-display text-2xl font-bold text-[#B79A5B]">
                      {galleryPhotos[lightboxIndex]?.title}
                    </h4>
                    <p className="text-xs text-[#EBE5D8]">
                      {galleryPhotos[lightboxIndex]?.subtitle}
                    </p>
                  </div>
                  <span className="rounded-md border border-[#B79A5B]/40 px-3 py-1 text-xs font-bold text-[#FFFDF7]">
                    {lightboxIndex + 1} / {galleryPhotos.length}
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
   12. CUSTOMER REVIEWS
   Elegant ivory section (#FFFDF7).
   Heading: WHAT OUR GUESTS SAY
   5 gold stars, customer name, review, small avatar.
   Smooth horizontal carousel.
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
      className="relative border-t border-[#596344]/20 bg-[#FFFDF7] px-6 py-24 sm:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#B79A5B]" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#596344]">
              Guest Testimonials
            </p>
            <span className="h-px w-8 bg-[#B79A5B]" />
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#20251C] sm:text-5xl lg:text-6xl">
            WHAT OUR GUESTS SAY
          </h2>
        </div>

        {/* Carousel Card */}
        <div className="relative mt-14 rounded-3xl border border-[#596344]/25 bg-[#F5F0E4] p-8 shadow-xl sm:p-14">
          <div className="flex items-center justify-between">
            <Quote className="size-12 text-[#B79A5B]/40" />
            {/* 5 Stars */}
            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="size-5 fill-[#B79A5B] text-[#B79A5B]"
                />
              ))}
            </div>
          </div>

          <p className="mt-8 font-display text-xl font-medium italic leading-relaxed text-[#20251C] sm:text-2xl">
            &ldquo;{current.text}&rdquo;
          </p>

          <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[#596344]/20 pt-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3.5">
              <div className="grid size-12 place-items-center rounded-full border border-[#B79A5B] bg-[#3F4A32] font-display text-lg font-bold text-[#F5F0E4]">
                {current.avatar}
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-[#20251C]">
                  {current.name}
                </h3>
                <p className="text-xs font-medium text-[#596344]">
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
                className="size-11 rounded-full border border-[#596344]/40 bg-[#FFFDF7] text-[#20251C] hover:border-[#B79A5B] hover:bg-[#3F4A32] hover:text-[#F5F0E4]"
                aria-label="Previous review"
              >
                <ChevronLeft className="size-5" />
              </Button>
              <span className="text-xs font-bold text-[#596344]">
                {reviewIdx + 1} / {reviewsData.length}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={nextReview}
                className="size-11 rounded-full border border-[#596344]/40 bg-[#FFFDF7] text-[#20251C] hover:border-[#B79A5B] hover:bg-[#3F4A32] hover:text-[#F5F0E4]"
                aria-label="Next review"
              >
                <ChevronRight className="size-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   13. EXPERIENCE CTA
   Large full-width cinematic section.
   Background: Punjabi food.
   Overlay: Deep olive transparent gradient.
   Heading: COME HUNGRY. LEAVE HAPPY.
   Subheading: Experience the warmth, flavour and soul of Punjab.
   Buttons: View Menu & Visit Us.
   ───────────────────────────────────────────────────────────── */
function ExperienceCTASection() {
  return (
    <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden border-t border-[#B79A5B]/20 bg-[#20251C] px-6 py-24 text-center text-[#F5F0E4]">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Punjabi feast background"
        className="absolute inset-0 size-full object-cover object-center opacity-30 brightness-[0.6] contrast-[1.2]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#20251C] via-[#20251C]/85 to-[#20251C]" />

      <div className="relative mx-auto max-w-3xl">
        <span className="inline-block rounded-full border border-[#B79A5B]/50 bg-[#283023]/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#B79A5B] shadow-lg">
          The Authentic Punjabi Experience
        </span>

        <h2 className="mt-5 font-display text-4xl font-extrabold uppercase tracking-tight text-[#FFFDF7] sm:text-6xl md:text-7xl">
          COME HUNGRY. <br />
          <span className="text-[#B79A5B]">LEAVE HAPPY.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#EBE5D8] sm:text-xl">
          Experience the warmth, flavour and soul of Punjab.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto border border-[#B79A5B] bg-[#3F4A32] px-8 py-6 text-sm font-bold uppercase tracking-widest text-[#F5F0E4] shadow-lg transition-all hover:scale-105 hover:bg-[#B79A5B] hover:text-[#20251C]"
          >
            <a href="#menu">View Menu</a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-2 border-[#596344] bg-[#283023]/80 px-8 py-6 text-sm font-bold uppercase tracking-widest text-[#FFFDF7] hover:border-[#B79A5B] hover:bg-[#FFFDF7] hover:text-[#20251C]"
          >
            <a href={googleMapsUrl} target="_blank" rel="noreferrer">
              <Compass className="mr-2 size-4 text-[#B79A5B]" /> Visit Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   14 & 15. LOCATION & CONTACT
   Premium cream section (#F5F0E4).
   Heading: FIND US & LET'S CONNECT
   Left: Address, Opening hours, Phone, Dine-in, Takeaway.
   Right: Large map card linking to Google Maps with Get Directions button.
   Minimal elegant contact area with olive-green icons.
   ───────────────────────────────────────────────────────────── */
function LocationAndContactSection() {
  return (
    <section
      id="contact"
      className="relative border-t border-[#596344]/20 bg-[#F5F0E4] px-6 py-24 sm:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Details */}
          <div className="lg:col-span-6">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-[#B79A5B]" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#596344]">
                Location &amp; Visit
              </p>
              <span className="h-px w-8 bg-[#B79A5B]" />
            </div>

            <h2 className="font-display text-4xl font-extrabold tracking-tight text-[#20251C] sm:text-6xl">
              FIND US
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[#596344]">
              Located conveniently on the main Gurdaspur to Batala Road in Babri,
              directly opposite Mahindra Car Showroom. Ample dedicated highway
              parking and tranquil garden dining.
            </p>

            {/* Information Cards in Soft Ivory */}
            <div className="mt-8 space-y-4">
              {/* Address */}
              <div className="flex items-start gap-4 rounded-2xl border border-[#596344]/20 bg-[#FFFDF7] p-5 shadow-sm">
                <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#F5F0E4] text-[#3F4A32]">
                  <MapPin className="size-6 text-[#B79A5B]" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#20251C]">
                    Restaurant Address
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#596344]">
                    Gurdaspur to Batala Road, Opposite Mahindra Car Showroom,
                    Babri, Punjab 143520
                  </p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-4 rounded-2xl border border-[#596344]/20 bg-[#FFFDF7] p-5 shadow-sm">
                <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#F5F0E4] text-[#3F4A32]">
                  <Clock className="size-6 text-[#B79A5B]" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#20251C]">
                    Opening Hours
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#20251C]">
                    Open 7 Days a Week: 10:00 AM – 11:30 PM
                  </p>
                  <p className="text-xs text-[#596344]">
                    Breakfast, Lunch, Evening Snacks &amp; Late-Night Dining
                  </p>
                </div>
              </div>

              {/* Contact & Service */}
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={phoneUrl}
                  className="flex items-center gap-3.5 rounded-2xl border border-[#596344]/20 bg-[#FFFDF7] p-4 transition-all hover:border-[#3F4A32]"
                >
                  <div className="grid size-10 place-items-center rounded-xl bg-[#F5F0E4] text-[#3F4A32]">
                    <Phone className="size-5 text-[#B79A5B]" />
                  </div>
                  <div>
                    <span className="block text-[0.62rem] font-bold uppercase tracking-wider text-[#596344]">
                      Phone Number
                    </span>
                    <span className="font-display text-base font-bold text-[#20251C]">
                      094650 78750
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 rounded-2xl border border-[#596344]/20 bg-[#FFFDF7] p-4">
                  <div className="grid size-10 place-items-center rounded-xl bg-[#F5F0E4] text-[#3F4A32]">
                    <UtensilsCrossed className="size-5 text-[#B79A5B]" />
                  </div>
                  <div>
                    <span className="block text-[0.62rem] font-bold uppercase tracking-wider text-[#596344]">
                      Dining Mode
                    </span>
                    <span className="font-display text-base font-bold text-[#20251C]">
                      Dine-in &amp; Takeaway
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Minimal Contact Area: LET'S CONNECT */}
            <div className="mt-8 rounded-2xl border border-[#596344]/20 bg-[#FFFDF7] p-6 shadow-sm">
              <h3 className="font-display text-xl font-bold text-[#20251C]">
                LET&apos;S CONNECT
              </h3>
              <p className="mt-1 text-xs text-[#596344]">
                Reach out directly via phone, WhatsApp, or connect on Instagram.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  size="sm"
                  className="bg-[#3F4A32] text-[#F5F0E4] hover:bg-[#20251C]"
                >
                  <a href={phoneUrl}>
                    <Phone className="mr-1.5 size-3.5 text-[#B79A5B]" /> Call Us
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
                >
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-1.5 size-3.5" /> WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-[#596344] text-[#3F4A32] hover:bg-[#F5F0E4]"
                >
                  <a href={instagramUrl} target="_blank" rel="noreferrer">
                    <Instagram className="mr-1.5 size-3.5 text-[#B79A5B]" /> Instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Large Map Card with Get Directions Button */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-[#596344]/30 bg-[#FFFDF7] p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#596344]">
                    Babri Highway Landmark
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#20251C]">
                    New Punjabi Tadka Restaurant
                  </h3>
                </div>
                <div className="grid size-12 place-items-center rounded-2xl bg-[#3F4A32] text-[#F5F0E4] shadow-md">
                  <MapPin className="size-6 text-[#B79A5B]" />
                </div>
              </div>

              {/* Photo Preview of Courtyard */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-[#596344]/20">
                <img
                  src={courtyardDay}
                  alt="Courtyard and parking at New Punjabi Tadka Babri"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="flex-1 border border-[#B79A5B] bg-[#3F4A32] font-bold uppercase text-[#F5F0E4] shadow-md hover:bg-[#20251C]"
                >
                  <a href={googleMapsUrl} target="_blank" rel="noreferrer">
                    <Compass className="mr-2 size-4 text-[#B79A5B]" /> Get Directions
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-[#596344]/40 bg-[#FFFDF7] text-[#20251C] hover:border-[#3F4A32] hover:bg-[#F5F0E4]"
                >
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Instagram className="size-4 text-[#B79A5B]" />
                    <span>Instagram</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   16. FOOTER
   Premium deep olive-green footer (#20251C).
   Restaurant logo, NEW PUNJABI TADKA, short description,
   navigation, menu links, contact info, location, social icons.
   Subtle Phulkari pattern in background.
   © NEW PUNJABI TADKA RESTAURANT. ALL RIGHTS RESERVED.
   ───────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="relative border-t border-[#B79A5B]/30 bg-[#20251C] px-6 py-16 text-[#F5F0E4] sm:px-10 lg:px-12">
      <div className="punjabi-phulkari-pattern absolute inset-0 opacity-15 pointer-events-none" />

      <div className="relative mx-auto grid max-w-[1440px] gap-12 border-b border-[#596344]/30 pb-12 md:grid-cols-12">
        {/* Brand & Logo Column */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <div className="h-14 w-24 overflow-hidden rounded-xl border border-[#B79A5B]/50 bg-[#283023] p-1 shadow-md">
              <img
                src={officialLogo}
                alt="New Punjabi Tadka Official Logo"
                className="size-full object-contain"
              />
            </div>
            <div>
              <span className="font-display text-2xl font-bold tracking-wider text-[#FFFDF7]">
                NEW PUNJABI TADKA
              </span>
              <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#B79A5B]">
                Restaurant &amp; Kulhad Chai • Babri
              </span>
            </div>
          </div>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#EBE5D8]">
            Babri’s destination for royal Punjabi handi curries, fresh tandoor
            breads, open-air Kulhad Chai garden, and spacious celebration hall.
            Experience the real taste of Punjab.
          </p>

          <div className="mt-4 flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#B79A5B]">
            <span>Authentic</span>
            <span>•</span>
            <span>Pure Vegetarian</span>
            <span>•</span>
            <span>Highway Hospitality</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3">
          <h4 className="font-display text-lg font-bold text-[#B79A5B]">
            Navigation
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-[#EBE5D8]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-[#B79A5B]"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#B79A5B]"
              >
                Directions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Hours */}
        <div className="md:col-span-4">
          <h4 className="font-display text-lg font-bold text-[#B79A5B]">
            Contact &amp; Location
          </h4>
          <div className="mt-4 space-y-2.5 text-sm text-[#EBE5D8]">
            <a
              href={phoneUrl}
              className="flex items-center gap-2 font-semibold text-[#FFFDF7] transition-colors hover:text-[#B79A5B]"
            >
              <Phone className="size-4 text-[#B79A5B]" /> 094650 78750
            </a>
            <p className="flex items-start gap-2">
              <MapPin className="mt-1 size-4 shrink-0 text-[#B79A5B]" />
              <span>
                Opposite Mahindra Car Showroom, Babri, Gurdaspur–Batala Road,
                Punjab 143520
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Clock className="size-4 text-[#B79A5B]" />
              <span>Open Daily: 10:00 AM – 11:30 PM</span>
            </p>

            <div className="pt-3">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B79A5B] hover:underline"
              >
                <Instagram className="size-4" /> @punjabi_tadka_restaurant06
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-8 flex max-w-[1440px] flex-col items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest text-[#EBE5D8]/70 sm:flex-row">
        <p>© NEW PUNJABI TADKA RESTAURANT. ALL RIGHTS RESERVED.</p>
        <p className="font-gurmukhi font-semibold text-[#B79A5B]">
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
        className="group flex items-center gap-2 rounded-full border border-[#B79A5B]/40 bg-[#25D366] px-4 py-3 text-xs font-bold text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#1EBE5D]"
        aria-label="Chat on WhatsApp with New Punjabi Tadka"
      >
        <MessageCircle className="size-5" />
        <span className="hidden sm:inline font-bold">WhatsApp Us</span>
      </a>

      {/* Call Button */}
      <a
        href={phoneUrl}
        className="group flex items-center gap-2 rounded-full border border-[#B79A5B] bg-[#20251C] px-4 py-3 text-xs font-bold text-[#F5F0E4] shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#3F4A32]"
        aria-label="Call New Punjabi Tadka Restaurant"
      >
        <Phone className="size-5 text-[#B79A5B]" />
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
    <div className="min-h-screen bg-[#F5F0E4] font-sans text-[#20251C] selection:bg-[#3F4A32] selection:text-[#F5F0E4]">
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <BrandStorySection />
      <RestaurantHighlightsSection />
      <SignatureDishesSection />
      <MenuSection />
      <PunjabiHeritageSection />
      <EditorialTandoorSection />
      <GallerySection />
      <CustomerReviewsSection />
      <ExperienceCTASection />
      <LocationAndContactSection />
      <Footer />
      <FloatingActionButtons />
    </div>
  );
}
