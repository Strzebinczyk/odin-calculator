let numA;
let numB;
let op;

const add = function (a,b) {
  return a+b;
}

const subtract = function (a,b) {
  return a-b;
}

const multiply = function (a,b) {
  return a*b;
}

const divide = function (a,b) {
  if(b === 0) {
    alert("Please don't divide by 0")
  } else {
    return a/b;
  }
}

const operate = function (a, operator, b) {
  a=parseInt(a);
  b=parseInt(b);
  switch (operator) {
    case "+" :
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
       return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const equal = document.querySelector("#equals")
const clear = document.querySelector("#clear")

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (numA === undefined) {
      numA = 0;
      display.textContent = numA;
    }
    op = operator.textContent; 
    display.textContent = numA + op;
  });
});

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (op === undefined && numA === undefined) {
      numA = number.textContent;
      display.textContent = numA;
    } else if (op === undefined) {
      numA = numA + number.textContent;
      display.textContent = numA;
    } else if (numB === undefined) {
      numB = number.textContent;
      display.textContent = numA + op + numB;
    } else {
      numB = numB + number.textContent;
      display.textContent = numA + op + numB;
    }
  });
});

equal.addEventListener("click", () => {
  if (numB === undefined) {
    alert("Please enter a number, an operator and another number");
  }
  display.textContent = operate(numA, op, numB);
  numA = undefined;
  numB = undefined;
  op = undefined;
});

clear.addEventListener("click", () => {
  numA = undefined;
  numB = undefined;
  op = undefined;
  display.textContent = "";
});