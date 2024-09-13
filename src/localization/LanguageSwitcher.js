import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <div className="language-switcher">
            <FaGlobe className="language-icon" />
            <select
                className="language-select"
                onChange={handleLanguageChange}
                value={i18n.language}
            >
                <option value="en">English</option>
                <option value="ar">Arabic</option>
            </select>
        </div>
    );
};

export default LanguageSwitcher;
