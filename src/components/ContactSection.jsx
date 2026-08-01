import { Button } from "./ui/Button";
import { restaurant } from "../data/restaurant";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#111111] text-center border-t border-white/5 px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <span className="w-12 h-px bg-ember mb-6" />
        <h2 className="text-5xl md:text-7xl font-display text-offwhite uppercase mb-8 tracking-tight">
          جوعان؟ <br /> نحن جاهزون.
        </h2>
        <p className="text-offwhite/60 font-body text-lg md:text-xl font-light mb-12">
          النار مشتعلة، والمكونات طازجة. اتصل بنا، اطلب عبر واتساب، أو تفضل بزيارة موقعنا في جبلة.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button href={restaurant.whatsapp} target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
            اطلب عبر واتساب
          </Button>
          <Button href={`tel:${restaurant.phone.replace(/\s+/g, '')}`} variant="secondary" size="lg">
            اتصل الآن
          </Button>
        </div>
      </div>
    </section>
  );
}
