"use strict";

// constante con el valor del mensaje a mostrar
const message = "Mi primer click, ¡ole yo y la mujer que me parió!";

// constantes para las clases
const button = document.querySelector(".button");
const paragraph = document.querySelector(".paragraph");

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener("click", function () {
  paragraph.innerHTML = message;
});
