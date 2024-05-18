import { Component, OnInit, OnDestroy } from '@angular/core';
import Swal from 'sweetalert2';
import { delay } from 'rxjs/operators';

 
import { Subscription } from 'rxjs';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import { BusquedasService } from '../../services/busquedas.service';
import { ModalImagenService } from '../../services/modal-imagen.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit, OnDestroy {

  public totalUsuarios: number = 0;
  public usuarios: Usuario[] = [];
  public usuariosTemp: Usuario[] = [];

  public imgSubs: Subscription | undefined;
  public desde: number = 0;
  public cargando: boolean = true;

  constructor( private usuarioService: UsuarioService,
               private busquedasService: BusquedasService,
               private modalImagenService: ModalImagenService ) { }
  ngOnDestroy(): void {
    this.imgSubs!.unsubscribe();
  }

  ngOnInit(): void {
    this.cargarUsuarios();

    this.imgSubs = this.modalImagenService.nuevaImagen
      .pipe(delay(100))
      .subscribe( img => this.cargarUsuarios() );
  }

  cargarUsuarios() {
    this.cargando = true;
    this.usuarioService.cargarUsuarios( this.desde )
      .subscribe( ({ total, usuarios }) => {
        this.totalUsuarios = total;
        this.usuarios = usuarios;
        this.usuariosTemp = usuarios;
        this.cargando = false;
    })
  }

  cambiarPagina( valor: number ) {
    this.desde += valor;

    if ( this.desde < 0 ) {
      this.desde = 0;
    } else if ( this.desde >= this.totalUsuarios ) {
      this.desde -= valor; 
    }

    this.cargarUsuarios();
  }

  buscar(termino: string) {
    if (termino.length === 0) {
      this.usuarios = this.usuariosTemp;
      return; // Evitar que se realice la búsqueda si el término está vacío
    }
  
    this.busquedasService.buscar('usuarios', termino)
      .subscribe(
        (resp: Usuario[] | Producto[]) => { // Ajuste aquí
          if (Array.isArray(resp)) {
            this.usuarios = resp as Usuario[];
          } else {
            // Manejar los productos si es necesario
          }
        },
        (error) => {
          console.error('Error durante la búsqueda:', error);
        }
      );
  }
  
  
  

  eliminarUsuario( usuario: Usuario ) {

    if ( usuario.uid === this.usuarioService.uid ) {
      return Swal.fire('Error', 'No puede borrarse a si mismo', 'error');
    }

    Swal.fire({
      title: '¿Borrar usuario?',
      text: `Esta a punto de borrar a ${ usuario.nombre }`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, borrarlo'
    }).then((result) => {
      if (result.value) {
        
        this.usuarioService.eliminarUsuario( usuario )
          .subscribe( resp => {
            
            this.cargarUsuarios();
            Swal.fire(
              'Usuario borrado',
              `${ usuario.nombre } fue eliminado correctamente`,
              'success'
            );
            
          });

      }
    })
  return Swal.fire('Error', 'No puede borrarse a si mismo', 'error');
  }

  cambiarRole( usuario:Usuario ) {
    
    this.usuarioService.guardarUsuario( usuario )
      .subscribe( resp => {
        console.log(resp); 
      })
  }


  abrirModal( usuario: Usuario ) {
  
    this.modalImagenService.abrirModal('usuarios', usuario.uid!, usuario.img );
  }

}
