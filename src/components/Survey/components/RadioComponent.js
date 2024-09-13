import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import VeryBad from '../../../assets/emojis/sr1.png';
import Bad from '../../../assets/emojis/sr2.png';
import Average from '../../../assets/emojis/sr3.png';
import Happy from '../../../assets/emojis/sr4.png';
import {useSurveyContext} from "../context/SurveyContext.js";

// Define mappings for option values to image sources
const optionImageMap = {
    'Very Bad': VeryBad,
    'Bad': Bad,
    'Average': Average,
    'Happy': Happy,
    'Poor': VeryBad,
    'Averages': Bad,
    'Good': Average,
    'Excellent': Happy,
};

const getImageForOption = (value) => {
    return optionImageMap[value] || null;
};

const RadioComponent = ({ step }) => {

    const { formValues, handleOptionChange } = useSurveyContext();

    // Define handleRadioChange function
    const handleRadioChange = useCallback((stepNumber, value) => {
        handleOptionChange(stepNumber, 'radio', value);
    }, [handleOptionChange]);

    const selectedOption = formValues[step.stepNumber]?.radio || '';

    const handleChange = (event) => {
        const { value } = event.target;
        handleRadioChange(step.stepNumber, value); // Notify context about the change
    };
    return (
        <div className="service-review">
            {step.options.map(({ value: optionValue, imgSrc }) => (
                <label key={optionValue}
                       className={selectedOption === optionValue ? 'selected' : ''}
                >

                <input
                        type="radio"
                        name={`survey_step_${step.stepNumber}`} // Ensure unique name per step
                        className="ser_rev"
                        value={optionValue}
                        checked={step.value === optionValue} // Control checked state
                        onChange={handleChange}
                        aria-label={optionValue}
                    />
                    {imgSrc && (
                        <span className="service-review-img">
                            <img src={getImageForOption(imgSrc)} alt={optionValue} />
                        </span>
                    )}
                    <span className="review_select"></span>
                    <span className="service-review-text text-capitalize">{optionValue}</span>
                </label>
            ))}
        </div>
    );
};

RadioComponent.propTypes = {
    step: PropTypes.shape({
        stepNumber: PropTypes.number.isRequired,
        options: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.string.isRequired,
            })
        ).isRequired,
        value: PropTypes.string,
    }).isRequired,
};

export default RadioComponent;
