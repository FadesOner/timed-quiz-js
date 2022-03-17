// import { questions } from './questions';
//when i click on start button 
const buttonStartQuiz = document.querySelector(".startq");

buttonStartQuiz.addEventListener("click", function(event){

    // the 1 question pops up with he choice of answers
    showQuestion(0);
    //the timer start 
    startTimer();

    //hide the main page
    document.getElementById('section-main-page').classList.add('hide');
    // show the quetion page
    document.getElementById('section-question').classList.remove('hide');

});

function showQuestion(index){
 // TODO: complete this
document.getElementById("question-title").innerHTML = (questions[0] .title);

}

function startTimer() {
    // TODO: complete this function
}



