import { EjemplosComponent } from './../components/ejemplos-angular/favoritosList.component';
import { FavoritosService } from './../services/favoritos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FavoritosListComponent } from './../components/favoritos-list/favoritosList.component';
import { appRoutingProviders, routing } from './app.routing';
import { NotFoundComponent } from './../components/not-found/not-found.component';
import { FavoritoDetailComponent } from './../components/favorito-detail/favorito-detail.component';
import { FavoritoAddComponent } from './../components/favorito-add/favorito-add.component';
import { FavoritoEditComponent } from './../components/favorito-edit/favorito-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule
  ],
  declarations: [
    AppComponent,
    EjemplosComponent,
    FavoritosListComponent,
    NotFoundComponent,
    FavoritoDetailComponent,
    FavoritoAddComponent,
    FavoritoEditComponent
  ],
  providers: [
    FavoritosService,
    appRoutingProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
