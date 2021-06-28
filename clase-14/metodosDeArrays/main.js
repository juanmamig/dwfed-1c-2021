// Método PUSH de arrays
// let nombres = [];

// nombres.push("Gregorio");
// nombres.push("Estefanía");
// //console.log(nombres); // ["Gregorio", "Estefanía"]

// let nombres2 = nombres;
// //console.log(nombres2); // ["Gregorio", "Estefanía"]

// nombres2.push("Jero");
// console.log(nombres);["Gregorio", "Estefanía", "Jero"]


// Arrays como referencia. Cuidado al copiar arrays!
// let nombres = ["gregorio", "estefanía", "jero"];
// let nombresMay = nombres.slice();

// for (let i = 0; i < nombresMay.length; i++) {
//   nombresMay[i] = nombresMay[i].charAt(0).toUpperCase() + nombresMay[i].slice(1);
// };

// // nombres = ["Gregorio", "Estefanía", "Jero"];
// //mandarMails(nombresMay);

// console.log(nombresMay);

// if (nombres[0] === "gregorio") {
//   console.log("Usted Ganó");
// }


// Método POP
// let nombres = ["gregorio", "estefanía", "jero"];
// const eliminado = nombres.pop();
// console.log(eliminado, nombres);

// Método Splice
// EXP 1
// let nombres = ["gregorio", "estefanía", "jero"];
// const eliminados = nombres.splice(0, 2);
// console.log("Eliminados: " + eliminados, nombres);

// EXP 2
// let nombres = ["gregorio", "estefanía", "jero"];
// const eliminados = nombres.splice(0, nombres.length);
// console.log("Eliminados: " + eliminados, nombres);


// Forma NO ideal de almacenar productos y precios
// const lista = ["Fósforos", "Pan", "Queso", "Salamín"];
// const precios = [120, 170, 180];

/*
1. Para clonar arrays hay que usar el método splice();
Si no uso ese método, los arrays comparten referenciap5.BandPass()

2. Existen métodos que nos sirven para modificar los elementos de un array.

3. Los arrays no son el mejor tipo de dato para almacenar elementos compuestos como por ejemplo un producto que tenga
- nombre
- precio
- marca
- fecha de vencimiento
- etc.

Para eso se usan objetos.
*/
