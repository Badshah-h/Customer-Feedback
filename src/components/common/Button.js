import React, {memo} from 'react';
import PropTypes from 'prop-types';

const Button = memo(({ type, text, onClick, title, buttonType }) => (
    <li>
        <button
            className={`js-btn-${type}`}
            title={title}
            onClick={onClick}
            type={buttonType || 'button'}
        >
            {text}
        </button>
    </li>
));

Button.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired,
    buttonType: PropTypes.oneOf(['button', 'submit', 'reset']), // Allow 'button', 'submit', or 'reset'
};

export default Button;
