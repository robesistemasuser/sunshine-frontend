import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { EncabezadoComponent } from "../pages/encabezado/encabezado.component";



@NgModule({
    declarations: [
        BreadcrumbsComponent,
        SidebarComponent,
        HeaderComponent,
    ],
    exports: [
        BreadcrumbsComponent,
        SidebarComponent,
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        EncabezadoComponent
    ]
})
export class SharedModule { }