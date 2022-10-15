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

let questionHolder = [{
    question : "Who was the lead singer of Nirvana?",
    option : ["Kurt Cobain", "Mick Jagger", "Lionel Richie", "Dave Grohl"],
    answer : "Kurt Cobain"
}
{
    question : "What was the name of the band that made the song 'Sweet Home Alabama'?",
    option : ["The Rolling Stones", "Herman's Hermits", "Lynyrd Skynyrd", "U2"],
    answer : "Lynyrd Skynyrd"
}
{
    question : "",
    option : ["", "", "", ""],
    answer : ""
}
{
    question : "",
    option : ["", "", "", ""],
    answer : ""
}
{
    question : "",
    option : ["", "", "", ""],
    answer : ""
}
{
    question : "",
    option : ["", "", "", ""],
    answer : ""
}
]