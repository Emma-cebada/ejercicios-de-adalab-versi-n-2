"use strict";

// elemento de HTML
const button = document.querySelector(".button");

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener("click", function () {
  const name = document.querySelector("#myInput").value;
  console.log(`Hola ${name}`);
});
