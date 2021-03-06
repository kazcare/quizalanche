let currentQuestion = 0;
let score = 0;

let container = document.getElementById('quiz-container');
let nextButton = document.getElementById('next-button');
let contButton = document.getElementById('cont-button');
let resultCont = document.getElementById('result');
let checkCont = document.getElementById('check');

//Total number of question available in question.js
let totalQuestions = QUESTIONS.length;

/**
To initialize the game need Call loadQuestion function
Event Listner on the Next Button, which calls loadNextQuestion function as it is clicked
and Event Listener on the continue button in Check container, 
which calls contQuiz function as it is clicked
*/
window.addEventListener('DOMContentLoaded', initializeGame);
function initializeGame() {
    loadQuestion(currentQuestion);
    nextButton.addEventListener('click', loadNextQuestion);
    contButton.addEventListener('click', continueQuiz);
}

/**
Get qestions index from question.js and assign to a variable q
Populate Question Container by assigning text content of the questions array from question.js 
and prefix a question counter
Populate 4 option fields with the text content of 4 options from question.js
 */
function loadQuestion(questionIndex) {
    let q = QUESTIONS[questionIndex];
    let questionEL = document.getElementById('question');
    let optA = document.getElementById('opt-1');
    let optB = document.getElementById('opt-2');
    let optC = document.getElementById('opt-3');
    let optD = document.getElementById('opt-4');
    questionEL.textContent = (questionIndex + 1)+'/'+ totalQuestions + '. '+q.question;
    optA.textContent = q.option1;
    optB.textContent = q.option2;
    optC.textContent = q.option3;
    optD.textContent = q.option4;
}

/**Function for Next Question nextButton, which runs when the Next Button is clicked
    If Next Question Button is clicked without selecting an option
    It pops a warning to user asking for a selection before clicking the Next Question Button
    checkAnswer function is called which checks selected option against the correct answer
    If the current question is the last question then the text of Next Question button changes to Finish button
    After finish the last question the Quiz container disappears and Result container displays and shows the score
    Result container shows the achieved score / maximum possible score
    If current question is not the last question, the next question is displayed
 */
function loadNextQuestion() {
    let selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption) {
        let warning = document.getElementById('warning');
        warning.style.display = '';
        return;
    } else {
        let warning = document.getElementById('warning');
        warning.style.display = 'none';
    }

    checkAnswer();

    if (currentQuestion === totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }else if(currentQuestion === totalQuestions) {
        container.style.display = 'none';
        checkCont.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: '+score+' / '+totalQuestions;
        return;
    }

    loadQuestion(currentQuestion);
}

/**
When the Next Question Button is clicked after selecting an option, the option is checked against the correct answer from question.js
If the selected answer is correct then Quiz container disappears and Check Container appears with a message that answere is correct
 and background color changes and the score increased. But if the selected option is wrong Quiz container disappears and Check Container appears
with a message that the answer is incorrect and background color changes and score stays as it was. The selected radio button is unchecked and
increment current question
 */
function checkAnswer() {
    let selectedOption = document.querySelector('input[type=radio]:checked');
    let answer = selectedOption.value;
    if(QUESTIONS[currentQuestion].answer === answer) {
        container.style.display = 'none';
        checkCont.style.display = '';
        document.getElementById('check-text').innerHTML = "You are absolutely right, keep it up!";
        checkCont.style.backgroundColor = "#79d279";
        score += 1;
    }  else {
        container.style.display = 'none';
        checkCont.style.display = '';
        document.getElementById('check-text').innerHTML = "Answer is incorrect this time, better luck next time!";
        checkCont.style.backgroundColor = "#E86468";
    }
    selectedOption.checked = false;
    currentQuestion++;
}

/**
Function activates when Continue Button is clicked on the container showing message whether the answer is correct or not.
check container dissappears and Quiz container reappears
 */
function continueQuiz() {
    checkCont.style.display = 'none';
    container.style.display = '';
}

