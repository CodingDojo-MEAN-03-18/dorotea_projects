import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotelist',
  templateUrl: './quotelist.component.html',
  styleUrls: ['./quotelist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuotelistComponent implements OnInit {
  @Input() myQuotes;
  @Output() updateEvent = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

}
