import { Component, OnDestroy, OnInit } from '@angular/core';   
import { Subscription, delay } from 'rxjs';
import { Variedad } from '../../models/variedad.model';
import { VariedadService } from '../../services/variedad.service';  
 

@Component({
    selector: 'app-listado-variedades',
    
    templateUrl: './listado-variedades.component.html',
    styleUrl: './listado-variedades.component.css',
     
})

export class ListadoVariedadesComponent implements OnInit, OnDestroy  {
[x: string]: any;

  public variedades: Variedad[] = [];
  public cargando: boolean = true;
  private imgSubs: Subscription = new Subscription;

  ngOnDestroy(): void {
    this.imgSubs.unsubscribe();
  }
   constructor(private variedadService: VariedadService/* ,
               private modalImagenService: ModalImagenService */) {} 
            
  ngOnInit(): void { 

    this.listarVariedades();

    /* this.imgSubs = this.imgSubs = this.modalImagenService.nuevaImagen
      .pipe(delay(100))
      .subscribe( img => this.listarVariedades() ); */
 
  }
  listarVariedades() {
    
    this.cargando = true;
    this.variedadService.cargarVariedades()          
        .subscribe( variedades => {
          this.cargando = false;
          this.variedades  = variedades;
        })
      
       
  }
  /* abrirModal(variedad: Variedad) {

    this.modalImagenService.abrirModal( 'variedades', variedad._id, variedad.nombre );

  } */

}
