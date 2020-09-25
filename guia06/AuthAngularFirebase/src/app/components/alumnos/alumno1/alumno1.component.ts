import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from '../../../service/alumno.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-alumno1',
  templateUrl: './alumno1.component.html',
  styleUrls: ['./alumno1.component.css']
})
export class Alumno1Component implements OnInit {

  constructor(
    public alumnoService: AlumnoService,
    public toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.alumnoService.getAlumnos();
    this.resetForm();
  }

  //enviando datos a la base de datos
  onSubmit(alumnoForm: NgForm) {
    //insertando valor en la base
    if (alumnoForm.value.$key == null) {
      this.alumnoService.insertAlumnos(alumnoForm.value);
      this.toastr.success("Operacion exitosa", "Alumno registrado");
    } else {
      this.alumnoService.updateAlumno(alumnoForm.value);
      this.toastr.info("Operacion exitosa", "Alumno editado");
    }
    this.resetForm(alumnoForm);
  }

  //reseteando el formulario
  resetForm(alumnoForm?: NgForm) {
    //si el formulario es diferente de null
    if (alumnoForm != null) {
      //resetea el formulairo
      alumnoForm.reset();
      //resetea los valores de la clase
      this.alumnoService.alumnoSeleccionado = new Alumno();
    }
  }

}
