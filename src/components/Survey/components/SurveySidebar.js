import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import logo from '../../../assets/images/logo.png';
import LanguageSwitcher from "../../../localization/LanguageSwitcher.js";

const SurveySidebar = memo(({ title, description, currentStep, totalSteps }) => {
    const { t } = useTranslation();

    return (
        <div className="survey-left-area">
            <div className="card">
                <div className="header">
                    <div className="language-switcher">
                        <LanguageSwitcher />
                    </div>
                </div>
                <div className="survey-form-img">
                    <img src={logo} alt={t('logoAltText')} className="center-image" />
                </div>
                <div className="job-wizard-left-text">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className="w-copyright">
                    {t('survey.copyright')}
                </div>
            </div>
        </div>

    );
});

SurveySidebar.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    currentStep: PropTypes.number.isRequired,
    totalSteps: PropTypes.number.isRequired,
};

export default SurveySidebar;
