// Objetos

const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

//Agregar propiedades
producto.imagen = 'imagen.jpg';

// console.log(producto)
// console.log(producto.disponible);
// console.log(producto['nombreProducto']);

//Eliminar propiedades

delete producto.disponible;


console.log(producto)