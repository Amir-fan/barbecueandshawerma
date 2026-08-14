import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "./ui/Button";
import { restaurant } from "../data/restaurant";
import logoImg from "../assets/bbs logo white no bg.png";

import { useLanguage } from "../context/LanguageContext";

const NAV_LINKS = [
  { key: "nav.home", href: "#home" },
  { key: "nav.menu", href: "#menu" },
  { key: "nav.about", href: "#about" },
  { key: "nav.contact", href: "#contact" }
];

export function Header() {
  const { t, currentLanguage, changeLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

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
                key={link.key}
                href={link.href}
                className="text-sm font-display uppercase tracking-widest text-offwhite/80 hover:text-ember transition-colors duration-300"
              >
                {t(link.key)}
              </a>
            ))}
            <div className="w-px h-6 bg-white/10 mx-2" />
            <div className="relative group">
              <button className="flex items-center gap-2 text-offwhite/80 hover:text-ember transition-colors duration-300">
                <Globe size={20} />
                <span className="text-sm font-display uppercase">{currentLanguage}</span>
              </button>
              <div className="absolute top-full right-0 mt-2 py-2 w-32 bg-charcoal-dark border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col">
                <button onClick={() => changeLanguage('ar')} className="px-4 py-2 text-sm text-offwhite hover:bg-white/5 hover:text-ember text-right">العربية</button>
                <button onClick={() => changeLanguage('en')} className="px-4 py-2 text-sm text-offwhite hover:bg-white/5 hover:text-ember text-right">English</button>
                <button onClick={() => changeLanguage('tr')} className="px-4 py-2 text-sm text-offwhite hover:bg-white/5 hover:text-ember text-right">Türkçe</button>
              </div>
            </div>
            <Button href={restaurant.whatsapp} target="_blank" rel="noopener noreferrer" variant="primary" size="sm">
              {t("common.orderNow")}
            </Button>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden z-50">
            <div className="relative">
              <button 
                onClick={() => setMobileLangOpen(!mobileLangOpen)}
                className="flex items-center gap-1 text-offwhite/80 p-2 hover:text-ember transition-colors duration-300"
              >
                <Globe size={24} />
                <span className="text-xs font-display uppercase">{currentLanguage}</span>
              </button>
              
              <AnimatePresence>
                {mobileLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 py-2 w-32 bg-charcoal-dark border border-white/10 rounded-xl shadow-xl flex flex-col z-[60]"
                  >
                    <button onClick={() => { changeLanguage('ar'); setMobileLangOpen(false); }} className="px-4 py-2 text-sm text-offwhite hover:bg-white/5 hover:text-ember text-right">العربية</button>
                    <button onClick={() => { changeLanguage('en'); setMobileLangOpen(false); }} className="px-4 py-2 text-sm text-offwhite hover:bg-white/5 hover:text-ember text-right">English</button>
                    <button onClick={() => { changeLanguage('tr'); setMobileLangOpen(false); }} className="px-4 py-2 text-sm text-offwhite hover:bg-white/5 hover:text-ember text-right">Türkçe</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <button
              className="text-offwhite p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
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
                key={link.key}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-display uppercase tracking-widest text-offwhite hover:text-ember transition-colors duration-300"
              >
                {t(link.key)}
              </a>
            ))}

            <Button href={restaurant.whatsapp} target="_blank" rel="noopener noreferrer" variant="primary" className="mt-8 w-64">
              {t("common.orderWhatsapp")}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
