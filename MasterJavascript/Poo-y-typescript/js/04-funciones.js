//Se puede especificar tipos de los parámetros de entrada y del retorno
function getNumero(numero) {
    if (numero === void 0) { numero = 12; }
    return "El numero es: " + numero;
}
console.log(getNumero(55));
