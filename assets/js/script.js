var highscores = document.querySelector("#highscores")
var timeEl = document.querySelector("#timer");
var flashCardEl = document.querySelector(".flashCard-container");

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

startBtnEl.className = "startBtn";

var card2 = document.createElement("div");
var h1El = document.createElement("h1");
var btnEl1 = document.createElement("button");
var btnEl2 = document.createElement("button");
var btnEl3 = document.createElement("button");
var btnEl4 = document.createElement("button");

btnEl1.className = "btns btn1";
btnEl2.className = "btns btn1";
btnEl3.className = "btns btn1";
btnEl4.className = "btns btn1";
card2.className = "cards"

h1El.textContent = "Commonly used data types DO NOT include:";
btnEl1.textContent = "1. strings";
btnEl2.textContent = "2. booleans";
btnEl3.textContent = "3. alerts";
btnEl4.textContent = "4. numbers";

//flashCardEl.appendChild(card2);
card2.appendChild(h1El);
card2.appendChild(btnEl1);
card2.appendChild(btnEl2);
card2.appendChild(btnEl3);
card2.appendChild(btnEl4);


var card3 = document.createElement("div");
var h1El = document.createElement("h1");
var btnEl1 = document.createElement("button");
var btnEl2 = document.createElement("button");
var btnEl3 = document.createElement("button");
var btnEl4 = document.createElement("button");

btnEl1.className = "btns btn2";
btnEl2.className = "btns btn2";
btnEl3.className = "btns btn2";
btnEl4.className = "btns btn2";
card3.className = "cards"

h1El.textContent = "The condition in an if/else statement is enclosed within __.";
btnEl1.textContent = "1. quotes";
btnEl2.textContent = "2. curly brackets";
btnEl3.textContent = "3. parentheses";
btnEl4.textContent = "4. square brackets";

//flashCardEl.appendChild(card3);
card3.appendChild(h1El);
card3.appendChild(btnEl1);
card3.appendChild(btnEl2);
card3.appendChild(btnEl3);
card3.appendChild(btnEl4);


var card4 = document.createElement("div");
var h1El = document.createElement("h1");
var btnEl1 = document.createElement("button");
var btnEl2 = document.createElement("button");
var btnEl3 = document.createElement("button");
var btnEl4 = document.createElement("button");

btnEl1.className = "btns btn3";
btnEl2.className = "btns btn3";
btnEl3.className = "btns btn3";
btnEl4.className = "btns btn3";
card4.className = "cards"


h1El.textContent = "Arrays in JavaScript can be used to store ___.";
btnEl1.textContent = "1. numbers and strings";
btnEl2.textContent = "2. other arrays";
btnEl3.textContent = "3. booleans";
btnEl4.textContent = "4. all of the above";

//flashCardEl.appendChild(card4);
card4.appendChild(h1El);
card4.appendChild(btnEl1);
card4.appendChild(btnEl2);
card4.appendChild(btnEl3);
card4.appendChild(btnEl4);


var card5 = document.createElement("div");
var h1El = document.createElement("h1");
var btnEl1 = document.createElement("button");
var btnEl2 = document.createElement("button");
var btnEl3 = document.createElement("button");
var btnEl4 = document.createElement("button");

btnEl1.className = "btns btn4";
btnEl2.className = "btns btn4";
btnEl3.className = "btns btn4";
btnEl4.className = "btns btn4";
card5.className = "cards"

h1El.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
btnEl1.textContent = "1. JavaScript";
btnEl2.textContent = "2. terminal/blash";
btnEl3.textContent = "3. for loops";
btnEl4.textContent = "4. comsole.log";

//flashCardEl.appendChild(card5);
card5.appendChild(h1El);
card5.appendChild(btnEl1);
card5.appendChild(btnEl2);
card5.appendChild(btnEl3);
card5.appendChild(btnEl4);



var card6 = document.createElement("div");
var h1El = document.createElement("h1");
var btnEl1 = document.createElement("button");
var btnEl2 = document.createElement("button");
var btnEl3 = document.createElement("button");
var btnEl4 = document.createElement("button");

btnEl1.className = "btns btn5";
btnEl2.className = "btns btn5";
btnEl3.className = "btns btn5";
btnEl4.className = "btns btn5";
card6.className = "cards"


h1El.textContent = "String values must be enclosed within ___ when being assigned to a variables.";
btnEl1.textContent = "1. commas";
btnEl2.textContent = "2. curly brackets";
btnEl3.textContent = "3. parentheses";
btnEl4.textContent = "4. quotes";

//flashCardEl.appendChild(card6);
card6.appendChild(h1El);
card6.appendChild(btnEl1);
card6.appendChild(btnEl2);
card6.appendChild(btnEl3);
card6.appendChild(btnEl4);



var card7 = document.createElement("div");
var h1El = document.createElement("h1");
var formEl = document.createElement("form");
var labelEl = document.createElement("lable");
var inputEl = document.createElement("input")
var btnEl = document.createElement("button");



card7.className = "cards"



h1El.textContent = "All done!";

formEl.textContent = "Enter Initials: ";
btnEl.textContent = "Submit";

//flashCardEl.appendChild(card7);
card7.appendChild(h1El);
card7.appendChild(formEl);
formEl.appendChild(labelEl);
formEl.appendChild(inputEl);
formEl.appendChild(btnEl);




var secondsLeft = 15;

startBtnEl.addEventListener("click", function(){
    //var secondsLeft = 5;
    var timerInterval = setInterval(() => {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining"
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            //flashCardEl.innerHTML =" ";
            sendMessage();
        }
        flashCardEl.replaceChild(card2, card1)  

        var btn = document.querySelectorAll(".btns")
        btn.forEach(addEventListener("click", function() {
         flashCardEl.replaceChild(card3, card2);

         //var btn2 = document.querySelector(".btn2")
        btn.forEach(addEventListener("click", function() {
         flashCardEl.replaceChild(card4, card3);
         
         //var btn3 = document.querySelector(".btn3")
        btn.forEach(addEventListener("click", function() {
         flashCardEl.replaceChild(card5, card4);
         
         //var btn4 = document.querySelector(".btn4")
        btn.forEach(addEventListener("click", function() {
         flashCardEl.replaceChild(card6, card5);

         //var btn5 = document.querySelector(".btn5")
         btn.forEach(addEventListener("click", function() {
            clearInterval(timerInterval);
            sendMessage();
          //flashCardEl.replaceChild(card7, card6);
          //var pEl = document.createElement("p");
          //pEl.textContent = "Your final score is " + secondsLeft + " .";
          //card7.appendChild(pEl);
        }));
        }));
        }));
        }));
        }));
    }, 1000);
});

function sendMessage () {
flashCardEl.innerHTML =" ";

var card7 = document.createElement("div");
var h1El = document.createElement("h1");
var pEl = document.createElement("p");
var formEl = document.createElement("form");
var labelEl = document.createElement("lable");
var inputEl = document.createElement("input")
var btnEl = document.createElement("button");


card7.className = "cards";

h1El.textContent = "All Done!";

formEl.textContent = "Enter Initials: ";
btnEl.textContent = "Submit";

flashCardEl.appendChild(card7);
card7.appendChild(h1El);
card7.appendChild(pEl);
card7.appendChild(formEl);
formEl.appendChild(labelEl);
formEl.appendChild(inputEl);
formEl.appendChild(btnEl);



pEl.textContent = "Your final score is " + secondsLeft + ".";

}