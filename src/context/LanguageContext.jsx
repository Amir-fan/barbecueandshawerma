import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../locales/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Check local storage or default to null so we can show the selection screen
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem('bbs_language') || null;
  });

  useEffect(() => {
    if (currentLanguage) {
      document.documentElement.lang = currentLanguage;
      document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    }
  }, [currentLanguage]);

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    localStorage.setItem('bbs_language', lang);
  };

  const t = (key) => {
    const lang = currentLanguage || 'ar'; // Default fallback for translation resolution
    const keys = key.split('.');
    let value = translations[lang];

    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        // Fallback to arabic if key is missing in the chosen language (safeguard)
        let fallbackValue = translations['ar'];
        for (const fk of keys) {
           if (fallbackValue && fallbackValue[fk] !== undefined) {
              fallbackValue = fallbackValue[fk];
           } else {
              return key; // If all fails, return key
           }
        }
        return fallbackValue;
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
