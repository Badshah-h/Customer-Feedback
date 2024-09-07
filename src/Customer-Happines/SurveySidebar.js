import React from 'react';
import logo from "./img/logo-10.png";

// Memoized sidebar component
const SurveySidebar = ({ title, description }) => {
    return (
        <div className="job-wizard-left-area position-relative">
            <div className="survey-form-img">
                <img src={logo} alt="Al Yalayis Government Transactions Center logo" className="center-image" />
            </div>
            <div className="job-wizard-left-text">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className="w-copyright position-absolute bottom-0 text-center ">
                ©2024 Al Yalayis Government Transactions Center
            </div>
        </div>


    );
};

export default SurveySidebar;
