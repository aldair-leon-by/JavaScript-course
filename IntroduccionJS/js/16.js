//Declaracion de la funcion

function sumar() {
    console.log(10 * 10);
}

sumar();

//Expresion de la funcion

const sumar2 = function() {
    console.log(10 + 10);
}

sumar2();

//IIFE con esto no se permite leer variables desde otro archivo

(function() {
    console.log('Esto es una funcion');
})();