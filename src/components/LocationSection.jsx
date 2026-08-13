import { motion } from "framer-motion";
import { restaurant } from "../data/restaurant";
import { Button } from "./ui/Button";
import logoImg from "../assets/bbs logo white no bg.png";
import { useLanguage } from "../context/LanguageContext";

const reveal = (delay = 0) => ({
  initial:     { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: "-50px" },
  transition:  { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

/**
 * Background: a very subtle diagonal dot-grid at ~30px spacing.
 * Dots are small, low opacity — reads as printed material texture,
 * like a navigation chart or a coastal map.
 * No blobs, no gradients, just geometry.
 */
const dotGrid =
  `radial-gradient(circle, rgba(237,232,223,0.1) 1px, transparent 1px)`;

export function LocationSection() {
  const { t, currentLanguage } = useLanguage();
  return (
    <section
      id="location"
      className="relative overflow-hidden border-t border-offwhite/5"
      style={{
        backgroundColor: "#0E0D0B",
        backgroundImage: dotGrid,
        backgroundSize: "28px 28px",
      }}
    >
      {/* Vignette — edges fade to solid so the dot grid is centred */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 35%, #0E0D0B 100%)",
          ].join(","),
        }}
      />

      {/* Coast teal wash — top portion only, very faint */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-80 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(30,74,86,0.09) 0%, transparent 100%)",
        }}
      />

      {/* Coast teal 2px bar at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-coast opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

        <motion.div {...reveal(0)} className="flex items-center gap-4 mb-16">
          <span className="fire-line-short" />
          <span className="font-body text-[11px] tracking-[0.3em] uppercase text-muted">{t("location.title")}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Info column */}
          <div className="flex flex-col gap-9">
            <motion.img {...reveal(0.04)} src={logoImg} alt="BBŞ" className="h-12 object-contain object-right" />

            {/* City — typographically dominant */}
            <motion.div {...reveal(0.08)}>
              <h2 className="font-statement text-7xl md:text-9xl uppercase tracking-tight text-offwhite leading-none mb-2">
                {currentLanguage === 'ar' ? 'جبلة' : currentLanguage === 'tr' ? 'Ceble' : 'Jableh'}
              </h2>
              <p className="font-body text-base text-muted font-light">{t("restaurant.location")}</p>
            </motion.div>

            {/* Fire line divider */}
            <motion.span {...reveal(0.12)} className="fire-line block" />

            {/* Details */}
            <motion.div {...reveal(0.14)} className="grid grid-cols-2 gap-7">
              <div className="flex flex-col gap-2">
                <p className="font-display text-[10px] tracking-[0.28em] uppercase text-ember">{t("location.hours")}</p>
                <p className="font-body text-sm text-offwhite/80 font-light leading-relaxed">{t("restaurant.hoursWeekdays")}</p>
                <p className="font-body text-xs text-muted font-light">{t("location.weekend")}: {t("restaurant.hoursWeekend")}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-display text-[10px] tracking-[0.28em] uppercase text-ember">{t("contact.phone")}</p>
                <p className="font-body text-sm text-offwhite/80 font-light" dir="ltr" style={{ textAlign: currentLanguage === 'ar' ? "right" : "left" }}>
                  {restaurant.phone}
                </p>
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div {...reveal(0.18)} className="flex items-center gap-8 flex-wrap">
              <Button href={restaurant.whatsapp} target="_blank" rel="noopener noreferrer" variant="primary">
                {t("common.orderWhatsapp")}
              </Button>
              <Button href={restaurant.mapsUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
                {currentLanguage === 'ar' ? 'خرائط جوجل ←' : currentLanguage === 'tr' ? 'Google Haritalar ←' : 'Google Maps ←'}
              </Button>
            </motion.div>
          </div>

          {/* Map — rounded-xl, coast teal top accent */}
          <motion.div
            {...reveal(0.06)}
            className="relative overflow-hidden rounded-xl"
            style={{ height: "520px" }}
          >
            <span className="absolute top-0 inset-x-0 h-[2px] bg-coast opacity-55 z-10" />
            <iframe
              src={restaurant.mapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
              title="موقع BBŞ"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
