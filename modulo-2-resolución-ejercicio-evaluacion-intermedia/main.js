"use strict";

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const numberRandom = getRandomNumber(100);
console.log(numberRandom);

const btn = document.querySelector(".js-btn");
const inputNumber = document.querySelector(".js-number");
const msj = document.querySelector(".js-msj");
const msjCounter = document.querySelector(".js-count");


function magicNumber() {
  let inputValue = parseInt(inputNumber.value);
  if (inputValue <= 100 && inputValue > 0) {
    console.log("Entró en if");
    if (inputValue < numberRandom) {
      msj.innerHTML = "Demasiado bajo.";
    } else if (inputValue > numberRandom) {
      msj.innerHTML = "Demasiado alto.";
    } else if (inputValue === numberRandom) {
      msj.innerHTML = "Has ganado campeona!!!"
    }
  }
  else {
    console.log("Debe ser un número de 0 a 100")
  }
  counter();
  msjCounter.innerHTML = "'Número de intentos: ' + ${counter}";
}

let counterClick = 0;
function counter() {
  counterClick++;
  return counterClick;
}
btn.addEventListener("click", magicNumber);
