"use strict";

// elemento de HTML
const button = document.querySelector(".button");

// handler
function showAlert(name) {
  const name = Emma;
  console.log(`"Hola " + ${name} + "."`);
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener("click", showAlert);
