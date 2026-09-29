// Loops - For Loop

//for (let vc = 1; vc < 10; vc++) {
//    if (vc % 2 === 0) {
//        console.log(`El número ${vc} es par`);
//    } else {
//        console.log(`El numero ${vc} es impar`);
//    }
//}

const carrito = [
    {nombre: `Monitor Pulgadas`, precio: 500},
    {nombre: `Tablet`, precio: 300},
    {nombre: `Audifonos`, precio: 500}
];

// 1. For Loop
for (let vc = 0; vc < carrito.length; vc++) {
    console.log(carrito[vc].nombre);
}


// 2. While Loop
let vc = 0; // Índice

while (vc < 10) {
    console.log(vc);
    vc++;
}


// 3. Do While Loop 
vc = 0;

do {
    console.log(carrito[vc].nombre);
    vc++;
} while (vc < carrito.length);