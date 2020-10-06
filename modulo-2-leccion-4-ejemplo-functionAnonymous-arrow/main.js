"use strict";

//Para crear y llamar a una función anónima:

const getIvaAnonymous = function (price) {
  const iva = price * 0.21;
  const total = price + iva;
  console.log();
  const text = `El precio es: ${price}€. El IVA es: ${iva}€. El precio total es: ${total}€.`;
  return text;
};
console.log("Anónima " + getIvaAnonymous(50));
// const paragraph = document.querySelector(".js-text");
// paragraph.innerHTML = getIvaAnonymous(50);

//Funciones arrow:

const getIvaArrow = (price) => {
  const iva = price * 0.21;
  const total = price + iva;
  console.log();
  const text = `El precio es: ${price}€. El IVA es: ${iva}€. El precio total es: ${total}€.`;
  return text;
};
console.log("Arrow " + getIvaArrow(40));
const paragraph = document.querySelector(".js-text");
paragraph.innerHTML = getIvaArrow(40);
