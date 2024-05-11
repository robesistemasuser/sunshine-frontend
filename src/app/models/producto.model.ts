interface _ProductoUser {
    _id: string;
    nombre: string;
    img: string;
}


export class Producto {

    constructor(
        public  _id: string,
       public  id_producto: string,
       public  nombre: string,
       public  especie: string,
       public  variedad?: string,
       public  grado?: string,       
       public  img?: string, 
       public  usuario?: _ProductoUser,
    ) {}

}

