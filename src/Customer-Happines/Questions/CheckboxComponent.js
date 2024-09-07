import React from 'react';

const CheckboxComponent = ({ step, currentStep }) => {
    return (
        <div className="reccomend-selector" >
            <ul>
                {step.options.map(({ value, imgSrc }) => (
                    <li key={value}>
                        <label>
                            <input
                                type="radio"
                                name={`reccomend_select${currentStep}`}
                                value={value}
                                className="exp-option-box"
                                defaultChecked
                            />
                            <span className="exp-label">{value}</span>
                            <span className="checkmark-border"></span>

                            {imgSrc && (
                                <span className="service-review-img">
                                    <img src={imgSrc} alt={value} />
                                </span>
                            )}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CheckboxComponent;
