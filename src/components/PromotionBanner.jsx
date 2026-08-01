import { Button } from "./ui/Button";
import { restaurant } from "../data/restaurant";

export function PromotionBanner() {
  return (
    <section className="py-24 bg-[#0A0A0A] relative px-4 md:px-12">
      <div className="max-w-7xl mx-auto bg-charcoal-dark rounded-[3rem] md:rounded-[5rem] overflow-hidden relative border border-white/10 shadow-2xl">
        {/* Background Graphic */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=1200&q=80" 
            alt="Mixed Grill Platter" 
            className="w-full h-full object-cover mix-blend-luminosity opacity-40 hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark via-charcoal-dark/90 to-transparent" />
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-12 md:p-24">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-ember/30 bg-ember/10 backdrop-blur-md self-start">
              <span className="w-2.5 h-2.5 rounded-full bg-ember animate-pulse shadow-[0_0_10px_rgba(217,87,36,0.8)]" />
              <span className="text-ember font-display text-sm tracking-widest uppercase">
                عرض العطلة
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-[5rem] font-display text-offwhite uppercase leading-[1.2] tracking-tight">
              بوكس المشاوي <br/> <span className="text-ember">للعائلة</span>
            </h2>
            
            <p className="text-offwhite/60 font-body text-lg md:text-xl max-w-md font-light leading-relaxed">
              تشكيلة سخية من أفضل اللحوم المشوية على الفحم، تقدم مع الخبز الطازج والمقبلات الأصيلة. مثالية للمشاركة على شاطئ البحر.
            </p>
            
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-6">
              <span className="font-display text-3xl md:text-4xl text-offwhite bg-white/5 px-8 py-4 rounded-full border border-white/10">
                ٠٠٠,٠٠٠ ل.س
              </span>
              <Button href={restaurant.whatsapp} target="_blank" rel="noopener noreferrer" variant="primary" className="rounded-full px-10 text-lg">
                اطلب عبر واتساب
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
