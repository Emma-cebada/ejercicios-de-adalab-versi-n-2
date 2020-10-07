"use strict";

//Presentación adalaber Susana.
const adalaber1 = {};
(adalaber1.name = "Susana"),
  (adalaber1.age = 34),
  (adalaber1.studies = "periodista"),
  (adalaber1.showBio = function () {
    return (
      "Mi nombre es " +
      this.name +
      ", tengo " +
      this.age +
      " años y soy " +
      this.studies +
      "."
    );
  });
console.log(adalaber1.showBio());

//Presentación adalaber Rocío.
const adalaber2 = {};
(adalaber2.name = "Rocío"),
  (adalaber2.age = 25),
  (adalaber2.studies = "actriz"),
  (adalaber2.showBio = function () {
    return (
      "Mi nombre es " +
      this.name +
      ", tengo " +
      this.age +
      " años y soy " +
      this.studies +
      "."
    );
  });
console.log(adalaber2.showBio());
