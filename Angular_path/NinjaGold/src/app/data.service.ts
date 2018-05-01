import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  // array to hold log details
  log: any[] = [];
  // delcare gold
  gold = 10;
  message = '';
  earnedGold = 0;


  constructor() { }

  farm() {
    this.earnedGold = this.gold + this.random (2, 5);
    this.gold = this.gold + this.earnedGold;
    this.message = 'You have earned ${this.earnedGold} on the farm';
    this.log.push(this.message);
  }

  cave() {
    this.gold = this.gold + this.random(2, 5);
    this.log.push('You have earned {{}} at the cave');
  }

  casino() {
    this.gold = this.gold + 100;
    this.log.push('You have earned 100 gold at the casino');
  }

  house () {
    this.gold = this.gold + 15;
    this.log.push('You have earned 15 gold at the house');
  }

  random(num1, num2) {
    return Math.floor(Math.random() * num2) + num1;
  }

  retrieveLog() {
    return this.log;
  }

  retrieveGold() {
    return this.gold;
  }



}
