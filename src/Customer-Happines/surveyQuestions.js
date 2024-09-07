// Import image sources
import VeryBad from './img/sr1.png';
import Bad from './img/sr2.png';
import Average from './img/sr3.png';
import Happy from './img/sr4.png';

// Define mappings for option values to image sources
const optionImageMap = {
    'Very Bad': VeryBad,
    'Bad': Bad,
    'Average': Average,
    'Happy': Happy,
    'Poor': VeryBad,
    'Averages': Bad,
    'Good': Average,
    'Excellent': Happy,
};

const getImageForOption = (value) => {
    return optionImageMap[value] || null;
};

const surveyQuestionsEnglish = [
    {
        step: 1,
        title: 'Customer Happiness',
        description: 'Please provide feedback on the service you received.',
        question: 'How was the service provided?',
        type: 'radio', // Radio button type
        options: [
            { value: 'Very Bad', imgSrc: getImageForOption('Very Bad') },
            { value: 'Bad', imgSrc: getImageForOption('Bad') },
            { value: 'Average', imgSrc: getImageForOption('Average') },
            { value: 'Happy', imgSrc: getImageForOption('Happy') }
        ],
        hasTextarea: true,
    },
    {
        step: 2,
        title: 'Customer Recommendation',
        description: 'Please let us know how likely you are to recommend our company.',
        question: 'Would you recommend Our Company?',
        type: 'checkbox',
        options: [
            { value: 'No' },
            { value: 'Maybe' },
            { value: 'Probably' },
            { value: '100% Sure' }
        ],
        hasTextarea: false,
    },
    {
        step: 3,
        title: 'Customer Feedback',
        description: 'Please provide additional feedback.',
        question: 'Which of the following best describes your experience?',
        type: 'radio',
        options: [
            { value: 'Poor', imgSrc: getImageForOption('Poor') },
            { value: 'Good', imgSrc: getImageForOption('Good') },
            { value: 'Average', imgSrc: getImageForOption('Averages') },
            { value: 'Excellent', imgSrc: getImageForOption('Excellent') }
        ],
        hasTextarea: true,
    },
    {
        step: 4,
        title: 'Customer Service Rating',
        description: 'Your opinion matters! Rate our company from 1 to 5 stars to let us know how we are doing.',
        question: 'How would you rate our company on a scale of 1 to 5 stars?',
        type: 'rating', // Rating type
        options: [
            { value: '1 Star' },
        ],
        hasTextarea: true,
    },
    {
        step: 5,
        title: 'Contact Information',
        description: 'Please provide your contact information for follow-up.',
        question: 'How would you prefer to be contacted?',
        type: 'contact', // Text input type
        options: [], // No options for text input
        hasTextarea: false,
    },
    {
        step: 6,
        title: 'Additional Comments',
        description: 'Is there anything else you would like to share?',
        question: 'Additional Comments',
        type: 'text', // Textarea for additional comments
        options: [], // No options for textarea
        hasTextarea: true,
    },
];

const surveyQuestionsArabic = [
    {
        step: 1,
        title: 'سعادة العملاء',
        description: 'يرجى تقديم ملاحظاتك حول الخدمة التي تلقيتها.',
        question: 'كيف كانت الخدمة المقدمة؟',
        type: 'radio', // Radio button type
        options: [
            { value: 'سيء جداً', imgSrc: getImageForOption('Very Bad') },
            { value: 'سيء', imgSrc: getImageForOption('Bad') },
            { value: 'متوسط', imgSrc: getImageForOption('Average') },
            { value: 'سعيد', imgSrc: getImageForOption('Happy') }
        ],
        hasTextarea: true,
    },
    {
        step: 2,
        title: 'توصية العملاء',
        description: 'يرجى إخبارنا بمدى احتمالية أن توصي بشركتنا.',
        question: 'هل توصي بشركتنا؟',
        type: 'checkbox',
        options: [
            { value: 'لا' },
            { value: 'ربما' },
            { value: 'من المحتمل' },
            { value: 'مؤكد 100%' }
        ],
        hasTextarea: false,
    },
    {
        step: 3,
        title: 'ملاحظات العملاء',
        description: 'يرجى تقديم ملاحظات إضافية.',
        question: 'أي من الخيارات التالية يصف تجربتك بشكل أفضل؟',
        type: 'radio',
        options: [
            { value: 'سيء', imgSrc: getImageForOption('Poor') },
            { value: 'جيد', imgSrc: getImageForOption('Good') },
            { value: 'متوسط', imgSrc: getImageForOption('Averages') },
            { value: 'ممتاز', imgSrc: getImageForOption('Excellent') }
        ],
        hasTextarea: true,
    },
    {
        step: 4,
        title: 'تقييم خدمة العملاء',
        description: 'رأيك مهم! قيم شركتنا من 1 إلى 5 نجوم لإخبارنا كيف نقوم بعملنا.',
        question: 'كيف تقيم شركتنا على مقياس من 1 إلى 5 نجوم؟',
        type: 'rating', // Rating type
        options: [
            { value: '1 نجمة' },
        ],
        hasTextarea: true,
    },
    {
        step: 5,
        title: 'معلومات الاتصال',
        description: 'يرجى تقديم معلومات الاتصال الخاصة بك للمتابعة.',
        question: 'كيف تفضل أن يتم الاتصال بك؟',
        type: 'contact', // Text input type
        options: [], // No options for text input
        hasTextarea: false,
    },
    {
        step: 6,
        title: 'تعليقات إضافية',
        description: 'هل هناك أي شيء آخر ترغب في مشاركته؟',
        question: 'تعليقات إضافية',
        type: 'text', // Textarea for additional comments
        options: [], // No options for textarea
        hasTextarea: true,
    },
];


export default surveyQuestionsEnglish;
export { surveyQuestionsArabic };
