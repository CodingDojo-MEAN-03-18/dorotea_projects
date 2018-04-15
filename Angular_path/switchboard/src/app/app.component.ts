import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard Assignment';
  status = [
     true,
     false,
     true,
     true,
     true,
     false,
     true,
     true,
     false,
     true,
     true,                               
  ]

  name = [
    'on',
    'off',
    'on',
    'on',
    'on',
    'on',
    'off',
    'on',
    'on',
    'off',
    'on',
    'on',
  ]

  swap(idx){
    this.status[idx] = this.status[idx] != true;
    if (this.status[idx]){
      this.name[idx] = "on";
      console.log('on');
    } else {
      this.name[idx] = 'off';
      console.log('off');
    }
  }
}

