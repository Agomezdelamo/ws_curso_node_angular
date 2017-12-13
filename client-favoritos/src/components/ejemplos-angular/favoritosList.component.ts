import { Component } from "@angular/core";

@Component({
    selector: 'app-ejemplos-component',
    templateUrl: 'favoritos-list.html',
    styleUrls: ['favoritos-list.css']
})

export class EjemplosComponent {
    public title: string;
    public favoritos: Array<string>;
    public favoritosVisibles: boolean;
    public color: string;
    public esteColor: string;

    constructor(){
        this.title = 'Listado de marcadores';
        this.favoritos = ['as.com', 'youtube.com', 'twitter.com']
        this.favoritosVisibles = false;
    }

    showFavoritos(){
        this.favoritosVisibles = !this.favoritosVisibles;
    }
    changeColor(){
        this.esteColor = this.color;
    }
}