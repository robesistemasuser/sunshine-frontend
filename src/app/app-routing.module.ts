import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';    
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
 
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing'; 
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormularioCreacionProductosComponent } from './pages/formulario-creacion-productos/formulario-creacion-productos.component';
import { ListadoProductosComponent } from './pages/listado-productos/components/listado-Productos/listado-productos.component';
import { ListadoVariedadesComponent } from './components/modal-variedades/listado-variedades.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';

const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule,
    
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }