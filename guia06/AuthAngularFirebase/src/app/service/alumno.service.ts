import { Injectable } from '@angular/core';

//importar firebase
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
//importando clase
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  //lista de alumnos
  alumnosList: AngularFireList<any>;
  //almacenar dato seleccionado
  alumnoSeleccionado: Alumno = new Alumno();

  constructor(private firebase: AngularFireDatabase) { }

  //obentener alumnos
  getAlumnos() {
    return this.alumnosList = this.firebase.list('alumnos');
  }

  //insertando alumnos
  insertAlumnos(alumno: Alumno) {
    this.alumnosList.push({
      nombre: alumno.nombre,
      apellido: alumno.apellido,
      edad: alumno.edad,
      correo: alumno.correo,
      direccion: alumno.direccion,
      telefono: alumno.telefono
    })
  }

  updateAlumno(alumno: Alumno) {
    this.alumnosList.update(alumno.$key, {
      nombre: alumno.nombre,
      apellido: alumno.apellido,
      edad: alumno.edad,
      correo: alumno.correo,
      direccion: alumno.direccion,
      telefono: alumno.telefono
    })
  }

  //eliminando alumnos
  deleteAlumnos($key: string) {
    this.alumnosList.remove($key);
  }
}