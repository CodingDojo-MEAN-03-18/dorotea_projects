import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-supersaiyanthree',
  templateUrl: './supersaiyanthree.component.html',
  styleUrls: ['./supersaiyanthree.component.css']
})
export class SupersaiyanthreeComponent implements OnInit {
  @Input() myLevel;
  constructor() { }

  ngOnInit() {
  }

}
