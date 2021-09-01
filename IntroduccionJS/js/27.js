//POO
/*Object literal*/
const producto = {
    nombre: 'Tablet',
    precio: 500
}

//Object Constructor

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;

}


const producto3 = new Producto('Monitor 2', 500);
const producto2 = new Producto('Monitor', 400);
const producto4 = new Producto('Monitor', 1000);

function formatearProducto(producto2) {
    return `El producto ${producto2.nombre}, tiene un precio de ${producto2.precio}`
}

console.log(formatearProducto(producto4));

// Prototype
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre}, tiene un precio de ${this.precio}`
}

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());