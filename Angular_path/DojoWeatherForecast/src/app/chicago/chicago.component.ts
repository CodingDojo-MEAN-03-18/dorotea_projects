import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  city: any[] = [];
  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    console.log('chicago');
    this._weatherService.getWeather('chicago');
    this._weatherService.city.subscribe((city) => {this.city = city; } );
  }

}
