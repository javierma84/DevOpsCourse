'use strict'

//Evento load
window.addEventListener("load", function(){

    //Eventos de ratón
    function cambiarColor(){
        var bg = boton.style.background;
        if (bg == "green"){
            boton.style.background = "red";        
        }else{
            boton.style.background = "green";
        }
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";
        return true; 
    }

    var boton = document.querySelector("#boton");

    var botonBueno = document.querySelector("#botonBueno");

    // Click
    botonBueno.addEventListener("click",function(){
        cambiarColor();
    });

    //Mouse over
    botonBueno.addEventListener("mouseover", function(){
        botonBueno.style.background = "#ccc";
    });

    //Mouse out
    botonBueno.addEventListener("mouseout", function(){
        botonBueno.style.background = "yellow";
    });

    //Focus
    var input = document.querySelector("#campo_nombre");
    input.addEventListener("focus", function(){
        console.log("[focus] Estas dentro del input");
    });

    //Blur
    input.addEventListener("blur", function(){
        console.log("[blur] Estas fuera del input");
    });

    //Keydown
    input.addEventListener("keydown", function(){
        console.log("[keydown] Pulsando esta tecla ", String.fromCharCode(event.keyCode));
    });

    //Keypress
    input.addEventListener("keypress", function(){
        console.log("[Keypress] Tecla presionada ", String.fromCharCode(event.keyCode));
    });

    //Keyup
    input.addEventListener("keyup", function(){
        console.log("[Keyup] Tecla levantada ", String.fromCharCode(event.keyCode));
    });

});