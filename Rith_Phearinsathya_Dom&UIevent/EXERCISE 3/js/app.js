const COLORS = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "gray"];

//
// Get a random color among the list of available colors
//
function randomColor() {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
}

//
// Create a new card
//
function createCard() {
  let card = document.createElement("div");
  card.classList.add("card");
 
  // 1 - Random color for card
  let cardColor = randomColor();
  card.style.backgroundColor = cardColor;
  // 2 - Set card text
  let cardText = document.createElement("p");
  cardText.textContent = `I am ${cardColor} card`;
  card.appendChild(cardText);
  // 3 - Set card footer
  let cardFooter = document.createElement("div");
  cardFooter.classList.add("card-Footer");
  card.appendChild(cardFooter);
  //  4 - Manage footer button
  let removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.classList.add("btn-danger");
  removeButton.addEventListener("click", function () {
    card.remove();
  });
  cardFooter.appendChild(removeButton);
  // 5 - Add card to containers
  let container = document.querySelector(".container");
  if (container) {
    container.appendChild(card);
  }
 
}


//--------------------------------------------------
// Code Start
//--------------------------------------------------

const btnCreate = document.querySelector('#create');
btnCreate.addEventListener('click', createCard);