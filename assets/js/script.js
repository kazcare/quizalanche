let currentQuestion = 0;
let score = 0;

// Create variables to all mutable areas
let container = document.getElementById('quiz-conainer');
let questionEL = document.getElementById('question');
let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let opt3 = document.getElementById('opt3');
let opt4 = document.getElementById('opt4');
let nextButton = document.getElementById('nextButton');
let resultCont = document.getElementById('result');

//Total number of question available in question.js
let totalQuestions = questions.length;

//Populate questions
function loadQuestion(questionIndex) {
    let q = questions[questionIndex];
    questionEL.textContent = (questionIndex + 1) + '. '+q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
}

nextButton.addEventListener('click', loadQuestion);

//Function for Next Question nextButton
function loadNextQuestion() {
//If Next Question Button is clicked without selecting an option
    let selecedOption = document.querySelector('input[type=radio]:checked');
    if(!selecedOption) {
        alert('Please select an option');
        return;
    }

//Checks selected option against the correct answer
    checkAnswer()

//If the content question is the last question then Next Question Button willbe changes to finish
    if (currentQuestion ==totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }



loadQuestion(currentQuestion);

}

loadQuestion(currentQuestion);

