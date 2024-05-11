import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


import { Variedad } from '../models/variedad.model'; 
import { environment } from '../environments/environment.prod'; 

const base_url = environment.base_url;

 
@Injectable({
  providedIn: 'root'
})  
export class VariedadService { 
  [x: string]: any;

  
  constructor( private http: HttpClient ) { }
 
  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
     
    return {
      headers: {
        'x-token': this.token
      }
       
    }
  }

    cargarVariedades() {

    const url = `${ base_url }/variedades`;
     
    interface MyData {
      ok: boolean;
      variedades: Variedad[];
  }
      
    return   this.http.get<MyData>(url, this.headers)
    .pipe(
        map((resp: MyData) => resp.variedades)
    );
  }

  crearVariedad( nombre: string ) {

    const url = `${ base_url }/variedades`;
    
    return this.http.post( url, { nombre }, this.headers );
  }
  
  actualizarVariedad( _id: string, nombre: string  ) {

    const url = `${ base_url }/variedades/${ _id }`;
    return this.http.put( url, { nombre }, this.headers );
  }

  borrarVariedad( _id: string ) {

    const url = `${ base_url }/variedades/${ _id }`;
    return this.http.delete( url, this.headers );
  }

}
