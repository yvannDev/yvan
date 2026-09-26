import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    () => localStorage.getItem('language') || 'en'
  );

  const toggleLanguage = () => {
    const nextLanguage = language === 'en' ? 'fr' : 'en';
    localStorage.setItem('language', nextLanguage);
    setLanguage(nextLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage doit être utilisé dans un LanguageProvider');
  }

  return context;
}