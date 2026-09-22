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

const meses = ['Enero', 'Febrero', 'Marzzo', 'Abril', 'Mayo','Junio'];

meses.splice(1, 2);// Elimna elementos en el rango especificado

console.table(meses);

const nuevoArreglo = ['Julio', ...meses];
console.table(nuevoArreglo);