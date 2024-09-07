import React, { useState, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../localization/LanguageSwitcher.js';
import RadioComponent from '../../components/Survey/components/RadioComponent.js';
import CheckboxComponent from '../../components/Survey/components/CheckboxComponent.js';
import RatingComponent from '../../components/Survey/components/RatingComponent.js';
import TextareaComponent from '../../components/Survey/components/TextareaComponent.js';
import ContactComponent from '../../components/Survey/components/ContactComponent.js';
import SurveyStepPanel from './SurveyStepPanel.js';
import useSurveyQuestions from '../../hooks/useSurveyQuestions.js';

const SurveyForm = () => {
    const { t, i18n } = useTranslation();
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedRating, setSelectedRating] = useState(0);

    const language = i18n.language;
    const { surveyQuestions, loading } = useSurveyQuestions(language);

    const totalSteps = useMemo(() => surveyQuestions.length, [surveyQuestions]);
    const step = useMemo(() => surveyQuestions[currentStep - 1] || {}, [currentStep, surveyQuestions]);

    const handlePrevStep = useCallback(() => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    }, []);

    const handleNextStep = useCallback(() => {
        setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }, [totalSteps]);

    const handleStarClick = useCallback((rating) => {
        setSelectedRating(rating);
    }, []);

    const componentMap = useMemo(() => ({
        radio: RadioComponent,
        checkbox: CheckboxComponent,
        rating: RatingComponent,
        textarea: TextareaComponent,
        contact: ContactComponent,
    }), []);

    const renderOptions = useCallback(() => {
        if (!step || !step.options) return null;

        const Component = componentMap[step.type];
        return Component ? (
            <Component
                step={step}
                currentStep={currentStep}
                selectedRating={selectedRating}
                handleStarClick={handleStarClick}
            />
        ) : null;
    }, [step, currentStep, selectedRating, handleStarClick, componentMap]);

    if (loading) {
        return <div>{t('loading')}</div>;
    }

    return (
        <SurveyStepPanel
            currentStep={currentStep}
            totalSteps={totalSteps}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
            title={step?.title || t('survey.defaultTitle')}
            description={step?.description || t('survey.defaultDescription')}
        >
            <>
                <div className="jw-top-title">
                    <span>{currentStep} {t('survey.of')} {totalSteps} {t('survey.steps')}</span>
                    <h3>{step?.question || t('survey.defaultQuestion')}</h3>
                </div>

                <LanguageSwitcher />

                {renderOptions()}

                {step?.hasTextarea && (
                    <div className="service-textbox position-relative">
                        <span className="text-center">{t('survey.yourReview')}</span>
                        <textarea placeholder={t('survey.additionalMessage')}></textarea>
                    </div>
                )}
            </>
        </SurveyStepPanel>
    );
};

export default SurveyForm;
