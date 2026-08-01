import { useState } from "react";
import { Section, SectionHeading } from "./ui/Section";
import { Button } from "./ui/Button";
import { menuCategories, menuItems } from "../data/menu";
import { motion, AnimatePresence } from "framer-motion";

export function FullMenu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <Section id="menu" className="bg-[#0A0A0A] min-h-screen border-t border-white/5" containerClass="md:px-12">
      <SectionHeading 
        title="المنيو كاملاً" 
        subtitle="ماذا نقدم" 
        align="center"
        className="mb-16"
      />

      {/* Modern Pill Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-16 pb-4">
        {menuCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`relative font-display tracking-widest uppercase text-sm md:text-base px-6 md:px-8 py-3 md:py-4 transition-colors duration-300 rounded-full border ${
              activeCategory === cat.id 
                ? "text-charcoal-dark border-transparent" 
                : "text-offwhite/60 border-white/10 hover:text-offwhite hover:border-white/30"
            }`}
          >
            {activeCategory === cat.id && (
              <motion.div 
                layoutId="menu-active-tab-bg"
                className="absolute inset-0 bg-offwhite rounded-full z-0"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Menu List - Editorial style */}
      <div className="max-w-5xl mx-auto mb-20 min-h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-0"
          >
            {filteredItems.map((item, index) => (
              <motion.div 
                key={item.id} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-8 border-b border-white/10 hover:bg-white/[0.02] px-4 -mx-4 rounded-2xl transition-colors duration-300"
              >
                {/* Mobile Image (visible only on small screens) */}
                <div className="md:hidden w-full h-56 rounded-3xl overflow-hidden mb-2 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 to-transparent z-10" />
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80" />
                </div>

                {/* Desktop hover image reveal (v0/21st.dev style) */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-48 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 pointer-events-none z-10 rounded-[2rem] overflow-hidden shadow-2xl rotate-3 group-hover:rotate-0">
                  <img src={item.image} alt="" className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 z-20">
                  <h3 className="font-display text-3xl md:text-4xl text-offwhite uppercase tracking-tighter group-hover:text-ember transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-offwhite/50 font-body font-light text-base md:text-lg mt-2 max-w-lg">
                    {item.description}
                  </p>
                </div>
                
                <div className="z-20 flex items-center gap-6">
                  {item.tag && (
                    <span className="hidden sm:inline-block bg-white/5 border border-white/10 text-white/70 text-xs font-display tracking-widest uppercase px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  )}
                  <span className="font-display text-2xl md:text-3xl text-offwhite whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center">
        <Button href={`${import.meta.env.BASE_URL}menu/bbs-menu.pdf`} target="_blank" variant="outline" className="rounded-full border-white/20 px-12">
          تحميل المنيو (PDF)
        </Button>
      </div>
    </Section>
  );
}
