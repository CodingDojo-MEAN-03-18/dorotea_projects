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

  form_submitted: boolean = false;
  //form_complete: boolean = false;

  user: User = new User();
  users: Array<User> = [];

  onSubmit(form: NgForm, event: Event)  {
    event.preventDefault();
    this.form_submitted = true;
    console.log (form.value);
    this.users.push(this.user);
    this.user = new User();
    //form.reset();
  }

}
