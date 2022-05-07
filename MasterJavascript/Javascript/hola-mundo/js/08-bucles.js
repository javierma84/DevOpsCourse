'use strict'

var numero = 100;

for (var i=0; i < numero; i++){
    console.log(i);
    //debugger;
}

var j = 0;
while (j < numero){
    console.log("while" + j);
    j++;
}

j = 0;
do{
    console.log("Do While" + j);
    j++;
}while (j < numero)

var j = 0;
while (j < numero){
    console.log("While break" + j);
    if (j % 2 == 0) break;
    j++;
}