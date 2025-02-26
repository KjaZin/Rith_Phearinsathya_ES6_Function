//
//  Clear the inputs
//
function clearInput() {

 // TODO 
}

//
//  Get the input and create a new row on the table
//
function onAddUser(event) {
  event.preventDefault();

  // TODO Create a row
  let row = {};
 
  // TODO Add the first name to the row
  row.firstName = firstNameInput;
 
  // TODO Add the last name to the row
  row.lastName = lastNameInput;
 
  // TODO Add the province to the row
  row.province = provinceDropDown; 
 
  // TODO Add the gender to the row
  row.gender = genderRadios;

  // TODO Add the skills  to the row
  row.skills = skillsCheckboxes;

  // TODO Add the comment to the row
  row.comment = commentTextArea;
 
  // TODO Add TR to tbody
  const newRow = document.createElement("tr");
  const rFirstName = document.createElement("th");
  rFirstName.textContent = row.firstName;
  newRow.appendChild(rFirstName);
  const rLastName = docq.createElement("th");
  rLastName.textContent = row.lastName;
  newRow.appendChild(rLastName);
  const rProvince = document.createElement("th");
  rProvince.textContent = row.province;
  newRow.appendChild(rProvince);
  const rGender = document.createElement("th");
  rGender.textContent = row.gender;
  newRow.appendChild(rGender);
  const rSkill = document.createElement("th");
  rSkill.textContent = row.skills;
  newRow.appendChild(rSkill);
  const rComment = document.createElement("th");
  rComment.textContent = row.comment;
  newRow.appendChild(rComment);
  const tbody = document.querySelector("tbody");
  tbody.appendChild(newRow);
 
  // TODO Clear inputs
  event.clearInput()
}

// Main
const firstNameInput = document.querySelector("#firstname");
const lastNameInput = document.querySelector("#lastname");
const provinceDropDown = document.querySelector("#province");
const genderRadios = document.querySelectorAll('input[type="radio"]');    // This will return a collection of DOM elements
const skillsCheckboxes = document.querySelectorAll(".skill");             // This will return a collection of DOM elements
const commentTextArea = document.querySelector("#comment");

const table = document.querySelector("tbody");
const submitButton = document.querySelector("button");

submitButton.addEventListener("click", onAddUser);
