interface _VariedadUser {
    _id: string;
    nombre: string;
    img: string;
}


export class Variedad {

    constructor(
       public  _id: string,
       public  id_variedad: string,
       public  nombre: string,
       public  color: string,
       public  usuario?: _VariedadUser,
    ) {}

}

