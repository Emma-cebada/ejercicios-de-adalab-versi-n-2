"use strict";

const lostNumbers = [4, 8, 15, 16, 23, 42];
const arrempty = [];

function bestLostNumber() {
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 === 0) {
      arrempty.push(lostNumbers[i]);
    }

  }
}