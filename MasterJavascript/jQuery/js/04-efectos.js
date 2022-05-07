'use strict'

$(document).ready(function () {
    var caja = $('#caja');

    $('#mostrar').hide();

    $('#mostrar').click(function (e) {
        $(this).hide();
        $('#ocultar').show();
        //caja.show('normal');
        //caja.fadeIn('normal');
        //caja.fadeTo('slow',1);
        caja.slideDown('normal');
    });

    $('#ocultar').click(function (e) {
        $(this).hide();
        $('#mostrar').show();
        //caja.hide('fast');
        //caja.fadeOut('normal');
        //caja.fadeTo('slow',0.2);
        caja.slideUp('slow', function(){
            console.log("Ocultación finalizada");
        });
    });

    $('#todoEnUno').click(function (e) {
        //caja.toggle('fast');
        //caja.fadeToggle('fast');
        caja.slideToggle('fast');
    });

    $('#animar').click(function (e) {
        //caja.animate({marginLeft: '500px'}, 'slow');
        caja
            .animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '110px'
            }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '80px'
            },'slow')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px'
            },'slow')
            .animate({
                borderRadius: '100px',
                marginTop: '0px'
            },'slow')
            .animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '110px'
            }, 'slow');
    });

});