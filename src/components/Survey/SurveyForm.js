import React, { useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import RadioComponent from '../../components/Survey/components/RadioComponent.js';
import RatingComponent from '../../components/Survey/components/RatingComponent.js';
import ContactComponent from '../../components/Survey/components/ContactComponent.js';
import SurveyStepPanel from './SurveyStepPanel.js';
import useSurveyQuestions from '../../hooks/useSurveyQuestions.js';
import {useSurveyContext} from "./context/SurveyContext.js";

const SurveyForm = () => {
        const { t, i18n } = useTranslation();
        const {
            formValues,
            handleSubmit,
            currentStep,
            setCurrentStep,
            handleOptionChange,
            handleTextareaChange,
            handleStarClick
        } = useSurveyContext();

        const language = i18n.language;
        const { surveyQuestions, loading } = useSurveyQuestions(language);

        const totalSteps = useMemo(() => surveyQuestions.length, [surveyQuestions]);
        const step = useMemo(() => surveyQuestions[currentStep - 1] || {}, [currentStep, surveyQuestions]);

        const handlePrevStep = () => {
            setCurrentStep(prev => Math.max(prev - 1, 1));
        };

        const handleNextStep = () => {
            setCurrentStep(prev => Math.min(prev + 1, totalSteps));
        };

        const componentMap = useMemo(() => ({
            radio: RadioComponent,
            rating: RatingComponent,
            contact: ContactComponent,
        }), []);


    const renderOptions = useCallback(() => {
        const Component = componentMap[step.type];
        return Component ? (
            <Component
                step={step}
                value={formValues[step.stepNumber] || ''}
                handleOptionChange={handleOptionChange}
                handleStarClick={handleStarClick}
                handleTextareaChange={handleTextareaChange}
            />
        ) : null;
    }, [step, componentMap, formValues, handleOptionChange, handleStarClick, handleTextareaChange]);

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
            onSubmit={handleSubmit}
        >
            <>
                <div className="survey-header">
                    <div className="jw-top-title">
                        <span>{currentStep} {t('survey.of')} {totalSteps} {t('survey.steps')}</span>
                        <h2>{step?.question || t('survey.defaultQuestion')}</h2>
                    </div>
                </div>

                {renderOptions()}

                {step?.hasTextarea && (
                    <div className="service-textbox">
                         <textarea
                             value={formValues[currentStep]?.textarea || ''}
                             placeholder={t('survey.additionalMessage')}
                             onChange={(e) => handleTextareaChange(currentStep, e.target.value)}
                         />
                    </div>
                )}
            </>
        </SurveyStepPanel>
    );
};

export default SurveyForm;
