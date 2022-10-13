let startButton = document.getElementById("start-button")
let startButtonContainer = document.getElementById("start-btn")

let answerButton = document.getElementById("holdingButtons")
let questionHeader = document.getElementById("question")

startButton.addEventListener("click", startGame)

function startGame() {
    startButtonContainer.classList.add("hide")
    answerButton.classList.remove("hide")
    questionHeader.classList.remove("hide")
}