"use strict";

const main__list = document.querySelector(".main__list");
const firstDogImage =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const secondDogImage =
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const thirdDogImage =
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";

main__list.innerHTML = `<ul class="main__list"><li>${firstDogName} <a>${firstDogImage}</a></li><li> ${secondDogName} ${secondDogImage}</li> <li> ${thirdDogName} ${thirdDogImage}</li> </ul>`;
