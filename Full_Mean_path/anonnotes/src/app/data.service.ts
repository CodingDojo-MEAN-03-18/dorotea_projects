import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  data: BehaviorSubject<any[]> = new BehaviorSubject([]);


  constructor(private _http: HttpClient) { }

  getData (newData: any): void {
    console.log('using getData');
    const tempData = this.data.getValue();
    tempData.push(newData);
    this.data.next(tempData);
  }


}
