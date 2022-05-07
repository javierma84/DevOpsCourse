'use strict'

$(document).ready(function () {

    reloadLinks();

    $('#add_button')
    .removeAttr('disabled')
    .click(function (e) {
        var lnkText = $('#add_link').val();
        //$('#menu').html('<li><a href="' + lnkText + '"></a></li>'); //Sobreescribe el html actual
        $('#menu').append('<li><a href="' + lnkText + '"></a></li>'); //Añade al final
        $('#menu').prepend('<li><a href="' + lnkText + '"></a></li>'); //Añade al inicio
        $('#menu').before('<li><a href="' + lnkText + '"></a></li>'); //Añade antes del elemento seleccionado
        $('#menu').after('<li><a href="' + lnkText + '"></a></li>'); //Añade después del elemento seleccionado
        $('#add_link').val(''); //Vaciar campo de texto después del click
        reloadLinks();
    });
    
});

function reloadLinks(){
    $('a').each(function (index) {
        var element = $(this);
        var enlace = element.attr("href");
        element.attr('target','_blank');    //Añade el atributo target con valor _blank
        //element.removeAttr('disable');
        element.text(enlace);
    });
}