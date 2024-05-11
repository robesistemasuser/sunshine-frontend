import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

/*  import { AuthGuard } from '../guards/auth.guard';  */

import { PagesComponent } from './pages.component'; 
import { HomeComponent } from './home/home.component';
import { FormularioCreacionProductosComponent } from './formulario-creacion-productos/formulario-creacion-productos.component';


// Mantenimientos
import { ListadoProductosComponent } from './listado-productos/components/listado-Productos/listado-productos.component';
import { PerfilComponent } from '../perfil/perfil.component';
import { UsuariosComponent } from '../mantenimientos/usuarios/usuarios.component';
import { ListadoVariedadesComponent } from '../components/modal-variedades/listado-variedades.component';
import { RegisterComponent } from '../auth/register/register.component';
import { LoginComponent } from '../auth/login/login.component';

/*import { HospitalesComponent } from './mantenimientos/hospitales/hospitales.component';
import { MedicosComponent } from './mantenimientos/medicos/medicos.component';
import { MedicoComponent } from './mantenimientos/medicos/medico.component'; */



const routes: Routes = [
    { 
        path: 'inicio', 
        component: HomeComponent,
      /*    canActivate: [ AuthGuard ],  */
        children: [
            { path: 'inicio', component: HomeComponent } ,
  
            // Mantenimientos
           
            { path: 'crear-producto', component: FormularioCreacionProductosComponent },
            { path: 'listado-productos', component: ListadoProductosComponent },
            { path: 'listado-variedades', component: ListadoVariedadesComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'login', component: LoginComponent },

            
         
          ]
        },
    ];
@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


