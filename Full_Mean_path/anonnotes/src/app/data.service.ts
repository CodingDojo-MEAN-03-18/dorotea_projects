import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { Note } from './note';

@Injectable()
export class DataService {
  data: BehaviorSubject<any[]> = new BehaviorSubject([]);
  notes: any[] = [];

  constructor() { }

    getData(data) {
      this.notes.push(data);
      console.log(this.data);
      console.log('ran getdata');
    }

}
