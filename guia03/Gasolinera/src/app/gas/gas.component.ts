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
  }

  //evento cuando se elige un tipo de gasolina
  cantidadGalones(value: number){
    // validando los tipos de gasolina seleccionado
    if(this.gasoSeleccionada=="Regular"){
      this.totalGas= value*0.2025;
    }else if(this.gasoSeleccionada=="Especial"){
      this.totalGas= value*0.2125;
    }else if(this.gasoSeleccionada=="Disiel"){
      this.totalGas= value*0.198;
    }
  }

}
