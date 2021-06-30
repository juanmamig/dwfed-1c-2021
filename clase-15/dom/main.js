// Para UN SOLO ELEMENTO
// 1: Seleccionar un elemento del HTML
const h1 = document.querySelector("h1");
h1.style.color = "red";
h1.style.backgroundColor = "black";

// Para Múltiples Elementos
const allh3 = document.querySelectorAll("h3"); // [h3, h3, h3]
// Nos devuelve un NodeList que es similar a un array.
console.log(allh3);

for (let i = 0; i < allh3.length; i++) {
  allh3[i].style.color = "red";
  allh3[i].style.backgroundColor = "black";
}

// ClassLists
// Resaltar los párrafos destacados
const destacado = document.querySelector(".destacado");

destacados.classList.add("resaltado");
// destacado.classList.remove("resaltado");
// destacado.classList.toggle("resaltado");

