import { Album } from '../models/album';
import { AlbumService } from '../services/album.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'albums-list',
    templateUrl: '../views/albums-list.html',
    providers: [AlbumService]
})
export class AlbumsListComponent implements OnInit {
    public titulo: string;
    public albums: Album[];
    public errorMessage: String;
    public loading: Boolean;

    constructor( private albumService: AlbumService,
                private routeActive: ActivatedRoute,
                private router: Router){
    }

    ngOnInit() {
        this.titulo = 'Listado de albums';
        console.log('Albums List Component esta cargado');
        this.getAlbums();
        console.log(this.albums, 'this albums');
        this.loading = true;
    }

    getAlbums(){
                this.albumService.getAlbums().subscribe(
            result => {
                this.albums = result.albums;
                console.log('albums', this.albums);
                if(!this.albums) {
                    console.log('Error en el servidor');
                }

                this.loading = false;
            },
            err => {
                this.errorMessage = <any>err;
                if(this.errorMessage != null) {
                    console.log(this.errorMessage);
                }
            }
        )
        }
}