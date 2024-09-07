import React from 'react';
import PropTypes from 'prop-types';
import VeryBad from '../../../assets/emojis/sr1.png';
import Bad from '../../../assets/emojis/sr2.png';
import Average from '../../../assets/emojis/sr3.png';
import Happy from '../../../assets/emojis/sr4.png';

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

const getImageForOption = (filename) => {
    return optionImageMap[filename] || null;
};

const RadioComponent = ({ step, currentStep, handleChange }) => {
    return (
        <div className="service-review">
            <ul>
                {step.options.map(({ value, imgSrc }) => (
                    <li key={value}>
                        <label>
                            <input
                                type="radio"
                                name={`survey_step_${currentStep}`}
                                className="ser_rev"
                                value={value}
                                onChange={() => handleChange(value)}
                                aria-label={value}
                            />
                            {imgSrc && (
                                <span className="service-review-img">
                                    <img src={getImageForOption(imgSrc)} alt={value} />
                                </span>
                            )}
                            <span className="review_select"></span>
                            <span className="service-review-text text-capitalize">{value}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Define PropTypes
RadioComponent.propTypes = {
    step: PropTypes.shape({
        options: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.string.isRequired,
                imgSrc: PropTypes.string
            })
        ).isRequired
    }).isRequired,
    currentStep: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default RadioComponent;
