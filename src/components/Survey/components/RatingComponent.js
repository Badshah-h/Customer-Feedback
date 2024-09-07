import React from 'react';
import PropTypes from 'prop-types';
import { STARS } from '../../../utils/constants.js'; // Assuming you have predefined constants

const RatingComponent = ({ selectedRating, handleStarClick }) => {
    return (
        <div className="service-rating" style={{ textAlign: 'center' }}>
            <div className="survey-ratting clearfix position-relative">
                <div id="stars" className="starrr">
                    {STARS.map((star) => (
                        <span
                            key={star}
                            className={`rate-value ${star <= selectedRating ? 'full-block' : 'full-block-empty'}`}
                            style={{ cursor: 'pointer', fontSize: '2rem' }}
                            onClick={() => handleStarClick(star)}
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
    selectedRating: PropTypes.number.isRequired,
    handleStarClick: PropTypes.func.isRequired
};

export default RatingComponent;
