const qBank = [
    {
        question:
            "New ideas and projects sometimes distract me from previous ones ?",
        answers: ["Very much like me", "Mostly like me", "Somewhat like me", "Not much like me", "Not like me at all"],
        //correct: "vinayak",
        questionId: "1"
    },
    {
        question:
            "Setbacks don’t discourage me. I don’t give up easily.",
        answers: ["Very much like me", "Mostly like me", "Somewhat like me", "Not much like me", "Not like me at all"],
        //correct: "vinayak",
        questionId: "2"
    },
    {
        question:
            "I often set a goal but later choose to pursue a different one.",
        answers: ["Very much like me", "Mostly like me", "Somewhat like me", "Not much like me", "Not like me at all"],
       // correct: "vinayak",
        questionId: "3"
    },
    {
        question:
            "I am a hard worker.",
        answers: ["Very much like me", "Mostly like me", "Somewhat like me", "Not much like me", "Not like me at all"],
        //correct: "vinayak",
        questionId: "4"
    },
    {
        question:
            "I have difficulty maintaining my focus on projects that take more than a few months to complete.",
        answers: ["Very much like me", "Mostly like me", "Somewhat like me", "Not much like me", "Not like me at all"],
        //correct: "vinayak",
        questionId: "5"
    },
    {
        question:
            "I finish whatever I begin.",
        answers: ["Very much like me", "Mostly like me", "Somewhat like me", "Not much like me", "Not like me at all"],
        //correct: "vinayak",
        questionId: "6"
    },
    {
        question:
            "My interests change from year to year",
        answers: ["Very much like me", "Mostly like me", "Somewhat like me", "Not much like me", "Not like me at all"],
        //correct: "vinayak",
        questionId: "7"
    },
    {
        question:
            "I am diligent. I never give up.",
        answers: ["Very much like me", "Mostly like me", "Somewhat like me", "Not much like me", "Not like me at all"],
        correct: "vinayak",
        questionId: "8"
    },
    {
        question:
            "I have been obsessed with a certain idea or project for a short time but later lost interest.",
        answers: ["Very much like me", "Mostly like me", "Somewhat like me", "Not much like me", "Not like me at all"],
        correct: "vinayak",
        questionId: "9"
    },
    {
        question:
            "I have overcome setbacks to conquer an important challenge.",
        answers: ["Very much like me", "Mostly like me", "Somewhat like me", "Not much like me", "Not like me at all"],
        //correct: "vinayak",
        questionId: "0992"
    }
];

// n = 10 to export all questions
export default (n = 10) =>
    Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
