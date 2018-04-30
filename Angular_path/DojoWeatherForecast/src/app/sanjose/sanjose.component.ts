import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  city: any[] = [];
  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    console.log('san jose');
    this._weatherService.getWeather('san jose');
    this._weatherService.city.subscribe((city) => {this.city = city; } );
  }

}
