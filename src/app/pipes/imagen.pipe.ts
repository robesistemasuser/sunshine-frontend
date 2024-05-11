import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../environments/environment';

const base_url = environment.base_url;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( img: string, tipo: 'productos'): string {
    
    if ( !img ) {
      return `${ base_url }/upload/productos/no-image`;
  } else if ( img.includes('https') ) {
      return img;
  } else if ( img ) {
      return `${ base_url }/upload/${ tipo }/${ img }`;
  } else {
      return `${ base_url }/upload/productos/no-image`;
  }


  }

}
