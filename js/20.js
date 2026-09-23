//Funciones de flecha

const personajesDBZ = ['Goku', 'Bulma', 'Vegeta', 'Krilin', 'Piccoro'];

//forEach
personajesDBZ.forEach( personaje => {
    if(personaje == 'Goku') {
        console.log('si existe');
    }
});

const pokedex = [
    {nombre: 'Pikachu', salud: 500},
    {nombre: 'Meowth', salud: 100},
    {nombre: 'Charmander', salud: 500},
    {nombre: 'Snorlax', salud: 300},
    {nombre: 'Cubone', salud: 700},
    {nombre: 'Charizar', salud: 800},
    {nombre: 'Squirtle', salud: 900},
    {nombre: 'Gengar', salud: 600}
];

//includes 
let resultado = personajesDBZ.includes('goku');

//some ideal para arreglo de objetos
resultado = pokedex.some( pokemon => pokemon.nombre === 'Gengar');

//reduce
resultado = pokedex.reduce( (total, pokemon) => total + pokemon.salud, 0);

//filter
resultado = pokedex.filter( pokemon => pokemon.nombre === 'Snorlax');

resultado = pokedex.filter( pokemon => pokemon.salud <= 500);

console.log(resultado);