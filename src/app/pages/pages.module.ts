import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component'; 
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { ListadoProductosComponent } from './listado-productos/components/listado-Productos/listado-productos.component';
import { FormularioCreacionProductosComponent } from './formulario-creacion-productos/formulario-creacion-productos.component';
import { ComponentsModule } from '../components/components.module';
 

@NgModule({
    declarations: [
      
        PagesComponent,
        ListadoProductosComponent,
        FormularioCreacionProductosComponent 
        
    ],
    exports: [
        PagesComponent 
    ],
    imports: [
        CommonModule,
        FormsModule,
        ComponentsModule,
        ReactiveFormsModule,
        RouterModule,                 
        EncabezadoComponent,
        FooterComponent ,
        
    ]
})
export class PagesModule { }
