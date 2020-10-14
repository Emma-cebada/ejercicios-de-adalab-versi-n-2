"use strict";

//Esto sería la declaración de las constantes para hacerlo metiéndole a cada uno el evento por cada input. Habría que añadir el resto.
// const inputName = document.querySelector(".js-name");
// const inputRole = document.querySelector(".js-role");
// const inputEmail = document.querySelector(".js-email");


const inputList = document.querySelectorAll(".fill__fields--input"); //Esto sería la clase que tienen todos los campos en común, así una misma función sirve para todos, ya que realizan el mismo eento.

const saveField = function (event) {
  console.log(event.currentTarget.value);
}


// inputName.addEventListener("blur", saveField); 
// inputRole.addEventListener("blur", saveField);
// inputEmail.addEventListener("blur", saveField);
//Estos serían para hacer el Listener de cada input

// inputList[0].addEventListener("blur", saveField);
// inputList[1].addEventListener("blur", saveField);
// inputList[2].addEventListener("blur", saveField);
//Esto sería para hacerlo en cada elemento de la lista (array). 

for (const eachElement of inputList) {
  eachElement.addEventListener("blur", saveField);
}

//También se puede hacer con el for clásico.
// for (let i = 0; 1 < 10; i++) {}