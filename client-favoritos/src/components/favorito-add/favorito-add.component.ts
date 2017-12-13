import { Favorito } from './../../models/favorito';
import { FavoritosService } from './../../services/favoritos.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-favorito-add',
  templateUrl: './favorito-add.component.html',
  styleUrls: ['./favorito-add.component.css']
})
export class FavoritoAddComponent implements OnInit {

  public titleSection: string;
  public errorMessage: any;
  public favorito;

  constructor(public favoritosService: FavoritosService,
              public _route: ActivatedRoute,
              public _router: Router ) { 
    this.titleSection = 'Crear favorito';
  }

  ngOnInit() {
    this.favorito = new Favorito("", "", "", "");
  }

  onSubmit() {
    console.log("este es el favorito creado", this.favorito); 
    this.favoritosService.addFavorito(this.favorito)
                          .subscribe(
                            response => {
                              this.favorito = response.favorito;
                              if(!this.favorito) {
                                alert("error en el servidor")
                              }
                                console.log('favorito guardado', this.favorito);
                                this._router.navigate(['/marcador', this.favorito._id])
                            },
                            err => {
                              this.errorMessage = <any>err;
                              
                                              if (this.errorMessage != null) {
                                                  console.log(this.errorMessage);
                                                  alert('error en la petición');
                              
                                              }
                            }
                           );
  }
}
