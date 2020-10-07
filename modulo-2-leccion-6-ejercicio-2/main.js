"use strict";

const adalaber1 = {
  name: "Susana",
  age: 34,
  studies: "periodista",
};
const adalaberRun = {};
adalaberRun.run = `Estoy corriendo`;

//Para verlo en la consola
console.log(adalaberRun.run);

const runAMarathon = {};
runAMarathon.distance = (kilo) =>
  `Estoy corriendo una maratón de ${kilo} kilómetros.`;

//Para mostrar en la consola
console.log(runAMarathon.distance(50));
