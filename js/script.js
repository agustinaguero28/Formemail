const input = document.querySelector(".inputmail")
const mensaje = document.querySelector(".mensajeerror")

input.addEventListener("invalid",  invalido)

function invalido(){
  mensajeerror.innerHTML = "Ingrese email valido";
  }