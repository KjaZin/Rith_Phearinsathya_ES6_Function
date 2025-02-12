// SECRET CODE  ---------------------------------------------------------
const SECRET_CODE = 2359;
let attempts = 3;

// DOMS ELEMENTS  ---------------------------------------------------------
const passwordView = document.getElementById("passwordView");
const lostView = document.getElementById("lostView");
const wonView = document.getElementById("wonView");

const checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", handleCheck);

const tryAgainButton = document.getElementById("tryAgainButton");
tryAgainButton.addEventListener("click", showGame);

const passwordInput = document.getElementById("passwordInput");
passwordInput.addEventListener("keypress", handleEnterPassword);

const instructionLabel = document.getElementById("instructionLabel");
 
// Hide a given element
function hide(element) {
  element.style.display = "none";
}

// Show a given element
function show(element) {
  element.style.display = "block";
}

function showGame() {
  // You can use this function to dispaly the Game view
  passwordInput.value = "";
  instructionLabel.textContent = "Enter your code (only 3 times)";
  show(passwordView);
  hide(lostView);
  hide(wonView);
}

function showWin() {
  // You can use this function to dispaly the Win View
  hide(passwordView);
  show(wonView);
}
function showLost() {
    // You can use this function to dispaly the Lost View
    hide(passwordView);
    show(lostView);
}
function handleEnterPassword(event) {
  if (event.key === "Enter") {
    handleCheck();
  }
}
function handleCheck() {
     // Manage your logic when the button is pressed
     const enterCode = passwordInput.value.trim();
     if (enterCode === SECRET_CODE) {
      showWin();
     }
     else {
      attempts--;
      if (attempts > 0) {
        instructionLabel.textContent = `Wrong code ${attempts} attempt left`;
      }
      else {
        showLost();
      }
    }
    passwordInput.value = "";
}

// MAIN   ---------------------------------------------------------
showGame();
 