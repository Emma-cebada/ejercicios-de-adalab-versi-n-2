"use strict";
// Como yo lo estaba haciendo.
// function iva(a, b) {
//   const result = (a / b) * 100;
//   return result;
// }

// const amount = iva(12, 21, 100);
// console.log("Resultado:", amount);

//Hecho en clase.
function getIva(price) {
  const iva = price * 0.21;
  const total = price + iva;
  console.log(
    `El precio es: ${price}€. El IVA es: ${iva}€. El precio total es: ${total}€.`
  );
}

getIva(100);

//Otra forma de hacerlo.
function getIva(price) {
  const iva = price * 0.21;
  const total = price + iva;
  console.log();
  const text = `El precio es: ${price}€. El IVA es: ${iva}€. El precio total es: ${total}€.`;
  return text;
}

const paragraph = document.querySelector(".js-text");
paragraph.innerHTML = getIva(100);
