import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ModalImagenComponent } from './modal-imagen/modal-imagen.component';
import { ListadoVariedadesComponent } from './modal-variedades/listado-variedades.component';

 

 



@NgModule({
  declarations: [
    
    ModalImagenComponent,
    ListadoVariedadesComponent
  ],
  exports: [
    
    ModalImagenComponent,
    ListadoVariedadesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    /* ChartsModule */
  ]
})
export class ComponentsModule { }
