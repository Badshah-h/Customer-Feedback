import React, { createContext, useContext, useState, useCallback } from 'react';
import { submitSurveyData } from '../../../services/dataService.js'; // Import your data service

const SurveyContext = createContext({
    formValues: {},
    currentStep: 1,
    setCurrentStep: () => {},
    handleOptionChange: () => {},
    handleInputChange: () => {},
    handleStarClick: () => {},
    handleTextareaChange: () => {},
    handleSubmit: () => {},
});

export const SurveyProvider = ({ children }) => {
    const [formValues, setFormValues] = useState({});
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status

    // Generic handler for changing form values
    const handleOptionChange = useCallback((stepNumber, name, value) => {
        setFormValues(prevValues => ({
            ...prevValues,
            [stepNumber]: {
                ...prevValues[stepNumber],
                [name]: value
            }
        }));
    }, []);

    // Handlers for specific types of form input
    const handleInputChange = useCallback((stepNumber, name, value) => {
        handleOptionChange(stepNumber, name, value);
    }, [handleOptionChange]);

    const handleStarClick = useCallback((stepNumber, rating) => {
        handleOptionChange(stepNumber, 'rating', rating);
    }, [handleOptionChange]);

    const handleTextareaChange = useCallback((stepNumber, value) => {
        handleOptionChange(stepNumber, 'textarea', value);
    }, [handleOptionChange]);

    const handleRadioChange = useCallback((stepNumber, value) => {
        handleOptionChange(stepNumber, 'radio', value);
    }, [handleOptionChange]);


    // Handle form submission
    const handleSubmit = useCallback(async (event) => {
        event.preventDefault();

        const dataToSave = {
            timestamp: new Date(),
            formValues,
        };

        try {
            await submitSurveyData(dataToSave);
            console.log("Form submitted successfully:", dataToSave);
            setIsSubmitted(true);

            // Reload the app after 10 seconds, but only if the submission was successful
            setTimeout(() => {
                setIsSubmitted(false);
                window.location.reload();
            }, 10000);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    }, [formValues]);


    // Context value
    const contextValue = {
        formValues,
        currentStep,
        setCurrentStep,
        handleOptionChange,
        handleInputChange,
        handleStarClick,
        handleTextareaChange,
        handleRadioChange,
        handleSubmit,
        isSubmitted,  // Include isSubmitted in context if needed elsewhere
    };

    return (
        <SurveyContext.Provider value={contextValue}>
            {children}
        </SurveyContext.Provider>
    );
};

export const useSurveyContext = () => useContext(SurveyContext);
