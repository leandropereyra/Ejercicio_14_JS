let eventoBoton = document.querySelector("button");

eventoBoton.addEventListener("click", () => alert("click en el botón"));

$("button").click(function () {
  console.log("Hola, estoy utilizando jQuery");
});
