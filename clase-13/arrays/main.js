const nombres = ["Nico", "Flor", "Nico", "Félix", "Juli"];

// Nombre array, entre llaves la posición

console.log(nombres[0]); // Nico
console.log(nombres[1]); // Flor
console.log(nombres[2]); // Nico
console.log(nombres[3]); // Félix
console.log(nombres[4]); // undefined

// Va a devolver la cantidad de elementos de un array
console.log(nombres.length); // 4
console.log(nombres); // 4


// indexOf devuelve en qué posición está lo que sea que estemos buscando.
console.log(nombres.indexOf("Juli")); //4 

// Si se repiten, va a devolver solo el primero.
console.log(nombres.indexOf("Nico")); //0

// Cuando NO encuentra el valor, devuelve -1
console.log(nombres.indexOf("Esteban")); // -1


// DRY Don't Repeat Yourself

for (let i = 0; i < nombres.length; i++) {
  console.log("Hola " + nombres[i]);
}
