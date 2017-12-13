import { Album } from '../models/album';
import { AlbumService } from '../services/album.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'album-add',
    templateUrl: '../views/album-add.html',
    providers: [AlbumService]
})
export class AlbumAddComponent implements OnInit {
    public titulo: string;
    public album: Album;
    public errorMessage: String;

    constructor( private albumService: AlbumService,
                private routeActive: ActivatedRoute,
                private router: Router){
                    this.titulo = 'crear nuevo album';
    }

    ngOnInit() {
        this.titulo = 'album add';
        this.album = new Album("", "");
    }

  
}