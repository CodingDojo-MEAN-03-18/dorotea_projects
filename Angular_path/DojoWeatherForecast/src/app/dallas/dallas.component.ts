import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  city: any[] = [];
  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    console.log('dallas');
    this._weatherService.getWeather('dallas');
    this._weatherService.city.subscribe((city) => {this.city = city; } );
  }

}
