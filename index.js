// selcecting Element 

const cercle = document.querySelector("#cercle");
const arorowPlus = document.querySelector("#arorowPlus");
const arrowMinus = document.querySelector("#arrowMinus");

// variables

let rotateValue = cercle.style.transform;

let rotatesum;

// Function

const function1 = () =>{
    rotatesum = rotateValue + "rotate(90deg)"
    cercle.style.transform = rotatesum;
    rotateValue = rotatesum;
};

const function2 = () =>{
    rotatesum = rotateValue + "rotate(-90deg)"
    cercle.style.transform = rotatesum;
    rotateValue = rotatesum;
};
// Add Event Listener
arorowPlus.addEventListener("click",function1);
arrowMinus.addEventListener("click",function2);
