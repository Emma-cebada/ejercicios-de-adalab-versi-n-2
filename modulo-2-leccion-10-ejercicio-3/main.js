"use strict";

const button = document.querySelector(".button");

function userGit() {
  const inputValue = document.querySelector(".input").nodeValue;

  fetch(`https://api.github.com/users/)${inputValue}`)
    .then((response) => response.json())
    .then((dataInput) => {
      const name = document.querySelector(".name");
      name.innerHTML = dataInput.name;
      const repositories = document.querySelector(".repository");
      repositories.innerHTML = dataInput.public_repos;
      const image = document.querySelector(".image");
      image.scr = dataInput.avatar_url;
    })
}

button.addEventListener("click", userGit);