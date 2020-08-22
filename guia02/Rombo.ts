class Rombo {
    //propiedades de la clase
    DiagonalVertical: number;
    DiagonalHorizontal: number;

    //constructor 
    constructor(DiagonalVertical: number, DiagonalHorizontal:number){
        this.DiagonalHorizontal = DiagonalHorizontal;
        this.DiagonalVertical = DiagonalVertical;
    }

    //funcion que realiza el calculo
    Area() {
        let Area = this.DiagonalVertical * this.DiagonalHorizontal;
        return `El area del Rombo es ${Area}`;
    }
}

//area 1
let Area1 = new Rombo(9,8);
console.log(Area1.Area());

//area 2
let Area2 = new Rombo(7,10);
console.log(Area2.Area());