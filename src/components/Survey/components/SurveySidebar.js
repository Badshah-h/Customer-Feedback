import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../../assets/images/logo.png';

const SurveySidebar = ({ title, description }) => {
    const { t, i18n } = useTranslation();

    return (
        <div className="job-wizard-left-area position-relative">
            <div className="pseudo-wrapper">
                <div className="survey-form-img">
                    <img src={logo} alt={t('logoAltText')} className="center-image" />
                </div>
                <div className="job-wizard-left-text">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
            <div className="w-copyright bottom-0 text-left">
                {t('survey.copyright')}
            </div>
        </div>
    );
};

export default memo(SurveySidebar);
