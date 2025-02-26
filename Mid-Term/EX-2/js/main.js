//
//  Bind buttons click event to actions
//
function bindEvents() {
  // TODO
  const minusButton = document.getElementById("minusButton");
  const devideButtton = document.getElementById("divideButton");
  const averageButton = document.getElementById("averageButton");

  minusButton.addEventListener("click", function () {
    showResult(onMinus());
  })
  devideButtton.addEventListener("click", function () {
    showResult(onDivide());
  })
  averageButton.addEventListener("click", function () {
    showResult(onAverage());
  })
}

//
//  Get first number from inputs
//
function getFirstNumber() {
  // TODO
  const firstNum = document.getElementById("firstnumber");
  const number1 = firstNum.Value.trim();
  return number1;
}

//
//  Get last number from inputs
//
function getLastNumber() {
  // TODO
  const lastNum = document.getElementById("lastnumber");
  const number2 = lastNum.value.trim();
  return number2;
}

//
//  Handle minus action
//
function onMinus(e) {
  // TODO
  
  const result = getFirstNumber() - getLastNumber();
  return result;
}

//
//  Handle divide action
//
function onDivide(e) {
  // TODO
  const result = getFirstNumber() / getLastNumber();
  return result;
}

//
//  Handle onAverage action
//
function onAverage(e) {
  // TODO
  const result = (getFirstNumber() + getLastNumber()) / 2;
  return result;
}

//
// Show a number on the result H1
//
function showResult(value) {
  // TODO
  const displayResult = document.querySelector("h1");
  displayResult.textContent = `Result : ${value}` ;

}
showResult(getFirstNumber());
//
// Start program
//
//bindEvents();
