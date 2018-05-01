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

  getGoldFromChild(total_gold) {
    this.total_gold = total_gold;
  }


  ngOnInit() {
    this.total_gold = this._dataService.retrieveGold();
  }
}
