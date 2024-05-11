import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


import { Producto } from '../models/producto.model'; 
import { environment } from '../environments/environment.prod'; 
import { RegisterProductoForm } from '../interfaces/register-producto.interface';

const base_url = environment.base_url;

 
@Injectable({
  providedIn: 'root'
})  
export class ProductoService { 
  [x: string]: any;

  
  constructor( private http: HttpClient ) { }
 
  get token(): string {
    return localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NjMxYTI0OWI1YmUzMmI1NTZhNGZkNjkiLCJpYXQiOjE3MTUxODQ2MDcsImV4cCI6MTcxNTIyNzgwN30.tND0znTZKrPqwOQ99TpLGcX299rC9moHlO7PCPst868') || '';
  }

  get headers() {
     
    return {
      headers: {
        'x-token': this.token
      }
       
    }
  }

    cargarProductos() {

    const url = `${ base_url }/productos`;
     
    interface MyData {
      ok: boolean;
      productos: Producto[];
  }
      
    return   this.http.get<MyData>(url, this.headers)
    .pipe(
        map((resp: MyData) => resp.productos)
    );
  }

  crearProducto( formData: RegisterProductoForm  ) {

    const url = `${ base_url }/productos`;
    console.log(this.http.post( url, this.headers ), "peticion al back")
    return this.http.post( url, this.headers );
  }
  
  actualizarProducto( _id: string, nombre: string  ) {

    const url = `${ base_url }/productos/${ _id }`;
    return this.http.put( url, { nombre }, this.headers );
  }

  borrarProducto( _id: string ) {

    const url = `${ base_url }/productos/${ _id }`;
    return this.http.delete( url, this.headers );
  }

}
