import { restaurant } from "../data/restaurant";
import { Phone, MapPin } from "lucide-react";
import logoImg from "../assets/bbs logo white no bg.png";
import { DevTag } from "./DevTag";
import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { t, currentLanguage } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-charcoal-dark border-t border-offwhite/5 grain-overlay"
    >
      {/* Coast teal top bar */}
      <div className="w-full h-[2px] bg-coast opacity-30" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <img src={logoImg} alt="BBŞ" className="h-11 object-contain object-right" />
            <p className="font-body text-sm text-muted font-light leading-relaxed max-w-[200px]">
              {t("footer.desc")}
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="font-display text-[10px] tracking-[0.28em] uppercase text-ember mb-1">{t("contact.title")}</p>
            <a
              href={`tel:${restaurant.phone.replace(/\s+/g, "")}`}
              className="font-body text-sm text-muted hover:text-offwhite/80 transition-colors font-light flex items-center gap-2"
            >
              <Phone size={13} className="opacity-50 shrink-0" />
              <span dir="ltr">{restaurant.phone}</span>
            </a>
            <a
              href={restaurant.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-muted hover:text-offwhite/80 transition-colors font-light"
            >
              {t("common.orderWhatsapp")}
            </a>
            <a
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-muted hover:text-offwhite/80 transition-colors font-light flex items-center gap-2"
            >
              <MapPin size={13} className="opacity-50 shrink-0" />
              {t("restaurant.location")}
            </a>
          </div>

          {/* Social + hours */}
          <div className="flex flex-col gap-3">
            <p className="font-display text-[10px] tracking-[0.28em] uppercase text-ember mb-1">{t("contact.followUs")}</p>
            <a href={restaurant.instagram} className="font-body text-sm text-muted hover:text-offwhite/80 transition-colors font-light">
              Instagram
            </a>
            <a href={restaurant.facebook} className="font-body text-sm text-muted hover:text-offwhite/80 transition-colors font-light">
              Facebook
            </a>
            <div className="mt-3">
              <p className="font-display text-[10px] tracking-[0.28em] uppercase text-ember mb-2">{t("location.hours")}</p>
              <p className="font-body text-sm text-muted font-light">{t("restaurant.hoursWeekdays")}</p>
            </div>
          </div>

        </div>

        {/* Fire-line divider */}
        <span className="fire-line block mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-muted/50 font-light">
            &copy; {currentYear} {t("restaurant.name")}. {t("footer.rights")}.
          </p>
          <p className="font-body text-[10px] tracking-[0.22em] uppercase text-muted/35">
            Designed with restraint
          </p>
        </div>

        {/* Fanari Labs credit */}
        <DevTag />
      </div>
    </footer>
  );
}
