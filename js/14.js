//Arreglos o Arrays

const numeros = [10, 20, 3, 100 , 81];

console.table(numeros);

const tortugasNinja = new Array('Donatelo', 'Migueo Angel', 'Leonardo', 'Rafael');

console.table(tortugasNinja);

const dragonBall = new Array('Goku', 'Gohan', 'Vegueta', 'Bulma' , 'Piccolo', 'Freezer', 'Bills' ,'Whiss');

console.table(dragonBall);

const jujutsuKaisen = ['Gojo', 'Megumi', 'Nobara', 'Sukuna'];

console.table(jujutsuKaisen);

const narutoShipuden = new Array('Itachi', 'Sasuke', 'Minato', 'Obito', 'Madara' );
console.table(narutoShipuden);

const arrVariado = ['Mesa', 15, false , 'si' , null, {nombre: 'Juan', profesion: 'Programador'}];

console.table(arrVariado);


//Acceder alos valores de un arreglo 
console.log(arrVariado[5]);
console.log(arrVariado[200]);//Cuando tratamos de imprimir un indice que no existe "IMPRIME undefined"

//Conocer la extension del arreglo
console.log(numeros.length);
console.log(tortugasNinja.length);
console.log(arrVariado.length);

//Imprimir elementos con forEach
tortugasNinja.forEach( function(nombre){
    console.log(nombre);
});


const dragonBall2 = ['Cell'];

//Agrega elementos al final
dragonBall2.push('Majin Buu', 'Babidi');
console.table(dragonBall2);

//unshift: agrega elementos al inicio
dragonBall2.unshift('Kamisama', 'Androide 17', 'Andoride 18', 'Roshi');

//pop: elimina el ultimo elemento
dragonBall2.pop();

//shift:elimina el primer elemento
dragonBall2.shift();

console.table(dragonBall2);