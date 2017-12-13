import { FavoritosService } from './../../services/favoritos.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Favorito } from '../../models/favorito';


@Component({
  selector: 'app-favorito-detail',
  templateUrl: './favorito-detail.component.html',
  styleUrls: ['./favorito-detail.component.css']
})
export class FavoritoDetailComponent implements OnInit {
  private errorMessage: string;
  //guardamos el objeto de base de datos
  public favorito: Favorito;

  constructor(private favoritoService: FavoritosService,
              private _rutaActiva: ActivatedRoute,
              private _router: Router
              ) { 


  }

  ngOnInit() {
    this.getFavoritoToCtrl();
  }

  getFavoritoToCtrl(){
    this._rutaActiva.params.forEach(
      (params: Params) => {
        const id = params['id'];

        this.favoritoService.getFavorito(id).subscribe(
          (response) => {
            // guardamos el favorito de la response de db
            this.favorito = response.favoritoRecuperadoDB;
            console.log(this.favorito)
            // si no trae un favorito nos devuelve a la home
            if(!this.favorito) {
              this._router.navigate(['/']);
            }
          },
          (err) => {
              this.errorMessage = <any>err;

              if(this.errorMessage != null) {
                  console.log(this.errorMessage);
                  alert('error en la petición');

              }

          })
      });
  }
}
