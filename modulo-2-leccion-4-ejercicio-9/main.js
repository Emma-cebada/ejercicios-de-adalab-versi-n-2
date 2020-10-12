"use strict";

// function mult(a, b) {
//   return a * b;
// }

// const amount = mult(4, 9);
// console.log("Resultado:", amount);

//Transformar la función anterior en Arrow

const mult = amount => {
  return `Resultado: ${amount}`;
};

console.log(mult (5 * 9));