let startButton = document.getElementById("start-button")
let startButtonContainer = document.getElementById("start-btn")

let answerButton = document.getElementById("holdingButtons")
let questionHeader = document.getElementById("question")
let extraButtonContainer = document.getElementById("extra-div")


startButton.addEventListener("click", startGame)

/**
 * makes so that the sign up goes away and starts the quiz
 */
function startGame() {
    startButtonContainer.classList.add("hide")
    answerButton.classList.remove("hide")
    questionHeader.classList.remove("hide")
    extraButtonContainer.classList.remove("hide")
}

function answers(){

}

function nextQuestion() {

}

let question1

let question2

let question3

let question4

let question5

let question6
