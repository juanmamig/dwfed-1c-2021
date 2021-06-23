// Ejercicio 1
let edad = prompt("Ingrese su edad");
edad = parseInt(edad, 10);
console.log("Su edad es: " + (edad + 20));

/**
 * 1. Todo lo que ingresamos en el prompt se convierte en string.
 * 2. Si estamos trabajando con números, podemos parsearlos.
 * ¿Que quiere decir parsear? => Convertir
 *
 * O sea, como ejemplo podemos decir que convierto un "10" (string) en un 10 (number)
 */

// Ejercicio 2

let edad2 = prompt("Ingrese su edad nuevamente");
edad2 = parseInt(edad2, 10);
// console.log("El doble de tu edad es: " + edad2 * 2);

//if (edad2 >= 18) { alert("Puede pasar"); }

if (edad2 >= 18) {
  alert("Puede pasar");
} else {
  alert("No puede pasar");
}