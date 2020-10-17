"use strict";

const tasks = [
  {
    name: "Recoger setas en el campo.",
    completed: true
  },
  {
    name: "Comprar pilas.",
    completed: false
  },
  {
    name: "Poner una lavadora de blancos",
    completed: true
  },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript.",
    completed: false
  }
];

//Paint

function paintTask() {
  const listElement = document.querySelector(".js-list");
  listElement.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let completedClass;
    let checkeAttr;
    if (tasks[i].completed === true) {
      completedClass = "completed";
      checkeAttr = "checked";
    } else {
      completedClass = "";
      checkeAttr = "";
    }

    listElement.innerHTML += `<li class="${completedClass}">
    <input type="checkbox" ${checkeAttr} class="js-list-check" id="${i}"/>
    <span>${tasks[i].name}</span>
  </li>`;
  }
}

//Listen Event

function toogleTask(event) {
  console.log("Me han clickado", event.target.id);
  const clickedID = event.target.id;
  tasks[clickedID].completed = !tasks[clickedID].completed;

  paintTask();
  listenEvents();
}

function listenEvents() {
  const checkboxElements = document.querySelectorAll(".js-list-check");
  for (const checkboxElement of checkboxElements) {
    console.log(checkboxElement);
    checkboxElement.addEventListener("change", toogleTask);
  }
}

//start up

paintTask();
listenEvents();









