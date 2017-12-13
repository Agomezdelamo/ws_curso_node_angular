import { Favorito } from './../../models/favorito';
import { FavoritosService } from './../../services/favoritos.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-favoritos-list',
  templateUrl: 'favoritos-list.html'
})
export class FavoritosListComponent implements OnInit {
    public title: string;
    public errorMessage: string;
    public favoritos: Favorito[];
    public loading: boolean;
    public confirmado: any;

    constructor( private favoritosService: FavoritosService) {
        this.loading = true;
        this.title = 'Listado de marcadores';
    }

    ngOnInit(): void {
        console.log('Favoritos List Component cargado!!.');
        this.getFavoritos();
    }

    getFavoritos() {
        this.favoritosService.getFavoritos().subscribe(
            (result) => {
                this.favoritos = result.favoritosList;
                if (!this.favoritos) {
                    console.log('error en el servidor');
                } else {
                    this.loading =  false;
                    console.log('reesult', result);
                }
            },
            (error) => {
                this.errorMessage = <any>error;

                if (this.errorMessage != null) {
                    console.log(this.errorMessage);
                    alert('error en la petición');

                }
            });
    }

    onDeleteConfirm(id) {
        this.confirmado = id;
    }

    onCancelConfirm(id) {
        this.confirmado = null;
    }

    onDeleteFavorito(id) {
        this.favoritosService.deleteFavorito(id).subscribe(
            result => {
                if (!result.message) {
                    alert('Error en la petición');
                }
                this.getFavoritos();
            },
            error => {
                this.errorMessage = <any>error;

                if (this.errorMessage != null) {
                    console.log(this.errorMessage);
                    alert('error en la petición');

                }

            }
        )
    }
}
