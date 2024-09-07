import { LANGUAGE_EN } from './constants.js';

export const getLocalizedTexts = (keys, language, translations) => {
    const fallbackLanguage = LANGUAGE_EN;
    const cache = {};

    return keys.reduce((result, key) => {
        if (cache[key]) {
            result[key] = cache[key];
            return result;
        }

        const localizedText = translations[language]?.[key]
            || translations[fallbackLanguage]?.[key]
            || `No localization for: ${key}`; // Simple message for missing localization

        cache[key] = localizedText;
        result[key] = localizedText;
        return result;
    }, {});
};
