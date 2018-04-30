import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class WeatherService {
  city: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }

  getWeather( weather: string) {
    console.log('get weather');
    this._http.get('http://api.openweathermap.org/data/2.5/weather?q=burbank&APPID=81c567573cdd06b5b249bc97c2373f1f').subscribe(
      (city: any[]) => {this.city.next(city); }
    );
  }

}
