import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button.js'; // Adjust path as needed

const NavigationControls = ({ currentStep, totalSteps, onPrev, onNext }) => {
    return (
        <div className="actions">
            <ul>
                {currentStep > 1 && (
                    <Button
                        type="prev"
                        text="Previous"
                        onClick={onPrev}
                        title="PREV"
                        buttonType="button" // Explicitly set type
                    />
                )}
                {currentStep < totalSteps && (
                    <Button
                        type="next"
                        text="Next Question"
                        onClick={onNext}
                        title="NEXT"
                        buttonType="button" // Explicitly set type
                    />
                )}
                {currentStep === totalSteps && (
                    <Button
                        type="submit"
                        text="Submit"
                        title="SUBMIT"
                        buttonType="submit" // Explicitly set type
                    />
                )}
            </ul>
        </div>
    );
};

NavigationControls.propTypes = {
    currentStep: PropTypes.number.isRequired,
    totalSteps: PropTypes.number.isRequired,
    onPrev: PropTypes.func,
    onNext: PropTypes.func,
};

export default NavigationControls;
