"use strict";

const lostNumbers = [4, 8, 15, 16, 23, 42];
const arrempty = [];
const mult3 = [];

function bestLostNumber() {
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 === 0) {
      arrempty.push(lostNumbers[i]);
    }
    if (lostNumbers[i] % 3 === 0) {
      mult3.push(lostNumbers[i]);
    }
  }
  console.log(arrempty.concat(mult3));
}

bestLostNumber();
console.log(arrempty);
console.log(mult3);
