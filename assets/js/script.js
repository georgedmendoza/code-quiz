var timerEl = document.querySelector("#timer");
var randomList = [];
// var timeLeft = 90;

var points = 0;
var endButton = document.querySelector("#end");
var startQuizEl = document.querySelector("#quiz");
var questionsEl = document.querySelector("#question-div");
//quiz questions captured
var questionTitle = document.querySelector("#question-content");
var answersEl = document.querySelector("#answers");
var ulAnswers = document.querySelector("#ulAnswers");
var score = document.querySelector("#score-div");
var check = document.querySelector("#check");
var scoreTitle = document.querySelector("#title-score");
var questionIndex = 0;

var arrayQuestions = [
{
    question: "Commonly used data types DO Not Include?",
    options: ["1. strings","2. booleans","3.alerts","4.numbers"],
    answer: 2
},
{
    question: "Which type of variable is visible only withing a function where it is defined?",
    options: ["1. global variable","2. local variable","3.both of the above","4.none of the above"],
    answer: 1 
},
{
    question: "Which built-in method returns the calling string value converted to lower case?",
    options: ["1. toLowerCase()","2. toLower()","3.changeCase(case)","4.None of the above"],
    answer: 0
},
{
    question: "Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?",
    options: ["1. slice()","2. split()","3.replace()","4.search()"],
    answer: 1
},
{
    question: "Which of the following function of Array object sorts the elements of an array",
    options: ["1. toSource()","2. sort()","3.toString()","4.unshift()"],
    answer: 1
}  
]

var startQuiz = function() {
    startQuizEl.style.display = "none";
    questionsEl.style.display = "flex";
    questionIndex = 0;
   
    //starts the timer for the user

    // initialTime();

    //calls function to start displaying first question
    getQuestion();
};

//update time when answer is incorrect

var initialTime = function() {
    timerEl.textContent = timeLeft;
    var countDown = setInterval(function() { 
        timeLeft = timeLeft - 1;
        timerEl.textContent = timeLeft;

    // if(timeLeft <= 0) {
    //     clearInterval(initialTime);
    //     endQuiz();
    // }
    

    },1000);
};

var updateTime = function() {
    var count = setInterval( function() {
        timerEl = initialTime() - 10;
    },1000);
};


// var updateTime = setInterval( function() {
//     if(newTime> 0){
//         newTime = newTime - 1;
//         timerEl.textContent = newTime
//     };
    
//     if(newTime<=0) {
//         endQuiz();
//     }
// },1000)

//displays end of quiz and accepts input from user to record score
var endQuiz = function() {
    console.log("end")
    //stop timer
     //hide div
     questionsEl.style.display = "none"
    //show div for score
    score.style.display = "flex";
    score.style.justifyContent = "center";
    score.style.alignItems = "center"; 
};

var loadTasks = function () {
    for (var i = 0; i < localStorage.length; i++) {
    // set iteration key name
    var key = localStorage.key(i);
    // use key name to retrieve the corresponding value
    var value = localStorage.getItem(key);
   
    var title = document.querySelector("#head-title");
    title.textContent = "Scores";
    var names = document.createElement("li");
    names.className = "list"
    names.textContent = key + ": " + value;
    names.fontSize = 'small';
    scoreTitle.appendChild(names);
  }
}



//create quiz
var getQuestion = function() {
    var question = arrayQuestions[questionIndex].question;
    // console.log()
    var options = arrayQuestions[questionIndex].options;
    questionTitle.textContent = question;
    //given class to the question text
    questionTitle.className = "question-title";

    
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
    console.log("asasdf",questionIndex, (questionIndex==arrayQuestions.length))
    console.log(event.target.id);
    var answerId = event.target.id;
    var timeLeft = 90;
   
    if(questionIndex >= arrayQuestions.length-1){
        //subtract 10s from timer
        console.log("HHHHHHHHHHHHHHHHHHHHHHSSSSSSSSSSSS")
        return endQuiz();
    }
    else if(arrayQuestions[questionIndex].answer == answerId) {
        if(questionIndex < arrayQuestions.length){
            var initialTime = function() {
                
                timerEl.textContent = timeLeft;
                var countDown = setInterval(function() { 
                    timeLeft = timeLeft - 1;
                    timerEl.textContent = timeLeft;
            
                // if(timeLeft <= 0) {
                //     clearInterval(initialTime);
                //     endQuiz();
                // }
                
            
                },1000);
                
            };
            
            initialTime();
            
            
            questionIndex++;
            console.log("correct");
            check.textContent = "Correct";
            check.style.background = "green";
            points = points + 2;
            console.log("points " + points);
            getQuestion();
        }
    }
    else if(arrayQuestions[questionIndex].answer != answerId) {
       
        if(questionIndex < arrayQuestions.length) {
            var initialTime = function() {
                timerEl.textContent = timeLeft;
                var countDown = setInterval(function() { 
                    timeLeft = timeLeft - 10;
                    timerEl.textContent = timeLeft;
            
                // if(timeLeft <= 0) {
                //     clearInterval(initialTime);
                //     endQuiz();
                // }
                
            
                },1000);
            };
            initialTime();
            
            //add 1 to the questionIndex
            questionIndex++;
            console.log("wrong");
            check.textContent = "Wrong";
            check.style.background = "red";
            points = points - 1;
            console.log("points " +points);
            getQuestion();
            //subtract 10s from timer
            
        
        };
    }

};


saveTasks = function(){
    var initials = document.querySelector("#submit-button").value;
    console.log(initials);
    localStorage.setItem(initials,points);
}



startQuizEl.addEventListener("click",startQuiz);
endButton.addEventListener("click",function(event) {
    event.preventDefault(); 
    saveTasks();
    loadTasks();
})