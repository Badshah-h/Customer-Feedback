import React from 'react';
import FormInput from '../../common/FormInput.js';
import PropTypes from "prop-types";
import {useSurveyContext} from "../context/SurveyContext.js";

const ContactComponent = ({ step }) => {

    const { handleInputChange, formValues } = useSurveyContext();

    const handleChange = (event) => {
        const { name, value } = event.target;
        handleInputChange(step.stepNumber, name, value);
    };

        return (
        <div className="service-rating">
            <div className="details-form-area">
                <div className="row">
                    <div className="col-lg-6">
                        <FormInput
                            type="email"
                            name="email"
                            placeholder="Email"
                            icon="envelope"
                            required
                            onChange={handleChange}
                            value={formValues[step.stepNumber]?.email || ''}
                            />
                    </div>
                    <div className="col-lg-6">
                        <FormInput
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            icon="phone"
                            onChange={handleChange}
                            value={formValues[step.stepNumber]?.phone || ''}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Define PropTypes
ContactComponent.propTypes = {
    step: PropTypes.shape({
        stepNumber: PropTypes.number.isRequired,
        email: PropTypes.string,
        phone: PropTypes.string,
    }).isRequired,
};


export default ContactComponent;
