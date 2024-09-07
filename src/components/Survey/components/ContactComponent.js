import React from 'react';
import { useTranslation } from 'react-i18next';
import FormInput from '../../common/FormInput.js';

const ContactComponent = () => {
    const { t } = useTranslation();

    return (
        <div className="service-rating">
            <div className="details-form-area">
                <div className="row">
                    <div className="col-lg-6">
                        <FormInput
                            type="text"
                            name="firstName"
                            placeholder={t('contact.firstName')}
                            icon="user"
                            required
                        />
                    </div>
                    <div className="col-lg-6">
                        <FormInput
                            type="text"
                            name="lastName"
                            placeholder={t('contact.lastName')}
                            icon="user"
                        />
                    </div>
                    <div className="col-lg-6">
                        <FormInput
                            type="email"
                            name="email"
                            placeholder={t('contact.email')}
                            icon="envelope"
                            required
                        />
                    </div>
                    <div className="col-lg-6">
                        <FormInput
                            type="text"
                            name="phone"
                            placeholder={t('contact.phone')}
                            icon="phone"
                        />
                    </div>
                    <div className="age-gender-selector">
                        <div className="form-input-inner position-relative d-inline-block">
                            <FormInput
                                type="text"
                                name="age"
                                placeholder={t('contact.age')}
                                icon="user"
                            />
                        </div>
                        <div className="gender-selector d-inline-block">
                            <label>
                                <input type="radio" name="gender" value="Male" className="gender-input" />
                                <span className="check-circle"></span>
                                <span className="checkmark">{t('contact.male')}</span>
                            </label>
                            <label>
                                <input type="radio" name="gender" value="Female" className="gender-input" />
                                <span className="check-circle"></span>
                                <span className="checkmark">{t('contact.female')}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactComponent;
