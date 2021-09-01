const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}


// Forma anterior

// const precioProducto = producto.precio;

// console.log(precioProducto);

//Destructuring
const { precio, nombreProducto } = producto;

console.log(precio, nombreProducto)