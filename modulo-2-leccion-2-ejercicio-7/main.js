"use strict";
const main__title = document.querySelector(".main__title");
const hi = "Hola";
const name = "Lucia,";
const textToShow = "encantada de conocerte.";
console.log(`${hi} ${name} ${textToShow}`);

main__title.innerHTML = `<div class="main__title"><span>${hi} ${name} ${textToShow}</span></div>`;
