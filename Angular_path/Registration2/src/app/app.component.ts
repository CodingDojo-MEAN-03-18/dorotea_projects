import { Component } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coding Dojo Registration Form Assignment';

  visible = false;

  user: User = new User();
  users: Array<User> = [];

  onSubmit(event: Event, form: NgForm)  {
    event.preventDefault();
    console.log (this.user);
    this.users.push(this.user);
    this.visible = !this.visible;
    this.user = new User();
  }

}
