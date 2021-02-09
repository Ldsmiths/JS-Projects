const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operators");
const equalsButton = document.querySelector(".equal");
const clearButton = document.querySelector(".btn-red");
const deleteButton = document.querySelector(".btn-blue");
const decimalButton = document.querySelector(".decimal");
const screen = document.querySelector(".screen");

let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldResetScreen = false;

window.addEventListener("keydown", screenInput);
equalsButton.addEventListener("click", calculate);
deleteButton.addEventListener("click", deleteNumber);
clearButton.addEventListener("click", clear);
decimalButton.addEventListener("click", appendDecimal);

numberButtons.forEach((button) => 
	button.addEventListener("click", () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) => 
	button.addEventListener("click", () => setOperation(button.textContent))
	);

function screenInput(e) {
	if (e.key >= 0 && e.key <=9) appendNumber(e.key);
	if (e.key === ".") appendDecimal();
	if (e.key === "=" || e.key === "Enter") calculate();
	if (e.key === "Backspace") deleteNumber();
	if (e.key === "Escape") clear();
	if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
		setOperation(convertOperator(e.key));
} 

function resetScreen() {
	screen.textContent = "";
	shouldResetScreen = false;
  }

function appendNumber(number) {
	if (screen.textContent === "0" || shouldResetScreen) resetScreen();
	screen.textContent += number;
}

function appendDecimal() {
	if (shouldResetScreen) resetScreen();
	if (screen.textContent === "") screen.textContent = "0";
	if (screen.textContent.includes(".")) return;
	screen.textContent += ".";
}

function clear() {
	screen.textContent = "0";
	firstOperand = "";
	secondOperand = "";
	currentOperation = null;
}

function deleteNumber() {
	screen.textContent = screen.textContent.toString().slice(0,-1)
}

function setOperation(operator) {
	if (currentOperation !== null) calculate();
	firstOperand = screen.textContent;
	currentOperation = operator;
	shouldResetScreen = true;
}

function calculate() {
	if (currentOperation === null || shouldResetScreen) return;
	if (currentOperation === "÷" && screen.textContent === "0") {
	  alert("ERROR: Cannot divide by 0");
	  clear();
	  return;
	}
	secondOperand = screen.textContent;
	screen.textContent = operate(currentOperation, firstOperand, secondOperand);
	currentOperation = null;
  }

function convertOperator(keyOp) {
	if (keyOp === "+") return "+";
	if (keyOp === "-") return "−";
	if (keyOp === "*") return "×";
	if (keyOp === "/") return "÷";
}

function add(a, b) {
	return a + b;
  }
  
  function subtract(a, b) {
	return a - b;
  }
  
  function multiply(a, b) {
	return a * b;
  }
  
  function divide(a, b) {
	return a / b;
  }

  function operate(operator, a, b) {
	  a = Number(a);
	  b = Number(b);
	  switch (operator) {
		  case "+":
			  return add(a, b);
		  case "−":
			  return subtract(a, b);
		  case "×":
			  return multiply(a, b);
		  case "÷":
			  if (b === 0) return null;
			  else return divide(a, b);
		   default:
			  return null;			  
	  }
  }