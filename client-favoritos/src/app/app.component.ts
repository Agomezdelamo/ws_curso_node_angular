import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo:string;
  public description: string;

  constructor(){
    this.titulo = 'APP FAVORITOS TITULO';
    this.description = 'Aplicación web SPA con angular 2 para gestionar favoritos.';
  }
}
