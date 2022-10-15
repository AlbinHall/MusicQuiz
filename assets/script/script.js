let startButton = document.getElementById("start-button")
let startButtonContainer = document.getElementById("start-btn")

let answerButton = document.getElementById("holdingButtons")
let questionHeader = document.getElementById("question")
let extraButtonContainer = document.getElementById("extra-div")

let next = document.getElementById("next")
let scores = document.getElementById("score")
let btn = document.getElementsByClassName("btn")

let home = document.getElementById("return-home")

let i = 0
let score = 0


startButton.addEventListener("click", startGame)
next.addEventListener("click", displayNextQuestion)
home.addEventListener("click", returnHome)


/**
 * makes so that the sign up goes away and starts the quiz
 */
function startGame() {
    startButtonContainer.classList.add("hide")
    answerButton.classList.remove("hide")
    questionHeader.classList.remove("hide")
    extraButtonContainer.classList.remove("hide")

    displayQuestion()
}

function answers(){

}

function displayQuestion() {
        questionHeader.innerHTML= "Question " + (i+1) + ": " + questionHolder[i].question;
        button1.innerHTML = questionHolder[i].option[0];
        button2.innerHTML = questionHolder[i].option[1];
        button3.innerHTML = questionHolder[i].option[2];
        button4.innerHTML = questionHolder[i].option[3];
        
}

/**
 * 
 * score counter and declairs backgroundcolor of button
 */
function scoreCount(btn) {
    if (btn.innerHTML === questionHolder[i].answer && scores.innerHTML < questionHolder.length) {
        scores.innerHTML = ++scores.innerHTML
        btn.classList.add("btn-correct")
        alert("Well played")
    } else {
        btn.classList.add("btn-wrong")
        alert("Better luck next time")
    }
    setTimeout(displayNextQuestion, 300)

}
/**
 * takes you to the next question
 */
function displayNextQuestion() {
    if (i < questionHolder.length -1) {
        i = i+1
        displayQuestion();
    } else {
        scores.innerHTML = score + "/" + questionHolder.length;
    }
    
}

function returnHome() {
    location.reload
}


// The questions, answer options and the correct answer for the quiz.
let questionHolder = [{
    question : "Who was the lead singer of Nirvana?",
    option : ["Kurt Cobain", "Mick Jagger", "Lionel Richie", "Dave Grohl"],
    answer : "Kurt Cobain"
},
{
    question : "What was the name of the band that made the song 'Sweet Home Alabama'?",
    option : ["The Rolling Stones", "Herman's Hermits", "Lynyrd Skynyrd", "U2"],
    answer : "Lynyrd Skynyrd"
},
{
    question : "Who produced the legendary album called 'Abbey Road' made by The Beatles?",
    option : ["John Lennon", "Phil Spector ", "Paul Mccartney", "George Martin"],
    answer : "George Martin"
},
{
    question : "In which movie is 'Where is my mind' by Pixies played?",
    option : ["Fight Club", "Saving private Ryan", "lock stock and two smoking barrels", "Snatch"],
    answer : "Fight Club"
},
{
    question : "In which year did the album 'By the way' made by RHCP got released? ",
    option : ["1998", "2010", "2002", "1994"],
    answer : "2002"
},
{
    question : "Where did Ringo Starr from The beatles grow up?",
    option : ["London", "Glasgow", "Manchester", "Liverpool"],
    answer : "Liverpool"
}
]

let button1 = document.getElementById("btn1")
let button2 = document.getElementById("btn2")
let button3 = document.getElementById("btn3")
let button4 = document.getElementById("btn4")