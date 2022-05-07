'use strict'

window.addEventListener("load", function () {

    var fecha = new Date();
    var year = fecha.getFullYear();
    var month = fecha.getMonth();
    var day = fecha.getDay();

    var textoHora = `
        El año es: ${year}
        El mes es el: ${month}
        El día es: ${day}
    
    `
    console.log(textoHora);

    var rndNum = Math.random() //Numero random entre 0 y 1
    rndNum = rndNum * 1000;
    console.log(rndNum); 
    console.log(Math.ceil(rndNum)); //Quita decimales

});

