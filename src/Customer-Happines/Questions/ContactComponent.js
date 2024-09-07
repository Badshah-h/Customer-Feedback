import React from 'react';

const ContactComponent = () => {
    return (
        <div className="service-rating">
            <div className="details-form-area">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-input-inner position-relative has-float-label">
                            <input type="text" name="name" placeholder="First Name" className="required form-control" />
                            <div className="icon-bg text-center">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-input-inner position-relative has-float-label">
                            <input type="text" name="name" placeholder="Last Name" className="form-control" />
                            <div className="icon-bg text-center">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-input-inner position-relative has-float-label">
                            <input type="email" name="email" placeholder="Email *" className="required form-control" />
                            <div className="icon-bg text-center">
                                <i className="fas fa-envelope"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-input-inner position-relative has-float-label">
                            <input type="text" name="phone" placeholder="Phone" className="form-control" />
                            <div className="icon-bg text-center">
                                <i className="fas fa-phone"></i>
                            </div>
                        </div>
                    </div>
                    <div className="age-gender-selector">
                        <div className="form-input-inner position-relative d-inline-block">
                            <input type="text" name="age" placeholder="Age" className="form-control" />
                            <div className="icon-bg text-center">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                        <div className="gender-selector d-inline-block">
                            <label>
                                <input type="radio" name="gender" value="Male" className="gender-input" />
                                <span className="check-circle"></span>
                                <span className="checkmark">Male</span>
                            </label>
                            <label>
                                <input type="radio" name="gender" value="Female" className="gender-input" />
                                <span className="check-circle"></span>
                                <span className="checkmark">Female</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactComponent;
