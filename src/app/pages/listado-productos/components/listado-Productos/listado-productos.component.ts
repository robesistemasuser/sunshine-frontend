import { Component, OnDestroy, OnInit } from '@angular/core';   
import { Subscription, delay } from 'rxjs';
import { Producto } from '../../../../models/producto.model';
import { ProductoService } from '../../../../services/producto.service'; 
import { ModalImagenService } from '../../../../services/modal-imagen.service';
 

@Component({
    selector: 'app-listado-productos',
    
    templateUrl: './listado-productos.component.html',
    styleUrl: './listado-productos.component.css',
     
})

export class ListadoProductosComponent implements OnInit, OnDestroy  {
[x: string]: any;

  public productos: Producto[] = [];
  public cargando: boolean = true;
  private imgSubs: Subscription = new Subscription;

  ngOnDestroy(): void {
    this.imgSubs.unsubscribe();
  }
   constructor(private productoService: ProductoService,
               private modalImagenService: ModalImagenService) {} 
            
  ngOnInit(): void { 

    this.listarProductos();

    this.imgSubs = this.imgSubs = this.modalImagenService.nuevaImagen
      .pipe(delay(100))
      .subscribe( img => this.listarProductos() );
 
  }
  listarProductos() {
    
    this.cargando = true;
    this.productoService.cargarProductos()          
        .subscribe( productos => {
          this.cargando = false;
          this.productos  = productos;
        })
      
        console.log(this.productoService.cargarProductos()
        .subscribe( productos => {
          this.cargando = false;
          this.productos  = productos;
        }),'token acaaaaa');

  }
  abrirModal(producto: Producto) {

    this.modalImagenService.abrirModal( 'productos', producto._id, producto.img );

  }

}
