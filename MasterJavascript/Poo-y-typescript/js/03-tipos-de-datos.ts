let cadena: string = "Javier Martinez"

let numero: number = 12;

let verdad_falso: boolean = true;

let cualquiera: any = "hola";

var lenguajes: Array<string> = ["PHP", "JS", "CSS"];

var mezcla: Array<any> = ["PHP", "JS", "CSS", 12];

let years: number[] = [12, 13, 14];

let multiple: string | number = "Soy multiple";

multiple = "Hola";
multiple = 12;
//multiple = false; => Da error

//Tipo de dato personalizado
type alfanumerico = string |number;
let letrasonumeros: alfanumerico = "lerele";



console.log(cadena);