//Corre JS en modo estricto
"use strict";

const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

Object.seal(producto); //Puede modificar los valores existentes

Object.freeze(producto);
// producto.imagen = 'imagen.jpg'

console.log(Object.isFrozen(producto));