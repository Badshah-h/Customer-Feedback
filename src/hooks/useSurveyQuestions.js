import { useState, useEffect } from 'react';
import { fetchSurveyQuestions } from '../services/dataService.js';

const useSurveyQuestions = (language) => {
    const [surveyQuestions, setSurveyQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadQuestions = async () => {
            try {
                const questions = fetchSurveyQuestions(language);
                setSurveyQuestions(questions);
            } catch (error) {
                console.error('Error fetching survey questions:', error);
            } finally {
                setLoading(false);
            }
        };

        loadQuestions();
    }, [language]);

    return { surveyQuestions, loading };
};

export default useSurveyQuestions;
