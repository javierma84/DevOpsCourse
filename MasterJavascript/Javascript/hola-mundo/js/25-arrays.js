'use strict'

var nombre = "Javier MA";
var nombres = ["Javier", "Miguel", "Irene"];
var lenguajes = new Array("PHP", "JS", "Go", "Java");

console.log(nombres[2]);
console.log(nombres.length);

/*
var elemento = parseInt(prompt("Qué indice quieres?", 0));
if (elemento >= nombres.length){
    alert("Introduce un indice menor que " + nombres.length);
}else{
    alert("El nombre es: " + nombres[elemento]);
}
*/

document.write("<h1>Lenguajes de programación</h1>");
document.write("<ul>");
lenguajes.forEach(element => {
    document.write("<li>" + element + "</li>");
});
document.write("</ul>");

document.write("<h1>Lenguajes de programación</h1>");
document.write("<ul>");
lenguajes.forEach((elemento, index, array) => {
    document.write("<li>" + index + " " + elemento + "</li>");
});
document.write("</ul>");

document.write("<h1>Lenguajes de programación</h1>");
document.write("<ul>");
for(let lenguaje in lenguajes){
    document.write("<li>" + lenguajes[lenguaje] + "</li>");
}
document.write("</ul>");

var busqueda = lenguajes.find( lenguaje => lenguaje == "PHP");
console.log(busqueda);

var busqueda = lenguajes.findIndex( lenguaje => lenguaje == "JS");
console.log(busqueda);

var precios = [10,20,50,80,12];
busqueda = precios.some(precio => precio > 80);
console.log(busqueda);

precios = ["80", "12", "1", "20", "100"];
precios.sort(function(a,b){return a-b});    //En lugar de alfabéticamente, lo hace por valor
console.log(precios);