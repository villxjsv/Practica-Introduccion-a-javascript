//Objetos - Destructuring

const personaje = {
    nombrePersonaje: "Homero Simpson",
    edad: 50,
    ocupacion: "Trabajador de PEMEX",
    trabaja: true 
};

//Forma anterior
const edadPersonaje = personaje["edad"];
const nombre = personaje["nombrePersonaje"];

console.log(edadPersonaje);
console.log(nombre);


//Destructuring
const {edad,ocupacion,trabaja,nombrePersonaje} = personaje;

console.log("===================");

console.log(edad);
console.log(ocupacion);
console.log(trabaja);
console.log(nombrePersonaje);