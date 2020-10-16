/* function handleClick() {
  showTip();

  incrAttemps();
}

button.addEventListener("click", handleClick); */

const buttonList = document.querySelectorAll(".js-button");

for (let i = 0; i < buttonList.length; i++) {
  buttonList[i].addEventListener("click", handleClick);
}


function handleClick(event) {
  const idDelBoton = event.currentTarget.id;
  console.log(".seccion-" + idDelBoton);

  const miSeccion = document.querySelector(".seccion-" + idDelBoton);
  /* miSeccion.style.height = "40px"; */
  miSeccion.classList.toggle("clase");
}