import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  city: any[] = [];
  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    console.log('seattle');
    this._weatherService.getWeather('seattle');
    this._weatherService.city.subscribe((city) => {this.city = city; } );
  }

}
