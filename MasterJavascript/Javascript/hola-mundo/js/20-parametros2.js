'use strict'

//Parametros REST y SPREAD

function listadoFrutas(fruta1, fruta2, ...restoFrutas){
    console.log("Fruta1: ", fruta1);
    console.log("Fruta2: ", fruta2);
    console.log(restoFrutas);
}

listadoFrutas("Naranja", "Manzana");    //OK
listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");

var frutas = ["Naranja", "Manzana"];
listadoFrutas(frutas,"Sandia", "Pera", "Melon", "Coco"); //Consider frutas el parametro 1
listadoFrutas(...frutas,"Sandia", "Pera", "Melon", "Coco"); //Consider frutas el parametro 1 y 2