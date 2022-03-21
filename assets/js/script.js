var timeEl = document.querySelector(".timer");
var secondsLeft = 60;
var choice = false;
var answer1 = questions[0].choices[0].title;
var answer2 = questions[0].choices[1].title;
var answer3 = questions[0].choices[2].title;
var answer4 = questions[0].choices[3].title;
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
document.getElementById("answer1").innerHTML = answer1
document.getElementById("answer2").innerHTML = answer2
document.getElementById("answer3").innerHTML = answer3
document.getElementById("answer4").innerHTML = answer4


}

function startTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft ;
    },1000);
        
    
}

answer1.addEventListener("click", showQuestion(0));
    

// function answerQ() {
// let answerQuestion;
// if (answerQuestion == answer1){
//     showQuestion(0);
// } else {
//     textContent = "wrong answer"
// }
// }
for (var i = 0; i < questions.length; i++){
    showQuestion(i);
}
console.log(showQuestion);