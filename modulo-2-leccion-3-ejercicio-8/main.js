"use strict";

// Si queremos que sólo salga por consola.

// const currentYear = 1997;
// const parragraph = document.querySelector(".parragraph")

// if (currentYear % 4 === 0) {
//   console.log("Este año es bisiesto.");
// } else {
//   console.log(`El siguiente año bisiesto es ${currentYear + (4 - (currentYear % 4))}`);
// }

//Para meterlo en un párrafo del HTML:
const currentYear = 2041;
const nextBisiesYear = (currentYear + (4 - currentYear % 4));
const parragraph = document.querySelector(".parragraph");

if (currentYear % 4 === 0) {
  parragraph.innerHTML = ("<p>Este año es bisiesto.</p>");
  
} else {
  parragraph.innerHTML = ("<p>El siguiente año bisiesto es: " + nextBisiesYear + "." +"</p>");
}