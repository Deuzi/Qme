const questions = [
  {
    question: 'Which company is the world’s largest online retailer?',
    options: ['Apple', 'Amazon', 'Alibaba', 'Walmart'],
    correct: 1,
  },
  {
    question: 'Which company’s logo features a bitten apple?',
    options: ['Sony', 'Google', 'Apple', 'Samsung'],
    correct: 2,
  },
  {
    question: 'What company is famous for the slogan "Just Do It"?',
    options: ['Reebok', 'Adidas', 'Puma', 'Nike'],
    correct: 3,
  },
  {
    question: 'Which tech company was founded by Bill Gates?',
    options: ['Meta', 'IBM', 'Microsoft', 'Oracle'],
    correct: 2,
  },
  {
    question: 'What is the parent company of Instagram?',
    options: ['Meta', 'Twitter', 'TikTok', 'Snapchat'],
    correct: 0,
  },
  {
    question: 'Which car company uses a blue oval logo?',
    options: ['Tesla', 'Ford', 'Toyota', 'BMW'],
    correct: 1,
  },
  {
    question: 'Which company is the worlds largest coffeehouse chain?',
    options: ['Costa', 'Starbucks', 'Dunkin', 'Tim Hortons'],
    correct: 1,
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
  quizContent.style.display = 'none';
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
  currentQuestion--;
  if (currentQuestion > 0) {
    loadQuestion();
  }
});

restartBtn.addEventListener('click', restartQuiz);

loadQuestion();
