import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import { Favorito } from '../models/favorito';

@Injectable()
export class FavoritosService {
    // url de nuestra api rest
    public url: string;

    constructor(private _http: Http) {
        this.url = 'http://localhost:3678/api/';
    }

    getFavoritos() {
        return this._http.get(this.url + 'favoritos').map(
            (res) => res.json()
        );
    }

    /**
     * Metodo para obtener un favorito
     * @param id: string, id del favorito
     */
    getFavorito(id: string) {
        return this._http.get(this.url + 'favorito/' + id).map(res => res.json());
    }

     /**
      * metodo que guarda un favorito en db
      * @param favorito Favorito
      */
  addFavorito(favorito: Favorito) {
    // preparamos el json del objeto favorito
    const json = JSON.stringify(favorito);
    const params = json;
    // preparamos las cabeceras
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.post(this.url + 'favorito', params, {headers: headers})
                    .map(res => res.json());
    }
     /**
      * metodo que editar un favorito en db
      * @param favorito Favorito
      */
  editFavorito(id: string, favorito: Favorito) {
    // preparamos el json del objeto favorito
    const json = JSON.stringify(favorito);
    const params = json;
    // preparamos las cabeceras
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.put(this.url + 'favorito/' + id, params, {headers: headers})
                    .map(res => res.json());
    }
     /**
      * metodo que borrar un favorito en db
      * @param favorito Favorito
      */
  deleteFavorito(id: string) {
    return this._http.delete(this.url + 'favorito/' + id)
                    .map(res => res.json());
    }
}
