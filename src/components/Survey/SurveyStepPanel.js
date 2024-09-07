import React, {memo} from 'react';
import PropTypes from 'prop-types';
import SurveySidebar from './components/SurveySidebar.js';
import NavigationControls from './components/NavigationControls.js';


const SurveyStepPanel = memo(({
                                  currentStep,
                                  totalSteps,
                                  handlePrevStep,
                                  handleNextStep,
                                  title,
                                  description,
                                  children
                              }) => (
    <div className="wizard-content-1 clearfix">
        <div className="steps position-absolute clearfix">
            <ul className="tablist multisteps-form__progress">
                {Array.from({length: totalSteps}, (_, index) => (
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
            <form
                className="multisteps-form__form"
                action="#"
                id="wizard"
                method="POST"
                noValidate
            >
                <div className="form-area position-relative">
                    <div className={`multisteps-form__panel fadeIn ${currentStep ? 'js-active' : ''}`}
                         data-animation="fadeIn">
                        <div className="wizard-forms position-relative">
                            <div className="job-style-two-content d-flex">
                                <SurveySidebar title={title} description={description}/>
                                <div className="job-wizard-right-area survey-right-content-2">
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
));

SurveyStepPanel.propTypes = {
    currentStep: PropTypes.number.isRequired,
    totalSteps: PropTypes.number.isRequired,
    handlePrevStep: PropTypes.func.isRequired,
    handleNextStep: PropTypes.func.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default SurveyStepPanel;
