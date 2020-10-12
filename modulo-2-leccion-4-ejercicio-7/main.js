"use strict";

function getEl(selector) {
  const getEl = document.querySelector(selector);
  if (getEl === null) {
    return `No existe ningún elemento con clase, id o tag llamado ${selector}.`;
  } else {
    return getEl;
  }
}
console.log(getEl(".paragraph"));

function pair(num) {
  if (num % 2 === 0) {
    return "Este número es par.";
  } else if (num % 2 !== 0) {
    return "Este número es impar.";
  }
}

const value = getEl(".paragraph");
const valueParagraph = parseInt(value.innerHTML);

console.log(pair(valueParagraph));