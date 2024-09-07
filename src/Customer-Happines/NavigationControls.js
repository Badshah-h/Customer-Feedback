import React from 'react';

const NavigationControls = ({ currentStep, totalSteps, onPrev, onNext }) => {

    return (
        <div className="actions">
            <ul>
                {currentStep > 1 && (
                    <li>
                        <span className="js-btn-prev" title="PREV" onClick={onPrev}>Previous</span>
                    </li>
                )}
                {currentStep < totalSteps && (
                    <li>
                        <span className="js-btn-next" title="NEXT" onClick={onNext}>Next Question</span>
                    </li>
                )}
                {currentStep === totalSteps && (
                    <li>
                        <span className="js-btn-submit" title="SUBMIT" >Submit</span>
                    </li>
                )}
            </ul>
        </div>
    );
};


export default NavigationControls;
