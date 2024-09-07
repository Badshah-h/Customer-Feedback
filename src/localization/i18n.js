import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './lang/en/translation.json';
import ar from './lang/ar/translation.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            ar: { translation: ar }
        },
        lng: 'en', // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false,
        }
    });

export default i18n;
