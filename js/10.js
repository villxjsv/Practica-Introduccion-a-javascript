//Objetos

const nombrePersonaje = "Homero Simpson";
const edad = 34;
const ocupacion = "Trabajador de Pemex";
const trabaja = false;

const personaje = {
    nombrePersonaje: "Homero Simpson", 
    edad: 50,
    ocupacion: "Trabajador de Pemex",
    trabaja: false


};

console.log(personaje);

//sintaxis de punto
console.log(personaje.nombrePersonaje);
console.log(personaje.edad);
console.log(personaje.ocupacion);
console.log(personaje.trabaja);

console.log("==========");

//sintaxis de corchete
console.log(personaje["nombrePersonaje"]);
console.log(personaje["edad"]);
console.log(personaje["ocupacion"]);
console.log(personaje["trabaja"]);


//creacion de propiedad del objeto
personaje.imagen = "homero-simpson.jpg";
console.log("==========");
console.log(personaje);

//eliminar propiedades
delete personaje.trabaja;

console.log("=========");
console.log(personaje);