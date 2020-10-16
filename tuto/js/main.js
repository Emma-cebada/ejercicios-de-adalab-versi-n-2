'use strict';

const inputName = document.querySelector(".js-name");
const inputLastname = document.querySelector(".js-lastname");
const button = document.querySelector(".js-button");
const resultDiv = document.querySelector(".js-result");
/* let nameGlobal; */
/* let data = []; */
/* let attempts=0; */

function composeName() {
  // 1. Coger name

  const name = getName();
  /* getName(); */

  // 2. Coger lastname

  const lastname = getLastName();

  // 3. Juntarlos

  const fullname = concatFullname(name, lastname);

  // 4. Pintarlo

  renderFullname(fullname);
}


function getName() {
  const getUserName = inputName.value;

  console.log(getUserName);

  return getUserName;

/*   nameGlobal = inputName.value; */
}

function getLastName() {
  const getUserLastname = inputLastname.value;
  return getUserLastname;
}

function concatFullname(name, lastname) {
  const fullname = name + lastname;
  return fullname;
}

function renderFullname(message) {
  resultDiv.innerHTML = message;

}

button.addEventListener("click", composeName);

