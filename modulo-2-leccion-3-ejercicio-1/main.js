"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";

const avatarImg = document.querySelector(".user__avatar");
avatarImg.setAttribute("src", userAvatar || DEFAULT_AVATAR);

//Vamos a suponer que el usuario cuando se registró no tenía una imagen para subir.

// let userAvatar = "";

//Vamos a hacer que haya una imagen sí o sí.
if (userAvatar = "") {
  avatarImg.setAttribute("src", userAvatar)
} else {
 avatarImg.setAttribute("src", DEFAULT_AVATAR)
}


