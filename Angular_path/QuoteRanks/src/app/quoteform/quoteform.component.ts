import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css']
})
export class QuoteformComponent implements OnInit {

  constructor() { }
  @Output() myEvent = new EventEmitter;
  quote = {
    quote: '',
    author: '',
  };

  callParent() {
    console.log('event emitted');
    this.myEvent.emit(this.quote);
    this.quote = {
      quote: '',
      author: '',
    };
  }
  ngOnInit() {
  }

}
