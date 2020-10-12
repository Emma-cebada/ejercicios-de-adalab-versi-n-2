"use strict";

// modificamos una variable de ámbito global
let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}

console.log(secretLetter); // devuelve "x"
console.log(mySecretLetter()); // devuelve "x"

//Si cambiamos el orden de los conole.log (ahora están cambiados): en vez de imprimir en consola dos veces la "x", imprime "y" y "x"

//No estoy segura de por qué pasa pero diría que es por que al cambiar el orden es como si llamásemos a la función antes de que su valor fuera modificado por "x"