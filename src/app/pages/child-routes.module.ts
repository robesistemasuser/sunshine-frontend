import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';

// Mantenimientos

 
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AdminGuard } from '../guards/admin.guard';
import { UsuariosComponent } from '../mantenimientos/usuarios/usuarios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioCreacionProductosComponent } from './formulario-creacion-productos/formulario-creacion-productos.component';
import { ListadoProductosComponent } from './listado-productos/components/listado-Productos/listado-productos.component';
import { ListadoVariedadesComponent } from '../components/modal-variedades/listado-variedades.component';


const childRoutes: Routes = [
  { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
  { path: 'crear-producto', component: FormularioCreacionProductosComponent, data: { titulo: 'Crear productos' }  },
  { path: 'listado-productos', component: ListadoProductosComponent, data: { titulo: 'Listado de  productos' }  },
  { path: 'listado-variedades', component: ListadoVariedadesComponent },
  
  { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de cuenta' }},
  { path: 'buscar/:termino', component: BusquedaComponent, data: { titulo: 'Busquedas' }},
  
  { path: 'perfil', component: PerfilComponent, data: { titulo: 'Perfil de usuario' }},
   
  { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' }},
  { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' }},

  // Mantenimientos
 

  // Rutas de Admin
  { path: 'usuarios', canActivate: [ AdminGuard ], component: UsuariosComponent, data: { titulo: 'Matenimiento de Usuarios' }},
]



@NgModule({
  imports: [ RouterModule.forChild(childRoutes),  ReactiveFormsModule, ],
  exports: [ RouterModule ]
})
export class ChildRoutesModule { }
