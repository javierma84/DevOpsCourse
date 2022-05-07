// Interface
interface CamisetaBase{
    setColor(color);
    getColor();
}

// Decorador
function estampar(logo:string) {
    // this is the decorator factory, it sets up
    // the returned decorator function
    return function (target:Function) {
        // this is the decorator, the target is the constructor
        target.prototype.estampacion = function ():void {
            console.log("Camiseta estampada con el logo de "+ logo);
        }
        console.log("decorador");
    }
}

// Clase
//export class Camiseta {
@estampar('MiLogotipo')
class Camiseta implements CamisetaBase {
    //public => everywhere
    //protected => clase actual y clases que heredan
    //private => sólo accesible desde la clase actual
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    //Constructor
    constructor(color, modelo, marca, talla ?, precio ?){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
        console.log("Construido");
    }

    //Metodos
    public setColor(color) {
        this.color = color;
    }
    public getColor() {
        return this.color;
    }

}

// Clase hija
class Sudadera extends Camiseta{
    public capucha: boolean;
    
    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    getCapucha(){
        return this.capucha;
    }
}

 
var camiseta = new Camiseta("Rojo", "Manga Larga", "Nike", "L", 20);
console.log(camiseta);
camiseta.estampacion();

var sudadera_nike = new Sudadera("Rojo", "Manga Larga", "Nike");
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Verde");

console.log(sudadera_nike);

/* camiseta.color = "Rojo";
camiseta.modelo = "Manga Larga";
camiseta.marca = "Nike";
camiseta.talla = "L";
camiseta.precio = 20;
camiseta.setColor("Rojo");

console.log(camiseta);

var playera = new Camiseta("Azul", "Manga Corta", "Adidas", "M", 15);

/* playera.color = "Blanco";
playera.modelo = "Manga Corta";
playera.marca = "Adidas";
playera.talla = "M";
playera.precio = 15;
playera.setColor("Azul");

console.log(playera); */
