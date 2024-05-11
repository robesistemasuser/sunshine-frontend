// formulario-creacion-productos.component.ts
 
import { Component, OnDestroy, OnInit } from '@angular/core'; 
import { FormBuilder, Validators } from '@angular/forms'; 
import { Producto } from '../../models/producto.model';
import { ProductoService } from '../../services/producto.service';
import { ModalImagenService } from '../../services/modal-imagen.service';
import { Subscription, delay } from 'rxjs';
import { BusquedasService } from '../../services/busquedas.service';
import Swal from 'sweetalert2';

 


@Component({
  selector: 'app-formulario-creacion-productos',
  templateUrl: './formulario-creacion-productos.component.html',
  styleUrls: ['./formulario-creacion-productos.component.css']
})

export class FormularioCreacionProductosComponent implements OnInit, OnDestroy {

  public registerForm = this.fb.group({
      id_producto: ["a"],
      nombre: ["b"],
      especie: ["c"]/* ,
      variedad: ["d"],
      grado:["e"] */

        });
  public productos: Producto[] = [];
  public cargando: boolean = true;
  private imgSubs: Subscription | undefined;

  constructor( private fb: FormBuilder,
               private productoService: ProductoService,
               private modalImagenService: ModalImagenService,
               private busquedasService: BusquedasService
                  ) { }

  ngOnDestroy(): void {
   /*  this.imgSubs!.unsubscribe(); */
  }

  ngOnInit(): void {
   /*  this.cargarProductos(); */

   /*  this.imgSubs = this.imgSubs = this.modalImagenService.nuevaImagen*/
   /*    .pipe(delay(100)) */
   /*    .subscribe( img => this.cargarProductos() ); */
  }

  crearProducto(){
    console.log( this.registerForm.value);
  
     this.productoService.crearProducto( this.registerForm.value )
                .subscribe( resp => {
                  // this.productos = resp;
                  console.log("Producto creado");

                })
  }
}

 /*  buscar( termino: string ) {

    if ( termino.length === 0 ) {
      return this.cargarProductos();
    }

    this.busquedasService.buscar( 'productos', termino )
        .subscribe( resp => {

         // this.productos = resp;

        }); 
  }
 */
 /*  cargarProductos() {

    this.cargando = true;
    this.productoService.cargarProductos()
        .subscribe( productos => {
          this.cargando = false;
          this.productos = productos;
        })

  } */

/*   guardarCambios( producto: Producto ) {

    this.productoService.actualizarProducto( producto._id, producto.nombre )
        .subscribe( resp => {
          Swal.fire( 'Actualizado', producto.nombre, 'success' );
        });

  }

  eliminarProducto( producto: Producto ) {

    this.productoService.borrarProducto( producto._id )
        .subscribe( resp => {
          this.cargarProductos();
          Swal.fire( 'Borrado', producto.nombre, 'success' );
        });

  }

  async abrirSweetAlert() {
    const { value = '' } = await Swal.fire<string>({
      title: 'Crear producto',
      text: 'Ingrese el nombre del nuevo producto',
      input: 'text',
      inputPlaceholder: 'Nombre del producto',
      showCancelButton: true,
    });
    
    if( value.trim().length > 0 ) {
      this.productoService.crearProducto( value )
        .subscribe( (resp: any) => {
          this.productos.push( resp.producto )
        })
    }
  }

  abrirModal(producto: Producto) {

    this.modalImagenService.abrirModal( 'productos', producto._id, producto.img );

  } */
 