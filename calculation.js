/* 
Edge cases to fix:
- When equal is pressed immediately after a number is pressed, display screen goes blank
- After equal is clicked, the next operator click will multiply the display screen with prev number (unintended behaviour)
- Add logic for +/- and %
- after equal is clicked once, then subsequent operators clicked should wait for next operand in order to run 
*/
let num1 = 0;
let num2 = 0;
let currOperator = "";
let prevOperator = "";
let result = 0;
let operatorIsClicked = false;
let equalIsClicked = false;
const display = document.querySelector(".display");
const numList = document.querySelectorAll(".operand");
const operatorList = document.querySelectorAll(".operator"); 
const equals = document.querySelector("#equals"); 
const clearButton = document.querySelector("#clearButton");

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
	return x / y;
};

const multiply = function(x, y) {
	return x * y;
};

const subtract = function(x, y) {
	return x - y;  
};

const add = function(x, y) {
	return x + y;
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

numList.forEach(num => num.addEventListener("click",    
    e => populateDisplay(e.target.textContent)));

function populateDisplay(num) {
    // refresh display for next operand
    if (operatorIsClicked || equalIsClicked) {
        display.textContent = 0;
        operatorIsClicked = false;
        equalIsClicked = false;
    }
    // if displayed value is non-zero
    if (display.textContent != 0) {
        display.textContent += num;
    // if displayed value is at initial value of 0, update with non-zero number
    } else if (display.textContent == 0 && num != 0) {
        display.textContent = num;
    } 
}

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
    prevOperator = "";
    currOperator = "";
    operatorIsClicked = false; equalIsClicked = false;
});