const carrito = [
    { nombre: 'Monitor 20"', precio: 500 },
    { nombre: 'Monitor 50"', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];

//ForEach es bueno para imprimir en pantalla
carrito.forEach(producto => {
    console.log('Elemento', producto.nombre, producto.precio);
});

//map crea un arreglo
const arreglo1 = carrito.map(producto => producto.nombre)
console.log(arreglo1);