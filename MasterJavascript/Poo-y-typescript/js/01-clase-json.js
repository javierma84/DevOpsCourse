'use strict'

// Ejemplo de hacer una clase cuando no se puede hacer con Typescript
var bicicleta = {
    color: "Rojo",
    modelo: "BMX",
    frenos: "De disco",
    velocidadMaxima: "60km/h",
    cambiaColor: function(nuevo_color){
        this.color = nuevo_color;
        console.log(this);
    }
};

bicicleta.cambiaColor("Azul");