const questions = [
  {
    question: 'What animal is called the "Tasmanian Tiger"?',
    options: ['Thylacine', 'Moa', 'Dodo', 'Mammoth'],
    correct: 0,
  },
  {
    question: 'Which bird from Mauritius is extinct?',
    options: ['Dodo', 'Great Auk', 'Moa', 'Pigeon'],
    correct: 0,
  },
  {
    question: 'Which giant elephant-like animal went extinct?',
    options: ['Glyptodon', 'Mammoth', 'Thylacine', 'Moa'],
    correct: 1,
  },
  {
    question: 'Where was the Quagga found?',
    options: ['Europe', ' America', 'Asia', 'Africa'],
    correct: 3,
  },
  {
    question: 'What was the largest flightless bird?',
    options: ['Auk', 'Pigeon', 'Moa', 'Dodo'],
    correct: 2,
  },
  {
    question: 'Where did Stellar’s Sea Cow live?',
    options: ['Atlantic', 'Pacific', 'Indian', 'Arctic'],
    correct: 1,
  },
  {
    question: 'What Ice Age predator had long teeth?',
    options: ['Saber-tooth', 'Dire Wolf', 'Thylacine', 'Glyptodon'],
    correct: 0,
  },
];

let currentQuestion = 0;
let score = 0;
let answered = false;

//DOM  Element

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionSpan = document.getElementById('total-question');
const quizContent = document.getElementById('quiz-content');
const scoreContainer = document.getElementById('score-container');
const scoreSpan = document.getElementById('score');
const totalScoreSpan = document.getElementById('total-score');
const restartBtn = document.getElementById('restart-btn');
const prevBtn = document.getElementById('previous-btn');

function loadQuestion() {
  answered = false;

  const question = questions[currentQuestion];
  questionText.textContent = question.question;
  currentQuestionSpan.textContent = currentQuestion + 1;
  totalQuestionSpan.textContent = questions.length;

  optionsContainer.innerHTML = '';

  question.options.forEach((option, index) => {
    const optionElement = document.createElement('div');
    optionElement.className = 'option';
    optionElement.textContent = option;
    optionElement.addEventListener('click', () => checkAnswer(index));
    optionsContainer.appendChild(optionElement);
  });
}

function checkAnswer(selectedIndex) {
  if (answered) return;

  answered = true;

  const question = questions[currentQuestion];
  const options = optionsContainer.children;

  if (selectedIndex === question.correct) {
    options[selectedIndex].classList.add('correct');
    score++;
  } else {
    options[selectedIndex].classList.add('wrong');
    options[question.correct].classList.add('correct');
  }

  nextBtn.style.display = 'flex';
}

function showScore() {
  quizContent.style.display = ' none';
  scoreContainer.style.display = 'block';
  scoreSpan.textContent = score;
  totalScoreSpan.textContent = questions.length;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  quizContent.style.display = 'block';
  scoreContainer.style.display = 'none';

  loadQuestion();
}

nextBtn.addEventListener('click', () => {
  currentQuestion++;

  prevBtn.style.opacity = '1';

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
});

restartBtn.addEventListener('click', restartQuiz);

loadQuestion();
