//Pruebas con let y var

//Prueba con var
var numero = 40;
console.log(numero);    //40

if (true){
    var numero = 50;
    console.log(numero);    //50
}
console.log(numero);    //50

//Prueba con let
var texto = "Texto var";
console.log(texto);

if (true){
    let texto = "Texto Let";
    console.log(texto);
}
console.log(texto);