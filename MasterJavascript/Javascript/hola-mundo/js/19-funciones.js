'use strict'

function calculadora(){
    return 'Hola, soy la calculadora';
}

function calculadora2(){
    console.log("Hola, soy la calculadora2");
}

function calculadora3(numero1, numero2){
    return numero1 + numero2;
}

function calculadora4(numero1, numero2, mostrar = false){
    if (mostrar){
        console.log(numero1 + numero2);
    }
    return numero1 + numero2;
}

console.log(calculadora());
calculadora2();
console.log(calculadora3(4,5));

console.log(calculadora4(4,5));
console.log(calculadora4(4,5, true));
console.log(calculadora4(4,5, false));
