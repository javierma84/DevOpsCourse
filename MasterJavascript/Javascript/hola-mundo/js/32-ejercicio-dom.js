'use strict'

window.addEventListener("load", function () {
    console.log("Dom cargado");

    var formulario = this.document.querySelector("#formulario");
    var box_dashed = this.document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener("submit", function () {
        console.log("Evento submit capturado");

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;

        box_dashed.style.display = "block";

        var datos_usuario = [nombre,apellidos,edad];

        console.log("Nombre: " + nombre);
        console.log("Apellidos: " + apellidos);
        console.log("Edad: " + edad);

        for (const indice in datos_usuario) {
            if (Object.hasOwnProperty.call(datos_usuario, indice)) {
                const element = datos_usuario[indice];
                var parrafo = document.createElement("p");
                parrafo.append(element);
                box_dashed.append(parrafo);
            }
        }

        /* var parrafo = document.createElement("p");
        parrafo.append(nombre);
        parrafo.append(apellidos);
        parrafo.append(edad); 
        box_dashed.append(parrafo);
        */

        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;

    });
});