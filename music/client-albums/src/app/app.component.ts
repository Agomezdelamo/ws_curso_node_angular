import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app Album';
  description = 'Aplicación de albums con nodejs y angular2';
}
