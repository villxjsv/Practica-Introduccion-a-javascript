//Funciones que retornan

function calculartriple(num) {
    return num * 3;

}

const resultado = triple(8);
console.log(resultado);


let total = 0;

function agregarAlcarrito(precio) {
        return total += precio;

}

total = agregarAlcarrito(200);
total = agregarAlcarrito(400);
total = agregarAlcarrito(600);

console.log(total);

function calculaTotalConIva(total) {
    return `El total a pagar con IVA es de ${total * 1.16}`;
}

const totalPagar = calculaTotalConIva(total);
console.log(totalPagar);
''

//con template String
//El total a pagar con IVA es de 