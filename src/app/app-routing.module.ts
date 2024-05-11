import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';    
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
 
import { PagesRoutingModule } from './pages/pages.routing';
import { HomeComponent } from './pages/home/home.component';
import { FormularioCreacionProductosComponent } from './pages/formulario-creacion-productos/formulario-creacion-productos.component';
import { ListadoProductosComponent } from './pages/listado-productos/components/listado-Productos/listado-productos.component';
import { ListadoVariedadesComponent } from './components/modal-variedades/listado-variedades.component';
import { AuthRoutingModule } from './auth/auth.routing';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent }, 
  { path: 'crear-producto', component: FormularioCreacionProductosComponent },
  { path: 'listado-productos', component: ListadoProductosComponent },
  { path: 'listado-variedades', component: ListadoVariedadesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
 
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent }, 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,

  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
