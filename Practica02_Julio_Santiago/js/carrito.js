// Parte 13: Agregar productos al carrito desde productos.html o producto.html
const botonesAgregar = document.querySelectorAll('.agregar-carrito');

botonesAgregar.forEach(function (boton) {
    boton.addEventListener('click', function () {
        const producto = {
            nombre: boton.dataset.producto,
            precio: Number(boton.dataset.precio)
        };

        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));

        alert('Producto agregado al carrito');
    });
});

// Parte 14: Mostrar productos y calcular total en carrito.html
const listaCarrito = document.getElementById('listaCarrito');

if (listaCarrito) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    listaCarrito.innerHTML = '';

    let total = 0;
    carrito.forEach(function (producto) {
        const elemento = document.createElement('article');
        elemento.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
        `;
        listaCarrito.appendChild(elemento);
        total += producto.precio;
    });

    const totalElemento = document.getElementById('totalCarrito');
    if (totalElemento) {
        totalElemento.textContent = `$${total}`;
    }
}