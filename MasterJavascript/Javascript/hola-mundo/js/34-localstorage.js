'use strict'

window.addEventListener("load", function () {
    // Localstorage

    // Comprobar si el localstorage está disponible

    if (typeof (Storage) !== "undefined") {
        console.log("Localstorage disponible");
    } else {
        console.log("Incompatible con localstorage");
    }

    // Guardar datos en localstorage
    localStorage.setItem("titulo", "Curso de JS");

    // Leer datos del localstorage
    console.log(localStorage.getItem("titulo"));
    document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

    // Guardar objeto JSON en localstorage
    var usuario = {
        nombre: "Javier Martínez",
        email: "javierma84@hotmail.com",
        web: "javierma.es"
    }

    //localStorage.setItem("usuario", usuario);   //No funciona, se guarda un [object Object]
    //Convertir el objeto a JSON string
    localStorage.setItem("usuario", JSON.stringify(usuario));

    //Recuperar objeto del localstorage
    var userJS = JSON.parse(localStorage.getItem("usuario"));
    console.log(userJS);
    document.querySelector("#datos").append(" " + userJS.nombre + " " + userJS.email);

    localStorage.removeItem("usuario");
    localStorage.clear();
    
});

