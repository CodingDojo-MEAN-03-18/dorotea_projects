import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit {
  @Input() myLevel;
  constructor() { }

  ngOnInit() {
  }

}
