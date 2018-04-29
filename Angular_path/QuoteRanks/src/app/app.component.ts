import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coding Dojo Quoting Ranks Assignment';
  quotes = [];
  invoke(event) {
    this.quotes.push(event);
  }

}
