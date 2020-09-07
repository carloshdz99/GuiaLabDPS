import { Component } from '@angular/core';
import { Alumnos } from './models/alumnos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudAngular';

  // arreglo del tipo alumno, tiene 3 registros almacenados
  alumnoArray: Alumnos[] = [
    { id: 1, name: "Alex", lastname: "Campos", age: 35, direction: "avenida campos calle #3 pje. #6 casa 23", telephone: 75896532, email: "alex@ejemplo.com" },
    { id: 2, name: "Maria", lastname: "Lopez", age: 20, direction: "avenida salvador calle #4 pje. #3 casa 5", telephone: 65813207, email: "maria@ejemplo.com" },
    { id: 3, name: "Juan", lastname: "Castro", age: 25, direction: "avenida monseñor calle #9 pje. #12 casa 2", telephone: 72896534, email: "juan@ejemplo.com" }
  ]

  //atributo selecAlumno del tipo Alumno, por lo tanto, puede almacenar un objeto
  selectedAlumno: Alumnos = { id: 0, name: '', lastname: '', age: 0, direction: "", telephone: 0, email: "" };
  //un método que no retorna nada “void”, recibe como parámetro una variable del
  //tipo Alumno, para ser asignada al atributo selectAlumno y poder ser mostrado
  // en pantalla.
  openForEdit(alumno: Alumnos): void {
    this.selectedAlumno = alumno;
  }

  //método que no retorna nada “void”, NO recibe parámetro, pero realiza dos
  //operaciones agregar / editar, si no hay registro seleccionado se guarda,
  //de lo contrario limpia el atributo selectedAlumno en pantalla. [(ngModel)]
  addOrEdit(): void {
    if (this.selectedAlumno.id === 0) // INSERT
    {
      this.selectedAlumno.id = this.alumnoArray.length + 1;
      this.alumnoArray.push(this.selectedAlumno);
    }
    this.selectedAlumno = { id: 0, name: '', lastname: '', age: 0, direction: "", telephone: 0, email: "" };
  }

  //método que no retorna nada “void”, NO recibe parámetro, elimina del arreglo el
  //registro, pero antes muestra en pantalla un confirmar, se recorre el arreglo
  //realizando un “filter” para no almacenar el registro seleccionado en el nuevo
  //arreglo “alumnoArray” , por eso ocupados el operador “!=” y luego limpiamos
  //el registro seleccionado.
  delete(): void {
    if (confirm('¿Esta seguro de elimiar el Registro?')) {
      this.alumnoArray = this.alumnoArray.filter(x => x != this.selectedAlumno);
      this.selectedAlumno = { id: 0, name: '', lastname: '', age: 0, direction: "", telephone: 0, email: "" };
    }
  }
}

