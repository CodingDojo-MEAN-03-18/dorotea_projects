import { Injectable } from '@angular/core';

@Injectable()
export class NumbersService {
  numbers: number[] = [1, 2, 3];

  // arrays to hold randomly generated sequence
  randomalpha: number[] = [7, 2];
  randombeta: number[] = [8];
  difference = 0;

    // method for generating random number
    generateNumber(): number {
      const num = Math.floor(Math.random() * 11 );
      return num;
    }
  constructor() { }

  retrieveNumbers(): number[] {
    return this.numbers;
  }

  retrieveAlpha(): number[] {
    return this.randomalpha;
  }

  retrieveBeta(): number[] {
    return this.randombeta;
  }

  addNumber(num: number) {
    this.numbers.push(num);
  }

  generateDifference(): number {
    console.log(this.randomalpha, this.randombeta);
    const sumAlpha: number = this.arrayTotal (this.randomalpha);
    const sumBeta: number = this.arrayTotal (this.randombeta);
    this.difference = sumAlpha - sumBeta;
    return this.difference;
  }

  arrayTotal(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }

}
