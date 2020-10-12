"use strict";

//Id probando con los ingredientes o con nada para que te salga el mensaje por defecto.

const recipe = "";

switch(recipe) {
  case "Pollo" : 
  console.log("Pollo al horno con verduras.");
    break;
  case "Espinacas" :
    console.log("Espinacas con setas.");
    break;
  case "Merluza" :
    console.log("Merluza a la plancha con ensalada mixta.");
    break;
  default:
    console.log("No tienes nada en la nevera, ¡tendrías que ir a hacer la compra!");  
}