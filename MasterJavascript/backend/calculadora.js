'use strict'

// Slice es para que empiece por el parámetro 2, el 1 sería la dura del archivo
var params = process.argv.slice(2);

var numero1 = parseFloat(params[0]);
var numero2 = parseFloat(params[1]);

var plantilla = `
    La suma es: ${numero1 + numero2}
    La resta es: ${numero1 - numero2}
    La multiplicación es: ${numero1 * numero2}
    La división es: ${numero1 / numero2}
`;

console.log(plantilla);
console.log("Hola mundo con NodeJS");