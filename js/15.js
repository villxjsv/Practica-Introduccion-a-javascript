//Array Methods

const personajesDBZ = ['Goku', 'Bulma', 'Vegeta', 'Krilin', 'Piccoro'];

//forEach
personajesDBZ.forEach(function(personaje) {
    if(personaje == 'Goku') {
        console.log('Si existe');
    }
});

const pokedex = [
    { nombre: 'Pikachu', salud: 500},
    { nombre: 'Meowht', salud: 100},
    { nombre: 'Charmander', salud: 500},
    { nombre: 'Snorlax', salud: 300},
    { nombre: 'Cubone', salud: 700},
    { nombre: 'Charizard', salud: 800},
    { nombre: 'Squirtle', salud: 900},
    { nombre: 'Gengar', salud: 600}
];

let resultado = personajesDBZ.includes('Goku');

//some idea para arreglos de objectos
resultado = pokedex.some( function (pokemon) {
    return pokemon.nombre ==='Cubone';
});

console.log(resultado);


//reduce
resultado = pokedex.reduce( function (total, pokemon) {
    return total + pokemon.salud;
}, 0);

console.log(resultado);

//filter
resultado = pokedex.filter( function(pokemon) {
    return pokemon.nombre === 'Snorlax';
});

console.log(resultado);

resultado = pokedex.filter( function(pokemon) {
    return pokemon.salud <=500 ;
});

console.log(resultado);


