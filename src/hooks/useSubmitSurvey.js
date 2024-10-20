// src/hooks/useSubmitSurvey.js

import { useCallback, useState } from 'react';
import { submitSurveyResponses } from '../services/dataService.js';
import { useLoading } from "../components/Survey/context/LoadingContext.js";
import { useSurveyContext } from "../components/Survey/context/SurveyContext.js";

const useSubmitSurvey = () => {
    const { formValues, isSubmitted, resetForm, setIsSubmitted } = useSurveyContext();
    const { startLoading, stopLoading } = useLoading();
    console.log('formValues:', formValues);

    const [submitting, setSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState(null);

    const validateForm = (formValues) => {
        // Check if formValues or any required fields are empty
        if (!formValues.survey || !formValues.survey.questions) {
            return "Survey data is missing!";
        }

        const questions = formValues.survey.questions;
        for (const [key, value] of Object.entries(questions)) {
            if (!value.answer) {
                return `Question ${key.replace('question_', '')} is not answered.`;
            }
        }

        // Return null if validation passes
        return null;
    };

    const handleSubmit = useCallback(async (event) => {
        event.preventDefault();

        if (isSubmitted || submitting) {
            return;
        }

        // Validate form values
        const validationError = validateForm(formValues);
        if (validationError) {
            alert(validationError); // You can replace this with a custom popup/modal
            return;
        }

        setSubmitting(true);
        setSubmissionError(null);
        startLoading();
        try {
            // Prepare dataToSave object in the desired format
            const questions = Object.entries(formValues.survey.questions).reduce((acc, [key, value]) => {
                const questionNumber = key.replace('question_', '');
                acc[questionNumber] = {
                    type: value.type,
                    answer: value.answer
                };
                return acc;
            }, {});

            const dataToSave = {
                survey: {
                    survey_id: formValues.survey.survey_id,
                    locale: formValues.survey.locale, // Include locale
                    questions: questions,
                },
            };
            await submitSurveyResponses(dataToSave);
            setIsSubmitted(true);
            resetForm();
        } catch (error) {
            console.error('Error submitting survey:', error);
            setSubmissionError(error);
        } finally {
            setSubmitting(false);
            stopLoading();
        }
    }, [formValues, isSubmitted, submitting, startLoading, stopLoading, resetForm, setIsSubmitted]);

    return { handleSubmit, submitting, submissionError };
};

export default useSubmitSurvey;