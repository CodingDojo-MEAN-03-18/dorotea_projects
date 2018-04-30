import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';



@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  city: any[] = [];

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    console.log('burbank');
    this._weatherService.getWeather('burbank');
    this._weatherService.city.subscribe((city) => {this.city = city; } );
  }

}
