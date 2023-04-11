var highscores = document.querySelector("#highscores")
var timeEl = document.querySelector("#timer");
var flashCardEl = document.querySelector(".flashCard-container");
var answerEl = document.querySelector(".answer");


var card1 = document.createElement("div");
var h1El = document.createElement("h1");
var pEl = document.createElement("p");
var startBtnEl = document.createElement("button");

h1El.textContent = "Coding Quiz Challenge";
pEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 15 seconds!"
startBtnEl.textContent = "Start Quiz";

flashCardEl.appendChild(card1);
card1.appendChild(h1El);
card1.appendChild(pEl);
card1.appendChild(startBtnEl);

card1.setAttribute("style", "margin:auto; width:50%; text-align: center; padding-top: 50px;")
h1El.setAttribute("style", "font-size: 60px; font-weigh: bolder;")
pEl.setAttribute("style", "font-size: 30px; font-weigh: bolder;")


var card = document.createElement("div");
var quesEl = document.createElement("h1");
var btnEl1 = document.createElement("button");
var btnEl2 = document.createElement("button");
var btnEl3 = document.createElement("button");
var btnEl4 = document.createElement("button");
var hintEl = document.createElement("p")

card.className = "cards";
quesEl.className = "questions";
btnEl1.className = "btns";
btnEl2.className = "btns";
btnEl3.className = "btns";
btnEl4.className = "btns";
hintEl.className = "cards";

card.appendChild(quesEl);
card.appendChild(btnEl1);
card.appendChild(btnEl2);
card.appendChild(btnEl3);
card.appendChild(btnEl4);
answerEl.appendChild(hintEl)


function  QuizQuestion1() {
  flashCardEl.innerHTML = "";
quesEl.textContent = "Commonly used data types DO NOT include:";
btnEl1.textContent = "1. strings";
btnEl2.textContent = "2. booleans";
btnEl3.textContent = "3. alerts";
btnEl4.textContent = "4. numbers";
flashCardEl.appendChild(card);


btnEl3.id = "btnC"
btnEl1.id = "btn"
btnEl2.id = "btn"
btnEl4.id = "btn"

var btnC = document.querySelector("#btnC")
var btnW = document.querySelectorAll("#btn")

  btnC.addEventListener("click", function() {
        hintEl.textContent = "Correct";
        QuizQuestion2();
       });

  for (i of btnW) {
       i.addEventListener("click", function() {
       hintEl.textContent = "Wrong";
       QuizQuestion2();
       });
       }
     }


//Quiz 2
function  QuizQuestion2() {
quesEl.textContent = "The condition in an if/else statement is enclosed within __.";
btnEl1.textContent = "1. quotes";
btnEl2.textContent = "2. curly brackets";
btnEl3.textContent = "3. parentheses";
btnEl4.textContent = "4. square brackets";
flashCardEl.appendChild(card);
answerEl.appendChild(hintEl);


btnEl3.id = "btnC"
btnEl1.id = "btn"
btnEl2.id = "btn"
btnEl4.id = "btn"

var btnC = document.querySelector("#btnC")
var btnW = document.querySelectorAll("#btn")


  btnC.addEventListener("click", function() {
        hintEl.textContent = "Correct";
        QuizQuestion3()
       });

  for (i of btnW) {
       i.addEventListener("click", function() {
       hintEl.textContent = "Wrong";
       QuizQuestion3()
       });
       }
     }


//Quiz 3
function  QuizQuestion3() {
  flashCardEl.innerHTML = "";

quesEl.textContent = "Arrays in JavaScript can be used to store ___.";
btnEl1.textContent = "1. numbers and strings";
btnEl2.textContent = "2. other arrays";
btnEl3.textContent = "3. booleans";
btnEl4.textContent = "4. all of the above";
flashCardEl.appendChild(card);
answerEl.appendChild(hintEl);

btnEl4.id = "btnC"
btnEl1.id = "btn"
btnEl2.id = "btn"
btnEl3.id = "btn"

var btnC = document.querySelector("#btnC")
var btnW = document.querySelectorAll("#btn")


  btnC.addEventListener("click", function() {
        hintEl.textContent = "Correct";
        QuizQuestion4()
       });

  for (i of btnW) {
       i.addEventListener("click", function() {
       hintEl.textContent = "Wrong";
       QuizQuestion4()
       });
       }
     }


//Quiz 4
function  QuizQuestion4() {
  flashCardEl.innerHTML = "";

quesEl.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
btnEl1.textContent = "1. JavaScript";
btnEl2.textContent = "2. terminal/blash";
btnEl3.textContent = "3. for loops";
btnEl4.textContent = "4. comsole.log";
flashCardEl.appendChild(card);
answerEl.appendChild(hintEl);

btnEl4.id = "btnC"
btnEl1.id = "btn"
btnEl2.id = "btn"
btnEl3.id = "btn"

var btnC = document.querySelector("#btnC")
var btnW = document.querySelectorAll("#btn")


  btnC.addEventListener("click", function() {
        hintEl.textContent = "Correct";
        QuizQuestion5()
       });

  for (i of btnW) {
       i.addEventListener("click", function() {
       hintEl.textContent = "Wrong";
       QuizQuestion5()
       });
       }
     }

//Quiz 5
function  QuizQuestion5() {
flashCardEl.innerHTML = "";
quesEl.textContent = "String values must be enclosed within ___ when being assigned to a variables.";
btnEl1.textContent = "1. commas";
btnEl2.textContent = "2. curly brackets";
btnEl3.textContent = "3. parentheses";
btnEl4.textContent = "4. quotes";
flashCardEl.appendChild(card);
answerEl.appendChild(hintEl);

btnEl4.id = "btnC"
btnEl1.id = "btn"
btnEl2.id = "btn"
btnEl3.id = "btn"

var btnC = document.querySelector("#btnC")
var btnW = document.querySelectorAll("#btn")

  btnC.addEventListener("click", function() {
        hintEl.textContent = "Correct";
        //toStop();
        clearInterval(timerInterval)
        sendMessage();
        ;
       });

  for (i of btnW) {
       i.addEventListener("click", function() {
       hintEl.textContent = "Wrong";
       //toStop();
       clearInterval(timerInterval)
       sendMessage();
       })
     }
    }

startBtnEl.addEventListener("click", QuizQuestion1);

var secondsLeft = 75;

var timerInterval = setInterval(toStart, 1000)

function toStart(){ 
  secondsLeft--;
  timeEl.textContent = secondsLeft + " seconds remaining"
  if(secondsLeft === 0) {
   clearInterval(timerInterval);
   sendMessage();
  } 
};

function toStop(){
  clearInterval(timerInterval)
}

function sendMessage() {
  //clearInterval(timerInterval);
  flashCardEl.innerHTML = " ";
  hintEl.textContent = "";
  var card = document.createElement("div");
  var h1El = document.createElement("h1");
  var pEl = document.createElement("p")
  var formEl = document.createElement("form");
  var nameEl = document.createElement("lable");
  var inputEl = document.createElement("input")
  var btnEl = document.createElement("button");
  
  card.className = "cards"
  h1El.textContent = "All done!";
  pEl.textContent = "Your final score is " + secondsLeft + ".";
  nameEl.textContent = "Enter Initials: ";
  btnEl.textContent = "Submit";
  
  flashCardEl.appendChild(card);
  card.appendChild(h1El);
  card.appendChild(pEl);
  card.appendChild(formEl);
  formEl.appendChild(nameEl);
  formEl.appendChild(inputEl);
  formEl.appendChild(btnEl);

btnEl.addEventListener("click", function(event){

event.preventDefault()
//clearInterval(timerInterval);

flashCardEl.innerHTML = ""

var highscores = document.querySelector(".highscores")
var scoreEl = document.createElement("h1")
var returnBtn = document.createElement("button")
var clearBtn = document.createElement("button")
highscores.appendChild(scoreEl);
highscores.appendChild(returnBtn);
highscores.appendChild(clearBtn);
highscores.className = "cards";

var name = inputEl.value

localStorage.setItem("name", name);
localStorage.setItem("scores", secondsLeft)

scoreEl.innerHTML = "Highscores"+ "<br>" + localStorage.getItem("name") + ": " + localStorage.getItem("scores");

returnBtn.textContent = "Go Back";
clearBtn.textContent = "Clear Highscres";
})}