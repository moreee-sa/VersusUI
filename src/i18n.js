import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      it: {
        translation: {
          realTimeScore: "Una sovrapposizione di punteggio in tempo reale per sfide amichevoli 1vs1 e scontri a squadre.",
          startOverlay: "Avvia sovrapposizione",
          helpGuide: "Hai bisogno di aiuto? Consulta la guida! (Presto)",
          comingSoon: "In arrivo",
        },
      },
      en: {
        translation: {
          realTimeScore: "A Real-time score overlay for friendly 1vs1 and team face-offs.",
          startOverlay: "Start Overlay",
          helpGuide: "Need help? Check the guide! (Soon)",
          comingSoon: "Coming soon",
        },
      },
    },    
    detection: {
      order: ['navigator'],
      caches: [],
    }
  });

export default i18n;