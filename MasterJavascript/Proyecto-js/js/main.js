'use strict'

$(document).ready(function () {

    //Slider
    if (window.location.href.indexOf("index") > -1) {
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            pager: true
        });
    }

    //Posts
    if (window.location.href.indexOf("index") > -1) {
        var posts = [
            {
                title: "Prueba de titulo 1",
                date: moment().format("MMMM Do YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget tristique elit, vel fringilla nisl. Etiam porttitor sapien egestas consequat fringilla. Fusce quis molestie augue. Mauris a dolor id nibh efficitur vehicula. Integer velit purus, euismod et porttitor et, laoreet a nisl. Praesent enim nulla, feugiat eu volutpat vehicula, consequat a mauris. Duis laoreet, lacus id gravida volutpat, purus tortor posuere lorem, eget condimentum diam leo at justo. Ut neque velit, vehicula eget molestie in, ultrices eu orci. Donec molestie venenatis tellus, quis ornare mi pellentesque ac. Integer ultrices ante sed convallis scelerisque. Etiam fermentum nunc eu cursus tincidunt. Aliquam erat volutpat. Fusce auctor risus diam, vitae dignissim felis tristique a."
            },
            {
                title: "Prueba de titulo 2",
                date: new Date(),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget tristique elit, vel fringilla nisl. Etiam porttitor sapien egestas consequat fringilla. Fusce quis molestie augue. Mauris a dolor id nibh efficitur vehicula. Integer velit purus, euismod et porttitor et, laoreet a nisl. Praesent enim nulla, feugiat eu volutpat vehicula, consequat a mauris. Duis laoreet, lacus id gravida volutpat, purus tortor posuere lorem, eget condimentum diam leo at justo. Ut neque velit, vehicula eget molestie in, ultrices eu orci. Donec molestie venenatis tellus, quis ornare mi pellentesque ac. Integer ultrices ante sed convallis scelerisque. Etiam fermentum nunc eu cursus tincidunt. Aliquam erat volutpat. Fusce auctor risus diam, vitae dignissim felis tristique a."
            },
            {
                title: "Prueba de titulo 3",
                date: moment().format("MMMM dddd YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget tristique elit, vel fringilla nisl. Etiam porttitor sapien egestas consequat fringilla. Fusce quis molestie augue. Mauris a dolor id nibh efficitur vehicula. Integer velit purus, euismod et porttitor et, laoreet a nisl. Praesent enim nulla, feugiat eu volutpat vehicula, consequat a mauris. Duis laoreet, lacus id gravida volutpat, purus tortor posuere lorem, eget condimentum diam leo at justo. Ut neque velit, vehicula eget molestie in, ultrices eu orci. Donec molestie venenatis tellus, quis ornare mi pellentesque ac. Integer ultrices ante sed convallis scelerisque. Etiam fermentum nunc eu cursus tincidunt. Aliquam erat volutpat. Fusce auctor risus diam, vitae dignissim felis tristique a."
            },
            {
                title: "Prueba de titulo 4",
                date: moment().format("DD MMMM YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget tristique elit, vel fringilla nisl. Etiam porttitor sapien egestas consequat fringilla. Fusce quis molestie augue. Mauris a dolor id nibh efficitur vehicula. Integer velit purus, euismod et porttitor et, laoreet a nisl. Praesent enim nulla, feugiat eu volutpat vehicula, consequat a mauris. Duis laoreet, lacus id gravida volutpat, purus tortor posuere lorem, eget condimentum diam leo at justo. Ut neque velit, vehicula eget molestie in, ultrices eu orci. Donec molestie venenatis tellus, quis ornare mi pellentesque ac. Integer ultrices ante sed convallis scelerisque. Etiam fermentum nunc eu cursus tincidunt. Aliquam erat volutpat. Fusce auctor risus diam, vitae dignissim felis tristique a."
            },
            {
                title: "Prueba de titulo 5",
                date: new Date(),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget tristique elit, vel fringilla nisl. Etiam porttitor sapien egestas consequat fringilla. Fusce quis molestie augue. Mauris a dolor id nibh efficitur vehicula. Integer velit purus, euismod et porttitor et, laoreet a nisl. Praesent enim nulla, feugiat eu volutpat vehicula, consequat a mauris. Duis laoreet, lacus id gravida volutpat, purus tortor posuere lorem, eget condimentum diam leo at justo. Ut neque velit, vehicula eget molestie in, ultrices eu orci. Donec molestie venenatis tellus, quis ornare mi pellentesque ac. Integer ultrices ante sed convallis scelerisque. Etiam fermentum nunc eu cursus tincidunt. Aliquam erat volutpat. Fusce auctor risus diam, vitae dignissim felis tristique a."
            },
            {
                title: "Prueba de titulo 6",
                date: new Date(),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget tristique elit, vel fringilla nisl. Etiam porttitor sapien egestas consequat fringilla. Fusce quis molestie augue. Mauris a dolor id nibh efficitur vehicula. Integer velit purus, euismod et porttitor et, laoreet a nisl. Praesent enim nulla, feugiat eu volutpat vehicula, consequat a mauris. Duis laoreet, lacus id gravida volutpat, purus tortor posuere lorem, eget condimentum diam leo at justo. Ut neque velit, vehicula eget molestie in, ultrices eu orci. Donec molestie venenatis tellus, quis ornare mi pellentesque ac. Integer ultrices ante sed convallis scelerisque. Etiam fermentum nunc eu cursus tincidunt. Aliquam erat volutpat. Fusce auctor risus diam, vitae dignissim felis tristique a."
            }
        ]

        posts.forEach(element => {
            var post = `
                <article class="post">
                    <h2>${element.title}</h2>
                    <span class="date">${element.date}</span>
                    <p>
                        ${element.content}
                    </p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
                `;
            $("#posts").append(post);
        });
    }

    //Selector de temas
    var theme = $("#theme");
    $("#to-green").click(function (e) {
        e.preventDefault();
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function (e) {
        e.preventDefault();
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function (e) {
        e.preventDefault();
        theme.attr("href", "css/blue.css");
    });

    //Scroll arriba
    $(".subir").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //Login falso
    $("#login form").submit(function () {
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if (form_name != null && form_name != "undefined") {
        console.log(form_name);
        var about_parrafo = $("#about p");
        about_parrafo.html("<br><Strong>Bievenido, " + form_name + "</strong>");
        about_parrafo.append("<a href='#' id='logout' >Cerrar sesión</a>");
        $("#login").hide();

        $("#logout").click(function () {
            localStorage.clear();
            location.reload();
        });
    }

    //Acordeon
    if (window.location.href.indexOf("about") > -1) {
        $("#acordeon").accordion();
    }

    //Reloj
    if (window.location.href.indexOf("reloj") > -1) {
        setInterval(() => {
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        }, 1000);
    }

    //Validación
    if(window.location.href.indexOf("contact") > -1){
        $("form input[name='born-date']").datepicker({
            dateFormat: 'dd-mm-y'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }

});