var timer = 60000;

var quizSection = document.querySelector("#quiz");
var titleEl = document.querySelector("#title");
var questionEl = document.querySelector("#question");
var optionsEl = document.querySelector("#options");

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

//update time when answer is incorrect
var updateTime = function() {

}

//create quiz
var createQuiz = function() {

}

//new function to compare user choice with actual answer

var newFunc = function() {
    
}

// var createQuiz = function() {
//     var askQuestion = [];
//     var correctAnswer = [];
//     for(var i=0; i<arrayQuestions.length; i++) {
//         var question = arrayQuestions[i].question
//         correctAnswer.innerHtml = "<label> <input type='radio' name='question'>"
//         console.log(question)
//     };
// };

startEl.addEventListener("click",createQuiz());