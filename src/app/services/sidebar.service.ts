import { Injectable } from '@angular/core';

// Define las interfaces MenuItem y SubMenuItem
interface MenuItem {
  titulo: string;
  icono: string;
  submenu: SubMenuItem[];
}

interface SubMenuItem {
  titulo: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  // Define menu como un arreglo de MenuItem
  public menu: MenuItem[] = [];

  constructor() { }

  cargarMenu() {
    try {
      const storedMenu = localStorage.getItem('menu');
      
      if (storedMenu) {
        // Si hay un menú almacenado, cárgalo en el servicio
        this.menu = JSON.parse(storedMenu);
      } else {
        // Si no hay un menú almacenado, inicializa el menú como un arreglo vacío
        this.menu = [];
      }
    } catch (error) {
      console.error('Error al cargar el menú desde el almacenamiento local:', error);
      // Si ocurre un error, inicializa el menú como un arreglo vacío
      this.menu = [];
    }
  }

  guardarMenu(menu: MenuItem[]) {
    try {
      // Guarda el menú en el almacenamiento local
      localStorage.setItem('menu', JSON.stringify(menu));
    } catch (error) {
      console.error('Error al guardar el menú en el almacenamiento local:', error);
    }
  }
}
