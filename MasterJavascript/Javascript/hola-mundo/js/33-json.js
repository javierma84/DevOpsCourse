'use strict'

window.addEventListener("load", function(){
    var pelicula = {
        titulo: "Batman vs Superman",
        year: 2017,
        pais: "EEUU"
    }
    
    pelicula.titulo = "Superman Begins"
    console.log(pelicula);
    
    var peliculas = [
        {titulo: "La verdad duele", year: 2016, pais: "Francia"},
        pelicula
    ];
    
    var caja_peliculas = document.querySelector("#peliculas");
    
    for (const index in peliculas) {
        if (Object.hasOwnProperty.call(peliculas, index)) {
            const element = peliculas[index];
            var p = document.createElement("p");
            p.append(peliculas[index].titulo + " - " + peliculas[index].year);
            caja_peliculas.append(p);
        }
    }
});

