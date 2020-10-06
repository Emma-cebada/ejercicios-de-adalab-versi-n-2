"use strict";

function getEl(selector) {
  const getEl = document.querySelector(selector);
  if (getEl === null) {
    return `No existe ningún elemento con clase, id o tag llamado ${selector}.`;
  } else {
    return getEl;
  }
}
console.log(getEl("paragraph"));
