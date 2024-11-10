const questions = [
  {
    question: 'Which car brand features a prancing horse logo?',
    options: ['Lamborghini', ' Ferrari', 'Porsche', 'Maserati'],
    correct: 1,
  },
  {
    question: 'Which company is famous for the Beetle model?',
    options: ['Toyota', 'Ford', 'Volkswagen', 'Honda'],
    correct: 2,
  },
  {
    question: 'What is the best-selling electric car model of all time?',
    options: ['Nissan', 'Tesla', 'BMW', 'Audi'],
    correct: 1,
  },
  {
    question:
      'Which car company uses the slogan "The Ultimate Driving Machine"?',
    options: ['Audi', 'Mercedes', 'Lexus', 'BMW'],
    correct: 3,
  },
  {
    question: 'What brand uses a three-pointed star logo?',
    options: ['Infiniti', 'Mercedes', 'Cadillac', 'Volvo'],
    correct: 1,
  },
  {
    question:
      'Which company introduced the first mass-produced hybrid vehicle, the Prius?',
    options: ['Hyundai', 'Chevrolet', 'Toyota', 'Kia'],
    correct: 2,
  },
  {
    question:
      'Which Italian brand, known for its "bull" logo, produces supercars?',
    options: ['Ferrari', 'Bugatti', 'Lamborghini', 'Alfa Romeo'],
    correct: 2,
  },
];

let currentQuestion = 0;
let score = 0;
let answered = 0;

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
  quizContent.style.display = 'none';
  scoreContainer.style.display = 'block';
  scoreSpan.textContent = score;
  totalScoreSpan.textContent = questions.length;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  scoreContainer.style.display = 'none';
  quizContent.style.display = 'block';

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
  currentQuestion--;
  if (currentQuestion > 0) {
    loadQuestion();
  }
});

restartBtn.addEventListener('click', restartQuiz);

loadQuestion();
