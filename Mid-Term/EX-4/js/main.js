
// All cards data
const ALL_CARD_DATA = [
    {
      title: "Angkor Wat",
      culture: "Khmer",
      description:
        "A famous temple in Cambodia, built in the early 12th century. It is the largest religious monument in the world and a symbol of Cambodia.",
    },
    {
      title: "Baguette",
      culture: "French",
      description:
        "A long, narrow loaf of French bread that is known for its crisp crust and soft interior. It is a staple in French cuisine.",
    },
    {
      title: "Apsara Dance",
      culture: "Khmer",
      description:
        "A classical dance form of Cambodia that dates back to the Angkorian era, often performed in traditional costume with elegant hand gestures.",
    },
    {
      title: "Eiffel Tower",
      culture: "French",
      description:
        "A global icon of France, built in 1889. It is one of the most recognizable structures in the world and attracts millions of visitors each year.",
    },
  ];
  
  //
  //  This function takes an array of objects (cardData[]) as input
  //  It dynamically generates cards in the DOM based on the provided data
  //
  //   - Each card is a div "card" with a title (<h3>) and a description (<p>)
  //   - Each card is added to the cardContainer div
  //
  function display(cardData) {
    // TODO -  dynamically generates cards in the DOM based on the provided data
    const container = document.getElementById("cardContainer");
    for ( let i = 0; i < length(cardData); i++) {
      const newHeader = document.createElement("h3");
      newHeader.textContent = cardData[i].title.value;
      container.appendChild(newHeader);
      const newCulture = document.createElement("p");
      newCulture.textContent = cardData[i].culture;
      container.appendChild(newCulture);
      const newText = document.createElement("p");
      newText.textContent = cardData[i].description;
      container.appendChild(newText);
    }
  }
  
  //
  //  This function filters the cards and displays only Khmer culture cards
  //
  function onShowKhmerCards() {
     // TODO -  filters the cards and displays only Khmer culture cards
  }
  
  
  //
  //  Main
  //
  document
    .getElementById("showKhmer")
    .addEventListener("click", onShowKhmerCards);
  
  display(ALL_CARD_DATA); // At start up, we display all cards
  