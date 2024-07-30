const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const timerElement = document.getElementById('timer')
const scoreElement = document.getElementById('score')
const introElement = document.getElementById('intro')

let shuffledQuestions, currentQuestionIndex
let time = 60
let score = 0
let timer

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  introElement.classList.add('hide')
  score = 0
  time = 60
  updateScore()
  startTimer()
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function startTimer() {
  timer = setInterval(() => {
    time--
    updateTimer()
    if (time <= 0) {
      clearInterval(timer)
      endGame()
    }
  }, 1000)
}

function updateTimer() {
  timerElement.innerText = `Time: ${time}`
}

function updateScore() {
  scoreElement.innerText = `Score: ${score}`
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct === "true"
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct === "true")
  })
  if (correct) {
    score++
    updateScore()
  }
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    clearInterval(timer)
    showFinalScore()
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

function endGame() {
  questionContainerElement.classList.add('hide')
  showFinalScore()
  startButton.innerText = 'Restart'
  startButton.classList.remove('hide')
}

function showFinalScore() {
  questionElement.innerText = `Congratulations! You scored ${score} point${score !== 1 ? 's' : ''}.`
  questionContainerElement.classList.remove('hide')
  answerButtonsElement.innerHTML = `<button class="btn" onclick="startGame()">Play Again</button>`
}

const questions = [
  {
    question: 'What color do you mix to get orange?',
    answers: [
      { text: 'yellow + red', correct: true },
      { text: 'blue + yellow', correct: false }
    ]
  },
  {
    question: 'What color do you mix to get violet?',
    answers: [
      { text: 'blue + red', correct: true },
      { text: 'red + blue', correct: true },
      { text: 'yellow + blue', correct: false },
      { text: 'blue + white', correct: false }
    ]
  },
  {
    question: 'What color do you mix to get green?',
    answers: [
      { text: 'yellow + red', correct: false },
      { text: 'yellow + blue', correct: true },
      { text: 'blue + red', correct: false },
      { text: 'white + orange', correct: false }
    ]
  },
  {
    question: 'What color do you mix to get pink?',
    answers: [
      { text: 'blue + red', correct: false },
      { text: 'yellow + red', correct: false },
      { text: 'blue + white', correct: false },
      { text: 'white + red', correct: true }
    ]
  },
  {
    question: 'What color do you mix to get brown?',
    answers: [
      { text: 'violet + red', correct: false },
      { text: 'black + red', correct: true },
      { text: 'green + red', correct: true },
      { text: 'yellow + orange', correct: false }
    ]
  },
  {
    question: 'What color do you mix to get grey?',
    answers: [
      { text: 'yellow + black', correct: false },
      { text: 'white + blue', correct: false },
      { text: 'blue + black', correct: false },
      { text: 'white + black', correct: true }
    ]
  },
  {
    question: 'What color do you mix to get Ultra?',
    answers: [
      { text: 'blue + red', correct: false },
      { text: 'yellow + blue', correct: false },
      { text: 'blue + violet', correct: true },
      { text: 'blue + black', correct: false }
    ]
  },
  {
    question: 'What color do you need to mix for Code Institute "O" logo color?',
    answers: [
      { text: 'yellow + blue', correct: false },
      { text: 'red + yellow', correct: true }
    ]
  }
]