let startButton = document.getElementById("start-button");
let startButtonContainer = document.getElementById("start-btn");

let answerButton = document.getElementById("holdingButtons");
let questionHeader = document.getElementById("question");
let extraButtonContainer = document.getElementById("extra-div");

let next = document.getElementById("next");
let scores = document.getElementById("score");

let home = document.getElementById("return-home");
let quizDiv = document.getElementById("container-div");

let finalPage = document.getElementById("final-page");
let footer = document.getElementById("footer");

let username = document.getElementById("username");

let allButtons = document.querySelectorAll(".btn")

let usernameArray = [];


//The questions for the quiz
let questionHolder = [{
        question: "Who was the lead singer of Nirvana?",
        option: ["Kurt Cobain", "Mick Jagger", "Lionel Richie", "Dave Grohl"],
        answer: "Kurt Cobain"
    },
    {
        question: "What was the name of the band that made the song 'Sweet Home Alabama'?",
        option: ["The Rolling Stones", "Herman's Hermits", "Lynyrd Skynyrd", "U2"],
        answer: "Lynyrd Skynyrd"
    },
    {
        question: "Who produced the legendary album called 'Abbey Road' made by The Beatles?",
        option: ["John Lennon", "Phil Spector ", "Paul Mccartney", "George Martin"],
        answer: "George Martin"
    },
    {
        question: "In which movie is 'Where is my mind' by Pixies played?",
        option: ["Fight Club", "Saving private Ryan", "lock stock and two smoking barrels", "Snatch"],
        answer: "Fight Club"
    },
    {
        question: "In which year did the album 'By the way' made by RHCP got released? ",
        option: ["1998", "2010", "2002", "1994"],
        answer: "2002"
    },
    {
        question: "Where did Ringo Starr from The beatles grow up?",
        option: ["London", "Glasgow", "Manchester", "Liverpool"],
        answer: "Liverpool"
    }
];

let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");
let button4 = document.getElementById("btn4");

let i = 0;

startButton.addEventListener("click", startGame);
next.addEventListener("click", displayNextQuestion);
home.addEventListener("click", returnHome);
startButtonContainer.addEventListener('submit', usernames);
allButtons.forEach(button => button).addEventListener("click", scoreCount)


/**
 * makes so that the sign up goes away and starts the quiz
 */
function startGame() {
    startButtonContainer.classList.add("hide");
    answerButton.classList.remove("hide");
    questionHeader.classList.remove("hide");
    extraButtonContainer.classList.remove("hide");
    footer.classList.add("hide");


    displayQuestion();
}

/**
 * this function displayes the question that is seen in the game.
 */
function displayQuestion() {
    questionHeader.innerHTML = "Question " + (i + 1) + "<br />" + questionHolder[i].question;
    button1.innerHTML = questionHolder[i].option[0];
    button2.innerHTML = questionHolder[i].option[1];
    button3.innerHTML = questionHolder[i].option[2];
    button4.innerHTML = questionHolder[i].option[3];

}

/**
 * 
 * score counter and declairs backgroundcolor of button
 */
function scoreCount() {
    if (allButtons.forEach(button => button.innerHTML) === questionHolder[i].answer && scores.innerHTML < questionHolder.length) {
        scores.innerHTML = ++scores.innerHTML;
        allButtons.forEach(button => button.style.backgroundColor = "green")
    } else {
        a.style.backgroundColor = "Red"
        allButtons.forEach(button => button.style.backgroundColor = "red")
    };

    setTimeout(displayNextQuestion, 500)
}


/**
 * takes you to the next question and displays final page at the end
 */
function displayNextQuestion() {
    if (i < questionHolder.length - 1) {
        i = i + 1;
        displayQuestion();
        returnOriginalColor()
    } else {
        scores.innerHTML = usernameArray[0] + "'s score: " + scores.innerHTML + "/" + questionHolder.length;
        finalPage.classList.remove("hide");
        answerButton.classList.add("hide");
        questionHeader.classList.add("hide");
        extraButtonContainer.classList.add("hide");
        quizDiv.style.display = "none";
        footer.classList.remove("hide");
    };

}

/**returns the color of the button to the original color */
function returnOriginalColor() {
    allButtons.forEach(allButton => allButton.style.backgroundColor = "#f9bc60")
}


/**
 * this function collects the username thats dilivered to the sigup form, it then pushes the name into an array. Similar to Code Institute challenge
 */
function usernames(event) {
    event.preventDefault(event);

    username = username.value;
    usernameArray.unshift(username);
    startButtonContainer.submit(event); {
        console.log(usernameArray);
        alert("welcome " + usernameArray[0])
        startGame()
    };

}

/**
 * this function is connected to the home button and it relods the page so that the user starts over
 */
function returnHome() {
    location.reload();
}