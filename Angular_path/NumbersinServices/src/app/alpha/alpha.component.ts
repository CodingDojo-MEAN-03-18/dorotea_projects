import { Component, OnInit } from '@angular/core';
import { NumbersService } from '../numbers.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  numbers: number[] = [];
  constructor(private_numbersService: NumbersService) { }

  ngOnInit() {
    this.numbers = this._numbersService.retrieveNumbers();
  }

}
