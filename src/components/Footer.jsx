import { restaurant } from "../data/restaurant";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        {/* Logo / Brand */}
        <div>
          <span className="font-display text-2xl tracking-wide uppercase font-bold text-offwhite/50 block mb-2">
            {restaurant.shortName}
          </span>
          <p className="font-body font-light text-sm text-offwhite/40">
            {restaurant.name} <br/>
            {restaurant.location}
          </p>
        </div>

        {/* Socials */}
        <div className="flex flex-wrap justify-center gap-6">
          <a href={restaurant.instagram} className="font-display text-sm tracking-widest text-offwhite/40 hover:text-ember transition-colors duration-300 uppercase">
            Instagram
          </a>
          <a href={restaurant.facebook} className="font-display text-sm tracking-widest text-offwhite/40 hover:text-ember transition-colors duration-300 uppercase">
            Facebook
          </a>
          <a href={restaurant.whatsapp} className="font-display text-sm tracking-widest text-offwhite/40 hover:text-ember transition-colors duration-300 uppercase">
            WhatsApp
          </a>
        </div>

        {/* Copyright */}
        <div className="font-body text-xs font-light text-offwhite/30">
          &copy; {currentYear} {restaurant.name}. <br className="md:hidden" /> جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
