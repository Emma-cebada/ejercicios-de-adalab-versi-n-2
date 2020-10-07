"use strict";

const adalaber1 = {
  name: "Susana",
  age: 34,
  studies: "periodista",
};

//Para que nos muestre en la consola:
// console.log(adalaber1.age);

const adalaber2 = {
  name: "Rocío",
  age: 25,
  studies: "actriz",
};

//Para que nos muestre en la consola:
// console.log(adalaber1);

const message = document.querySelector(".message");

//Adalaber Susana
message.innerHTML = `<p>"Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.studies}"</p>`;

//Adalaber Rocío
message.innerHTML += `<p>"Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.studies}"</p>`;
