// function sumar(numero1 = 0, numero2 = 0) {
//     return numero1 + numero2
// }


// console.log(sumar(10, 10));

// const sumar2 = function(n1, n2) {
//     console.log(n1 + n2);
// }

// sumar2(5, 10);
let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.15 * total
}

total = agregarCarrito(200);
total = agregarCarrito(100);
total = agregarCarrito(400);
total = agregarCarrito(600);

const totalAPagar = calcularImpuesto(total);
console.log(total);
console.log(totalAPagar);