'use strict'

// Funciones anonimas
// Funcion sin nombre

var pelicula = function(nombre){
    return "La película es:" + nombre;
}

// Callback

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame(4,5, 
    function(dato){
        console.log("La suma es: " + dato);
    },
    function(dato){
        console.log("La suma por dos es: " + (dato*2));
    });

//Nuevo estándar

sumame(4,5, 
    dato =>{
        console.log("La suma es: " + dato);
    },
    dato =>{
        console.log("La suma por dos es: " + (dato*2));
    });