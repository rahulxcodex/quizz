const questions = [
    {
        question: "When did I write you my first diary entry?",
        options: ["08 April", "09 April", "07 April", "06 April"],
        correctAnswer: 2 // Index of the correct answer (0 for "Red")
    },
    {
        question: "First movie we watched together?",
        options: ["Rockstar", "Laapata Ladis", "A girl who lept through time", "Nothing Hill"],
        correctAnswer: 0
    },
    {
        question: "The sum of the first 15 terms of an arithmetic progression is 225. If the first term is 10, what is the common difference?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1 // Index of the correct answer (0 for "Red")
    },
    {
        question: "What bores you the most?",
        options: ["me", "my yapping", "my random mathematical facts", "my existance"],
        correctAnswer: 3 // Index of the correct answer (0 for "Red")
    },
    {
        question: "how many times have we kissed?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 3 // Index of the correct answer (0 for "Red")
    },
    {
        question: "When was our first date supposed to be?",
        options: ["06 May", "28 May", "05 May", "21 May"],
        correctAnswer: 2 // Index of the correct answer (0 for "Red")
    },
    {
        question: "What did I say after spanking you?",
        options: ["Hehe", "Good", "Wow", "Yes"],
        correctAnswer: 2 // Index of the correct answer (0 for "Red")
    },
    {
        question: "Why did the bicycle fall over?",
        options: ["It was two-tired.", "It didn’t have enough balance.", "It got flat.", "It lost its wheel."],
        correctAnswer: 0
    },
    {
        question: "Why did the student wear glasses in math class?",
        options: ["To improve their “di-vision.”", "To keep an eye on the problems.", "To focus better.", "To avoid getting a negative result."],
        correctAnswer: 0
    },
{
        question: "Favourite lip tint shade?",
        options: ["Wine", "Brandy", "Red", "Nude"],
        correctAnswer: 1
    },
    {
        question: "Which song do you want to be played on your proposal?",
        options: ["Jab tak", "Hosanna", "Tumse hi", "Tum Ho"],
        correctAnswer: 0 // Index of the correct answer (0 for "Red")
    },
    {
        question: "Favourite Nail Paint colour?",
        options: ["Blue", "Red", "Black", "Green"],
        correctAnswer: 2 // Index of the correct answer (0 for "Red")
    },
    {
        question: "How many times have I huged you?",
        options: ["5", "8", "10", "12"],
        correctAnswer: 2 // Index of the correct answer (0 for "Red")
    },
    {
        question: "Hum aalu ka paratha kha jaynge toh aalu kya khayega?",
        options: ["kuch nhi", "ayushi ka paratha", "gobi ka paratha", "aalu ko bhook nhi"],
        correctAnswer: 3 // Index of the correct answer (0 for "Red")
    },
    {
        question: "How much do I love you?",
        options: ["3000", "Bhot sara", "how much this universe can contain", "if love was time i think of you every second"],
        correctAnswer: 3 // Index of the correct answer (0 for "Red")
    },
    {
        question: "How much do I miss you?",
        options: ["todu sa", "Bhot sara", "if you could measure it no number of digits can represent it", "with all my heart"],
        correctAnswer: 2 // Index of the correct answer (0 for "Red")
    },
    {
        question: "How much sorry I am for everything on a scale of 0 to 10?",
        options: ["10", "100", "100000", "infinity"],
        correctAnswer: 3 // Index of the correct answer (0 for "Red")
    },
    
    // Add more questions as you wish
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("wrong-answer-container").style.display = "none"; // Hide wrong answer message

    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question-text").textContent = currentQuestion.question;
    const options = document.querySelectorAll(".option");
    
    options.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
    });
    document.getElementById("quiz-container").style.display = "block";  // Ensure quiz page is visible
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    
    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
        currentQuestionIndex++; // Move to next question
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showSurpriseMessage();
        }
    } else {
        showWrongAnswerPage();
    }
}

function showWrongAnswerPage() {
    document.getElementById("quiz-container").style.display = "none"; // Hide the quiz question
    document.getElementById("wrong-answer-container").style.display = "block"; // Show the wrong answer message
}

function nextQuestion() {
    document.getElementById("wrong-answer-container").style.display = "none"; // Hide the wrong answer message
    loadQuestion(); // Load the next question
}

function showSurpriseMessage() {
    // Navigate to the surprise page instead of showing an alert
    window.location.href = "surprise.html";  // This redirects to the "surprise.html" page
}

// Load the first question
loadQuestion();

