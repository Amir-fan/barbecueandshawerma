import { Section, SectionHeading } from "./ui/Section";
import { restaurant } from "../data/restaurant";
import { Button } from "./ui/Button";

export function LocationSection() {
  return (
    <Section className="bg-charcoal border-t border-white/5 pb-0">
      <SectionHeading 
        title="تجدنا على البحر" 
        subtitle="الموقع وأوقات العمل" 
        align="center"
        className="mb-16 md:mb-24"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-charcoal-dark border-t border-white/5">
        {/* Info Side */}
        <div className="p-8 md:p-16 flex flex-col justify-center gap-12 lg:border-r border-b lg:border-b-0 border-white/5">
          <div>
            <h3 className="font-display text-3xl md:text-4xl text-offwhite uppercase mb-4">
              {restaurant.name}
            </h3>
            <p className="text-offwhite/70 font-body text-lg font-light">
              {restaurant.location}
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <p className="font-display text-sm tracking-widest text-ember uppercase mb-2">أوقات العمل</p>
              <p className="text-offwhite/90 font-body text-lg">يومياً: {restaurant.openingHours.weekdays}</p>
            </div>
            
            <div>
              <p className="font-display text-sm tracking-widest text-ember uppercase mb-2">رقم الهاتف</p>
              <p className="text-offwhite/90 font-body text-lg" dir="ltr" style={{ textAlign: "right" }}>{restaurant.phone}</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button href={restaurant.whatsapp} target="_blank" rel="noopener noreferrer" variant="primary">
              تواصل عبر واتساب
            </Button>
            <Button href={restaurant.mapsUrl} target="_blank" rel="noopener noreferrer" variant="outline" className="border-white/20">
              دليل الموقع
            </Button>
          </div>
        </div>

        {/* Map Side */}
        <div className="w-full h-[400px] lg:h-auto min-h-[500px] relative">
          <iframe 
            src={restaurant.mapsUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            title="Google Maps Location"
          />
        </div>
      </div>
    </Section>
  );
}
