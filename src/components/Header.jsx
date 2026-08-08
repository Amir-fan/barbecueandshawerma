import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { restaurant } from "../data/restaurant";
import logoImg from "../assets/bbs logo white no bg.png";

const NAV_LINKS = [
  { label: "الرئيسية", href: "#home" },
  { label: "المنيو", href: "#menu" },
  { label: "من نحن", href: "#about" },
  { label: "اتصل بنا", href: "#contact" }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-header py-4 shadow-lg shadow-black/20" : "bg-transparent py-6"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center z-50" aria-label={`${restaurant.name} Home`}>
            <img src={logoImg} alt="BBŞ Logo" className="h-12 md:h-16 object-contain hover:scale-105 transition-transform duration-300" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-display uppercase tracking-widest text-offwhite/80 hover:text-ember transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <div className="w-px h-6 bg-white/10 mx-2" />
            <Button href={restaurant.whatsapp} target="_blank" rel="noopener noreferrer" variant="primary" size="sm">
              اطلب الآن
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-offwhite z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-charcoal-dark/98 backdrop-blur-xl flex flex-col justify-center items-center gap-8 pt-20"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-display uppercase tracking-widest text-offwhite hover:text-ember transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}

            <Button href={restaurant.whatsapp} target="_blank" rel="noopener noreferrer" variant="primary" className="mt-8 w-64">
              اطلب عبر واتساب
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
