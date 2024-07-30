// Element selectors
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const timerElement = document.getElementById('timer')
const scoreElement = document.getElementById('score')
const introElement = document.getElementById('intro')

// Variables to keep track of the quiz state
let shuffledQuestions, currentQuestionIndex
let time = 60
let score = 0
let timer

// Event listeners
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

// Function to start the game
function startGame() {
  startButton.classList.add('hide')
  introElement.classList.add('hide')
  timerElement.classList.remove('hide')
  scoreElement.classList.remove('hide')
  score = 0
  time = 60
  updateScore()
  startTimer()
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

// Function to start the timer
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

// Function to update the timer display
function updateTimer() {
  timerElement.innerText = `Time: ${time}`
}

// Function to update the score display
function updateScore() {
  scoreElement.innerText = `Score: ${score}`
}

// Function to set the next question
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

// Function to display a question and its answers
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

// Function to reset the state for the next question
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

// Function to handle answer selection
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

// Function to set the status class based on the answer
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

// Function to clear the status class
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

// Function to end the game
function endGame() {
  questionContainerElement.classList.add('hide')
  nextButton.classList.add('hide')
  showFinalScore()
  startButton.innerText = 'Restart'
  startButton.classList.remove('hide')
}

// Function to display the final score
function showFinalScore() {
  questionElement.innerText = `Congratulations! You scored ${score} point${score !== 1 ? 's' : ''}.`
  questionContainerElement.classList.remove('hide')
  answerButtonsElement.innerHTML = `<button class="btn" onclick="startGame()">Play Again</button>`
}

// Quiz questions array
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