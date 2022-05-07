'use strict'

var numero = 444;
var texto1 = " Soy el texto el 1 ";
var texto2 = "Soy el texto 2";

var dato = numero.toString();
    dato = texto1.toLowerCase();
    dato = texto1.toUpperCase();

console.log(dato);

var nombre = "Javier";
    nombre = ["Hola", "Javi"];

console.log(nombre.length);

var textoTotal = texto1 + " " + texto2;
    textoTotal = texto1.concat(" " + texto2);
console.log(textoTotal);

var busqueda = texto1.indexOf("el");
    busqueda = texto1.lastIndexOf("el");
    busqueda = texto1.indexOf("nose");
    busqueda = texto1.match("el");      //solo primera coincidencia
    busqueda = texto1.match(/el/g);    //expresión regular todas las ocurrencias
    busqueda = texto1.substring(14,5);
    busqueda = texto1.charAt(14);
    busqueda = texto1.startsWith("Soy");
    busqueda = texto1.endsWith(" 1");
    busqueda = texto1.includes("texto");
    busqueda = texto1.replace("texto","paella");
    busqueda = texto1.slice(14);    //equivalente a un right()
    busqueda = texto1.slice(10,14); //extrae string del 10 al 14
    busqueda = texto1.split();  //mete el string entero en un array, en la posición 0
    busqueda = texto1.split(" "); //array con una palabra en cada posición de un array
    busqueda = texto1.trim();   //Quita espacios en blanco por delante y por detras
console.log(busqueda);

//Nuevos estándares

