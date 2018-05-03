import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-submit-note',
  templateUrl: './submit-note.component.html',
  styleUrls: ['./submit-note.component.css']
})
export class SubmitNoteComponent implements OnInit {
  data: any[] = [];
  userData: any;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log(this.data);
    this._dataService.getData(this.data);
    this._dataService.data.subscribe((data) => {this.userData = data; });
  }
}
