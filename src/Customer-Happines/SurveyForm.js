import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import SurveyStepPanel from "./SurveyStepPanel.js";
import surveyQuestionsEnglish, {  surveyQuestionsArabic } from './surveyQuestions.js';
import RadioComponent from './Questions/RadioComponent.js';
import CheckboxComponent from './Questions/CheckboxComponent.js';
import RatingComponent from './Questions/RatingComponent.js';
import ContactComponent from './Questions/ContactComponent.js';
import TextareaComponent from './Questions/TextareaComponent.js';
import LanguageSwitcher from '../Customer-Happines/Localization/LanguageSwitcher.js';


const SurveyForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedRating, setSelectedRating] = useState(0);
    const [language, setLanguage] = useState('en');
    const { t, i18n } = useTranslation();

    const surveyQuestions = useMemo(() => {
        return language === 'en' ? surveyQuestionsEnglish : surveyQuestionsArabic;
    }, [language]);

    const totalSteps = useMemo(() => surveyQuestions.length, [surveyQuestions]);

    const handlePrevStep = useCallback(() => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    }, []);

    const handleNextStep = useCallback(() => {
        setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }, [totalSteps]);

    const handleStarClick = useCallback((rating) => {
        setSelectedRating(rating);
    }, []);


    const step = useMemo(() => surveyQuestions[currentStep - 1], [currentStep]);

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

    return (

        <SurveyStepPanel
            currentStep={currentStep}
            totalSteps={totalSteps}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
            title={step?.title || 'Default Title'}
            description={step?.description || 'Default Description'}
        >
            <>
                <div className="jw-top-title">
                    <span>{currentStep} of {totalSteps} Answered</span>
                    <h3>{step?.question}</h3>
                </div>

                <LanguageSwitcher onLanguageChange={setLanguage} />

                {renderOptions()}

                {step?.hasTextarea && (
                    <div className="service-textbox position-relative ">
                        <span className="text-center">Your Review</span>
                        <textarea placeholder="Additional message"></textarea>
                    </div>
                )}
            </>
        </SurveyStepPanel>
    );
};

export default React.memo(SurveyForm);
