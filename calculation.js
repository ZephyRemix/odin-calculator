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

const result = document.querySelector(".result");
const numList = document.querySelectorAll(".operand");

numList.forEach(num => num.addEventListener("click", (e) => alert(`${e.target.textContent} is clicked`))); 