import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  //variable que contendra los empleados
  Empleados = [];

  //datos del empleado
  nombre: string;
  apellido: string;
  salario: number;
  salarioNeto: number;

  //variables descuento
  afp: number;
  iss: number;
  renta: number;

  //contador
  numRegistros: number = 0;

  //arreglo que añadira elementos a Empleados[]
  nuevoEmpleado: any;

  constructor() { }

  //evento de submit
  onSubmit(){
    //calculando descuentos
    this.afp = Math.round((this.salario * 0.051) * 100)/100;
    this.iss = Math.round((this.salario * 0.073) * 100)/100;
    this.renta = Math.round((this.salario * 0.11) * 100)/100;

    //calculando salario neto
    this.salarioNeto = Math.round((this.salario - (this.afp + this.iss + this.renta)) * 100)/100;

    //creando arreglo de empleado nuevo
    this.nuevoEmpleado = {'nombre': this.nombre, 'apellido': this.apellido, 'isss': this.iss, 'afp': this.afp
    , 'renta': this.renta, 'salarioNeto': this.salarioNeto};

    //añadiendo elementos al arreglo
    this.Empleados.push(this.nuevoEmpleado);

    //contando cantidad de registros
    this.numRegistros = this.Empleados.length;

    //limpiando campos
    this.nombre ="";
    this.apellido="";
    this.salario=0;
  }
  
  ngOnInit(): void {

  }

}
