'use strict'

// En éste caso el selector es "document" ready es un método que en este caso es un evento
$(document).ready(function () {
    console.log("jQuery listo");

    //Selector de ID
    var rojo = $("#rojo");
    console.log(rojo);

    rojo.css("background", "red")
        .css("color", "white");

    var amarillo = $("#amarillo").css("background", "yellow")
        .css("color", "green");

    $("#verde").css("background", "green")
        .css("color", "white");

    //Selector de clases
    var miClase = $(".zebra");
    console.log(miClase);
    console.log(miClase[0]);
    console.log(miClase.eq(1)); //Lo mismo que miClase[1]

    miClase.css("border", "5px dashed black");

    $(".sinBorde").click(function () {
        console.log("click");
        $(this).addClass("zebra");
    });

    //No aparece el borde en las clase sinBorde, porque antes lo hemos añadido a los elementos
    //que habíamos seleccionado del DOM, pero no a la clase en sí misma. Es decir, hemos seleccionado
    //filtrando por clase y a esa selección le hemos cambiado el borde, no a la clase zebra
    //Abajo le añadimos una clase que sí que contiene el borde y vemos que ahora sí funciona

    $(".sinBorde").click(function () {
        console.log("click");
        $(this).addClass("zebra2");
    });

    //Selector de etiquetas
    var parrafos = $("p").css("cursor","pointer");

    parrafos.click(function () {
        var this1 = $(this);
        console.log("Quito clase zebra2");
        if (!this1.hasClass("grande")) {
            this1.addClass("grande");
        } else {
            this1.removeClass("grande");
        }
    });

    //Selectores de atributo
    $("[title = 'Google']").css("background", "#ccc");
    $("[title = 'Facebook']").css("background", "blue");

    //Otros
    //$('p, a').addClass('margen-superior');  //Seleccionar más de un elemento en una sola llamada
    var busqueda;
    busqueda = $("#caja").find('.resaltado');
    busqueda = $("#caja .resaltado");   //Idem al anterior
    console.log(busqueda);

    //busqueda = $("#caja .resaltado").find('[title = "Google"'); //Esto no encuentra nada
    console.log(busqueda);

    busqueda = $("#caja .resaltado").eq(0).parent().parent().parent().find('[title = "Google"]');
    console.log(busqueda);

});