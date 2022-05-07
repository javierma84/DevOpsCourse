'use strict'

$(document).ready(function () {
    //Mover elemento por la página
    $('.elemento').draggable();

    //Redimensionar
    $('.elemento').resizable();

    //Seleccionable
    //$(".lista-seleccionable").selectable();

    //Ordenar
    $(".lista-seleccionable").sortable({
        update: function(event, ui){
            console.log("Ha cambiado el orden");
        }
    });

    //Drop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("Has soltado algo dentro del area");
        }
    });

    //Efectos
    $("#mostrar").click(function(){
        //$(".caja-efectos").toggle("fade");
        //$(".caja-efectos").fadeToggle();  //Lo mismo que el anterior
        //$(".caja-efectos").explodeToggle(); //No funciona pq no es nativo de jQuery
        //$(".caja-efectos").toggle("explode");   //Explota y "des-explota"
        //$(".caja-efectos").effect("explode");   //Sólo explota
        //$(".caja-efectos").toggle("blind"); //Cortinilla superior, como slide pero en X en lugar de en Y
        //$(".caja-efectos").toggle("drop");  //Fade + side slide
        //$(".caja-efectos").toggle("fold");  //Desplegar y plegar
        //$(".caja-efectos").toggle("puff");  //Zoom in/out + fade
        //$(".caja-efectos").toggle("scale");   //Zoom in/out
        $(".caja-efectos").toggle("shake", "slow"); //Shake slow
        $(".caja-efectos").toggle("shake", 2000);   //Shake que dura 2s
        $(".caja-efectos").toggle("shake", {}, "slow"); //Shake con JSON de propiedades
    });

    //Tooltip
    $(document).tooltip();  //Se muestra tooltip en todos los elementos que tienen atributo tittle

    //Dialop
    $("#lanzar-popup").click(function (e) { 
        e.preventDefault();
        $('#popup').dialog();
    });    

    //Datepicker
    $("#Calendario").datepicker();

    //Tabs
    $("#pestanas").tabs();

});