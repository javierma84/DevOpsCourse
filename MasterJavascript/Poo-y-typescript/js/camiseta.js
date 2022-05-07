var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorador
function estampar(logo) {
    // this is the decorator factory, it sets up
    // the returned decorator function
    return function (target) {
        // this is the decorator, the target is the constructor
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de " + logo);
        };
        console.log("decorador");
    };
}
// Clase
//export class Camiseta {
var Camiseta = /** @class */ (function () {
    //Constructor
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
        console.log("Construido");
    }
    //Metodos
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta = __decorate([
        estampar('MiLogotipo')
    ], Camiseta);
    return Camiseta;
}());
// Clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
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
