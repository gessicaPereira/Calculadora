let buttons = document.querySelectorAll(".buttons");
console.log(buttons);
let numbers = document.querySelectorAll(".numbers");
console.log(numbers);
let operands = document.querySelectorAll(".operands");
console.log(operands);
let clear = document.querySelector(".clear");
console.log(clear);
let input = document.querySelector(".calcScreen");
console.log(input);
let equals = document.querySelector(".equals");
console.log(equals);

let equation = [];

for (i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (e) => {
    let numberInnerText = parseInt(e.target.innerText);
    equation.push(numberInnerText);
    input.value = numberInnerText;
  });
}

for (i = 0; i < operands.length; i++) {
  operands[i].addEventListener("click", (e) => {
    let operandInnerText = e.target.innerText;
    equation.push(operandInnerText);
    input.value = operandInnerText;
  });
}

clear.addEventListener("click", () => {
  equation = [];
  input.value = "";
});

equals.addEventListener("click", (e) => {
  operation = equation[1];
  if (equation.length === 3) {
    if (operation === "+") {
      addition = equation[0] + equation[2];
      equation.push(addition);
      input.value = addition;
    } else if (operation === "-") {
      subtraction = equation[0] - equation[2];
      equation.push(subtraction);
      input.value = subtraction;
    } else if (operation === "/") {
      division = equation[0] / equation[2];
      equation.push(division);
      input.value = division;
    } else if (operation === "*") {
      multiplication = equation[0] * equation[2];
      equation.push(multiplication);
      input.value = multiplication;
    }
    equation = [];
  }
});