import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';   
import { PagesModule } from './pages/pages.module';  
import { FooterComponent } from './pages/footer/footer.component'; 
import { AuthModule } from './auth/auth.module';  



@NgModule({
    declarations: [
        AppComponent 
    ],
     
   
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule, 
        FooterComponent, 
        
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
