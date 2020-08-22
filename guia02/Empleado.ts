class Empleado {
    //propiedades
    Nombre: string;
    Salario: number;

    constructor(nombre: string, salario: number){
        this.Nombre= nombre;
        this.Salario= salario;
    }

    Deducciones (){
        let AFP = Math.round(0.0725 * this.Salario);
        let ISSS = Math.round(0.073 * this.Salario);
        let Renta = Math.round(0.11 * this.Salario);
        const totalSalario = Math.round(this.Salario - (AFP + ISSS + Renta));

        return `
           Nombre del empleado: ${this.Nombre}
           Descuento AFP: ${AFP}
           Descuento ISSS: ${ISSS}
           Descuento Renta: ${Renta}
           Salario Neto: ${totalSalario}
        `;
    }
}

const Mostrar = new Empleado('josue',850);
console.log(Mostrar.Deducciones());