import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroCategories } from "../data/menu";

// Carefully matched food images — each one is actually that category
const CAT_IMAGES = {
  chicken_shawarma: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=900&q=85&auto=format&fit=crop",
  meat_shawarma:    "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=900&q=85&auto=format&fit=crop",
  barbecue:         "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=900&q=85&auto=format&fit=crop&crop=center",
  grilled_chicken:  "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=900&q=85&auto=format&fit=crop",
  boneless_chicken: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=900&q=85&auto=format&fit=crop",
  sides:            "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=900&q=85&auto=format&fit=crop",
  salads:           "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&q=85&auto=format&fit=crop",
};

const featured = ["chicken_shawarma", "meat_shawarma"];

export function MenuCategories() {
  const [hovered, setHovered] = useState(null);

  const featuredCats  = heroCategories.filter(c => featured.includes(c.id));
  const secondaryCats = heroCategories.filter(c => !featured.includes(c.id));

  return (
    <section
      id="categories"
      dir="rtl"
      className="bg-charcoal border-t border-offwhite/5 py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section label + heading */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-5">
            <span className="fire-line-short" />
            <span className="font-body text-[11px] tracking-[0.3em] uppercase text-muted">تصفح الأقسام</span>
          </div>
          <h2 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-offwhite uppercase tracking-tight leading-none">
            ماذا نقدم
          </h2>
        </div>

        {/* Featured — two large panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          {featuredCats.map((cat) => (
            <a
              key={cat.id}
              href="#menu"
              onMouseEnter={() => setHovered(cat.id)}
              onMouseLeave={() => setHovered(null)}
              className="group relative overflow-hidden rounded-xl h-[52vw] md:h-[38vw] max-h-[500px]"
            >
              {/* Food photo */}
              <img
                src={CAT_IMAGES[cat.id]}
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {/* Tiny dark overlay — just enough, not heavy */}
              <div className="absolute inset-0 bg-charcoal-dark/40 group-hover:bg-charcoal-dark/30 transition-colors duration-500" />
              {/* Bottom gradient for legibility */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-charcoal-dark/80 to-transparent" />

              {/* Label */}
              <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 flex items-end justify-between">
                <div>
                  <h3 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-offwhite uppercase tracking-tight leading-none">
                    {cat.label}
                  </h3>
                  {cat.description && (
                    <p className="font-body text-sm text-offwhite/55 mt-2 font-light">{cat.description}</p>
                  )}
                </div>
                <span className={`font-display text-xl text-ember transition-all duration-300 ${
                  hovered === cat.id ? "opacity-100 -translate-x-1" : "opacity-0 translate-x-2"
                }`}>←</span>
              </div>
            </a>
          ))}
        </div>

        {/* Secondary — smaller panels in a row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {secondaryCats.map((cat) => (
            <a
              key={cat.id}
              href="#menu"
              onMouseEnter={() => setHovered(cat.id)}
              onMouseLeave={() => setHovered(null)}
              className="group relative overflow-hidden rounded-xl h-[40vw] sm:h-[28vw] lg:h-[18vw] max-h-[220px]"
            >
              {/* Food photo */}
              <img
                src={CAT_IMAGES[cat.id]}
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              {/* Tiny dark overlay */}
              <div className="absolute inset-0 bg-charcoal-dark/45 group-hover:bg-charcoal-dark/30 transition-colors duration-500" />
              <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-charcoal-dark/80 to-transparent" />

              <div className="absolute bottom-0 inset-x-0 p-4">
                <span className="font-display font-bold text-lg md:text-xl lg:text-2xl text-offwhite uppercase tracking-tight leading-none">
                  {cat.label}
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
