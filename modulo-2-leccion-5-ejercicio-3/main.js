"use strict";

const paragraph = document.querySelector(".paragraph");

function introParagraph () {
  const newParagraph = document.createElement("p");
  newParagraph.innerHTML = "Lorem ipsum";
  paragraph.appendChild(newParagraph);
}

paragraph.addEventListener("mouseover", introParagraph);