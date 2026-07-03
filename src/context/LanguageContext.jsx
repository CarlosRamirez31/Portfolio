import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from '../i18n/translations';

const STORAGE_KEY = 'port_lang';
const DEFAULT_LANG = 'en';

const LanguageContext = createContext(null);

function readInitialLang() {
  if (typeof localStorage === 'undefined') return DEFAULT_LANG;
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === 'es' || saved === 'en' ? saved : DEFAULT_LANG;
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readInitialLang);

  useEffect(() => {
    if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'es' : 'en'));
  }, []);

  const value = useMemo(
    () => ({ lang, toggleLang, t: translations[lang] }),
    [lang, toggleLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage debe usarse dentro de <LanguageProvider>');
  return ctx;
}
