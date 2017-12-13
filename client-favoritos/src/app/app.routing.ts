import { FavoritoEditComponent } from './../components/favorito-edit/favorito-edit.component';
import { FavoritoAddComponent } from './../components/favorito-add/favorito-add.component';
import { FavoritoDetailComponent } from './../components/favorito-detail/favorito-detail.component';
import { FavoritosListComponent } from './../components/favoritos-list/favoritosList.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './../components/not-found/not-found.component';

// 1. DEFINIMOS LAS RUTAS DE TIPO Routes
// constante de tipo Routes que almacena el enrutado
const appRoutes: Routes = [
    // ruta vacia redirige a lista de favoritos
    { path: '', component: FavoritosListComponent},
    // cuando vas al detalle de un favorito
    { path: 'marcador/:id', component: FavoritoDetailComponent},
    // para crear un marcador
    { path: 'crearMarcador', component: FavoritoAddComponent},
    // para editar un marcador
    { path: 'editMarcador/:id', component: FavoritoEditComponent},
    // cuando no existe la ruta redirige a lista de favoritos
    { path: '**', component: NotFoundComponent}
];

// SERVICIO DE RUTAS
export const appRoutingProviders: any[] = [];

// 2. MODULO DE RUTAS
// seteamos nuestras rutas al modulo de rutas en su raiz
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
