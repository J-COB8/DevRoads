// src/i18n/index.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// EN - Inglés
import about_en from './locales/en/about.json';
import contribute_en from './locales/en/contribute.json';
import footer_en from './locales/en/footer.json';
import home_en from './locales/en/home.json';
import navbar_en from './locales/en/navbar.json';
import overviewComputing_en from './locales/en/overviewComputing.json';

// ES - Español
import about_es from './locales/es/about.json';
import contribute_es from './locales/es/contribute.json';
import footer_es from './locales/es/footer.json';
import home_es from './locales/es/home.json';
import navbar_es from './locales/es/navbar.json';
import overviewComputing_es from './locales/es/overviewComputing.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                about: about_en,
                contribute: contribute_en,
                footer: footer_en,
                home: home_en,
                navbar: navbar_en,
                overviewComputing: overviewComputing_en
            },
            es: {
                about: about_es,
                contribute: contribute_es,
                footer: footer_es,
                home: home_es,
                navbar: navbar_es,
                overviewComputing: overviewComputing_es
            }
        },
        fallbackLng: 'en',
        ns: ['about', 'contribute', 'footer', 'home', 'navbar', 'overviewComputing'],
        defaultNS: 'home', // Puedes elegir el namespace más usado
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;