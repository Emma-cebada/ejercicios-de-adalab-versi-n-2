'use strict';

const promos = [
  {
    promo: 'A',
    name: 'Ada',
    students: [
      {
        id: 'id-1',
        name: 'Sofía',
        age: 20
      },
      {
        id: 'id-2',
        name: 'María',
        age: 21
      },
      {
        id: 'id-3',
        name: 'Lucía',
        age: 22
      }
    ]
  },
  {
    promo: 'B',
    name: 'Borg',
    students: [
      {
        id: 'id-4',
        name: 'Julia',
        age: 23
      },
      {
        id: 'id-5',
        name: 'Tania',
        age: 24
      },
      {
        id: 'id-6',
        name: 'Alaia',
        age: 25
      }
    ]
  },
  {
    promo: 'C',
    name: 'Clarke',
    students: [
      {
        id: 'id-7',
        name: 'Lidia',
        age: 26
      },
      {
        id: 'id-8',
        name: 'Celia',
        age: 27
      },
      {
        id: 'id-9',
        name: 'Nadia',
        age: 28
      }
    ]
  }
];

const studentsWorkingInGoogle = ['id-2', 'id-3', 'id-5', 'id-9'];

// TÚ CÓDIGO AQUÍ

//Ejercicio 1
// const htmlContainer = document.querySelector(".js-result");

// function listAdalabers() {

//   let accname = " ";

//   for (let i = 0; i < promos.length; i++) {
//     accname += `<li>${promos[i].name}</li>`;
//   }

//   htmlContainer.innerHTML = `<ul>${accname}</ul>`;
// }

// listAdalabers();


//Ejercicio 2
// function createList() {
//   const addElement = document.querySelector(".js-result");
//   let accName = " ";
//   for (let i = 0; i < promos.length; i++) {
//     accName += `<li><p>Nombre: ${promos[i].name}</p><p>Promo: ${promos[i].promo}</p></li>`;
//   }
//   addElement.innerHTML = `<ul>${accName}</ul>`
// }

// createList();

//Ejercicio 3

// console.log(promos[0].name);
// console.log(promos[0].promo);
// console.log(promos[0].students.length); Esto sirve para ver cómo llegar a lo queremos sacar.

// function promosAdalabers() {
//   const listItems = document.querySelector(".js-result");
//   let accInfo = " ";
//   for (let i = 0; i < promos.length; i++) {
//     accInfo += `<li><p>Nombre: ${promos[i].name}</p><p>Promo: ${promos[i].promo}</p><p>Número de alumnas: ${promos[i].students.length}</p></li>`
//   }

//   listItems.innerHTML = `<ul>${accInfo}</ul>`;
// }

// promosAdalabers();

//Ejercicio 4

//console.log(promos[0].name);
//console.log(promos[0].students[0].name, promos[0].students[0].age); Esto sirve para ver cómo llegar a lo queremos sacar.

let printNameAdalabers = " ";
let dataAdalabers = " ";
const listGeneral = document.querySelector(".js-result");
for (let i = 0; i < promos.length; i++) {
  for (let stud = 0; stud < promos[i].students.length; stud++) {
    printNameAdalabers += `<li>${promos[i].students[stud].name}, ${promos[i].students[stud].age}</li>`
  }

  dataAdalabers += `<li><p>Nombre: ${promos[i].name}</p><ul></ul>${printNameAdalabers}</li>`
  printNameAdalabers = " ";
}
listGeneral.innerHTML = `<ul>${dataAdalabers}</ul>`;