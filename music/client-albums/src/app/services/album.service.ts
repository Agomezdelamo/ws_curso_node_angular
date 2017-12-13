import { Album } from '../models/album';
import 'rxjs/add/operator/map';
import { Http, Response, Headers } from '@angular/http';
import { observable } from 'rxjs/symbol/observable';
import { Injectable } from '@angular/core';
import { GLOBAL } from './global';

@Injectable()
export class AlbumService {
    public url:string;

    constructor( private _http:Http  ){
        // seteo la url desde la clase para constantes
        this.url = GLOBAL.url;
    }

    getAlbums() {
        return this._http.get(this.url + 'albums')
                        .map(res => res.json());
    }

    addAlbum(album: Album) {
        let json = JSON.stringify(album);
        let params = json;
        // el tipo de datos que se van a enviar por post, se van a enviar tipo json
        let headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post(this.url + 'album', params, {headers: headers});
    }

} 