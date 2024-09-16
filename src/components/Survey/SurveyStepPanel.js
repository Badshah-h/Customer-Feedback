import React, { memo } from 'react';
import PropTypes from 'prop-types';
import SurveySidebar from './components/SurveySidebar.js';
import NavigationControls from './components/NavigationControls.js';
import {useSurveyContext} from "./context/SurveyContext.js";
import ThankYouComponent from "./components/ThankYou.js";



const SurveyStepPanel = memo(({
                                  currentStep,
                                  totalSteps,
                                  handlePrevStep,
                                  handleNextStep,
                                  handleStarClick,
                                  title,
                                  description,
                                  onSubmit,
                                  children,
                              }) => {
     const { handleOptionChange, isSubmitted } = useSurveyContext();
    // Clone children and pass necessary props
    const clonedChildren = React.Children.map(children, (child) =>
        React.cloneElement(child, {
            currentStep,
            onOptionChange: handleOptionChange,
            handleStarClick: handleStarClick,
        })
    );

    return (
        <>
            <div className="steps-container">
                <ul className="steps-list">
                    {Array.from({ length: totalSteps }, (_, index) => (
                        <li
                            key={index}
                            className={`steps-item ${currentStep > index + 1 ? 'completed' : ''} ${currentStep === index + 1 ? 'active' : ''}`}
                        >
                            <div className="checkmark">&#10003;</div>
                        </li>
                    ))}
                </ul>
            </div>

            <form  onSubmit={onSubmit} noValidate>
                    <div className={`form-panel ${currentStep ? 'active' : ''}`}>
                            <div className="job-style-content">
                                <SurveySidebar
                                    title={title}
                                    description={description}
                                    currentStep={currentStep}
                                    totalSteps={totalSteps}
                                />
                                <div className="survey-right-area">
                                    <div className="survey-content">
                                        {isSubmitted ? (
                                            <ThankYouComponent />
                                        ) : (
                                            <>
                                                {clonedChildren}
                                                <NavigationControls
                                                    currentStep={currentStep}
                                                    totalSteps={totalSteps}
                                                    onPrev={handlePrevStep}
                                                    onNext={handleNextStep}
                                                />
                                            </>
                                        )}

                                    </div>
                                </div>
                            </div>
                    </div>
                </form>
        </>
    );
});

SurveyStepPanel.propTypes = {
    currentStep: PropTypes.number.isRequired,
    totalSteps: PropTypes.number.isRequired,
    handlePrevStep: PropTypes.func.isRequired,
    handleNextStep: PropTypes.func.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};


export default SurveyStepPanel;
