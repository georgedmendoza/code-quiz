var timer = 60000;

//var quizSection = document.querySelector("#quiz");
// var optionsEl = document.querySelector("#options");
// var submitEl = document.querySelector("#button");


var startQuizEl = document.querySelector("#quiz");
var questionsEl = document.querySelector("#question-div");
//quiz questions captured
var questionTitle = document.querySelector("#question-content");
var answersEl = document.querySelector("#answers");
var ulAnswers = document.querySelector("#ulAnswers");
var score = document.querySelector("#score-div");
var questionIndex = 0;

var arrayQuestions = [
{
    question: "Commonly used data types DO Not Include?",
    options: ["strings","booleans","alerts","numbers"],
    answer: 2
},
{
    question: "Which type of variable is visible only withing a function where it is defined?",
    options: ["global variable","local variable","both of the above","none of the above"],
    answer: 1 
},
{
    question: "Which built-in method returns the calling string value converted to lower case?",
    options: ["toLowerCase()","toLower()","changeCase(case)","None of the above"],
    answer: 0
},
{
    question: "Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?",
    options: ["slice()","split()","replace()","search()"],
    answer: 1
},
{
    question: "Which of the following function of Array object sorts the elements of an array",
    options: ["toSource()","sort()","toString()","unshift()"],
    answer: 1
}  
]

var startQuiz = function() {
    startQuizEl.style.display = "none";
    questionsEl.style.display = "flex";
    questionIndex = 0;

    //calls function to start displaying first question
    getQuestion();
};

//update time when answer is incorrect
var updateTime = function() {

};

//displays end of quiz and accepts input from user to record score
var endQuiz = function() {
    console.log("end")
    //stop timer
    //show div for score
    // score.style.display = "block";
    // score.style.background = "red";
    //hide div
    questionsEl.style.display = "none"
};




//create quiz
var getQuestion = function() {
    var question = arrayQuestions[questionIndex].question;
    var options = arrayQuestions[questionIndex].options;
    questionTitle.textContent = question;
    //given class to the question text
    questionTitle.className = "head";

    
    //makes sure not all multiple choice options are displayed
    ulAnswers.innerHTML = "";
    //create new element for the question to be displayed and options
    for (var i=0; i<options.length; i++) {
        var li = document.createElement("li");
        //each li will have an index
        li.setAttribute("id",i);
        li.style.margin = "20px";
        li.textContent = options[i];
        ulAnswers.appendChild(li);
        li.style.listStyle = "none";
        li.className = "choices"
        li.addEventListener("click",checkAnswer);
    };
};

var checkAnswer = function(event) {
    console.log(event.target.id);
    var answerId = event.target.id;
    if(questionIndex >= arrayQuestions.length){
        //subtract 10s from timer
        return endQuiz();
    }
    else if(arrayQuestions[questionIndex].answer == answerId) {
        
        questionIndex++;
        console.log("correct");
        getQuestion()
    }
    else if(arrayQuestions[questionIndex].answer != answerId) {
        //subtract 10s from timer
        //add 1 to the questionIndex
        
        questionIndex++;
        console.log("wrong");
        getQuestion();
    };

};

startQuizEl.addEventListener("click",startQuiz);