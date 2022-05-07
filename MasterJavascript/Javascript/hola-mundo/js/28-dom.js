'use strict'

//DOM - Document Object Model

function cambiaColor(color){
    caja.style.background = color;
}

//Conseguir elementos con un ID concreto

//var caja = document.getElementById("micaja");
//var caja = document.querySelector("micaja"); => Elemento cuya etiqueta sea micaja
//var caja = document.querySelector(".micaja"); => Elemento cuya clase sea micaja
var caja = document.querySelector("#micaja");   // => Elemento cuyo id sea micaja
console.log(caja);
caja = document.getElementById("micaja").innerHTML;
console.log(caja);
caja = document.getElementById("micaja");
caja.innerHTML = "Texto nuevo";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";

//Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs);

var contenidoEnTexto = todosLosDivs[2].textContent;
console.log(contenidoEnTexto);

var contenidoEnTexto = todosLosDivs[2];
contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";
console.log(contenidoEnTexto);

for(var valor in todosLosDivs){
    //Comprobar que el div es texto
    if (typeof(todosLosDivs[valor].textContent) == 'string' ){   
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        document.querySelector("#miseccion").append(parrafo);
    }
}

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");
seccion.append(hr);

for(var valor in todosLosDivs){
    //Comprobar que el div es texto
    if (typeof(todosLosDivs[valor].textContent) == 'string' ){   
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        document.querySelector("#miseccion").prepend(parrafo);
    }
}

//Conseguir elementos por su clase css
var divRojos = document.getElementsByClassName('rojo');
var divAmarillos = document.getElementsByClassName('amarillo');

for (var div in divRojos){
    if (divRojos[div].className == "rojo"){
        divRojos[div].style.background = "red";
    }
}

divAmarillos[0].style.background = "yellow";

console.log(divRojos);
console.log(divAmarillos);

//Query selector
var id = document.querySelector("#encabezado");
console.log(id);

//saca sólo un elemento, para más de un elemento usar getElementByClassName o querySelectorAll
var claseRojo = document.querySelector(".rojo");    
console.log(claseRojo);