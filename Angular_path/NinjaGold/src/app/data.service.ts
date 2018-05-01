import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  // array to hold log details
  log: any[] = [];
  // delcare gold
  gold = 10;
  numbers: number[] = [1, 2, 3];


  constructor() { }

  farm() {
    this.gold += 5;
    this.log.push('You have earned five gold on the farm');
  }

  cave() {
    this.gold = this.gold + 10;
    this.log.push('You have earned 10 gold at the cave');
  }

  casino() {
    this.gold = this.gold + 100;
    this.log.push('You have earned 100 gold at the casino');
  }

  house () {
    this.gold = this.gold + 15;
    this.log.push('You have earned 15 gold at the house');
  }

  retrieveLog() {
    return this.log;
  }

  retrieveGold() {
    return this.gold;
  }



}
