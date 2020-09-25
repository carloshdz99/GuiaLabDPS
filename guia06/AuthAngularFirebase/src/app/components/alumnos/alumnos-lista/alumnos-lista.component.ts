import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from '../../../service/alumno.service';

@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrls: ['./alumnos-lista.component.css']
})
export class AlumnosListaComponent implements OnInit {

  //arreglo de alumnos
  alumnosLista: Alumno[];

  constructor(
    public alumnoService: AlumnoService,
    public toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.alumnoService.getAlumnos().
      snapshotChanges().
      subscribe(item => {
        this.alumnosLista = [];
        item.forEach(elemento => {
          let x = elemento.payload.toJSON();
          x["$key"] = elemento.key;
          this.alumnosLista.push(x as Alumno);
        });
      });
  }

  //editando
  onEdit(alumno: Alumno) {
    this.alumnoService.alumnoSeleccionado = Object.assign({}, alumno);
  }

  //borrando
  onDelete($key: string) {
    this.alumnoService.deleteAlumnos($key);
    this.toastr.warning("Operacion exitosa", "Alumno eliminado")
  }

}
