var timeEl = document.querySelector(".timer");
var secondsLeft = 60;
var choice = false;
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var isCorrect = true;
// import { questions } from './questions';
//when i click on start button 
const buttonStartQuiz = document.querySelector(".startq");

buttonStartQuiz.addEventListener("click", function(event){

    // the 1 question pops up with the answers to choose
    showQuestion(0);
    //the timer start 
    startTimer();

    //hide the main page
    document.getElementById('section-main-page').classList.add('hide');
    // show the quetion page
    document.getElementById('section-question').classList.remove('hide');

});

function showQuestion(index){
 
document.getElementById("question-title").innerHTML = questions[0].title;
document.getElementById("answer1").innerHTML = questions[0].choices[0].title;
document.getElementById("answer2").innerHTML = questions[0].choices[1].title;
document.getElementById("answer3").innerHTML = questions[0].choices[2].title;
document.getElementById("answer4").innerHTML = questions[0].choices[3].title;

// if (isCorrect == true) showQuestion(1);

}

function startTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft ;
    },1000);
        
    
}



