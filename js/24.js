//* forEach y map

const carrito = [
    {nombre: `Monitor Pulgadas`, precio: 500},
    {nombre: `Tablet`, precio: 300},
    {nombre: `Audifonos`, precio: 500},
    {nombre: `Mouse`, precio: 100}
];


//*forEach permite solo iterar y mostrar informacion en pantalla
carrito.forEach(function(producto) {
    console.log(producto);
});



const listaProductos = carrito.forEach( producto => producto.nombre);

console.log(listaProductos); //undefined

//*map> permite iterar y guardar en un arreglo
const arreglo = carrito.map( producto => `${producto.nombre} - ${producto.precio}`);

console.log(arreglo);