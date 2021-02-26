// Create variables for html elements
var mainEl = document.querySelector("#main");
var headEl = document.querySelector("#head1");
var timeEl = document.querySelector("#time");
var questionContEl = document.querySelector(".questionContainer");
var quizQuestionEl = document.querySelector("#quizQuestions")
var answerDisplayEl = document.querySelector("#answerDisplay");
var questionButtonEl1 = document.querySelector("#questionButton1");
var questionButtonEl2 = document.querySelector("#questionButton2");
var questionButtonEl3 = document.querySelector("#questionButton3");
var questionButtonEl4 = document.querySelector("#questionButton4");
var fNameInputEl = document.querySelector("#fname");
var endGameEl = document.querySelector(".endGameContainer");
var userOptionsEl = document.querySelector(".userOptions");
var showScoreEl = document.querySelector("#showScore");
var refreshPageEl = document.querySelector("#refreshPage");
var clearSavedInfoEl = document.querySelector("#clearSavedInfo");

// set starting time and put to the page
var secondsLeft = 60;
timeEl.textContent = secondsLeft;

// variable for enabling and disabling answer buttons
var isDisabledButton = false;

// variable to determine that user has selected an answer
var hasAnswered = false;

// array of questions for quiz
var questionBank = ["Commonly used data types DO NOT include: ", "The condition in an if / else statement is enclosed within _____.", "Arrays in Javascript can used to store _____.", "String values must be enclosed within _____ when being assigned to variables.", "A very helpful too used during development and debugging for printing content to the debugger is:"];

// arrays of answers
var answerBankQ1 = ["boolean", "integer", "string", "alert"];
var answerBankQ2 = ["quotes", "curly brackets", "parantheses", "square brackets"];
var answerBankQ3 = ["numbers and strings", "other arrays", "booleans", "all of the above"];
var answerBankQ4 = ["commas", "curly brackets", "quotes", "parantheses"];
var answerBankQ5 = ["JavaScript", "terminal/bash", "for loops", "console log"];

// variable user for timer
var timerInterval;

// create an index variable for question bank
var questionBankIndex = 0;

// variable used to determine if user selected correct answer
var rightAnswer;

// array to ...
var userInfoArr = [];

// object to store user info
var userInfo = {
    userName: "",
    score: 0,
    timeLeft: 0,
};

// function to display questions
function nextQuestion() {  
    
    // set rightAnswer as empty string
    rightAnswer = "";

    // hide the answer text
    answerDisplayEl.style.visibility = "hidden";

    // swtich case for code questions
    switch (questionBankIndex)
    {
        case 0:
            // display the question
            quizQuestionEl.textContent = questionBank[questionBankIndex];
            // display the answers
            questionButtonEl1.textContent = answerBankQ1[0];
            questionButtonEl2.textContent = answerBankQ1[1];
            questionButtonEl3.textContent = answerBankQ1[2];
            questionButtonEl4.textContent = answerBankQ1[3];

            // set varaiable to correct answer
            rightAnswer = answerBankQ1[3];
            
            // increment bankindex
            ++questionBankIndex;

            break;

        case 1:
            // display the question
            quizQuestionEl.textContent = questionBank[questionBankIndex];
            // display the answers
            questionButtonEl1.textContent = answerBankQ2[0];
            questionButtonEl2.textContent = answerBankQ2[1];
            questionButtonEl3.textContent = answerBankQ2[2];
            questionButtonEl4.textContent = answerBankQ2[3];

            // set varaiable to correct answer
            rightAnswer = answerBankQ2[1];

            // increment bankindex
            ++questionBankIndex;
            break;
        case 2:
            // display the question
            quizQuestionEl.textContent = questionBank[questionBankIndex];
            // display the answers
            questionButtonEl1.textContent = answerBankQ3[0];
            questionButtonEl2.textContent = answerBankQ3[1];
            questionButtonEl3.textContent = answerBankQ3[2];
            questionButtonEl4.textContent = answerBankQ3[3];

            // set varaiable to correct answer
            rightAnswer = answerBankQ3[3];

            // increment bankindex
            ++questionBankIndex;
            break;
        case 3:
            // display the question
            quizQuestionEl.textContent = questionBank[questionBankIndex];
            // display the answers
            questionButtonEl1.textContent = answerBankQ4[0];
            questionButtonEl2.textContent = answerBankQ4[1];
            questionButtonEl3.textContent = answerBankQ4[2];
            questionButtonEl4.textContent = answerBankQ4[3];

            // set varaiable to correct answer
            rightAnswer = answerBankQ4[2];

            // increment bankindex
            ++questionBankIndex;
            break;
        case 4:
            // display the question
            quizQuestionEl.textContent = questionBank[questionBankIndex];
            // display the answers
            questionButtonEl1.textContent = answerBankQ5[0];
            questionButtonEl2.textContent = answerBankQ5[1];
            questionButtonEl3.textContent = answerBankQ5[2];
            questionButtonEl4.textContent = answerBankQ5[3];

            // set varaiable to correct answer
            rightAnswer = answerBankQ5[3];

            // increment bankindex
            ++questionBankIndex;
            break;
        case 5:
            questionContEl.style.display = "none";
            endGameEl.style.visibility = "visible";
            userOptionsEl.style.visibility = "visible";
            showScoreEl.textContent = userInfo.score;
            clearInterval(timerInterval);
            userInfo.timeLeft = secondsLeft;
            break;
    }
}

// function to determine if user selected right or wrong answer
function rightWrong(isRight) {
    if (isRight) {
        // show user thier choice was correct
        answerDisplayEl.textContent = "Correct";
        // increment score
        userInfo.score += 1;
    }
    else {
        // show user thier choice was incorrect
        answerDisplayEl.textContent = "Incorrect";
        // reduce time by 10 seconds
        secondsLeft -= 10;
    }
    // make the answer visible to user
    answerDisplayEl.style.visibility = "visible";
}

// start button event
startButton.addEventListener("click", function(event) {
    // prevent default behavior
    event.preventDefault();

    // hide content after start button is clicked
    mainEl.style.display = "none";
    headEl.style.display = "none";

    // set question container to visisble
    questionContEl.style.visibility = "visible";

    // display the first question when the user selects the start button
    nextQuestion();

    // start game timer
    function setTime() {
    // game timer
            timerInterval = setInterval(function() {
            secondsLeft--;
            timeEl.textContent = secondsLeft;

            if(secondsLeft <= 0) {
                // Stops execution of action at set interval
                clearInterval(timerInterval);
                alert("Your time has run out.");
                questionBankIndex = 5;
                secondsLeft = 0;
                timeEl.textContent = secondsLeft;
                nextQuestion();
            }
        }, 1000);
    }
    setTime();
});

// question button 1 event
questionButton1.addEventListener("click", function(event) {
    // prevent default behavior
    event.preventDefault();

    // turn off the buttons
    isDisabledButton = true;
    questionButtonEl1.disabled = isDisabledButton;
    questionButtonEl2.disabled = isDisabledButton;
    questionButtonEl3.disabled = isDisabledButton;
    questionButtonEl4.disabled = isDisabledButton;

    // set hasAnswered to true
    hasAnswered = true;

    // check the users answer
    var isRight = false;
    if (questionButtonEl1.textContent === rightAnswer) {
        isRight = true;
    }
    rightWrong(isRight); 
});

// question button 2 event
questionButton2.addEventListener("click", function(event) {
    // prevent default behavior
    event.preventDefault();

    // turn off the buttons
    isDisabledButton = true;
    questionButtonEl1.disabled = isDisabledButton;
    questionButtonEl2.disabled = isDisabledButton;
    questionButtonEl3.disabled = isDisabledButton;
    questionButtonEl4.disabled = isDisabledButton;

    // set hasAnswered to true
    hasAnswered = true;

    // check the users answer
    var isRight = false;
    if (questionButtonEl2.textContent === rightAnswer) {
        isRight = true;
    }
    rightWrong(isRight);
});

// question button 3 event
questionButton3.addEventListener("click", function(event) {
    // prevent default behavior
    event.preventDefault();

    // turn off the buttons
    isDisabledButton = true;
    questionButtonEl1.disabled = isDisabledButton;
    questionButtonEl2.disabled = isDisabledButton;
    questionButtonEl3.disabled = isDisabledButton;
    questionButtonEl4.disabled = isDisabledButton;

    // set hasAnswered to true
    hasAnswered = true;

    // check the users answer
    var isRight = false;
    if (questionButtonEl3.textContent === rightAnswer) {
        isRight = true;
    }
    rightWrong(isRight);
});

// question button 4 event
questionButton4.addEventListener("click", function(event) {
    // prevent default behavior
    event.preventDefault();

    // turn off the buttons
    isDisabledButton = true;
    questionButtonEl1.disabled = isDisabledButton;
    questionButtonEl2.disabled = isDisabledButton;
    questionButtonEl3.disabled = isDisabledButton;
    questionButtonEl4.disabled = isDisabledButton;

    // set hasAnswered to true
    hasAnswered = true;

    // check the users answer
    var isRight = false;
    if (questionButtonEl4.textContent === rightAnswer) {
        isRight = true;
    }
    rightWrong(isRight);
});

nextButton.addEventListener("click", function(event) {
    // prevent default behavior
    event.preventDefault();

    if (hasAnswered) {
        // turn on the buttons
        isDisabledButton = false;
        questionButtonEl1.disabled = isDisabledButton;
        questionButtonEl2.disabled = isDisabledButton;
        questionButtonEl3.disabled = isDisabledButton;
        questionButtonEl4.disabled = isDisabledButton;
        
        // set hasAnswered to false
        hasAnswered = false;

        // go to the next question
        nextQuestion();
    }
});

alert.addEventListener

// create save button for click event, then store the info in local
submit.addEventListener("submit", function(event) {
    // prevent default behavior
    event.preventDefault();
    
    fNameInputEl.disabled = "true";

    userInfo.userName = fNameInputEl.value;
    userInfoArr.push(userInfo);
    localStorage.setItem("UserInformation", JSON.stringify(userInfoArr));
});

function init() {
    var storedUsers = JSON.parse(localStorage.getItem("UserInformation"));
    if (storedUsers !== null) {
      userInfoArr = storedUsers;
    }
}

// Click event causes refresh
refreshPageEl.addEventListener('click', function (event) {
    event.preventDefault();
    location.reload();
  });

// clear saved user info
clearSavedInfoEl.addEventListener('click', function (event) {
    event.preventDefault();
    localStorage.removeItem("UserInformation");
    alert("All saved information has been removed.")
    location.reload();
});

// call init function
init();