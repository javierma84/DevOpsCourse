//Se puede especificar tipos de los parámetros de entrada y del retorno
function getNumero(numero:number = 12):string{
    return "El numero es: " + numero;
}

console.log(getNumero(55));