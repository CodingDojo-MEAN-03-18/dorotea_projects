import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Registration Assignment';

  form_submitted: boolean = false;
  form_complete: boolean = false;

  user = new User();
  users = [];

  onSubmit(){
    this.form_submitted = true;
    this.users.push(this.user);
    this.user = new User();
  }
}
