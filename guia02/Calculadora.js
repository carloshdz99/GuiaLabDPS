var Calculadora = /** @class */ (function () {
    //constructor
    function Calculadora(numero1, numero2) {
        //pasando los valores tomados del constructor a las propiedades
        //de la clase
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    Calculadora.prototype.Calculos = function () {
        var suma = this.numero1 + this.numero2;
        var multiplicacion = this.numero1 * this.numero2;
        var division = (this.numero1 / this.numero2).toFixed(2);
        var resta = this.numero1 - this.numero2;
        return "Suma = " + this.numero1 + " + " + this.numero2 + " = " + suma + ",\n        Multiplicacion = " + this.numero1 + " * " + this.numero2 + " = " + multiplicacion + ",\n        Division = " + this.numero1 + " / " + this.numero2 + " = " + division + "\n        Resta = " + this.numero1 + " - " + this.numero2 + " = " + resta;
    };
    return Calculadora;
}());
var Resultado = new Calculadora(5, 6);
console.log(Resultado.Calculos());
