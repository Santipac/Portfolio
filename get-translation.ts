'server-only';
import type { Locale } from './i18n-config';

// We enumerate all translations here for better linting and typescript support
// We also get the default import for cleaner types
const translations = {
  es: () => import('./translations/es.json').then(module => module.default),
  en: () => import('./translations/en.json').then(module => module.default),
};

export const getTranslation = async (locale: Locale) => translations[locale]();
