import { Section, SectionHeading } from "./ui/Section";
import { menuCategories } from "../data/menu";
import { motion } from "framer-motion";

export function MenuCategories() {
  return (
    <Section id="categories" className="bg-[#0f0f0f] border-t border-white/5 py-24" containerClass="md:px-12">
      <SectionHeading 
        title="ماذا نقدم" 
        subtitle="أقسام المنيو" 
        className="mb-16"
        align="center"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[180px]">
        {menuCategories.map((category, i) => {
          // Create an irregular bento box layout
          const spans = [
            "md:col-span-2 lg:col-span-3 rounded-3xl", // Shawarma
            "md:col-span-2 lg:col-span-3 rounded-[3rem] md:rounded-3xl", // Barbecue
            "md:col-span-4 lg:col-span-2 rounded-2xl", // Burgers
            "md:col-span-2 lg:col-span-4 rounded-[4rem]", // Meals
            "md:col-span-2 lg:col-span-3 rounded-xl", // Sides
            "md:col-span-2 lg:col-span-3 rounded-t-[3rem] rounded-b-xl", // Salads
          ];
          
          return (
            <motion.a
              key={category.id}
              href="#menu"
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative overflow-hidden bg-[#161616] border border-white/10 hover:border-ember/50 p-8 flex flex-col justify-end items-start ${spans[i]}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 via-charcoal-dark/20 to-transparent z-10" />
              
              <div className="relative z-20 flex flex-col gap-2 w-full">
                <div className="flex justify-between items-center w-full">
                  <span className="font-display text-4xl md:text-5xl uppercase tracking-tighter text-offwhite group-hover:text-ember transition-colors duration-300">
                    {category.label}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-ember group-hover:border-ember transition-all duration-300 translate-x-4 group-hover:translate-x-0 transform rotate-180">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                <p className="text-offwhite/50 font-body text-sm md:text-base font-light">
                  {category.description}
                </p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </Section>
  );
}
