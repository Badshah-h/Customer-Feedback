import React from 'react';
import SurveySidebar from './SurveySidebar.js';
import NavigationControls from './NavigationControls.js';
import surveyQuestions from "./surveyQuestions.js";
import PropTypes from "prop-types";

const SurveyStepPanel = ({ currentStep, totalSteps, handlePrevStep, handleNextStep, onLanguageChange,title, description, children }) => {
    const stepIndex = currentStep - 1;
    const step = surveyQuestions[stepIndex];

    return (

            <div className="wizard-content-1 clearfix">
                <div className="steps  position-absolute clearfix">
                    <ul className="tablist multisteps-form__progress">
                        {Array.from({ length: totalSteps }, (_, index) => (
                            <li
                                key={index}
                                className={`multisteps-form__progress-btn ${
                                    currentStep === index + 1 ? 'js-active current' : ''
                                }`}
                            ></li>
                        ))}
                    </ul>

                </div>

                <div className="step-inner-content clearfix position-relative">
                    <div className="language-switcher">
                        <button className="language-button" onClick={() => onLanguageChange('en')}>
                            English
                        </button>
                        <button className="language-button" onClick={() => onLanguageChange('ar')}>
                            العربية
                        </button>
                    </div>
                    <form
                        className="multisteps-form__form"
                        action="#"
                        id="wizard"
                        method="POST"
                        >
                        <div className="form-area position-relative" >
                            <div className={`multisteps-form__panel fadeIn ${'js-active'}`} data-animation="fadeIn">
                                <div className="wizard-forms position-relative" >
                                    <div className="job-style-two-content d-flex" >
                                        <SurveySidebar title={title || step.title} description={description || step.description} />

                                        <div className={`job-wizard-right-area survey-right-content-2`}>
                                            {children}

                                            <NavigationControls
                                                currentStep={currentStep}
                                                totalSteps={totalSteps}
                                                onPrev={handlePrevStep}
                                                onNext={handleNextStep}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

    );
};

SurveyStepPanel.propTypes = {
    currentStep: PropTypes.number.isRequired,
    totalSteps: PropTypes.number.isRequired,
    handlePrevStep: PropTypes.func.isRequired,
    handleNextStep: PropTypes.func.isRequired,
    onLanguageChange: PropTypes.func.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node.isRequired,
};

SurveyStepPanel.defaultProps = {
    title: 'Default Title',
    description: 'Default Description',
};

export default SurveyStepPanel;
