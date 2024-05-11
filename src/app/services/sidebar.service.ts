import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Home', url: 'inicio' },
        { titulo: 'Crear producto', url: 'crear-producto' },
        { titulo: 'Listar producto', url: 'listado-productos' },
        
      ]
    },

    {
      titulo: 'Mantenimientos',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        { titulo: 'Usuarios', url: 'usuarios' },
        { titulo: 'Productos', url: 'productos' },
        { titulo: 'Variedades', url: 'variedades' },
        { titulo: 'Grados', url: 'grados' },
      ]
    },
  ];

  constructor() { }
}
