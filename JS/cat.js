const questions = [
  {
    question: 'which animal is the tallest in the animal kingdom?',
    options: ['cat', 'giraffe', 'jaguar', 'tiger'],
    correct: 1,
  },
  {
    question: ' the fastest animal on land is ?',
    options: ['lion', 'parrot', 'elephant', 'cheetah'],
    correct: 3,
  },
  {
    question: 'which animal is the king of the jungle?',
    options: ['monkey', 'deer', 'gorilla', 'lion'],
    correct: 3,
  },
  {
    question: 'What is the largest mammal in the world?',
    options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
    correct: 1,
  },
  {
    question: 'Which animal is known as the “Ship of the Desert”?',
    options: ['Elephant', 'Camel', 'Horse', 'donkey'],
    correct: 1,
  },
  {
    question: ' Which bird is known for its ability to mimic human speech?',
    options: ['Sparrow', 'Parrot', 'Owl', 'Eagle'],
    correct: 1,
  },
  {
    question: 'Which animal is known to have the longest lifespan?',
    options: ['Elephant', 'Blue Whale', 'Giant Tortoise', 'Polar Bear'],
    correct: 3,
  },
];

let currentQuestion = 0;
let score = 0;
let answered = false;

//DOM ELEMENTS

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
  // nextBtn.style.display = 'none';

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
  prevBtn.style.display = 'flex';

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

// prevBtn.addEventListener('click', () => {
//   if (currentQuestion > 1) {
//     currentQuestion--;
//   }

//   console.log('prevBtnClicked:', prevBtn);
// });

restartBtn.addEventListener('click', restartQuiz);

loadQuestion();
