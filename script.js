var answer1 = documents.querySelector("#ans1");
var answer2 = documents.querySelector("#ans2");
var answer3 = documents.querySelector("#ans3");
var answer4 = documents.querySelector("#ans4");
var timerE1 = documents.querySelector("#timer");
var startQuiz = documents.querySelector("#start");
var points = documents.querySelector("#points");
var questionHolder = documents.querySelector("#questions");
var answerHolder = documents.querySelector("#answers");
var welcome = documents.querySelector("#welcome");
var isCorrect = documents.querySelector("#correctAnswer");
var endScreen = documents.querySelector("#endScreen");




var timerCount = 100;
var timer;
var score = 0;

let i = 0;

questionHolder.style.display = "none";
answerHolder.style.display = "none";
timerE1.style.display = "none";
points.style.display = "none";




// When the user clicks Start the game begins, and the timer starts to count down;
// As each question is answered, the 'Correct' or 'Wrong' is updated;
// Wrong answers take 15 seconds off the timer;
// When all questions are answered - or - time = 0 the game ends;

startQuiz.addEventListener("click", function () {
    questionHolder.style.display = "block";
    answerHolder.style.display = "block";
    timerE1.style.display = "block";
    welcome.style.display = "none";
    startQuiz,style,display = "none"
})

function countdown() {
    timer = setInterval(function () {
        timerCount--;
        timerE1.textContent = "time-remaining: " +timerCount;
        if (timerCount ===0) {
            clearInterval(timer);
        }
    },  1000);
}

startQuiz.addEventListener("click", countdown);

const questionArray = [
{
    question: "Commonly used data types DO NOT include:";
    userChoice: [
        "1. Strings";
        "2. booleans";
        "3. alerts";
        "4. numbers";    
        ]
        correctAnswer: 2;
    }

{
    question: "Arrays in JavaScript can be used to store:";
    userChoice: [
        "1. numbers & strings";
        "2. other arrays";
        "3. booleans";
        "4. all of the above";    
        ]
        correctAnswer: 3;
    }
    
{
    question: "The condition in an if else statement is enclosed within ___:";
    userChoice: [
        "1. quotes";
        "2. curley brackets";
        "3. parentheses";
        "4. square brackers";    
        ]
        correctAnswer: 1;
    }

{
    question: "A very useful tool to debug arrays is:";
    userChoice: [
        "1. JavaScript";
        "2. terminal/bash";
        "3. consol.log";    
        "4. for loops";

        ]
        correctAnswer: 4;
    }
]



console.log("question array", questionArray[i].question);
console.log("length", questionArray.length);

function setQuizQuestions() {
    if (i >= questionArray.length) {
        i++;
    };
    questionHolder.textContent = questionArray[i].question;
    answer1.textContent = questionArray[i].question;
    answer1.textContent = questionArray[i].question;
    answer1.textContent = questionArray[i].question;
    answer1.textContent = questionArray[i].question;
}

setQuizQuestions();

function handleAnswerClick() {
    var index = this.getAttribute("data-index");
    index = parseInt(index);
    console.log("index", index "questionArray", questionArray[i].correctAnswer);

    if (index === questionArray[i].correctAnswer) {
        isCorrect.textIndex = "Correct";
        console.log("Correct");
    }   else {
            isCorrect.textIndex = "Wrong";
            console.log("Wrong");
            timerCount -=15;
    }   
    i++;
    setQuizQuestions();

}

answer1.addEventListener("click", handleAnswerClick);
answer2.addEventListener("click", handleAnswerClick);
answer3.addEventListener("click", handleAnswerClick);
answer4.addEventListener("click", handleAnswerClick);

    if (time <= 0 || currentQuestionIndex === questions.length) {
        quizEnd
    }

function quizEnd() {
    clearInterval(timerID);

}

var endScreenE1 = document.getElementById("end-screen");
    endScreenE1.removeAttribute ("class")
    

// Check to see if there are any additional questions - if not then quizEnd
// Stop the quiz, stop the timer, display win or lose, 
// Then, allow user to add initials to high score list, so record the score of each "initials" and sort by highest to lowest












