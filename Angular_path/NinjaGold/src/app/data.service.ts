import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  // array to hold log details
  log: any[] = [];
  // delcare gold
  gold = 0;
  message = '';
  earnedGold = 0;


  constructor() { }

  farm() {
    this.earnedGold = this.random (2, 5);
    this.gold = this.gold + this.earnedGold;
    this.message = 'You have earned ' + this.earnedGold + ' on the farm';
    this.log.push(this.message);
  }

  cave() {
    this.earnedGold = this.random (5, 10);
    this.gold = this.gold + this.earnedGold;
    this.message = 'You have earned ' + this.earnedGold + ' in the cave';
    this.log.push(this.message);
  }

  casino() {
    this.earnedGold = this.random (0, 100);
    this.gold = this.gold + this.earnedGold;
    this.message = 'You have earned ' + this.earnedGold + ' at the casino';
    this.log.push(this.message);
  }

  house () {
    this.earnedGold = this.random (7, 15);
    this.gold = this.gold + this.earnedGold;
    this.message = 'You have earned ' + this.earnedGold + ' at home';
    this.log.push(this.message);
  }

  random(num1, num2) {
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
  }

  retrieveLog() {
    return this.log;
  }

  retrieveGold() {
    return this.gold;
  }



}
