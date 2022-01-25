let currentQuestion = 0;
let score = 0;

// Create variables to all mutable areas
let container = document.getElementById('quiz-container');
let questionEL = document.getElementById('question');
let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let opt3 = document.getElementById('opt3');
let opt4 = document.getElementById('opt4');
let nextButton = document.getElementById('nextButton');
let resultCont = document.getElementById('result');

//Total number of question available in question.js
let totalQuestions = questions.length;


loadQuestion(currentQuestion);

//Populate questions through load question
function loadQuestion(questionIndex) {

//Get qestions index from question.js and assign to a variable q
    let q = questions[questionIndex];

//Populate Question Container by assigning text content the questions array from question.js and prefix a question counter
    questionEL.textContent = (questionIndex + 1) + '. '+q.question;

//Populate 4 option fields with the text content of 4 options from question.js
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
}

//Add an Event Listner on the Next Button, which calls loadNextQuestion function as it is clicked
nextButton.addEventListener('click', loadNextQuestion);

//Function for Next Question nextButton
//It runs when the Next Button is clicked
function loadNextQuestion() {

//If Next Question Button is clicked without selecting an option
//It pops an alert to user asking for a selection before clicking the Next Question Button
    let selecedOption = document.querySelector('input[type=radio]:checked');
    if(!selecedOption) {
        alert('Please select an option');
        return;
    }

//Checks selected option against the correct answer
    checkAnswer()

//If the current question is the last question then the text of Next Question button changes to Finish button
    if (currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }

//After finish the last question the Quiz container disappears
//and Result container displays and shows the score
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        resultCont.style.display = '';

//Result container shows the achieved score / maximum possible score
        resultCont.textContent = 'You Score: '+score+' / '+totalQuestions;
        return;
    }
//If current question is not the last question, the next question is displayed
loadQuestion(currentQuestion);

}

//Function to check the answer
function checkAnswer() {

//When the Next Question Button is clicked after selecting an option
//The option is checked against the correct answer from question.js
//If the selected answer is correct the score is increased
    let selectedOption = document.querySelector('input[type=radio]:checked');
    let answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer) {
        score += 1;
    }

//The selected radio button is unchecked
    selectedOption.checked = false;

//Increment current question
    currentQuestion++;

}


