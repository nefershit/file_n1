const questions = [
    {
        question: "Який персонаж Бравл Старс має вигляд робота?",
        options: ["Бот", "Брок", "Робот Керрі", "Гейл"],
        correctAnswer: 2
    },
    {
        question: "Як звуть творця гри Бравл Старс?",
        options: ["Рікардо", "Девід", "Сергій", "Френк"],
        correctAnswer: 3
    },
    {
        question: "Який герой має суперсилу 'Суперсила'?",
        options: ["Браун", "Пайпер", "Френк", "Динамайк"],
        correctAnswer: 2
    },
    
    {
        question: "Який персонаж з Бравл Старс найбільше схожий на космонавта?",
        options: ["Бо", "Джин", "Ніта", "Тік"],
        correctAnswer: 1
    },
    // ...
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers');
    questionText.innerText = question.question;
    answersContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        answersContainer.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    const question = questions[currentQuestionIndex];
    if (selectedAnswer === question.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    }
}

function showResult() {
    document.getElementById('quiz').style.display = 'none';
    const result = document.getElementById('result');
    result.style.display = 'block';
    document.getElementById('score').innerText = `Ви набрали ${score} з ${questions.length} балів!`;
}


loadQuestion();