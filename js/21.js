// Estructuras de control condicionales

const puntuaje = 1000;

// === Es mas estricto : evalua el contenido y tipo de dato
if (puntuaje !== 1000) {
    console.log('El puntuaje es diferente a 1000');
} else {
    console.log('No es igual a 1000')
}


console.log('============');

const efectivo = 1000;
const carrito = 800;

if (efectivo >= carrito) {
    console.log('El usuario puede adquirirlo');
} else {
    console.log('Fondos insuficientes');
    
}

console.log('==============')


const rol ='EDITOR'

if(rol === 'ADMIN') {
    console.log('Acceso a todo el sistema');
}   else if (rol === 'EDITOR') {
    console.log('Eres editor, puedes entrar pero no puedes hacer mucho');
}   else {
    console.log('No tienes acceso')
}