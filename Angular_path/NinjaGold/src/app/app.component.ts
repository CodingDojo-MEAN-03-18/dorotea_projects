import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private _dataService: DataService ) { }
  total_gold = 0;


  ngOnInit() {
    this.total_gold = this._dataService.retrieveGold();
  }
}
