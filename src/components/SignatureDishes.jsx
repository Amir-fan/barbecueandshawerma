import { Section, SectionHeading } from "./ui/Section";
import { signatureItems } from "../data/menu";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";

export function SignatureDishes() {
  return (
    <Section id="signature" className="bg-[#050505] overflow-hidden" containerClass="md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-6">
        <SectionHeading 
          title="أطباق مميزة" 
          subtitle="اختيار الشيف" 
          className="mb-0"
        />
        <Button href="#menu" variant="outline" className="hidden md:inline-flex rounded-full border-white/20 text-offwhite hover:border-ember hover:bg-white/5">
          تصفح المنيو كاملاً
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {signatureItems.slice(0, 4).map((item, i) => (
          <motion.div 
            key={item.id} 
            whileHover={{ y: -8 }}
            className={`group relative overflow-hidden bg-charcoal h-[400px] md:h-[500px] ${
              i === 0 ? "rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-xl rounded-bl-xl" :
              i === 1 ? "rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-xl rounded-br-xl" :
              i === 2 ? "rounded-bl-[4rem] rounded-tr-[4rem] rounded-tl-xl rounded-br-xl" :
              "rounded-br-[4rem] rounded-tl-[4rem] rounded-tr-xl rounded-bl-xl"
            }`}
          >
            <div className="absolute inset-0 z-0">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-90 grayscale-[30%] group-hover:grayscale-0 mix-blend-luminosity hover:mix-blend-normal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>
            
            <div className="absolute top-6 left-6 z-20">
              {item.tag && (
                <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-display tracking-widest uppercase px-4 py-2 rounded-full shadow-lg">
                  {item.tag}
                </div>
              )}
            </div>
            
            <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex justify-between items-end gap-4">
                <h3 className="font-display text-4xl md:text-5xl text-offwhite uppercase tracking-tighter leading-none group-hover:text-ember transition-colors duration-300">
                  {item.name}
                </h3>
              </div>
              <p className="text-offwhite/60 font-body font-light text-base md:text-lg leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {item.description}
              </p>
              <div className="font-display text-2xl text-offwhite mt-2">
                {item.price}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center md:hidden">
        <Button href="#menu" variant="outline" className="w-full rounded-full border-white/20">
          تصفح المنيو كاملاً
        </Button>
      </div>
    </Section>
  );
}
