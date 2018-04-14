import { Component } from '@angular/core';

var potential = [
  '#1D206B',
  '#872929',
  '#A39130',
  '#40A330',
  '#455742',
  '#61B49A',
  '#0C4936',
  '#5EBEE0',
  '#295AA8',
  '#1F2939',
  '#BA57B5',
  '#8B0C18'
];

var color = []
for (var i=0; i < 15; i++){
  color.push(potential[Math.floor(Math.random()*10)])
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})





export class AppComponent {
  title = 'Coding Dojo Retro Barcode Generator Assignment';
  colors = color;
}
