// Predefined questions for each topic
const questionBank = {
    science: [
        {
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "NaCl", "O2"],
            correctAnswer: "A"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correctAnswer: "B"
        },
        {
            question: "What is the largest organ in the human body?",
            options: ["Heart", "Brain", "Liver", "Skin"],
            correctAnswer: "D"
        }
    ],
    history: [
        {
            question: "In which year did World War II end?",
            options: ["1943", "1945", "1947", "1950"],
            correctAnswer: "B"
        },
        {
            question: "Who was the first President of the United States?",
            options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
            correctAnswer: "C"
        },
        {
            question: "Which ancient wonder was located in Alexandria?",
            options: ["The Great Pyramid", "The Hanging Gardens", "The Lighthouse", "The Colossus"],
            correctAnswer: "C"
        }
    ],
    literature: [
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
            correctAnswer: "B"
        },
        {
            question: "What is the name of the hobbit in 'The Lord of the Rings'?",
            options: ["Bilbo", "Frodo", "Sam", "Pippin"],
            correctAnswer: "B"
        },
        {
            question: "Which novel begins with the line 'It was the best of times, it was the worst of times'?",
            options: ["Pride and Prejudice", "Great Expectations", "A Tale of Two Cities", "Oliver Twist"],
            correctAnswer: "C"
        }
    ],
    geography: [
        {
            question: "Which is the largest country by land area?",
            options: ["China", "United States", "Canada", "Russia"],
            correctAnswer: "D"
        },
        {
            question: "What is the capital of Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Perth"],
            correctAnswer: "C"
        },
        {
            question: "Which mountain range runs along the border of France and Spain?",
            options: ["Alps", "Pyrenees", "Carpathians", "Apennines"],
            correctAnswer: "B"
        }
    ]
};

let questions = [];
let currentQuestionIndex = 0;
let userAnswers = [];

const topicSelect = document.getElementById('topic');
const numQuestionsInput = document.getElementById('num-questions');
const startQuizButton = document.getElementById('start-quiz');
const quizSetup = document.getElementById('quiz-setup');
const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextQuestionButton = document.getElementById('next-question');
const submitQuizButton = document.getElementById('submit-quiz');
const resultsContainer = document.getElementById('results-container');
const scoreElement = document.getElementById('score');
const restartQuizButton = document.getElementById('restart-quiz');

startQuizButton.addEventListener('click', startQuiz);
nextQuestionButton.addEventListener('click', nextQuestion);
submitQuizButton.addEventListener('click', submitQuiz);
restartQuizButton.addEventListener('click', restartQuiz);

function startQuiz() {
    const topic = topicSelect.value;
    const numQuestions = Math.min(parseInt(numQuestionsInput.value), questionBank[topic].length);
    
    questions = shuffleArray(questionBank[topic]).slice(0, numQuestions);
    currentQuestionIndex = 0;
    userAnswers = [];

    quizSetup.style.display = 'none';
    quizContainer.style.display = 'block';
    displayQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayQuestion() {
    const questionData = questions[currentQuestionIndex];
    questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${questionData.question}`;
    optionsElement.innerHTML = '';
    questionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        button.addEventListener('click', () => selectOption(button, index));
        optionsElement.appendChild(button);
    });

    nextQuestionButton.style.display = currentQuestionIndex < questions.length - 1 ? 'block' : 'none';
    submitQuizButton.style.display = currentQuestionIndex === questions.length - 1 ? 'block' : 'none';
}

function selectOption(selectedButton, optionIndex) {
    optionsElement.querySelectorAll('button').forEach(button => {
        button.classList.remove('selected');
    });
    selectedButton.classList.add('selected');
    userAnswers[currentQuestionIndex] = String.fromCharCode(65 + optionIndex);
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

function submitQuiz() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    const score = calculateScore();
    scoreElement.textContent = `${score} out of ${questions.length}`;
}

function calculateScore() {
    return questions.reduce((score, question, index) => {
        return score + (userAnswers[index] === question.correctAnswer ? 1 : 0);
    }, 0);
}

function restartQuiz() {
    resultsContainer.style.display = 'none';
    quizSetup.style.display = 'block';
}