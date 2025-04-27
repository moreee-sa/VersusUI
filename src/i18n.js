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
    "resources": {
      "it": {
        "translation": {
          "realTimeScore": "Una sovrapposizione di punteggio in tempo reale per sfide amichevoli 1vs1 e scontri a squadre.",
          "startOverlay": "Apri sovrapposizione",
          "helpGuide": "Hai bisogno di aiuto? Consulta la guida! (Presto)",
          "comingSoon": "In arrivo",
          "guide": {
            "introduction": {
              "title": "Introduzione",
              "content": "Benvenuto nella guida introduttiva! Qui troverai tutte le informazioni base per cominciare."
            },
            "setup": {
              "title": "Setup per OBS",
              "content": "Questa guida ti aiuterà a configurare OBS per il miglior utilizzo del nostro overlay."
            }
          }
        }
      },
      "en": {
        "translation": {
          "realTimeScore": "A Real-time score overlay for friendly 1vs1 and team face-offs.",
          "startOverlay": "Open Overlay",
          "helpGuide": "Need help? Check the guide! (Soon)",
          "comingSoon": "Coming soon",
          "guide": {
            "introduction": {
              "title": "Introduction",
              "content": "Welcome to the introduction guide! Here you'll find all the basic information to get started."
            },
            "setup": {
              "title": "Setup for OBS",
              "content": "This guide will help you set up OBS for the best use of our overlay."
            }
          }
        }
      }
    },    
    detection: {
      order: ['navigator'],
      caches: [],
    }
  });

export default i18n;