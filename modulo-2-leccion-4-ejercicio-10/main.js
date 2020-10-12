"use strict";

function calculator(borderBox, width, padding, borderSize) {
  let totalWidth;
  if (borderBox === false) {
    totalWidth = width + padding * 2 + borderSize * 2;
  } else {
    totalWidth = width; 
  }
    return `El ancho del contenido es: ${width} px y el ancho total de la caja es: ${totalWidth} px.`;
};

let result1 = calculator(true, 30, 2, 34);
console.log(result1);

let result2 = calculator(false, 30, 2, 34);
console.log(result2);