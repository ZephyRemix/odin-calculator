let num1 = 0;
let num2 = 0;
let registeredOperator = "";
const display = document.querySelector(".display");
const numList = document.querySelectorAll(".operand");
const operatorList = document.querySelectorAll(".operator"); 
const equals = document.querySelector("#equals"); 

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
            divide(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "+":
            add(num1, num2);
            break;
    }
}

numList.forEach(num => num.addEventListener("click",    
    e => populateDisplay(e.target.textContent)));

function populateDisplay(num) {
    if (display.textContent != 0) {
        display.textContent += num;
    } else if (display.textContent == 0 && num != 0) {
        display.textContent = num;
    }
}

operatorList.forEach(operator => operator.addEventListener("click", 
    e => console.log(registeredOperator = e.target.textContent)));

function calculate() {
    // the moment an operator button is clicked 
    // assign current set of numbers displayed (display.textContent) to num1
    // subsequent set of numbers typed will:
        // overwrite current display value and start as new string
    // once equal is pressed 
        // assign current set of numbers displayed (display.textContent) to num2
        // operate(num1, num2, registeredOperator)
}