import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//importando firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

//importando componentes
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AlumnosListaComponent } from './components/alumnos/alumnos-lista/alumnos-lista.component';
import { Alumno1Component } from './components/alumnos/alumno1/alumno1.component';

//importando servicios
import { AlumnoService } from './services/alumno.service';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    AlumnosListaComponent,
    Alumno1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AlumnoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
