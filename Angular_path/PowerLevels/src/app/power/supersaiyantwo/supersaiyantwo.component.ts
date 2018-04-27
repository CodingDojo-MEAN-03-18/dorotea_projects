import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-supersaiyantwo',
  templateUrl: './supersaiyantwo.component.html',
  styleUrls: ['./supersaiyantwo.component.css']
})
export class SupersaiyantwoComponent implements OnInit {
  @Input() myLevel;
  constructor() { }

  ngOnInit() {
  }

}
