const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
const carrito = [
    { nombre: 'Monitor 20/"', precio: 500 },
    { nombre: 'Monitor 50/"', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos"', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];

// forEach

meses.forEach(function(mes) {

    if (mes == 'Marzo') {
        console.log(mes);
        console.log('Marzo si existe');
    }
});

//Includes

const resultado = meses.includes('Marzo');
console.log(resultado);



//Some arreglo de objetos
const resultado2 = carrito.some(function(producto) {
    return producto.nombre == 'Celular';
})

console.log(resultado2)

//Reduce

resultado3 = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0);
console.log(resultado3);

//filter

resultado4 = carrito.filter(function(producto) {
    return producto.precio > 400
});
console.log(resultado4);