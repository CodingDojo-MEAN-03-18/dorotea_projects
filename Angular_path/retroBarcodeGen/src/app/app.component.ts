import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

var color = (Math.floor(Math.random()*6)) + 1;

export class AppComponent {
  title = 'Coding Dojo Retro Barcode Generator Assignment';
  
}
