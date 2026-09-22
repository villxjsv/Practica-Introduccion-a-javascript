//Declaracion de funciones
//INVESTIGAR EL CONCEPTO DE HOSTING


function sumar() {
    console.log(10 + 30);
};

sumar();


//expresion de la funcion 

const sumar2 = function() {
    console.log(5 + 5);
};

sumar2();

//IIFE
//Sirven para proteger las variables 
//que no se mezclen que otro archivos
(function() {
    console.log('Esto es una funcion');
})();