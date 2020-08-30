import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gas',
  templateUrl: './gas.component.html',
  styleUrls: ['./gas.component.css']
})
export class GasComponent implements OnInit {

  //valor inicial
  totalGas: number = 0.05;
  //gasolina seleccionada
  gasoSeleccionada: string;
  //arreglo que mostrara las ventas realizadas
  ventasGasolina = [];
  //generando elementos del arreglo
  ventaUnitaria: any;
  //
  variableprueba: number = 0.05;

  //tipos de gasolina
  tiposGasolina: Array<string> = ["Especial", "Regular", "Disiel"];

  constructor() { }

  ngOnInit(): void {
  }

  //calculando precio de gasolina
  onSubmit(){
    //generando elementos
    this.ventaUnitaria= {"tipoGasolina": this.gasoSeleccionada, "totalVenta": this.totalGas};
    //añadiendo elementos al arreglo
    this.ventasGasolina.push(this.ventaUnitaria);
    //resteando total gasolina a su valor inicial
    this.totalGas = 0.05;
    //reseteando cantidad de galones
    this.variableprueba=0;
  }

  //evento cuando se elige un tipo de gasolina
  cantidadGalones(value: number){
    // validando los tipos de gasolina seleccionado
    if(this.gasoSeleccionada=="Regular"){
      this.totalGas= Math.round((value*4.05)*100)/100;
    }else if(this.gasoSeleccionada=="Especial"){
      this.totalGas= Math.round((value*4.25)*100)/100;
    }else if(this.gasoSeleccionada=="Disiel"){
      this.totalGas= Math.round((value*3.96)*100)/100;
    }
  }

}
