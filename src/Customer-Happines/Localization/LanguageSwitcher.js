import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({ onLanguageChange }) => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (lng) => {
        i18n.changeLanguage(lng);
        if (onLanguageChange) {
            onLanguageChange(lng);
        }
    };

    return (
        <div className="language-switcher">
            <button className="language-button" onClick={() => handleLanguageChange('en')}>English</button>
            <button className="language-button" onClick={() => handleLanguageChange('ar')}>العربية</button>
        </div>
    );
};

export default LanguageSwitcher;
