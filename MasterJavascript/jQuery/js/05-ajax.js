$(document).ready(function () {
    //Load
    //$('#datos').load("https://reqres.in/");

    //Get
    $.get("https://reqres.in/api/users", { page: 2 },
        function (response) {
            response.data.forEach((element, index) => {
                $('#datos').append('<p>' + element.first_name + ' ' + element.last_name + '</p>');
            });
        }
    );

    //Post desde js
    var usuario = {
        name: 'Javier',
        surname: 'Martínez'
    }
    $.post("https://reqres.in/api/users", usuario,
        function (response) {
            console.log(response);
        }
    );

    //También hay la forma de hacerlo desde HTML
    $('#formulario').submit(function (e) {
        e.preventDefault();
        var usuario = {
            name: $('input[name="name"').val(),
            surname: $('input[name="surname"').val()
        }
        console.log(usuario);
        /* $.post($(this).attr("action"), usuario,
            function (response) {
                console.log(response);
            }
        ).done(function () {
            alert("Usuario añadido correctamente");
        }); */

        //Mejor usar directamente una petición Ajax
        $.ajax({
            type: "post",
            url: $(this).attr("action"),
            data: usuario,
            dataType: "json",
            beforeSend: function () {
                console.log("Enviando usuario...");
            },
            success: function (response) {
                console.log(response);
            },
            error: function () {
                console.log("Ha ocurrido un error");
            },
            timeout: 2000
        });
    });

});