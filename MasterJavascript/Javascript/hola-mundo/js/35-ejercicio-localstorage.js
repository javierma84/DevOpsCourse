'use strict'

window.addEventListener("load", function () {
    var formulario = document.querySelector("#formpeliculas");

    formulario.addEventListener("submit", function () {
        console.log("Entra");
        var titulo = document.querySelector("#addpelicula").value;
        if (titulo.length > 0) {
            localStorage.setItem(titulo, titulo);
        }

    });

    var ul = document.querySelector("#peliculas-list");
    for (const key in localStorage) {
        if (Object.hasOwnProperty.call(localStorage, key)) {
            const element = localStorage[key];
            console.log(element);
            if (typeof element == "string") {
                var li = document.createElement("li");
                li.append(element);
                ul.append(li);
            }

        }
    }

    var formularioB = document.querySelector("#formBorrarPeliculas");

    formularioB.addEventListener("submit", function () {
        console.log("Entra");
        var titulo = document.querySelector("#borrarPelicula").value;
        if (titulo.length > 0) {
            localStorage.removeItem(titulo, titulo);
        }

    });

});