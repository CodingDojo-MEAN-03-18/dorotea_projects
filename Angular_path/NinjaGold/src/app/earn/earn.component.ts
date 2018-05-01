import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-earn',
  templateUrl: './earn.component.html',
  styleUrls: ['./earn.component.css']
})
export class EarnComponent implements OnInit {
  gold = 0;
  log: any[] = [];
  constructor(private _dataService: DataService ) { }

  ngOnInit() {
    this.gold = this._dataService.retrieveGold();
  }

  genFarm() {
    console.log('farming!');
    this._dataService.farm();
    console.log(this.gold);
    this.gold = this._dataService.retrieveGold();
    this.log = this._dataService.retrieveLog();
    console.log(this.log);
  }

  genCave() {
    console.log('cave!');
    this._dataService.cave();
    console.log(this.gold);
    this.gold = this._dataService.retrieveGold();
    this.log = this._dataService.retrieveLog();
    console.log(this.log);
  }

  genCasino() {
    console.log('casino!');
    this._dataService.casino();
    console.log(this.gold);
    this.gold = this._dataService.retrieveGold();
    this.log = this._dataService.retrieveLog();
    console.log(this.log);
  }

  genHouse() {
    console.log('house!');
    this._dataService.house ();
    console.log(this.gold);
    this.gold = this._dataService.retrieveGold();
    this.log = this._dataService.retrieveLog();
    console.log(this.log);
  }
}
