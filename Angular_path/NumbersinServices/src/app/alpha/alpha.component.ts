import { Component, OnInit } from '@angular/core';
import { NumbersService } from '../numbers.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  numbers: number[] = [];
  randomalpha: number[] = [];

  constructor(private _numbersService: NumbersService) { }

  ngOnInit() {
    this.numbers = this._numbersService.retrieveNumbers();
    this.randomalpha = this._numbersService.retrieveAlpha();
  }

  pushOne() {
    this._numbersService.addNumber(1);
  }

  genSequence() {
    console.log('it worked?');
    const number = this._numbersService.generateNumber();
    this._numbersService.randomalpha.push(number);
  }


}
