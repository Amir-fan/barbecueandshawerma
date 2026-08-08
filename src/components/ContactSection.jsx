import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { restaurant } from "../data/restaurant";
import logoImg from "../assets/bbs logo white no bg.png";

/**
 * Grill grate pattern — repeating perpendicular lines at ~48px intervals.
 * Very low opacity so it reads as warmth/texture, not a graphic element.
 * On-brand for a BBQ restaurant. Nothing generated, nothing glossy.
 */
const grillPattern = `
  repeating-linear-gradient(
    0deg,
    transparent,
    transparent 47px,
    rgba(240,234,224,0.035) 47px,
    rgba(240,234,224,0.035) 48px
  ),
  repeating-linear-gradient(
    90deg,
    transparent,
    transparent 47px,
    rgba(240,234,224,0.035) 47px,
    rgba(240,234,224,0.035) 48px
  )
`.trim().replace(/\s+/g, " ");

export function ContactSection() {
  return (
    <section
      id="contact"
      dir="rtl"
      className="relative overflow-hidden border-t border-offwhite/5"
      style={{
        backgroundColor: "#0D0B08",
        backgroundImage: grillPattern,
        paddingTop: "clamp(80px, 12vw, 180px)",
        paddingBottom: "clamp(80px, 12vw, 180px)",
      }}
    >
      {/* Radial vignette from centre — keeps edges darker so grill pattern is subtle */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, #0D0B08 100%)",
        }}
      />

      {/* Ember warmth bleed from bottom-right — barely visible, like heat rising from coals */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full h-48 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(192,75,26,0.06) 0%, transparent 100%)",
        }}
      />

      {/* BBS logo — enormous, barely visible background presence */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <img
          src={logoImg}
          alt=""
          className="w-[82vw] max-w-[800px] opacity-[0.025] object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <span className="fire-line-short block mx-auto" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="font-statement text-[13vw] sm:text-8xl md:text-[9rem] uppercase tracking-tight leading-none text-offwhite mb-8"
        >
          جاهز لتذوق{" "}
          <span className="text-ember">النار؟</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-lg md:text-xl text-muted font-light max-w-md leading-relaxed mb-14"
        >
          طعام ساخن، مكونات طازجة، وضيافة واثقة على الكورنيش في جبلة.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-8"
        >
          <Button
            href={restaurant.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
            className="px-12"
          >
            اطلب عبر واتساب
          </Button>
          <Button
            href={`tel:${restaurant.phone.replace(/\s+/g, "")}`}
            variant="secondary"
          >
            اتصل الآن ←
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
