import React from 'react';

const RatingComponent = ({ selectedRating, handleStarClick }) => {
    return (
        <div className="service-rating" style={{ textAlign: 'center' }}>
            <div className="survey-ratting clearfix position-relative">
                <div id="stars" className="starrr">
                    {[1, 2, 3, 4, 5].map((star) => (
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

export default RatingComponent;
