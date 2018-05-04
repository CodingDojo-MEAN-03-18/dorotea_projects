import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { Note } from '../note';

@Component({
  selector: 'app-submit-note',
  templateUrl: './submit-note.component.html',
  styleUrls: ['./submit-note.component.css']
})
export class SubmitNoteComponent implements OnInit {
  data: any[''] = '';
  notes: any[''] = '';
  userData: any;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

    onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('ran onSubmit');
    this._dataService.getData(this.data);
    console.log(this.data);
    this._dataService.data.subscribe((data) => {this.userData = data; });
    form.reset();
  }
    }

