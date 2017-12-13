import { AlbumAddComponent } from './components/album.add.component';
import { AlbumsListComponent } from './components/album.list.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const APPROUTES: Routes = [
    {path: '', component: AlbumsListComponent},
    {path: 'crear-album', component: AlbumAddComponent},
    {path: '**', component: AlbumsListComponent},
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(APPROUTES);
