'use strict'

$(document).ready(function () {

    //MouseOver y mouseOut

    //Lo mismo que hacerlo desde html con css
    var caja = $("#caja");

    /*     caja.mouseover(function(){
            $(this).css("background","red");
        });
    
        caja.mouseout(function(){
            $(this).css("background", "green");
        }); */

    //Hover

    //Lo mismo que lo anterior pero con menos código
    function cambiaRojo() {
        $(this).css("background", "red");
    }

    function cambiaVerde() {
        $(this).css("background", "green");
    }

    caja.hover(cambiaRojo, cambiaVerde);

    //Click, Doble click
    caja.click(function () {
        $(this).css("background", "blue")
            .css("color", "white");
    });

    caja.dblclick(function () {
        $(this).css("background", "pink")
            .css("color", "yellow");
    });

    //Eventos focus y blur
    var nombre = $("#nombre");
    nombre.focus(function () {
        $(this).css("border", "2px solid green");
    });

    nombre.blur(function () {
        $(this).css("border", "1px solid #ccc");

        $("#datos")
            .text($(this).val())
            .show();
    });

    //MouseDown MouseUp
    var datos = $("#datos");
    datos.mousedown(function () {
        $(this).css("border-color", "gray");
    });

    datos.mouseup(function () {
        $(this).css("border-color", "blue");
    });

    //Mousemove
    $(document).mousemove(function (event) {
        console.log(event.clientX + " " + event.clientY);
        $("body").css("cursor","none");
        $("#sigueme")
            .css("left", event.clientX)
            .css("top", event.clientY);
    })

});