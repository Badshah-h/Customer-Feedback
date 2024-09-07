import React from 'react';

const RadioComponent = ({ step, currentStep, handleChange }) => {
    return (
        <div className="service-review">
            <ul >
                {step.options.map(({ value, imgSrc }) => (
                    <li key={value}>
                        <label>
                            <input
                                type="radio"
                                name={`survey_step_${currentStep}`}
                                className="ser_rev"
                                value={value}
                                onChange={() => handleChange(value)}
                            />
                            {imgSrc && (
                                <span className="service-review-img">
                                    <img src={imgSrc} alt={value} />
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

export default RadioComponent;
