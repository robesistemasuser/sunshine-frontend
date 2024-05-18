import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';  ;
import { FooterComponent } from './footer/footer.component';
import { ListadoProductosComponent } from './listado-productos/components/listado-Productos/listado-productos.component';
import { FormularioCreacionProductosComponent } from './formulario-creacion-productos/formulario-creacion-productos.component';
import { ComponentsModule } from '../components/components.module';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';
 
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PromesasComponent } from './promesas/promesas.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { UsuariosComponent } from '../mantenimientos/usuarios/usuarios.component';
 

@NgModule({
    declarations: [
        DashboardComponent,
        PagesComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent, 
        UsuariosComponent,
        ListadoProductosComponent,
        FormularioCreacionProductosComponent,
        BusquedaComponent,
        
    ],
    exports: [
        DashboardComponent,
        PagesComponent,
        AccountSettingsComponent,
        
        
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        RouterModule,
        ComponentsModule,
        PipesModule,
        FooterComponent ,
        
        
    ]
})
export class PagesModule { }
