let num1 = 0;
let num2 = 0;
let registeredOperator = "";
let operatorIsClicked = false;
let equalIsClicked = false;
const display = document.querySelector(".display");
const numList = document.querySelectorAll(".operand");
const operatorList = document.querySelectorAll(".operator"); 
const equals = document.querySelector("#equals"); 
const clearButton = document.querySelector("#clearButton");

function calculate() {
    console.log("Entered this function");
    if (operatorIsClicked) {
        console.log(`operator is clicked ${operatorIsClicked}`);
        num1 = Number(display.textContent);
    } 
    if (equalIsClicked) {
        num2 = Number(display.textContent);
        console.log(`Equal is clicked, registered operator is ${registeredOperator}, num1: ${num1}, num2: ${num2}`);
        display.textContent = operate(registeredOperator, num1, num2);
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
        case "*":
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
    // refresh display if operatorIsClicked or equalIsClicked
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
        registeredOperator = e.target.textContent;
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
    registeredOperator = "";
    operatorIsClicked = false; equalIsClicked = false;
});