class Calculadora {
    //propiedades de la clase
    numero1: number;
    numero2: number;

    //constructor
    constructor(numero1: number, numero2: number){
        //pasando los valores tomados del constructor a las propiedades
        //de la clase
        this.numero1= numero1;
        this.numero2= numero2;
    }

    //metodo calculos que realizar los calculos de los valores pasados
    //a las dos propiedades
    Calculos (){
        let suma = this.numero1 + this.numero2;
        let multiplicacion = this.numero1 * this.numero2;
        let division = (this.numero1 / this.numero2).toFixed(2);
        let resta = this.numero1 - this.numero2;

        return `
        Suma = ${this.numero1} + ${this.numero2} = ${suma},
        Multiplicacion = ${this.numero1} * ${this.numero2} = ${multiplicacion},
        Division = ${this.numero1} / ${this.numero2} = ${division}
        Resta = ${this.numero1} - ${this.numero2} = ${resta}
        `; 
    }
}
//instanciando la clase y pasandole dos valores
const Resultado = new Calculadora(5,6);

//imprimiendo los resultados de las operaciones
console.log(Resultado.Calculos());