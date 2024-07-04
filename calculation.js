/* 
Edge cases to fix:
- Current logic error: when clicked 60 followed by 2 operators consecutively, "60" will automatically be stored to both num1 and num2;
- by right, it should hold on to evaluating only until the 2nd operator is keyed in, no matter how many times the operator is clicked
*/

const MAX_LENGTH = 8;
const display = document.querySelector(".display");
const numList = document.querySelectorAll(".operand");
const operatorList = document.querySelectorAll(".operator"); 
const equals = document.querySelector("#equals"); 
const clearButton = document.querySelector("#clearButton");
const posNegButton = document.querySelector("#posNeg");
const percentageButton = document.querySelector("#percentage");
let num1 = 0;
let num2 = 0;
let currOperator = "";
let prevOperator = "";
let result = 0;
let operatorIsClicked = false;
let equalIsClicked = false;


function calculate() {
    if (operatorIsClicked) {
        let prev = result;
        num1 = Number(display.textContent);
        // if all components of the equation exist
        if (prevOperator && prev && num1) {
            result = operate(prevOperator, prev, num1);
        } else {
            result = num1;
        }
        display.textContent = result;
    } 
    if (equalIsClicked) {
        num1 = result;
        num2 = Number(display.textContent);
        if (currOperator != "") {
            result = operate(currOperator, num1, num2);
            display.textContent = result;
        } else {
            display.textContent = num2;
        }
    }
}

const divide = function(x, y) {
	let res = x / y;
    return roundDown(res.toString());
};

const multiply = function(x, y) {
	let res = x * y;
    return roundDown(res.toString());
};

const subtract = function(x, y) {
	let res = x - y;  
    return roundDown(res.toString());
};

const add = function(x, y) {
	let res = x + y;
    return roundDown(res.toString());
};

function operate(operator, num1, num2) {
    switch(operator) {
        case "/":
            return divide(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "+":
            return add(num1, num2);
    }
}

function populateDisplay(num) {
    // refresh display for next operand
    if (operatorIsClicked || equalIsClicked) {
        display.textContent = 0;
        operatorIsClicked = false;
        equalIsClicked = false;
    }
    // if displayed value is non-zero
    if (display.textContent != 0 && display.textContent.length < MAX_LENGTH) {
        display.textContent += num;
    // if displayed value is at initial value of 0, update with non-zero number
    } else if (display.textContent == 0 && num != 0) {
        display.textContent = num;
    } 
}

function roundDown(numStr) {
    if (numStr.length > MAX_LENGTH) {
        return numStr.substring(0, MAX_LENGTH);
    }
    return numStr;
}

numList.forEach(num => num.addEventListener("click",    
    e => populateDisplay(e.target.textContent)));

operatorList.forEach(operator => operator.addEventListener("click", e => {
    prevOperator = currOperator;
    currOperator = e.target.textContent;
    operatorIsClicked = true;
    equalIsClicked = false;
    calculate();
}));

equals.addEventListener("click", () => {
    equalIsClicked = true;
    calculate();
});

clearButton.addEventListener("click", () => {
    // reset display to init value
    display.textContent = 0;
    num1 = 0; num2 = 0;
    result = 0;
    currOperator = "";
    prevOperator = "";
    operatorIsClicked = false; equalIsClicked = false;
});

posNegButton.addEventListener("click", () => {
    display.textContent *= -1;
});

percentageButton.addEventListener("click", () => {
    display.textContent /= 100;
});