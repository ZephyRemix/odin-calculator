const num1 = 0;
const num2 = 0;
const operator = "";

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

const display = document.querySelector(".display");
const numList = document.querySelectorAll(".operand");

numList.forEach(num => num.addEventListener("click",    
    e => populateDisplay(e.target.textContent)));

function populateDisplay(num) {
    if (display.textContent != 0) {
        display.textContent += num;
    } else if (display.textContent == 0 && num != 0) {
        display.textContent = num;
    }
}