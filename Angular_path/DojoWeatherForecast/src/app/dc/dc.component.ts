import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  city: any[] = [];
  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    console.log('washington dc');
    this._weatherService.getWeather('washington dc');
    this._weatherService.city.subscribe((city) => {this.city = city; } );
  }

}
