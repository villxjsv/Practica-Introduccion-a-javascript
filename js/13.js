// Spread Operator

const producto = {
    nombreProducto: "Xbox",
    precio: 7000,
    disponible: false
};

const medidas = {
    pesoKg: 3.1,
    ancho: 30.5,
    alto: 35.5
};

const nuevo = { ...producto, ...medidas };


console.log(nuevo);