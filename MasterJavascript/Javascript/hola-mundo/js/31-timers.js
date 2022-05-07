'use strict'

window.addEventListener("load", function(){

    //Timers

    function intervalo(){
        var tiempo = setInterval(function(){       // => ejecución contínua
            //var tiempo = setTimeout(function(){      // => ejecución una única vez
                console.log("Set interval ejecutado");
        
                var encabezado = document.querySelector("h1");
                //document.querySelector("h1").style.fontSize = "50px";
                if (encabezado.style.fontSize == "50px"){
                    encabezado.style.fontSize = "30px";
                }else{
                    encabezado.style.fontSize = "50px";
                }
                
            }, 500);

        return tiempo;
    }    

    var tiempo = intervalo();

    var start = this.document.querySelector("#start");

    start.addEventListener("click", function (){
       intervalo();
       alert("Has parado el intervalo en bucle");
    });

    var stop = this.document.querySelector("#stop");
    stop.addEventListener("click", function (){
       clearInterval(tiempo);
       alert("Has iniciado el intervalo en bucle");
    });

});