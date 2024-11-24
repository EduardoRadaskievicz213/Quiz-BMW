const questions = [
  {
    question: "Em que ano a BMW foi fundada?",
    options: ["1910", "1916", "1925", "1930"],
    answer: 1
  },
  {
    question: "O que significa a sigla BMW?",
    options: [
      "Bayerische Motoren Werke",
      "British Motor Works",
      "Berlin Motor Wheels",
      "Bavarian Motor World"
    ],
    answer: 0
  },
  {
    question: "Qual é o modelo mais vendido da BMW?",
    options: ["BMW Série 3", "BMW X5", "BMW Série 5", "BMW i8"],
    answer: 0
  },
  // Adicione mais perguntas aqui...
];

let currentQuestionIndex = 0;
let score = 0;

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionScreen = document.getElementById('question-screen');
const startScreen = document.getElementById('start-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const resultText = document.getElementById('result-text');

function startQuiz() {
  startScreen.classList.add('hidden');
  questionScreen.classList.remove('hidden');
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  optionsContainer.innerHTML = '';

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.onclick = () => checkAnswer(index);
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedIndex === currentQuestion.answer) {
    score++;
    alert("Resposta correta!");
  } else {
    alert("Resposta errada!");
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  questionScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
  resultText.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultScreen.classList.add('hidden');
  startScreen.classList.remove('hidden');
}

startBtn.onclick = startQuiz;
restartBtn.onclick = restartQuiz;
