const questions = [
  { question: "Quando a BMW foi fundada?", options: ["1910", "1916", "1925", "1930"], answer: 1 },
  { question: "O que significa BMW?", options: ["Bayerische Motoren Werke", "British Motor Works", "Berlin Motor Wheels", "Bavarian Motor World"], answer: 0 },
];

let currentQuestionIndex = 0;
let score = 0;

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const screens = document.querySelectorAll(".screen");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const resultText = document.getElementById("result-text");

function showScreen(index) {
  screens.forEach((screen, i) => {
    screen.classList.toggle("active", i === index);
  });
}

function startQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  showScreen(1);
  showQuestion();
}

function showQuestion() {
  const current = questions[currentQuestionIndex];
  questionText.textContent = current.question;
  optionsContainer.innerHTML = "";
  current.options.forEach((option, i) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(i);
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestionIndex].answer;
  if (selected === correct) score++;
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  resultText.textContent = `Você acertou ${score} de ${questions.length}!`;
  showScreen(2);
}

startBtn.onclick = startQuiz;
restartBtn.onclick = () => showScreen(0);
