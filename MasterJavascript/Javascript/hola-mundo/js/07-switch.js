'use strict'

var edad = 18;
var imprime ="";

switch(edad){   
    case 18:
        imprime = "Acabas de cumplir mayoría de edad";
        break;
    case 25:
        imprime = "Eres adulto"
        break;
    case 75:
        imprime = "Viejo"
        break;
    default:
        imprime = "No se"
        break;
}

console.log(imprime);