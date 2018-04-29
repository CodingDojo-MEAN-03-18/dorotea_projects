import { Component, OnInit } from '@angular/core';
import { NumbersService } from '../numbers.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  randombeta: number[] = [];
  constructor(private _numbersService: NumbersService) { }

  ngOnInit() {
    this.randombeta = this._numbersService.retrieveBeta();
  }

  genSequence() {
    console.log('beta worked?');
    const number = this._numbersService.generateNumber();
    this._numbersService.randombeta.push(number);
  }

}
