//Objects Methods

const  animal = {
    nombre: "Caramelo" ,
    especie: "Canino" ,
    color: "Cafe" ,
    peso: 15.5
};


//Object.seal(animal);
Object.freeze(animal);

//Creando una propiedad del objecto
animal.edad = 8;

console.log(Object.isFrozen(animal));

console.log(animal);