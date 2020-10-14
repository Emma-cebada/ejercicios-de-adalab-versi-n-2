"use strict";

const arr = [];
// for (let i = 1; i <= 100; i++) {
//   console.log('Aquí tenemos un: ' + i);
//   arr.push(i);
// }
// console.log(arr);

function get100Numbers(newArr) {
  for (let i = 1; i <= 100; i++) {
    console.log('Aquí tenemos un: ' + i);
    newArr.push(i);
  }
}

get100Numbers(arr);
console.log(arr);