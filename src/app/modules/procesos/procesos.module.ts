import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { ProcesosRoutingModule } from './procesos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Agrega el componente a las declaraciones
import { ProcesosPagesComponent } from './pages/procesos-pages/procesos-pages.component';

@NgModule({
  declarations: [
    ProcesosPagesComponent // Asegúrate de declarar este componente
  ],
  imports: [
    CommonModule,
    ProcesosRoutingModule,
    FormsModule, // Importa FormsModule para usar [(ngModel)]
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProcesosModule { }
