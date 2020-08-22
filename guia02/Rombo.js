var Rombo = /** @class */ (function () {
    //constructor 
    function Rombo(DiagonalVertical, DiagonalHorizontal) {
        this.DiagonalHorizontal = DiagonalHorizontal;
        this.DiagonalVertical = DiagonalVertical;
    }
    //funcion que realiza el calculo
    Rombo.prototype.Area = function () {
        var Area = this.DiagonalVertical * this.DiagonalHorizontal;
        return "El area del Rombo es " + Area;
    };
    return Rombo;
}());
//area 1
var Area1 = new Rombo(9, 8);
console.log(Area1.Area());
//area 2
var Area2 = new Rombo(7, 10);
console.log(Area2.Area());
