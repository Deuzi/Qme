const questions = [
  {
    question:
      'The dodo bird, a famously extinct animal, was native to which island?',
    options: ['Hawaii', 'Madagascar', 'Mauritius', 'New Zealand'],
    correct: 2,
  },
  {
    question:
      'What was the approximate size of the largest known dinosaur, Argentinosaurus?',
    options: ['10 meters', '20 meters', '30 meters', '40 meters'],
    correct: 3,
  },
  {
    question: 'The woolly mammoth is closely related to which living animal?',
    options: ['African elephant', 'Hippopotamus', ' Rhino', 'Horse'],
    correct: 0,
  },
  {
    question:
      'Which of these extinct animals was discovered through fossilized remains and had large tusks and a long, curved spine?',
    options: [
      ' Saber-toothed tiger',
      ' Woolly rhinoceros',
      'Mastodon',
      ' Megalodon',
    ],
    correct: 2,
  },
  {
    question:
      'The Moa, a large flightless bird that went extinct around the 15th century, was native to which country?',
    options: ['Australia', ' New Zealand', 'Japan', 'South Africa'],
    correct: 1,
  },
  {
    question: 'The Tasmanian tiger, or thylacine, was native to which country?',
    options: ['Brazil', 'Australia', ' India', 'Egypt'],
    correct: 1,
  },
  {
    question:
      'The Irish Elk, now extinct, was known for its impressive feature. What was it?',
    options: ['Antlers', 'Speed', 'Coat', 'Tusks'],
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
