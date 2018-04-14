import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  emails = [
    {email:"hello@gmail.com", importance: true, subject: "Hello World", content: "This is my first email"},
    {email:"secondhello@gmail.com", importance: false, subject: "HL3!", content: "Just Kidding"},
  ]
}
