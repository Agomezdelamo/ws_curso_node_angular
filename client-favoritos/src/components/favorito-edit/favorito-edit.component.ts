import { Router, ActivatedRoute, Params } from '@angular/router';
import { FavoritosService } from './../../services/favoritos.service';
import { Component, OnInit } from '@angular/core';
import { Favorito } from './../../models/favorito';


@Component({
  selector: 'app-favorito-edit',
  templateUrl: './favorito-edit.component.html',
  styleUrls: ['./favorito-edit.component.css']
})
export class FavoritoEditComponent implements OnInit {


  public titleSection: string;
  public errorMessage: any;
  public favorito;

  constructor(public favoritosService: FavoritosService,
              public _route: ActivatedRoute,
              public _router: Router ) {
    this.titleSection = 'Editar favorito';
  }

  ngOnInit() {
    this.favorito = new Favorito('', '', '', '');
      this.getFavoritoToCtrl();
    }

    getFavoritoToCtrl(){
      // accedemos a los parametros de la ruta activa
      this._route.params.forEach(
        (params: Params) => {
          const id = params['id'];

          this.favoritosService.getFavorito(id).subscribe(
            (response) => {
              // guardamos el favorito de la response de db
              this.favorito = response.favoritoRecuperadoDB;
              console.log(this.favorito)
              // si no trae un favorito nos devuelve a la home
              if (!this.favorito) {
                this._router.navigate(['/']);
              }
            },
            (err) => {
                this.errorMessage = <any>err;

                if (this.errorMessage != null) {
                    console.log(this.errorMessage);
                    alert('error en la petición');

                }
              })
        });
    }
    onSubmit() {
      this._route.params.forEach((params: Params) => {
        const id = params['id'];
        this.favoritosService.editFavorito(id, this.favorito)
        .subscribe(
          response => {
            this.favorito = response.returnedFavorito;
            if (!this.favorito) {
              alert('error en el servidor')
            }
              console.log('favorito guardado', this.favorito);
              this._router.navigate(['/marcador', this.favorito._id]);
          },
          err => {
            this.errorMessage = <any>err;
            if (this.errorMessage != null) {
                console.log(this.errorMessage);
                alert('error en la petición');

            }
          });

      });
    }

}


