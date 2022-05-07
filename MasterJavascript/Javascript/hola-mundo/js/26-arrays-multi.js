'use strict'

var categorias = ["Acción", "Terror", "Comedia"];
var peliculas = ["La verdad duele","La vida es bella","Gran Torino", "Blade Runner"];
var cine = [categorias,peliculas];

console.log(cine);
console.log(cine[0][1]);

peliculas.push("Batman");
console.log(peliculas);

peliculas.pop();
console.log(peliculas);

peliculas[0] = undefined;
console.log(peliculas);

var indice = peliculas.indexOf("Gran Torino");
if (indice != -1){
    peliculas.splice(indice, 1);    //indice inicial, numero de elementos a eliminar
}
console.log(peliculas);

var peliculasString = peliculas.join();
console.log(peliculasString);

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(', ');
console.log(cadena_array);

peliculas = ["La verdad duele","La vida es bella","Gran Torino", "Blade Runner"];
console.log(peliculas);
peliculas.sort();
console.log(peliculas);
peliculas.reverse();
console.log(peliculas);

for(let lenguaje in lenguajes){
    document.write("<li>" + index + " " + elemento + "</li>");
}