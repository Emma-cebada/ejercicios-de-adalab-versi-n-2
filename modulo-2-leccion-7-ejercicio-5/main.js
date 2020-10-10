"use strict";
// Parte a:
const numbers = [7, 4, 8, 12, 23];
let parse = parseInt(numbers);

let average = 0;
let parse2 = parseInt(average);


for (let i = 0; i < numbers.length; i++) {
  average += numbers[i]
}
console.log("La media es : " + numbers % 5);

// Parte b:
numbers[4] = 55;
console.log("La media es : " + numbers % 6);