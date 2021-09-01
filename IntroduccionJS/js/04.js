//String o Cadena de Texto

const producto = 'Monitor de 20 puldas'; //Esta es la mas comun
const producto2 = String('Monitor de 30 pulgadas');
const producto3 = new String('Monitor de 30 pulgadas');

const producto4 = 'Monitor de 20 puldas/"';

console.log(producto);
console.log(producto2);
console.log(producto3);
console.log(typeof producto3);
console.log(producto.length);

//Indexof

console.log(producto.indexOf('20'))

//Includes
console.log(producto.includes('20'))