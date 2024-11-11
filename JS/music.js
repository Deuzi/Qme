const questions = [
  {
    question: 'Who is known as the "King of Pop"?',
    options: [' Elvis', 'Michael', 'Prince', 'Justin'],
    correct: 1,
  },
  {
    question: 'Which band released the album "Abbey Road"?',
    options: [' Queen', ' Eagles', 'Beatles', 'Nirvana'],
    correct: 2,
  },
  {
    question: 'Who is the lead vocalist of the band "Queen"?',
    options: ['Elton', 'David', 'Bono', 'Freddie'],
    correct: 3,
  },
  {
    question: 'What is the name of the music genre that originated in Jamaica?',
    options: [' Jazz', 'Reggae', 'Blues', 'Rock'],
    correct: 1,
  },
  {
    question: 'Which instrument has 88 keys?',
    options: ['Violin', 'Piano', 'Guitar', 'Flute'],
    correct: 1,
  },
  {
    question: 'Which female artist is known for the album "Lemonade"?',
    options: ['Adele', 'Rihanna', 'Beyoncé', 'Madonna'],
    correct: 2,
  },
  {
    question: 'Who is known for the hit song "Shape of You"?',
    options: ['Justin', 'Ed  shareen', 'Drake', 'Shawn'],
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
