import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css'],
})
export class PowerComponent implements OnInit {

  constructor() { }
  thing;
  level = {};
  ngOnInit() {
  }
  onSubmit() {
    this.level = {num: ''};
    this.thing = this.level['num'];
  }

}
