var timeEl = document.querySelector(".timer");
var secondsLeft = 60;
var choice = false;
var isCorrect = true;
var i;
// import { questions } from './questions';
//when i click on start button 
const buttonStartQuiz = document.querySelector(".startq");
const choiceList = document.getElementById('choice-list');

const spanFeedback = document.getElementById('span-feedback');


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



function createButton(title, isCorrect){

    const li = document.createElement('li');

    const button = document.createElement('button');

    button.classList.add('btn');

    button.setAttribute('data-correct', isCorrect);
    button.textContent = title;

    li.append(button);

    return li;

}
function showFeedback(isCorrect) {
    let message;
    if(isCorrect){
        message = 'Correct!';
    }else{
        message = ' Wrogn!';
    }

    spanFeedback.textContent = message;
    spanFeedback.classList.remove('hide');

    // i want to show this for 1 sec

    setTimeout(function(){
        // rehide the span
        spanFeedback.classList.add('hide');
    }, 1000);

    
}

function showQuestion(index){
    
    function checkAnswer(event) {
        event.preventDefault();
    
        const button = event.target;
    
        const isCorrect = button.getAttribute('data-correct') === 'true';
    
        // if right 
        // do nothing
        if(isCorrect){
            showFeedback(true);
        }
        
        // if wrong reduce time on timer
        if(!isCorrect){
            secondsLeft = secondsLeft - 10;
            // pop up message say its wrong
            showFeedback(false);
        }
        
        // nmove to next question
        showQuestion(index + 1);
    
    }


    // what if index exceed total qs??
    if(index >= questions.length){
        return endGame();
    }
//stop the time 
//
    
    var question = questions[index];
    

    var choices = question.choices;



    // <li ><button id="answer1" data-correct="true" class="btn1">answer1</button></li>

    // generate the choice button



    choiceList.textContent ="";
    for (let index = 0; index < choices.length; index++) {
        const choice = choices[index];
        var choiceButton = createButton(choice.title, choice.isCorrect);
        // when clicked on the button
        choiceButton.addEventListener('click', checkAnswer);
        choiceList.append(choiceButton);
    
    }






document.getElementById("question-title").innerHTML = question.title;





}

function startTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft ;
    },1000);
        
    
}


    

// function answerQ() {
// let answerQuestion;
// if (answerQuestion == answer1){
//     showQuestion(0);
// } else {
//     textContent = "wrong answer"
// }
// }



