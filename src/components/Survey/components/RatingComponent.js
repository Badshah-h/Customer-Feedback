import React from 'react';
import PropTypes from 'prop-types';
import { STARS } from '../../../utils/constants.js';
import {useSurveyContext} from "../context/SurveyContext.js"; // Assuming you have predefined constants

const RatingComponent = ({ step }) => {

    const { formValues, handleStarClick } = useSurveyContext();
    const selectedRating = formValues[step.stepNumber]?.rating || 0;

    return (
        <div className="service-rating" style={{ textAlign: 'center' }}>
            <div className="survey-ratting clearfix position-relative">
                <div id="stars" className="starrr">
                    {STARS.map((star) => (

                    <span
                        key={star}
                        className={`rate-value ${star <= selectedRating ? 'full-block' : 'full-block-empty'}`}
                        style={{ cursor: 'pointer', fontSize: '2rem' }}
                        onClick={() => handleStarClick(step.stepNumber, star)}
                    >
                    </span>
                    ))}
                </div>
                <span className="survey-rate-text">
                    You selected <span id="count">{selectedRating}</span> star(s)
                </span>
            </div>
        </div>
    );
};

RatingComponent.propTypes = {
    step: PropTypes.shape({
        stepNumber: PropTypes.number.isRequired,
    }).isRequired,
};

export default RatingComponent;
