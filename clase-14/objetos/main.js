const producto = {
  marca: "coca cola",
  categoria: "gaseosa",
  tipo: ["light", "común", "Zero"],
  precio: 180,
  isStock: true,
  "color de marca": "rojo" // SE PUEDE PERO REPRUEBAN
}

// Key Value pair "Propiedad": "Valor"

console.log(producto["categoria"]); // Es lo menos frecuente

console.log(producto["color de marca"]); // SE PUEDE PERO REPRUEBAN
//console.log(producto.color de marca); // NO SE PUEDE Y REPRUEBAN

console.log(producto.categoria); // gaseosa
console.log("$" + producto.precio);

const posteo = {
  id: 7532,
  titulo: "El mejor ejercicio",
  autor: "NicoBar",
  categoria: "practicas"
}

posteo.categoria = "Ejercicios en clase";
posteo["categoria"] = "Ejercicios en clase"; // Es lo menos frecuente

console.log(posteo.id);
console.log(posteo["id"]); // Esto es lo menos frecuente
console.log(posteo.titulo);
console.log(posteo.autor);
console.log(posteo.categoria);

// For en objetos

for (let propiedad in posteo) {
  console.log(propiedad);
  console.log(posteo[propiedad]);
}


const posteos = [
  {
    id: 7532,
    titulo: "El mejor ejercicio",
    autor: "NicoBar",
    categoria: "practicas"
  },
  {
    id: 7533,
    titulo: "El segundo mejor ejercicio",
    autor: "JuanMaMig",
    categoria: "practicas"
  },
  {
    id: 7534,
    titulo: "El tercer mejor ejercicio",
    autor: "NicoBar",
    categoria: "practicas"
  }
];

for (let i = 0; i < posteos.length; i++) {
  `<div class="product">
    <h1>${posteo[i].titulo}</h1>
  </div>`
}
