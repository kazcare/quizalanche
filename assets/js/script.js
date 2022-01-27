let currentQuestion = 0;
let score = 0;

// Create variables to all mutable areas on html
let container = document.getElementById('quiz-container');
let questionEL = document.getElementById('question');
let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let opt3 = document.getElementById('opt3');
let opt4 = document.getElementById('opt4');
let nextButton = document.getElementById('next-button');
let contButton = document.getElementById('cont-button');
let resultCont = document.getElementById('result');
let checkCont = document.getElementById('check');
let checkText = document.getElementById('check-text');

//Total number of question available in question.js
let totalQuestions = questions.length;

//Add an Event Listner on the Next Button, which calls loadNextQuestion function as it is clicked
nextButton.addEventListener('click', loadNextQuestion);

//Add an Event Listener on the continue button in Check container, which calls contQuiz function as it is clicked
contButton.addEventListener('click', contQuiz);

//Call loadQuestion function
loadQuestion(currentQuestion);

//Populate questions in the Question and Option containers
function loadQuestion(questionIndex) {

//Get qestions index from question.js and assign to a variable q
    let q = questions[questionIndex];

//Populate Question Container by assigning text content of the questions array from question.js 
//and prefix a question counter
    questionEL.textContent = (questionIndex + 1) + '. '+q.question;

//Populate 4 option fields with the text content of 4 options from question.js
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
}

//Function for Next Question nextButton, which runs when the Next Button is clicked
function loadNextQuestion() {

//If Next Question Button is clicked without selecting an option
//It pops an alert to user asking for a selection before clicking the Next Question Button
    let selecedOption = document.querySelector('input[type=radio]:checked');
    if(!selecedOption) {
        alert('Please, select an option!');
        return;
    }

//checkAnswer function is called which checks selected option against the correct answer
    checkAnswer()

//If the current question is the last question then the text of Next Question button changes to Finish button
    if (currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }

//After finish the last question the Quiz container disappears
//and Result container displays and shows the score
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        checkCont.style.display = 'none';
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

    let selectedOption = document.querySelector('input[type=radio]:checked');
    let answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer) {

//If the selected answer is correct
//Quiz container disappears
        container.style.display = 'none';
//Check Container appears
        checkCont.style.display = '';
//with a message that answere is correct
        document.getElementById('check-text').innerHTML = "You are absolutely right, keep it up!";
//background color changes
        checkCont.style.backgroundColor = "#79d279";
//and the score increased
        score += 1;
    }  else {
//If the selected option is wrong
//Quiz container disappears
        container.style.display = 'none';
//Check Container appears
        checkCont.style.display = '';
//with a message that the answer is incorrect
        document.getElementById('check-text').innerHTML = "Answer is incorrect this time, better luck next time!";
//Background color changes and score stays as it was
        checkCont.style.backgroundColor = "#E86468";
    }

//The selected radio button is unchecked
    selectedOption.checked = false;

//Increment current question
    currentQuestion++;
}

//Function to continue the quiz after getting message showing whether the answer is correct or not
function contQuiz() {
//check container dissappears
    checkCont.style.display = 'none';
//Quiz container reappears
    container.style.display = '';
}

