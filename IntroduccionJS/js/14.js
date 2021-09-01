// Arrays

const numeros = [10, 20, 30, 40, 50]




//Acceder a los valores del arrego

// console.log(numeros[4]);

// numeros.forEach(function(numero) {
//     console.log(numero);
// })


numeros.push(60);
numeros.push(70, 30000000); // Agrega al final del arreglo

numeros.unshift(-10, -20, -30); //Agrega al inicio del arreglo


// numeros.pop(); //Elimina el ultimo
// numeros.shift(); //Elimina el primer elemento

numeros.splice(2, 1);


console.log(numeros);
console.table(numeros);

//Rest Operator o Spread Operator

const nuevoArreglo = [...numeros, 3];
const nuevoArreglo2 = [5, ...numeros];
console.log(nuevoArreglo)
console.log(nuevoArreglo2)