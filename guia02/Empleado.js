var Empleado = /** @class */ (function () {
    function Empleado(nombre, salario) {
        this.Nombre = nombre;
        this.Salario = salario;
    }
    Empleado.prototype.Deducciones = function () {
        var AFP = Math.round(0.0725 * this.Salario);
        var ISSS = Math.round(0.073 * this.Salario);
        var Renta = Math.round(0.11 * this.Salario);
        var totalSalario = Math.round(this.Salario - (AFP + ISSS + Renta));
        return "\n           Nombre del empleado: " + this.Nombre + "\n           Descuento AFP: " + AFP + "\n           Descuento ISSS: " + ISSS + "\n           Descuento Renta: " + Renta + "\n           Salario Neto: " + totalSalario + "\n        ";
    };
    return Empleado;
}());
var Mostrar = new Empleado('josue', 850);
console.log(Mostrar.Deducciones());
