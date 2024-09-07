import React from 'react';

const TextareaComponent = () => {
    return (
        <textarea
            name={`survey_step`}
            className="survey-textarea"
            placeholder="Type your comments here"
        />
    );
};

export default TextareaComponent;
