/**
 * Clase que modela el dominio de un favorito
 */
export class Favorito {
    constructor(
        public _id: string,
        public title: string,
        public url: string,
        public description: string
    ){

    }
}