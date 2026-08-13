import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import logoImg from '../assets/bbs logo white no bg.png';

const LANGUAGES = [
  { code: 'ar', label: 'العربية', flagUrl: 'https://flagcdn.com/w40/sy.png', dir: 'rtl' },
  { code: 'en', label: 'English', flagUrl: 'https://flagcdn.com/w40/gb.png', dir: 'ltr' },
  { code: 'tr', label: 'Türkçe', flagUrl: 'https://flagcdn.com/w40/tr.png', dir: 'ltr' }
];

export function LanguageSelectionScreen() {
  const { currentLanguage, changeLanguage, t } = useLanguage();

  if (currentLanguage) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="language-selection"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal-dark"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <img src={logoImg} alt="BBS Logo" className="h-32 object-contain" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl font-display text-offwhite mb-8 text-center"
        >
          اختر لغتك <br />
          <span className="text-lg md:text-xl text-offwhite/60 font-body mt-2 block">
            Choose your language / Dilinizi seçin
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          {LANGUAGES.map((lang, index) => (
            <motion.button
              key={lang.code}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => changeLanguage(lang.code)}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-ember hover:border-ember transition-colors duration-300 group min-w-[200px] justify-center"
            >
              <img src={lang.flagUrl} alt={`${lang.label} flag`} className="w-8 h-auto object-contain shadow-sm group-hover:scale-110 transition-transform duration-300 rounded-[2px]" />
              <span className="text-xl font-display text-offwhite">{lang.label}</span>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
