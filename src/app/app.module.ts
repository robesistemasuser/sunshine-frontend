import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';   
import { PagesModule } from './pages/pages.module';
import { EncabezadoComponent } from "./pages/encabezado/encabezado.component";
import { FooterComponent } from './pages/footer/footer.component';
import { CommonModule } from '@angular/common'; 
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';



@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule,
        HttpClientModule,
        CommonModule,
        PagesModule,
        EncabezadoComponent,
        FooterComponent,
        SharedModule
    ]
})
export class AppModule { }
