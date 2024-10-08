import React, {useState, useCallback, useEffect} from 'react';
import logo from '../../assets/images/New Project (2).png';
import SurveyForm from './SurveyForm.js';
import LanguageButtons from "./components/LanguageButton.js";
import Footer from "../common/Footer.js";
import i18n from "i18next";

// Main Welcome Component
const Welcome = () => {
    const [showSurvey, setShowSurvey] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    useEffect(() => {
        i18n.changeLanguage(selectedLanguage);
    }, [selectedLanguage]);

    const handleLanguageSelection = (lang) => {
        setSelectedLanguage(lang);
    };

    const handleStartSurvey = useCallback(() => {
        setShowSurvey(true);
    }, []);

    return (
        <>
            {!showSurvey ? (
                <WelcomeScreen
                    handleLanguageSelection={handleLanguageSelection}
                    selectedLanguage={selectedLanguage}
                    handleStartSurvey={handleStartSurvey}
                />
            ) : (
                <SurveyForm />
            )}
        </>
    );
};

// Memoized WelcomeScreen Component
const WelcomeScreen = React.memo(
    ({ handleLanguageSelection, selectedLanguage, handleStartSurvey }) => (
        <div className="bg-white p-8 w-full h-full shadow-lg relative flex flex-col justify-center items-center">
            <div className="relative h-full flex flex-col justify-between w-full">
                <div className="step step-welcome w-full flex flex-col justify-center items-center px-4">
                    <LogoSection />
                    <Heading />
                    <p className="text-base sm:text-lg text-gray-600 mb-10 text-center max-w-lg animate-fade-in-up">
                        Welcome to our Customer Satisfaction Survey! Your feedback is valuable to us.
                    </p>
                    <p className="text-base sm:text-lg text-gray-600 mb-10 text-center max-w-lg animate-fade-in-up">
                        Please select your preferred language to begin.
                    </p>
                    <LanguageButtons
                        onLanguageSelect={handleLanguageSelection}
                        selectedLanguage={selectedLanguage}
                        onStartSurvey={handleStartSurvey}
                    />
                </div>
                <Footer />
            </div>
        </div>
    ),
    (prevProps, nextProps) =>
        prevProps.selectedLanguage === nextProps.selectedLanguage

);

// LogoSection Component
const LogoSection = React.memo(() => (
    <img
        src={logo}
        alt="Al Yalayis Logo"
        className="max-w-[150px] sm:max-w-[250px] md:max-w-[400px] mb-10 md:mb-16 animate-fade-in"
    />
));

// Heading Component
const Heading = React.memo(() => (
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-4 md:mb-8" style={{ lineHeight: '1.2' }}>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 font-extrabold animate-text-shimmer">
      Al Yalayis
    </span>
        <br className="hidden sm:block md:hidden lg:block" />
        <span className="block animate-fade-in-up">
      Government Transaction Center
    </span>
    </h1>
));


export default Welcome;

