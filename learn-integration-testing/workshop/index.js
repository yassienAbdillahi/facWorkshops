const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function calculate(a, sign, b) {
  //changed this as part of the challenge
  const Aconverted = parseFloat(a);
  const Bconverted = parseFloat(b);
  switch (sign) {
    case "+":
      return add(Aconverted, Bconverted);
    case "-":
      return subtract(Aconverted, Bconverted);
    case "*":
      return multiply(Aconverted, Bconverted);
    case "/":
      return divide(Aconverted, Bconverted);
    default:
      return "Please enter a valid sign (+, -, *, /)";
  }
}

const form = document.querySelector("form");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // get user input from form
  const data = new FormData(form);
  const a = data.get("a");
  const sign = data.get("sign");
  const b = data.get("b");

  // calculate result and update page
  const answer = calculate(a, sign, b);
  document.querySelector("#result").textContent = answer;
  event.target.reset();
});
