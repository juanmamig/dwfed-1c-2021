const persona = {
  nombre: "Pedro",
  apellido: "Sánchez",
  edad: 46,
  dni: 26555989
}

// console.log(persona.edad);
// console.log(persona["edad"]);

// persona.nombre = "Julián";

/*
Para recorrer objetos van a usar la propiedad for, que se compone por

1. let
2. cualquier nombre*
3. in
4. El nombre del objeto

(*) Ese cualquier nombre SIEMPRE va a simbolizar al nombre de cada propiedad.

*/
for (let propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]);
  console.log(persona.propiedad);
}
